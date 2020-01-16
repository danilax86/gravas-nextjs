import { useState } from "react";
import { withTranslation } from "../../../i18n";
import styled from "@emotion/styled";

import { Tile as TileContainer, Title } from "./style";
import Step from "../step";

import DESIGNS from "../../../constants/designs";

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 14rem 14rem;
  grid-auto-rows: 14rem;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const DesignStep = ({ t, handleThemeSelect }) => {
  const [selectedDesign, setSelectedDesign] = useState(null);

  return (
    <Step title={t("design_title")}>
      <Grid>
        {DESIGNS.map(({ title }) => (
          <Tile
            key={title}
            selected={title === selectedDesign}
            title={t(title)}
            value={title}
            imagePath={`/static/gift-card/designs/${title}.jpg`}
            handleSelect={title => {
              handleThemeSelect(title);
              setSelectedDesign(title);
            }}
          />
        ))}
      </Grid>
    </Step>
  );
};

export const Tile = ({ handleSelect, title, imagePath, selected, value }) => {
  return (
    <TileContainer
      selected={selected}
      onClick={() => handleSelect(value)}
      key={title}
    >
      <img src={imagePath} />
      <div>{title}</div>
    </TileContainer>
  );
};

export default withTranslation("gift_cards")(DesignStep);
