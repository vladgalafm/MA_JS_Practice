# MA_JS_Practice_Homework_6

## Task 1
Here is a sample html file with a submit button. Write a JavaScript  function to get the value of the href, hreflang, rel, target, and type  attributes of the specified link.

```
<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Title</title>
    <meta charset=utf-8 />
  </head>
  <body>
  <p>
    <a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="http://www.w3resource.com/">w3resource</a>
  </p>
  <button onclick="getAttributes()">Click here to get  attributes value</button>
</body>
</html>
```

[GitHub-pages for this task](https://vladgalafm.github.io/MA_JS_Practice/Homework_6_DOM/task1/)

## Task 2
Создайте таблицу с 10 стороками и столбцами! Напишите код, который выделит все ячейки в таблице по диагонали. Нужно будет получить из таблицы table все диагональные td и выделить их, используя код:

```
// в переменной td DOM-элемент для тега <td>
td.style.backgroundColor = 'red';
```

[GitHub-pages for this task](https://vladgalafm.github.io/MA_JS_Practice/Homework_6_DOM/task2/)

## Task 3
Напишите функцию createSpanInBlockByID(blockID) которая будет создавать элемент 'span' в блоке id=blockID
P.S. Эта функция должна проверять наличие элемента в этом блоке, если он уже там есть второй раз она его добавлять не будет!

[GitHub-pages for this task](https://vladgalafm.github.io/MA_JS_Practice/Homework_6_DOM/task3/)

## Task 4
Создайте функцию createCloneNode(block) которая будет  клонировать передаваемый ей элемент и добавять его в конец страницы!

[GitHub-pages for this task](https://vladgalafm.github.io/MA_JS_Practice/Homework_6_DOM/task4/)

## Task 5
Создайте функцию addChildrenTo(block, count, type) которая будет  создавать внутри block count количество детей типа type (type это будет тип блока например 'span, ul, li, div' и т.д.)

[GitHub-pages for this task](https://vladgalafm.github.io/MA_JS_Practice/Homework_6_DOM/task5/)

## Task 6
Напишите функцию replaceElementBy(blockCurrent, blockToReplace) которая будет  заменять blockCurrent на blockToReplace и выводить сообщение в консоль после успешного проведения операции!

[GitHub-pages for this task](https://vladgalafm.github.io/MA_JS_Practice/Homework_6_DOM/task6/)

## Task 7
Покрасьте все буквы текста в заданном элементе в разные случайные цвета. Список цветов должен хранится в массиве. Две соседние буквы не должны иметь одинаковый цвет.

[GitHub-pages for this task](https://vladgalafm.github.io/MA_JS_Practice/Homework_6_DOM/task7/)

## Task 8
Существует [набор данных](https://mate-academy.github.io/fe-program/resources/lesson16/data.js). Нужно вывести его на экран в виде галлереи карточек (сделайте красиво :) ).
На основе набора данных:
* подсчитайте среднюю разницу в возрасте между матерями и их детьми
* подсчитайте средний возраст мужчин
* подсчитайте средний возраст женщин
Затем нужно вывести блок данной статистической информации на экран (красиво :) ).

[GitHub-pages for this task](https://vladgalafm.github.io/MA_JS_Practice/Homework_6_DOM/task8/)
