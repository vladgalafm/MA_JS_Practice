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
      showCurrentPage(i);
    }

    pagerControlsUpdate();
  }

  function showCurrentPage(i) {
    if (rows[i].dataset.filter && rows[i].getAttribute('data-page') === currentPage) {
      rows[i].classList.remove('display-none');
    } else {
      rows[i].classList.add('display-none');
    }
  }

  function createNewPageLink(i) {
    var newLi = document.createElement('li');
    newLi.className = 'pager__list-item';
    newLi.setAttribute('data-go-to-page', i);
    if (i === 1 || i === pagesAmount) {
      pagerList.appendChild(newLi);
    } else {
      if (pagerList.querySelector('[data-go-to-page="' + (i - 1) + '"]') !== null) {
        insertAfter(newLi, pagerList.querySelector('[data-go-to-page="' + (i - 1) + '"]'));
      } else {
        insertAfter(newLi, pagerList.querySelector('[data-go-to-page="1"]'));
      }
    }

    var newLink = document.createElement('a');
    newLink.className = 'pager__page';
    newLink.innerHTML = i;
    newLi.appendChild(newLink);

    if (+newLink.innerHTML === currentPage) {
      newLink.classList.add('pager__page--current');
    }
  }

  function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function pageLinksMappingCheckout() {
    var linksList = pagerList.querySelectorAll('li');
    for (var i = 0; i < linksList.length; i++) {
      var currentLinkInner = linksList[i].querySelector('a').innerHTML;
      var nextLinkInner = linksList[i + 1].querySelector('a').innerHTML;
      if (+nextLinkInner - +currentLinkInner === 2) {
        createNewPageLink(+currentLinkInner + 1);
      } else if (+nextLinkInner - +currentLinkInner > 2) {
        var newLi = document.createElement('li');
        newLi.className = 'pager__list-item';
        newLi.innerHTML = '...';
        pagerList.insertBefore(newLi, linksList[i + 1]);
      }
    }
  }

  function pagerControlsUpdate() {
    if (pagesAmount < 6) {
      for (var i = 1; i < pagesAmount + 1; i++) {
        createNewPageLink(i);
      }
    } else {
      if (currentPage === 1 || currentPage === 2) {
        for (i = 1; i < 4; i++) {
          createNewPageLink(i);
        }
        createNewPageLink(pagesAmount);
      } else if (currentPage === pagesAmount || currentPage === pagesAmount - 1) {
        createNewPageLink(1);
        for (i = pagesAmount - 2; i < pagesAmount + 1; i++) {
          createNewPageLink(i);
        }
      } else {
        createNewPageLink(1);
        for (i = currentPage - 1; i < currentPage + 2; i++) {
          createNewPageLink(i);
        }
        createNewPageLink(pagesAmount);
      }
    }

    pageLinksMappingCheckout();

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