"use client";
import React, { useState } from "react";
import { Home, Phone, Mail, Clock, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { sendFunc } from "@/lib/sendFunc";
import toast from "react-hot-toast";

interface ContactItemData {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
}

const contactItems: ContactItemData[] = [
  {
    id: 2,
    icon: Phone,
    title: "Phone",
    description: "+91 9819817022",
    color: "text-pink-400",
  },
  {
    id: 4,
    icon: Clock,
    title: "Work Hours",
    description: "Mon-Sat : 9am - 9pm",
    color: "text-purple-400",
  },
  {
    id: 3,
    icon: Mail,
    title: "Email",
    description: "dreamcatcherstudio7@gmail.com",
    color: "text-green-400",
  },

  {
    id: 1,
    icon: Home,
    title: "Location",
    description:
      "1st Floor, Suyog Industrial Estate, 42, Lal Bahadur Shastri Marg, Gandhi Nagar, Vikhroli West, Mumbai, Maharashtra 400083",
    color: "text-indigo-400",
  },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  request: string;
}

const ContactItem: React.FC<{ item: ContactItemData }> = ({ item }) => {
  const Icon = item.icon;
  const bgColorClass = item.color.replace("text-", "bg-").replace("400", "500");

  return (
    <div className="flex items-start space-x-4">
      <div
        className={`p-3 rounded-full ${bgColorClass} bg-opacity-20 w-fit shrink-0`}
      >
        <Icon className={`w-5 h-5 ${item.color}`} />
      </div>
      <div>
        <h4 className="title text-lg font-semibold text-white">{item.title}</h4>
        <p className="icon-box-description text-gray-300">{item.description}</p>
      </div>
    </div>
  );
};

const MessagePopup: React.FC<{
  message: string | null;
  onClose: () => void;
}> = ({ message, onClose }) => {
  if (!message) return null;

  const isSuccess = message.toLowerCase().includes("successfully");
  const title = isSuccess ? "Success!" : "Error";
  const iconColor = isSuccess ? "text-green-500" : "text-red-500";
  const Icon = isSuccess ? CheckCircle : XCircle;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full transform scale-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Icon className={`w-6 h-6 mr-2 ${iconColor}`} /> {title}
        </h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className={`w-full ${
            isSuccess
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-gray-600 hover:bg-gray-700"
          } text-white py-2 rounded-lg font-semibold transition`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    request: "",
  });
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.request) {
      toast.error("Please fill all the required fields");
      return;
    }

    setLoading(true);
    toast.loading("Sending your message...", { id: "sendMsg" });

    const success = await sendFunc(
      formData.name,
      formData.email,
      formData.phone,
      formData.subject,
      formData.request
    );

    toast.dismiss("sendMsg");
    setLoading(false);

    if (success) {
      toast.success("Message sent! We'll Contact you soon.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        request: "",
      });
    } else {
      toast.error("Something went wrong ❌ Please try again later");
    }
  };

  const handleCloseMessage = () => {
    setMessage(null);
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white flex items-center justify-center"
    >
      <div className=" w-full templateContainer  md:grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="py-8 md:py-0">
          <h5 className="text-sm uppercase tracking-widest text-white font-medium mb-2">
            Contact Us
          </h5>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">Get In Touch</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className={`${
                  item.title === "Location" || item.title === "Email"
                    ? "sm:col-span-2 border-yellow-500/30"
                    : "border-gray-800"
                } bg-gradient-to-b from-[#0a0a0a] to-[#111] border rounded-xl p-6 group hover:shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start space-x-4">
                  {/* Icon bubble */}
                  <div
                    className={`p-3 rounded-lg bg-black border border-gray-800 group-hover:border-yellow-500/40 transition-all`}
                  >
                    <item.icon
                      className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">
                      {item.title}
                    </h4>
                    <p
                      className={`text-gray-400 text-sm leading-relaxed ${
                        item.title === "Location" ? "max-w-md" : ""
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="bg-black p-8 md:p-10 rounded-xl shadow-2xl mt-12 md:mt-0">
          <h2 className="text-3xl text-white mb-6 font-light tracking-tight">
            Leave A Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-b-2 border-gray-700 bg-transparent focus:border-yellow-500 w-full py-3 px-1 text-base outline-none transition-colors placeholder:text-gray-500 text-gray-200"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-b-2 border-gray-700 bg-transparent focus:border-yellow-500 w-full py-3 px-1 text-base outline-none transition-colors placeholder:text-gray-500 text-gray-200"
              />
            </div>

            {/* Email + Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-b-2 border-gray-700 bg-transparent focus:border-yellow-500 w-full py-3 px-1 text-base outline-none transition-colors placeholder:text-gray-500 text-gray-200"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border-b-2 border-gray-700 bg-transparent focus:border-yellow-500 w-full py-3 px-1 text-base outline-none transition-colors placeholder:text-gray-500 text-gray-200"
              />
            </div>

            {/* Message */}
            <textarea
              name="request"
              placeholder="Your Request"
              value={formData.request}
              onChange={handleChange}
              rows={6}
              required
              className="border-b-2 border-gray-700 bg-transparent focus:border-yellow-500 w-full py-3 px-1 text-base outline-none transition-colors resize-none placeholder:text-gray-500 text-gray-200"
            />

            {/* Submit Button */}
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-white text-black font-semibold py-4 rounded-md hover:bg-yellow-400 transition duration-300 shadow-md uppercase tracking-wide"
            >
              {loading ? "Sending" : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <MessagePopup message={message} onClose={handleCloseMessage} />
    </section>
  );
};

export default ContactSection;
