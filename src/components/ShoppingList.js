import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("")
  const [list, setList] = useState([...items])
  
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchTextChange(event){
    setSearchText(event.target.value)
  }

  function handleItemSubmit(newItem){
    setList([...list, newItem])
  }

  const itemsToDisplay = list
  .filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  })
  .filter((item) => {
    if (item.name.toLowerCase().includes(searchText.toLowerCase())){
      return true
    }
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemSubmit}/>
      <Filter search ={searchText} onCategoryChange={handleCategoryChange} onSearchChange ={handleSearchTextChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
