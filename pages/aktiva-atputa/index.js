import Layout from "../../components/Layout";
import PageHeaderImage from "../../components/page-header-image/PageHeaderImage";
import PageHeader from "../../components/page-header/PageHeader";
import ServiceCards from "../../components/service-cards/ServiceCards";

import SportActivitiesHeaderText from "../../static/data/index-page/sportActivitiesHeader";
import SportsActivitiesDescription from "../../static/data/sport-activities/sportActivities";
import { withTranslation } from "../../i18n";

const SportActivitiesPage = ({ t }) => {
  return (
    <Layout
      title={t(SportActivitiesHeaderText.metaTitle)}
      description={t(SportActivitiesHeaderText.metaDescription)}
    >
      <PageHeaderImage
        imgsrc="/static/sport-activities/laukums.jpg"
        alt={t(SportActivitiesHeaderText.alt)}
      />
      <PageHeader
        title={t(SportActivitiesHeaderText.title)}
        description={t(SportActivitiesHeaderText.description)}
      />
      <ServiceCards
        serviceCards={SportsActivitiesDescription}
        prefix={`aktiva-atputa`}
      />
    </Layout>
  );
};

SportActivitiesPage.getInitialProps = async () => ({
  namespacesRequired: ["sport_activities_header"]
});

export default withTranslation("sport_activities_header")(SportActivitiesPage);
