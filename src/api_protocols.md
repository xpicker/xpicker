# API 协议
$ip = http://35.178.75.102:10086
## Test Group
### 连接测试
    请求:
    url: $ip/api/test/ping
    响应:
    json:
        {"message": "pong"}
