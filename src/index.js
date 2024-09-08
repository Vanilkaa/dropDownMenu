import '../node_modules/modern-normalize/modern-normalize.css';
import './style.css';
import createDropDownMenu from './createDropDownMenu';

const dropDownMenuBtn = document.querySelector('.dropDownMenuBtn');
const dropDownMenuContent = document.querySelector('.dropDownMenuContent');

createDropDownMenu(dropDownMenuBtn, dropDownMenuContent);
