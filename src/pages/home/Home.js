import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import React from 'react';
import Navbar from '../../components/navbar/Navbar';
const {width, height} = Dimensions.get('window');
const Home = () => {
  return (
    <>
      <View>
        <Navbar titleName={'Homepage'} />
      </View>

      <View>
        <View>
          <Text style={styles.mainText}>Tasks</Text>
        </View>
        <View>
          <TextInput style={styles.seachbar} placeholder="Search" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 25,
    position: 'absolute',
    top: height * 0.02,
    left: width * 0.05,
    color: '#333333',
  },
  seachbar: {
    position: 'absolute',
    top: height * 0.09,
    left: width * 0.05,
    width: width * 0.9,
    height: height * 0.09,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
    paddingVertical: 5,
    fontSize: 16,
    letterSpacing: 0.8,
    elevation: 1.4,
  },
});
export default Home;
