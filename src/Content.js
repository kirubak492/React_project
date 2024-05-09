import React from 'react'

import { FaTrashAlt } from "react-icons/fa";
import itemList from './itemList';

const Content = ({items,handlecheck,handledelete}) => {
  
      
  return (
    <main>
      {(items.length)?(
        <itemList
        />
      ):(<p style={{marginTop:'2rem',color:'red'}}>Your list is Empty</p>)
    }
    </main>
    
  )
}

export default Content