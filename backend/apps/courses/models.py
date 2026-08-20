from django.db import models
from apps.accounts.models import User

class Language(models.Model):
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=10, unique=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="languages/")
    
    def __str__(self):
        return self.name
    
class Level(models.Model): 
    name = models.CharField(max_length=50)
    code = models.CharField(max_length=10, unique=True)
    
    def __str__(self):
        return self.code

class Course(models.Model):
    name = models.CharField(max_length=100)
    language = models.ForeignKey(Language, on_delete=models.PROTECT)
    level = models.ForeignKey(Level, on_delete=models.PROTECT)
    description = models.TextField(blank=True)
    teacher = models.ForeignKey(User, on_delete=models.PROTECT, limit_choices_to={"role": User.Role.TEACHER}, related_name="courses")
    price = models.DecimalField(max_digits=8, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()
    code = models.CharField(max_length=10, unique=True)
    
    def __str__(self):
        return self.name or self.code
    
class Schedule():
    class WeekDay(models.IntegerChoices):
        MONDAY = 1, "Monday"
        TUESDAY = 2, "Tuesday"
        WEDNESDAY = 3, "Wednesday"
        THURSDAY = 4, "Thursday"
        FRIDAY = 5, "Friday"
        SATURDAY = 6, "Saturday"
        SUNDAY = 7, "Sunday"
    
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name="schedules"
    )
    day = models.IntegerField(choices=WeekDay.choices)

    start_time = models.TimeField()
    end_time = models.TimeField()
    
    def __str__(self):
        return self.course.name