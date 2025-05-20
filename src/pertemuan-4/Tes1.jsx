import { useState } from "react";
import productData from "./tes.json";

export default function Tes1() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedCategory: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredProducts = productData.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(_searchTerm) ||
      product.description.toLowerCase().includes(_searchTerm);

    const matchesCategory = dataForm.selectedCategory
      ? product.category === dataForm.selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  const allCategories = [
    ...new Set(productData.map((product) => product.category)),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-8">
      {/* Header dengan gambar */}
      <div className="relative w-full h-52 bg-cover bg-center mb-6 rounded-xl shadow-lg" 
        style={{ backgroundImage: "url('https://source.unsplash.com/1000x400/?store,shopping')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-6">
          <h1 className="text-3xl font-bold text-white">Explore Our Products</h1>
        </div>
      </div>

      {/* Form pencarian dan filter */}
      <div className="flex gap-6 items-center">
        {/* Input Search */}
        <div className="flex items-center bg-white p-3 rounded-lg shadow-md flex-grow">
          <span className="mr-3 text-blue-500 text-lg">🔍</span>
          <input
            type="text"
            name="searchTerm"
            placeholder="Search product..."
            className="w-full outline-none text-gray-700"
            value={dataForm.searchTerm}
            onChange={handleChange}
          />
        </div>

        {/* Dropdown Kategori */}
        <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
          <span className="mr-3 text-blue-500 text-lg">📂</span>
          <select
            name="selectedCategory"
            className="w-full outline-none text-gray-700"
            value={dataForm.selectedCategory}
            onChange={handleChange}
          >
            <option value="">All Categories</option>
            {allCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Daftar Produk */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {filteredProducts.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-xl shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
            <p className="text-gray-600 text-sm">
              <strong>Category:</strong> {item.category}
            </p>
            <p className="text-blue-600 font-semibold text-lg">
              ${item.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
