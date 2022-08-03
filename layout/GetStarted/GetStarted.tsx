import React, { useState } from "react";
import { GetStartedProps, Data } from "./GetStarted.props";
import { Htag } from "../../components/Htag";
import { Ptag } from "../../components/Ptag";
import { Button } from "../../components/Button";
import styles from './GetStarted.module.scss';
import classNames from "classnames";

export const GetStarted: React.FC<GetStartedProps> = (): JSX.Element => {
  const [selected, setSelected] = useState<null | string>(null);

  function selectedAccordion (id: string) {
    if (selected === id) {
      return setSelected(null);
    }

    setSelected(id);
  }

  return (
    <div className={styles.getStarted}>
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.descriptionWrapper}>
            <Htag tag="h3">
              Ready to Get started?
            </Htag>

            <Ptag size="large">
              When pattern is mentioned in interior design, it is easy to
              associate it with a geometric patterned wallpaper or colorful
              prints on interior fabrics.
            </Ptag>

            <Button appearance="colored">
              Contact us
            </Button>
          </div>

          <div className={styles.accordion}>
            {accordionData.map(data => {
              return (
                <div key={data.id} className={styles.item}>
                  <div className={styles.titleAndBtn}>
                      <Htag tag="h6_large">
                        {data.title}
                      </Htag>
                      <Button
                        appearance={
                          (selected === data.id)
                            ? 'round__minus' :'round__plus'
                        }
                        onClick={() => {
                          selectedAccordion(data.id);
                        }}
                      />
                  </div>
                  <div
                    className={
                      classNames(styles.description, {
                        [styles.show]: selected === data.id,
                      })
                    }
                  >
                    <Ptag size="normalOps">
                      {data.description}
                    </Ptag>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const accordionData: Data[] = [
  {
    id: "3db12bee-1586-4916-b9b9-d33e75965961",
    title: "What can I do to protect our planet?",
    description: "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources",
  },
  {
    id: "69633cb9-d76c-4619-bfdc-8f025e5e4aa2",
    title: "How to save nature ecology?",
    description: "Iure perspiciatis cum, officiis ratione modi, omnis commodi quis rerum voluptatum nam, harum facilis praesentium mollitia dignissimos! Voluptatum quo laboriosam minima facilis.",
  },
  {
    id: "186e5fac-5bca-4652-b85d-765b9a69fbc7",
    title: "What is nature conservation?",
    description: "Animi nobis obcaecati consequatur. Accusamus atque assumenda aperiam vero, doloremque porro consequuntur illo sunt voluptates, minima facere nostrum necessitatibus ab cupiditate nihil.",
  }
];
