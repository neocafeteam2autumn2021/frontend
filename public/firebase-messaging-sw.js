// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyC5jE7pAdFJkWy8nuzxr_UxUS13RBPs1ik",
  authDomain: "neocafe-ba36a.firebaseapp.com",
  databaseURL: "https://neocafe-ba36a-default-rtdb.firebaseio.com",
  projectId: "neocafe-ba36a",
  storageBucket: "neocafe-ba36a.appspot.com",
  messagingSenderId: "286234697564",
  appId: "1:286234697564:web:ae8e572fdbc790c7adeb99",
  measurementId: "G-K0ZMXQB2CQ",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
