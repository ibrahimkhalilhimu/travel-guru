import React,{ useState} from 'react';
import './Booking.css'
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useHistory } from 'react-router-dom';

const Booking = () => {
    const [selectedDate,setSelectedDate] = useState(null)
    const [newSelectedDate,setNewSelectedDate] = useState(null)

    const history = useHistory()
    const handleRooms=()=>{
        history.push('/rooms')
    }
    return (
        <div className="homeBackground">
            <div className="overlay">
        <div className=" bookingPart container">
            <div className="row">
            <div className="col-md-5">
                <h1>COX'S BAZAR</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta atque assumenda soluta quo necessitatibus. Alias saepe quae hic, veniam fugiat ut, nobis molestias neque, explicabo ab suscipit rerum obcaecati.</p>
            </div>
            
            <div className="col-md-7">
                <div style={{paddingLeft:"190px"}}>
            <form >
                <h5>Origin</h5>
                <input type="text" required/>
                <br/>
                <h5>Destination</h5>
                <input type="text" name="" id="" required/>
                <br/>
                <h5>From</h5>
                {/* <input type="text" name="" id=""/> */}
                <Datepicker selected={selectedDate} onChange={date=>setSelectedDate(date)}
                datepicker='yyyy/MM/dd'
                showYearDropdown
                scrollableMonthYearDropdown
                />
                <h5>To</h5>
                <Datepicker selected={newSelectedDate} onChange={date=>setNewSelectedDate(date)}
                datepicker='yyyy/MM/dd'
                showYearDropdown
                scrollableMonthYearDropdown
                />
                {/* <input type="text" name="" id=""/> */}
                <br/><br/>
                <input onClick={handleRooms} className="AllButton" type="button" value="Start Booking"/>
            </form>
            </div>
            
            
            </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Booking;