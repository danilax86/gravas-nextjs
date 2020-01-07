import { RitualServiceCard, GuestHouseServiceCard, SportActivitiesCard } from '../service-card/ServiceCard'
import Cards from './style'


export default ({serviceCards, prefix}) => (
    <Cards>
        {/** Pirts rituali */}
        {prefix === 'pirts-rituali' && 
        serviceCards.map(serviceCard => (
            <RitualServiceCard 
                key={serviceCard.id} 
                {...serviceCard}
                prefix={prefix} />
        ))}

        {/** Viesu maja */}
        {prefix === 'viesu-maja' && 
        serviceCards.map(serviceCard => (
            <GuestHouseServiceCard 
                key={serviceCard.id} 
                {...serviceCard}
                prefix={prefix} />
        ))}

        {/** Aktiva atputa */}
        {prefix === 'aktiva-atputa' && 
        serviceCards.map(serviceCard => (
            <SportActivitiesCard 
                key={serviceCard.id} 
                {...serviceCard}
                prefix={prefix} />
        ))}
    </Cards>
)

