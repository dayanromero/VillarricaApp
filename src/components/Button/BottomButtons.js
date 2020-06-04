import * as React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Button from './Button';

const BottomButtons = (props) => {
  const {btns} = props;

  return (
    <View style={styles.buttonContainer}>
      {btns.map((btn, i) => (
        <Button
          key={i}
          title={btn.title}
          style={styles.button}
          onPress={btn.action}>
          {btn.title}
        </Button>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: Platform.OS === 'ios' ? 10 : 2,
  },
  button: {
    width: '49%',
    marginVertical: 8,
  },
});

export default BottomButtons;
