import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

import styles from "./CityList.module.css";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading, currentCity } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Добавьте первый город кликом на карте." />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} currentCity={currentCity} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
