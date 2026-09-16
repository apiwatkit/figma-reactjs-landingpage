"use client";

import Nav from "./components/nav";
import Header from "./components/header";
import Client from "./components/client";
import Community from "./components/community";
import Pixelgrade from "./components/pixelgrade";
import Helping from "./components/helping";
import HowToDesign from "./components/how-to-design";
import Customer from "./components/customer";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Client />
      <Community />
      <Pixelgrade />
      <Helping />
      <HowToDesign />
      <Customer />
    </>
  );
}
