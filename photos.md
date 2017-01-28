---
layout: page
title: Photos
permalink: /photos/
nowrap: 1
---

<div class="index">
  <section id="gallery" class="gallery">
    {% for post in site.posts %}
      {% assign gallery = post.path | split: '/' | last | split: '.' | first %}
      <div id="{{ gallery }}" class="photo {% if forloop.first %}current{% endif %}">
        {% comment %}
          @TODO: So apparently the "where" filter doesn't work on custom data
          arrays, though I could write a plugin to do it. Instead, we loop over
          the whole post photo array and pull out the hero when we find it. Sadface.
        {% endcomment %}
        {% for photo in site.data.index[gallery].contents %}
          <a href="#">
            <img src="/photo/medium/{{ gallery }}/{{ photo.filename }}" alt="{{ post.title | xml_escape }}" title="{{ post.title | xml_escape }}" />
          </a>
          <div class="meta">
            <div class="meta-column">
              {% if post.location %}{{ post.location }}{% endif %} <br>
              {{ photo.date | date: "%B, %Y" }}
            </div>
            <div class="meta-column">
              {{ photo.camera }} <!-- with {{ photo.lens }} --> <br>
              ISO{{ photo.iso }} {{ photo.shutter }} @ f/{{ photo.aperture }} {{ photo.focal }}mm
              <!-- <h2><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2> -->
            </div>
          </div>
        {% endfor %}
      </div>
    {% endfor %}
  </section>
</div>