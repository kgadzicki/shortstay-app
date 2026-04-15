import { use, useState } from "react";
import ThemeContext from "../../../context/ThemeContext";

export default function SearchBar(props) {
  const [value, setValue] = useState("");
  const themeContext = use(ThemeContext);

  const styles = { borderRadius: 8, marginRight: 5 };

  const onSearch = () => {
    props.onSearch(value);
  };
  const onKeyDown = (e) => {
    if (e.code === "Enter") onSearch();
  };

  return (
    <div className="d-flex">
      <input
        placeholder="Szukaj..."
        style={styles}
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button
        type="button"
        className={`btn btn-${themeContext.color}`}
        onClick={onSearch}
      >
        Szukaj
      </button>
    </div>
  );
}
