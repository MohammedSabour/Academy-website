from apps.courses.models import Language

def create_languages():
    languages  = [
        {
            "name": "English",
            "code": "EN",
            "description": "Improve your English for study, work and travel.",
        },
        {
            "name": "French",
            "code": "FR",
            "description": "Learn French from beginner to advanced level.",
        },
        {
            "name": "Spanish",
            "code": "ES",
            "description": "Master spoken and written Spanish.",
        },
        {
            "name": "German",
            "code": "DE",
            "description": "German language courses for all levels.",
        },
        {
            "name": "Arabic",
            "code": "AR",
            "description": "Modern Standard Arabic language courses.",
        },
    ]

    for language in languages:
                Language.objects.get_or_create(
                    code=language["code"],
                    defaults=language,
                )