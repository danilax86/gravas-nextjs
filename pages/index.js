import Layout from "../components/Layout";
import PageHeaderImage from "../components/page-header-image/PageHeaderImage";
import ExploreCards from "../components/explore-cards/ExploreCards";
import { IndexDescriptions } from "../components/page-descriptions/PageDescriptions";

import cards from "../static/data/index-page/exploreCards";
import serviceDescriptions from "../static/data/index-page/serviceDescriptions";

const Index = () => {
  return (
    <Layout
      title="Gravas atpūta | Gravas"
      description="Gravas pirts rituāls ir lauku spa diviem, kopā ar draugiem vai ģimenei. Viesu namā ir naktsmītnes, svinību telpa kooperatīviem pasākumiem, kāzām vai citām svinībām līdz 40 personām. Organizējam skolēnu ekskursijas skolniekiem kā peintbols, loka šaušana. Viesu namā ir iespēja izmantot pludmales volejbola un basketbola sporta laukumus kā arī nojumi svinībām."
    >
      <ExploreCards cards={cards} />
      <PageHeaderImage
        imgsrc="/static/home/gravas-atputa-bauska.jpg?webp?lqip"
        alt="Atpūta laukos pie dabas Bauska"
      />
      <IndexDescriptions descriptions={serviceDescriptions} />
    </Layout>
  );
};

Index.getInitialProps = async () => ({
  namespacesRequired: ["explore_cards", "service_descriptions"]
});

export default Index;
