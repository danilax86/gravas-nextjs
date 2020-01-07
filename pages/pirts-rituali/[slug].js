import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PageHeaderImage from "../../components/page-header-image/PageHeaderImage";
import ServiceHeader from "../../components/service-header/ServiceHeader";
import RitualHighlightCards from "../../components/highlight-cards/RitualHighlightCards";
import { RitualDescriptions } from "../../components/page-descriptions/PageDescriptions";
import RitualAmenities from "../../components/amenities/RitualAmenities";
import Employee from "../../components/employee/Employee";
import RitualExtraDetails from "../../components/extra-details/RitualExtraDetails";
import RitualPriceTags from "../../components/pricesTags/RitualPriceTags";
import Footer from "../../components/footer/footer";

import EmployeeDetails from "../../static/data/employees/employees";
import saunaRituals from "../../static/data/sauna-rituals/saunaRituals";

import { withTranslation } from "../../i18n";

const SaunaRitualPage = ({ t }) => {
  const router = useRouter();
  const { slug } = router.query;
  const title = slug.replace(/\-/g, "_");
  const saunaRitual = saunaRituals.find(ritual => ritual.title === title);

  return (
    <Layout
      title={t(saunaRitual.metaTitle)}
      description={t(saunaRitual.metaDescription)}
    >
      <PageHeaderImage imgsrc={saunaRitual.img} alt={t(saunaRitual.alt)} />
      <ServiceHeader title={t(saunaRitual.title)} />
      <RitualHighlightCards highlights={saunaRitual.highlights} />
      <RitualDescriptions descriptions={saunaRitual.descriptions} />
      <RitualAmenities
        amenities={saunaRitual.amenities}
        title={saunaRitual.whatIsIncludedTitle}
      />
      <Employee employee={EmployeeDetails} />
      <RitualExtraDetails
        details={saunaRitual.extraDetails}
        title={saunaRitual.considerTitle}
      />
      <RitualPriceTags
        prices={saunaRitual.allPrices}
        title={saunaRitual.allPriceTitle}
      />
      <Footer />
    </Layout>
  );
};
SaunaRitualPage.getInitialProps = async () => ({
  namespacesRequired: ["sauna_rituals"]
});

export default withTranslation("sauna_rituals")(SaunaRitualPage);
