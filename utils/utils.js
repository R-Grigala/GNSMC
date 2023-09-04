export const getColor = (ml) => {
    if (ml > 5) {
      return '#ff0000'; // Red color for ml > 5
    } else if (ml > 4) {
      return '#ff7b00'; // Orange color for ml > 4
    } else if (ml > 3) {
      return '#aa00ff'; // Purple color for ml > 3
    } else {
      return '#000'; // Black color for ml <= 3
    }
};

export const eqColor = (eqId, origin_time, Id) => {
  // Convert the input origin_time to a Date object
  const originTime = new Date(origin_time);

  // Get the current date and time
  const now = new Date();

  // Calculate the dates three months and one week ago from the current date
  const threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
  const oneWeekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);

  // Use a switch-case statement to determine the color based on the age of the data
  switch (true) {
    case eqId == Id:
      return `${getUrl()}/images/Earthquake_gif.gif`;
    case originTime > oneWeekAgo:
      return `${getUrl()}/images/Earthquake_gif.gif`; // If data is less than one week old, return gif URL
    case originTime > threeMonthsAgo:
      return `${getUrl()}/images/Earthquake_red.png`; // If data is less than three months old, return red image URL
    default:
      return `${getUrl()}/images/Earthquake_yellow.png`; // Otherwise, return yellow image URL
  }
}

export const getUrl = () =>{
  // URL of the earthquake image
  return 'https://bb6b-212-72-141-34.ngrok-free.app'
}