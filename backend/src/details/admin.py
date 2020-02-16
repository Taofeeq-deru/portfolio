from django.contrib import admin
from .models import Contact, Skill, Project

# Register your models here.
class ContactAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "phone_number", "email")


class SkillAdmin(admin.ModelAdmin):
    list_display = ("language", "skill_strength")


admin.site.register(Contact, ContactAdmin)
admin.site.register(Skill, SkillAdmin)
admin.site.register(Project)
