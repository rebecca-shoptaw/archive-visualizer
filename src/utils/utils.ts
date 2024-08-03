export const toPunctuatedString = (value: string | string[]) =>
  Array.isArray(value) ? value.join(", ") : value;

export const renderParsedHTML = (HTMLString: string, targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.innerHTML = HTMLString;
  }
};

export const linkBtnToEnterKey = (btnId: string) => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const btn = document.getElementById(btnId) as HTMLAnchorElement;
      if (btn) {
        btn.click();
      }
    }
  });
};
