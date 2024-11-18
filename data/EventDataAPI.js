import { getUrl } from '../utils/utils';

const EventDataAPI = async() =>{

  const token = 'a89bf4e47a2ca29457a65b06f3ba41c6a84af393'; // Replace with the actual token

  try {
    const response = await fetch(`${getUrl()}/api/events/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      // Process the data received from the server
      console.log("Call EventData");
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