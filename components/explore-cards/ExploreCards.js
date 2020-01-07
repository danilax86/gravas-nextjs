import ExploreCard from '../explore-card/ExploreCard'
import CardItems from './style'

export default ({ cards }) => (
    <CardItems>
        {cards.map( card => (
            <ExploreCard key={card.id} {...card}/>
        ))}
    </CardItems>
)
