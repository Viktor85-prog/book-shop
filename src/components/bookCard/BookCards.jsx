import React from 'react';
import './bookCard.css'

const BookCard = ({title,author,price,image}) => (
    <div>
        <div class="content container">
            <div class="page-header">
                <div id="app"></div>
            </div>
            <div id="card"></div>
        </div>
    </div>
)

export default BookCard