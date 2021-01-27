const checkPhrase = (phraseMade:string[], translationToCheck:string[]) => {
  if (String(phraseMade).toLowerCase() === String(translationToCheck).toLowerCase()) {
    return true;
  }
  return false;
};
export default checkPhrase;
