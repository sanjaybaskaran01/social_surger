import React from "react";
import Card from "./Card";

type Props = {};

function ContactUs({}: Props) {
  return (
    <section
      id="contactUs"
      className="h-screen flex justify-center px-6 pt-24 pb-52 mx-auto container"
    >
      <div className="grid grid-cols-2 items-center gap-14">
        <div className="container flex flex-col w-3/4 gap-2">
          <p className="font-bold text-7xl mb-4">
            <span className="bg-[#F3A120] text-white">Contact</span> us
          </p>
          <p className="font-medium mb-8 text-lg">
            Click here to choose a time that suits you, and we&apos;ll send you a
            video call invite to have a 30-min call and see how we can work
            together. Or, feel free to send us an email using the contact form
            first, and we&apos;ll get back to you within 24 hours!
          </p>
          <div className="w-3/4">
            <Card content="" header="Schedule our first call" className="hover:text-surger_purple" />
          </div>
        </div>
        <div className="justify-end">
          <div className="flex flex-co p-[55px_50px] justify-center shadow-[7px_7px_0_0_#222] border-4 border-[#222] rounded-3xl bg-white m-[0_0_15px]">
            <form>
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 items-center">
                <div className="relative font-bold">
                  <label className="ml-1">Name</label>
                  <input
                    type="text"
                    required
                    className="p-[16px_24px] border-4 mt-2 border-[#222] rounded-2xl text-lg w-full outline-none hover:shadow-[5px_5px_0_0_#222] focus:shadow-[5px_5px_0_0_#222] transition duration-300 ease-in-out"
                    placeholder="John Carter"
                  />
                </div>
                <div className="relative font-bold">
                  <label className="ml-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="contact@email.com"
                    className="p-[16px_24px] border-4 mt-2 border-[#222] rounded-2xl text-lg w-full outline-none hover:shadow-[5px_5px_0_0_#222] focus:shadow-[5px_5px_0_0_#222] transition duration-300 ease-in-out"
                  />
                </div>
                <div className="relative font-bold">
                  <label className="ml-1">Company name</label>
                  <input
                    type="text"
                    required
                    placeholder="ACME"
                    className="p-[16px_24px] mt-2 border-4 border-[#222] rounded-2xl text-lg w-full outline-none hover:shadow-[5px_5px_0_0_#222] focus:shadow-[5px_5px_0_0_#222] transition duration-300 ease-in-out"
                  />
                </div>
                <div className="relative font-bold">
                  <label className="">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Select"
                    className="p-[16px_24px] border-4 mt-2 border-[#222] rounded-2xl text-lg w-full outline-none hover:shadow-[5px_5px_0_0_#222] focus:shadow-[5px_5px_0_0_#222] transition duration-300 ease-in-out"
                  />
                </div>
                <div className="relative font-bold col-span-2">
                  <label className="ml-1">Message</label>
                  <textarea id="message" name="Message" maxLength={5000} placeholder="Please write your message..." className="mt-2 max-h-52 max-w-full min-h-[144px] min-w-full p-6 border-4 rounded-3xl bg-white outline-none  shadow-[5px_5px_0_0_#222] border-[#222]"/>
                </div>
                <input type="submit" value="Send Message" className="text-2xl cursor-pointer justify-self-start outline  bg-surger_purple rounded-2xl transition text-center border-none px-7 py-5 text-white ease-in-out duration-300 hover:-translate-y-1 font-bold hover:bg-[#f2a11f] " />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
