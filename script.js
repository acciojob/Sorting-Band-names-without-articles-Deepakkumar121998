let bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones', 'Pink Floyd'];

function sortBandNames(bandNames) {
  let articlesPattern = /^(a|an|the)\s/i;

  bandNames.sort((a, b) => {
    let nameA = a.replace(articlesPattern, '').trim();
    let nameB = b.replace(articlesPattern, '').trim();
    return nameA.localeCompare(nameB);
  });

  return bandNames;
}

let ulElement = document.querySelector('#band');

let sortedBandNames = sortBandNames(bandNames);
sortedBandNames.forEach(bandName => {
  let liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});
