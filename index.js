const bodyElement = document.querySelector("body");

const rootElement = document.createElement("div");
rootElement.classList.add("root");

const header = document.createElement("header");
header.classList.add("header");
header.innerHTML = `
<h1 class="title">Virtual keyboard</h1>
<div class="info">
<p>Клавиатура создана в операционной системе Windows</p>
<p>Для переключения языка используйте следующую комбинацию: левыe ctrl + alt</p>
</div>
`;

const sectionElement = document.createElement("section");
sectionElement.classList.add("virtualKeyboard");

const textarea = document.createElement("textarea");
textarea.setAttribute("id", "textarea");

const keyboard = document.createElement("div");
keyboard.setAttribute("id", "keyboard");

sectionElement.append(textarea);
sectionElement.append(keyboard);

rootElement.append(header);
rootElement.append(sectionElement);
bodyElement.append(rootElement);

console.log(bodyElement);
