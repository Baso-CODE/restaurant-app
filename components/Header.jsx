"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Nav from "./Nav";
import { Button } from "./ui/button";
import NavMobile from "./NavMobile";

const Header = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setActive(window.scrollY > 100);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header
      className={`${
        active ? "bg-black-heavy py-4" : "bg-none py-8"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}>
      <div className=" container mx-auto">
        {/* logo, nav, btn */}
        <div className=" flex items-center justify-between">
          {/* logo */}
          <Link href={"/"}>
            <Image src={"/logo.svg"} width={75} height={30} alt="logo" />
          </Link>
          {/* nav */}
          <Nav
            containerStyles={"hidden xl:flex gap-x-12 text-white"}
            linkStyles={"capitalize"}
          />
          {/* btn */}
          <ScrollLink to="reservation" smooth={true}>
            <Button variant={"orange"} size="sm">
              Book A table
            </Button>
          </ScrollLink>
          {/* mobile nav */}
          <NavMobile
            containerStyles={"xl:hidden"}
            iconStyles={"text-3xl"}
            linkStyles={"uppercase"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
