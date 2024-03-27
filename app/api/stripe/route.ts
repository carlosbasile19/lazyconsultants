import {auth, currentUser } from "@clerk/nextjs"
import {NextResponse} from "next/server"

import prismadb from "@/lib/dbprisma"
import stripe from "@/lib/stripe"
import { absoluteUrl } from "@/lib/utils"


const settingsUrl = absoluteUrl("/settings")

export async function GET( req: Request) {
   try {
     const {userId} = auth()
     const user = await currentUser()
     let stripeSession: any
     const url = new URL(req.url)
     const searchParams = new URLSearchParams(url.searchParams)
     const offerCode = searchParams.get("offerCode")
    
     
        if (!user || !userId) {
             return new NextResponse("Unauthorized", {status: 401})
        }

        const userSubscription = await prismadb.userSubscription.findFirst({
            where: {
                userId: userId,
            }
        })

        if (userSubscription && userSubscription.stripeCurrentPeriodEnd! > new Date("2080-01-01")) {
            return new NextResponse("Already Lifetime User", {status: 200})

        }

        if (userSubscription && userSubscription.stripeCustomerId) {

            const stripeSession = await stripe.billingPortal.sessions.create({
                customer: userSubscription.stripeCustomerId,
                return_url: settingsUrl
            })

            return new NextResponse(JSON.stringify({url: stripeSession.url}), {status: 200})

        }

        if(process.env.SPECIAL_OFFER_OPTION_STATUS === "ACTIVE" && offerCode === process.env.SPECIAL_OFFER_OPTION_CODE){
           stripeSession = await stripe.checkout.sessions.create({
            success_url: settingsUrl,
            cancel_url: settingsUrl,
            payment_method_types: ["card"],
            mode: "payment",
            billing_address_collection: "auto",
            customer_email: user.emailAddresses[0].emailAddress,
            line_items: [
              {
                price_data: {
                  currency: "USD",
                  product_data: {
                    name: "Lazy Consultants Partner Offer",
                    description: "Lifetime Access"
                  },
                  unit_amount: 7000,
                  
                },
                quantity: 1,
              },
            ],
            metadata: {
              userId,
            },
          })
        } else{

           stripeSession = await stripe.checkout.sessions.create({
            success_url: settingsUrl,
            cancel_url: settingsUrl,
            payment_method_types: ["card"],
            mode: "subscription",
            billing_address_collection: "auto",
            customer_email: user.emailAddresses[0].emailAddress,
            line_items: [
              {
                price_data: {
                  currency: "USD",
                  product_data: {
                    name: "Lazy Consultants Pro",
                    description: "Unlimited AI Generations"
                  },
                  unit_amount: 4500,
                  recurring: {
                    interval: "year"
                  }
                },
                quantity: 1,
              },
            ],
            metadata: {
              userId,
            },
          
          })
        }

        return new NextResponse(JSON.stringify({url: stripeSession.url}), {status: 200})


   } catch (error) {
     console.log("[STRIPE_ERROR]", error)
     return new NextResponse("Internal error", {status: 500})
   }

}

