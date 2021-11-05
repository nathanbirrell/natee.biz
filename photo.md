---
title: "Pictures"
layout: layouts/base.njk
---

Some pictures, mostly taken on my trusty Fujifilm XE1 and a 7Artisans 35mm f1.4 manual focus.

{% for photo in collections.photos %}

<figure class="photo">
    <img src="{{photo.src}}" alt="{{photo.name}}">
    <figcaption>
    {{photo.name}} 
    <time datetime="{{ photo.date | htmlDateString }}">{{ photo.date | readableDate }}</time>
    </figcaption>
</figure>

{% endfor %}
