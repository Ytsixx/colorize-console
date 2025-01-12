const themes = require('./themes');
const colors = require('./colors');
const { applyStyles, rainbowText, randomColor } = require('./utils');

// Função para aplicar uma cor específica
function colorize(message, color) {
  const colorCode = colors[color] || colors.reset;
  return `${colorCode}${message}${colors.reset}`;
}

// Função para logar com tema
function logWithTheme(message, themeName) {
  const theme = themes[themeName];
  if (!theme) {
    console.warn(colorize('Tema não encontrado. Usando padrão.', 'yellow'));
    return console.log(message);
  }
  const styledMessage = applyStyles(message, theme);
  console.log(styledMessage);
}

// Função para criar logs em arco-íris
function rainbowLog(message) {
  console.log(rainbowText(message, colors));
}

// Função para logs com data e hora
function logWithTimestamp(message, color = 'cyan') {
  const timestamp = `[${new Date().toISOString()}]`;
  console.log(`${colorize(timestamp, 'magenta')} ${colorize(message, color)}`);
}

// Função para logar com uma cor aleatória
function randomLog(message) {
  console.log(colorize(message, randomColor(colors)));
}

// Exportando funções
module.exports = {
  colorize,
  logWithTheme,
  rainbowLog,
  logWithTimestamp,
  randomLog,
};