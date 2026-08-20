"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from apps.accounts.views import LoginView, CurrentUserView 
from apps.courses.views import CourseListView, CourseDetailView, LanguageListView
from apps.contact.views import ContactView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Courses APIs
    path("api/languages/", LanguageListView.as_view(), name="languages"),
    
    path('api/courses/',CourseListView.as_view(), name='courses' ),
    path("api/courses/<int:pk>/", CourseDetailView.as_view(), name="course-detail"),
    
    # Contact APIs
    path("api/contact/", ContactView.as_view(), name="contact"),
    
    # Teacher APIs
    
    
    # Auth APIs
    path('api/login/',LoginView.as_view(), name='login'),
    path('api/me/', CurrentUserView.as_view(), name='user'),
]
if settings.DEBUG: urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )
