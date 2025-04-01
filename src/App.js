import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState({});

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function setSelected(filterType, value){
    setSelectedCategory((prevFilters) => {
      let updatedFilters = {};
      for (let key in prevFilters) {
        updatedFilters[key] = prevFilters[key];
      }
      updatedFilters[filterType] = value || "";
      return updatedFilters;
    });
  }

  // ----------- Radio Filtering -----------
  const handleChange = (filterType, value) => {
    setSelected(filterType, value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (filterType, value) => {
    setSelected(filterType, value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }

    filteredProducts = filteredProducts.filter((product) => {
      for (let key in selectedCategory) {
        let value = selectedCategory[key];
        if (value && product[key] !== value) {
          return false;
        }
      }
      return true;
    });
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
