import ActivityHighlightCard from "../highlight-card/ActivityHighlightCard";
import HighlightCardItems from "./style";

const ActivityHighlightCards = ({ highlights }) => (
  <HighlightCardItems>
    {highlights.map(highlight => (
      <ActivityHighlightCard key={highlight.label} {...highlight} />
    ))}
  </HighlightCardItems>
);

export default ActivityHighlightCards;
