import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  Image,
  Button,
} from 'react-native';

const DetailsButton = props => {
  return (
    <Pressable
      onPress={() =>
        props.navigator.navigate('ProfilePage', {
          name: props.name,
          title: props.title,
          description: props.description,
          image: props.image,
        })
      }
      style={styles.DescriptionButton}>
      <Text style={{color: '#fff'}}>More Information</Text>
    </Pressable>
  );
};

const Profile = props => {
  const imageSource = props.imageSrc;
  const [expanded, setExpanded] = useState(false);

  return (
    <Pressable
      style={styles.ProfileContainer}
      onPress={() => {
        setExpanded(!expanded);
      }}>
      <Image style={styles.ProfileImage} source={imageSource}></Image>
      <View style={styles.TextContainer}>
        <Text style={styles.NameText}>{props.name}</Text>
        <Text style={styles.DescriptionText}>
          {expanded ? props.description : props.title}
        </Text>
        {expanded ? (
          <DetailsButton
            navigator={props.navigator}
            name={props.name}
            title={props.title}
            description={props.description}
            image={imageSource}
          />
        ) : (
          <View />
        )}
      </View>
    </Pressable>
  );
};

const Homepage = ({navigation}) => {
  return (
    <ScrollView>
      <Profile
        navigator={navigation}
        imageSrc={require('../images/Jake.jpg')}
        name="Jake"
        title="Software Engineer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <Profile
        navigator={navigation}
        imageSrc={require('../images/Olivia.jpg')}
        name="Olivia"
        title="Software Engineer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <Profile
        navigator={navigation}
        imageSrc={require('../images/Ryan.jpg')}
        name="Ryan"
        title="Software Engineer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <Profile
        navigator={navigation}
        imageSrc={require('../images/Jack.jpg')}
        name="Jack"
        title="Software Engineer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <Profile
        navigator={navigation}
        imageSrc={require('../images/Emily.jpg')}
        name="Emily"
        title="Software Engineer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <Profile
        navigator={navigation}
        imageSrc={require('../images/William.jpg')}
        name="William"
        title="Software Engineer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <Profile
        navigator={navigation}
        imageSrc={require('../images/Timothy.jpg')}
        name="Timothy"
        title="Software Engineer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ProfileContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '90%',
    margin: 20,
    elevation: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileImage: {
    height: 100,
    width: 100,
    marginTop: 30,
    borderRadius: 100,
  },
  TextContainer: {
    alignItems: 'center',
  },
  NameText: {
    color: '#000',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    flexWrap: 'wrap',
    fontSize: 20,
    textAlign: 'center',
  },
  DescriptionText: {
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 30,
    marginTop: 10,
    flexWrap: 'wrap',
    color: '#888',
    textAlign: 'center',
  },
  DescriptionButton: {
    backgroundColor: '#8800C7',
    marginBottom: 30,
    padding: 15,
    borderRadius: 30,
  },
});

export default Homepage;
