"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className=" bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0 "
      id="home">
      <div className=" container mx-auto">
        {/* text & img */}
        <div className=" flex items-center xl:h-[960px]">
          {/* text */}
          <div className=" w-full xl:max-w-[460px] text-center xl:text-left">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className=" text-white mb-7 ">
              A taste of local <br /> flavours
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className=" text-white font-semibold mb-7">
              by: <span className=" text-orange">Baso Afriza</span>
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className=" text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0">
              We are proud to present traditional dishes that have become an
              integral part of the local culinary culture, with creative and
              innovative touches to ensure an unforgettable dining experience
              for every customer.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}>
              <Button>Let's eat</Button>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" hidden xl:flex xl:absolute xl:top-[200px] xl:right-0">
            <Image
              src={"/hero/plate.png"}
              alt="hero"
              width={756}
              height={682}
            />
          </motion.div>
        </div>
      </div>
      {/* coffe image */}
      <motion.div
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" hidden xl:flex xl:relative xl:-top-36">
        <Image src={"/hero/coffee.png"} alt="coffe" width={386} height={404} />
      </motion.div>
    </section>
  );
};

export default Hero;
