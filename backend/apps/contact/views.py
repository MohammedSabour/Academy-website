from django.core.mail import send_mail
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import ContactSerializer

class ContactView(generics.GenericAPIView):
    serializer_class = ContactSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data = serializer.validated_data

        send_mail(
            subject=data["course"],
            message=f"""
                First Name: {data['firstName']}
                Last Name: {data['lastName']}
                Email: {data['email']}
                Phone : {data['phone']}
                Message: {data['message']}
            """,
            
            from_email=None, 
            recipient_list=["academy@example.com"],
        )

        return Response(
            {"message": "Message sent successfully."},
            status=status.HTTP_200_OK,
        )