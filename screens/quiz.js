import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';

import React, {useEffect, useState} from 'react';
import {ThemedButton} from 'react-native-really-awesome-button';
import {useWindowDimensions} from 'react-native';
import Lottie from 'lottie-react-native';

const Quiz = ({navigation}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState();
  const [score, setScore] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [timerCount, setTimer] = useState(1220);
  const [showModal, setShowModal] = useState(true);
  const [showStats, setShowStats] = useState(false);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000); //each count lasts for a second
    //cleanup the interval on complete
    if (timerCount <= 0) {
      clearInterval(interval);
      navigation.navigate('Result', {score: score});
    }
    return () => clearInterval(interval);
  });

  const getQuiz = async () => {
    setisLoading(true);
    // const url =
    //   'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    // const res = await fetch(url);
    // console.log(res);
    // const data = await res.json();
    // console.log(data);

    const data = {
      response_code: 0,
      results: [
        {
          category: 'Entertainment%3A%20Video%20Games',
          correct_answer: 'Halo%203%3A%20Recon',
          difficulty: 'medium',
          incorrect_answers: [
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
          ],
          question:
            'When%20Halo%203%3A%20ODST%20was%20unveiled%20in%202008%2C%20it%20had%20a%20different%20title.%20What%20was%20the%20game%20formally%20called%3F',
          type: 'multiple',
        },
        {
          category: 'General%20Knowledge',
          correct_answer: 'Potimarron',
          difficulty: 'hard',
          incorrect_answers: [
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
          ],
          question:
            'Which%20of%20the%20following%20is%20not%20another%20name%20for%20the%20eggplant%3F',
          type: 'multiple',
        },
        {
          category: 'History',
          correct_answer: 'Robbing%20Trains',
          difficulty: 'medium',
          incorrect_answers: [
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
          ],
          question:
            'Joseph%20Stalin%20had%20a%20criminal%20past%20doing%20what%3F',
          type: 'multiple',
        },
        {
          category: 'Entertainment%3A%20Comics',
          correct_answer: 'Prospit',
          difficulty: 'hard',
          incorrect_answers: [
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
          ],
          question:
            'In%20the%20Homestuck%20Series%2C%20what%20is%20the%20alternate%20name%20for%20the%20Kingdom%20of%20Lights%3F',
          type: 'multiple',
        },
        {
          category: 'Entertainment%3A%20Video%20Games',
          correct_answer: 'Cicero',
          difficulty: 'medium',
          incorrect_answers: [
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
          ],
          question:
            'In%20The%20Elder%20Scrolls%20V%3A%20Skyrim%2C%20who%20is%20the%20jester%20in%20the%20dark%20brotherhood%3F',
          type: 'multiple',
        },
        {
          category: 'Entertainment%3A%20Japanese%20Anime%20%26%20Manga',
          correct_answer: '8',
          difficulty: 'easy',
          incorrect_answers: [
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
          ],
          question:
            'How%20many%20%22JoJos%22%20that%20are%20protagonists%20are%20there%20in%20the%20series%20%22Jojo%27s%20Bizarre%20Adventure%22%3F',
          type: 'multiple',
        },
        {
          category: 'Entertainment%3A%20Japanese%20Anime%20%26%20Manga',
          correct_answer: 'Production%20I.G',
          difficulty: 'hard',
          incorrect_answers: [
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
          ],
          question:
            'Which%20animation%20studio%20animated%20%22Psycho%20Pass%22%3F',
          type: 'multiple',
        },
        {
          category: 'History',
          correct_answer: 'Mayans',
          difficulty: 'hard',
          incorrect_answers: [
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
          ],
          question:
            'The%20ancient%20city%20of%20Chich%C3%A9n%20Itz%C3%A1%20was%20built%20by%20which%20civilization%3F',
          type: 'multiple',
        },
        {
          category: 'General%20Knowledge',
          correct_answer: 'Platelets',
          difficulty: 'easy',
          incorrect_answers: [
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
          ],
          question:
            'Which%20of%20the%20following%20blood%20component%20forms%20a%20plug%20at%20the%20site%20of%20injuries%3F',
          type: 'multiple',
        },
        {
          category: 'Entertainment%3A%20Music',
          correct_answer: 'Waves',
          difficulty: 'medium',
          incorrect_answers: [
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
            'Halo%203%3A%20Recon',
          ],
          question:
            'Which%20of%20these%20is%20not%20a%20song%20on%20the%20album%20Graduation%20by%20Kanye%20West%3F',
          type: 'multiple',
        },
      ],
    };

    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setisLoading(false);
  };
  useEffect(() => {
    getQuiz();
  }, []);

  const generateOptionsAndShuffle = quest => {
    let arr = [...quest.incorrect_answers];
    arr.push(quest.correct_answer);
    shuffleArray(arr);
    return arr;
  };

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const handleSelectedOption = _option => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
    }
    if (ques !== 9)
      setTimeout(function () {
        handleNextPress();
      }, 500);

    if (ques == 9)
      setTimeout(function () {
        navigation.navigate('Result', {score: score});
      }, 500);
  };

  const bgfn = idx => {
    switch (idx) {
      case 0:
        return {bg: '#F03986', bd: 'rgba(87, 21, 48, 1)'};
      case 1:
        return {bg: '#43DD65', bd: 'rgba(21, 69, 31, 1)'};
      case 2:
        return {bg: '#F2CA3C', bd: 'rgba(64, 53, 16, 1))'};
      case 3:
        return {bg: '#3C9BF2', bd: 'rgba(22, 57, 89, 1)'};
      default:
        return '#3C9BF2';
    }
  };

  let optArr = ['A', 'B', 'C', 'D'];

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
      }}>
      {isLoading ? (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: windowHeight,
            backgroundColor: '#fff9e4',
          }}>
          <Lottie
            style={{width: 150}}
            source={require('../components/loader-bat.json')}
            autoPlay
            loop
          />
          <Text
            style={{
              fontFamily: 'CabinetGrotesk-Black',
              color: '#000',
              fontSize: 16,
            }}>
            Kowaloski Analysis !!
          </Text>
        </View>
      ) : (
        questions && (
          <View style={{height: '100%', backgroundColor: '#fff9e4'}}>
            <View
              class="topBar"
              style={{
                height: windowHeight * 0.1,
                backgroundColor: '#fff',
                borderBottomWidth: 4,
                borderBottomColor: '#000',
                width: windowWidth,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: windowWidth * 0.03,
                paddingVertical: windowHeight * 0.02,
              }}>
              <Image
                source={require('../components/menu-icon.png')}
                style={{width: 42, height: 42}}
              />
              <ThemedButton
                width={112}
                height={42}
                raiseLevel={5}
                backgroundColor={bgfn(2).bg}
                name="bruce"
                onPress={() => {
                  setShowStats(true);
                }}
                type="anchor">
                <Image
                  source={require('../components/stats.png')}
                  style={{width: 17, height: 22}}
                />
                <Text style={{fontFamily: 'CabinetGrotesk-Bold'}}>
                  &nbsp;Stats
                </Text>
              </ThemedButton>
            </View>

            <View
              style={{
                paddingHorizontal: windowWidth * 0.05,
                paddingTop: windowHeight * 0.02,
                paddingBottom: windowHeight * 0.02,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../components/interrogation.png')}
                  style={{height: 24, width: 24}}
                />
                <Text
                  style={{fontFamily: 'CabinetGrotesk-Black', color: '#000'}}>
                  {ques}/{questions.length}
                </Text>
              </View>
              <Text style={{fontFamily: 'CabinetGrotesk-Black', color: '#000'}}>
                Score : {score}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: 'CabinetGrotesk-Black',
                    color: '#000',
                  }}>
                  0{Math.floor(timerCount / 60)}:
                  {timerCount % 60 < 10
                    ? `0${timerCount % 60}`
                    : timerCount % 60}{' '}
                </Text>
                <Image
                  source={require('../components/clock.png')}
                  style={{height: 24, width: 24}}
                />
              </View>
            </View>

            <View
              style={{
                alignSelf: 'center',
                width: windowWidth * 0.9,
                height: 4,
                backgroundColor: '#000',
              }}></View>
            <View style={[styles.que, {paddingHorizontal: windowWidth * 0.05}]}>
              <Text
                style={[
                  styles.question,
                  {
                    fontFamily: 'CabinetGrotesk-Bold',
                    color: '#000',
                    fontSize: 20,
                  },
                ]}>
                Q. {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>
            <View
              style={[styles.option, {paddingHorizontal: windowWidth * 0.05}]}>
              {options &&
                options.map((opt, i) => (
                  <ThemedButton
                    width={'100%'}
                    borderColor={bgfn(i).bd}
                    borderWidth={4}
                    raiseLevel={7}
                    backgroundColor={bgfn(i).bg}
                    style={styles.optButton}
                    name="bruce"
                    backgroundDarker={bgfn(i).bd}
                    onPress={() => {
                      handleSelectedOption(opt);
                    }}
                    key={i}
                    type="anchor">
                    <Text
                      style={{
                        fontFamily: 'CabinetGrotesk-Extrabold',
                        color: bgfn(i).bd,
                        fontSize: 16,
                      }}>
                      {optArr[i]}) &nbsp;
                      {decodeURIComponent(opt)}
                    </Text>
                  </ThemedButton>
                ))}
            </View>
            <TouchableWithoutFeedback onPress={() => toggleModal()}>
              <View
                style={{
                  width: windowWidth,
                  borderTopRightRadius: 16,
                  borderTopLeftRadius: 16,
                  backgroundColor: '#fff',
                  borderTopWidth: 5,
                  borderTopColor: '#000',
                  position: 'absolute',
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: windowHeight * 0.015,
                }}>
                <Image
                  source={require('../components/up-chevron.png')}
                  style={{height: 32, width: 32}}
                />
                <Text
                  style={{
                    fontFamily: 'CabinetGrotesk-Black',
                    color: '#000',
                    fontSize: 24,
                  }}>
                  Powerups
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <Modal
              isVisible={showModal}
              onBackdropPress={toggleModal}
              animationIn="slideInUp"
              animationOut="slideOutDown"
              style={{
                position: 'absolute',
                bottom: 0,
                margin: 0,
                alignSelf: 'center',
                width: windowWidth,
                borderRadius: 16,
                backgroundColor: '#FFF',
              }}>
              <View
                style={{
                  borderTopRightRadius: 16,
                  borderTopLeftRadius: 16,
                  backgroundColor: '#fff',
                  borderTopWidth: 5,
                  borderTopColor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: windowHeight * 0.02,
                }}>
                <Image
                  source={require('../components/up-chevron.png')}
                  style={{height: 32, width: 32}}
                />
                <Text
                  style={{
                    fontFamily: 'CabinetGrotesk-Black',
                    color: '#000',
                    fontSize: 24,
                  }}>
                  Powerups
                </Text>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    width: '100%',
                    padding: 20,
                  }}>
                  <ThemedButton
                    width={45}
                    height={42}
                    raiseLevel={3}
                    backgroundColor={bgfn(0).bg}
                    name="bruce"
                    onPress={() => {}}
                    type="anchor">
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../components/trashcan.png')}
                        style={{width: 32, height: 32}}
                        resizeMode="contain"
                      />
                    </View>
                  </ThemedButton>
                  <ThemedButton
                    width={45}
                    height={42}
                    raiseLevel={3}
                    backgroundColor={bgfn(1).bg}
                    name="bruce"
                    onPress={() => {}}
                    type="anchor">
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../components/light.png')}
                        style={{width: 32, height: 32}}
                        resizeMode="contain"
                      />
                    </View>
                  </ThemedButton>
                  <ThemedButton
                    width={45}
                    height={42}
                    raiseLevel={3}
                    backgroundColor={bgfn(2).bg}
                    name="bruce"
                    onPress={() => {}}
                    type="anchor">
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../components/2x.png')}
                        style={{width: 26, height: 26}}
                        resizeMode="contain"
                      />
                    </View>
                  </ThemedButton>
                  <ThemedButton
                    width={45}
                    height={42}
                    raiseLevel={3}
                    backgroundColor={bgfn(3).bg}
                    name="bruce"
                    onPress={() => {}}
                    type="anchor">
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../components/divide.png')}
                        style={{width: 32, height: 32}}
                        resizeMode="contain"
                      />
                    </View>
                  </ThemedButton>
                </View>
              </View>
            </Modal>

            <Modal
              isVisible={showStats}
              animationIn="slideInLeft"
              animationOut="slideOutLeft"
              style={{
                borderRightWidth: 4,
                borderRightColor: '#000',
                position: 'absolute',
                top: 0,
                height: windowHeight,
                width: windowWidth * 0.9,
                margin: 0,
                alignSelf: 'flex-start',
                backgroundColor: '#FFF',
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#fff9e4',
                }}>
                <View
                  class="topBar"
                  style={{
                    borderRightWidth: 4,
                    borderRightColor: '#000',
                    height: windowHeight * 0.1,
                    backgroundColor: '#fff',
                    borderBottomWidth: 4,
                    borderBottomColor: '#000',
                    width: windowWidth * 0.9,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: windowWidth * 0.03,
                    paddingVertical: windowHeight * 0.02,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setShowStats(false);
                    }}>
                    <Image
                      source={require('../components/x-icon.png')}
                      style={{width: 42, height: 42}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{display: 'flex', padding: windowWidth * 0.05}}>
                  <Text
                    style={{
                      fontFamily: 'CabinetGrotesk-Black',
                      color: '#000',
                      fontSize: 32,
                      marginBottom: 16,
                    }}>
                    Stats
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontFamily: 'CabinetGrotesk-Black',
                          color: '#000',
                          fontSize: 24,
                        }}>
                        Answered:
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontFamily: 'CabinetGrotesk-Black',
                        color: '#000',
                        fontSize: 24,
                      }}>
                      {ques}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={require('../components/check-side.png')}
                        style={{height: 30, width: 30}}
                      />
                      <Text
                        style={{
                          fontFamily: 'CabinetGrotesk-Black',
                          color: '#000',
                          fontSize: 24,
                        }}>
                        Right answers:
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontFamily: 'CabinetGrotesk-Black',
                        color: '#000',
                        fontSize: 24,
                      }}>
                      {score / 10}
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={require('../components/x-side.png')}
                        style={{height: 30, width: 30}}
                      />
                      <Text
                        style={{
                          fontFamily: 'CabinetGrotesk-Black',
                          color: '#000',
                          fontSize: 24,
                        }}>
                        Wrong answers:
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontFamily: 'CabinetGrotesk-Black',
                        color: '#000',
                        fontSize: 24,
                      }}>
                      {ques - score / 10}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    alignSelf: 'center',
                    width: windowWidth * 0.72,
                    height: 4,
                    backgroundColor: '#000',
                  }}></View>
              </View>
              <ThemedButton
                style={{position: 'absolute', bottom: 20, alignSelf: 'center'}}
                width={150}
                height={60}
                raiseLevel={5}
                backgroundColor={bgfn(0).bg}
                name="bruce"
                onPress={() => {
                  setShowStats(false);
                  navigation.replace('Home');
                }}
                type="primary">
                <Image
                  source={require('../components/leave.png')}
                  style={{width: 32, height: 32}}
                />
                <Text
                  style={{
                    fontSize: 22,
                    fontFamily: 'CabinetGrotesk-Black',
                    color: 'rgba(87, 21, 48, 1)',
                  }}>
                  &nbsp;Leave
                </Text>
              </ThemedButton>
            </Modal>
          </View>
        )
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  que: {
    marginVertical: 16,
  },

  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    padding: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  opt: {
    fontSize: 18,
    color: 'white',
  },
  optButton: {
    paddingVertical: 12,
    marginVertical: 6,
  },
});
