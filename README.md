# express-video
# express-video接口文档

## 接口说明

- 基于RESTful API 接口规范
- 基于 JWT 身份认证
- 使用CORS 跨域
- 接口基础请求地址：`http://127.0.0.1:3000/api/v1`
- 使用 JSON 格式进行数据通信



## 用户注册

path: `/user/registers`

method: `post`

是否认证：否

| 字段名   | 字段类型 | 是否必须 |
| -------- | -------- | -------- |
| username | string   | 是       |
| email    | string   | 是       |
| phone    | string   | 是       |
| password | string   | 是       |

请求示例：

```json
{
    "username": "xingxing",
    "email": "xingxing@qq.com",
    "phone": "13112341234",
    "password": "123456"
}
```

响应示例：

```json
// success
{
    "user": {
        "username": "xingxing",
        "email": "xingxing@qq.com",
        "phone": "13112341234",
        "image": null,
        "createAt": "2022-08-27T05:11:41.866Z",
        "updateAt": "2022-08-27T05:11:41.866Z",
        "_id": "6309a8274a8ff41274defc54",
        "__v": 0
    }
}
```

```json
// error
{
    "error": [
        {
            "value": "13112341234",
            "msg": "手机号已被注册",
            "param": "phone",
            "location": "body"
        }
    ]
}
```
