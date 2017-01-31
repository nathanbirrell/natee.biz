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
                <div id="{{ gallery }}" class="photo">
                    <a href="#" class="photo-block" data-large="/photo/medium/{{ gallery }}/{{ photo.filename }}">
                        <img src="/photo/mini/{{ gallery }}/{{ photo.filename }}" alt="{{ post.title | xml_escape }}" title="{{ post.title | xml_escape }}" class="photo-mini" />
                    </a>
                    <div class="meta">
                        <div class="meta-column">
                            {% if post.location %}{{ post.location }}{% endif %}
                            <br>
                            {{ photo.date | date: "%B, %Y" }}
                        </div>
                        <div class="meta-column">
                            {{ photo.camera }}
                            <!-- with {{ photo.lens }} -->
                            <br>
                            ISO{{ photo.iso }}
                            {{ photo.shutter }}
                            @ f/{{ photo.aperture }}
                            {{ photo.focal }}mm
                            <!-- <h2><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2> -->
                        </div>
                    </div>
                </div>
            {% endfor %}

        {% endfor %}
    </section>
</div>
