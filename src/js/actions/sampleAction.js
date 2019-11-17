import {
    GET_STATION_NAME,
    UPDATE_STATION_NAME,
  } from './types'; 
  
export const getStationName = keyword => (
  {
      type: GET_STATION_NAME,
      keyword,
    }
);

export const updateStationName = name => (
{
  type: UPDATE_STATION_NAME,
  name,
}
);