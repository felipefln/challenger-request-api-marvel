import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import Character from '../../components/Character';
import Details from '../../components/Details';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import {
  Container,
  NavButton,
  NavButtonText,
  SectionRow,
  SectionTitle,
  Header,
  Logo,
} from './styles';

interface ParamsData {
  limit: number;
  offset: number;
  name?: string;
}

interface CharacterData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Search: React.FC = () => {
  const [character, setCharacter] = useState<CharacterData>();
  const [characteres, setCharacters] = useState<CharacterData[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [modalDetails, setModalDetails] = useState(false);

  const navigation = useNavigation();

  const loadCharacters = async (reset = false) => {
    if (loading) return;

    setLoading(true);

    const nextPage = reset ? 1 : page + 1;

    const params: ParamsData = {
      limit: 20,
      offset: (nextPage - 1) * 20,
    };

    if (search) {
      params.name = search;
    }

    const response = await api.get('characters', { params });

    setPage(nextPage);
    setCharacters(
      reset
        ? response.data.data.results
        : [...characteres, ...response.data.data.results],
    );
    setLoading(false);
  };

  useEffect(() => {
    loadCharacters(true);
    StatusBar.setHidden(false);
  }, []);

  function onEndReached() {
    if (loading || characteres.length < 20) return;
    loadCharacters();
  }

  const handleShowDetails = useCallback((item) => {
    setCharacter(item);
    setModalDetails(true);
  }, []);

  const closeModalDetails = useCallback(() => {
    setModalDetails(false);
  }, []);

  const handleNavigate = useCallback(() => {
    navigation.navigate('Favorites');
  }, [navigation]);

  return (
    <>
      <Container>
        <Header>
          <Logo
            source={require('../../assets/logo.png')}
            resizeMode="contain"
          />
        </Header>
        <Input
          icon="search1"
          placeholder="Nome do personagem"
          placeholderTextColor="#666"
          keyboardType="web-search"
          onChangeText={(text) => setSearch(text)}
          onSubmitEditing={() => loadCharacters(true)}
        />
        <SectionRow>
          <SectionTitle>Personagens Marvel</SectionTitle>
          <NavButton onPress={handleNavigate}>
            <NavButtonText>Exibir favoritos</NavButtonText>
          </NavButton>
        </SectionRow>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={characteres}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Character item={item} onPress={() => handleShowDetails(item)} />
          )}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
        />
        <Details
          visible={modalDetails}
          item={character}
          closeModal={closeModalDetails}
        />
      </Container>
      {loading && <Loading />}
    </>
  );
};

export default Search;
