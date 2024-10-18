import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Or whichever icon library you're using

const {width, height} = Dimensions.get('window');

const Navbar = ({LinkText, titleName, IconRight}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.iconContainer}>
        <Icon name="angle-left" size={24} style={styles.icon} />
      </Text>
      <Text style={styles.title}>{titleName}</Text>
      {IconRight && (
        <TouchableOpacity
          onPress={() => alert('Trash Icon Pressed')}
          style={styles.iconContainer}>
          <Icon name={IconRight} size={22} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.1,
    backgroundColor: '#1687de', // You can set your background color here
    paddingHorizontal: width * 0.04,
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    color: '#333333',
    fontWeight: 'bold',
  },
  title: {
    margin: 'auto',
    fontSize: 18.5,
    fontWeight: 'semibold',
    color: 'white',
  },
});

export default Navbar;
