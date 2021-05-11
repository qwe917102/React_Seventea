import * as constType from '../constants/actionsTypes';

const commonMiddleware = store => next => action => {
	switch (action.type) {
		default:
			// 這邊記得要return next(action), 因為從middleware dispatch的action會再以新的dispatch結果callback回來,
			// 此時middleware上面的case比對不到actionType但是我們要讓他可以順利進到reducer所以要加return next(action)
			// 可以參考這篇https://max80713.medium.com/%E8%A9%B3%E8%A7%A3-redux-middleware-efd6a506357e
			return next(action)
	}
}

export { commonMiddleware };