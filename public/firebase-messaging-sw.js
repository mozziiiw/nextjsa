importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyACgGjZ-96kYNQnbr0vnVP7J8VpwR1N-mY",
  authDomain: "6amMart-d1079.firebaseapp.com",
  projectId: "6amMart-d1079",
  storageBucket: "6amMart-d1079.firebasestorage.app",
  messagingSenderId: "856198118056",
  appId: "1:856198118056:web:c560de191c372c6969e09d",
  measurementId: "G-400CY5YPML"
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
