import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import unsplashApi from "./api/unsplashApi";
import { useEffect, useState } from "react";
const App = () => {
  const [pins, setPins] = useState([]);

  const getImages = (term) => {
    return unsplashApi.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
    });
  };
  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ["sea", "bali", "tokyo", "nature", "car", "cats"];
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);

          pinData.sort(function (a, b) {
            return 0.5 - Math.round();
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      setPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  const onSearchSubmit = (term) => {
    getImages(term).then((res) => {
      let results = res.data.results;

      let newPins = [...results, ...pins];

      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });

      setPins(newPins);
    });
  };

  return (
    <div className='App'>
      <Header onSearchSubmit={onSearchSubmit} />
      <MainBoard pins={pins} />
    </div>
  );
};

export default App;
