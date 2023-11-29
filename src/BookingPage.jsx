import { useState, useReducer } from 'react';
import BookingForm from './BookingForm.jsx';
import BookingConfirmation from './BookingConfirmation.jsx';



const reducer = (state, action) => {
    if (action.type === 'updateTimes') {
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
        const times = ['17:00', '18:00', '19:00', '20:00', , '21:00', '22:00'];
        return times;
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    function updateTimes() {
        dispatch({type: 'updateTimes', payload: ['17:00', '18:00', '19:00', '20:00', , '21:00', '22:00']})
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
                    />
                    </>:
                    <BookingConfirmation 
                    booking={booking}
                    setConfirmed={setConfirmed}
                    />}
            </div>
        </div>
    );
  }
  
  
  export default BookingPage;