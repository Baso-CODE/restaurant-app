"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { Button } from "./ui/button";
import Image from "next/image";

const About = () => {
  return (
    <section
      className=" grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center "
      id="about">
      {/* text */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className=" xl:pl-[135px]">
        <h1 className=" mb-9">Ayo cari tahu tentang baso food!</h1>
        <p className="mb-8">
          Baso Food adalah restoran yang menghadirkan kelezatan makanan khas
          Sulawesi Selatan, Indonesia. Nikmati hidangan autentik seperti
          pallubasa, konro, coto Makassar, sop konro, dan berbagai hidangan lain
          yang kaya akan rempah-rempah dan cita rasa unik daerah ini. Setiap
          suapan membawa Anda merasakan kehangatan dan kekayaan budaya kuliner
          Sulawesi Selatan.
        </p>
        <p className="mb-10">
          {" "}
          Kunjungi Baso Food dan rasakan pengalaman kuliner yang memikat dari
          keindahan rasa makanan daerah Sulawesi Selatan.
        </p>
        <Button>Read more</Button>
      </motion.div>
      {/* img */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}>
        <Image
          src={"/about/img.png"}
          alt="about"
          width={785}
          height={771}
          className="hidden xl:flex rounded-md"
        />
      </motion.div>
    </section>
  );
};

export default About;
