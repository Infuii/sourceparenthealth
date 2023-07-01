export default function Footer() {
  return (
    <div>
      <br />
      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-3xl font-light">
          Follow Us on Social Media
        </h1>
        <div className="flex flex-row gap-4">
          <a href="https://www.facebook.com/">
            <img
              src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
              className="h-12 w-12"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
              className="h-12 w-12"
            />
          </a>
          <a href="https://www.twitter.com/">
            <img
              src="https://img.icons8.com/fluent/48/000000/twitter.png"
              className="h-12 w-12"
            />
          </a>
          <a href="https://www.linkedin.com/">
            <img
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              className="h-12 w-12"
            />
          </a>
          <a href="https://www.youtube.com/">
            <img
              src="https://img.icons8.com/fluent/48/000000/youtube.png"
              className="h-12 w-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
}