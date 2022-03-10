import React from 'react';
import './menu.css'


// function updatemenu() {
//     if (document.getElementById('responsive-menu').checked == true) {
//         document.getElementById('menu').style.borderBottomRightRadius = '0';
//         document.getElementById('menu').style.borderBottomLeftRadius = '0';
//     } else {
//         document.getElementById('menu').style.borderRadius = '0px';
//     }
// }

const HeadMenu = () => (
    <nav id='menu'>
        <input type='checkbox' id='responsive-menu' onclick='updatemenu()' /><label></label>
        <ul>
            <li><a href='http://'>Магазин</a></li>
            <li><a class='dropdown-arrow' href='http://'>Категории</a>
                <ul class='sub-menus'>
                    <li><a href='http://'> Sub Menu 1</a></li>
                    <li><a href='http://'> Sub Menu 2</a></li>
                    <li><a href='http://'> Sub Menu 3</a></li>
                    <li><a href='http://'> Sub Menu 4</a></li>
                </ul>
            </li>
            <li><a href='http://'>Итого: &nbsp;<b>0</b> руб.</a></li>
            <li><a href='http://'>Корзина <b>0</b></a></li>
        </ul>
    </nav>
)

export default HeadMenu