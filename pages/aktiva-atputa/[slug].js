import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import PageHeaderImage from "../../components/page-header-image/PageHeaderImage";
import ServiceHeader from "../../components/service-header/ServiceHeader";
import ActivityHighlightCards from "../../components/highlight-cards/ActivityHighlightCards";
import { SportActivityDescriptions } from "../../components/page-descriptions/PageDescriptions";
import ActivityAmenities from "../../components/amenities/ActivityAmenities";
import ActivityExtraDetails from "../../components/extra-details/ActivityExtraDetails";
import ActivityPriceTags from "../../components/pricesTags/ActivityPriceTags";
import sportActivities from "../../static/data/sport-activities/sportActivities";
import Footer from "../../components/footer/footer";
import { withTranslation } from "../../i18n";

const SportActivityPage = ({ t }) => {
  const router = useRouter();
  const { slug } = router.query;
  const title = slug.replace(/-/g, "_");
  const activity = sportActivities.find(
    sportActivity => sportActivity.title === title
  );

  return (
    <Layout
      title={t(activity.metaTitle)}
      description={t(activity.metaDescription)}
    >
      <PageHeaderImage imgsrc={activity.img} alt={t(activity.alt)} />
      <ServiceHeader title={t(activity.title)} />
      <ActivityHighlightCards highlights={activity.highlights} />
      <SportActivityDescriptions descriptions={activity.descriptions} />
      <ActivityAmenities
        amenities={activity.amenities}
        title={activity.whatIsIncludedTitle}
      />
      <ActivityExtraDetails
        details={activity.extraDetails}
        title={activity.considerTitle}
      />
      <ActivityPriceTags
        prices={activity.allPrices}
        title={activity.allPriceTitle}
      />
      <Footer />
    </Layout>
  );
};

SportActivityPage.getInitialProps = async () => ({
  namespacesRequired: ["sport_activities"]
});

export default withTranslation("sport_activities")(SportActivityPage);
