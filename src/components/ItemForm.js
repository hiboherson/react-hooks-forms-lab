import React, { useState } from 'react';

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Date.now().toString(),
      name,
      category,
    };
    onItemFormSubmit(newItem);
    setName('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} data-testid="item-form">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Name"
        />
      </label>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
