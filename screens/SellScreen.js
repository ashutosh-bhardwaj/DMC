import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Card, FormInput, FormLabel, FormValidationMessage, Button } from 'react-native-elements'
import Colors from '../constants/Colors';

class SellScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: { value: '', error: '' },
      author: { value: '', error: '' }
    }
  }

  static navigationOptions = {
    title: 'Sell',
    headerStyle: {
      backgroundColor: Colors.primary.dark,
    },
    headerTintColor: Colors.fade,
  };

  renderFormField = ({ label, onChangeTextHandler, errorMsg }) => {
    return (
      <View>
        <FormLabel>{label}</FormLabel>
        <FormInput onChangeText={onChangeTextHandler}/>
        <FormValidationMessage>{errorMsg}</FormValidationMessage>
      </View>
    )
  }

  handleTitleChange = value => {
    const { title } = this.state;
    if (value.trim()) {
      this.setState({ title: { ...title, value } });
    } else {
      this.setState({ title: { ...title, value, error: 'Title is Required.' } });
    }
  }

  handleAuthorChange = value => {
    const { author } = this.state;
    if (value.trim()) {
      this.setState({ author: { ...author, value } });
    } else {
      this.setState({ author: { ...author, value, error: 'Title is Required.' } });
    }
  }



  render() {
    const { title, author } = this.state;
    return (
      <Card
        title="Sell"
      >
        {
          this.renderFormField({
            label: 'Title',
            onChangeTextHandler: this.handleTitleChange,
            error: title.error 
          })
        }
        {
          this.renderFormField({
            label: 'Author',
            onChangeTextHandler: this.handleAuthorChange,
            error: author.error 
          })
        }
        <Button
          icon={{name: 'add-shopping-cart'}}
          backgroundColor={Colors.primary.light}
          buttonStyle={{ marginTop: 10 }}
          title='Sell Now' 
          onPress={() => Alert.alert(this.state)}
        />
      </Card>
    );
  }
}

export default SellScreen;