const checkIfButtonsEnabled = (buttonsContainer:any):boolean => {
  const isEnabled:boolean = Array.from(buttonsContainer.current.children).every(
    (child:any) => child.getAttribute('disabled') === null,
  );
  return isEnabled;
};
export default checkIfButtonsEnabled;
