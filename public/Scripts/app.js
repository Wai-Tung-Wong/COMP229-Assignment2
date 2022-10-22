//app.js Wai Tung Wong 301222578 2022-10-14

(function(){
    function start(){
        console.log("App started...")
    }
    window.addEventListener("load", start);
})();

//function for the contact form to redirect user to home page
function backToHome(){
    location.replace("/");
  }