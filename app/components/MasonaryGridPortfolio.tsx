import Image from "next/image";
import React from "react";

const MasonryGrid = () => {
  const images = Array.from(
    { length: 10 },
    (_, i) => `/portfolio/${i + 1}.webp`
  );

  return (
    <section className="sjcontainer my-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB7200] to-[#0170B2]">
            Portfolio
          </span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore our recent projects showcasing secure-by-design strategies, AI
          innovation, and digital transformation across industries.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group break-inside-avoid"
          >
            <Image
              src={src}
              alt={`Portfolio Image ${index + 1}`}
              width={800}
              height={600}
              className="rounded-2xl object-cover w-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p className="text-white text-sm font-medium tracking-wide">
                Project {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MasonryGrid;
