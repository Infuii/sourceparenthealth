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
  interface Picture {
    id: number;
    name: string;
    url: string;
    category: string;
  }

  const pictures: Picture[] = [
    {
      id: 1,
      name: "Picture 1",
      url: "/IMG_1625.JPG",
      category: "People",
    },
    {
      id: 2,
      name: "Picture 2",
      url: "/coffee together-2565441_1920.jpg",
      category: "Food",
    },
    {
      id: 3,
      name: "Picture 3",
      url: "/IMG_5720.jpg",
      category: "People",
    },
    {
      id: 4,
      name: "Picture 4",
      url: "/carrots-2106825_1920.jpg",
      category: "Food",
    },
    {
      id: 5,
      name: "Picture 5",
      url: "/eating in nature-3366444_1920.jpg",
      category: "Food",
    },
    {
      id: 6,
      name: "Picture 6",
      url: "/IMG_3275.jpg",
      category: "People",
    },
    {
      id: 7,
      name: "Picture 7",
      url: "/IMG_5001.jpg",
      category: "People",
    },
    {
      id: 8,
      name: "Picture 8",
      url: "/vegan-3886637_1280.jpg",
      category: "Food",
    },
    {
      id: 9,
      name: "Picture 9",
      url: "/IMG_5495(1).jpg",
      category: "People",
    },
    {
      id: 10,
      name: "Picture 10",
      url: "/clouds.png",
      category: "Wellness",
    },
    {
      id: 11,
      name: "Picture 11",
      url: "/Kids-863053_1920.jpg",
      category: "People",
    },
    {
      id: 12,
      name: "Picture 12",
      url: "/fruit dish-1209170_1920.jpg",
      category: "Food",
    },
    {
      id: 13,
      name: "Picture 13",
      url: "/white-blood-cell-543471_1920.jpg",
      category: "Wellness",
    },
    {
      id: 14,
      name: "Picture 14",
      url: "/green-juice-769129_1920.jpg",
      category: "Food",
    },
    {
      id: 15,
      name: "Picture 15",
      url: "/smoothies-2253423_1920.jpg",
      category: "Food",
    },
    {
      id: 16,
      name: "Picture 16",
      url: "/IMG_5491.jpg",
      category: "People",
    },
    {
      id: 17,
      name: "Picture 17",
      url: "/IMG_5544.jpg",
      category: "People",
    },
    {
      id: 18,
      name: "Picture 18",
      url: "/family.webp",
      category: "Parenting",
    },
  ];
  const categories = ["People", "Food", "Parenting", "Wellness"];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Picture | null>(null);

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
    setSelectedImage(item as never);
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
        </div>
        {selectedCategories.length > 0 && (
          <button
            className="rounded-lg border border-black bg-transparent px-4 py-2 text-black"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        )}
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
