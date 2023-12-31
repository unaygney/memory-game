// export const generateBoard = (size) => {
//   const board = [];

//   for (let i = 0; i < size; i++) {
//     const row = [];

//     for (let j = 0; j < size; j++) {
//       if (size === 4) {
//         const randomNumbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
//         row.push(randomNumbers[i * size + j]);
//       } else {
//         const randomNumbers = [
//           1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11,
//           12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18,
//         ];
//         row.push(randomNumbers[i * size + j]);
//       }
//     }
//     board.push(row);
//   }
//   return board;
// };
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
