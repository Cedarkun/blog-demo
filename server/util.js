function responseClient(res,httpCode = 500, code = 3,message='服务端异常',data={}) {
    let responseData = {
        code,
        message,
        ...data
    };
    res.status(httpCode).json(responseData);
};
exports.responseClient=responseClient;