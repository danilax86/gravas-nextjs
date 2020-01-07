import ActiveLink from '../ActiveLink';
import Item from './style';

const NavItem = ({ href, label }) => (
    <ActiveLink href={href} activeClassName="active">
        <Item className="item">{label}
        </Item>    
    </ActiveLink>
)
export default NavItem