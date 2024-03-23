"use client"

import { useProModal } from "@/hooks/use-pro-modal"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Check, Zap } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { SPECIAL_OFFER_OPTION_STATUS, tools } from "@/constants";

export const ProModal = () => {

    const proModal = useProModal();
    const [loading, setLoading] = useState(false);

    const onSubscribe = async (isSpecialOffer: boolean ) => {
        try {

          setLoading(true);
            let response;
         
          if (isSpecialOffer && SPECIAL_OFFER_OPTION_STATUS === "ACTIVE") {
             response = await axios.get("/api/stripe?offerCode=PARTNER_OFFER");
          } else {
             response = await axios.get("/api/stripe");
          }
    
          window.location.href = response.data.url;
        } catch (error) {
           toast.error("Something went wrong");
        } finally {
          setLoading(false);
        }
      }


    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-3 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade to Lazy Consultants
                            <Badge variant="premium" className="uppercase text-sm py-1">
                                pro
                            </Badge>
                        </div>
                        <div className="text-base flex items-center gap-x-2 text-md py-1">
                             And get unilimited access to all tools
                        </div>
                        
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool) => (
                            <Card
                              key={tool.label}
                              className="p-2 border-black/5 flex items-center justify-between "
                            >
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                        <tool.icon className={cn("w-6 h-6",tool.color)} />
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                </div>
                                <Check className="text-primary w-5 h-5"/>
                            </Card>

                            ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter >
                    
                    <Button
                        disabled={loading}
                        onClick={() => onSubscribe(false)}
                        size="lg"
                        variant="premium"
                        className="w-full"
                    >
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                    {
                        // Special Offer
                        SPECIAL_OFFER_OPTION_STATUS === "ACTIVE" && (
                            <Button
                                 disabled = {loading}
                                 onClick={() => onSubscribe(true)}
                                 size="lg"
                                 variant="golden"
                                 className="w-full mb-2"
                                 
                                >
                                    Special Offer
                                    <Zap className="w-4 h-4 ml-2 fill-white" />
                            </Button>
                        )
                    }
                    
                  
             
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}