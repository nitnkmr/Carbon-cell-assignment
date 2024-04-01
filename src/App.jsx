import { useState,useEffect } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Sidepanel from './component/Sidepanel'
import Mainpanel from './component/Mainpanel'
import { FaBars } from "react-icons/fa";


function App() {
  const [count, setCount] = useState(false)
  const [width, setWidth] = useState(0);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    console.log(width);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    if(width<1029){
      setCount(false);
      console.log(count, "count")
    }else{
      setCount(true);

    }
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);
  function getState(data){
    setCount(data);
    console.log(data, "data")
    console.log(count, "count")
  }
  function handleClick(){
    setCount(!count);

  }

  return (
    <>
      <div className="container">
      {count ?<div className="left">
        <Sidepanel getState={getState} />
        </div>:<div className={`left-hide`} onClick={handleClick}><FaBars/>
        </div>}
        <Routes>
        <Route exact path="/" element={count ? <div className="right"><Mainpanel/></div> : <div className="right-full"><Mainpanel/></div>} />
        <Route exact path="organization" element={<div className="right"><h1 style={{color:"white"}}>Organization</h1></div>} />
        <Route exact path="assets" element={<div className="right"><h1 style={{color:"white"}}>assest</h1></div>} />
        <Route exact path="trade" element={<div className="right"><h1 style={{color:"white"}}>Trade</h1></div>} />
        <Route exact path="history" element={<div className="right"><h1 style={{color:"white"}}>history</h1></div>} />
        <Route exact path="wallet" element={<div className="right"><h1 style={{color:"white"}}>wallet</h1></div>} />
        <Route exact path="notification" element={<div className="right"><h1 style={{color:"white"}}>Notification</h1></div>} />
        <Route exact path="support" element={<div className="right"><h1 style={{color:"white"}}>support</h1></div>} />
        <Route exact path="setting" element={<div className="right"><h1 style={{color:"white"}}>setting</h1></div>} />
        </Routes>
      </div>
    </>
  )
}

export default App
