import React from 'react';

import '../menu/menu.css'


const Filter = ({ setFilter, filterBy }) => {

    const handleItemClick = (name) => {
        setFilter(name)
    }
    return (
        <li><a className='dropdown-arrow' href='#'>Сортировка</a>
            <ul className='sub-menus'>
                <li onClick={() => handleItemClick('all')}> <a href="#">Все</a></li>
                <li onClick={() => handleItemClick('popular')}><a href='#'> Популярные</a></li>
                <li onClick={() => handleItemClick('price_high')}><a href='#'>Сначала дорогие</a></li>
                <li onClick={() => handleItemClick('price_low')}><a href='#'> Сначала дешевые</a></li>
                <li onClick={() => handleItemClick('author')}><a href='#' > Автор</a></li>
            </ul>
        </li>
    )
}



// class Filter extends Component {
//     state = { activeItem: 'all' }


//     render() {
//         const { activeItem } = this.state


//         return (

//         )
//     }
// }

export default Filter
