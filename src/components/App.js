import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items"; 

function App() {
  const [items, setItems] = useState(itemData); 
  const [isDarkMode, setIsDarkMode] = useState(false); 

  
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      {/* Header component with dark mode props */}
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      
      {/* ShoppingList component to display items */}
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
