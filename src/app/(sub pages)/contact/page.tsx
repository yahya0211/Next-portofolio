"use client";
import Image from "next/image";
import bg from "../../../../public/Background/contact-background.png";
import Form from "../../components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image src={bg} alt="background-image" className="w-full fixed top-0 left-0 h-full object-cover object-center -z-50 opacity-80" />
      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">Contact Me</h1>
        </div>
        <Form />
      </article>
    </>
  );
}
