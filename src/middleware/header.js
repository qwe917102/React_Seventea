// import { apiGetArticlelist } from '../ForntStage/api';
import * as constType from '../constants/actionsTypes';

const headerMiddleware = store => next => action => {
  console.log(action)

	switch (action.type) {
		case 'MID_GETNAVBAR':
			// store.dispatch({ type: constType.CHANGE_EFFECT_ISLOADING, payload: true })
      const data = [
        {
          word: '最新消息',
          link: '/'
        },
        {
          word: '飲品介紹',
          link: '/item-intro'
        },
        {
          word: '門市資訊',
          link: '/store-intro'
        },
        {
          word: '企業理念',
          link: '/corporate-philosophy'
        },
        {
          word: '檢驗報告',
          link: '/inspection-report'
        },
        {
          word: '加入我們',
          link: '/contact-us'
        },
      ];
			// apiGetArticlelist('get').then((res) => {
				store.dispatch({ type: constType.GET_NAVBAR, payload: data });
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

export { headerMiddleware };

