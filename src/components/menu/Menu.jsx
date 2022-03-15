import React from 'react';
import './menu.css'
import Filter from '../../containers/Filter'



// function updatemenu() {
//     if (document.getElementById('responsive-menu').checked == true) {
//         document.getElementById('menu').style.borderBottomRightRadius = '0';
//         document.getElementById('menu').style.borderBottomLeftRadius = '0';
//     } else {
//         document.getElementById('menu').style.borderRadius = '0px';
//     }
// }

const HeadMenu = (props) => (
    <nav id='menu'>
        <ul>
            <li><a href='#'>Магазин</a></li>
            <Filter />
            <li><a href='#'>Итого: &nbsp;<b>0</b> руб.</a></li>
            <li><a href='#'>Корзина <b>0</b></a></li>
        </ul>
    </nav>
)

export default HeadMenu