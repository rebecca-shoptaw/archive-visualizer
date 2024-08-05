import { HOMEPAGE_PATH } from "../constants";

/**
 * Transforms a metadata value into a comma-separated list if needed
 *
 * @param value The metadata value to be punctuated
 * @returns The value as a comma-separated list, if it is an array, or the value itself if it is not
 */
export const toPunctuatedString = (value: string | string[] | number[]) =>
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

/**
 * Dynamically generates a path to the visualizer for a specified IA work,
 * but leaves the URL unchanged if no IA work identifier is specified.
 *
 * @param contentId IA identifier for work to be linked to
 * @returns The hashed path of the IA work, if specified, or the base URL if not
 */
export const toHashedPath = (contentId: string) =>
  contentId !== "" ? `${HOMEPAGE_PATH}#${contentId}` : HOMEPAGE_PATH;

/**
 * Capitalizes a word or series of lower case words as Proper Names.
 * Used to transform the author names in the related works section.
 * Regex replace logic finds letter to be capitalized by matching:
 * - Letters at the start of the string
 * - Letters immediately after a space
 * - Letters immediately after a (, " or -, as in Smith (John), John "Johnny" Smith, or John Smith-Jones
 *
 * @param words String of lower case words to be capitalized
 * @returns New string of correctly capitalized words
 */
export const toCapitalized = (words: string) =>
  words.replace(/(^\w|\s\w|[("-]\w)/gi, (letter) => letter.toUpperCase());

/**
 * Formats given ISO date string for improved legibility.
 * Used for PUBLIC_DATE in regular metadata and date in related works.
 * Takes an optional showTime parameter to determine whether time stamp should be included,
 * and removes unnecessary "at" from full string.
 *
 * If the provided string is not in the correct format, it returns the string unchanged.
 *
 * @param date The date to be translated
 * @param options A boolean to determine whether the time stamp should be shown
 * @returns A formatted date, i.e. "January 7, 1991 11:13 AM"
 */
export const toDateString = (
  date: string | string[] | number[],
  options?: { showTime: boolean }
) => {
  const dateString = new Date(date.toString()).toLocaleString("en-us", {
    dateStyle: "long",
    timeStyle: options && options.showTime ? "short" : undefined,
  });

  if (dateString !== "Invalid Date") {
    return dateString.replace(/ at/, "");
  } else return date.toString();
};
