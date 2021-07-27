/* eslint-disable global-require */
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Background,
  Button,
  ButtonText,
  Content,
  Label,
  Title,
} from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigation = useCallback(() => {
    navigation.navigate('Search');
  }, [navigation]);

  return (
    <Container>
      <Background source={require('../../assets/background.jpg')}>
        <Content>
          <Title>Você é um fã de MARVEL?</Title>
          <Label>
            Que tal ter todos os personagens na palma da sua mão
          </Label>
          <Button onPress={handleNavigation}>
            <ButtonText>Procurar Heroes</ButtonText>
          </Button>
        </Content>
      </Background>
    </Container>
  );
};

export default Welcome;
