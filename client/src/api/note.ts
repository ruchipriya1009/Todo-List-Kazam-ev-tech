import axios from "axios";

const API_BASE_URL = "https://task-app-kv90.onrender.com";
// const API_LOCAL_URL = "http://localhost:8085";

export const fetchNotes = async () => {
  try {
    const response = await axios.get<string[]>(
      `${API_BASE_URL}/fetchAllTasks`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error;
  }
};

export const addNote = async (note: string) => {
  try {
    const response = await axios.post<{ note: string }>(
      `${API_BASE_URL}/add`,
      {
        item: note,
      }
    );
    return response.data.note;
  } catch (error) {
    console.error("Error adding note:", error);
    throw error;
  }
};
