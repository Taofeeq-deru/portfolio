# Generated by Django 3.0.3 on 2020-02-13 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.ImageField(upload_to='images')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('about_me', models.TextField()),
                ('phone_number', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('linkedin_url', models.CharField(max_length=2000)),
                ('github_url', models.CharField(max_length=2000)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('about_project', models.TextField()),
                ('project_url', models.CharField(max_length=2000)),
                ('repo_url', models.CharField(max_length=2000)),
                ('image_1', models.ImageField(upload_to='images/project')),
                ('image_2', models.ImageField(upload_to='images/project')),
                ('image_3', models.ImageField(upload_to='images/project')),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('skill', models.CharField(max_length=50)),
                ('skill_strength', models.IntegerField()),
            ],
        ),
    ]
