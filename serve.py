import http.server, os
os.chdir("/tmp/qpuc")
http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler, port=3456)
