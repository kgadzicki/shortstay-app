import SearchBar from "../App/Searchbar/SearchBar";
import styles from "./header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header + "container"}>
        <div>
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default Header;
