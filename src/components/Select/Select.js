import React from 'react'

const Select = () => {
  return (
    <div>
      <label>Choose Category</label>
      <select htmlFor='opts'>
        <option>Select</option>
        <option>Electronics</option>
        <option>Food</option>
        <option>Skincare</option>
     </select>
    </div>
  )
}

export default Select
