const API = "http://localhost:3001/users";

export const userService = {
  findAll: async () => {
    const response = await fetch(API + "/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  },
};
