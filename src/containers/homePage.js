import { connect } from 'react-redux';
import HomePage from '../components/pages/homePage';
import { MID_GETFULLSCREEN } from '../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
  const { fullScreen } = state.homePageState
  return {
    fullScreen: fullScreen,
  };
}

const mapDispatchToProps = dispatch => ({
  getFullScreen:(payload) => dispatch({ type: MID_GETFULLSCREEN, payload: payload }),
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);