import RitualHighLightCard from '../highlight-card/RitualHighLightCard';
import HighlightCardItems from './style';

export default({highlights}) => (
   <HighlightCardItems>
    {highlights.map(highlight => (
        <RitualHighLightCard key={highlight.label} {...highlight}/>
    ))}
   </HighlightCardItems> 
)