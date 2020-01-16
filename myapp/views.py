from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json

with open("myapp/file.json") as json_file:
    data = json_file.read()


class Route(APIView):
    def get(self, request, format=None):

        return Response(status=status.HTTP_200_OK, data=json.loads(data))
