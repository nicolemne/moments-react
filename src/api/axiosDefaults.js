import axios from "axios";

axios.defaults.baseURL = 'https://learn-djangorestframework-api-ff82997e6651.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;