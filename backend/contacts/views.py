from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from django.core.mail import send_mail
from rest_framework.response import Response
from django.conf import settings

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data 

        try:
            send_mail(
                data['subject'],
                'Name: '
                + data['Name']
                + '\nEmail:'
                + data['email']
                + '\n\Message:\n'
                + data['message'],
                'meekkaran@gmail.com',
                ['meekkaran@gmail.com'],
                fail_silently=False
            )

            contact = Contact(name=data['name'], email=data['email'], subject=data['subject'], message=data['message'])
            contact.save()
            console.log("contact")

            return Response({"Success":"Message sent successfully"})
        
        except:
            return Response({"Error": "Message failed to send"})