import { combineReducers } from 'redux';
import { commonState } from './common';
import { headerState } from './header';
import { homePageState } from './homePage';
import { itemIntroState } from './itemIntro';
import { storeIntroState } from './storeIntro';
import { corporatePhilosophyState } from './corporatePhilosophy';
import { inspectionReportState } from './inspectionReport';
import { contactUsState } from './contactUs';
// import { exampleState } from './example';
// import { exampleFormState } from './exampleForm';
// import { memberState } from './member';

export default combineReducers({
  commonState, 
  headerState,
  homePageState,
  itemIntroState,
  storeIntroState,
  corporatePhilosophyState,
  inspectionReportState,
  contactUsState,
  // memberState,
  // articleListState,
  // exampleState,
  // exampleFormState,
});