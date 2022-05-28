import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Filters from './components/Filters'
import Rest from './components/Rest'
import userinfo from './Data/userinfo.json'
import offerjson from './Data/offer.json'
import rest from './Data/Rest.json'
import './App.css'
import { useState } from "react";

const filter={
  1:"Cost High to Lost",
  2:"Cost Lost to High",
  3:"Ratings",
  4:"Delivery Time",
  5:"Relevance",
}

function App() {
  const [filterBy,setFilterby]=useState("")
  const [data,setData]=useState(rest)

  const updateFilter=(newFilter)=>{
    // if(newFilter==filterBy){
    //   setFilterby("")
    //   setData(rest)
    // }
    switch(newFilter){
      case "1":{
        setFilterby(1)
        data.sort((a,b)=>a.costForTwo-b.costForTwo)
        setData(data)
        break;
      }
      case "2":{
        setFilterby(2)
        data.sort((a,b)=>b.costForTwo-a.costForTwo)
        setData(data)
        break;
      }
      default:{
        setData(rest)
        break;
      }
    }
    
  }
  return (
    <div>
      <Navbar {...userinfo.location}/>
      <Offers offerjson={offerjson}/>
      <section className="near-you">
      <Filters filter={filter} currentFilteredBy={filterBy} updateFilter={updateFilter}/>
      <Rest rest={data}/>
      </section>
    </div>
  );
}

export default App;
