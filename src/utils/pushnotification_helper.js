import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

let endpointUrl =
  'https://m42voquwh7.execute-api.ap-south-1.amazonaws.com/send-device-code';

const handleSubmit = async fcmtoken => {
  let payload = {
    user_name: 'ashu',
    device_id: fcmtoken,
  };

  apiCall(payload);
};

const apiCall = async postData => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(postData),
  };

  fetch(endpointUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
      if (data.status == 200) {
        console.log("data sent")
      } else {
        alert('retry after some time');
      }
    })
    .catch(error => console.error(error));
};

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken();
  }
}

async function getFCMToken() {
  let fcmtoken = await AsyncStorage.getItem('fcmtoken');
  // let fcmtoken=null
  console.log(fcmtoken, 'old token'); 

  if (!fcmtoken) {
    try {
      let fcmtoken = await messaging().getToken();
      if (fcmtoken) {
        handleSubmit(fcmtoken);
        console.log(fcmtoken, 'new token');
        await AsyncStorage.setItem('fcmtoken', fcmtoken);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const NotificationListner = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log('notification on foreground state..', remoteMessage);
  });
};
