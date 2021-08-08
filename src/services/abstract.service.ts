import axios, {AxiosInstance} from 'axios';

const serviceV2: AxiosInstance = axios.create({
  baseURL: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/',
  timeout: 10000,
  timeoutErrorMessage: '超时',
});

export default serviceV2;
