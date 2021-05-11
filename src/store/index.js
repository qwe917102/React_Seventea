import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { commonMiddleware } from '../middleware/common';
import { headerMiddleware } from '../middleware/header';
import { homePageMiddleware } from '../middleware/homePage';
import { itemIntroMiddleware } from '../middleware/itemIntro';
import { storeIntroMiddleware } from '../middleware/storeIntro';
import { corporatePhilosophyMiddleware } from '../middleware/corporatePhilosophy';
import { inspectionReportMiddleware } from '../middleware/inspectionReport';
import { contactUsMiddleware } from '../middleware/contactUs';
import reducers from '../reducers';

const enhancer = applyMiddleware(
  commonMiddleware,
  headerMiddleware,
  homePageMiddleware,
  itemIntroMiddleware,
  storeIntroMiddleware,
  corporatePhilosophyMiddleware,
  inspectionReportMiddleware,
  contactUsMiddleware,
	thunk
);

export default createStore(reducers, composeWithDevTools(
  enhancer,
  // other store enhancers if any
));