const EventDataAPI = async() =>{

  const token = 'ee1403e4ef95d1c81a5ee47d864bd646fea308e7'; // Replace with the actual token

  try {
    const response = await fetch('http://10.0.2.2:8000/api/events/', {
      headers: {
        Authorization: `Token ${token}`
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      // Process the data received from the server
      // console.log("Call EventData");
      return data;
    } else {
      const error = await response.json();
      // Handle the error response from the server
      console.log('Error:', error);
    }

  } catch (error) {
      console.log(error.message);
  }

  }
  
export default EventDataAPI;