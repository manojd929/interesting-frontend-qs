const getActualColor = (color) => {
  const element = document.createElement('div');
  element.style.color = color;
  element.style.visibility = 'hidden';

  document.body.appendChild(element);

  const actualColor = window.getComputedStyle(element).color;
  document.body.removeChild(element);
  return actualColor;
};

const searchElements = (root, color) => {
  const outputElements = [];
  const actualColorCode = getActualColor(color);

  const search = (element) => {
    if (window.getComputedStyle(element).color == actualColorCode) {
      outputElements.push(element);
    }
    if (element.children) {
      for (let child of element.children) {
        search(child);
      }
    }
  };

  search(root);

  return outputElements;
};

const rootElement = document.getElementById('root');
console.log(searchElements(root, 'red'));
