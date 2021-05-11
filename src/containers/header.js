import { connect } from 'react-redux';
import Header from '../components/layout/header';
import { MID_GETNAVBAR } from '../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
  const { navRoute } = state.headerState
  return {
    navRoute: navRoute,
  };
}

const mapDispatchToProps = dispatch => ({
  getNavRoute:(payload) => dispatch({ type: MID_GETNAVBAR, payload: payload }),
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(Header);