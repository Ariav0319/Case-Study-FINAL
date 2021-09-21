function setup() {
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
  }
  
  function modelLoaded() {
    console.log('Model Loaded!');
  }
  function gotResult(error, results) {
    if(error){
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("google_lens_result").innerHTML = results[0].label;
      document.getElementById("mobile_net_result").innerHTML = results[0].label;
    }
  }  