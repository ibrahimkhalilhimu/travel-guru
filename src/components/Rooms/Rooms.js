import React, { useState } from 'react';
import RoomData from '../../FakeData/RoomData'
import star from '../../Icon/star_1_.png'

const Rooms = () => {
    const [roomData,useRoomData] = useState(RoomData)
  console.log(RoomData);

    return (
       
    <div className=" bookingPart container">
       
        {
          roomData.map(({img,room,roomCatagory,Advantage,rating,price,id})=>
          
          <div className="card text-dark float-center" key={id} style={{width: "18rem"}}>
     <img className="card-img-top" src={img} alt="Card image cap"/>
  <div className="card-body">
        <h5 className="card-title">{room}</h5>
        <p className="card-text">{roomCatagory}</p>
        <p className="card-text">{Advantage}</p>
        <p className="card-text"><img style={{width:"19px"}} src={star} alt=""/> {rating} </p>
        <p className="card-text">${price}/night $167 </p>
  </div>
</div>

          
          )  
        }
       
        
       
       
    </div>
   
    );
};

export default Rooms;