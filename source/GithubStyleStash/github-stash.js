/**
 * Github Styles for Stash
 */
"use strict";

(function() {

	/**
	 * The button is added to the DOM asynchronously, so we need to poll until its been added
	 */

	// definition for button node (assigned later)
	var markdownButton;

	// define a limit for the amount of times we should try to find the button
	var limit = 20,
		counter = 0;

	// async interval
	(function checkForButton() {

		// stop trying if we reach the limit
		if (counter === limit) {
			return false;
		}

		// try to get the button
		markdownButton = document.querySelector(".aui-button[title='View the file as Markdown']");

		// if no button, increment the counter and try again
		if (!markdownButton) {
			counter++;
			setTimeout(checkForButton, 200);
		}
		// if we find a button, click it!
		else {
			markdownButton.click();
		}

	}());

}());