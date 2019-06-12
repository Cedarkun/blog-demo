const crypto = require('crypto');

module.exports = {
    MD5_SUFFIX: 'eiowafnajkdlfjsdkfj二JFK数据放到历史记录s@#￥%……&）（*&……）',
    md5: function (pwd) {
        let md5 = crypto.createHash('md5');
        return md5.update(pwd).digest('hex')
    },
    responseClient(res,httpCode = 500, code = 3,message='服务端异常',receiveData={}) {
        let responseData = {};
        responseData.code = code;
        responseData.message = message;
        responseData.receiveData = receiveData;
        res.status(httpCode).json(responseData)
    }
}
