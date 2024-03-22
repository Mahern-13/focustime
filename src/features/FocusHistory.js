import React, { useId } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  const uid = useId();

  if (!history || !history.length)
    return <Text style={styles.title}>We haven't focused on anything yet</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item.name}</Text>;

  console.log(history);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => (item.id = uid)}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.md,
  },
  item: {
    color: colors.white,
    fontSizes: fontSizes.md,
    paddingTop: spacing.sm,
    paddingLeft: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: 'bold',
  },
});
