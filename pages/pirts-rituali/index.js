import Layout from "../../components/Layout";
import PageHeaderImage from "../../components/page-header-image/PageHeaderImage";
import PageHeader from "../../components/page-header/PageHeader";
import ServiceCards from "../../components/service-cards/ServiceCards";

import SaunaRitualsDescription from "../../static/data/sauna-rituals/saunaRituals";
import SaunaRitualsHeaderText from "../../static/data/index-page/saunaRitualsHeader";
import { withTranslation } from "../../i18n";

const SaunaRitualsPage = ({ t }) => {
  return (
    <Layout
      title={t(SaunaRitualsHeaderText.metaTitle)}
      description={t(SaunaRitualsHeaderText.metaDescription)}
    >
      <PageHeaderImage
        imgsrc="/static/sauna-rituals/pirts-rituali-kopa.jpg?webp?lqip"
        alt={t(SaunaRitualsHeaderText.alt)}
      />
      <PageHeader
        title={t(SaunaRitualsHeaderText.title)}
        description={t(SaunaRitualsHeaderText.description)}
      />
      <ServiceCards
        serviceCards={SaunaRitualsDescription}
        prefix={`pirts-rituali`}
      />
    </Layout>
  );
};

SaunaRitualsPage.getInitialProps = async () => ({
  namespacesRequired: ["sauna_rituals_header"]
});

export default withTranslation("sauna_rituals_header")(SaunaRitualsPage);
