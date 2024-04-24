import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, position, notes, id } = city;
  return (
    <div>
      <li>
        <Link
          className={styles.cityItem}
          to={`${id}?cityName=${cityName}&lat=${position.lat}&lng=${position.lng}&emoji=${emoji}&date=${date}&notes=${notes}`}
        >
          <span className={styles.emoji}>{emoji}</span>
          <h3 className={styles.name}>{cityName}</h3>
          <time className={styles.date}>({formatDate(date)})</time>
          <button className={styles.deleteBtn}>&times;</button>
        </Link>
      </li>
    </div>
  );
}

export default CityItem;
