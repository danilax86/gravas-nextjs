import Layout from "../../components/Layout";
import PageHeaderImage from "../../components/page-header-image/PageHeaderImage";
import PageHeader from "../../components/page-header/PageHeader";
import ReviewDescriptions from "../../static/data/reviews/reviews";
import Review from "../../components/review/Review";

const ReviewsPage = () => {
  return (
    <Layout
      title="Atsauksmes | Gravas"
      description="Gravas pirts rituāla atsauksmes no klientiem."
    >
      <PageHeaderImage
        imgsrc="/static/guesthouse/viesu-majas-atsauksmes.jpg"
        alt="Gravas pļavā pie rata. Kāzu fotostūra idejas"
      />
      <PageHeader
        title="Viesu atsauksmes"
        description="Kopš 2011. gada esam ieviesuši viesu grāmatu pirts rituāla viesiem. Katra atsauksme mums ļauj apskatīties uz savu ieguldīto darbu no cita skatupunta kā arī iedvesmo attīstīties uz priekšu."
      />
      <Review reviews={ReviewDescriptions} />
    </Layout>
  );
};

ReviewsPage.getInitialProps = async () => ({
  namespacesRequired: ["reviews"]
});

export default ReviewsPage;
