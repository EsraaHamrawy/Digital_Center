export const getRequestById = (state, id) => {
  const categories = Object.keys(state);
  for (const category of categories) {
    const request = state[category].find((item) => item.id == id);
    if (request) {
      return request;
    }
  }
  return null; // Return null if not found
};
