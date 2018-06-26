import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import Colors from '../constants/Colors';

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Contacts',
    icon: 'contacts'
  },
  {
    title: 'Books',
    icon: 'book'
  },
  {
    title: 'Adjust',
    icon: 'adjust'
  },{
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Contacts',
    icon: 'contacts'
  },
  {
    title: 'Books',
    icon: 'book'
  },
  {
    title: 'Adjust',
    icon: 'adjust'
  },
  {
    title: 'Contacts',
    icon: 'contacts'
  },
  {
    title: 'Books',
    icon: 'book'
  },
  {
    title: 'Adjust',
    icon: 'adjust'
  },{
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Contacts',
    icon: 'contacts'
  },
  {
    title: 'Books',
    icon: 'book'
  },
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: Colors.primary.dark,
    },
    headerTintColor: Colors.fade,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <List style={styles.list}>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                onPress={() => navigate('Detail', { title: item.title })}
                chevronColor={Colors.primary.light}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.fade,
   
  },
  list: {
    marginBottom: 40
  }
});