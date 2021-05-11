import { connect } from 'react-redux';
import StoreIntro from '../components/pages/storeIntro';
import { MID_GETSTORELIST } from '../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
  const { storeList } = state.storeIntroState
  return {
    storeList: storeList,
  };
}

const mapDispatchToProps = dispatch => ({
  getStoreList:(payload) => dispatch({ type: MID_GETSTORELIST, payload: payload }),
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(StoreIntro);