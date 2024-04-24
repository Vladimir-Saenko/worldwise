import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [urlParams, setUrlParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = urlParams.get("lat");
  const lng = urlParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      Map {lat & lng ? `lat=${lat}, lng=${lng}` : ""}
    </div>
  );
}

export default Map;
