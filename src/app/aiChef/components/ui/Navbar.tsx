"use client";
import { useRef, useEffect, useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import Icon from "../../../../../public/images/home/Logo.png";
import Image from "next/image";
import Button from "@mui/material/Button";

// Section One From Navbar
interface dataType {
  name: string;
  path: string;
}
export const data: dataType[] = [
  { name: "Home", path: "home" },
  { name: "Recipes", path: "recipes" },
  { name: "Blog", path: "blog" },
  { name: "Customer Support", path: "customer" },
];
export default function Navbar() {
  // Logic for Navbar
  const [active, setActive] = useState("/");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id: string | null = sec.getAttribute("id");
        if (top >= offset && top < offset + height && id) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   Extracting the names and creating links
  const extract = data.map((item, ind) => {
    return (
      <a
        key={ind}
        href={`#${item.path}`}
        className={`font-bold text-xl md:text-lg lg:text-xl ${
          active === item.path
            ? "text-blue-500 font-bold border-b-2"
            : "text-gray-600"
        }`}
      >
        {item.name}
      </a>
    );
  });

  // Section Two From Navbar

  const extract2 = data.map((item, ind) => {
    return (
      <a
        key={ind}
        href={`#${item.path}`}
        className={`font-bold text-xl ${
          active === item.name
            ? "text-blue-500 font-bold border-b-2"
            : "text-gray-600"
        }`}
      >
        {item.name}
      </a>
    );
  });
  const navRef = useRef<HTMLDivElement | null>(null);
  function showNavbar() {
    navRef.current?.classList.toggle("showNav");
  }

  return (
    <div className=" overflow-hidden md:px-3 lg:px-4 md:py-7 fixed top-0 left-0 right-0 z-50 backdrop-blur-xl  bg-transparent ">
      <div className="container mx-auto">
        <div className="hidden md:block ">
          <header className="flex flex-row justify-between max-w-full gap-x-7 items-center  ">
            <span className="max-w-13">
              <Image src={Icon} className="" alt="Icon" />
            </span>

            <nav className="flex flex-row justify-around min-w-fit gap-x-5 lg:gap-x-16 flex-none items-center">
              {extract}
              <div className="flex gap-x-1 ">
                <span>
                  <Button style={{ fontWeight: "bold", color: "#213D34" }}>
                    Log In
                  </Button>
                </span>
                <span>
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "50px",
                      fontWeight: "bold",
                      backgroundColor: "#213D34",
                    }}
                  >
                    Start Fro Free
                  </Button>
                </span>
              </div>
            </nav>
          </header>
        </div>
        {/* Navbar Tow Mobil*/}
        <header className="md:hidden max-w-full pb-5 z-10 ">
          <nav
            className="md:hidden px-5 pt-5 flex justify-between items-center"
            onClick={showNavbar}
            id="menu"
          >
            <DensityMediumIcon />
            <div className="flex items-center justify-center gap-x-1">
              <Image
                src={Icon}
                className="max-w-10"
                alt="Icon"
                style={{ order: "2" }}
              />
            </div>
          </nav>

          <nav
            ref={navRef}
            id="navHide"
            className="flex flex-col gap-10 items-center px-5  relative "
          >
            <div
              ref={navRef}
              onClick={showNavbar}
              id="close"
              className="absolute right-5 my-5 "
            >
              <CloseIcon />
            </div>
            <div className="flex flex-col justify-around gap-y-10 absolute top-20 text-center  ">
              {extract2}
              <hr className="w-[90vw]" />
              {/*  */}
              <div className="flex gap-x-1 order-1 flex-col">
                <span className="">
                  <Button
                    style={{
                      fontWeight: "bold",
                      color: "#213D34",
                      fontStyle: "italic",
                    }}
                  >
                    Log In
                  </Button>
                </span>
                <span>
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "50px",
                      fontWeight: "bold",
                      backgroundColor: "#213D34",
                      fontStyle: "italic",
                    }}
                  >
                    Start Fro Free
                  </Button>
                </span>
              </div>
              {/*  */}
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}
