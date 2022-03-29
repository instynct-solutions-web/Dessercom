export default class Text {
	constructor() {
		// Separate letters variables
		this.separateLetterList = document.querySelectorAll('[data-letters]');
		this.separateLetterClass = [];
		this.separateLetterHTML = [];
		this.separateLetterLines = [];
		if (this.separateLetterList.length !== 0) {
			for (let i = 0; i < this.separateLetterList.length; i += 1) {
				this.separateLetterClass.push(this.separateLetterList[i].classList[0]);
				this.separateLetterHTML.push(this.separateLetterList[i].innerHTML);
				this.separateLetterList[i].innerHTML = '';
				this.separateLetterLines.push(this.separateLetterHTML[i].split('<br>'));
			}
		}

		// Separate letters Init
		if (this.separateLetterList.length !== 0) {
			for (let i = 0; i < this.separateLetterList.length; i += 1) {
				this.initSeparateLetters(i);
			}
		}

		// Separate Words variables
		this.separateWordList = document.querySelectorAll('[data-words]');
		this.separateWordClass = [];
		this.separateWordHTML = [];
		this.separateWordLines = [];
		if (this.separateWordList.length !== 0) {
			for (let i = 0; i < this.separateWordList.length; i += 1) {
				this.separateWordClass.push(this.separateWordList[i].classList[0]);
				this.separateWordHTML.push(this.separateWordList[i].innerHTML);
				this.separateWordList[i].innerHTML = '';
				this.separateWordLines.push(this.separateWordHTML[i].split('<br>'));
			}
		}

		// Separate Words Init
		if (this.separateWordList.length !== 0) {
			for (let i = 0; i < this.separateWordList.length; i += 1) {
				this.initSeparateWords(i);
			}
		}

		// Separate lines
		this.separateLinesList = document.querySelectorAll('[data-lines]');
		this.separateLinesClass = [];
		this.separateLinesHTML = [];
		this.separateLinesLines = [];
		if (this.separateLinesList.length !== 0) {
			for (let i = 0; i < this.separateLinesList.length; i += 1) {
				this.separateLinesClass.push(this.separateLinesList[i].classList[0]);
				this.separateLinesHTML.push(this.separateLinesList[i].innerHTML);
				this.separateLinesList[i].innerHTML = '';
				this.separateLinesLines.push(this.separateLinesHTML[i].split('<br>'));
			}
		}

		// Separate Lines Init
		if (this.separateLinesList.length !== 0) {
			for (let i = 0; i < this.separateLinesList.length; i += 1) {
				this.initSeparateLines(i);
			}
		}
	}

	initSeparateLetters(index) {
		for (let j = 0; j < this.separateLetterLines[index].length; j += 1) {
			this.separateCharacterLetters = this.separateLetterLines[index][j].split('');
			this.separateCharacterLineContent = '';
			for (let k = 0; k < this.separateCharacterLetters.length; k += 1) {
				this.separateCharacterLetter = this.separateCharacterLetters[k];
				if (this.separateCharacterLetter === ' ') {
					this.separateCharacterLineContent += `<span class="${this.separateLetterClass[index]}-space separate-character__space">${this.separateCharacterLetter}</span>`;
				} else {
					this.separateCharacterLineContent += `<span class="${this.separateLetterClass[index]}-letter separate-character__letter">${this.separateCharacterLetter}</span>`;
				}
			}
			this.separateLetterList[index].innerHTML = `${this.separateLetterList[index].innerHTML}<div class="${this.separateLetterClass[index]}-line separate-character__line">${this.separateCharacterLineContent}</div>`;
		}
	}

	initSeparateWords(index) {
		for (let j = 0; j < this.separateWordLines[index].length; j += 1) {
			this.separateWordWords = this.separateWordLines[index][j].split(' ');
			this.separateWordLineContent = '';
			for (let k = 0; k < this.separateWordWords.length; k += 1) {
				this.separateWordWord = this.separateWordWords[k];
				this.separateWordLineContent += `<span class="${this.separateWordClass[index]}-word separate-word__word"><span class="${this.separateWordClass[index]}-content separate-word__content">${this.separateWordWord}</span></span>`;
			}
			this.separateWordList[index].innerHTML += `<div class="${this.separateWordClass[index]}-line separate-word__line">${this.separateWordLineContent}</div>`;
		}
	}

	initSeparateLines(index) {
		for (let j = 0; j < this.separateLinesLines[index].length; j += 1) {
			this.separateLinesList[index].innerHTML += `<div class="${this.separateLinesClass[index]}-line separate-line__line"><span class="${this.separateLinesClass[index]}-line-content separate-line__content">${this.separateLinesLines[index][j]}</span></div>`;
		}
	}
}
