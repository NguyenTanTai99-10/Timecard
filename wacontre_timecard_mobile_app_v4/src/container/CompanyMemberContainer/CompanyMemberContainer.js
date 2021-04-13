import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompanyMemberComponent from '../../component/CompanyMemberComponent';


import { loginAction } from '../../redux/action/account/loginAction';
export class CompanyMemberContainer extends Component {
   render() {
      return <CompanyMemberComponent {...this.props} />;
   }
}

const mapStateToProps = (state) => {
//    return {
//       status: state.loginReducer.status,
//       data: state.loginReducer.data,
//       loading: state.loginReducer.loading,
//       message: state.loginReducer.message,
//       error: state.loginReducer.error,
//    };
};

const mapDispatchToProps = (dispatch) => {
//    return {
//       loginAction: (username, password) => dispatch(loginAction(username, password)),
//    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
export default  CompanyMemberContainer

