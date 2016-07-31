import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as ClientsActions from '../actions/clients';

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ClientsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
