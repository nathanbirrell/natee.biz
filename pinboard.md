---
title: "Pinboard"
layout: layouts/base.njk
---

Nice things from the internet.

{% for photo in collections.pinboard %}

<div class="photo-wrapper">
<figure class="photo">
<div class="photo-image">
    <img src="{{photo.src}}" alt="{{photo.name}}" title="{{photo.name}}">
</div>

<figcaption>
<span class="photo-name">
    <!-- {{photo.name}} -->
    <!-- <time datetime="{{ photo.date | htmlDateString }}">{{ photo.date | monthYearDate }}</time> -->
</span>
</figcaption>
</figure>
</div>

{% endfor %}
