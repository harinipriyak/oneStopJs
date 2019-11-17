import { connect } from 'react-redux';
import {
  getStationName,
} from '../../actions';

const mapStateToProps = state => ({
    result: state.sampleReducer.stationName,
})

const mapDispatchToProps = dispatch => {
  return {
    callGetStationName: (keyword) => dispatch(getStationName(keyword))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
