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

rootElement.append(header);
bodyElement.append(rootElement);

console.log(bodyElement);
