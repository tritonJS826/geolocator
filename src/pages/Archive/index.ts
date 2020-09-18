import { connect } from 'react-redux';

import ArchivePage from './ArchivePage';
import { ICurrentEvent } from '../../interfaces/currentEvent/ICurrentEvent';

import { readArchFromStorage } from '../../middlewares/archive';

import { setError } from '../../redux/actions/creators/currentEvent';

const mapStateToProps = ({ archive }: { archive: { archive: ICurrentEvent[] } }) => ({ archive });

const actionCreators = {
  readArchFromStorage,
  setError,
};

export default connect(mapStateToProps, actionCreators)(ArchivePage);
