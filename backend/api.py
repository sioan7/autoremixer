import falcon
import mimetypes
import os
import io
import base64
import json
from falcon_cors import CORS
from waitress import serve
from falcon_multipart.middleware import MultipartMiddleware
import librosa
import soundfile
import processors


class Index(object):
    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200
        resp.content_type = 'text/html'
        with open("static/index.html", 'r') as f:
            resp.body = f.read()

class StaticResource(object):
    def on_get(self, req, resp, type, filename):
        # do some sanity check on the filename
        resp.status = falcon.HTTP_200
        
        resp.content_type = ""
        with open("static/" + filename, 'r') as f:
            resp.body = f.read()

class Remix(object):
    def on_post(self, req, resp, type):
        file = req.get_param('file')

        if type == "type1":
            filename = processors.remix_type1(file.file, file.filename)
        elif type == "type2":
            filename = processors.remix_type2(file.file, file.filename)
        else:
            filename = processors.remix_type3(file.file, file.filename)

        resp.status = falcon.HTTP_200
        resp.content_type = 'application/json'
        resp.body = json.dumps({"filename": filename})


if __name__ == "__main__":
    # allow_origins_list=['http://localhost:5000']
    cors = CORS(allow_all_origins=True, allow_all_headers=True, allow_all_methods=True)
    api = application = falcon.API(middleware=[cors.middleware, MultipartMiddleware()])
    api.add_route('/', Index())
    api.add_route('/{filename}', StaticResource())
    api.add_route('/remix/{type}', Remix())
    serve(api, host="127.0.0.1", port=8000)