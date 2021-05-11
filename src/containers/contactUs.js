import { connect } from 'react-redux';
import ContactUs from '../components/pages/contactUs';
import { MID_GETJOBLIST } from '../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
  const { jobList } = state.contactUsState
  return {
    jobList: jobList,
  };
}

const mapDispatchToProps = dispatch => ({
  getJobList:(payload) => dispatch({ type: MID_GETJOBLIST, payload: payload }),
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);