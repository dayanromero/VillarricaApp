import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {theme} from '../core/theme';

const Botton = ({...props}) => {
  const {title, style, onPress} = props;
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default Botton;
