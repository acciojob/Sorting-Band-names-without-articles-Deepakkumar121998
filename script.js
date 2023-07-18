//your code here

// Array of band names
let bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones', 'Pink Floyd'];

// Function to sort band names without articles
function sortBandNames(bandNames) {
  // Regular expression pattern to match articles ('a', 'an', 'the') at the beginning of each band name
  let articlesPattern = /^(a|an|the)\s/i;

  // Sorting the band names in lexicographic order without articles
  bandNames.sort((a, b) => {
    let nameA = a.replace(articlesPattern, '').trim();
    let nameB = b.replace(articlesPattern, '').trim();
    return nameA.localeCompare(nameB);
  });

  // Returning the sorted band names
  return bandNames;
}

// Get the <ul> element with id 'band'
let ulElement = document.querySelector('#band');

// Sort and display band names
let sortedBandNames = sortBandNames(bandNames);
sortedBandNames.forEach(bandName => {
  let liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});
