/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type SocialInfoProps = {
  name: string;
  url: string;
  icon: string;
};

const SocialInfo = ({ name, url, icon }: SocialInfoProps) => {
  return (
    <Link href={url}>
      <img src={icon} alt={name} className="h-12 w-12" />
    </Link>
  );
};

const socialData = [
  {
    name: "facebook",
    url: "https://www.facebook.com/sarah.musavi.1",
    icon: "https://img.icons8.com/fluent/48/000000/facebook-new.png",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/organictreatments/",
    icon: "https://img.icons8.com/fluent/48/000000/instagram-new.png",
  },
  {
    name: "twitter",
    url: "https://twitter.com/myhealthalive",
    icon: "https://img.icons8.com/fluent/48/000000/twitter.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/newsletters/6990131423105933313/",
    icon: "https://img.icons8.com/fluent/48/000000/linkedin.png",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/channel/UC4QXU0jJ6ZJWq7pYqQZgG8w",
    icon: "https://img.icons8.com/fluent/48/000000/youtube-play.png",
  },
];

export default function Footer() {
  return (
    <div>
      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-3xl font-light">
          Follow Us on Social Media
        </h1>
        <div className="flex flex-row gap-4">
          {socialData.map((social) => (
            <SocialInfo key={social.name} {...social} />
          ))}
        </div>
      </div>
    </div>
  );
}

// <div className="mt-10 flex flex-col items-center justify-center gap-4">
//   <h1 className="text-center text-3xl font-light">
//     Follow Us on Social Media
//   </h1>
//   <div className="flex flex-row gap-4">
//     <a href="https://www.facebook.com/sarah.musavi.1">
//       <img
//         src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
//         alt="facebook"
//         className="h-12 w-12"
//       />
//     </a>
//     <a href="https://www.instagram.com/organictreatments/">
//       <img
//         src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
//         alt="instagram"
//         className="h-12 w-12"
//       />
//     </a>
//     <a href="https://twitter.com/myhealthalive">
//       <img
//         src="https://img.icons8.com/fluent/48/000000/twitter.png"
//         alt="twitter"
//         className="h-12 w-12"
//       />
//     </a>
//     <a href="https://www.linkedin.com/newsletters/6990131423105933313/">
//       <img
//         src="https://img.icons8.com/fluent/48/000000/linkedin.png"
//         alt="linkedin"
//         className="h-12 w-12"
//       />
//     </a>
//     <a href="https://www.youtube.com/@sarahmusavi561/videos">
//       <img
//         src="https://img.icons8.com/fluent/48/000000/youtube.png"
//         alt="youtube"
//         className="h-12 w-12"
//       />
//     </a>
//   </div>
// </div>
