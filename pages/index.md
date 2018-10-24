---
layout: default
title: Home
permalink: /
---

<div class="row">
  <div class="col-lg-4 col-md">
    {% capture welcome-include %}{% include welcome.md %}{% endcapture %}
    {{ welcome-include | markdownify }}
  </div>
  <div class="col-lg-8">
    {% capture fds-schedule-include %}{% include fds-schedule.md %}{% endcapture %}
    {{ fds-schedule-include | markdownify }}
    {% capture currently-include %}{% include currently.md %}{% endcapture %}
    {{ currently-include | markdownify }}
  </div>
</div>