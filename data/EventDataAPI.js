const EventDataAPI = async() =>{
    
    try {
      const response = await fetch('http://10.0.2.2:8000/api/events/');
      
      const data = await response.json();
    //   console.log("Call EventData");
      return data;

    } catch (error) {
        console.log(error.message);
    }

  }
  
export default EventDataAPI;