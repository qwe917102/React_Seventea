import { connect } from 'react-redux';
import ItemIntro from '../components/pages/itemIntro';
import { MID_GETITEMLIST } from '../constants/middlewareActionsTypes';

const mapStateToProps = (state) => {
  const { itemList } = state.itemIntroState
  return {
    itemList: itemList,
  };
}

const mapDispatchToProps = dispatch => ({
  getItemList:(payload) => dispatch({ type: MID_GETITEMLIST, payload: payload }),
});

// 把state跟action function綁到主要畫面上輸出
export default connect(mapStateToProps, mapDispatchToProps)(ItemIntro);