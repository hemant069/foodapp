import React from 'react'

const Offers = (props) => {
  console.log(props)
  
  return (
    <section className="offers">
    <div className="container">
   { props.offerjson.map((offer,index)=>(
     
      <img key={index} className="offer" src={offer} />
    ))}
       
    </div>
</section>
  )
}

export default Offers