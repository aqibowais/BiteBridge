import React from "react";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { AdvertisingSection } from "../../components/advertising_section";
import { Services } from "../../components/services";
import { ClientFeedback } from "../../components/client_feedback";
import { SubscribeNewsLetter } from "../../components/subscribe_newsletter";
import { Footer } from "../../components/footer";

export const Home = () => {
  return (
    <div className="m-0 p-0 box-border flex-col flex-grow min-w-full min-h-screen">
      <Header />
      <Hero />
      <AdvertisingSection/>
      <Services/>
      <ClientFeedback/>
      <SubscribeNewsLetter/>
      <Footer/>
    </div>
  );
};
