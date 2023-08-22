import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
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

 const [itemName, setNewName] = useState("");
 const [itemCategory, setNewCategory] = useState("All");

 function handleNewItem(event) {
  event.preventDefault();

  setNewName(event.target[0].value);
  setNewCategory(event.target[1].value);

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  };
  
  console.log(newItem);
 }

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
