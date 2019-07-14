import { connect } from 'react-redux'
import HeaderListEvent from "./HeaderListEvent";
import {getListEvent} from '../../actions/events'
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch =>
  bindActionCreators({getListEvent}, dispatch);

const mapStateToProps = state => ({
  listEvents: state.events.data
});

const HeaderListEventConnected = connect(mapStateToProps, mapDispatchToProps)(HeaderListEvent)

export default HeaderListEventConnected