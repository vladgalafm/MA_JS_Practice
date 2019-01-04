var head = document.getElementsByTagName('head')[0];
var body = document.body;

var styleLink = document.createElement('link');
styleLink.href = "css/style.css";
styleLink.rel = "stylesheet";
head.appendChild(styleLink);

var container = document.createElement('div');
container.className = 'container container--gallery';
body.insertBefore(container, body.children[0]);

var headline = document.createElement('h1');
headline.className = 'container__headline';
headline.innerHTML = 'Cards Gallery';
container.appendChild(headline);

/* sort data array by names */
ANCESTRY_FILE.sort(function(a, b) {
  if (a.name > b.name) {
    return 1;
  } else {
    return -1;
  }
});

for (var i = 0; i < ANCESTRY_FILE.length; i++) {
  var card = document.createElement('div');
  if (ANCESTRY_FILE[i].sex === 'm') {
    card.className = 'container__card';
  } else {
    card.className = 'container__card container__card--female';
  }
  container.appendChild(card);

  var person = document.createElement('p');
  person.className = 'container__card-heading';
  person.innerHTML = ANCESTRY_FILE[i].name;
  card.appendChild(person);

  var dates = document.createElement('p');
  dates.className = 'container__card-heading';
  dates.innerHTML = '(' + ANCESTRY_FILE[i].born + ' - ' + ANCESTRY_FILE[i].died + ')';
  card.appendChild(dates);

  var sex = document.createElement('p');
  sex.className = 'container__card-text';
  if (ANCESTRY_FILE[i].sex === 'm') {
    sex.innerHTML = 'Sex: Male';
  } else {
    sex.innerHTML = 'Sex: Female';
  }
  card.appendChild(sex);

  var father = document.createElement('p');
  father.className = 'container__card-text';
  if (!!ANCESTRY_FILE[i].father) {
    father.innerHTML = 'Father: <i>' + ANCESTRY_FILE[i].father + '</i>';
  } else {
    father.innerHTML = 'Father: -';
  }
  card.appendChild(father);

  var mother = document.createElement('p');
  mother.className = 'container__card-text';
  if (!!ANCESTRY_FILE[i].mother) {
    mother.innerHTML = 'Mother: <i>' + ANCESTRY_FILE[i].mother + '</i>';
  } else {
    mother.innerHTML = 'Mother: -';
  }
  card.appendChild(mother);
}