// vue-cli配置文件
module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"https://www.zhihhhhhu.com",
            }
        }
    }
}