// import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartDropDown } from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';

import { ReactComponent as Crown } from '../../assets/crown.svg';
// import { signOutUser } from '../../utils/firebase/firebase.utils';
import { signOutStart } from '../../store/user/user.action';
import {
  NavigationStyle,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './navigation.style';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  // const { currentUser } = useContext(UserContext);
  const dispatch = useDispatch();
  const signOuthandler = async () => dispatch(signOutStart());
  return (
    <>
      <NavigationStyle>
        <LogoContainer to='/'>
          <Crown className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink className='nav-link' to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOuthandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/authentication'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        <CartDropDown />
      </NavigationStyle>
      <Outlet />
    </>
  );
};

export default Navigation;
