"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, ContactInput } from "@/lib/schema";
import SideLogo from "./SideLogo";


const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent!");
        reset();
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="relative bg-[#fff3e9] px-6 sm:px-8 md:px-16 lg:px-[123px] pt-24 md:pt-[140px] lg:pt-[200px]">
      <div className="flex flex-col gap-14 md:gap-20">
        <p className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight w-full">
          Get in Touch with us!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col md:flex-row gap-7">
            <div className="w-full md:w-1/2">
              <input
                {...register("firstName")}
                placeholder="FIRST NAME"
                className="w-full pb-5 bg-transparent border-b border-gray-400 outline-none text-gray-800 placeholder-gray-500"
              />
              {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
            </div>

            <div className="w-full md:w-1/2">
              <input
                {...register("lastName")}
                placeholder="LAST NAME"
                className="w-full pb-5 bg-transparent border-b border-gray-400 outline-none text-gray-800 placeholder-gray-500"
              />
              {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-7">
            <div className="w-full md:w-1/2">
              <input
                {...register("email")}
                type="email"
                placeholder="EMAIL"
                className="w-full pb-5 bg-transparent border-b border-gray-400 outline-none text-gray-800 placeholder-gray-500"
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </div>

            <div className="w-full md:w-1/2">
              <input
                {...register("contact")}
                placeholder="CONTACT"
                className="w-full pb-5 bg-transparent border-b border-gray-400 outline-none text-gray-800 placeholder-gray-500"
              />
              {errors.contact && <span className="text-red-500 text-xs">{errors.contact.message}</span>}
            </div>
          </div>

          <div className="relative w-full pt-5">
            <select
              {...register("service")}
              className="w-full pb-5 bg-[#fff3e9] border-b border-gray-400 text-gray-800 appearance-none text-base font-medium outline-none"
            >
              <option value="">WHAT SERVICES ARE YOU LOOKING FOR ?</option>
              <option value="Studio Rental">{"\u0A00 Studio Rental"}</option>
              <option value="Professional Equipment">{"\u0A00 Professional Equipment"}</option>
              <option value="Production Services">{"\u0A00 Production Services"}</option>
            </select>
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                d="M5 8L10 13L15 8"
                stroke="#4B5563"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
          </div>

          <input
            {...register("comments")}
            placeholder="COMMENTS"
            className="w-full pb-5 bg-transparent border-b border-gray-400 text-gray-800 placeholder-gray-500 outline-none"
          />

          <div className="flex justify-center md:justify-end mt-10">
            <button type="submit" disabled={isSubmitting} className="disabled:opacity-50">
              <SideLogo
                text={isSubmitting ? "Sending..." : "Submit your response"}
                className="gap-3 mt-4 border border-[#603C54] hover:border-white/50 bg-white/10 hover:bg-black/30 rounded-full px-6 py-3 backdrop-blur-2xl transition-colors duration-300"
              />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;