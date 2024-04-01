import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Mainpanel.css'
import Linechart from './Linechart'
import PiChart from './Pichart'
import Card from './Card'

const Mainpanel = () => {
  const [list, setList] = useState([])
  console.log(list);
  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => response.json())
      .then((data) => {
        {
          const newList = Object.values(data.bpi).map((val) => (val))
          setList(newList)
        }


      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className="main" style={{ marginLeft: "10px" }}>
      <div className="navbarContainer">
        <Navbar />
      </div>
      <div className="chartContainer">
        <div className="chart">
          <div className="marketoverview">
            <div className="marketHeader">Market Overview</div>
            <div className="marketNav">
              Population
            </div>
          </div>
          <div className="linechart">
            <Linechart />
          </div>
        </div>
        <div className="chart2">
          <h4 style={{ color: 'white' }}>Wallet</h4>
          <div className="line"></div>
          <div className="piechart">
            <PiChart />
          </div>
            <div className="line"></div>
            <button className="wallet">Manage Wallet</button>
        </div>
        <div className="chart2">
          <h4 style={{ color: 'white' }}>Wallet</h4>
          <div className="line"></div>
          <div className="piechart">
            <PiChart />
          </div>
            <div className="line"></div>
            <button className="wallet">Manage Wallet</button>
        </div>
      </div>
      <div className="assest">Assets</div>
      <div className="mainCardContainer">
        {list.map((e, i) => (<Card key={i} code={e.code} symbol={e.symbol} rate={e.rate} description={e.description} />))}
      </div>
    </div>
  )
}

export default Mainpanel