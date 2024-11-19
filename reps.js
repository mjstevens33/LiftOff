import React, { useState} from 'react';
import {Image, Text, View} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const RepForm = () => {
    const workoutData = new Map([
      ["10/1/24", { Bench: "3 - 125", Squat: null, Deadlift: "2 - 175" }],
      ["10/3/24", { Bench: null, Squat: "7 - 110", Deadlift: "8 - 150" }],
      ["10/4/24", { Bench: "12 - 100", Squat: null, Deadlift: null }],
      ["10/7/24", { Bench: null, Squat: "3 - 140", Deadlift: null }],
      ["10/8/24", { Bench: "4 - 140", Squat: null, Deadlift: "12 - 120" }],
      ["10/10/24", { Bench: "11 - 100", Squat: "6 - 150", Deadlift: null }],
      ["10/13/24", { Bench: null, Squat: "12 - 110", Deadlift: null }],
      ["10/14/24", { Bench: null, Squat: null, Deadlift: "6 - 170" }],
      ["10/18/24", { Bench: null, Squat: "3 - 150", Deadlift: null }],
      ["10/20/24", { Bench: "4 - 125", Squat: null, Deadlift: "5 - 165" }],
      ["10/23/24", { Bench: null, Squat: null, Deadlift: "12 - 135" }],
      ["10/27/24", { Bench: null, Squat: null, Deadlift: "3 - 185" }],
      ["10/29/24", { Bench: "8 - 100", Squat: "5 - 145", Deadlift: null }],
      ["11/3/24", { Bench: null, Squat: null, Deadlift: null }],
      ["11/5/24", { Bench: "4 - 135", Squat: "3 - 160", Deadlift: null }],
      ["11/7/24", { Bench: null, Squat: "10 - 100", Deadlift: "5 - 175" }]
    ]);
    const [selectedExercise, setSelectedExercise] = useState('Squat');
    const getLargestWeight = (exercise) => {
      const filteredEntries = [];
      // Loop through the workout data and filter by the selected exercise
      workoutData.forEach((data, date) => {
        if (data[exercise]) {
          const [reps, weight] = data[exercise].split(' - ');
          if (weight) {
            filteredEntries.push(parseInt(weight, 10)); // Push the weight as an integer
          }
        }
      });
      // Sort the weights in descending order and return the largest one from the last 3 entries
      const sortedWeights = filteredEntries.sort((a, b) => b - a);
      return sortedWeights.slice(0, 3)[0] || 'N/A'; // Return the largest of the last 3, or 'N/A' if there are none
    };
    return (
      <View style={{ flex: 1, paddingTop: 20, paddingHorizontal: 20, backgroundColor: 'white', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('./assets/liftoff_logo.png')} style={{ width: 100, height: 100, marginRight: 10 }} />
          <Text style={{ fontFamily: 'Comfortaa-Bold', fontSize: 30, fontWeight: 'bold', color: '#60B5F9' }}>1RM Calculator</Text>
        </View>
        <Picker
          selectedValue={selectedExercise}
          onValueChange={(itemValue) => setSelectedExercise(itemValue)}
          style={{ height: 200, width: '100%', marginTop: -30 }}
        >
          <Picker.Item label="Bench" value="Bench" />
          <Picker.Item label="Squat" value="Squat" />
          <Picker.Item label="Deadlift" value="Deadlift" />
        </Picker>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: 300, height: 60, borderRadius: 25, backgroundColor: "#60B5F9", marginTop: 10 }}>
          <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Comfortaa-Bold' }}>1RM : {selectedExercise} : {getLargestWeight(selectedExercise)} lbs</Text>
        </View>
      </View>
    );
  }

  export default RepForm;