;(function() {
  var table = document.getElementById('medals-table');
  var tbody = table.querySelector('tbody');
  var rows = tbody.querySelectorAll('tr');

  var filter = document.querySelector('.js-filter');
  var rowsPerPage = document.querySelector('.js-rows-per-page');
  var pagerInfo = document.querySelector('.js-pager-info');
  var pagerControls = document.querySelector('.js-pager-controls');
  var pagerPrev = pagerControls.querySelector('.js-pager-prev');
  var pagerNext = pagerControls.querySelector('.js-pager-next');
  var pagerList = pagerControls.querySelector('.js-pager-list');

  var pagesAmount;
  var currentPage = 1;

  filterUpdate();
  rowsPerPageUpdate();

  filter.addEventListener('input', filterUpdate);
  rowsPerPage.addEventListener('input', rowsPerPageUpdate);

  function pagerInfoUpdate() {
    pagerInfo.innerHTML = 'Show 1 to 10 of 150 rows';
  }

  function filterUpdate() {
    var filterInput = filter.value.toLowerCase();

    for (var i = 0; i < rows.length; i++) {
      rows[i].removeAttribute('data-filter');
      var countryName = rows[i].querySelector('.country').innerHTML.toLowerCase();
      if (countryName.indexOf(filterInput) !== -1) {
        rows[i].dataset.filter = true;
      }
      if (rows[i].dataset.filter) {
        rows[i].classList.remove('display-none');
      } else {
        rows[i].classList.add('display-none');
      }
    }

    rowsPerPageUpdate();
  }

  function rowsPerPageUpdate() {
    var rowsPerPageInput = rowsPerPage.value;
    var count = 0;

    for (var i = 0; i < rows.length; i++) {
      rows[i].removeAttribute('data-page');
      if (rows[i].dataset.filter) {
        rows[i].setAttribute('data-page', Math.ceil(++count / rowsPerPageInput) + '');
      }
      pagesAmount = Math.ceil(count / rowsPerPageInput);
      if (rows[i].dataset.filter && rows[i].hasAttribute('data-page')) {
        rows[i].classList.remove('display-none');
      } else {
        rows[i].classList.add('display-none');
      }
      /*
      if (i < rowsPerPageInput) {
        rows[i].classList.remove('display-none');
      } else if (i + 1 > rowsPerPageInput && !rows[i].classList.contains('display-none')) {
        rows[i].classList.add('display-none');
      }
      */
    }
  }

  function pagerControlsUpdate() {

    if (currentPage === 1) {
      pagerPrev.disabled = true;
    } else {
      pagerPrev.disabled = false;
    }
    if (currentPage === pagesAmount) {
      pagerNext.disabled = true;
    } else {
      pagerNext.disabled = false;
    }
  }
}());