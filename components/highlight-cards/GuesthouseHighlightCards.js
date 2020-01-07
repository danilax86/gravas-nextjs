import GuesthouseHighlightCard from '../highlight-card/GuesthouseHighlightCard';
import HighlightCardItems from './style';

export default({highlights}) => (
   <HighlightCardItems>
    {highlights.map(highlight => (
        <GuesthouseHighlightCard key={highlight.label} {...highlight}/>
    ))}
   </HighlightCardItems> 
)