// Header.tsx
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface HeaderProps {
  // Define any props here
}

// Define types for styled components
interface HeaderContainerProps {
  // Define any style-related props here
}

// Styled components with type annotations
const HeaderContainer = styled.View<HeaderContainerProps>`
  background-color: #ffffff;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
`;

const Logo = styled(Image)`
  width: 100px;
  height: 40px;
`;

const MenuButton = styled(TouchableOpacity)`
  padding: 10px;
`;

const MenuIcon = styled(Image)`
  width: 24px;
  height: 24px;
`;

// Functional component with type annotation
const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <HeaderContainer>
      <Logo source={require('./logo.png')} />
      <MenuButton>
        <MenuIcon source={require('./menu.png')} />
      </MenuButton>
    </HeaderContainer>
  );
};

export default Header;
