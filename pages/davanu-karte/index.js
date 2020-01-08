import Layout from "../../components/Layout";
import PageHeaderImage from "../../components/page-header-image/PageHeaderImage";
import PageHeader from "../../components/page-header/PageHeader";
import { withTranslation, Link } from "../../i18n";
import giftCardHeader from "../../static/data/index-page/giftCardHeader";
import Button from "../../components/button/button";
import Router from "next/router";

const Index = ({ t }) => (
  <Layout
    title={t(giftCardHeader.metaTitle)}
    description={t(giftCardHeader.metaDescription)}
  >
    <PageHeaderImage
      imgsrc="/static/home/gravas-atputa-bauska.jpg"
      alt={t(giftCardHeader.alt)}
    />
    <div>
      <PageHeader
        title={t(giftCardHeader.title)}
        description={t(giftCardHeader.description)}
      />
      <Button
        onClick={() => Router.push("/davanu-karte/iegadaties")}
        type="button"
        buttonStyle="btn--primary--solid"
        children={t(giftCardHeader.buyGiftCard)}
      />
    </div>
  </Layout>
);

Index.getInitialProps = async () => ({
  namespacesRequired: ["gift_cards"]
});

export default withTranslation("gift_cards")(Index);
