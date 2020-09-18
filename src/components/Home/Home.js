import React, { useState } from 'react';
import './Home.css'
import Travel from '../../FakeData/Travel'
import { Link, useHistory } from 'react-router-dom';


const Home = () => {
    const [travel,setTravel]=useState(Travel)
    
//     const history = useHistory()
//    const handleCard=(id)=>{
//          history.push(`/${id}`)   
//    }

    return (
        <div className="homeBackground">
            <div className="overlay">
        <div className=" bookingPart container">
            <div className="row">
            <div className="col-md-5">
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp .</p>
                <button className="AllButton">Booking -></button>
            </div>
            <div className="col-md-7">
            {
                travel.map(({img,id,name})=>
                    <div key={id} className="d-flex justify-content-around">
                 <Link  to={"/"+id}> <div  style={{width:"200px"}} className="card ">
                    <img style={{width:"200px", height:"200px"}} className="card-img" src={img} alt="Card image"/>
                <h4 className="text-dark">{name}</h4>
                  </div>
                  </Link>
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