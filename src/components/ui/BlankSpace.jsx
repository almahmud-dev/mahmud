"use client";
import { useEffect, useState } from "react";
import Container from "./Container";

const BlankSpace = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    updateWidth(); // first load
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section id="blank" className="py-20">
      <Container>
        <h1 className="text-2xl">{width}px x {height}px</h1>
      </Container>
    </section>
  );
};

export default BlankSpace;