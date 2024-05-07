import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const StyleGuide = () => {
  return (
    <>
      {/* typography */}
      <div className=" flex flex-col gap-y-4 p-24">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
          pariatur impedit, corporis fugiat adipisci incidunt! Assumenda labore
          exercitationem cumque eveniet?
        </p>
      </div>
      <div className=" bg-black p-24 flex flex-col gap-y-4">
        <Link href={"/"}>Link</Link>
        <Button variant="default">Let's eat</Button>
        <Button variant="orange">Let's eat</Button>
        <Button variant="input">Let's eat</Button>
      </div>
    </>
  );
};

export default StyleGuide;
