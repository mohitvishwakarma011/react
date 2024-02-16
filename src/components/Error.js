import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="w-full text-center mt-28">
      <div className="text-[#fd801a]">
        <span className="text-5xl font-bold">D</span>
        <span className="text-5xl font-bold">H</span>
        <span className="text-5xl font-bold">F</span>
        <p className="text-3xl">Die Hard Foodie</p>
      </div>

      <h1 className="text-4xl my-5 font-bold text-gray-800">
        We'll be back shortly
      </h1>
      <h2 className="text-gray-500 mb-4">
        We are fixing a temporary glitch. Sorry for the inconvenience.
      </h2>
      <Link to={"/"} className=" p-2 bg-[#fd801a] text-white hover:shadow-xl">
        Go Back
      </Link>
    </div>
  );
};

export default Error;
