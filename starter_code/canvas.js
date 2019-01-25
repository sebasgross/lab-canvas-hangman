function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
  this.secretWord = secretWord;
  this.start = 0;
  console.log(this.secretWord);
}

HangmanCanvas.prototype.createBoard = function() {};

HangmanCanvas.prototype.drawLines = function() {
  for (let i = 0; i < hangman.secretWord.length; i++) {
    // let x = i * 150;
    this.ctx.beginPath();
    this.ctx.moveTo(100 + i * 150, 500);
    this.ctx.lineTo(200 + i * 150, 500);
    this.ctx.stroke();
    this.ctx.closePath();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  // let letter = hangman.secretWord[index];
  // let x = 150 * i;
  this.ctx.lineWidth = 2;
  this.ctx.font = "48px serif";
  for (let i = index; i < this.secretWord.length; i++) {
    if (hangman.secretWord[i] == this.secretWord[index]) {
      this.ctx.strokeText(this.secretWord[index], i * 150 + 130, 490);
    }
  }
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  this.ctx.font = "40px serif";
  this.ctx.strokeText(letter, 550 + errorsLeft * 50, 100);
  this.drawHangman(errorsLeft);
};

HangmanCanvas.prototype.drawHangman = function(errorsLeft) {
  switch (errorsLeft) {
    case 9:
      this.ctx.beginPath();
      this.ctx.moveTo(10, 500);
      this.ctx.lineTo(80, 500);
      this.ctx.lineTo(45, 470);
      this.ctx.fill();
      this.ctx.closePath();
      break;
    case 8:
      this.ctx.beginPath();
      this.ctx.moveTo(45, 470);
      this.ctx.lineTo(45, 50);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 7:
      this.ctx.beginPath();
      this.ctx.moveTo(45, 50);
      this.ctx.lineTo(450, 50);
      this.ctx.lineTo(450, 100);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 6:
      this.ctx.beginPath();
      this.ctx.arc(450, 130, 30, 0, Math.PI * 2, true);
      this.ctx.stroke();
      break;
    case 5:
      this.ctx.beginPath();
      this.ctx.moveTo(450, 160);
      this.ctx.lineTo(450, 300);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 4:
      this.ctx.beginPath();
      this.ctx.moveTo(450, 300);
      this.ctx.lineTo(400, 370);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 3:
      this.ctx.beginPath();
      this.ctx.moveTo(450, 300);
      this.ctx.lineTo(500, 370);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 2:
      this.ctx.beginPath();
      this.ctx.moveTo(450, 200);
      this.ctx.lineTo(400, 210);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 1:
      this.ctx.beginPath();
      this.ctx.moveTo(450, 200);
      this.ctx.lineTo(500, 210);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 0:
      this.ctx.font = "10px arial";
      this.ctx.strokeText("X     X", 437, 125);
      this.ctx.beginPath();
      this.ctx.moveTo(437, 140);
      this.ctx.lineTo(463, 140);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
  }
};

HangmanCanvas.prototype.gameOver = function() {
  if (hangman.errorsLeft === 0) {
    let lost = new Image();
    lost.src = "./images/gameover.png";
    loser.onload = () => {
      this.ctx.drawImage(loser, 300, 300, 400, 200);
    };
  }
};

HangmanCanvas.prototype.winner = function() {};

// // LA BASE (TRIANGULO):
// this.ctx.beginPath();
// this.ctx.moveTo(10, 500);
// this.ctx.lineTo(80, 500);
// this.ctx.lineTo(45, 470);
// this.ctx.fill();
// this.ctx.closePath();

// // ASTA
// this.ctx.beginPath();
// this.ctx.moveTo(45, 470);
// this.ctx.lineTo(45, 50);
// this.ctx.stroke();
// this.ctx.closePath();

// //gancho
// this.ctx.beginPath();
// this.ctx.moveTo(45, 50);
// this.ctx.lineTo(450, 50);
// this.ctx.lineTo(450, 100);
// this.ctx.stroke();
// this.ctx.closePath();

// //cabeza
// this.ctx.beginPath();
// this.ctx.arc(450, 130, 30, 0, Math.PI * 2, true);
// this.ctx.stroke();

// //cuerpo
// this.ctx.beginPath();
// this.ctx.moveTo(450, 160);
// this.ctx.lineTo(450, 300);
// this.ctx.stroke();
// this.ctx.closePath();

// //right leg
// this.ctx.beginPath();
// this.ctx.moveTo(450, 300);
// this.ctx.lineTo(400, 370);
// this.ctx.stroke();
// this.ctx.closePath();

// //left leg
// this.ctx.beginPath();
// this.ctx.moveTo(450, 300);
// this.ctx.lineTo(500, 370);
// this.ctx.stroke();
// this.ctx.closePath();

// //right arm
// this.ctx.beginPath();
// this.ctx.moveTo(450, 200);
// this.ctx.lineTo(400, 210);
// this.ctx.stroke();
// this.ctx.closePath();

// //left arm
// this.ctx.beginPath();
// this.ctx.moveTo(450, 200);
// this.ctx.lineTo(500, 210);
// this.ctx.stroke();
// this.ctx.closePath();

// //cara de muerto
// this.ctx.font = "10px arial";
// this.ctx.strokeText("X     X", 437, 125);

// this.ctx.beginPath();
// this.ctx.moveTo(437, 140);
// this.ctx.lineTo(463, 140);
// this.ctx.stroke();
// this.ctx.closePath();

// //las lineas de palabra
// // SEGUN A LA PALABRA RANDOM
// this.ctx.beginPath();
// this.ctx.moveTo(100 + x, 500);
// this.ctx.lineTo(200 + x, 500);
// this.ctx.stroke();
// this.ctx.closePath();
