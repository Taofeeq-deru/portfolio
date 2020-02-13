from .views import DetailsViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r"", DetailsViewSet, basename="details")
urlpatterns = router.urls

# from django.urls import path
# from .views import DetailsAPIView


# urlpatterns = [path("", DetailsAPIView.as_view())]

