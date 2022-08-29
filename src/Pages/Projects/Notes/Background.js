import React from 'react'
import './Background.css'
const Background = ({ notes, element, toggle, setToggle }) => {

  const color1 = () =>{
    document.getElementById(element.id).style.background = '#f28b82'
    setToggle(false)
  }
  const color2= () =>{
    document.getElementById(element.id).style.background = '#fbbc04'
     setToggle(false)
  }
  const color3 = () =>{
    document.getElementById(element.id).style.background = '#fff475'
    setToggle(false)
  }
  const color4 = () =>{
    document.getElementById(element.id).style.background = '#ccff90'
    setToggle(false)
  }
  const color5 = () =>{
    document.getElementById(element.id).style.background = '#a7ffeb'
    setToggle(false)
  }
  const color6 = () =>{
    document.getElementById(element.id).style.background = '#cbf0f8'
    setToggle(false)
  }
  const color7 = () =>{
    document.getElementById(element.id).style.background = '#e6c9a8'
    setToggle(false)
  }
  const color8 = () =>{
    document.getElementById(element.id).style.background = '#d7aefb'
    setToggle(false)
  }
  const color10 = () =>{
    document.getElementById(element.id).style.background = '#ffffff'
    setToggle(false)
  }

  return (
    <div className='mb-0 mt-2 border p-3 rounded-lg shadow-lg'>
      <button onClick={color1} className='main  border border-black'></button>
      <button onClick={color2} className='main1 border border-black'></button>
      <button onClick={color3} className='main2 border border-black'></button>
      <button onClick={color4} className='main3 border border-black'></button>
      <button onClick={color5} className='main4 border border-black'></button>
      <button onClick={color6} className='main5 border border-black'></button>
      <button onClick={color7} className='main6 border border-black'></button>
      {/* <button onClick={color8} className='main7 border border-black'></button> */}
      <button onClick={color10} className='main9 border border-black'></button>
    </div>
  );
};

export default Background