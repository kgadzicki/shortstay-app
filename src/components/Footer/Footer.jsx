import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import ThemeButton from "./ThemeButton";

export default function Footer() {
  const themeContext = useContext(ThemeContext);

  return (
    <p className={`text-${themeContext.color}`}>
      Stopka
      <ThemeButton />
    </p>
  );
}
