export const generateBoard = (size) => {
  const board = [];

  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const randomNumber = Math.floor(Math.random() * 20);
      row.push(randomNumber);
    }
    board.push(row);
  }
  return board;
};
