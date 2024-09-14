import React from "react";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { AdvertisingSection } from "../../components/advertising_section";
import { Quotes } from "../../components/quotes";
import { Services } from "../../components/services";

export const Home = () => {
  return (
    <div className="m-0 p-0 box-border flex-col flex-grow min-w-full min-h-screen">
      <Header />
      <Hero />
      <AdvertisingSection/>
      <Quotes/>
      <Services/>
    </div>
  );
};
