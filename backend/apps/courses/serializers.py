from rest_framework import serializers
from .models import Course, Language,Level
from apps.accounts.models import User

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
       model = Language
       fields = '__all__'
       
class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = ["id", "name", "code"]

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name"]
       
class CourseSerializer(serializers.ModelSerializer):
    language = LanguageSerializer(read_only=True)
    level = LevelSerializer(read_only=True)
    teacher = TeacherSerializer(read_only=True)
    class Meta:
       model = Course
       fields = '__all__'
       