"use client";

import * as z from "zod";
import Heading from "@/components/heading";
import { BookA } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-hot-toast";


import { languagesOptions, formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useProModal } from "@/hooks/use-pro-modal";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import ReactMarkdown from "react-markdown";
import CopyToClipboardButton from "@/components/copytoclipboard";
import { Textarea } from "@/components/ui/textarea";

interface ChatCompletionRequestMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
    name?: string;
}

const ImagePage = () => {
    const proModal = useProModal();
    const router = useRouter();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
    const form = useForm<z.infer<typeof formSchema>>(
        {
            resolver: zodResolver(formSchema),
            defaultValues: {
                prompt: "",
                language: "Italian",
            }
        }
    )

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {

            const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt};
            const newMessages = [...messages, userMessage];
            
            const response = await axios.post('/api/smart-translation', { messages: newMessages, language: values.language});
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
              title="Smart Translation"
              description="Translate your email to any language with the power of AI."
              icon={BookA}
              iconColor="text-pink-700"
              bgColor="bg-pink-700/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form
                     {...form}
                    >
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-10 gap-2"
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-6">
                                        <FormControl
                                         className="m-0 p-0"
                                        >
                                             <Textarea
                                             className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent "
                                             disabled={isLoading}
                                             
                                             placeholder="Select the destination language and then type your email!"
                                            {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                                
                            />
                            <FormField 
                             control={form.control}
                             name="language"
                             render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-2">
                                  <Select
                                   disabled={isLoading}
                                   onValueChange={field.onChange}
                                   value={field.value}
                                   defaultValue={field.value}
                                  >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue defaultValue={field.value}/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {languagesOptions.map((option) => (
                                         <SelectItem
                                          key={option.value}
                                          value={option.value}
                                         >
                                            {option.label}
                                         </SelectItem>
                                        ))}
                                    </SelectContent>
                                  </Select>
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
                            <div className="p-20">
                                <Loader />
                            </div>
                        )
                        }
                        {messages.length === 0 && !isLoading && (
                            <Empty label="No translations generated."/>
                        )}                        
                    
                    </div>
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
                                            code: ({ node, ...props }) => (
                                                <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                                                    <code {...props} />
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


    )
    }

export default ImagePage;