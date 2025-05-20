import React from "react";
import { FaStar } from "react-icons/fa";
import products from "../../json/product.json";
import testimonials from "../../json/testimonials.json";

const ProdukUnggulan = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* Header Produk Unggulan (rata kiri) */}
      <div className="max-w-6xl mx-auto mb-10">
        <p className="text-gray-600 text-left">Recently Added</p>
        <h2 className="text-4xl font-bold text-gray-800 mb-2 text-left">
          New Products
        </h2>
      </div>

      {/* Grid Produk (isi rata tengah) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    color={i < product.rating ? "#ffd700" : "#ccc"}
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <p className="text-green-600 font-bold mt-2">
                ${product.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Section Testimoni */}
      <div className="max-w-6xl mx-auto text-center mt-16">
        <p className="text-gray-600 mb-10">Our Testimonials</p>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          What People Say?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg p-6 cursor-pointer transform hover:scale-105 transition-all hover:bg-green-500 hover:text-white relative min-h-[250px]"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 object-cover rounded-full border-4 border-white"
                  style={{ maxWidth: "80px", maxHeight: "80px" }}
                />
              </div>
              <div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
                <p className="text-gray-600 mt-4">{testimonial.review}</p>
                <p className="text-green-600 font-semibold mt-4 text-center">
                  Customer
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProdukUnggulan;
