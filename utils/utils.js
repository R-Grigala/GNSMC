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