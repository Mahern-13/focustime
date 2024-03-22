import React, { useState } from 'react';
import { StyleSheet, Text, Vibration, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { Timing } from './Timing';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

export const Timer = ({ clearSubject, focusSubject, onTimerEnd }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(25);

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

   const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };


  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          minutes={minutes}
          onEnd={onEnd}
          onProgress={setProgress}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          color={colors.progressBar}
          progress={progress}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton onPress={() => setIsStarted(true)} title="start" />
        ) : (
          <RoundedButton onPress={() => setIsStarted(false)} title="pause" />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton onPress={clearSubject} size={50} title="-" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',

    paddingTop: spacing.xxl,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
