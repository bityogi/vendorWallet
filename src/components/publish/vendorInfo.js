import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form';

class Publish extends Component{

  onPress() {
    const value = this.refs.vendorInfoForm.getValue();
    if (value) {
      console.log('vendor information: ', value);
    }
  }

  render() {

    const {
      container,
      buttonStyle,
      buttonTextStyle
    } = styles;

    const defaultValues = {
      name: 'Name'
    };

    return (
      <View style={container}>
        <GiftedForm
          formName='vendorInfoForm'
          defaults={defaultValues}
          validators={{
            vendorName : {
              title: 'Vendor Name',
              validate:[{
                validator: 'isLength',
                arguments: [1, 35],
                message: '{TITLE} must be between {ARGS[0]} AND {ARGS[1]} characters'
              }]
            },
            address1: {
              title: 'Street Address',
              validate: [{
                validator: 'isLength',
                arguments: [1, 100],
                message: '{TITLE} must be between {ARGS[0]} AND {ARGS[1]} characters'
              }]
            },
            city: {
              title: 'City',
              validate: [{
                validator: 'isLength',
                arguments: [1, 30],
                message: '{TITLE} must be between {ARGS[0]} AND {ARGS[1]} characters'
              }]
            },
            state: {
              title: 'State',
              validate: [{
                validator: 'isLength',
                arguments: [2, 2],
                message: '{TITLE} must be {ARGS[0]} characters'
              }]
            },
            zip: {
              title: 'Zip',
              validate: [{
                validator: 'isLength',
                arguments: [5, 5],
                message: '{TITLE} must be {ARGS[0]} characters'
              }]
            }
          }}
        >
        <GiftedForm.SeparatorWidget />
        <GiftedForm.TextInputWidget
          name='vendorName'
          title='Name'
          placeholder='Name'
          clearButtonMode='while-editing'
        />
        <GiftedForm.SeparatorWidget />
        <GiftedForm.TextInputWidget
          name='address1'
          title='Address'
          placeholder='Street Address'
          clearButtonMode='while-editing'
        />
        <GiftedForm.TextInputWidget
          name='city'
          title='City'
          placeholder='City'
          clearButtonMode='while-editing'
        />

        <GiftedForm.ModalWidget
          title='State'
          displayValue='state'
          scrollEnabled={false}
        >
          <GiftedForm.SelectWidget name='state' title='State' multiple={false}>
            <GiftedForm.OptionWidget title='California' value='CA' />
            <GiftedForm.OptionWidget title='Texas' value='TX' />
            <GiftedForm.OptionWidget title='North Carolina' value='NC' />
          </GiftedForm.SelectWidget>

        </GiftedForm.ModalWidget>

        <GiftedForm.TextInputWidget
          name='zip'
          title='Zip'
          placeholder='Zip'
          clearButtonMode='while-editing'
        />

        <GiftedForm.SubmitWidget
          title='Sign up'
          widgetStyles={{
            submitButton: {
              backgroundColor: '#48BBEC',
            }
          }}
          onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
            if (isValid === true) {
              console.log('valid form submitted');
            }
          }}
        />

      </GiftedForm>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonStyle: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonTextStyle: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
});


export default Publish;
