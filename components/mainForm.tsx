"use client";
import React, { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import {
  Form,
  FormControl,
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
import ImageUpload from "./imageUpload";
import Step3form from "@/components/step3form";

const TicketList = [
  {
    ticketType: "free",
    accessType: "Regular Access",
    ticketPrice: "free",
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

const formSchema = z.object({
  ticket: z.string().min(2, { message: "Please select a ticket type." }),
  numberOfTickets: z
    .string()
    .min(1, { message: "Select at least one ticket." }),
  username: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Enter a valid email address." }),
  textArea: z.string().optional(),
});

const MainForm = () => {
  const [ticketType, setTicketType] = useState("free");
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(1);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const [defaultValues, setDefaultValues] = useState({
    username: "",
    email: "",
    ticket: "",
    numberOfTickets: "1",
    textArea: "Nil",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDefaultValues({
        username: localStorage.getItem("username") || "",
        email: localStorage.getItem("email") || "",
        ticket: localStorage.getItem("ticket") || "",
        numberOfTickets: localStorage.getItem("numberOfTickets") || "1",
        textArea: localStorage.getItem("textArea") || "Nil",
      });
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    const storedPreview = localStorage.getItem("preview");
    if (storedPreview) {
      setPreview(storedPreview);
    }
  }, []);

  useEffect(() => {
    const subscription = form.watch((values) => {
      Object.keys(values).forEach((key) => {
        localStorage.setItem(key, values[key as keyof typeof values] || "");
      });
    });

    return () => subscription.unsubscribe();
  });

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleNext = () => setStep(step + 1);

  const handleChange = (value: string, index: number) => {
    setTicketType(value);
    setSelected(index);
    localStorage.setItem("ticket", value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      localStorage.setItem("preview", previewUrl);
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image.");

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = async () => {
      const base64Image = reader.result;
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64Image }),
      });

      const data = await res.json();
      if (data.url) {
        alert("Upload successful!");
        console.log("Image URL:", data.url);
        setPreview(data.url);
        localStorage.setItem("preview", data.url);
      } else {
        alert("Upload failed.");
      }
    };
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleUpload();
    console.log(values);
  }
  return (
    <div>
      <div className=" w-[85%] md:w-[80%] mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div>
              {/* Step 1 Form */}
              {step === 1 && (
                <div className="bg-form-bg border border-form-bd p-6 md:p-12 rounded-3xl text-white my-8">
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
                    <div className="mb-8">
                      <div className="flex md:flex-row gap-5 flex-col justify-between bg-ticketType-bg border border-ticketType-bd rounded-3xl p-4 my-2 ">
                        {TicketList.map((ticket, index) => (
                          <button
                            key={index}
                            className={`w-full text-left ${
                              selected === index
                                ? "bg-ticketType-selected rounded-xl"
                                : ""
                            }`}
                            onClick={() =>
                              handleChange(ticket.ticketType, index)
                            }
                          >
                            <TicketType
                              ticketPrice={ticket.ticketPrice}
                              accessType={ticket.accessType}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <FormField
                      control={form.control}
                      name="numberOfTickets"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Tickets</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={"1"}
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
                  <div className="flex flex-col md:flex-row gap-4">
                    <Button
                      variant="tertiary"
                      className="w-full"
                      onClick={() => handleBack()}
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      className="w-full"
                      onClick={() => handleNext()}
                    >
                      Get My Free Ticket
                    </Button>
                  </div>
                </div>
              )}
              {/* End of Step 1 form  */}
              {/* Start of Step 2 form */}
              {step === 2 && (
                <div className="bg-form-bg border border-form-bd p-6 md:p-12 rounded-3xl text-white my-8">
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                      <h2 className="font-[jeju]">Attendee Details</h2>
                      <span className="text-base">Step 2/3</span>
                    </div>
                    <Progress value={66} className="" />
                  </div>
                  <div className="">
                    <ImageUpload
                      profile={preview}
                      handleFileChange={handleFileChange}
                    />
                  </div>
                  <div className="w-full h-2px border-2 border-form-bd bg-form-bd my-7" />
                  <div className="flex flex-col gap-2">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter your name</FormLabel>
                          <FormControl>
                            <Input placeholder="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enter your email*</FormLabel>
                          <div className="relative">
                            <Mail
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
                              size={20}
                            />
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                className="pl-10 "
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="textArea"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special request?</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Textarea" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="my-4 flex gap-4 flex-col md:flex-row">
                    <Button
                      variant={"tertiary"}
                      className="w-full"
                      onClick={() => handleBack()}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      variant={"secondary"}
                      className="w-full"
                      onClick={() => handleNext()}
                    >
                      Get My Free Ticket
                    </Button>
                  </div>
                </div>
              )}
              {/* End of Step 2 Form */}
              {/* Start of Step 3 Form */}
            </div>
            {step === 3 && (
              <Step3form
                name={form.getValues("username")}
                email={form.getValues("email")}
                ticketNumber={parseInt(form.getValues("numberOfTickets")) || 1}
                ticketType={ticketType.toUpperCase()}
                specialRequest={form.getValues("textArea")}
                profile={preview}
                handleTicket={() => setStep(1)}
                handleDownload={() => setStep(1)}
              />
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default MainForm;
