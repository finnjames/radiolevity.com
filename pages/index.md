---
layout: default
title: Home
permalink: /
---
<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-3 col-md order-lg-0 order-1">
      {% capture fds-schedule-include %}{% include fds-schedule.md %}{% endcapture %}
      {{ fds-schedule-include | markdownify }}
    </div>
    <div class="col-lg-3 col-md order-lg-1 order-2">
      {% capture welcome-include %}{% include welcome.md %}{% endcapture %}
      {{ welcome-include | markdownify }}
    </div>
    <div class="col-lg-6 order-lg-2 order-0" style="padding-top: 0px;">
      {% capture currently-include %}{% include currently.md %}{% endcapture %}
      {{ currently-include | markdownify }}
    </div>
  </div>
</div>