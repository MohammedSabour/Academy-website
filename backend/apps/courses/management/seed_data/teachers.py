from apps.accounts.models import User

def create_teachers():
    teachers = [
            ("Sarah", "Johnson", "sarah"),
            ("Michael", "Brown", "michael"),
            ("Claire", "Martin", "claire"),
            ("Lucas", "Bernard", "lucas"),
            ("Carlos", "Garcia", "carlos"),
            ("Anna", "Schmidt", "anna"),
            ("Ahmed", "Benali", "ahmed"),
            ("Nour", "ElAmin", "nour"),
    ]
    created = []

    for first, last, username in teachers:
        teacher, _ = User.objects.get_or_create(
        username=username,
        defaults={
            "first_name": first,
            "last_name": last,
            "email": f"{username}@polyglo.com",
            "role": User.Role.TEACHER,
            }
        )

        teacher.set_password("Teacher123!")
        teacher.save()
        created.append(teacher)

    return created