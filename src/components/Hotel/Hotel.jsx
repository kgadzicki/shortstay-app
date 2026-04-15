import styles from "../Hotel/hotel.module.css";
import ThemeContext from "../../context/ThemeContext";
import { use } from "react";
/**
 * Hotel component
 * @param {{
 * id: number,
 * name: string,
 * city: string,
 * rating: string,
 * description: string,
 * image: string
 * }} props
 */
export default function Hotel(props) {
  const { name, city, rating, description, image } = props;
  const themeContext = use(ThemeContext);

  return (
    <div className={styles.hotel}>
      <div className="row">
        <div className="col-4">
          <img src={image} className="img-fluid img-thumbnail" alt="" />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-6">
              <p>
                <b>{name}</b>
              </p>
              <span className="badge text-bg-light">{city}</span>
            </div>
            <div className="col-6">
              <p>
                <b>Ocena: {rating}</b>
              </p>
              <span className="badge text-bg-secondary">233</span>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <div className="text-end">
        <button className={`btn btn-${themeContext.color}`}>Pokaż</button>
      </div>
    </div>
  );
}
