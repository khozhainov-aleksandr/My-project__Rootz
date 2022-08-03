import React from "react";
import { CardContent } from "./CarouselCard.props";
import { Carousel } from "../../components/Carousel";
import { Card } from "../../components/Card";
import styles from './CarouselCard.module.scss';


export const CarouselCard = (): JSX.Element => {
  return ( 
    <div className={styles.CarouselCard}>
      <div className="container">
        <Carousel>
          {cardContent.map((card, i) => {
            const cardNumber = i + 1;

            return (
              <Card
                key={card.id}
                classCard={styles[`card__${cardNumber}`]}
                titleChildren={card.title}
                descChildren={card.description}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const cardContent: CardContent[] = [
  {
    id: "c47ed1cf-3b2c-4934-900d-57204a8595d0",
    title: "Travel In Japan: The True Experience",
    description: "When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.",
  },
  {
    id: "7ddfb1d9-0e3e-4b4f-97a7-60d3478f4cf7",
    title: "Helping Wild Turtles To Travel In Japan",
    description: "The scale of the challenges facing our planet can seem daunting, but we can all do something. Challenges facing our planet can seem daunting, but we can all do something.",
  },
  {
    id: "03ba5e23-707c-4649-badf-33b2351d905d",
    title: "Threats of Modern Indusrial World ",
    description: "The scale of the challenges facing our planet can seem daunting, but we can all do something. Easy to asso- ciate it with a geometric patterned wallpaper.",
  },
];
