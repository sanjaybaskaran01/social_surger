import React from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";

function ContactUs() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    const responsePromise = fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error in sending email.");
      }
    });

    toast.promise(
      responsePromise,
       {
         loading: 'Sending Email',
         success: <b>Email sent successfully!</b>,
         error: <b>Email failed.</b>,
       }
     );
    
  };

  return (
    <section
      id="contactUs"
      className="flex justify-center pt-24 sm:pb-52 mx-auto px-6 container"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="container text-center lg:text-left flex flex-col  gap-2">
          <p className="font-bold text-4xl sm:text-6xl  mb-4">
            <span className="bg-[#F3A120] hover:bg-[#fffcf4] hover:text-[#F3A120] transition ease-in-out duration-300 text-white">
              15 Minutes
            </span>{" "}
            Call
          </p>
          <p className="font-medium mb-8 sm:text-lg">
            Click here to choose a time that suits you, and we&apos;ll send you
            a video call invite to have a 15-min call and see how we can work
            together. Or, feel free to send us an email using the contact form
            first, and we&apos;ll get back to you within 24 hours!
          </p>
          <Link
            href="https://calendly.com/socialsurger/consultation-call"
            target="_blank"
            className="justify-center cursor-pointer flex  flex-col transition ease-in-out duration-300 bg-white rounded-3xl border-4 border-[#222] hover:shadow-[10px_10px_0_0_#0b0b0b]"
          >
            <p className="p-[35px_40px_40px] text-lg text-center md:text-3xl font-bold">
              Schedule our first call
            </p>
          </Link>
        </div>
        <div className="justify-end">
          <div className="flex flex-col sm:p-[25px_20px]   justify-center shadow-[7px_7px_0_0_#222] border-4 border-[#222] rounded-3xl bg-white">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 px-3 py-5 gap-y-8 items-center">
                <div className="flex flex-col col-span-2 md:col-span-1 ">
                  <label className="ml-1">Name</label>
                  <input
                    type="text"
                    required
                    name="name"
                    className="p-[16px_24px] border-4 mt-2 border-[#222] rounded-2xl text-lg w-full outline-none hover:shadow-[5px_5px_0_0_#222] focus:shadow-[5px_5px_0_0_#222] transition duration-300 ease-in-out"
                    placeholder="John Wick"
                  />
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <label className="ml-1">Email</label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="johnwick@email.com"
                    className="p-[16px_24px] border-4 mt-2 border-[#222] rounded-2xl text-lg w-full outline-none hover:shadow-[5px_5px_0_0_#222] focus:shadow-[5px_5px_0_0_#222] transition duration-300 ease-in-out"
                  />
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <label className="ml-1">Company name</label>
                  <input
                    type="text"
                    required
                    name="company"
                    placeholder="ACME"
                    className="p-[16px_24px] mt-2 border-4 border-[#222] rounded-2xl text-lg w-full outline-none hover:shadow-[5px_5px_0_0_#222] focus:shadow-[5px_5px_0_0_#222] transition duration-300 ease-in-out"
                  />
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <label className="">Subject</label>
                  <input
                    type="text"
                    required
                    name="subject"
                    placeholder="Select"
                    className="p-[16px_24px] border-4 mt-2 border-[#222] rounded-2xl text-lg w-full outline-none hover:shadow-[5px_5px_0_0_#222] focus:shadow-[5px_5px_0_0_#222] transition duration-300 ease-in-out"
                  />
                </div>
                <div className="flex flex-col col-span-2">
                  <label className="ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    maxLength={5000}
                    placeholder="Please write your message..."
                    className="mt-2 max-h-52 max-w-full min-h-[144px] min-w-full p-6 border-4 rounded-3xl bg-white outline-none  shadow-[5px_5px_0_0_#222] border-[#222]"
                  />
                </div>
                <input
                  type="submit"
                  value="Send Message"
                  className="text-xl  cursor-pointer justify-self-start outline  bg-surger_purple rounded-2xl transition text-center border-none  w-full py-5 ml-1 text-white ease-in-out duration-300 hover:-translate-y-1 font-bold hover:bg-[#f2a11f] "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
