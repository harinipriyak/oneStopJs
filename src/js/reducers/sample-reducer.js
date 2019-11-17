import { UPDATE_STATION_NAME } from '../actions/types';

const initialState = {
    stationName: '',
};

export default (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_STATION_NAME: {
            const newState = { ...state };
            newState.stationName = action.name;
            return newState;
        }   
        default:
            return state;
    }
};