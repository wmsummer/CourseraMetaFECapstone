
//file is used in course instructions returns 404 error so i create my own basic dummy version

export function fetchAPI(date) {
    // Return available times based on if the day in the date is odd or even

    if (date.split('-')[2]%2 === 0) {
        return {availableTimes:['17:00', '18:00', '19:00', '20:00', , '21:00', '22:00']};
    }
    else {
        return {availableTimes:['18:00', '18:30', '19:30', '20:30', , '21:00']};
    }

    // let availableTimes = ['17:00', '18:00', '19:00', '20:00', , '21:00', '22:00'];
    // return availableTimes;
}

export function submitAPI(formData)
{
    return {resonse:true};
}


