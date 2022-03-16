import { UserCard } from 'react-ui-cards';
import './bookCard.css'

const changeLength = (title) => {
    let newTitle = (title.length < 20) ? title.slice(0, 20) : (title.slice(0, 18) + '...')
    return newTitle
}

const BookCard = ({ title, author, price, image, author_photo, rating }) => (
    // image.slice(0, 4)
    < UserCard
        float
        // href='https://github.com/nukeop'
        header={image}
        avatar={author_photo}
        name={changeLength(title)}
        positionName={author}
        stats={
            [{
                name: 'рейтинг',
                value: rating
            },
            {
                name: 'цена',
                value: price
            }
            ]}
        className='flexItem'
    />)


export default BookCard