"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className=" bg-footer bg-cover bg-no-repeat text-white pt-16">
      <div className=" container mx-auto">
        <div className=" flex flex-col justify-between xl:flex-row">
          {/* logo */}
          <div className=" w-[300px] mb-8 xl:mb-0">
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                alt="image logo"
                width={98}
                height={36}
              />
            </Link>
          </div>
          {/* grid items */}
          <div className=" flex-1 grid grid-cols-1 xl:grid-cols-3 gap-12 mb-8">
            {/* blog */}
            <div>
              <h4 className=" font-semibold mb-5">Blog</h4>
              <ul className=" flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href={"/"}>Makanan Khas sulawesi selatan</Link>
                </li>
                <li>
                  <Link href={"/"}>Makanan spesial sulawesi selatan</Link>
                </li>
                <li>
                  <Link href={"/"}>Makanan Khas suku Bugis</Link>
                </li>
                <li>
                  <Link href={"/"}>Keunikan Makanan Bugis</Link>
                </li>
              </ul>
            </div>
            {/* item */}
            <div>
              <h4 className=" font-semibold mb-5">New item </h4>
              <ul className=" flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href={"/"}>Makanan modifikasi daerah </Link>
                </li>
                <li>
                  <Link href={"/"}>Makanan menjadi khas dari daerah</Link>
                </li>
                <li>
                  <Link href={"/"}>Mengapa makana suku Bugis sangat enak</Link>
                </li>
                <li>
                  <Link href={"/"}>Keunikan Makanan Bugis</Link>
                </li>
              </ul>
            </div>
            {/* socials */}
            <div>
              <h4 className=" font-semibold mb-5">Social</h4>
              <ul className=" flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href={"/"}>Youtube</Link>
                </li>
                <li>
                  <Link href={"/"}>FaceBook</Link>
                </li>
                <li>
                  <Link href={"/"}>Instagram</Link>
                </li>
                <li>
                  <Link href={"/"}>Tiktok</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" py-4 border-t border-white/10">
          <p className=" text-white/60 text-center text-sm">
            Copyright &copy; Baso'food 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
