import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [itemName, setNewName] = useState("");
  const [itemCategory, setNewCategory] = useState("All");

  function handleSubmit(event){
    event.preventDefault();
    const formData = {name:itemName, category:itemCategory, id:uuid()};
    onItemFormSubmit(formData);

    setNewName("");
    setNewCategory("All");
  }

  return (
    <form onSubmit = {handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={(e)=>{setNewName(e.target.value)}}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={(e)=>{setNewCategory(e.target.value)}}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
