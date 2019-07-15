import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Form from './Form'

import { login } from '../../actions/user'

const mapStateToProps = state => ({
  error: state.user.error,
  loading: state.user.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    login
  }, dispatch);

const FormConnected = connect(mapStateToProps, mapDispatchToProps)(Form)

export default FormConnected;