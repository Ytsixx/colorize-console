# Colorize Console 🌈

A biblioteca **Colorize Console** é uma solução inovadora desenvolvida pela **DEV'S Bot Moçambique**, permitindo a personalização das mensagens do console com mais de **150 cores** e diversos temas. Ela visa facilitar a criação de logs coloridos e estilizados, tornando a experiência de desenvolvimento mais agradável e dinâmica. 

Com funcionalidades como **logs em arco-íris**, **cores aleatórias**, **timestamps coloridos** e **temas customizáveis**, ela oferece uma maneira fácil e rápida de aplicar estilos e cores nas saídas do console. Ideal para desenvolvedores que desejam destacar informações, depurar mais eficientemente e melhorar a legibilidade das mensagens de seus projetos.

## 🌟 Funcionalidades

- Mais de **150 cores** disponíveis para customização.
- Temas predefinidos e suporte para criar seus próprios.
- **Logs em arco-íris** e **cores aleatórias**.
- **Timestamps coloridos** para mensagens com data/hora.
- Totalmente modular e fácil de usar.

---

## 📚 Exemplos de Uso

### 1. Importando a Biblioteca

```js
const {
  colorize,
  logWithTheme,
  rainbowLog,
  logWithTimestamp,
  randomLog,
} = require('colorize-console')
```

2. Logs Básicos

```js
console.log(colorize('Texto em vermelho', 'red'));
console.log(colorize('Texto em ouro', 'gold'));
```
3. Usando Temas

```js
logWithTheme('Operação bem-sucedida!', 'success');
logWithTheme('Atenção! Algo deu errado!', 'error');
```
4. Arco-Íris e Cores Aleatórias

```js
rainbowLog('Texto em arco-íris!');
randomLog('Texto com uma cor aleatória!');
```
5. Timestamps

```js
logWithTimestamp('Mensagem importante com data/hora.', 'blue');
```

---

#🎨 Temas Disponíveis

**success:** Para mensagens de sucesso, como verde claro.

**error:** Para mensagens de erro, geralmente em vermelho.

**warning:** Para avisos, geralmente em amarelo.

**info:** Para mensagens informativas, em azul.

**default:** Tema padrão, útil para mensagens gerais.



---

#🤝 Contribuição

Se você tiver ideias para melhorias ou encontrar bugs, fique à vontade para abrir issues ou enviar pull requests.


---

Autor

#SixxModz - Evaristo
#**inta**: @ssiixx666

---