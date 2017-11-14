function harmlessRansomNote(noteText, magazinText) {
  let noteWords = noteText.trim().split(" ");
  let magazinWords = magazinText.trim().split(" ");
  
  return noteWords.every(note => {
    let index = magazinWords.indexOf(note); 
    if (index > -1) {
      magazinWords.splice(index, 1);
      return true;
    }
    return false;
  });
}