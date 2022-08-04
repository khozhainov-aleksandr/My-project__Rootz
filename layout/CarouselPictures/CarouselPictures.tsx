import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Pictures } from "./CarouselPictures.props";
import styles from "./CarouselPictures.module.scss";
import { Picture } from "../../components/Picture";
// import classNames from "classnames";

export const CarouselPictures = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(1);

  const settings = {
    className: `${styles.slider}`,
    infinite: true,
    centerPadding: "400px",
    slidesToShow: 5,
    speed: 500,
    afterChange: function(index: number) {
      setCounter(index + 1);
    }
  };

  return (
    <div className={styles.carouselPictures}>
      <div className={styles.mainWrapper}>
        <Slider {...settings}>
          {picturesData.map(data => (
              <div key={data.id} className={styles.cardWrapper}>
                <Picture
                  format="png"
                  imgName={data.picture}
                  altDes={data.title}
                  className={styles.image}
                />

                <h6 className={styles.title}>
                  {data.title}
                </h6>
              </div>
            )
          )}
        </Slider>

        <div className={styles.pictureCounter}>
          {counter} <span>/ {picturesData.length}</span>
        </div>
      </div>
    </div>
  );
};

const picturesData: Pictures[] = [
  {
    id: "6a41303d-e582-41d4-9b36-81f4007f1e07",
    picture: "saveWater",
    title: "Save water",
    description: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
  },
  {
    id: "0cc78326-c580-4838-9969-032b503ef272",
    picture: "plantTrees",
    title: "Plant trees",
    description: "Magnam ipsa sapiente dolorum vitae obcaecati enim recusandae fuga natus praesentium!",
  },
  {
    id: "1eb90f7a-04a6-4680-be7b-53d5ab8c5132",
    picture: "saveEnergy",
    title: "Save energy",
    description: "Minus facere ut accusamus ducimus! Obcaecati repellat sequi ipsum aut, quasi laborum?",
  },
  {
    id: "00a2259d-feba-4f56-afae-dc11bfbaea40",
    picture: "avoidPlastic",
    title: "Avoid plastic",
    description: "Magni ea doloribus repellat mollitia eaque, dolore deleniti voluptas exercitationem.",
  },
  {
    id: "a8aa2f17-6643-4c19-9515-47eb3319324e",
    picture: "chooseOrganic",
    title: "Choose organic",
    description: "Ducimus rerum praesentium saepe eum omnis debitis facilis. Tenetur inventore molestias.",
  },
  {
    id: "6a41303d-e582-41d4-9b36-81f4007f1e07",
    picture: "saveWater",
    title: "Save water",
    description: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
  },
  {
    id: "0cc78326-c580-4838-9969-032b503ef272",
    picture: "plantTrees",
    title: "Plant trees",
    description: "Magnam ipsa sapiente dolorum vitae obcaecati enim recusandae fuga natus praesentium!",
  },
  {
    id: "1eb90f7a-04a6-4680-be7b-53d5ab8c5132",
    picture: "saveEnergy",
    title: "Save energy",
    description: "Minus facere ut accusamus ducimus! Obcaecati repellat sequi ipsum aut, quasi laborum?",
  },
  {
    id: "00a2259d-feba-4f56-afae-dc11bfbaea40",
    picture: "avoidPlastic",
    title: "Avoid plastic",
    description: "Magni ea doloribus repellat mollitia eaque, dolore deleniti voluptas exercitationem.",
  },
  {
    id: "a8aa2f17-6643-4c19-9515-47eb3319324e",
    picture: "chooseOrganic",
    title: "Choose organic",
    description: "Ducimus rerum praesentium saepe eum omnis debitis facilis. Tenetur inventore molestias.",
  },
  {
    id: "6a41303d-e582-41d4-9b36-81f4007f1e07",
    picture: "saveWater",
    title: "Save water",
    description: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
  },
  {
    id: "0cc78326-c580-4838-9969-032b503ef272",
    picture: "plantTrees",
    title: "Plant trees",
    description: "Magnam ipsa sapiente dolorum vitae obcaecati enim recusandae fuga natus praesentium!",
  },
  {
    id: "1eb90f7a-04a6-4680-be7b-53d5ab8c5132",
    picture: "saveEnergy",
    title: "Save energy",
    description: "Minus facere ut accusamus ducimus! Obcaecati repellat sequi ipsum aut, quasi laborum?",
  },
  {
    id: "00a2259d-feba-4f56-afae-dc11bfbaea40",
    picture: "avoidPlastic",
    title: "Avoid plastic",
    description: "Magni ea doloribus repellat mollitia eaque, dolore deleniti voluptas exercitationem.",
  },
  {
    id: "a8aa2f17-6643-4c19-9515-47eb3319324e",
    picture: "chooseOrganic",
    title: "Choose organic",
    description: "Ducimus rerum praesentium saepe eum omnis debitis facilis. Tenetur inventore molestias.",
  },
];
