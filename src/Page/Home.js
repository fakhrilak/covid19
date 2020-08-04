import React,{useEffect,useState} from 'react'
import './Home.css'
import Thumbnail  from '../img/Thumbnail.jpg'
const Home = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
       fetch('https://coronavirus-19-api.herokuapp.com/all')
       .then(response=>response.json())
       .then(json=>setData(json))
    })
  return (
    <div className="Home">
        <div className = "Content-Home">
            <img src={Thumbnail}/>
            <div className = "Content" style={{ left: '50%'}}>
                <div style={{color:'#FF0742',paddingLeft:20}}><h3>{data.cases}</h3><p>Coronavirus Cases</p></div>
                <div style={{color:'#FF0742'}}><h3>{data.deaths}</h3><p>Total Deaths</p></div>
                <div style={{color:'#FF0742'}}><h3>{data.recovered}</h3><p>Recovered Cases</p></div>
            </div>
        </div>
    </div>
  )
}

export default Home
