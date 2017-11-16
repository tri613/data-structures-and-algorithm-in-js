function harmlessRansomNote(noteText, magazinText) {
  let noteWords = noteText.trim().split(" ");
  let magazinWords = magazinText.trim().split(" ");
  let magazinObj = {};

  magazinWords.forEach(word => magazinObj[word] = magazinObj[word] + 1 || 1);

  let ok = true;
  noteWords.forEach(note => {
    if (magazinObj[note] && magazinObj[note] >= 1) {
      magazinObj[note]--;
    } else {
      ok = false;
    }
  });

  return ok;
}

// O(n+m)