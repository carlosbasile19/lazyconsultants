import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";
import { SubscriptionButtonSpecial } from "@/components/subscription-button-special";
import { checkLifetimeSubscription, checkSubscription } from "@/lib/subscription";
import { SPECIAL_OFFER_OPTION_STATUS } from "@/constants";
import { SubscriptionButton } from "@/components/subscription-button";

const SettingsPage = async () => {
  const isPro = await checkSubscription();
  const isLifetime = await checkLifetimeSubscription();

  return ( 
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4 space-x-2">
        <div className="text-muted-foreground text-sm">
          {!isPro && !isLifetime && "You are currently on a free plan."}
          {isPro && !isLifetime && "You have a pro subscription."}
          {isLifetime && "You have a lifetime subscription."}

        </div>
          { !isLifetime &&  (
              <SubscriptionButton isPro={isPro} />
            )
          }
          
          {
            (SPECIAL_OFFER_OPTION_STATUS === "ACTIVE" && !isLifetime && !isPro) &&  (
              <SubscriptionButtonSpecial />
            )
          }
      </div>
    </div>
   );
}
 
export default SettingsPage;
