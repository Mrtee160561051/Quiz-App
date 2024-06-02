// Header.js
import { useState } from "react";
import { Link } from 'react-router-dom';
import img1 from "./image/greatLil.jpg";

const Header = (props) => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Home", link: "/Quiz-App/" },
    { name: "Quiz", link: "/Quiz-App/quiz" },
    { name: "About", link: "/Quiz-App/about" },
    { name: "Services", link: "/Quiz-App/services" },
    { name: "Contact", link: "/Quiz-App/contact" }
  ];

  return (
    <header className="bg-white py-1 sticky top-0 z-50">
      <nav className="flex items-center justify-between w-[92%] mx-auto">
        <img className="w-[3rem]" src={img1} alt="school logo" />
        <svg
          className="text-[2em] z-50 w-8 md:hidden absolute top-2 right-7 cursor-pointer"
          onClick={() => setOpen(!open)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          aria-label="Toggle navigation menu"
        >
          {open ? (
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          ) : (
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          )}
        </svg>
        <div
          className={`md:static absolute right-0 ${
            open ? `top-[3rem] transition-all duration-500 ease-in overflow-auto` : `top-[-490px]`
          } bg-white md:min-h-fit min-h-[60vh] flex items-center px-5`}
        >
          <ul
            className={`flex md:flex-row flex-col md:items-center md:gap-[4vw] 
            gap-8 py-7 md:py-0 transition-all duration-500 ease-in`}
          >
            {Links.map((link) => (
              <li key={link.name}>
                <Link className="hover:text-slate-500" to={link.link} onClick={() =>{setOpen(false);props.handleCancel()}}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/Quiz-App/"><button
                onClick={() =>{setOpen(false);props.getStartedBtn()}}
                className="bg-black rounded text-[#ffffff] px-5 py-1 hover:bg-[white] hover:text-[black] outline-double outline-2 outline-zinc-400"
              >
                Get Started
              </button></Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
