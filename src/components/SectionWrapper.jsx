import styles from "../styles/Global";
import assets from "../assets";

import Button from "./Button";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen 
       ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${styles.section}
       ${banner}
      `}
    >
      <div
        className={`flex items-center w-11/12 sm:w-full minmd:w-3/4
         ${reverse ? styles.boxReverseClass : styles.boxClass}`}
      >
        <div
          className={`${styles.descDiv}
        ${reverse ? "fadeRightMini" : "fadeLeftMini"}
        ${reverse ? styles.textRight : styles.textLeft}
        `}
        >
          <h1
            className={`${styles.h1Text} 
            ${reverse ? styles.blackText : styles.whiteText}`}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText}  ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {description}
          </p>

          {showBtn && (
            <Button
              assetsUrl={assets.expo}
              link="https://expo.dev/@creative201347/react_native_nft?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>

        <div className={`${styles.flexCenter} flex-1 p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`${styles.sectionImg} ${
              reverse ? "fadeLeftMini" : "fadeRightMini"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
