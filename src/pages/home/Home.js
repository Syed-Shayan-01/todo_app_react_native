import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Font5 from 'react-native-vector-icons/FontAwesome5';
const {width, height} = Dimensions.get('window');
const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LinearGradient
        colors={['#22bdf8', '#2570fa']}
        style={style.linearGradient}>
        <View>
          <Text style={style.location}>
            <Font5 name="map-marked-alt" />
          </Text>
          <Text style={style.location}>London</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: width,
    height: height,
  },
  location: {
    marginHorizontal: 'auto',
    marginTop: height * 0.02,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
    shadowColor: '#000',
  },
});
export default Home;
