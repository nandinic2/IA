import Vue from vue.js

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    color: "#ccc"
  },
  //screenshot and appending to body method
  //methods: {
    //saveCanvas(){
    //  html2canvas(document.querySelector("#capture")).then(canvas => {
      //document.body.appendChild(canvas)
      methods: {
        saveCanvas(){
          html2canvas(document.querySelector("#capture")).then(canvas => {
          // canvas to data url
          var image = canvas.toDataURL("image/png").replace("image/png", "img/octet-stream");
          console.log(image);
          window.location.href = image;

      });
    }
  }
})

//function takeScreenshot(){
//  var element = $("#hplogo"); //this is the html element whose screenshot we want
//  html2canvas(element, {
//    background: '#FFFFFF',
//    onrendered:function(canvas){
//      var imgData = canvas.toDataURL('img/jpeg');
//      $.ajax({
//        url: 'save.php', //save.pho is the php script to save the captured screenshot to server
//        type: 'post',
//        dataType: 'text',
//        data:{
//          base64data:imgData
//
//        }
//      });
//  });
//}
