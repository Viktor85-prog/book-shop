import { UserCard } from 'react-ui-cards';
import './bookCard.css'

const BookCard = ({ title, author, price, image, author_photo }) => (
    <UserCard
        float
        // href='https://github.com/nukeop'
        header={image}
        avatar={author_photo}
        name={title}
        positionName={author}
        stats={[
            {
                name: 'цена',
                value: price
            }
        ]}
        className='flexItem'
    />)


export default BookCard