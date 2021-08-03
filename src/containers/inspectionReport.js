import { connect } from 'react-redux';
import InspectionReport from '../components/pages/inspectionReport';
import { MID_GETREPORTLIST, MID_GET_REPORT_DETAIL_LIST} from '../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
  const { reportList, reportDetailList } = state.inspectionReportState
  
  return {
    reportList: reportList,
    reportDetailList: reportDetailList,
  };
}

const mapDispatchToProps = dispatch => ({
  getReportList:(payload) => dispatch({ type: MID_GETREPORTLIST, payload: payload }),
  getReportDetailList:(payload) => dispatch({ type: MID_GET_REPORT_DETAIL_LIST, payload: payload }),
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(InspectionReport);