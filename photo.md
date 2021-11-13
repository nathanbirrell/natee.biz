---
title: "Pictures"
layout: layouts/base.njk
---

Some pictures, mostly taken on my Fujifilm XE1 and a 7Artisans 35mm f1.4 manual focus.

{% for photo in collections.photos %}

<figure class="photo">
<div class="photo-image">
    <img src="{{photo.src}}" alt="{{photo.name}}">
</div>

<figcaption>
<span class="photo-name">
    {{photo.name}} —
    <time datetime="{{ photo.date | htmlDateString }}">{{ photo.date | monthYearDate }}</time>
</span>
<!-- Beware of indentation turning into <pre> -->
<span class="photo-info">
{% if photo.make %}
{{ photo.make | title }} {{ photo.model }} <span title="{{ photo.lensFocalLengthEquivalent }}mm (Film Equivalent Focal Length)">{{ photo.lensFocalLength }}mm</span> {{ photo.aperture }} ISO {{ photo.iso }}
{% endif %}
</span>

</figcaption>

</figure>

{% endfor %}
