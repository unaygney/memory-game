export const generateBoard = (size) => {
  const totalNumbers = size * size; // 4x4 = 16  or 6x6 36
  const maxNumber = totalNumbers / 2; // 8 or 18

  const numbers = Array.from({ length: maxNumber }, (_, index) => index + 1);
  const duplicatedNumbers = [...numbers, ...numbers];

  const shuffledNumbers = shuffleArray(duplicatedNumbers);

  const board = [];

  for (let i = 0; i < size; i++) {
    const row = [];

    for (let j = 0; j < size; j++) {
      row.push(shuffledNumbers[i * size + j]);
    }
    board.push(row);
  }

  return board;
};

// Shuffle Array Function ` THE FISHER YATES METHOD`
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
};
