import React from 'react';
import styled from 'styled-components';
import { StatusBar, SafeAreaView, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SearchBarView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchBarView>
        <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />
      </SearchBarView>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
