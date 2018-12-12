/* task 2 */

var courseName = 'Mate Academy';
var groupNames = ['fe_oct18', 'fe_dec18', 'fe_mar19'];
var ourGroupName = 'fe_oct18';
var ourGroupStudents = ['Anton', 'Dmitriy', 'Ivan', 'Roman', 'Sergey', 'Veronika', 'Vlad', 'Yulia', 'Yurii', 'Alina'];

/* task 3,4,5 */

alert('Stage 1: Food order');

var orderItems,
    orderConfirm = false,
    moneyAmount = +prompt('Скільки у вас є грошей?', '0');

while (isNaN(moneyAmount)) {
  moneyAmount = +prompt('Невірно введена кількість грошей, спробуйте ще.\nСкільки у вас є грошей?', '0');
}

if (moneyAmount >= 100) {
  orderConfirm = confirm('Ви можете купити БігМакМеню. Бажаєте?');
  orderItems = 'БігМакМеню';
} else if (moneyAmount >= 50) {
  orderConfirm = confirm('Ви можете купити Чізбургер і картоплю. Бажаєте?');
  orderItems = 'Чізбургер і картоплю';
} else if (moneyAmount >= 20) {
  orderConfirm = confirm('Ви можете купити колу. Бажаєте?');
  orderItems = 'колу';
} else {
  console.log('Пробачте, в нашому закладі немає страв для вас :(');
}

if (orderConfirm) {
  console.log('Ви замовили ' + orderItems);
} else {
  console.log('Ви нічого не замовили');
}

/* task 7 */

alert('Stage 2: Sale time!');
var discountStartTime = isTimeOk('Введіть годину початку дії знижок (від 0 до 23)');
var discountFinishTime = isTimeOk('Введіть годину завершення дії знижок (від 0 до 23)');
var presentTime = isTimeOk('Введіть теперешню годину (від 0 до 23)');

if (discountStartTime < discountFinishTime && presentTime >= discountStartTime && presentTime <= discountFinishTime) {
  console.log('Знижки є, годин до кінця дії знижок: ' + (discountFinishTime - presentTime));
} else if (discountStartTime > discountFinishTime && presentTime >= discountStartTime) {
  console.log('Знижки є, годин до кінця дії знижок: ' + (discountFinishTime - presentTime + 24));
} else if (discountStartTime > discountFinishTime && presentTime <= discountFinishTime) {
  console.log('Знижки є, годин до кінця дії знижок: ' + (discountFinishTime - presentTime));
} else {
  console.log('Знижок наразі нема :(');
}

function isTimeOk(question) {
  var val = +prompt(question, '0');
  while (isNaN(val) || val < 0 || val > 23) {
    val = +prompt('Невірно введений час, спробуйте ще.\n' + question, '0');
  }
  return val;
}

/* task 8 */

alert('Stage 3: Masha\'s polylemma');

var anjelaIsHere = confirm('Чи прийшла Анжела?');
var stepanIsHere = confirm('Чи прийшов Степан?');
var mikolaIsHere = confirm('Чи прийшов Микола?');

if ((!anjelaIsHere && (!stepanIsHere || !mikolaIsHere)) || (anjelaIsHere && stepanIsHere && mikolaIsHere)) {
  console.log('Маша була засмучена');
} else {
  console.log('Маша була рада');
}