const gameBoard = (() => {
    let board = [];
    for (let i = 0; i < 3; i++) {
        board.push([]);
        for (let j = 0; j < 3; j++) {
        board[i].push([]);
        }
    }

    const addToken = (token, row, col) => {
        board[row][col] = token;
    }

    return { board, addToken };
})();

const displayController = (() => {
    const board = gameBoard.board;

    return { board };
})();

const player = (name, symbol) => {
    this.name = name;
    this.symbol = symbol;

    return { name, symbol };
}

//TESTS
describe("gameBoard", () => {
    test("board should be an array of arrays with length 3", () => {
      expect(gameBoard.board.length).toBe(3);
      expect(gameBoard.board[0].length).toBe(3);
      expect(gameBoard.board[1].length).toBe(3);
      expect(gameBoard.board[2].length).toBe(3);
    });
  
    test("addToken should add token to the correct position on the board", () => {
      gameBoard.addToken("X", 0, 0);
      expect(gameBoard.board[0][0]).toBe("X");
  
      gameBoard.addToken("O", 1, 2);
      expect(gameBoard.board[1][2]).toBe("O");
    });
});