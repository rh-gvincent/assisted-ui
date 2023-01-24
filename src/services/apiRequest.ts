import axios from 'axios';
import type { AxiosRequestConfig, AxiosInstance } from 'axios';

const apiGateways ={
  "production": "https://api.openshift.com",
  "staging": "https://api.stage.openshift.com"
} 

export const authInterceptor = (client: AxiosInstance): AxiosInstance => {
  client.interceptors.request.use(async (cfg) => {
    await insights.chrome.auth.getUser();
    const token = await insights.chrome.auth.getToken();
    const BASE_URL = apiGateways['staging']
    const updatedCfg: AxiosRequestConfig = { ...cfg, url: `${BASE_URL}${cfg.url}` };
    if (token) {
      updatedCfg.headers = {
        ...updatedCfg.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    // @ts-ignore
    delete updatedCfg.customHost;
    return updatedCfg;
  });
  return client;
};

const apiRequest = authInterceptor(axios.create());

export default apiRequest;
