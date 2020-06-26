export function* mergeSortedSets(iterative, sets = iterative.values(), pass = sets.next().value) {
    for (let set of sets) {
      yield pass = [...merge(pass, set)]
    }
  }
  
  function* merge(setA, setB) {
    for (let ri = 0, ai = 0, bi = 0; ri < setA.length + setB.length; ri++) {
      if (ai >= setA.length || setA[ai] > setB[bi]) yield setB[bi++];
      else yield setA[ai++];
    }
  }