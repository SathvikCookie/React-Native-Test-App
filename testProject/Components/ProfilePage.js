import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProfilePage = ({route, navigation}) => {
  const {name, title, description, image} = route.params;

  return (
    <View style={styles.Container}>
      <Image source={image} style={styles.ProfileImage} />
      <Text style={styles.Name}>{name}</Text>
      <Text style={styles.Title}>{title}</Text>
      <Text style={styles.Description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  ProfileImage: {
    height: 300,
    width: 300,
    borderRadius: 500,
  },
  Name: {
    fontSize: 25,
    color: '#000',
    margin: 5,
    marginTop: 10,
    textAlign: 'center',
  },
  Title: {
    fontSize: 20,
    color: '#888',
    margin: 5,
    textAlign: 'center',
  },
  Description: {
    fontSize: 15,
    color: '#888',
    margin: 5,
    textAlign: 'center',
  },
});

export default ProfilePage;
