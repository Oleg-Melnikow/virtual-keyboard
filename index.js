const keyLayout = [
  "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-", "=", "Backspace",
  "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]","\\", "Del",
  "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ';', "'", "Enter",
  "ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "ShiftRight",
  "ControlLeft", "Win", "AltLeft", " ", "AltRight", "◄", "▼", "►", "ControlRight",
];

const keys = [
  {
    key: "Backspace",
    code: "Backspace",
  },
  {
    key: "Tab",
    code: "Tab",
  },
  {
    key: "Enter",
    code: "Enter",
  },
  {
    key: "ShiftLeft",
    code: "ShiftLeft",
  },
  {
    key: "ShiftRight",
    code: "ShiftRight",
  },
  {
    key: "ControlLeft",
    code: "ControlLeft",
  },
  {
    key: "ControlRight",
    code: "ControlRight",
  },
  {
    key: "AltLeft",
    code: "AltLeft",
  },
  {
    key: "AltRight",
    code: "AltRight",
  },
  {
    key: "CapsLock",
    code: "CapsLock",
  },
  {
    key: " ",
    code: "Space",
  },
  {
    key: "◄",
    code: "ArrowLeft",
  },
  {
    key: "▼",
    code: "ArrowUp",
  },
  {
    key: "►",
    code: "ArrowRight",
  },
  {
    key: "▲",
    code: "ArrowDown",
  },
  {
    key: "Del",
    code: "Delete",
  },
  {
    key: "0",
    code: "Digit0",
    shift: ")",
  },
  {
    key: "1",
    code: "Digit1",
    shift: "!",
  },
  {
    key: "2",
    code: "Digit2",
    shift: "@",
  },
  {
    key: "3",
    code: "Digit3",
    shift: "#",
  },
  {
    key: "4",
    code: "Digit4",
    shift: "$",
  },
  {
    key: "5",
    code: "Digit5",
    shift: "%",
  },
  {
    key: "6",
    code: "Digit6",
    shift: "^",
  },
  {
    key: "7",
    code: "Digit7",
    shift: "&",
  },
  {
    key: "8",
    code: "Digit8",
    shift: "*",
  },
  {
    key: "9",
    code: "Digit9",
    shift: "(",
  },
  {
    key: "a",
    code: "KeyA",
  },
  {
    key: "b",
    code: "KeyB",
  },
  {
    key: "c",
    code: "KeyC",
  },
  {
    key: "d",
    code: "KeyD",
  },
  {
    key: "e",
    code: "KeyE",
  },
  {
    key: "f",
    code: "KeyF",
  },
  {
    key: "g",
    code: "KeyG",
  },
  {
    key: "h",
    code: "KeyH",
  },
  {
    key: "i",
    code: "KeyI",
  },
  {
    key: "j",
    code: "KeyJ",
  },
  {
    key: "k",
    code: "KeyK",
  },
  {
    key: "l",
    code: "KeyL",
  },
  {
    key: "m",
    code: "KeyM",
  },
  {
    key: "n",
    code: "KeyN",
  },
  {
    key: "o",
    code: "KeyO",
  },
  {
    key: "p",
    code: "KeyP",
  },
  {
    key: "q",
    code: "KeyQ",
  },
  {
    key: "r",
    code: "KeyR",
  },
  {
    key: "s",
    code: "KeyS",
  },
  {
    key: "t",
    code: "KeyT",
  },
  {
    key: "u",
    code: "KeyU",
  },
  {
    key: "v",
    code: "KeyV",
  },
  {
    key: "w",
    code: "KeyW",
  },
  {
    key: "x",
    code: "KeyX",
  },
  {
    key: "y",
    code: "KeyY",
  },
  {
    key: "z",
    code: "KeyZ",
  },
  {
    key: "Win",
    code: "MetaLeft",
  },
  {
    key: ";",
    code: "Semicolon",
  },
  {
    key: "=",
    code: "Equal",
  },
  {
    key: ",",
    code: "Comma",
  },
  {
    key: "-",
    code: "Minus",
  },
  {
    key: ".",
    code: "Period",
  },
  {
    key: "/",
    code: "Slash",
  },
  {
    key: "`",
    code: "Backquote",
    shift: "~",
  },
  {
    key: "[",
    code: "BracketLeft",
    shift: "{",
  },
  {
    key: "\\",
    code: "Backslash",
  },
  {
    key: "]",
    code: "BracketRight",
    shift: "}",
  },
  {
    key: "'",
    code: "Quote",
    shift: `"`,
  },
];

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

const enterKeys = (key) => {
  switch (key) {
    case "Backspace":
      textarea.value = textarea.value.slice(0, -1);
      break;
    case "Tab":
      textarea.value += "    ";
      break;
    case "Enter":
      textarea.value += "\n";
      break;
    case "ControlLeft":
    case "ControlRight":
    case "ShiftLeft":
    case "ShiftRight":
    case "CapsLock":
    case "Del":
    case "AltLeft":
    case "AltRight":
    case "Win":
      break;
    default:
      textarea.value += key;
  }
};

const setKey = (element, key) => {
  let keySymbol = key;
  switch (key) {
    case "ShiftLeft":
    case "ShiftRight":
      keySymbol = "Shift";
      break;
    case "ControlLeft":
    case "ControlRight":
      keySymbol = "Ctrl";
      break;
    case "AltLeft":
    case "AltRight":
      keySymbol = "Alt";
      break;
    default:
      break;
  }
  element.innerText = keySymbol;
};

const keysBoard = keys.sort(
  (a, b) => keyLayout.indexOf(a.key) - keyLayout.indexOf(b.key)
);

keysBoard.forEach((el) => {
  const { key, code } = el;
  const elementKey = document.createElement("div");
  elementKey.classList.add("keyItem");
  elementKey.setAttribute("data-key", key);
  elementKey.classList.add(code);

  setKey(elementKey, key);

  elementKey.addEventListener("mousedown", (event) => {
    event.target.classList.add("active");
    enterKeys(key);
  });

  elementKey.addEventListener("mouseup", (event) => {
    event.target.classList.remove("active");
  });

  keyboard.append(elementKey);
});
