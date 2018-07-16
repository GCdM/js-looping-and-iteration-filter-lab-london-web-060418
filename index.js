function findMatching(collection, match) {
  return collection.filter(function (element) {return element.toLowerCase() === match.toLowerCase();});
}

function fuzzyMatch(collection, match) {
  return collection.filter(function (element) {
    const size = match.length;
    return element.slice(0, size) === match;
  })
}

function matchName(collection, match) {
  return collection.filter(function (element) {return element.name === match})
}
