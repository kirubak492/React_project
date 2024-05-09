import React from 'react'

const itemList = () => {
  return (
    <ul>
    {items.map((item)=>(
      <li className="item" key={item.id}>
        <input type="checkbox" 
         onChange={()=>handlecheck(item.id)}
         checked={item.checked}
         />
         <label
         style={(item.checked)?{textDecoration:"line-through"}:null}
         onDoubleClick={()=>handlecheck(item.id)}>{item.item}</label>
         <FaTrashAlt 
          role="button"
          tabIndex="0"
          onClick={()=>handledelete(item.id)}
          />
         
         
      </li>
     
    ))}
  
  </ul>
  )
}

export default itemList