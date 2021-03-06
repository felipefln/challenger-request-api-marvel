import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';
import colors from '../../styles/Colors';

const Loading: React.FC = () => (
  <Container>
    <ActivityIndicator size="large" color={colors.primary} />
  </Container>
);

export default Loading;
