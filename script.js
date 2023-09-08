//your code here
let bandNames = ['The Rolling Stones', 'Aerosmith', 'Led Zeppelin', 'The Beatles', 'Nirvana', 'The Who'];

// Custom sorting function to remove articles and compare band names
function customSort(a, b) {
  // Define a list of common articles to remove
  const articles = ['a', 'an', 'the'];

  // Function to remove articles from a band name
  function removeArticles(name) {
    for (const article of articles) {
      const articleWithSpace = article + ' ';
      if (name.toLowerCase().startsWith(articleWithSpace)) {
        return name.slice(articleWithSpace.length);
      }
    }
    return name;
  }

  // Compare band names without articles
  const nameA = removeArticles(a.toLowerCase());
  const nameB = removeArticles(b.toLowerCase());

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
}

// Sort the band names using the custom sorting function
bandNames.sort(customSort);

// Get the ul element with the id 'band'
const bandList = document.getElementById('band');

// Create list items and add them to the ul
for (const bandName of bandNames) {
  const listItem = document.createElement('li');
  listItem.textContent = bandName;
  bandList.appendChild(listItem);
}

