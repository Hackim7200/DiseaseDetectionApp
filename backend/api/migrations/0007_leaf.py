# Generated by Django 5.0.1 on 2024-02-21 14:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_image_message'),
    ]

    operations = [
        migrations.CreateModel(
            name='Leaf',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('disease', models.CharField(max_length=200)),
                ('img', models.ImageField(upload_to='')),
                ('percentage', models.DecimalField(decimal_places=2, max_digits=3)),
                ('image', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.image')),
            ],
        ),
    ]
