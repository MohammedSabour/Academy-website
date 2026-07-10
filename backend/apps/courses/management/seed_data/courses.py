from apps.courses.models import Language, Level, Course
from datetime import date, timedelta
from decimal import Decimal

def create_courses(teachers):
    
    languages = {
        language.code: language
        for language in Language.objects.all()
    }

    levels = {
        level.code: level
        for level in Level.objects.all()
    }

    start = date.today() + timedelta(days=30)

    courses = [

            # ---------------- ENGLISH ----------------

            {
                "name": "English Beginner",
                "code": "ENG-A11",
                "language": "EN",
                "level": "A1.1",
                "teacher": teachers[0],
                "price": Decimal("120"),
            },
            {
                "name": "English Foundations",
                "code": "ENG-A12",
                "language": "EN",
                "level": "A1.2",
                "teacher": teachers[1],
                "price": Decimal("120"),
            },
            {
                "name": "English Elementary",
                "code": "ENG-A21",
                "language": "EN",
                "level": "A2.1",
                "teacher": teachers[0],
                "price": Decimal("150"),
            },
            {
                "name": "English Communication",
                "code": "ENG-A22",
                "language": "EN",
                "level": "A2.2",
                "teacher": teachers[1],
                "price": Decimal("150"),
            },
            {
                "name": "English Intermediate",
                "code": "ENG-B11",
                "language": "EN",
                "level": "B1.1",
                "teacher": teachers[0],
                "price": Decimal("180"),
            },
            {
                "name": "Business English",
                "code": "ENG-B21",
                "language": "EN",
                "level": "B2.1",
                "teacher": teachers[1],
                "price": Decimal("220"),
            },
            {
                "name": "IELTS Preparation",
                "code": "IELTS",
                "language": "EN",
                "level": "B2.2",
                "teacher": teachers[0],
                "price": Decimal("300"),
            },
            {
                "name": "TOEFL Preparation",
                "code": "TOEFL",
                "language": "EN",
                "level": "B2.2",
                "teacher": teachers[1],
                "price": Decimal("300"),
            },

            # ---------------- FRENCH ----------------

            {
                "name": "French Beginner",
                "code": "FR-A11",
                "language": "FR",
                "level": "A1.1",
                "teacher": teachers[2],
                "price": Decimal("120"),
            },
            {
                "name": "French Intermediate",
                "code": "FR-B11",
                "language": "FR",
                "level": "B1.1",
                "teacher": teachers[3],
                "price": Decimal("180"),
            },
            {
                "name": "DELF Preparation",
                "code": "DELF",
                "language": "FR",
                "level": "B2.2",
                "teacher": teachers[2],
                "price": Decimal("280"),
            },

            # ---------------- SPANISH ----------------

            {
                "name": "Spanish Beginner",
                "code": "ES-A11",
                "language": "ES",
                "level": "A1.1",
                "teacher": teachers[4],
                "price": Decimal("120"),
            },
            {
                "name": "Spanish Intermediate",
                "code": "ES-B11",
                "language": "ES",
                "level": "B1.1",
                "teacher": teachers[4],
                "price": Decimal("180"),
            },
            {
                "name": "DELE Preparation",
                "code": "DELE",
                "language": "ES",
                "level": "B2.2",
                "teacher": teachers[4],
                "price": Decimal("280"),
            },

            # ---------------- GERMAN ----------------

            {
                "name": "German Beginner",
                "code": "DE-A11",
                "language": "DE",
                "level": "A1.1",
                "teacher": teachers[5],
                "price": Decimal("120"),
            },
            {
                "name": "German Intermediate",
                "code": "DE-B11",
                "language": "DE",
                "level": "B1.1",
                "teacher": teachers[5],
                "price": Decimal("180"),
            },
            {
                "name": "Goethe Preparation",
                "code": "GOETHE",
                "language": "DE",
                "level": "B2.2",
                "teacher": teachers[5],
                "price": Decimal("280"),
            },

            # ---------------- ARABIC ----------------

            {
                "name": "Arabic Beginner",
                "code": "AR-A11",
                "language": "AR",
                "level": "A1.1",
                "teacher": teachers[6],
                "price": Decimal("120"),
            },
            {
                "name": "Modern Standard Arabic",
                "code": "AR-B11",
                "language": "AR",
                "level": "B1.1",
                "teacher": teachers[7],
                "price": Decimal("180"),
            },
        ]

    for index, course in enumerate(courses):
        Course.objects.get_or_create(
            code=course["code"],
            defaults={
                "name": course["name"],
                "language": languages[course["language"]],
                "level": levels[course["level"]],
                "teacher": course["teacher"],
                "description": (
                    f"{course['name']} is designed to help students develop "
                    "their reading, writing, listening, and speaking skills "
                    "through interactive lessons and practical activities."
                ),
                "price": course["price"],
                "start_date": start + timedelta(days=index * 7),
                "end_date": start + timedelta(days=index * 7 + 90),
            },
        )