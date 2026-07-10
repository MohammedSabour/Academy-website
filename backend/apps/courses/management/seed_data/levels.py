from apps.courses.models import Level


def create_levels():
    levels = [
        ("A1.1", "Beginner"),
        ("A1.2", "Pre Elementary"),
        ("A2.1", "Elementary"),
        ("A2.2", "Pre Intermediate"),
        ("B1.1", "Intermediate"),
        ("B1.2", "Pre Upper Intermediate"),
        ("B2.1", "Upper Intermediate"),
        ("B2.2", "Pre Advanced"),
    ]
    
    for code, name in levels:
                Level.objects.get_or_create(
                    code=code,
                    defaults={
                        "name": name
                    }
                )