import { connect } from 'react-redux';
import MyMap from './MyMap';

import getLocation from '../../middlewares/getLocation';

const mapStateToProps = ({ currentEvent: { coordinates } }: any) => ({ coordinates });

const actionCreators = {
  getLocation,
};

export default connect(mapStateToProps, actionCreators)(MyMap);
