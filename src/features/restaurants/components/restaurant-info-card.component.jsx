import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  font-family: ${(props) => props.theme.fonts.body};
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = ['https://images.aws.nestle.recipes/resized/2020_04_03T13_58_53_image_1500_700.ashx'],
    adress = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
