import { useEffect } from "react";
import pageNotFoundImage from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
export const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found / Cinemate";
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 dark:text-white py-5 font-bold">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img src={pageNotFoundImage} alt=""></img>
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="w-64">Back to Home</button>
          </Link>
        </div>
      </section>
    </main>
  );
};
