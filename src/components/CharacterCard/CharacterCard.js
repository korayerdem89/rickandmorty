import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from "./CharacterCard.style";
import { Entypo } from '@expo/vector-icons';
import COLORS from "../../assets/colors";
//   const filteredResults = results.filter((link) =>
//   link.episode.includes(`https://rickandmortyapi.com/api/episode/${id}`)
// );
const CharacterCard = ({ item, value }) => {
  const id = value;
  if (item.episode.includes(`https://rickandmortyapi.com/api/episode/${id}`)) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <View style={styles.location}>
        <Entypo name="location-pin" size={15} color={COLORS.primary}/>
        <Text style={styles.locationName}>{item.location.name}</Text>    
          </View>      
       
      </View>
    </TouchableWithoutFeedback>
  );
  } else { return null}
};

export default CharacterCard;
