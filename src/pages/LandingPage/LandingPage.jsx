import React, { useEffect, useState } from 'react';
import { getAllSnack, getCheapSnack } from '../../services/snack';
import styles from './LandingPage.module.scss';
import SnackCard from '../../components/SnackCard/SnackCard';

const LandingPage = () => {
  const [cheapSnacks, setCheapSnacks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage=4

  useEffect(() => {
    getAllSnack()
      .then((data) => setCheapSnacks(data))
      .catch((e) => console.log(e));
  }, []);

  

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(cheapSnacks.length/itemsPerPage) - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(cheapSnacks.length/itemsPerPage) - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className={styles.main}>
      <section className={styles.section}>

        <div className={styles.carousel}>
          <div className={styles.carouselTileAndArrows}>
            <button onClick={prevSlide} className={styles.navButton}>
              <img src="./src/assets/icons8-back-50.png" alt="Previous" />
            </button>
            <p>Shop Our Best Selling Snack Boxes and Gifts</p>
            <button onClick={nextSlide} className={styles.navButton}>
              <img src="./src/assets/icons8-right-arrow-50.png" alt="Next" />
            </button>
          </div>
          <div
            className={styles.carouselInner}
            style={{
              transform: `translateX(-${currentIndex * (100 / cheapSnacks.length)}%)`,
              width: `${cheapSnacks.length * 100}%`,
            }}
          >
            {cheapSnacks.map((cheapSnack, index) => (
              <div
                key={cheapSnack.id}
                className={styles.carouselItem}
                style={{ width: `{calc(100%/${itemsPerPage}) / ${cheapSnacks.length}%` }}
              >
                <SnackCard snack={cheapSnack} />
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
};

export default LandingPage;
