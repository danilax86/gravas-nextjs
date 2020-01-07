import HeaderText from './style';

export default({title, description}) => (
    <HeaderText>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
    </HeaderText>
    
)