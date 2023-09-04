import { getUrl } from '../utils/utils';

const NewsDataAPI = async() =>{

    const token = '714f1ab80d23ec315968cb075b39e4a4a0e37c8a'; // Replace with the actual token
  
    try {
      const response = await fetch(`${getUrl()}/api/newsposts/`, {
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
    
  export default NewsDataAPI;