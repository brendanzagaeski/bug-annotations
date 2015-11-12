---
title: Xamarin Bug Annotations for Cycle 6
layout: basic
---
<table>
{% include bug_header_row.html %}{% for bug in site.bugs %}{% if site.data.versions["Cycle 6"][bug.product] == bug.version %}{% include bug_row.html %}{% endif %}{% endfor %}
</table>
{% include setup_search.html %}
