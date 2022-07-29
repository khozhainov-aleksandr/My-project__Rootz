import React from "react";
import { Header } from "../layout/Header";
import { Navigation } from "../layout/Navigation";
import { Main } from "../layout/Main";
import { NewsSection } from "../layout/NewsSection";
import { CarouselCard } from "../layout/CarouselCard";

export default function Home() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <Main>
        <NewsSection />
        <CarouselCard />
      </Main>
    </>
  );
}
