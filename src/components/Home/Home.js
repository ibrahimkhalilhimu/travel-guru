import React, { useState } from 'react';
import './Home.css'
import Travel from '../../FakeData/Travel'


const Home = () => {
    const [travel,setTravel]=useState(Travel)
   

    return (
        <div className="homeBackground">
            <div className="overlay">
        <div className=" bookingPart container">
            <div className="row">
            <div className="col-md-5">
                <h1>COX'S BAZAR</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta atque assumenda soluta quo necessitatibus. Alias saepe quae hic, veniam fugiat ut, nobis molestias neque, explicabo ab suscipit rerum obcaecati.</p>
                <button className="AllButton">Booking -></button>
            </div>
            <div className="col-md-7">
            {
                travel.map(data=>
                    <div className="d-flex justify-content-around">
                    <div style={{width:"200px"}} className="card ">
                    <img style={{width:"200px", height:"200px"}} class="card-img" src={data.img} alt="Card image"/>
                  </div>
                    </div>
                    )
            }
            </div>
            </div>
         </div>
         </div>
         </div>
    );
};

export default Home;