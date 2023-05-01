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
    shift: ":",
  },
  {
    key: "=",
    code: "Equal",
    shift: "+",
  },
  {
    key: ",",
    code: "Comma",
    shift: "<",
  },
  {
    key: "-",
    code: "Minus",
    shift: "_",
  },
  {
    key: ".",
    code: "Period",
    shift: ">",
  },
  {
    key: "/",
    code: "Slash",
    shift: "?",
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
    shift: "|",
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
sectionElement.classList.add("virtual-keyboard");

const textarea = document.createElement("textarea");
textarea.setAttribute("id", "textarea");

const keyboard = document.createElement("div");
keyboard.setAttribute("id", "keyboard");

sectionElement.append(textarea);
sectionElement.append(keyboard);

rootElement.append(header);
rootElement.append(sectionElement);
bodyElement.append(rootElement);

let properties = {
  isCaps: false,
  keysPressed: {},
};

const isEnterShift =
  properties.keysPressed?.ShiftLeft || properties.keysPressed?.ShiftRight;

const enterKeys = (key, code = "", shiftKey = false) => {
  console.log(code, key);
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
      if (code.includes("Key")) {
        if (properties.isCaps && shiftKey) {
          textarea.value += key.toLowerCase();
        } else {
          textarea.value +=
            properties.isCaps || shiftKey
              ? key.toUpperCase()
              : key.toLowerCase();
        }
      } else {
        textarea.value += key;
      }
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

const changeCaseLetters = (isCaps) => {
  const keysLetter = [...document.querySelectorAll("[class*=Key]")];
  keysLetter.forEach((el) => {
    const itemKey = isCaps
      ? el.dataset.key.toUpperCase()
      : el.dataset.key.toLowerCase();
    el.dataset.key = itemKey;
    el.innerHTML = itemKey;
  });
};

const switchCaps = (key) => {
  if (key === "CapsLock") {
    const isCaps = !properties.isCaps;
    properties.isCaps = isCaps;
    changeCaseLetters(isCaps);
  }
};

const shiftPress = (isShift, code) => {
  const keysShift = [...document.querySelectorAll(".keyItem-shift")];

  keysShift.forEach((item) => {
    item.innerHTML = isShift ? item?.dataset?.shift : item.dataset.key;
  });

  if (isShift) {
    properties.keysPressed[code] = true;
    changeCaseLetters(isShift && !properties.isCaps);
  } else {
    delete properties.keysPressed[code];
    changeCaseLetters(properties.isCaps);
  }
};

const onMouseUp = (key, event, code) => {
  if (key !== "CapsLock") {
    event.target.classList.remove("active");
  } else {
    if (!properties.isCaps) {
      event.target.classList.remove("active");
    }
  }
  if (code.includes("Shift")) {
    shiftPress(false, code);
  }
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

  if (el?.shift) {
    elementKey.classList.add("keyItem-shift");
    elementKey.setAttribute("data-shift", el?.shift);
  }

  setKey(elementKey, key);

  elementKey.addEventListener("mousedown", (event) => {
    event.target.classList.add("active");
    switchCaps(key);
    console.log(event.shiftKey);
    if (event.shiftKey) {
      enterKeys(el?.shift || key, code, event.shiftKey);
    } else {
      enterKeys(key, code);
    }
    if (code.includes("Shift")) {
      shiftPress(true, code);
    }
  });

  elementKey.addEventListener("mouseup", (event) => {
    onMouseUp(key, event, code);
  });

  elementKey.addEventListener("mouseout", (event) => {
    onMouseUp(key, event, code);
  });

  keyboard.append(elementKey);
});

window.addEventListener("keydown", (event) => {
  event.preventDefault();
  properties.keysPressed[event.code] = true;

  const keyPress = document.querySelector(`.${event.code}`);
  if (keyPress) {
    if (!keyPress.classList.contains("active")) {
      keyPress.classList.add("active");
    }

    // press shift
    if (event.code.includes("Shift")) {
      shiftPress(true, event.code);
    }

    if (event.code === "CapsLock") {
      switchCaps(event.code);
    } else {
      const isShiftPress =
        event.shiftKey ||
        properties.keysPressed?.ShiftLeft ||
        properties.keysPressed?.ShiftRight;
      const keyValue = isShiftPress
        ? keyPress.dataset.shift || keyPress.dataset.key
        : keyPress.dataset.key;
      enterKeys(keyValue);
    }
  }
});

window.addEventListener("keyup", (event) => {
  event.preventDefault();

  const keyPress = document.querySelector(`.${event.code}`);
  if (keyPress) {
    if (event.code.includes("Shift")) {
      shiftPress(false, event.code);
    }
    if (event.code !== "CapsLock") {
      keyPress?.classList.remove("active");
    } else {
      if (!properties.isCaps) {
        keyPress.classList.remove("active");
      }
    }
  }
});
