import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function ContactUs() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ogydzk3", // from EmailJS
        "template_5ylpwlc", // from EmailJS
        form.current,
        "gDOm08i95Bwjfs1s_"   // from EmailJS
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="mt-20 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-gray-600 text-center mb-10">
        Have questions or want to get in touch? Fill out the form below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <div>
            <h2 className="text-lg font-semibold">📍 Address</h2>
            <p className="text-gray-600">
              LDRP Institute of Technology & Research <br />
              Sector-15, Gandhinagar, Gujarat, India
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">📞 Phone</h2>
            <p className="text-gray-600">+91 70416 12135</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">✉️ Email</h2>
            <p className="text-gray-600">bhattshubham274@gmail.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">⏰ Office Hours</h2>
            <p className="text-gray-600">Mon - Fri: 9 AM - 6 PM</p>
            <p className="text-gray-600">Sat: 9 AM - 1 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="bg-white shadow-lg rounded-lg p-8 space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {status && <p className="mt-2 text-sm">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
