import React from "react";
import { Header } from "../layout/Header";
import { Navigation } from "../layout/Navigation";
import { Main } from "../layout/Main";
import { NewsSection } from "../layout/NewsSection";
import { CarouselCard } from "../layout/CarouselCard";
import { OurTeam } from "../layout/OurTeam";
import { Challenges } from "../layout/Challenges";
import { AuthorizationForm } from "../layout/AuthorizationForm";
import { GetStarted } from "../layout/GetStarted";

export default function Home() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Main>
        <NewsSection />
        <CarouselCard />
        <OurTeam />
        <Challenges />
        <AuthorizationForm />
        <GetStarted />
      </Main>
    </>
  );
}
