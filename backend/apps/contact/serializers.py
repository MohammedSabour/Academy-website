from rest_framework import serializers

class ContactSerializer(serializers.Serializer):
    firstName = serializers.CharField(max_length=100)
    lastName = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    phone = serializers.DecimalField(max_digits=10, decimal_places=0)
    course = serializers.CharField(max_length=200)
    message = serializers.CharField()