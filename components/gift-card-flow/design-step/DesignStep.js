import { Component } from "react";
import { withTranslation } from "../../../i18n";

import { Grid, Tile } from "./style";
import Step from "../step";

import DESIGNS from "../../../constants/designs";

class DesignStep extends Component {
  render() {
    const { t, title, handleThemeSelect } = this.props;

    return (
      <Step title={title}>
        <Grid>
          {DESIGNS.map(({ title }) => (
            <Tile
              onClick={e => handleThemeSelect(e.target.textContent)}
              key={title}
            >
              {t(title)}
            </Tile>
          ))}
        </Grid>
      </Step>
    );
  }
}

export default withTranslation("gift_cards")(DesignStep);
