---
layout: default
title: Home
permalink: /
---
<div class="container d-flex justify-content-center">
  <div class="row justify-content-center">
    <div class="col-lg-3 col-md">
      <div class="row">
        <div id="diversity">
          <div>
            We joyfully embrace the full spectrum of the light within, made visible through the participation of people of all beliefs, cultures, backgrounds, abilities, ethnicities and races, sexual orientations, and gender identities.
          </div>
        </div>
      </div>
      {% capture fds-schedule-include %}{% include fds-schedule.md %}{% endcapture %}
      {{ fds-schedule-include | markdownify }}
    </div>
    <div class="col-lg-3 col-md">
      {% capture welcome-include %}{% include welcome.md %}{% endcapture %}
      {{ welcome-include | markdownify }}
    </div>
    <div class="col-lg-6">
      {% capture currently-include %}{% include currently.md %}{% endcapture %}
      {{ currently-include | markdownify }}
    </div>
  </div>
</div>