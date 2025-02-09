import React from "react";
import Tiger from "../assets/TIGER.png";
import Zimba_logo from "../assets/ZIMBA-LOGO.png";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-pink-400 px-6 sm:px-4 pb-6 pt-6 dark:bg-dark lg:pt-[100px]">
        <div className="flex justify-around">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a href="/#" className="mb-6 inline-block max-w-[250px]">
                  <img src={Zimba_logo} alt="logo" className="max-w-full" />
                </a>
                <p className="mb-7 text-base text-body-color dark:text-dark-6 font-serial">
                  With Zimba you can be sure about quality with no compromise on your health.
                </p>
              </div>
            </div>

            <LinkGroup header="Products">
              <NavLink link="/#" label="Namkeen" />
              <NavLink link="/#" label="Biscuits" />
              <NavLink link="/#" label="Cakes" />
              <NavLink link="/#" label="Noodles" />
            </LinkGroup>
            <LinkGroup header="Follow us ">
              <NavLink link="/#" logo={<i class="fa-brands fa-twitter"></i>} label="Twitter" />
              <NavLink link="/#" logo={<i class="fa-brands fa-facebook"></i>} label="Facebook" />
              <NavLink link="/#" logo={<i class="fa-brands fa-instagram"></i>} label="Instagram" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="w-full flex flex-col justify-around h-44">
                <h4 className=" text-lg font-semibold text-dark font-Lexend">
                  Contact Us
                </h4>
                <div className="flex">
                  <span className="mr-2"><i class="fa-regular fa-envelope"></i></span>
                  <p className="text-base text-body-color font-Lexend">zimba@gmail.com</p>
                </div>
                <div className="flex">
                  <span className="mr-2"><i class="fa-solid fa-phone"></i></span>
                  <p className="text-base text-body-color dark:text-dark-6 font-Lexend">+91 9122343242</p>
                </div>
                <p className="text-base text-body-color dark:text-dark-6">
                  &copy; 2025 Zimba
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold font-Lexend text-dark">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label,logo }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary font-serial"
      >
        <span className="text-xl mr-2">{logo}</span>
        {label}
      </a>
    </li>
  );
};
