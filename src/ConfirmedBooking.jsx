import { useState } from 'react';

function ConfirmedBooking(props) {



    return (
    <>
        <div style={{display: "grid", maxWidth: "400px", gap: "5px"}}>
            <h1> Reservation Confirmed!</h1>
                <div style={{padding:"20px"}}>
                <p style={{color:'white', margin:'0px'}}> Date: {props.booking.date}</p>
                <p style={{color:'white', margin:'0px'}}> Time: {props.booking.time}</p>
                <p style={{color:'white', margin:'0px'}}> Number of Guests: {props.booking.guestCount}</p>
                <p style={{color:'white', margin:'0px'}}> Occasion: {props.booking.occasion}</p>
                <button onClick={() => props.setConfirmed(false)} style={{backgroundColor: '#F4CE14', color: 'black', marginTop: '10px', border: 'none', padding: '5px', borderRadius: '5px', width: '150px'}}
                >Modify Reservation</button>
                </div>

        </div>

    </>
    );
  }
  
  export default ConfirmedBooking;