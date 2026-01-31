
import styles from "./Card.module.css";
import { useState } from "react";

function Card({ title, fruit }) {
  const [liked, setLiked] = useState(false);

  function toggleLike() {
    setLiked(!liked);
  }

  return (
    <div className={styles.fruitCard}>
      <div className={styles.imageContainer}>
        <img src={fruit} alt={`${title} fruit`} className={styles.image} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.status}>
        Status: {liked ? "Added to favorites" : "Not added to favorites"}
      </p>
      <button
        onClick={toggleLike}
        className={`${styles.button} ${liked ? styles.buttonRemove : styles.buttonAdd}`}
      >
        {liked ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default Card;