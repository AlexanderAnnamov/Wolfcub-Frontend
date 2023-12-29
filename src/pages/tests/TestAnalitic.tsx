import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, Image, TouchableOpacity } from "react-native";
import { ImgCourse } from "../../../assets/img";
import { RadioButton } from 'react-native-paper';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const useCountdown = (initialSeconds: any) => {
    const [seconds, setSeconds] = React.useState<any>(initialSeconds);
    const [timeout, _setTimeout] = React.useState();

    const countDown = () => {
        setSeconds((prev: any) => prev - 1)
    }

    const runTimer = () => {
        const timer: any = setTimeout(() => {
            countDown();

        }, 1000);
        _setTimeout(timer);
    }

    useEffect(() => {
        runTimer()
    }, [seconds])

    return seconds
};




export const TestAnalitic = ({navigation}: {navigation: any}) => {
    const [question, setQuestion] = React.useState(1);
    const [checked, setChecked] = React.useState('');


    const seconds = useCountdown(600)
    const tminutes = Math.floor(seconds / 60 );
    const tseconds = seconds % 60;



    const nextQuestion = () => {
        setQuestion(prev => prev + 1)
    }

    const prevQuestion = () => {
        setQuestion(prev => prev - 1)
    }
    console.log(question)
  return (
    <View style={styles.wrapper}>
        <View style={styles.wrapperTime}><Text style={styles.title}>Бизнес-аналитика</Text><Text style={{color: 'red', fontSize: 20}}>{tminutes}:{tseconds}</Text></View>
      

      {question === 1 && (<><Text style={styles.questionText}>1. В каком году сформировалось понятие экономический кризис?</Text><View style={styles.question}>
              <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')} /><Text>1843</Text>
          </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'two' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('two')} /><Text>1821</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'tree' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('tree')} /><Text>1711</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'four' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('four')} /><Text>1864</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'five' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('five')} /><Text>1897</Text>
              </View><View style={styles.btnPanels}>
                  <TouchableOpacity style={styles.nextQuestion} onPress={prevQuestion}><Text style={styles.questionResponse}>Prev</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.nextQuestion} onPress={nextQuestion}><Text style={styles.questionResponse}>Next</Text></TouchableOpacity>
              </View></>)}
              {question === 2 && (<><Text style={styles.questionText}>2. Год формирования системы 'ject'?</Text><View style={styles.question}>
              <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')} /><Text>1983</Text>
          </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'two' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('two')} /><Text>1981</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'tree' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('tree')} /><Text>1979</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'four' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('four')} /><Text>1973</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'five' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('five')} /><Text>1971</Text>
              </View><View style={styles.btnPanels}>
                  <TouchableOpacity style={styles.nextQuestion} onPress={prevQuestion}><Text style={styles.questionResponse}>Prev</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.nextQuestion} onPress={nextQuestion}><Text style={styles.questionResponse}>Next</Text></TouchableOpacity>
              </View></>)}
              {question === 3 && (<><Text style={styles.questionText}>3. Год создания системы лиц?</Text><View style={styles.question}>
              <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')} /><Text>1983</Text>
          </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'two' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('two')} /><Text>1981</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'tree' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('tree')} /><Text>1979</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'four' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('four')} /><Text>1973</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'five' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('five')} /><Text>1971</Text>
              </View><View style={styles.btnPanels}>
                  <TouchableOpacity style={styles.nextQuestion} onPress={prevQuestion}><Text style={styles.questionResponse}>Prev</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.nextQuestion} onPress={nextQuestion}><Text style={styles.questionResponse}>Next</Text></TouchableOpacity>
              </View></>)}
              {question === 4 && (<><Text style={styles.questionText}>4. Год ЛОАС?</Text><View style={styles.question}>
              <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')} /><Text>1923</Text>
          </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'two' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('two')} /><Text>1911</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'tree' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('tree')} /><Text>1979</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'four' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('four')} /><Text>1973</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'five' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('five')} /><Text>1971</Text>
              </View><View style={styles.btnPanels}>
                  <TouchableOpacity style={styles.nextQuestion} onPress={prevQuestion}><Text style={styles.questionResponse}>Prev</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.nextQuestion} onPress={nextQuestion}><Text style={styles.questionResponse}>Next</Text></TouchableOpacity>
              </View></>)}
              {question === 5 && (<><Text style={styles.questionText}>5. Год передачи систем?</Text><View style={styles.question}>
              <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')} /><Text>1943</Text>
          </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'two' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('two')} /><Text>1934</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'tree' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('tree')} /><Text>1979</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'four' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('four')} /><Text>1973</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'five' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('five')} /><Text>1971</Text>
              </View><View style={styles.btnPanels}>
                  <TouchableOpacity style={styles.nextQuestion} onPress={prevQuestion}><Text style={styles.questionResponse}>Prev</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.nextQuestion} onPress={nextQuestion}><Text style={styles.questionResponse}>Next</Text></TouchableOpacity>
              </View></>)}
              {question === 6 && (<><Text style={styles.questionText}>6. Год сохранения критики?</Text><View style={styles.question}>
              <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')} /><Text>1943</Text>
          </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'two' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('two')} /><Text>1934</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'tree' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('tree')} /><Text>1979</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'four' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('four')} /><Text>1973</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'five' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('five')} /><Text>1971</Text>
              </View><View style={styles.btnPanels}>
                  <TouchableOpacity style={styles.nextQuestion} onPress={prevQuestion}><Text style={styles.questionResponse}>Prev</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.nextQuestion} onPress={nextQuestion}><Text style={styles.questionResponse}>Next</Text></TouchableOpacity>
              </View></>)}
              {question === 7 && (<><Text style={styles.questionText}>7. Год изменения валюты?</Text><View style={styles.question}>
              <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')} /><Text>1943</Text>
          </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'two' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('two')} /><Text>1934</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'tree' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('tree')} /><Text>1979</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'four' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('four')} /><Text>1973</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'five' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('five')} /><Text>1971</Text>
              </View><View style={styles.btnPanels}>
                  <TouchableOpacity style={styles.nextQuestion} onPress={prevQuestion}><Text style={styles.questionResponse}>Prev</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.nextQuestion} onPress={nextQuestion}><Text style={styles.questionResponse}>Next</Text></TouchableOpacity>
              </View></>)}
              {question === 8 && (<><Text style={styles.questionText}>8. Год начала производства бумаги</Text><View style={styles.question}>
              <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')} /><Text>1943</Text>
          </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'two' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('two')} /><Text>1934</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'tree' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('tree')} /><Text>1979</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'four' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('four')} /><Text>1973</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'five' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('five')} /><Text>1971</Text>
              </View><View style={styles.btnPanels}>
                  <TouchableOpacity style={styles.nextQuestion} onPress={prevQuestion}><Text style={styles.questionResponse}>Prev</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.nextQuestion} onPress={nextQuestion}><Text style={styles.questionResponse}>Next</Text></TouchableOpacity>
              </View></>)}
              {question === 9 && (<><Text style={styles.questionText}>9. Год информирования передачи кризиса?</Text><View style={styles.question}>
              <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')} /><Text>1943</Text>
          </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'two' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('two')} /><Text>1934</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'tree' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('tree')} /><Text>1979</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'four' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('four')} /><Text>1973</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'five' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('five')} /><Text>1971</Text>
              </View><View style={styles.btnPanels}>
                  <TouchableOpacity style={styles.nextQuestion} onPress={prevQuestion}><Text style={styles.questionResponse}>Prev</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.nextQuestion} onPress={nextQuestion}><Text style={styles.questionResponse}>Next</Text></TouchableOpacity>
              </View></>)}
              {question === 10 && (<><Text style={styles.questionText}>10. Год интегрирования под систем систем?</Text><View style={styles.question}>
              <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')} /><Text>1943</Text>
          </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'two' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('two')} /><Text>1934</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'tree' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('tree')} /><Text>1979</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'four' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('four')} /><Text>1973</Text>
              </View><View style={styles.question}>
                  <RadioButton
                      value="first"
                      status={checked === 'five' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('five')} /><Text>1971</Text>
              </View><View style={styles.btnPanels}>
                  <TouchableOpacity style={styles.nextQuestion} onPress={prevQuestion}><Text style={styles.questionResponse}>Prev</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.nextQuestion} onPress={() => navigation.navigate('TestsPage')}><Text style={styles.questionResponse}>Завершить</Text></TouchableOpacity>
              </View></>)}
      
      
    </View>
  );
};

const styles = StyleSheet.create({
    wrapperTime: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'},
  wrapper: {
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    width: windowWidth,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 25,
  },
  textInfo: {
    textAlign: "justify",
  },
  img: {
    height: 300,
    width: "100%",
    borderRadius: 15,
  },
  question: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  questionText: {
    textAlign: 'left',
    width: '100%',
    fontWeight: '600',
    fontSize: 18
  },
  btnPanels: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 25,
    columnGap: 10
  },
  nextQuestion: {
    display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  paddingHorizontal: 20,
  paddingVertical: 10,
  backgroundColor: '#03dac4',
  
  width: 80,
  borderRadius: 10
  },
  questionResponse: {
    color: '#ffffff'
  }
});
