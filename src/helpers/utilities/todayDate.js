export const todayDate = () => {
  // Create a new Date object for today
  const today = new Date();

  // Get the day, month, and year
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Note: January is 0, so we add 1 to get the correct month
  const year = today.getFullYear();

  // Format the date as dd/mm/yyyy using template literals
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate; // Output: e.g., 07/04/2024
};
