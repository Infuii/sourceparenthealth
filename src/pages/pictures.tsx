import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Scroller from "./components/Scroller";
import AuthShowcase from "./components/AuthShowcase";
import Footer from "./components/Footer";

export default function Pictures() {
  const { data: sessionData } = useSession();
  const pictures = [
    {
      id: 1,
      name: "Picture 1",
      url: "https://picsum.photos/200/300",
      category: "Food",
    },
    {
      id: 2,
      name: "Picture 2",
      url: "https://picsum.photos/200/300",
      category: "Food",
    },
    {
      id: 3,
      name: "Picture 3",
      url: "https://picsum.photos/200/300",
      category: "Wellness",
    },
    {
      id: 4,
      name: "Picture 4",
      url: "https://picsum.photos/200/300",
      category: "Wellness",
    },
    {
      id: 5,
      name: "Picture 5",
      url: "https://picsum.photos/200/300",
      category: "Parenting",
    },
    {
      id: 6,
      name: "Picture 6",
      url: "https://picsum.photos/200/300",
      category: "Fitness",
    },
  ];
  const categories = ["Food", "Wellness", "Parenting", "Fitness"];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const isCategorySelected = (category: string) =>
    selectedCategories.includes(category);

  const clearFilters = () => {
    setSelectedCategories([]);
  };
  const openImage = (item: React.SetStateAction<null>) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  return (
    <div className="main min-h-screen bg-gradient-to-r from-[#D2D2D2] to-[#D1D1D1] pb-16">
      <Navbar sessionData={sessionData as never} />
      <div className="fixed z-50 h-2 w-full bg-[#E9E9E9]"></div>

      <Scroller />
      <br />
      <br />
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <AuthShowcase />
        </div>
        <h1 className="text-4xl font-bold">Pictures</h1>
        <p className="text-xl">Coming soon!</p>
        <div className="flex gap-4">
          {categories.map((item, index) => (
            <button
              key={index}
              className={`rounded-lg bg-transparent px-4 py-2 text-black ${
                isCategorySelected(item)
                  ? "border-2 bg-blue-400 text-white"
                  : "border-2 border-black"
              }`}
              onClick={() => handleCategoryClick(item)}
            >
              {item}
            </button>
          ))}
          {selectedCategories.length > 0 && (
            <button
              className="rounded-lg border border-black bg-transparent px-4 py-2 text-black"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>
      <br />
      <div className="flex flex-wrap justify-center gap-4">
        {pictures
          .filter(
            (item) =>
              selectedCategories.length === 0 ||
              selectedCategories.includes(item.category)
          )
          .map((item, index) => {
            const isImageSelected =
              selectedCategories.length === 0 ||
              selectedCategories.includes(item.category);

            return (
              <motion.div
                key={index}
                className={`flex flex-col items-center gap-4 ${
                  isImageSelected ? "cursor-pointer" : ""
                }`}
                whileHover={{ y: isImageSelected ? -10 : 0 }}
                onClick={() => openImage(item as never)}
              >
                <h1 className="text-3xl font-bold">{item.name}</h1>
                <div
                  className={`border border-black ${
                    isImageSelected ? "bg-gray-200" : ""
                  }`}
                >
                  <Image
                    src={item.url}
                    alt={item.name}
                    width={200}
                    height={300}
                  />
                </div>
              </motion.div>
            );
          })}
      </div>
      {isModalOpen && (
        <div
          className="z-999 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="max-w-4xl rounded-lg bg-gray-900 p-8">
            <div className="flex justify-end">
              <button
                className="text-2xl text-white"
                onClick={() => setIsModalOpen(false)}
              >
                X
              </button>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="border border-white">
                <Image
                  src={selectedImage?.url as string} // Use the selected image's URL
                  alt={selectedImage?.name as string}
                  width={400}
                  height={600}
                />
              </div>
              <h1 className="text-3xl font-bold text-white">
                {selectedImage?.name as string}
              </h1>
            </div>
          </div>
        </div>
      )}
      <br />
      <br />
      <Footer />
    </div>
  );
}
