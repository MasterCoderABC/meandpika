//btw yo mama so fat that when she fell, I didn't laught, butthe sidewalk cracked up :)
//Lol made a mistake seeing the source code

Webcam.set({
    width: 350,
    height:300,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("yoCamera");

Webcam.attach(camera);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9mUuXmRa9/model.json", modelLoaded);

function modelLoaded(){
  console.log("Model Loaded!");
}

function captureAndIdentify(){
    Webcam.snap(function(data_uri){
       document.getElementById("yoCapturedPhoto").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';
    });
    var img = document.getElementById('captured_img');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        document.getElementById("who").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3)*100 + "%";
    }
}