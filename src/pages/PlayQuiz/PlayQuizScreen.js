import { element } from 'prop-types';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import quizData from '../../components/data';

 const ReadQuizQn =() =>{

    let indexCount =734
    
    
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const title = 'readQuiz anything'
    let tempQuestion = []
    // useEffect(() => {

            tempQuestion.push(quizData[1].question)
            tempQuestion.push(quizData[1].correct_answer)
            quizData[1].incorrect_answers.forEach((incorAns)=>{
                tempQuestion.push(incorAns)
            })
            console.log(tempQuestion, '<< tempQuestion')
            // setQuestion(tempQuestion)
            console.log(question, '<<question')

    // }, [])
    // setQuestion(tempQuestion)
    let tempArrQuest =[]
    const arrQuest = [
      {question: tempQuestion[0]},
      {option1: tempQuestion[1]},
      {option2: tempQuestion[2]},
      {option3: tempQuestion[3]}
      ]
    console.log(arrQuest,'<< arrQuest')

    tempArrQuest.push(arrQuest[0])
    tempArrQuest.push(arrQuest[1])
    tempArrQuest.push(arrQuest[2])
    tempArrQuest.push(arrQuest[3])
    console.log(tempArrQuest, '<<tempArrQuest11')

    const newTempObjQuest = [
      {name: "question", value: "Which of the following songs did Elton John perform following Princess Diane&#039;s passing?", id: 1},
      {name:"option ", value:"I Guess That&#039;s Why They Call It The Blues", id: 3 },
      {name:"option 1", value:"Candles in the Wind", id: 2 }
    ]

  

    // const tempQuestArr = [tempQuestObj]
    // console.log(tempQuestArr, '<< tempQuestArr')

    const [question, setQuestion] = useState(tempArrQuest);
    console.log(question,'<<<state question')


    const Item = (tempQuestObj) => {
        <View>

        <Text>{tempQuestObj.option4}</Text>
        </View>
    }

    const renderItem = (Item) => {
        <Item title={Item.option4}/>
    }

    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    let extracount = 0
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
      },
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
      countContainer: {
        alignItems: "center",
        padding: 10
      },
      item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 24,
        padding: 30,
        backgroundColor: 'lightblue',
        fontSize: 24,
      },
    });

    return (
      //  <SafeAreaView>
      //    <View>
      //       <Text style={{fontSize: 16, marginLeft: 10}}>{title}</Text>
      //       <Text>{tempQuestion}</Text>

      //       </View>  

            <View style={styles.item}>

            <FlatList 
              numColumns={2}
              keyExtractor={(item) => item.id} 
              data={newTempObjQuest} 
              renderItem={({ item }) => (
                <TouchableOpacity onPress={console.log('button press')}>
                  <Text style={styles.item}>{item.name}</Text>
                  <Text style={styles.item}>{item.value}</Text>
                  {/* <Text style={styles.item}>{item.value}</Text> */}
                  {/* <Text style={styles.button}>{item.name2}</Text>
                  <Text style={styles.button}>{item.value2}</Text> */}
                  {/* <Text style={styles.button}>{item.value}</Text> */}
                </TouchableOpacity>
              )}
            />

            </View>

    )
}
    


export default ReadQuizQn


    