import axios from "axios";
import qs from "qs";
const serverUrl = "http://192.168.3.150:8888/";

let net = {
    get: "",
    post: "",
    uploadFile: ""
};
net.get = function(api, object, call) {
    //1,封装请求地址
    let url = serverUrl + api;
    //2,根据请求地址和请求数据发出请求
    axios
        .get(url, {
            params: object
        })
        .then(function(response) {
            call(response);
        })
        .catch(function(error) {
            console.log(error);
        });
};

net.post = function(api, object, call) {
    //1,封装请求地址
    let url = serverUrl + api;
    //2,数据请求
    console.log(url);
    axios
        .post(url, qs.stringify(object))
        .then(function(response) {
            call(response);
        })
        .catch(function(error) {
            console.log(error);
        });
};

net.uploadFile = function(api, e, call) {
    //封装请求地址
    let url = serverUrl + api;
    let file = e.target.files[0];
    let param = new FormData(); //创建form对象
    param.append("file", file, file.name); //通过append向form对象添加数据
    param.append("chunk", "0"); //添加form表单中其他数据
    console.log(param.get("file")); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
    let config = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }; //添加请求头
    axios.post(url, param, config).then(response => {
        call(response.data);
    });
};

export default net;