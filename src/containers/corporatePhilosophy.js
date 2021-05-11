import { connect } from 'react-redux';
import StoreIntro from '../components/pages/corporatePhilosophy';
import { MID_GETPHILOSOPHY } from '../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
  const { philosophy } = state.corporatePhilosophyState
  return {
    philosophy: philosophy,
  };
}

const mapDispatchToProps = dispatch => ({
  getPhilosophy:(payload) => dispatch({ type: MID_GETPHILOSOPHY, payload: payload }),
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(StoreIntro);