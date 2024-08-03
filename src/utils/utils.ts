/**
 * Transforms a metadata value into a comma-separated list if needed
 * 
 * @param value The metadata value to be punctuated
 * @returns The value as a comma-separated list, if it is an array, or the value itself if it is not
 */
export const toPunctuatedString = (value: string | string[]) =>
  Array.isArray(value) ? value.join(", ") : value;

/***
 * Renders stringified HTML as true HTML in a specified div
 * Used to render content descriptions correctly 
 * 
 * @param HTMLString The stringified HTML
 * @param targetId The ID of the div where the HTML should be rendered
 */
export const renderParsedHTML = (HTMLString: string, targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.innerHTML = HTMLString;
  }
};

/**
 * Adds an event listener to click on a specified button when the enter key is pressed
 * Used to make the link in the identifier search form behave as a form submit button
 * 
 * @param btnId ID of the button (or anchor element) to be clicked on-enter 
 */
export const linkBtnToEnterKey = (btnId: string) => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const btn = document.getElementById(btnId) as HTMLAnchorElement;
      if (btn) {
        btn.click();
      }
    }
  });
};
