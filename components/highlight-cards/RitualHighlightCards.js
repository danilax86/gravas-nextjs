import RitualHighlightCard from "../highlight-card/RitualHighlightCard";
import HighlightCardItems from "./style";

export default ({ highlights }) => (
  <HighlightCardItems>
    {highlights.map(highlight => (
      <RitualHighlightCard key={highlight.label} {...highlight} />
    ))}
  </HighlightCardItems>
);
