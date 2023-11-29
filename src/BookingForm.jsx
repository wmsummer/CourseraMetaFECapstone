import { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';

function BookingForm(props) {



    const occasions = [
        'Birthday',
        'Anniversary'
    ];

    function handleSubmit(e) {
        e.preventDefault();
        props.setConfirmed(true);
        props.setBooking({...props.booking, date: formik.values.date, time: formik.values.time, guestCount: formik.values.guestCount, occasion: formik.values.occasion})
    }   

    const formik = useFormik({
        initialValues: props.booking,
        validationSchema: Yup.object({ 
          date: Yup.date().required('Required'),
          time: Yup.string().required('Required'),
          guestCount: Yup.number().required('Required'),
          occasion: Yup.string().required('Required')
        })
      });


    return (
    <>
        <form style={{display: "grid", maxWidth: "100px", gap: "5px", padding:"20px"}}>
            <div style={{paddingBottom: "10px"}}>
                <label htmlFor='date'>Choose date</label>
                <input type="date" 
                    value={props.booking.date}
                    id="date" onChange={(e) => props.setBooking({...props.booking, date: e.target.value})} 
                    {...formik.getFieldProps('date')}
                />
                {formik.errors.date && formik.touched.date &&
                <p style={{color:'red', margin:'0px'}}>Please select a date</p>}
            </div>
            <div style={{paddingBottom: "10px"}}>
                <label htmlFor="time">Choose time</label>
                <br />
                <select id="time" onChange={(e) => props.setBooking({...props.booking, time: e.target.value})}
                    {...formik.getFieldProps('time')}>
                    {props.availableTimes.map((time, index) => {
                        return <option key={index} value={time}>{time}</option>})
                    }
                </select>
                {formik.errors.time && formik.touched.time &&
                <p style={{color:'red', margin:'0px'}}>Please select a time</p>}
            </div>
            <div style={{paddingBottom: "10px"}}>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="2" min="1" max="10" id="guests" onChange={(e) => props.setBooking({...props.booking, guestCount: e.target.value})}
                />
            </div>
            <div style={{paddingBottom: "10px"}}>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => props.setBooking({...props.booking, occasion: e.target.value})}>
                {occasions.map((occasion, index) => {
                    return <option key={index} value={occasion}>{occasion}</option>}
                )}
            </select>
            </div>
            <input type="submit" value="Make Your Reservation" 
                style={!formik.isValid || !formik.dirty ? {backgroundColor: '#F4CE14', color: 'gray', marginTop: '10px', border: 'none', padding: '5px', borderRadius: '5px', width: '150px', cursor: 'not-allowed'
                } : {backgroundColor: '#F4CE14', color: 'black', marginTop: '10px', border: 'none', padding: '5px', borderRadius: '5px', width: '150px', cursor: 'pointer'}}
                onClick={handleSubmit}
                disabled={!formik.isValid || !formik.dirty}
                aria-label="On Click"
                >
            </input>
        </form>
        {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre>
        <pre>{JSON.stringify(props.booking, null, 2)}</pre> */}

    </>
    );
  }
  
  export default BookingForm;