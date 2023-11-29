import { useState } from 'react';

function BookingForm(props) {



    const occasions = [
        'Birthday',
        'Anniversary'
    ];

    function handleSubmit(e) {
        e.preventDefault();
        props.setConfirmed(true);
    }   


    return (
    <>
        <form style={{display: "grid", maxWidth: "100px", gap: "5px", padding:"20px"}}>
            <label htmlFor='res-date'>Choose date</label>
            <input type="date" value={props.booking.date}
            id="res-date" onChange={(e) => props.setBooking({...props.booking, date: e.target.value})} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={(e) => props.setBooking({...props.booking, time: e.target.value})}>
                {props.availableTimes.map((time, index) => {
                    return <option key={index} value={time}>{time}</option>
                }
                )}

            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="2" min="1" max="10" id="guests" onChange={(e) => props.setBooking({...props.booking, guestCount: e.target.value})}
            />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => props.setBooking({...props.booking, occasion: e.target.value})}>
                {occasions.map((occasion, index) => {
                    return <option key={index} value={occasion}>{occasion}</option>}
                )}
            </select>
            <br />
            <input type="submit" value="Make Your Reservation" 
            style={{backgroundColor: '#F4CE14', color: 'black', border: 'none', padding: '5px', borderRadius: '5px'}}
            onClick={handleSubmit}
            ></input>
        </form>
        {/* <pre>{JSON.stringify(props.booking, null, 2)}</pre> */}

    </>
    );
  }
  
  export default BookingForm;