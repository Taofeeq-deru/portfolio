# from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework import viewsets
from rest_framework.response import Response
from details.models import Contact, Skill, Project
from .serializers import DetailsSerializer
from collections import namedtuple


# class DetailsAPIView(ObjectMultipleModelAPIView):
#     querylist = [
#         {"queryset": Contact.objects.all(), "serializer_class": ContactSerializer},
#         {"queryset": Skill.objects.all(), "serializer_class": SkillSerializer},
#         {"queryset": Project.objects.all(), "serializer_class": ProjectSerializer},
#     ]

Details = namedtuple("Details", ("contact", "skill", "project"))


class DetailsViewSet(viewsets.ViewSet):
    def list(self, request):
        details = Details(
            contact=Contact.objects.all(),
            skill=Skill.objects.all(),
            project=Project.objects.all(),
        )
        serializer = DetailsSerializer(details)
        return Response(serializer.data)
