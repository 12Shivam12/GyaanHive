import axios from "axios";

export const signup = async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/auth/register`,
      data
    );
    return response;
  } catch (error) {
    throw error.response || error;
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/auth/login`,
      data
    );
    return response;
  } catch (error) {
    throw error.response || error;
  }
};
