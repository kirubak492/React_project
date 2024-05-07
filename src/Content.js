import React from 'react'

const Content = () => {
  function namechange(){
    const name=["Earn", "Grow","Give"];
    const int =Math.floor(Math.random()*3);
    return name[int]
  }

  const handleclick=(e)=>{
    console.log(e.target.innerText)
  }
  const handleclick2=(name)=>{
    console.log("Thank you for support",name)
  }
  return (
    <main>
      <p onDoubleClick={()=>handleclick2('kiruba')}>Lets {namechange()} money</p>
      <button onClick={(e)=>handleclick(e)}>Subscribe</button>
    </main>
    
  )
}

export default Content