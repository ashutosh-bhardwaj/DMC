import React from 'react';
import { Text, Alert } from 'react-native'
import { Card, Button, ListItem } from 'react-native-elements'
import Colors from '../constants/Colors';

const users = [
  {
    name: 'john wick',
    icon:  { name: 'person', color: Colors.primary.light },
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'Computer Science',
    icon:  { name: 'book', color: '#d35400'},
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: '4',
    icon:  { name: 'add-circle-outline', color: Colors.primary.light},
  }
];

class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail',
    headerStyle: {
      backgroundColor: Colors.primary.dark,
    },
    headerTintColor: Colors.fade,
  };

  render() {
    const { state: { params: { title } } } = this.props.navigation;
    console.log(title);
    return (
      // implemented with Text and Button as children
      <Card
        title={title}
        image={{ uri: 'https://images.pexels.com/photos/1117267/pexels-photo-1117267.jpeg?auto=compress&cs=tinysrgb&h=350' }}>
        <Text style={{marginBottom: 10, fontSize: 16, fontFamily: 'Roboto' }}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        {
          users.map((u, i) => {
            return (
              <ListItem
                key={i}
                roundAvatar
                title={u.name}
                leftIcon={u.icon}
                hideChevron
              />
            );
          })
        }
        <Button
          icon={{name: 'add-shopping-cart'}}
          backgroundColor={Colors.primary.light}
          buttonStyle={{ marginTop: 10 }}
          title='Buy Now' 
          onPress={() => Alert.alert('Buy!')}
        />
      </Card>
    );
  }
}

export default DetailScreen;