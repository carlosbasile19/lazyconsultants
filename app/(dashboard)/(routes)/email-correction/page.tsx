"use client";


import * as z from "zod";
import Heading from "@/components/heading";
import { Code, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { toast } from "react-hot-toast";

import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import { useProModal } from "@/hooks/use-pro-modal";
import CopyToClipboardButton from "@/components/copytoclipboard";

interface ChatCompletionRequestMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
    name?: string;
}

declare module 'react' {
  interface IntrinsicElements {
    copytoclipboard: any;
  }
}

const CodePage = () => {

    
    const proModal = useProModal();
    const router = useRouter();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
    const form = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
            defaultValues: {
                prompt: ""
            }
        }
    )

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
          const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
          const newMessages = [...messages, userMessage];
          
          const response = await axios.post('/api/email-correction', { messages: newMessages });
          setMessages((current) => [...current, userMessage, response.data]);
          
          form.reset();
        } catch (error: any) {
            if(error?.response?.status === 403){
                proModal.onOpen();
           }else
              toast.error("Something went wrong.");
        } finally {
          router.refresh();
        }
      }

    return (
        <div>
            <Heading
              title="Email Auto-Correction"
              description="Correct your email like a pro."
              icon={Mail}
              iconColor="text-orange-500"
              bgColor="bg-violet-500/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form
                     {...form}
                    >
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl
                                         className="m-0 p-0"
                                        >
                                            <Textarea
                                             className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent "
                                             disabled={isLoading}
                                             
                                             placeholder="Type your email here!"
                                            {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button
                             className="col-span-12 lg:col-span-2 w-full"
                             disabled={isLoading}
                            >
                                Generate
                            </Button>
                        </form>
                    </Form>
                    <div className="space-y-4 mt-4">
                        {isLoading && (
                            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                                <Loader />
                            </div>
                        )
                        }
                        {messages.length === 0 && !isLoading && (
                            <Empty label="No email autocorrection started."/>
                        )}
                       <div className="flex flex-col-reverse gap-y-4">
                            {messages.map((message) => (
                                    <div 
                                        key={message.content}
                                        className={cn(
                                            "p-8 w-full flex items-start gap-8 rounded-lg relative", // Add relative positioning
                                            message.role === "user" ? "bg-while border border-black/10 ": "bg-muted"
                                        )}
                                    >
                                        {message.role === "user" ? 
                                            <UserAvatar/> : <BotAvatar/>
                                        }
                                        
                                        <ReactMarkdown components={{
                                            pre: ({ node, ...props }) => (
                                                <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                                                    <pre {...props} />
                                                </div>
                                            ),
                                        }} className="text-sm overflow-hidden leading-7">
                                            {message.content || ""}
                                        </ReactMarkdown>
                                        
                                        {message.role === "user" ? 
                                            "" : (
                                                <div className="absolute bottom-0 right-0 mb-4 mr-4"> {/* Position the button */}
                                                    <CopyToClipboardButton text={message.content} />
                                                </div>
                                            )
                                        }
                                    </div> 
                                ))}
                        </div>

                    
                    </div>
                </div>
            </div>
        </div>


    )
    }

export default CodePage;