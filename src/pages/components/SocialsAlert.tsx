/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <div>
      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-3xl font-light">
          Follow Us on Social Media
        </h1>
        <div className="flex flex-row gap-4">
          <a href="https://www.facebook.com/sarah.musavi.1">
            <img
              src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
              alt="facebook"
              className="h-12 w-12"
            />
          </a>
          <a href="https://www.instagram.com/organictreatments/">
            <img
              src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
              alt="instagram"
              className="h-12 w-12"
            />
          </a>
          <a href="https://twitter.com/myhealthalive">
            <img
              src="https://img.icons8.com/fluent/48/000000/twitter.png"
              alt="twitter"
              className="h-12 w-12"
            />
          </a>
          <a href="https://www.linkedin.com/newsletters/6990131423105933313/">
            <img
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              alt="linkedin"
              className="h-12 w-12"
            />
          </a>
          <a href="https://www.youtube.com/@sarahmusavi561/videos">
            <img
              src="https://img.icons8.com/fluent/48/000000/youtube.png"
              alt="youtube"
              className="h-12 w-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
