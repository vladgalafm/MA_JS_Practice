function buildHierarchy(obj, dataArr) {

  dataArr.forEach(item => {
    for (let key in obj) {
      if (item.parent === key) {
        obj[key][item.id] = Object.create(null);
        buildHierarchy(obj[key], dataArr);
      }
    }
  });

}

fetch('https://tanuhaua.github.io/datas-file-json/animals/animals.json')
  .then(response => response.json())
  .then(data => {

    const hierarchy = Object.create(null);
    const dataFiltered = data.filter(item => {
      if (item.parent === null) {
        hierarchy[item.id] = Object.create(null);
      } else {
        return item;
      }
    });

    buildHierarchy(hierarchy, dataFiltered);

    console.log('Received data', data);
    console.log('Expected hierarchy', hierarchy);
  })
  .catch(console.error('Failed to load data'));