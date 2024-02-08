import {
  IMG_ME,
  FIRST_NAME,
  LAST_NAME,
  DESCRIPTION,
} from "../data/personalData";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:gap-2 pr-10">
          <p className="md:mb-2 ">
            Howdy, my name is
            <span className="block text-4xl md:text-6xl md:leading-tight font-bold animate-rainbowtext bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">{`${FIRST_NAME} ${LAST_NAME}.`}</span>
          </p>
          <h2 className="text-4xl md:text-6xl font-bold">
            A Software Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">{DESCRIPTION}</p>
          <div>
            <button className="group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={20} className="ml-1 " />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={IMG_ME}
            alt="a photo of me"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
