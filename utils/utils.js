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

export const eqColor = (origin_time) => {
  // Convert the input origin_time to a Date object
  const originTime = new Date(origin_time);
  const UrlImage = 'https://2d08-178-134-23-146.ngrok-free.app'

  // Get the current date and time
  const now = new Date();

  // Calculate the dates three months and one week ago from the current date
  const threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
  const oneWeekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);

  // Debugging log messages to check the calculated dates
  console.log('origin: ', originTime);
  console.log('month:  ', oneWeekAgo);

  // Use a switch-case statement to determine the color based on the age of the data
  switch (true) {
    case originTime > oneWeekAgo:
      return `${UrlImage}/images/Earthquake_gif.gif`; // If data is less than one week old, return gif URL
    case originTime > threeMonthsAgo:
      return `${UrlImage}/images/Earthquake_red.png`; // If data is less than three months old, return red image URL
    default:
      return `${UrlImage}/images/Earthquake_yellow.png`; // Otherwise, return yellow image URL
  }
}