import Layout from '../../components/Layout';
import PageHeaderImage from '../../components/page-header-image/PageHeaderImage';
import { withTranslation, Link } from '../../i18n'

const Index = ({ t }) => (
    <Layout title={t('page_title')} description={t('seo_description')}>
        <PageHeaderImage 
            imgsrc="/static/home/gravas-atputa-bauska.jpg" 
            alt="Atputa pie dabas Bauska"
            title={t('header_title')}
            caption={t('header_caption')}/>

            <div>
                <span>{t('landing_description')}</span>
                <Link href="/davanu-karte/iegadaties">
                    <a>{t('buy')}</a>
                </Link>
            </div>
            

            
    </Layout>
)

Index.getInitialProps = ( async () => ({
    namespacesRequired: 
        [
            'gift_cards',
        ]
}))

export default withTranslation('gift_cards')(Index)



