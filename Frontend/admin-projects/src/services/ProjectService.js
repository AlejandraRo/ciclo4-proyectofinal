const API = "http://localhost:3001/projects";

export const projectService = {
  findAll: async () => {
    const response = await fetch(API + "/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  },
  new: async (proyecto) => {
    const response = await fetch(API + "/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proyecto),
    });
    return await response.json();
  },
};
