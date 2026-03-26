from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, default='')
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'todos'
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class Product(models.Model):
    CATEGORY_CHOICES = [('CPU', 'CPU'), ('GPU', 'GPU'), ('APU', 'APU')]
    STATUS_CHOICES = [('active', 'Active'), ('discontinued', 'Discontinued'), ('upcoming', 'Upcoming')]

    name = models.CharField(max_length=255)
    family = models.CharField(max_length=255)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    socket = models.CharField(max_length=100)
    release_date = models.DateField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)

    class Meta:
        db_table = 'products'
        ordering = ['-release_date']

    def __str__(self):
        return self.name


class Firmware(models.Model):
    TYPE_CHOICES = [('BIOS', 'BIOS'), ('driver', 'Driver'), ('microcode', 'Microcode')]
    STATUS_CHOICES = [('stable', 'Stable'), ('beta', 'Beta'), ('deprecated', 'Deprecated')]

    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='firmwares')
    version = models.CharField(max_length=100)
    release_date = models.DateField()
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    changelog = models.TextField(blank=True, default='')

    class Meta:
        db_table = 'firmwares'
        ordering = ['-release_date']

    def __str__(self):
        return f'{self.product} - {self.version}'


class Statistic(models.Model):
    METRIC_CHOICES = [
        ('power_consumption', 'Power Consumption'),
        ('temperature', 'Temperature'),
        ('clock_speed', 'Clock Speed'),
        ('utilization', 'Utilization'),
    ]

    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='statistics')
    firmware = models.ForeignKey(Firmware, on_delete=models.CASCADE, related_name='statistics')
    recorded_at = models.DateTimeField()
    metric = models.CharField(max_length=30, choices=METRIC_CHOICES)
    value = models.FloatField()
    unit = models.CharField(max_length=50)

    class Meta:
        db_table = 'statistics'
        ordering = ['-recorded_at']

    def __str__(self):
        return f'{self.product} - {self.metric}: {self.value} {self.unit}'
