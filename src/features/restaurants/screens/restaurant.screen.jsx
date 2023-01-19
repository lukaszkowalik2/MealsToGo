import React from 'react';
import styled from 'styled-components';
import { StatusBar, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SearchBarView = styled.View`
  padding: 16px;
`;
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
const CardView = styled.View`
  padding: 16px;
  flex: 1;
`;
export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchBarView>
        <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
      </SearchBarView>
      <CardView>
        <RestaurantInfoCard />
      </CardView>
    </SafeArea>
  );
};
