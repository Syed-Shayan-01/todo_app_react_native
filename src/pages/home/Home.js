import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import Navbar from '../../components/navbar/Navbar';
import AntIcon from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const Home = () => {
  const data = [
    {
      id: 1,
      title: 'Gym & breakfast',
      description:
        'The main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc.',
      time: '06:24pm',
    },
    {
      id: 2,
      title: 'Task 2',
      description:
        'The main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc.',
      time: '06:24pm',
    },
    {
      id: 3,
      title: 'Task 3',
      description:
        'The main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc.',
      time: '06:24pm',
    },
    {
      id: 4,
      title: 'Task 4',
      description:
        'The main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc.',
      time: '06:24pm',
    },
    {
      id: 5,
      title: 'Task 5',
      description:
        'The main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc.',
      time: '06:24pm',
    },
    {
      id: 6,
      title: 'Task 1',
      description:
        'The main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc.',
      time: '06:24pm',
    },
    {
      id: 7,
      title: 'Task 1',
      description:
        'The main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc.',
      time: '06:24pm',
    },
  ];

  return (
    <>
      {/* Added flex: 1 to this container */}
      <Navbar titleName="Homepage" />
      <View>
        <Text style={styles.mainText}>Tasks</Text>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>
      <View style={styles.todayTextContainer}>
        <Text style={styles.todayText}>Today's Tasks</Text>
      </View>
      {/* Make sure FlatList can expand and scroll properly */}
      <FlatList
        data={data}
        renderItem={({item, index}) => <TaskItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

// TaskItem component to handle the expand/collapse
const TaskItem = ({item}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(animation, {
      toValue: isExpanded ? 0 : 1, // Toggle between 0 and 1
      duration: 350, // Slow motion: 500ms duration for the animation
      useNativeDriver: false,
    }).start();
  };

  // Interpolating the height based on the animation value
  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], // Use measured height
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.taskContainer}>
      <View style={styles.lineWithCircleContainer}>
        <View style={styles.verticalLine} />
        <TouchableOpacity style={styles.radioButton} />
      </View>

      <View style={styles.items}>
        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Animated.View style={{height: animatedHeight, overflow: 'hidden'}}>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </Animated.View>
        </View>
        <TouchableOpacity onPress={toggleDescription}>
          <AntIcon name={isExpanded ? 'upcircleo' : 'circledowno'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 25,
    marginVertical: height * 0.02,
    marginHorizontal: height * 0.03,
    color: '#333333',
    fontWeight: 'bold',
  },
  searchBar: {
    marginHorizontal: height * 0.03,
    height: height * 0.09,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
    fontSize: 16,
    letterSpacing: 0.8,
    elevation: 1.4,
  },
  todayTextContainer: {
    marginHorizontal: width * 0.05,
  },
  todayText: {
    fontSize: 25,
    color: '#333333',
    fontWeight: 'bold',
    marginTop: height * 0.05,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  lineWithCircleContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  verticalLine: {
    width: 2,
    height: 100, // Adjust the height based on your design
    backgroundColor: 'black',
    position: 'absolute',
    top: 20, // Adjust the top position based on your design
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginVertical: height * 0.02,
    borderRadius: 10,
    padding: Math.min(width, height) * 0.045,
    elevation: 1.4,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: '900',
    width: width * 0.5,
  },
  itemDescription: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: height * 0.01,
    width: width * 0.65,
    color: '#666666',
    textAlign: 'justify',
  },
});

export default Home;
