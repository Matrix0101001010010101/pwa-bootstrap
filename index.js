if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('sw.js');
  
  }

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