from datetime import datetime, timezone
from rest_framework.response import Response
from rest_framework import status


def _envelope(status_code: int, http_status: str, data) -> dict:
    return {
        'statusCode': status_code,
        'httpStatus': http_status,
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'response': data,
    }


class response:
    @staticmethod
    def OK(data) -> Response:
        return Response(_envelope(200, 'OK', data), status=status.HTTP_200_OK)

    @staticmethod
    def CREATED(data) -> Response:
        return Response(_envelope(201, 'CREATED', data), status=status.HTTP_201_CREATED)

    @staticmethod
    def NOT_FOUND(message: str) -> Response:
        return Response(_envelope(404, 'NOT_FOUND', message), status=status.HTTP_404_NOT_FOUND)

    @staticmethod
    def BAD_REQUEST(data) -> Response:
        return Response(_envelope(400, 'BAD_REQUEST', data), status=status.HTTP_400_BAD_REQUEST)
