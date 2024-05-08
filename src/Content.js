import React from 'react'
import { useState } from 'react';


const Content = () => {
  
  const [items,setItem]=useState([
    {
      id:1,
      checked:true,
      item: "practice coding"
    },
    {
      id:2,
      checked:true,
      item: "Learn React and Django"
    },
    {
      id:3,
      checked:true,
      item: "Learn AI"
    }
  ])
  
    
  return (
    <main>
      <ul>
        {items.map((item)=>(
          <li>
            <input type="checkbox" 
             checked={item.checked}
             />
             <label>{item.item}</label>
             <button>delete</button>
          </li>
         
        ))}
      
      </ul>
    </main>
    
  )
}

export default Content