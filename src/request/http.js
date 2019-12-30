import Vue from 'vue';
import axios from 'axios'
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import { Toast  } from 'vant';
Vue.use(Toast );

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截器
axios.interceptors.request.use(    
    config => {              
        return config;    
    },    
    error => {        
        return Promise.error(error);    
    }
)
// 响应拦截器
axios.interceptors.response.use(    
    response => {   
        if (response.status === 200) {  
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },    
    // 服务器状态码不是2开头的的情况
    error => {            
        if (error.response.status) {            
            //定义错误码
            // if(error.response.status == 500){
            //     Toast("服务器错误")
            // }
            return Promise.reject(error.response);
        }
    }    
)
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
        })    
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
         axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}