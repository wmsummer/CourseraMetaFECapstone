import { useState } from 'react';

function ConfirmedBooking(props) {



    return (
    <>
        <div style={{display: "grid", maxWidth: "400px", gap: "5px"}}>
            <h1> 
            <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512" style={{marginRight: "10px"}}>
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" fill="#F4CE14"/>
            </svg>
                Reservation Confirmed!</h1>
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