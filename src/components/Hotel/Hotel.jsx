import styles from "../Hotel/hotel.module.css";
import hotelImg from "../../assets/images/hotel.jpg";

export default function Hotel() {
  return (
    <div className={styles.hotel}>
      <div className="row">
        <div className="col-4">
          <img src={hotelImg} className="img-fluid img-thumbnail" alt="" />
        </div>
        <div className="col-8"></div>
        <div className="row">
          <div className="col-6">
            <p>
              <b>Pensjonat</b>
            </p>
            <span className="badge text-bg-light">Warszawa</span>
          </div>
          <div className="col-6">
            <p>
              <b>Ocena: 8.5</b>
            </p>
            <span className="badge text-bg-secondary">233</span>
          </div>
        </div>
      </div>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        animi expedita ullam quidem, culpa voluptas, fuga autem, neque
        voluptatem laudantium tempore id. Quos dolores alias eos ratione
        repellendus eum similique!
      </p>
      <div className="text-end">
        <button className="btn btn-primary">Pokaż</button>
      </div>
    </div>
  );
}
