from django.db import models

# Create your models here.
class Contact(models.Model):
    avatar = models.ImageField(upload_to="images")
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    about_me = models.TextField()
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    linkedin_url = models.CharField(max_length=2000)
    github_url = models.CharField(max_length=2000)


class Skill(models.Model):
    skill = models.CharField(max_length=50)
    skill_strength = models.IntegerField()


class Project(models.Model):
    name = models.CharField(max_length=200)
    about_project = models.TextField()
    language_used = models.CharField(max_length=1000, default="")
    project_url = models.CharField(max_length=2000)
    repo_url = models.CharField(max_length=2000)
    image_1 = models.ImageField(upload_to="images/project")
    image_2 = models.ImageField(upload_to="images/project")
    image_3 = models.ImageField(upload_to="images/project")

    def __str__(self):
        return self.name

