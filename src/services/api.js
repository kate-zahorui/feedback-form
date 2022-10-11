import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000/api/feedbacks';
axios.defaults.baseURL =
  'https://feedback-form-backend-server.herokuapp.com/api/feedbacks';
axios.defaults.headers = { 'Access-Control-Allow-Origin': '*' };

export const UserAPI = {
  addNewFeedback: async feedback => {
    const response = await axios.post(`/`, feedback);
    return response.data;
  },
};
