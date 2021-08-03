import store from '../../store';
import { apiDefaultWithoutToken, apiDefaultWithToken } from './env-control';

// const prefix = 'frontApi';

export const apiGetIndexFullScreen = (method) => apiDefaultWithoutToken[method]('/api/get-index-full-screen');

export const apiGetReportCategoryList = (method) => apiDefaultWithoutToken[method]('/api/get-report-category-list');