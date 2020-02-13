from rest_framework import serializers
from details.models import Contact, Skill, Project


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = (
            "id",
            "avatar",
            "first_name",
            "last_name",
            "about_me",
            "phone_number",
            "email",
            "linkedin_url",
            "github_url",
        )


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ("id", "skill", "skill_strength")


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = (
            "id",
            "name",
            "about_project",
            "project_url",
            "repo_url",
            "image_1",
            "image_2",
            "image_3",
        )


class DetailsSerializer(serializers.Serializer):
    contact = ContactSerializer(many=True)
    skill = SkillSerializer(many=True)
    project = ProjectSerializer(many=True)