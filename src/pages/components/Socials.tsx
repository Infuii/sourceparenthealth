import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

type SocialMediaBoxProps = {
  icon: React.ReactNode;
  followerCount: number;
  postCount: number;
  additionalCount: number;
  platform: string;
  link: string;
};

const SocialMediaBox: React.FC<SocialMediaBoxProps> = ({
  icon,
  followerCount,
  postCount,
  additionalCount,
  platform,
  link,
}) => {
  const formatNumber = (value: number) => {
    const formattedValue = value.toLocaleString("en-US");
    return formattedValue;
  };

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    hover: { y: -10 },
  };

  return (
    <motion.div
      className="flex w-1/4 flex-col items-center justify-center p-16"
      style={{ width: "10vh", height: "10vh" }}
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={variants}
      onClick={() => window.open(link)}
    >
      <div className="relative rounded-lg bg-white p-6 text-center shadow-md">
        <div style={{ position: "relative", left: "35px" }}>{icon}</div>
        <p className="mt-6 text-3xl text-gray-500">
          <span className="text-2xl text-gray-400">Followers</span>
          <br />
          {formatNumber(followerCount)}
        </p>
        <br />
        <hr className="border-2" />
        <div className="mt-4 flex h-96 w-32 flex-col">
          <div className="text-center">
            <p className="text-xl text-gray-500">
              <span className="text-md text-gray-400">Posts</span>
              <br />
              {formatNumber(postCount)}
            </p>
          </div>
          <br />
          <div className="text-center">
            <p className="text-xl text-gray-500">
              <span className="text-md text-gray-400">Following</span>
              <br />
              {formatNumber(additionalCount)}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">{platform}</p>
        <motion.div className="absolute bottom-0 left-0 right-0 bg-blue-500 px-4 py-2 text-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
          Follow
        </motion.div>
      </div>
    </motion.div>
  );
};

const Socials: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-row gap-8">
        <SocialMediaBox
          icon={<FaFacebook className="text-6xl text-blue-500" />}
          followerCount={332}
          postCount={500}
          additionalCount={100}
          platform="Facebook"
          link="https://www.facebook.com/sarah.musavi.1"
        />
        <SocialMediaBox
          icon={<FaInstagram className="text-6xl text-pink-500" />}
          followerCount={81}
          postCount={171}
          additionalCount={129}
          platform="Instagram"
          link="https://www.instagram.com/organictreatments/"
        />
        <SocialMediaBox
          icon={<FaTwitter className="text-6xl text-blue-500" />}
          followerCount={185}
          postCount={1500}
          additionalCount={327}
          platform="Twitter"
          link="https://twitter.com/myhealthalive"
        />
        <SocialMediaBox
          icon={<FaLinkedin className="text-6xl text-blue-500" />}
          followerCount={1539}
          postCount={1500}
          additionalCount={300}
          platform="Linkedin"
          link="https://www.linkedin.com/newsletters/6990131423105933313/"
        />
        <SocialMediaBox
          icon={<FaYoutube className="text-6xl text-red-500" />}
          followerCount={65}
          postCount={60}
          additionalCount={300}
          platform="YouTube"
          link="https://www.youtube.com/@sarahmusavi561/videos"
        />
      </div>
    </div>
  );
};

export default Socials;
