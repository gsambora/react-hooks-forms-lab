import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({handleNewItem, items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemSearch(event) {
    //console.log("handling")
    setSearchItem(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All"){
      if (searchItem === ""){
        return true;
      }
      return item.name.toLowerCase().includes(searchItem.toLowerCase());
    } 
    return item.category === selectedCategory;
  });



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {handleNewItem} />
      <Filter search = {searchItem} onSearchChange = {handleItemSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
