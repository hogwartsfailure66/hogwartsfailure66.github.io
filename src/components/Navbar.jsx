import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "resume" },
    { id: 5, link: "contact" },
  ];

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className="fixed flex justify-between items-center w-full h-20 text-white bg-black px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Hogwartsfailure66</h1>
      </div>

      <div
        className="md:hidden cursor-pointer pr-4 z-10 text-gray-500"
        onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}
      >
        {menuIsOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {menuIsOpen && (
        <ul
          className="md:hidden flex flex-col justify-center items-center absolute
      top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:underline hover:text-white duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
      )}

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:underline hover:text-white duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
