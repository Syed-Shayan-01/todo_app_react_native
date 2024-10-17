// import React from 'react';
// import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
// import Svg, { Path } from 'react-native-svg';

// const { width } = Dimensions.get('window');

// const WeatherApp = () => {
//   const forecasts = [
//     { temp: '15°', time: '9:00', icon: 'https://example.com/cloud-icon.png' },
//     { temp: '16°', time: '12:00', icon: 'https://example.com/sun-icon.png' },
//     { temp: '17°', time: '15:00', icon: 'https://example.com/thunder-icon.png' },
//     { temp: '14°', time: '18:00', icon: 'https://example.com/rain-icon.png' },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Header with Location */}
//       <View style={styles.header}>
//         <Text style={styles.locationText}>NY</Text>
//       </View>

//       {/* Weather Icon and Temperature */}
//       <View style={styles.weatherContainer}>
//         {/* Custom SVG or image for the weather icon */}
//         <Svg height="100" width="100" viewBox="0 0 24 24">
//           <Path fill="#FFF" d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z" />
//         </Svg>
//         <Image
//           source={{ uri: 'https://example.com/cat-icon.png' }}
//           style={styles.catIcon}
//         />
//         <Text style={styles.temperature}>15°</Text>
//         <Text style={styles.weatherDescription}>Thunderpurrs</Text>
//       </View>

//       {/* Weather Stats */}
//       <View style={styles.statsContainer}>
//         <View style={styles.statsItem}>
//           <Text style={styles.statsLabel}>26 km/h</Text>
//           <Text style={styles.statsValue}>Windy Paws</Text>
//         </View>
//         <View style={styles.statsItem}>
//           <Text style={styles.statsLabel}>32%</Text>
//           <Text style={styles.statsValue}>Wet Paws</Text>
//         </View>
//         <View style={styles.statsItem}>
//           <Text style={styles.statsLabel}>90%</Text>
//           <Text style={styles.statsValue}>Wet Paws</Text>
//         </View>
//       </View>

//       {/* Bottom: Forecast for the day */}
//       <View style={styles.forecastContainer}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {forecasts.map((forecast, index) => (
//             <View key={index} style={styles.forecastItem}>
//               <Text style={styles.forecastTemp}>{forecast.temp}</Text>
//               <Image source={{ uri: forecast.icon }} style={styles.forecastIcon} />
//               <Text style={styles.forecastTime}>{forecast.time}</Text>
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0975b0',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     position: 'absolute',
//     top: 40,
//     left: 20,
//   },
//   locationText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   weatherContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   catIcon: {
//     width: 80,
//     height: 80,
//     marginTop: 10,
//   },
//   temperature: {
//     fontSize: 80,
//     color: 'white',
//   },
//   weatherDescription: {
//     fontSize: 24,
//     color: 'white',
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     padding: 20,
//   },
//   statsItem: {
//     alignItems: 'center',
//   },
//   statsLabel: {
//     color: 'white',
//     fontSize: 16,
//   },
//   statsValue: {
//     color: 'white',
//     fontSize: 12,
//   },
//   forecastContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#333333',
//     borderRadius: 20,
//     padding: 10,
//     width: width * 0.9,
//     marginBottom: 20,
//   },
//   forecastItem: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   forecastTemp: {
//     color: 'white',
//     fontSize: 16,
//   },
//   forecastIcon: {
//     width: 40,
//     height: 40,
//   },
//   forecastTime: {
//     color: 'white',
//     fontSize: 14,
//   },
// });

// export default WeatherApp;



import { View, Text } from 'react-native'
import Home from './src/pages/home/Home'

const App = () => {
  return (
    <View>
      <Text>
        <Home />
      </Text>
    </View>
  )
}

export default App