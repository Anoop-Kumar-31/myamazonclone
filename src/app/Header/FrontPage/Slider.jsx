'use client';
// import css from "./Slider.module.css";
// import { useState } from "react";
// export default function Slider() {
//   const [currentIndex, setCurrentIndex] = useState(0); // Initial index for image display
//   const listImg = [
//     "images/Books.jpg",
//     "images/Beauty.jpg",
//     "images/Kitchen.jpg",
//     "images/Games.jpg",
//     "images/Toys.jpg",
//   ];

//   const handlePrev = () => {
//     const newIndex = (currentIndex - 1 + listImg.length) % listImg.length; // Circular navigation
//     setCurrentIndex(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = (currentIndex + 1) % listImg.length; // Circular navigation
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <main className={css.slider}>
//       <button className={css.prev} onClick={handlePrev}>&lt;</button>
//       <section className={css.panel}>
//         <img src={listImg[currentIndex]} alt="" />
//       </section>
//       <button className={css.next} onClick={handleNext}>&gt;</button>
//     </main>
//   );
// }

import css from "./Slider.module.css";
import { useState } from "react";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const listImg = [
    "images/Books.jpg",
    "images/Beauty.jpg",
    "images/Kitchen.jpg",
    "images/Games.jpg",
    "images/Toys.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Makeup-PCfdfo._CB554430294_.jpg",
  ];

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + listImg.length) % listImg.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % listImg.length;
    setCurrentIndex(newIndex);
  };

  return (
    <main className={css.slider}>
      <button className={css.prev} onClick={handlePrev}>&lt;</button>
      <section className={css.panel}>
        {listImg.map((img, index) => (
          <img
            key={index}
            src={img}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Position based on index
            className={css.slideImage} // Add class for potential styling
          />
        ))}
      </section>
      <button className={css.next} onClick={handleNext}>&gt;</button>
    </main>
  );
}