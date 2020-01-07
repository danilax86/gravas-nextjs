import Item from './style'

const Review = ({reviews}) => {
    return (
        <div>
            {reviews.map(review => (
                <Item>
                    <div className="line"></div>
                    <h4>{review.name}</h4>
                    <p>{review.date}</p>
                    <p>{review.description}</p>
                </Item>
            ))}
        </div>
    )
}

export default Review;

