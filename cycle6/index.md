---
title: Bug Annotations for Xamarin Cycle 6
layout: bugtable
---
{% include bug_header_row.html %}{% for bug in site.bugs reversed %}{% if site.data.versions["Cycle 6 RC 2 Beta 1"].bugzilla.[bug.product] == bug.version %}{% include bug_row.html %}{% endif %}{% endfor %}
