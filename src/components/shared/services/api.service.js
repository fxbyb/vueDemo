import Axios from 'axios';
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
})
const apiService = {
  getPage(url, params, page) {
    const data = {
      params,
      page
    }
    return Axios.get(url, data)
  },
  getNoPage(url, params) {
    return Axios.get(url, params)
  },
  postNoPage(url, params) {
    url = 'https://www.fastmock.site/mock/ce3fb5f286a8f5ff311ef70a38b4f7f0/vuecar/' + url;
    return Axios.post(url, {
      Patameter: params,
      Type: 2
    })
  },
  postPage(url, params, page) {
    url = 'https://www.fastmock.site/mock/ce3fb5f286a8f5ff311ef70a38b4f7f0/vuecar/' + url;
    return Axios.post(url, {
      Patameter: params,
      Page: page,
      Type: 2
    })
  },
};
export default apiService;
