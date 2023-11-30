import { useState, useReducer } from 'react';
import BookingForm from './BookingForm.jsx';
import ConfirmedBooking from './ConfirmedBooking.jsx';

import { fetchAPI, submitAPI } from './api.js';



const reducer = (state, action) => {
    if (action.type === 'updateTimes') {
        // console.log(action.payload);
        return action.payload;
    }
    return state;
}


function BookingPage() {
    const [booking, setBooking] = useState({
        date: '',
        time: '',
        guestCount: 2,
        occasion: 'Birthday'
    });

    const [confirmed, setConfirmed] = useState(false);
    
    function initializeTimes() {
        const times = [];
        return times;
    }

    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());


    function updateDate() {
        dispatch({type: 'updateTimes', payload: fetchAPI(booking.date)['availableTimes']})
    }



    
    return (
        <div className="grid" style={{backgroundColor: '#495E57'}}>
            <div className="span2"></div>
            <div className="span4" style={{marginBottom:"10px"}} >

                {!confirmed ?
                <>
                    <h1> Reservations</h1>
                    <BookingForm 
                    availableTimes={availableTimes} 
                    dispatch={dispatch}
                    booking={booking}
                    setBooking={setBooking}
                    setConfirmed={setConfirmed}
                    updateDate={updateDate}
                    />
                    </>:
                    <ConfirmedBooking 
                    booking={booking}
                    setConfirmed={setConfirmed}
                    submitAPI={submitAPI}

                    />}
            </div>
        </div>
    );
  }
  
  
  export default BookingPage;