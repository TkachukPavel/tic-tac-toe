class TicTacToe {
    constructor() {
        this.field = [[null, null, null],
                      [null, null, null],
                      [null, null, null],];
        this.isFirstPlays = true;
        this.amountTurns = 9;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.isFirstPlays ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (!!this.field[rowIndex][columnIndex] || this.isFinished())
            return;
        this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        this.isFirstPlays = !this.isFirstPlays;
        this.amountTurns -= 1;
    }

    isFinished() {
       return !!this.getWinner() || this.isDraw();
    }

    getWinner() {

        for (var i = 0; i < 3; i++){
            var inRow = this.field[i][0];
            var inCol = this.field[0][i];
            for (var j = 0; j < 3; j++){
                inRow = this.field[i][j] == inRow ? inRow : null;
                inCol = this.field[j][i] == inCol ? inCol : null;
            }
            if (inRow || inCol){
                this.winner = inRow ? inRow : inCol;
                return this.winner;
            }
        }
        if (this.field[1][1] && (this.field[0][0] == this.field[1][1] && this.field[1][1] == this.field[2][2]) 
                             || (this.field[0][2] == this.field[1][1] && this.field[1][1] == this.field[2][0])){
            this.winner = this.field[1][1];
            return this.winner;
        }
        return this.winner;
    }

    noMoreTurns() {
        return this.amountTurns == 0;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
