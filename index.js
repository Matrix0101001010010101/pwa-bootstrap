if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('sw.js');
  
  }
  Toasty();
  // Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
  deferredPrompt.prompt();
  
});
var option = {      
  animation: true,
  delay: 4000
};
function Toasty() {
  var toastHTMLElement = document.getElementById("EpicToast");
  var toastElement = new bootstrap.Toast(toastHTMLElement, option);
  toastElement.show();
}
function meNotifier() {
  Notification.requestPermission().then(function (result) {
      console.log("permission donnée");
  });
}

function envoyerNotificationThreadUtilisateur() {
  if (Notification.permission === 'granted') {
      var options = {
          body: 'Ma première notification depuis index.js',
          requireInteraction: true
      };

      const notification = new Notification('Hello depuis index.js', options);
  } else {
      console.log("aucune notification car non permis");
  }
}