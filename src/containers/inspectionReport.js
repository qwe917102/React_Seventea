import { connect } from 'react-redux';
import InspectionReport from '../components/pages/inspectionReport';
import { MID_GETREPORTLIST } from '../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
  const { reportList } = state.inspectionReportState
  return {
    reportList: reportList,
  };
}

const mapDispatchToProps = dispatch => ({
  getReportList:(payload) => dispatch({ type: MID_GETREPORTLIST, payload: payload }),
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(InspectionReport);