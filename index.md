---
title: Xamarin Bug Annotations
layout: basic
---
<table>
    <tr><td>Bug</td><td>Products</td><td>Summary</td><td>Broken Since</td><td>Fix Released?</td></tr>
{% for bug in site.bugs %}<tr>
        <td>{{ bug.path | split: "/" | last | remove: ".md" }}</td>
        <td>
            <ul>
                {% for tag in bug.tags %}<li>{{ tag }}</li>{% endfor %}
            </ul>
        </td>
        <td>{{ bug.summary | markdownify }} {{ bug.workaround | markdownify }}</td>
        <td>{{ bug.broken-since | markdownify }}</td>
        <td>{{ bug.fix | markdownify }}</td>
    </tr>
{% endfor %}
