import React, { useState } from 'react';
import Item from './Item';
import Filter from './Filter'; 

function ShoppingList({ items }) {
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchText, setSearchText] = useState('');

  
  function handleSearchChange(searchTerm) {
    setSearchText(searchTerm); 

    if (searchTerm.trim() === '') {
      setFilteredItems(items); 
    } else {
    
      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered); 
    }
  }

  return (
    <div className="ShoppingList">
      {/* Render Filter component with search and handleSearchChange prop */}
      <Filter search={searchText} onSearchChange={handleSearchChange} />
      
      {/* Render list of filtered items */}
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
