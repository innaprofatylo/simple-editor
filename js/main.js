;(function() {
	'use strict';

let editorText = document.querySelector('.editor-text');
let editorField = document.querySelector('.editor-field');

	editorField.hidden = true;

	document.addEventListener('keydown', editorInit);

	function editorInit(event) {
		

		if (event.keyCode == 69 && event.ctrlKey && editorField.hidden) {
			event.preventDefault();
			editorField.value = editorText.innerHTML.trim();
			editorText.hidden = true;
			editorField.hidden = false;
			editorField.focus();
		}

		if (event.keyCode == 83 && event.ctrlKey && !editorField.hidden) {
			event.preventDefault();
			editorText.innerHTML = editorField.value;
			editorText.hidden = false;
			editorField.hidden = true;
		}

		if (event.keyCode == 27 && !editorField.hidden) {
			event.preventDefault();
			editorText.innerHTML = editorField.value;
			editorText.hidden = false;
			editorField.hidden = true;
		}
	}
	})();