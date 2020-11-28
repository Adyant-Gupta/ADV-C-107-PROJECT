Webcam.set({

    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 300000000
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = " '+data_uri+ '"/>';
    });

}

console.log("ml5 version" , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/q2tBpXYrK/model.json' , modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function check() {
    var img = document.getElementById("captured_image");
    classifier.classify(img , gotResult());
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
    
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    }
    if (results[0].label == "this looks amazing!!") {
        document.getElementById("update_emoji").innerHTML = "👌";
    }
    
        if (results[0].label == "all the best!!") {
        document.getElementById("update_emoji").innerHTML = "👍";
    }
            if (results[0].label == "that was a marvelous victory!!") {
        document.getElementById("update_emoji").innerHTML = "✌";
    }
    
        if (results[1].label == "this looks amazing!!") {
        document.getElementById("update_emoji").innerHTML = "👌";
    }
    
        if (results[1].label == "all the best!!") {
        document.getElementById("update_emoji").innerHTML = "👍";
    }
            if (results[1].label == "that was a marvelous victory!!") {
        document.getElementById("update_emoji").innerHTML = "✌";
    }
    
}
