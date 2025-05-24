// Function to generate a random four-digit number
export const generateUniqueId = () => {
  // Generate a random number between 1000 and 9999
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return randomNumber.toString();
};
