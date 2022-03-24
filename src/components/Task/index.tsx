import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type TaskProps = {
  title: string;
}

export default function Task({ title }: TaskProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    boxShadow: '1px 1px 5px rgb(0 0 0 / 6%)',
    flexWrap: 'wrap',
  },
  itemText: {
    width: '80%',
    maxWidth: '80%',
    fontFamily: 'Montserrat'
  },
});
