export const formatData = (dataString) => {
    // Create a new Date object from the date string
    const dateObj = new Date(dataString);

    // Extract the date components from the date object
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // Add 1 to account for zero-based indexing
    const date = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();

    // Construct a new date string in the desired format
    return `${date}-${month}-${year}  ${hours}:${minutes}:${seconds}`;
};

export const formatNewsData = (dataString) => {
    // Create a new Date object from the date string
    const dateObj = new Date(dataString);

    // Extract the date components from the date object
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // Add 1 to account for zero-based indexing
    const date = dateObj.getDate();

    // Construct a new date string in the desired format
    return `${date}-${month}-${year}`;
}