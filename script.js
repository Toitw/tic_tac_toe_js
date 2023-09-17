const gameBoard = (() => {

    const board = [];
    for (let i = 0; i < 3; i++) {
        board.push([]);
        for (let j = 0; j < 3; j++) {
        board[i].push([]);
        }
    }

    const addToken = (token, row, col) => {
        board[row][col] = token;
    }

    const freeSlot = (row, col) => {
        if (board[row][col].length > 0) {
            console.log("Slot already taken");
            return false;
        }
        return true;
    }


    const checkWin = () => {
        // check rows
        for (let i = 0; i < board.length; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return board[i][0];
        }
        }
        // check columns
        for (let i = 0; i < board.length; i++) {
        if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return board[0][i];
        }
        }
        // check diagonals
        if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
        }
        if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2];
        }
        return false;
    }


    return { board, addToken, checkWin, freeSlot };
})();

const displayController = (() => {
    const board = gameBoard.board;

    return { board };
})();

const player = (name, symbol) => {
    this.name = name;
    this.symbol = symbol;

    const getSymbol = () => {
        return symbol;
    }

    const getName = () => {
        return name;
    }

    return { getName, getSymbol };
}

const player1 = player("Player 1", "X");
const player2 = player("Player 2", "O");



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

    test("checkWin should return false if there is no winner", () => {
        expect(gameBoard.checkWin()).toBe(false);
    });

    test("checkWin should return the winning token if there is a winner", () => {
        gameBoard.addToken("X", 0, 0);
        gameBoard.addToken("X", 0, 1);
        gameBoard.addToken("X", 0, 2);
        expect(gameBoard.checkWin()).toBe("X");
    });

    test("freeSlot should return false if the slot is already taken", () => {
        gameBoard.addToken("X", 0, 0)
        expect(gameBoard.freeSlot(0, 0)).toBe(false);
    });

    test("freeSlot should return true if the slot is free", () => {
        expect(gameBoard.freeSlot(1, 0)).toBe(true);
    });
});

describe("player", () => {
    test("getName should return the player's name", () => {
      expect(player1.getName()).toBe("Player 1");
      expect(player2.getName()).toBe("Player 2");
    });
  
    test("getSymbol should return the player's symbol", () => {
      expect(player1.getSymbol()).toBe("X");
      expect(player2.getSymbol()).toBe("O");
    });
});