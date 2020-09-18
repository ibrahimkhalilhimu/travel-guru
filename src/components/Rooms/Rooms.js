import React, { useState } from 'react';
import RoomData from '../../FakeData/RoomData'
import star from '../../Icon/star_1_.png'

const Rooms = () => {
    const [roomData,useRoomData] = useState(RoomData)
  console.log(RoomData);

    return (
       
    <div className=" bookingPart container">
     <div className="row">
     <div className="col-md-6">
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
    <div className="col-md-6">
    <iframe style={{width:"100%", height:"500px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237650.31499813742!2d91.85046611800679!3d21.45728519334587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1600435920922!5m2!1sen!2sbd"
   >
      
    </iframe>
    </div>
        
     </div>  
       
    </div>
   
    );
};

export default Rooms;