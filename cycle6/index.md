---
title: Xamarin Bug Annotations for Cycle 6
layout: basic
---
<table>
{% include bug_header_row.html %}{% for bug in site.bugs %}{% for product-version in site.data.versions["Cycle 6"] %}{% if bug.product == product-version[0] and bug.version == product-version[1] %}{% include bug_row.html %}{% endif %}{% endfor %}{% endfor %}
</table>
{% include setup_search.html %}
