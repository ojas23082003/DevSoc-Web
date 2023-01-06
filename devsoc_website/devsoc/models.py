from django.db import models

# Create your models here.

class model(models.Model):
    topic = models.CharField(max_length=250)

    def __str__(self):
        return (self.topic)