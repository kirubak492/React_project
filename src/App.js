import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./App.css";
import { useState } from 'react';

function App(){
  const [items,setItem]=useState([
    {
      id:1,
      checked:true,
      item: "play coding"
    },
    {
      id:2,
      checked:false,
      item: "play football"
    },
    {
      id:3,
      checked:true,
      item: "play games"
    }
  ])
  const handlecheck=(id)=>{
    const listitems=items.map((item)=>(
      item.id===id ? {...item,checked:!item.checked} :item
    ))
    setItem(listitems)
    localStorage.setItem("todo",JSON.stringify(listitems))
  }
  const handledelete=(id)=>{
    const listitems=items.filter((item)=>(
      item.id!=id 
    ))
    setItem(listitems)
    localStorage.setItem("todo",JSON.stringify(listitems))
  } 
 
  return (
    <div className="App">
      <Header title="To do list"/>
      <Content
       items={items}
       handlecheck={handlecheck}
       handledelete={handledelete}
       />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
