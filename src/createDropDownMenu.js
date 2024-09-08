export default function createDropDownMenu(dropDownMenuBtn, dropDownMenuContent) {
  dropDownMenuBtn.addEventListener('click', () => {
    if (dropDownMenuContent.style.visibility === 'visible') {
      dropDownMenuContent.style.visibility = 'hidden';
    } else dropDownMenuContent.style.visibility = 'visible';
  });
}
