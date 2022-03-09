import { UserCard } from 'react-ui-cards';

const BookCard = ({ title, author, price, image }) => <UserCard
    float
    // href='https://github.com/nukeop'
    header={image}
    avatar={image}
    name={title}
    positionName={author}
    stats={[
               {
            name: 'цена',
            value:price
        }
    ]}
/>


export default BookCard