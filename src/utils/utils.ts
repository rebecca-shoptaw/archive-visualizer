export const toPunctuatedString = (value:string|string[]) => Array.isArray(value) ? value.join(', ') : value;

export const renderParsedHTML = (HTMLString: string, targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.innerHTML = HTMLString;
    }
  };