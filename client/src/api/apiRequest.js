import axios from 'axios';

export const apiRequest = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
