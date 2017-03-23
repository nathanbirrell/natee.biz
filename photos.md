---
layout: page
title: Photos
permalink: /photos/
nowrap: 1
---

<div class="index">
    <section id="gallery" class="gallery">
        {% for post in site.posts %}

            {% assign gallery = post.path | split : '/' | last | split : '.' | first %}

            {% for photo in site.data.index[gallery].contents %}
              {% assign is-portrait = false %}
              {% if photo.height > photo.width %}
                {% assign is-portrait = true %}
              {% endif %}

              <figure id="{{ gallery }}-{{ photo.filename }}" class="photo" title="{{ post.title | xml_escape }} | Click to see next">
                  <a href="#" class="photo-block {% if is-portrait %}is-portrait{% endif %}" data-large="/photo/medium/{{ gallery }}/{{ photo.filename }}">
                      <img src="/photo/mini/{{ gallery }}/{{ photo.filename }}" alt="{{ post.title | xml_escape }}" title="{{ post.title | xml_escape }}" class="photo-mini" />
                  </a>
                  <div class="meta">
                      <div class="meta-column">
                          {% if post.location %}{{ post.location }}{% endif %}
                          <br>
                          {% if photo.date %}
                            {{ photo.date | date: "%B, %Y" }}
                          {% else %}
                            {{ post.date | date: "%B, %Y" }}
                          {% endif %}
                      </div>
                      <div class="meta-column">
                          {{ photo.camera }}
                          <!-- with {{ photo.lens }} -->
                          <br>

                          {% if photo.aperture != null and photo.focal != null and photo.shutter != null %}
                            ISO{{ photo.iso }}
                            {{ photo.shutter }}
                            @ f/{{ photo.aperture }}
                            {{ photo.focal }}mm
                          {% else %}
                            <!-- Using this to store Film type -->
                            on {{ photo.description }}
                          {% endif %}
                          <!-- <h2><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2> -->
                      </div>
                  </div>
              </figure>
            {% endfor %}

        {% endfor %}
    </section>
</div>
