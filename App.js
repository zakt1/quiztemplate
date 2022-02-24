import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { db } from "./src/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import quizData from './src/components/data';
import ReadQuizQn from './src/pages/PlayQuiz/PlayQuizScreen';

// const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }

const readQuizData = async (documentID) => {
  
  const docRef = doc(db, "quizData", documentID);
  console.log(`Attempting to read document with ID: ${documentID}`);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    console.log(`Document with ID ${documentID} does not exist.`);
    return;
  }
}


function HomeScreen({ navigation }) {
  // readQuizData('pSf1qAQUlGaztNDrcBjB')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Take Random quiz"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function QuizScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Start Quiz"
        onPress={() => navigation.navigate('Quiz')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function StartQuiz({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Quiz" component={ReadQuizQn} />
      <Stack.Screen name="Profile" component={QuizScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
