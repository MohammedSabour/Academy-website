from django.contrib import admin
from .models import Course, Language, Level

@admin.register(Language)
class LanguageAdmin(admin.ModelAdmin):
    list_display = ['name', 'code']
    
@admin.register(Level)
class LevelAdmin(admin.ModelAdmin):
    list_display = ['name', 'code']

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['language', 'level', 'teacher', 'price']
    list_filter = ['language', 'level']