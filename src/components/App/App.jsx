import "./App.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Hotels from "../Hotels/Hotels";
import { createContext, useEffect, useState } from "react";
import LoadingIcon from "../UI/LoadingIcon/Loading";
import SearchBar from "../UI/Searchbar/SearchBar";
import Layout from "../Layout/Layout";
import Footer from "../Footer/Footer";
import ThemeButton from "../Footer/ThemeButton";
import ThemeContext from "../../context/ThemeContext";
import AuthContext from "../../context/AuthContext";

const initHotels = [
  {
    id: 1,
    name: "Pod akacjami",
    city: "Warszawa",
    rating: "8.5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolorem at consectetur harum libero mollitia repudiandae aperiam cumque expedita officia totam magnam, in ipsum animi molestias exercitationem neque praesentium quo.",
    image: "https://picsum.photos/id/237/300/200",
  },
  {
    id: 2,
    name: "Dębowy",
    city: "Lublin",
    rating: "8.2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolorem at consectetur harum libero mollitia repudiandae aperiam cumque expedita officia totam magnam, in ipsum animi molestias exercitationem neque praesentium quo.",
    image: "https://picsum.photos/id/238/300/200",
  },
  {
    id: 3,
    name: "Staszkowo",
    city: "Chełm",
    rating: "2.1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolorem at consectetur harum libero mollitia repudiandae aperiam cumque expedita officia totam magnam, in ipsum animi molestias exercitationem neque praesentium quo.",
    image: "https://picsum.photos/id/239/300/200",
  },
];

function App() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [themeColor, setThemeColor] = useState("primary"); // danger, warning
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Symulacja dancych pobranych z BE
    setTimeout(() => {
      console.log("dane pobrane z BE");
      setHotels(initHotels);
      setLoading(false);
    }, 2000);
  }, []);

  const onSearch = (query) => {
    //console.log("App szukaj", query);
    const filteredHotels = initHotels.filter((hotel) =>
      hotel.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    );
    setHotels(filteredHotels);
  };
  const changeColor = () => {
    setThemeColor(themeColor === "danger" ? "primary" : "danger");
  };
  const header = (
    <Header>
      <div className="d-flex" style={{ gap: 10 }}>
        <SearchBar onSearch={onSearch} />
        <ThemeButton />
      </div>
    </Header>
  );
  const content = loading ? <LoadingIcon /> : <Hotels hotels={hotels} />;
  return (
    <>
      <ThemeContext.Provider
        value={{
          color: themeColor,
          changeColor,
        }}
      >
        <AuthContext.Provider
          value={{
            isAuthenticated: !!user,
            logIn: () => setUser(true),
            logOut: () => setUser(null),
          }}
        >
          <Layout
            className="container"
            header={header}
            menu={<Menu />}
            content={content}
            footer={<Footer />}
          />
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
