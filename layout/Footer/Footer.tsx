import React from "react";
import { Htag } from "../../components/Htag";
import { LinkTag } from "../../components/LinkTag";
import { Picture } from "../../components/Picture";
import styles from './Footer.module.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.contactsWrapper}>
            <Htag tag="h4_upper">
              Contacts
            </Htag>
            <LinkTag size="small" href="#">
              2019 Rootz Foundation. All rights reserved
            </LinkTag>
          </div>

          <div className={styles.addressWrapper}>
            <Htag tag="h6_normal">
              Headquarters
            </Htag>
            <LinkTag size="small" href="#">1234 Taliban</LinkTag>
            <LinkTag size="small" href="#">Los Angeles, La 1234567</LinkTag>
            <LinkTag size="small" href="#">(123) 456-7890</LinkTag>
          </div>

          <div className={styles.socialWrapper}>
            <Htag tag="h6_normal">
              Social media
            </Htag>
            <div className={styles.iconsWrapper}>
              <LinkTag href="https://twitter.com/">
                <Picture
                  format="svg"
                  imgName="Twitter"
                  altDes="Twitter"
                />
              </LinkTag>
              <LinkTag href="https://m.facebook.com/">
                <Picture
                  format="svg"
                  imgName="Facebook"
                  altDes="Facebook"
                />
              </LinkTag>
              <LinkTag href="https://www.linkedin.com/">
                <Picture
                  format="svg"
                  imgName="LinkedIn"
                  altDes="LinkedIn"
                />
              </LinkTag>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
