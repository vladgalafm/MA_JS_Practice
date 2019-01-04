var statsblock = document.createElement('div');
statsblock.className = 'container';
body.insertBefore(statsblock, body.children[1]);

var headline = document.createElement('h1');
headline.className = 'container__headline';
headline.innerHTML = 'Some Statistics';
statsblock.appendChild(headline);

var averageMale = document.createElement('p');
averageMale.className = 'container__stats';
averageMale.innerHTML = 'Everage male age: ' + averageAge('m');
statsblock.appendChild(averageMale);

var averageFemale = document.createElement('p');
averageFemale.className = 'container__stats';
averageFemale.innerHTML = 'Everage female age: ' + averageAge('f');
statsblock.appendChild(averageFemale);

var averageDiff = document.createElement('p');
averageDiff.className = 'container__stats';
averageDiff.innerHTML = 'Everage difference between children and their mothers\' ages: ' + averageDifference();
statsblock.appendChild(averageDiff);

function averageAge(sex) {
  var count = 0;
  var years = 0;
  for (var i = 0; i < ANCESTRY_FILE.length; i++) {
    if (ANCESTRY_FILE[i].sex === sex) {
      years += (ANCESTRY_FILE[i].died - ANCESTRY_FILE[i].born);
      count++;
    }
  }
  return (years/count).toFixed(2);
}

function averageDifference() {
  var count = 0;
  var diffSum = 0;
  child: for (var i = 0; i < ANCESTRY_FILE.length; i++) {
    var childBirthDate = ANCESTRY_FILE[i].born;
    for (var j = 0; j < ANCESTRY_FILE.length; j++) {
      if (ANCESTRY_FILE[i].mother === ANCESTRY_FILE[j].name) {
        var motherBirthDate = ANCESTRY_FILE[j].born;
        diffSum += Math.abs(motherBirthDate - childBirthDate);
        count++;
        continue child;
      }
    }
  }
  return (diffSum/count).toFixed(2);
}