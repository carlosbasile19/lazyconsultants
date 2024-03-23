import Stripe from "stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"

import prismadb from "@/lib/dbprisma"
import  stripe  from "@/lib/stripe"

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session

  if (event.type === "checkout.session.completed") {

    if (!session?.metadata?.userId) {
      return new NextResponse("User id is required", { status: 400 });
    }
 
    if (session.payment_status === "unpaid") {
      return new NextResponse("Payment is unpaid", { status: 400 });
    }

    try {

          const payment_intent = await stripe.paymentIntents.retrieve(
            session.payment_intent as string
          )
          

          // Special Offers

          if (payment_intent && payment_intent.amount_received === 15000) {
         
            await prismadb.userSubscription.create({
              data: {
                userId: session?.metadata?.userId,
                stripeSubscriptionId: payment_intent.id,
                stripeCustomerId: payment_intent.customer as string,
                stripePriceId: payment_intent.latest_charge as string,
                stripeCurrentPeriodEnd: new Date(
                  "2099-12-31T23:59:59.000Z"
                ),
              },
            })

            return new NextResponse(null, { status: 200 })

          }

      } catch (error) {
        console.log("This is not a special offer")
      }

    // Normal Subscription

    try {

            const subscription = await stripe.subscriptions.retrieve(
              session.subscription as string
            )

            await prismadb.userSubscription.create({
              data: {
                userId: session?.metadata?.userId,
                stripeSubscriptionId: subscription.id,
                stripeCustomerId: subscription.customer as string,
                stripePriceId: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: new Date(
                  subscription.current_period_end * 1000
                ),
              },
            })
      } catch (error) {
          console.log("This is not a subscription")
      }
  }

  if (event.type === "invoice.payment_succeeded") {

    if (!session?.metadata?.userId) {
      return new NextResponse("User id is required", { status: 400 });
    }
     
      try {

        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string
        )
  
        await prismadb.userSubscription.update({
          where: {
            stripeSubscriptionId: subscription.id,
          },
          data: {
            stripePriceId: subscription.items.data[0].price.id,
            stripeCurrentPeriodEnd: new Date(
              subscription.current_period_end * 1000
            ),
          },
        })
        
      } catch (error) {
        console.log("This is not a subscription")
      }

      

  }

  return new NextResponse(null, { status: 200 })
};