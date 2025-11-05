"use client";
import React from "react";
import { Camera, Mic, Video, Film } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Chroma Shoots",
    description:
      "High-end green screen productions for films, ads, and creative VFX with precision lighting and cinematic results.",
    icon: Film,
    link: "#",
  },
  {
    number: "02",
    title: "Podcast",
    description:
      "Professional podcast and voiceover recording with acoustic treatment and broadcast-level clarity.",
    icon: Mic,
    link: "#",
  },
  {
    number: "03",
    title: "Photography Shoot",
    description:
      "Creative portrait, fashion, and product photography crafted to capture emotion and identity in every frame.",
    icon: Camera,
    link: "#",
  },
  {
    number: "04",
    title: "Videography Shoot",
    description:
      "Cinematic storytelling for commercials, documentaries, and events with advanced camera setups and direction.",
    icon: Video,
    link: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const SpecialService: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black py-24 overflow-hidden"
    >
      {/* Background flare */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px]  rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gray-500/10 blur-3xl rounded-full" />

      <div className="templateContainer relative z-10 text-white">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start mb-16"
        >
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 mb-2 border-b border-gray-700 pb-1 inline-block">
              Our Services
            </p>
            <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
              Special Services We Offer
            </h2>
          </div>

          <div className="lg:w-1/2 text-gray-400 leading-relaxed max-w-lg">
            At{" "}
            <span className="text-yellow-500 font-medium">
              DreamCatcher Studio
            </span>
            , we transform creativity into visual magic. From cinematic chroma
            shoots to storytelling through photography and film, our craft
            redefines visual expression.
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              className="group relative bg-[#111111] p-8 rounded-xl border border-gray-800/50 
                         hover:border-yellow-500/50 hover:shadow-[0_0_25px_-5px_rgba(255,215,0,0.3)]
                         transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/0 via-yellow-500/0 to-yellow-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-all" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <service.icon className="w-12 h-12 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-lg text-gray-500 mt-6 mb-1 font-semibold">
                    {service.number}
                  </p>
                  <h5 className="text-2xl font-medium mb-2 group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h5>
                  <p className="text-sm text-gray-400 leading-snug">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialService;
