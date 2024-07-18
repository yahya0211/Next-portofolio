"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const sendEmail = (params: any) => {
    const toastId = toast.loading("Sending your message, please wait");
    emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, params, process.env.NEXT_PUBLIC_PUBLIC_KEY as string).then(
      () => {
        toast.success("I have recieved your message", {
          id: toastId,
        });
      },
      (error: any) => {
        console.log("FAILED...", error.text);
        toast.error("There was a trouble to sending your message", {
          id: toastId,
        });
      }
    );
  };

  const onSubmit = (data: FormData) => {
    const templateParams = {
      to_name: "Yahya",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col items-center justify-center space-y-4 text-white">
        <input
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "Name should be at least 3 character long",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}

        <input type="email" placeholder="email" {...register("email", { required: "This field is required!" })} className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <textarea
          {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 500,
              message: "Message should be less more than 500 characters",
            },
          })}
          placeholder="message"
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}

        <input
          value={"Cast your message"}
          className="px-10 py-4 rounded-md shadow-lg bg-background border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          type="submit"
        />
      </form>
    </>
  );
}
