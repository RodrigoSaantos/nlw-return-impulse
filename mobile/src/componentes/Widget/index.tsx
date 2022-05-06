import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function Widget() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff'}}>Hello world</Text>
    </View>
  );
}