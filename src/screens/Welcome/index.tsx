/* eslint-disable global-require */
import React from 'react';
// import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Background,
  Button,
  ButtonText,
  Content,
  Label,
  Title,
} from './styles';

// const navigation = useNavigation();

// handle Search
// const handleNavigation = useCallback(() => {
//   navigation.navigate('Search');
// }, [navigation]);

const Welcome: React.FC = () => (
  <Container>
    <Background source={require('../../assets/background.jpg')}>
      <Content>
        <Title>Você é um fã de MARVEL?</Title>
        <Label>
          Que tal ter todos os personagens na palma da sua mão
        </Label>
        <Button onPress={() => console.log('boaaa')}>
          <ButtonText>Procurar Heroes</ButtonText>
        </Button>
      </Content>
    </Background>
  </Container>
);

// (
//   <Container>
//     <Background source={require('../../assets/background.jpg')}>
//       <Content>
//         <Title>Você é um fã de MARVEL?</Title>
//         <Label>
//           Que tal ter todos os personagens na palma da sua mão
//         </Label>
//         <Button onPress={() => console.log('boaaa')}>
//           <ButtonText>Procurar Heroes</ButtonText>
//         </Button>
//       </Content>
//     </Background>
//   </Container>
// );
export default Welcome;
