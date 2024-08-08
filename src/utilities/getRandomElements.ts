export default function getRandomElements<T>(
  arr: T[],
  numElements: number
): T[] {
  if (numElements > arr.length) {
    return arr;
  }

  // Create a copy of the array to avoid modifying the original array
  const arrayCopy = [...arr];

  // Fisher-Yates shuffle
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }

  // Select the first numElements elements from the shuffled array
  return arrayCopy.slice(0, numElements);
}
