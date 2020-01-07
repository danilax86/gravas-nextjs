import Layout from "../../components/Layout";
import PageHeader from "../../components/page-header/PageHeader";
import ContactsText from "../../static/data/contacts/contacts";
import Contacts from "../../components/contacts/contacts";
import FAQ from "../../components/frequent-questions";
import contactHeader from "../../static/data/contacts/contactHeaders";
import { withTranslation } from "../../i18n";
import FaqHeader from "./style";

const ContactsPage = ({ t }) => {
  return (
    <Layout
      title={t(contactHeader.metatTitle)}
      description={t(contactHeader.metaDescription)}
    >
      <PageHeader
        title={t(contactHeader.headerTitle)}
        description={t(contactHeader.headerDescription)}
      />
      <Contacts contacts={ContactsText} />
      <FaqHeader>{t(contactHeader.frequentQuestionsTitle)}</FaqHeader>
      <FAQ />
    </Layout>
  );
};

export default withTranslation("contactHeaders")(ContactsPage);
