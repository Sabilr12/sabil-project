import React from "react";

const About = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Gambar */}
        <div className="md:w-1/2">
          <img
            src="/img/a2.jpg" // Simpan gambar ini di public/img/about-us.jpg
            alt="Tentang Kami"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Penjelasan */}
        <div className="md:w-1/2 text-center md:text-left">
          <p>Get to Know</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            We’re Selling Quality Products
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected humou or words
            even slightly believable. There are many variations of passages of
            available but the majority have suffered alteration in some form, by
            injected humou or words even slightly believable.
          </p>
          <p className="text-lg text-gray-600 mt-4">Magnis Dis Nascet</p>
          <p>Lorem ipsum is free do sit</p>
        </div>
      </div>
    </section>
  );
};

export default About;
