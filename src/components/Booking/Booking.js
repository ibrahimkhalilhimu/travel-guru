import React,{ useState} from 'react';
import './Booking.css'
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useHistory,useParams } from 'react-router-dom';
import Travel from '../../FakeData/Travel'

const Booking = () => {
   
    let {bookingId} = useParams();
    const booking = Travel.find(data=>data.id == bookingId)
    const [details,setDetails]= useState(booking)

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

         <h1 > {details.name}</h1>
        <p>{details.details}</p>

            </div>
            
            <div className="col-md-7">
                <div style={{paddingLeft:"190px"}}>
            <form >
                <h5>Origin</h5>
                <input type="text" required/>
                <br/>
                <h5>Destination</h5>
                <input  type="text" name="" id="" placeholder={details.name} required/>
                <br/>
                <h5>From</h5>
                {/* <input type="text" name="" id=""/> */}
                <Datepicker selected={selectedDate} onChange={date=>setSelectedDate(date)}
              
                showYearDropdown
                scrollableMonthYearDropdown
                placeholder="dd/mm/yyyy"
                id="datePicker"

                />
                <h5>To</h5>
                <Datepicker selected={newSelectedDate} onChange={date=>setNewSelectedDate(date)}
               placeholder="dd/mm/yyyy"
                showYearDropdown
                scrollableMonthYearDropdown
                id="datePicker"
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