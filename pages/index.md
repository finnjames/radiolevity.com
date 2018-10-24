---
layout: home
title: Home
permalink: /
sidebar: home
---

<div class="col-lg-4 col">
  {% capture welcome-include %}{% include welcome.md %}{% endcapture %}
  {{ welcome-include | markdownify }}
</div>
<div class="col-lg-8 col">
  {% capture fds-schedule-include %}{% include fds-schedule.md %}{% endcapture %}
  {{ fds-schedule-include | markdownify }}
  {% capture currently-include %}{% include currently.md %}{% endcapture %}
  {{ currently-include | markdownify }}
</div>