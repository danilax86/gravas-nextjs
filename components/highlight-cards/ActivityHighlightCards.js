import ActivityHighLightCard from '../highlight-card/ActivityHighLightCard';
import HighlightCardItems from './style';

export default({highlights}) => (
   <HighlightCardItems>
    {highlights.map(highlight => (
        <ActivityHighLightCard key={highlight.label} {...highlight}/>
    ))}
   </HighlightCardItems> 
)