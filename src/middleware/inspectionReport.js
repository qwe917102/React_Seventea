import { apiGetReportCategoryList } from '../middleware/api-control/api';
import * as constType from '../constants/actionsTypes';

const inspectionReportMiddleware = store => next => action => {
  console.log(action)

	switch (action.type) {
		case 'MID_GETREPORTLIST':
			store.dispatch({ type: constType.CHANGE_EFFECT_ISLOADING, payload: true })
      apiGetReportCategoryList('get').then((res) => {
				store.dispatch({ type: constType.GET_REPORTLIST, payload: res.data.data });
				// store.dispatch({ type: constType.CHANGE_EFFECT_ISLOADING, payload: false })
			}).catch((err => {
				console.log(err);
			}))
			return next(action)
    case 'MID_GET_REPORT_DETAIL_LIST':
      const data = [{ name: '詳細報告' }];
			store.dispatch({ type: constType.GET_REPORT_DETAIL_LIST, payload: data });
			// store.dispatch({ type: constType.CHANGE_EFFECT_ISLOADING, payload: true })
      // apiGetReportCategoryList('get').then((res) => {
			// store.dispatch({ type: constType.GET_REPORTLIST, payload: res.data.data });
			// 	store.dispatch({ type: constType.CHANGE_EFFECT_ISLOADING, payload: false })
			// }).catch((err => {
			// 	console.log(err);
			// }))
			return next(action)
		default:
			// 這邊記得要return next(action), 因為從middleware dispatch的action會再以新的dispatch結果callback回來,
			// 此時middleware上面的case比對不到actionType但是我們要讓他可以順利進到reducer所以要加return next(action)
			// 可以參考這篇https://max80713.medium.com/%E8%A9%B3%E8%A7%A3-redux-middleware-efd6a506357e
			return next(action)
	}
}

export { inspectionReportMiddleware };

