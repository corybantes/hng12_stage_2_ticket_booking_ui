"use client";

import React from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import TicketType from "./ticketType";
import TechemberCard from "./techemberCard";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  ticket: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  numberOfTickets: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const TicketList = [
  {
    ticketType: "free",
    accessType: "Regular Access",
    ticketPrice: 0,
  },
  {
    ticketType: "vip",
    accessType: "vip Access",
    ticketPrice: 150,
  },
  {
    ticketType: "vvip",
    accessType: "vvip Access",
    ticketPrice: 150,
  },
];

const Step1form = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticket: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <div className="bg-form-bg border border-form-bd p-6 md:p-12 rounded-3xl text-white">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-[jeju]">Ticket Selection</h2>
            <span className="text-base">Step 1/3</span>
          </div>
          <Progress value={33} className="" />
        </div>
        <div>
          <TechemberCard />
        </div>
        <div className="w-full h-2px border-2 border-form-bd bg-form-bd my-7" />
        <div className="my-8">
          <h6>Select Ticket Type:</h6>
        </div>
        <Form {...form}>
          <div>
            {" "}
            {/* Ensure a single child */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
              <div className="mb-8">
                {/* Ticket Type Selection */}
                <FormField
                  control={form.control}
                  name="ticket"
                  render={({ field }) => (
                    <FormItem className="m-0 p-0">
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex md:flex-row gap-0 flex-col justify-between bg-ticketType-bg border border-ticketType-bd rounded-3xl p-4 my-2"
                        >
                          {TicketList.map((ticket, id) => (
                            <FormItem key={id} className="w-full m-0 p-0">
                              <FormControl className="m-0 p-0">
                                <RadioGroupItem value={ticket.ticketType} />
                              </FormControl>
                              <TicketType
                                accessType={ticket.accessType}
                                ticketPrice={ticket.ticketPrice}
                              />
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Number of Tickets Selection */}
                <FormField
                  control={form.control}
                  name="numberOfTickets"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Tickets</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select the Number of Tickets" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-4">
                <Button variant="tertiary" className="w-full">
                  Back
                </Button>
                <Button type="submit" variant="secondary" className="w-full">
                  Get My Free Ticket
                </Button>
              </div>
            </form>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Step1form;
