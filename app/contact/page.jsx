"use client";
import React from "react";
import { MailIcon, User2Icon, PenIcon } from "lucide-react";
import Custom_Form from "@/components/Custom_Form";

const Contact = () => {
  return (
    <section>
      <div className="container  mx-auto">
        {" "}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center ">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4 ">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello! 
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
          </div>
          <div className="hidden xl:flex w-full bg-contact dark:bg-contact bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32 ">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg ">
            <div className="flex items-center gap-x-8">
              <User2Icon size={18} className="text-primary" />
              <div>John Doe</div>
            </div>
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>exampleemail@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <PenIcon size={18} className="text-primary" />
              <div>Sample Message </div>
            </div>
          </div>
          <Custom_Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
