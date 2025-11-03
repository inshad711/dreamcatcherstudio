// "use client";
// import React, { useState } from 'react';

// // --- Icon Components (Replacing jki icons with Lucide-style SVGs) ---

// // Contact Detail Icons
// const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
// );
// const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.67-3.67 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
// );
// const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
// );
// const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
// );

// // Social Media Icons
// const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
// );
// const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 1.1-1.2 2-3 2-4.2 0-.2-.1-.5-.1-.7-1-.3-1.8-.7-2.6-1.3-.8-.7-1.4-1.6-1.8-2.6-.4-1.1-.6-2.2-.6-3.3 0-1.2.3-2.3.8-3.4 1.8 1.4 3.7 2.5 5.8 3.3.4.1.8.2 1.2.2 0-.4-.1-.8-.3-1.2-.2-.5-.6-1-1.1-1.3-.5-.4-1.1-.6-1.8-.7-1.6-.2-3.3 0-4.8.7.6-1.6 1.9-2.8 3.6-3.7 1.7-.8 3.6-1.2 5.5-1.1 1.9.1 3.7.8 5.2 2.1.8-.1 1.6-.4 2.4-.8 0 .8-.2 1.6-.5 2.3-.3.8-.8 1.5-1.4 2.1z" /></svg>
// );
// const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.5" y1="6.5" y2="6.5" /></svg>
// );
// const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17.5V6.5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z" /><polygon points="10 16 10 8 16 12 10 16" /></svg>
// );
// const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
// );

// // --- Data Structures ---

// interface ContactItemData {
//     id: number;
//     icon: React.FC<React.SVGProps<SVGSVGElement>>;
//     title: string;
//     description: string;
//     color: string; // Tailwind color class for icon stroke/fill
// }

// const contactItems: ContactItemData[] = [
//     {
//         id: 1,
//         icon: HomeIcon,
//         title: 'Location',
//         description: 'Jl. Sunset Road No.46',
//         color: 'text-indigo-500', // Pastel Blue
//     },
//     {
//         id: 2,
//         icon: PhoneIcon,
//         title: 'Phone',
//         description: '(+62) 81 122 4121',
//         color: 'text-pink-500', // Pastel Pink
//     },
//     {
//         id: 3,
//         icon: MailIcon,
//         title: 'Email',
//         description: 'support@domain.com',
//         color: 'text-green-500', // Pastel Green
//     },
//     {
//         id: 4,
//         icon: ClockIcon,
//         title: 'Work Hours',
//         description: 'Everyday 08:00 - 18:00',
//         color: 'text-purple-500', // Pastel Purple
//     },
// ];

// interface FormData {
//     name: string;
//     phone: string;
//     email: string;
//     subject: string;
//     request: string;
// }

// // --- Helper Components (Contact Item and Message Popup) ---

// const ContactItem: React.FC<{ item: ContactItemData }> = ({ item }) => {
//     const Icon = item.icon;
//     // Dynamic background color with 10% opacity for the icon circle
//     const bgColorClass = item.color.replace('text-', 'bg-').replace('500', '400'); // Use a slightly lighter tint for background

//     return (
//         <div className="flex items-start space-x-4">
//             {/* Icon Circle */}
//             <div className={`p-3 rounded-full ${bgColorClass} bg-opacity-10 w-fit shrink-0`}>
//                 <Icon className={`w-5 h-5 ${item.color}`} />
//             </div>
//             {/* Text Content */}
//             <div>
//                 <h4 className="title text-lg font-semibold text-gray-800">{item.title}</h4>
//                 <p className="icon-box-description text-gray-500">{item.description}</p>
//             </div>
//         </div>
//     );
// };

// // Custom Modal/Message Box component to replace alert()
// const MessagePopup: React.FC<{ message: string | null; onClose: () => void }> = ({ message, onClose }) => {
//     if (!message) return null;

//     // Determine color and icon based on message type (simple check for "success" keyword)
//     const isSuccess = message.toLowerCase().includes('successfully');
//     const title = isSuccess ? 'Success!' : 'Error';
//     const iconColor = isSuccess ? 'text-green-500' : 'text-red-500';
//     const Icon = isSuccess ? CheckCircleIcon : PhoneIcon; // Reusing PhoneIcon for a generic error representation

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
//             <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full transform scale-100">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
//                     <Icon className={`w-6 h-6 mr-2 ${iconColor}`} /> {title}
//                 </h3>
//                 <p className="text-gray-600 mb-6">{message}</p>
//                 <button
//                     onClick={onClose}
//                     className={`w-full ${isSuccess ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-600 hover:bg-gray-700'} text-white py-2 rounded-lg font-semibold transition`}
//                 >
//                     Close
//                 </button>
//             </div>
//         </div>
//     );
// };

// // --- Main Contact Section Component ---

// const ContactSection = () => {
//     const [formData, setFormData] = useState<FormData>({
//         name: '',
//         phone: '',
//         email: '',
//         subject: '',
//         request: '',
//     });

//     const [message, setMessage] = useState<string | null>(null);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();

//         // Simple client-side validation
//         if (!formData.name || !formData.email || !formData.request) {
//             setMessage("Please fill out your Name, Email, and Request fields before sending.");
//             return;
//         }

//         // Simulate form submission success
//         console.log('Form Submitted:', formData);
//         setMessage("Your message has been sent successfully! We'll get back to you shortly.");

//         // Reset form
//         setFormData({
//             name: '',
//             phone: '',
//             email: '',
//             subject: '',
//             request: '',
//         });
//     };

//     const handleCloseMessage = () => {
//         setMessage(null);
//     };

//     return (
//         // Main container: Centered, responsive padding, light background
//         <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50 flex items-center justify-center font-sans">
//             <div className="max-w-6xl w-full mx-auto md:grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

//                 {/* Left Column: Contact Information */}
//                 <div className="py-8 md:py-0">
//                     {/* H5: Contact Us */}
//                     <h5 className="text-sm uppercase tracking-widest text-pink-500 font-medium mb-2">
//                         Contact Us
//                     </h5>
//                     {/* H2: Get In Touch */}
//                     <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
//                         Get In Touch
//                     </h2>
//                     {/* Paragraph */}
//                     <p className="text-gray-600 mb-10 leading-relaxed max-w-lg">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation.
//                     </p>

//                     {/* Contact Items Grid (2x2) */}
//                     <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 mt-8">
//                         {contactItems.map(item => (
//                             <ContactItem key={item.id} item={item} />
//                         ))}
//                     </div>

//                     {/* Divider and Social Media */}
//                     <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
//                         <h2 className="text-xl font-bold text-gray-900 shrink-0">Social Media :</h2>

//                         <div className="flex space-x-3">
//                             {[FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon].map((Icon, index) => (
//                                 <a
//                                     key={index}
//                                     href="#"
//                                     aria-label={`Social Icon ${index}`}
//                                     // Styling for social icons: dark background, white icon, circle shape
//                                     className="bg-gray-800 text-white p-2 rounded-full hover:bg-black transition duration-300 transform hover:scale-105"
//                                 >
//                                     <Icon className="w-4 h-4" />
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Column: Form (Distinct white background and shadow) */}
//                 <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl mt-12 md:mt-0">
//                     <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                         Leave A Message
//                     </h2>
//                     <p className="text-gray-500 mb-8">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt labore dolore.
//                     </p>

//                     <form onSubmit={handleSubmit} className="space-y-6">
//                         {/* Name and Phone Row */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Your Name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="w-full p-3 border border-gray-200 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition placeholder-gray-400"
//                                 required
//                             />
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 placeholder="Your Phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 className="w-full p-3 border border-gray-200 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition placeholder-gray-400"
//                             />
//                         </div>

//                         {/* Email and Subject Row */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Your Email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="w-full p-3 border border-gray-200 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition placeholder-gray-400"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 name="subject"
//                                 placeholder="Subject"
//                                 value={formData.subject}
//                                 onChange={handleChange}
//                                 className="w-full p-3 border border-gray-200 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition placeholder-gray-400"
//                             />
//                         </div>

//                         {/* Request Textarea */}
//                         <textarea
//                             name="request"
//                             placeholder="Your Request"
//                             value={formData.request}
//                             onChange={handleChange}
//                             rows={6}
//                             className="w-full p-3 border border-gray-200 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition resize-y placeholder-gray-400"
//                             required
//                         />

//                         {/* Submit Button */}
//                         <button
//                             type="submit"
//                             className="w-full bg-gray-800 text-white font-semibold py-4 rounded-xl hover:bg-black transition duration-300 shadow-md uppercase tracking-wider"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                 </div>
//             </div>

//             {/* Custom Message Box for success/error alerts */}
//             <MessagePopup message={message} onClose={handleCloseMessage} />
//         </section>
//     );
// };

// export default ContactSection;

"use client";
import React, { useState } from "react";
import { Home, Phone, Mail, Clock, CheckCircle, XCircle } from "lucide-react"; // ✅ Using Lucide icons

// --- Data Structures ---
interface ContactItemData {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string; // Tailwind color class
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

// --- Helper Components ---
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

// Custom Modal/Message Box
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

// --- Main Component ---
const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    request: "",
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.request) {
      setMessage(
        "Please fill out your Name, Email, and Request fields before sending."
      );
      return;
    }

    console.log("Form Submitted:", formData);
    setMessage(
      "Your message has been sent successfully! We'll get back to you shortly."
    );

    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      request: "",
    });
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 mt-8">
            {contactItems.map((item) => (
              <div
                key={item.id}
                className={
                  item.title === "Email" || item.title === "Location"
                    ? "col-span-full"
                    : ""
                }
              >
                <ContactItem item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="bg-gray-900 p-8 md:p-10 rounded-xl shadow-2xl mt-12 md:mt-0">
          <h2 className="text-3xl  text-white mb-4">Leave A Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 bg-black rounded-lg  transition placeholder-gray-400 text-white"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 bg-black rounded-lg  transition placeholder-gray-400 text-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 bg-black rounded-lg  transition placeholder-gray-400 text-white"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 bg-black rounded-lg  transition placeholder-gray-400 text-white"
              />
            </div>

            <textarea
              name="request"
              placeholder="Your Request"
              value={formData.request}
              onChange={handleChange}
              rows={6}
              className="w-full p-3 border border-gray-700 bg-black rounded-lg  transition resize-y placeholder-gray-400 text-white"
              required
            />

            <button
              type="submit"
              className="w-full bg-white cursor-pointer text-black font-semibold py-4 rounded-sm hover:bg-gray-200 transition duration-300 shadow-md uppercase tracking-wider"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <MessagePopup message={message} onClose={handleCloseMessage} />
    </section>
  );
};

export default ContactSection;
