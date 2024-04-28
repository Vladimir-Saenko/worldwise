import { Link, useNavigate } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, position, notes, id } = city;
  const navigate = useNavigate();

  async function handleDeleteCity(e) {
    e.preventDefault();
    if (!id) return;

    await deleteCity(id);
    navigate("/app/cities");
  }

  return (
    <div>
      <li>
        <Link
          className={`${styles.cityItem} ${
            id === currentCity.id ? styles["cityItem--active"] : ""
          }`}
          to={`${id}?cityName=${cityName}&lat=${position.lat}&lng=${position.lng}&emoji=${emoji}&date=${date}&notes=${notes}`}
        >
          <span className={styles.emoji}>{emoji}</span>
          <h3 className={styles.name}>{cityName}</h3>
          <time className={styles.date}>({formatDate(date)})</time>
          <button className={styles.deleteBtn} onClick={handleDeleteCity}>
            &times;
          </button>
        </Link>
      </li>
    </div>
  );
}

export default CityItem;
