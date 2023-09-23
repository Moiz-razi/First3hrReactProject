import React from 'react'

const TopSection = () => {
  return (
    <div>
    <label htmlFor='Id' >Products ID:</label>
     <input type='number' id='id' /> 

     <label>Selling Price</label>
     <input type='number'/>

     <label>Product Name</label>
     <input type='text'/>
    </div>
  )
}

export default TopSection
