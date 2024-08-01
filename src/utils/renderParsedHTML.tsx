const renderParsedHTML = (HTMLString: string, targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.innerHTML = HTMLString;
  }
};

export default renderParsedHTML;