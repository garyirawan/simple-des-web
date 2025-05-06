function encrypt() {
  const key = document.getElementById("key").value;
  const text = document.getElementById("plaintext").value;

  if (key.length !== 8) {
    alert("Key harus 8 karakter");
    return;
  }

  const encrypted = CryptoJS.DES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });

  document.getElementById("cipherResult").value = encrypted.toString();
}

function decrypt() {
  const key = document.getElementById("key").value;
  const cipher = document.getElementById("ciphertext").value;

  if (key.length !== 8) {
    alert("Key harus 8 karakter");
    return;
  }

  try {
    const decrypted = CryptoJS.DES.decrypt(cipher, CryptoJS.enc.Utf8.parse(key), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });

    document.getElementById("plainResult").value = decrypted.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    alert("Gagal dekripsi. Periksa kembali input dan key.");
  }
}
