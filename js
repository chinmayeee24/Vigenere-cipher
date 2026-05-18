function formatKey(text, key) {
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  let formattedKey = '';
  let j = 0;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (/[A-Za-z]/.test(char)) {
      formattedKey += key[j % key.length];
      j++;
    } else {
      formattedKey += char;
    }
  }

  return formattedKey;
}

function vigenereEncrypt(text, key) {
  text = text.toUpperCase();
  key = formatKey(text, key);

  let result = '';

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (/[A-Z]/.test(char)) {
      let textCode = char.charCodeAt(0) - 65;
      let keyCode = key[i].charCodeAt(0) - 65;

      let encryptedChar = String.fromCharCode(
        ((textCode + keyCode) % 26) + 65
      );

      result += encryptedChar;
    } else {
      result += char;
    }
  }

  return result;
}

function vigenereDecrypt(text, key) {
  text = text.toUpperCase();
  key = formatKey(text, key);

  let result = '';

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (/[A-Z]/.test(char)) {
      let textCode = char.charCodeAt(0) - 65;
      let keyCode = key[i].charCodeAt(0) - 65;

      let decryptedChar = String.fromCharCode(
        ((textCode - keyCode + 26) % 26) + 65
      );

      result += decryptedChar;
    } else {
      result += char;
    }
  }

  return result;
}

function encryptText() {
  const text = document.getElementById('text').value;
  const key = document.getElementById('key').value;

  if (!text || !key) {
    alert("Please enter both text and key.");
    return;
  }

  document.getElementById('output').innerText =
    vigenereEncrypt(text, key);
}

function decryptText() {
  const text = document.getElementById('text').value;
  const key = document.getElementById('key').value;

  if (!text || !key) {
    alert("Please enter both text and key.");
    return;
  }

  document.getElementById('output').innerText =
    vigenereDecrypt(text, key);
}
