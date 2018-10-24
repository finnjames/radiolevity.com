---
layout: center
title: Newsletter
permalink: /newsletter
---

# Newsletter
<!-- TODO: Swap between grid and timeline layouts -->

<div class="row">
    {% for post in site.posts %}
    <div class="col-6">
        <h2>{{ post.title }}</h2>
        <h3>{{ post.date | date_to_string }}</h3>
        <p>{{ post.excerpt }}</p>
    </div>
    {% endfor %}
</div>