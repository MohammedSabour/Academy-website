from django.db import models
from django.contrib.auth.models import AbstractUser

# Custom User
class User(AbstractUser):
    
    email = models.EmailField(
        unique=True,
        blank=False,
    )
    class Role(models.TextChoices):
        ADMIN = "ADMIN","Admin"
        STUDENT = "STUDENT", "Student"
        TEACHER = "TEACHER", "Teacher"
        
    role = models.CharField(
        max_length=20,
        choices=Role.choices,
        default=Role.STUDENT,
    )
    def __str__(self):
        return self.username or self.email