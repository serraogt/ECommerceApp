// userAPI.js (or userAPI.ts)

export const userAPI = {
    fetchById: async (userId) => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      } catch (error) {
        throw new Error('Error fetching user data: ' + error.message);
      }
    },
    // Other API functions can be defined here...
  };
  