# Generated by Django 5.0.1 on 2024-02-21 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_image_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leaf',
            name='img',
            field=models.CharField(max_length=500),
        ),
    ]