var RPCClient = require('@alicloud/pop-core').RPCClient

function initVodClient(accessKeyId, accessKeySecret,) {
    var regionId = 'cn-shanghai';   // 点播服务接入地域
    var client = new RPCClient({//填入AccessKey信息
        accessKeyId: accessKeyId,
        accessKeySecret: accessKeySecret,
        endpoint: 'http://vod.' + regionId + '.aliyuncs.com',
        apiVersion: '2017-03-21'
    })

    return client;
}

exports.getvod = async (req, res) => {
  // 请求示用户登录名称 
  // res.status(200).json({body: req.body})
  var client = initVodClient(
    'LTAI5tKLCeJyVgLA9KHf8TGk',
    'pz50VQ0ZShV9n4wYPs8jxnWjrYa6mb'
  )

  const vodback = await client.request("CreateUploadVideo", {
    Title: 'this is a sample',
    FileName: 'filename.mp4'
  }, {})

  res.status(200).json({ vod: vodback })
}