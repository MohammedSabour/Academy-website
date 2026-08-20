from datetime import date, timedelta
from decimal import Decimal
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

from apps.courses.models import Language, Level, Course
User = get_user_model()

from apps.courses.management.seed_data.languages import create_languages
from apps.courses.management.seed_data.levels import create_levels
from apps.courses.management.seed_data.teachers import create_teachers
from apps.courses.management.seed_data.courses import create_courses

class Command(BaseCommand):
    help = "Seed database with languages, levels, teachers and courses"

    def handle(self, *args, **kwargs):

        self.stdout.write(self.style.SUCCESS("Seeding database..."))

        create_languages()
        create_levels()
        teachers = create_teachers()
        create_courses(teachers)

        self.stdout.write(self.style.SUCCESS("Database seeded successfully."))