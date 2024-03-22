import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton onPress={() => onChangeTime(5)} size={75} title="5" />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton onPress={() => onChangeTime(10)} size={75} title="10" />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton onPress={() => onChangeTime(25)} size={75} title="25" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
