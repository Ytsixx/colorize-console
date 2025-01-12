function applyStyles(message, theme) {
  const styles = {
    bold: '\x1b[1m',
    italic: '\x1b[3m',
    underline: '\x1b[4m',
  };

  const styleCode = styles[theme.style] || '';
  const colorCode = require('./colors')[theme.color] || '';
  return `${colorCode}${styleCode}${message}\x1b[0m`;
}

function rainbowText(message, colors) {
  const colorKeys = Object.keys(colors).filter((key) => key !== 'reset');
  return message
    .split('')
    .map((char, index) => {
      const color = colorKeys[index % colorKeys.length];
      return `${colors[color]}${char}`;
    })
    .join('') + colors.reset;
}

function randomColor(colors) {
  const colorKeys = Object.keys(colors).filter((key) => key !== 'reset');
  return colorKeys[Math.floor(Math.random() * colorKeys.length)];
}

module.exports = { applyStyles, rainbowText, randomColor };