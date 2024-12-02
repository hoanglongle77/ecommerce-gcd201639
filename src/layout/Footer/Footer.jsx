import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={`${styles.footerTop} container pt-4`}>
      <div className="mx-0 px-lg-5 mx-lg-0 row">
        <div className="col-12 col-lg-4">
          <div className="text-white mx-2">
            <h3 className={`${styles.logo}`}>PixelPort</h3>
            <p className={`mt-3 ${styles.footerText}`}>
              PixelPort is a modern electronics store specializing in
              cutting-edge devices and premium accessories. From the latest
              gadgets to essential tech gear, PixelPort connects you to the
              tools that power your digital life. Our mission is to deliver
              quality, innovation, and reliability in every product, ensuring
              you stay ahead in the fast-paced world of technology.
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="text-white mx-2">
            <h3 className={`${styles.contactHeading}`}>Contact Information</h3>
            <ul className={`mt-3 ${styles.contactList}`}>
              <li className="text-uppercase mt-2">PixelPort Company</li>
              <li className=" mt-2">18 Nguyen Cong Tru, Son Tra, Da Nang</li>
              <li className=" mt-2">longlnhgcd201639@fpt.edu.vn</li>
              <li className=" mt-2">pixelport.vn</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="text-white mx-2">
            <h3 className={`${styles.timeHeading}`}>Open Time</h3>
            <ul className={`${styles.timeList} mt-3`}>
              We work every day of the week, open through noon:
              <li className=" mt-2">Open & Close 7:30 - 21:00</li>
              <li className=" mt-2">Open & Close 7:30 - 21:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.footerBottom} container mx-0 px-lg-5 mx-lg-0`}>
        <div
          className={`${styles.bottomContainer} d-flex flex-column flex-lg-row justify-content-lg-between`}
        >
          <div className={`${styles.acceptPolicy} my-3 text-white`}>
            Policies & Usage
          </div>
          <div className={`${styles.copyright} my-3 text-white`}>
            COPYRIGHT © 2024 Le Nguyen Hoang Long. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
