import Layout from "../../components/Layout";
import PageHeaderImage from "../../components/page-header-image/PageHeaderImage";
import PageHeader from "../../components/page-header/PageHeader";
import ServiceCards from "../../components/service-cards/ServiceCards";

import GuesthouseDescription from "../../static/data/guesthouse/guesthouse";
import GeneralDescription from "../../static/data/index-page/guesthouseHeader";
import { withTranslation } from "../../i18n";

const GuestHouseServicesPage = ({ t }) => (
  <Layout
    title={t(GeneralDescription.metaTitle)}
    description={t(GeneralDescription.metaDescription)}
  >
    <PageHeaderImage
      imgsrc="/static/guesthouse/skats-uz-viesu-maju.jpg"
      alt={t(GeneralDescription.alt)}
    />
    <PageHeader
      title={t(GeneralDescription.title)}
      description={t(GeneralDescription.description)}
    />
    <ServiceCards serviceCards={GuesthouseDescription} prefix={`viesu-maja`} />
  </Layout>
);

GuestHouseServicesPage.getInitialProps = async () => ({
  namespacesRequired: ["guesthouse_header"]
});

export default withTranslation("guesthouse_header")(GuestHouseServicesPage);
