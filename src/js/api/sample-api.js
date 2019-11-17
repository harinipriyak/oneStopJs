  
import http from './http';

export const getStationNameApi = keyword => {
    return http.get(`${keyword}/apikey/inpblqdxms`).then(res => res.data);
  }; 