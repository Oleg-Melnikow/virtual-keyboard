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
    shiftRu: `"`,
  },
  {
    key: "3",
    code: "Digit3",
    shift: "#",
    shiftRu: `№`,
  },
  {
    key: "4",
    code: "Digit4",
    shift: "$",
    shiftRu: `;`,
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
    shiftRu: `:`,
  },
  {
    key: "7",
    code: "Digit7",
    shift: "&",
    shiftRu: `?`,
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
    keyRu: "ф",
  },
  {
    key: "b",
    code: "KeyB",
    keyRu: "и",
  },
  {
    key: "c",
    code: "KeyC",
    keyRu: "с",
  },
  {
    key: "d",
    code: "KeyD",
    keyRu: "в",
  },
  {
    key: "e",
    code: "KeyE",
    keyRu: "у",
  },
  {
    key: "f",
    code: "KeyF",
    keyRu: "а",
  },
  {
    key: "g",
    code: "KeyG",
    keyRu: "п",
  },
  {
    key: "h",
    code: "KeyH",
    keyRu: "р",
  },
  {
    key: "i",
    code: "KeyI",
    keyRu: "ш",
  },
  {
    key: "j",
    code: "KeyJ",
    keyRu: "о",
  },
  {
    key: "k",
    code: "KeyK",
    keyRu: "л",
  },
  {
    key: "l",
    code: "KeyL",
    keyRu: "д",
  },
  {
    key: "m",
    code: "KeyM",
    keyRu: "ь",
  },
  {
    key: "n",
    code: "KeyN",
    keyRu: "т",
  },
  {
    key: "o",
    code: "KeyO",
    keyRu: "щ",
  },
  {
    key: "p",
    code: "KeyP",
    keyRu: "з",
  },
  {
    key: "q",
    code: "KeyQ",
    keyRu: "й",
  },
  {
    key: "r",
    code: "KeyR",
    keyRu: "к",
  },
  {
    key: "s",
    code: "KeyS",
    keyRu: "ы",
  },
  {
    key: "t",
    code: "KeyT",
    keyRu: "е",
  },
  {
    key: "u",
    code: "KeyU",
    keyRu: "г",
  },
  {
    key: "v",
    code: "KeyV",
    keyRu: "м",
  },
  {
    key: "w",
    code: "KeyW",
    keyRu: "ц",
  },
  {
    key: "x",
    code: "KeyX",
    keyRu: "ч",
  },
  {
    key: "y",
    code: "KeyY",
    keyRu: "н",
  },
  {
    key: "z",
    code: "KeyZ",
    keyRu: "я",
  },
  {
    key: "Win",
    code: "MetaLeft",
  },
  {
    key: ";",
    code: "Semicolon",
    shift: ":",
    keyRu: "ж",
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
    keyRu: "б",
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
    keyRu: "ю",
  },
  {
    key: "/",
    code: "Slash",
    shift: "?",
    keyRu: ".",
    shiftRu: ",",
  },
  {
    key: "`",
    code: "Backquote",
    shift: "~",
    keyRu: "ё",
    shiftRu: "Ё",
  },
  {
    key: "[",
    code: "BracketLeft",
    shift: "{",
    keyRu: "х",
  },
  {
    key: "\\",
    code: "Backslash",
    shift: "|",
    shiftRu: "/",
  },
  {
    key: "]",
    code: "BracketRight",
    shift: "}",
    keyRu: "ъ",
  },
  {
    key: "'",
    code: "Quote",
    shift: `"`,
    keyRu: "э",
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
  currentLanguage: "en",
};

const isEnterShift =
  properties.keysPressed?.ShiftLeft || properties.keysPressed?.ShiftRight;

const enterKeys = (key, code = "", shiftKey = false) => {
  console.log(key, code);
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
      if (properties.isCaps && shiftKey) {
        textarea.value += key.toLowerCase();
      } else {
        textarea.value +=
          properties.isCaps || shiftKey ? key.toUpperCase() : key.toLowerCase();
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
  if (properties.currentLanguage === "en") {
    const keysLetter = [...document.querySelectorAll("[class*=Key]")];
    keysLetter.forEach((el) => {
      const itemKey = isCaps
        ? el.dataset.key.toUpperCase()
        : el.dataset.key.toLowerCase();
      el.dataset.key = itemKey;
      el.innerHTML = itemKey;
    });
  } else {
    const keysLetterRu = [...document.querySelectorAll(".keyItem-ru")];
    keysLetterRu.forEach((el) => {
      const itemKey = isCaps
        ? el.dataset.keyru.toUpperCase()
        : el.dataset.keyru.toLowerCase();
      el.dataset.keyru = itemKey;
      el.innerHTML = itemKey;
    });
  }
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
    const shiftLang =
      properties.currentLanguage === "en"
        ? item?.dataset?.shift
        : item?.dataset?.shiftru || item?.dataset?.shift;
    item.innerHTML = isShift ? shiftLang : item.dataset.key;
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

const changeLang = () => {
  const itemsLang = [...document.querySelectorAll(".keyItem-ru")];
  itemsLang.forEach((el) => {
    const item =
      properties.currentLanguage === "en"
        ? el?.dataset?.keyru || el?.dataset?.key
        : el?.dataset?.key;
    el.innerHTML = properties.isCaps ? item.toUpperCase() : item.toLowerCase();
  });
};

const keysBoard = keys.sort(
  (a, b) => keyLayout.indexOf(a.key) - keyLayout.indexOf(b.key)
);

keysBoard.forEach(async (el) => {
  const { key, code } = el;
  const elementKey = document.createElement("div");
  elementKey.classList.add("keyItem");
  elementKey.setAttribute("data-key", key);
  elementKey.classList.add(code);

  const language = await localStorage.getItem("language");
  if (language) {
    properties.currentLanguage = language;
  }

  if (el?.shift) {
    elementKey.classList.add("keyItem-shift");
    elementKey.setAttribute("data-shift", el?.shift);
  }
  if (el?.shiftRu) {
    elementKey.setAttribute("data-shiftru", el?.shiftRu);
  }

  if (el?.keyRu) {
    elementKey.classList.add("keyItem-ru");
    elementKey.setAttribute("data-keyRu", el?.keyRu);
  }

  if (properties.currentLanguage === "ru") {
    setKey(elementKey, el?.keyRu || key);
  } else {
    setKey(elementKey, key);
  }

  elementKey.addEventListener("mousedown", (event) => {
    event.target.classList.add("active");
    switchCaps(key);
    const languageKey =
      properties.currentLanguage === "en" ? key : el?.keyRu || key;
    if (event.shiftKey) {
      const shiftLang =
        properties.currentLanguage === "en"
          ? el?.shift
          : el?.shiftRu || el?.shift;
      enterKeys(shiftLang || languageKey, code, event.shiftKey);
    } else {
      enterKeys(languageKey, code);
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

window.addEventListener("keydown", async (event) => {
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
      const languageKey =
        properties.currentLanguage === "en"
          ? keyPress?.dataset?.key
          : keyPress?.dataset?.keyru || keyPress?.dataset?.key;
      const shiftLang =
        properties.currentLanguage === "en"
          ? keyPress?.dataset?.shift
          : keyPress?.dataset?.shiftru || keyPress?.dataset?.shift;
      const keyValue = isShiftPress ? shiftLang || languageKey : languageKey;
      enterKeys(keyValue, event.code, isShiftPress);
    }

    // change language
    if (
      event.code === "AltLeft" &&
      properties.keysPressed.hasOwnProperty("ControlLeft")
    ) {
      const language = await localStorage.getItem("language");
      changeLang();
      if (!language) {
        await localStorage.setItem("language", "ru");
        properties.currentLanguage = "ru";
      } else if (language && properties.currentLanguage === "en") {
        await localStorage.setItem("language", "ru");
        properties.currentLanguage = "ru";
      } else {
        await localStorage.setItem("language", "en");
        properties.currentLanguage = "en";
      }
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
