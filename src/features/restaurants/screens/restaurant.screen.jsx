import React from 'react';
import styled from 'styled-components';
import { StatusBar, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SearchBarView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const CardView = styled.View`
  padding: ${(props) => props.theme.space[3]};
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
