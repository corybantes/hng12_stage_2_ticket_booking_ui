"use client";

import React from "react";
import ImageUpload from "./imageUpload";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { Progress } from "./ui/progress";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
const Step2form = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="bg-form-bg border border-form-bd p-6 md:p-12 rounded-3xl text-white">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-[jeju]">Attendee Details</h2>
          <span className="text-base">Step 2/3</span>
        </div>
        <Progress value={66} className="" />
        {/* seperator */}
      </div>
      <div className="">
        <ImageUpload />
      </div>
      <div className="w-full h-2px border-2 border-form-bd bg-form-bd my-7" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your email*</FormLabel>
                <div className="relative">
                  {/* White Mail Icon */}
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                    size={20}
                  />

                  {/* Input Field */}
                  <FormControl>
                    <Input {...field} type="email" className="pl-10 " />
                  </FormControl>
                </div>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Special request?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Textarea" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4 flex-col md:flex-row">
            <Button variant={"tertiary"} className="w-full">
              Back
            </Button>
            <Button type="submit" variant={"secondary"} className="w-full">
              Get My Free Ticket
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Step2form;
