<!-- app/view/news/list.tpl -->
<html>
  <head>
    <title>Egg HackerNews Clone</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
    {{ helper.relativeTime(item.time) }}
      {% for item in list %}
      <li class="item">
        <a href="{{ item.url }}">{{ item.title }}</a>
      </li>
      {% endfor %}
    </ul>
  </body>
</html>