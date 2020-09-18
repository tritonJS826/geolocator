import { connect } from 'react-redux';

import HomePage from './HomePage';

import getLocation from '../../middlewares/getLocation';
import getForecast from '../../middlewares/getForecast';
import getPlace from '../../middlewares/getPlace';
import { writeArchToStorage, readArchFromStorage } from '../../middlewares/archive';

import { setError } from '../../redux/actions/creators/currentEvent';

const mapStateToProps = ({ currentEvent, archive }: { currentEvent: any, archive: any }) => ({ currentEvent, archive });

const actionCreators = {
  getLocation,
  getForecast,
  getPlace,
  setError,
  writeArchToStorage,
};

export default connect(mapStateToProps, actionCreators)(HomePage);
