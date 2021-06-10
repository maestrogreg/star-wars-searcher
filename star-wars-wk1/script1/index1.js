const url = 'https://swapi.dev/api/people';


//first we fetch data from api
fetch(url)
.then((resp) => resp.json())
.then(data =>{
    console.log(data);
    var names = data.results;
    console.log(names)


    //next we target individual button ID with the DOM
    var btn0 = document.getElementById('button0')
    btn0.className = "first-button"
    var btn1 = document.getElementById('button1')
    var btn2 = document.getElementById('button2')
    var btn3 = document.getElementById('button3')
    var btn4 = document.getElementById('button4')
    var btn5 = document.getElementById('button5')
    var btn6 = document.getElementById('button6')
    var btn7 = document.getElementById('button7')
    var btn8 = document.getElementById('button8')
    var btn9 = document.getElementById('button9')
    btn0.innerHTML = `${names[0].name}`;
    btn1.innerHTML = `${names[1].name}`;
    btn2.innerHTML = `${names[2].name}`;
    btn3.innerHTML = `${names[3].name}`;
    btn4.innerHTML = `${names[4].name}`;
    btn5.innerHTML = `${names[5].name}`;
    btn6.innerHTML = `${names[6].name}`;
    btn7.innerHTML = `${names[7].name}`;
    btn8.innerHTML = `${names[8].name}`;
    btn9.innerHTML = `${names[9].name}`;
    // for the first image
    var detail1 = document.getElementById('p1');
    var detail2 = document.getElementById('p2');
    detail1.innerHTML = `gender: ${names[0].gender}`
    detail2.innerHTML = `Height: ${names[0].height}`
    // for the second image
    var detail3 = document.getElementById('p3');
    var detail4 = document.getElementById('p4');
    detail3.innerHTML = `gender: ${names[1].gender}`
    detail4.innerHTML = `Height: ${names[1].height}`
    //for the third image
    var detail5 = document.getElementById('p5');
    var detail6 = document.getElementById('p6');
    detail5.innerHTML = `gender: ${names[2].gender}`
    detail6.innerHTML = `Height: ${names[2].height}`
    //for the fourth image
    var detail7 = document.getElementById('p7');
    var detail8 = document.getElementById('p8');
    detail7.innerHTML = `gender: ${names[3].gender}`
    detail8.innerHTML = `Height: ${names[3].height}`
    //for the fifth image
    var detail9 = document.getElementById('p9');
    var detail10 = document.getElementById('p10');
    detail9.innerHTML = `gender: ${names[4].gender}`
    detail10.innerHTML = `Height: ${names[4].height}`
    //for the sixth image
    var detail11 = document.getElementById('p11');
    var detail12 = document.getElementById('p12');
    detail11.innerHTML = `gender: ${names[5].gender}`
    detail12.innerHTML = `Height: ${names[5].height}`
    //for the seventh image
    var detail13 = document.getElementById('p13');
    var detail14 = document.getElementById('p14');
    detail13.innerHTML = `gender: ${names[6].gender}`
    detail14.innerHTML = `Height: ${names[6].height}`
    //for the eigth image
    var detail15 = document.getElementById('p15');
    var detail16 = document.getElementById('p16');
    detail15.innerHTML = `gender: ${names[7].gender}`
    detail16.innerHTML = `Height: ${names[7].height}`
    //for the ninth image
    var detail17 = document.getElementById('p17');
    var detail18 = document.getElementById('p18');
    detail17.innerHTML = `gender: ${names[8].gender}`
    detail18.innerHTML = `Height: ${names[8].height}`
    //for the tenth image
    var detail19 = document.getElementById('p19');
    var detail20 = document.getElementById('p20');
    detail19.innerHTML = `gender: ${names[9].gender}`
    detail20.innerHTML = `Height: ${names[9].height}`
    });
   
    //Added some functionality for button toggle to click open each time a button is clicked

    
    $(document).ready(function(){
        // for the first button
      $("#button0").click(function(){
        $("#p1").toggle();
        $("#p2").toggle();
      });

    //   for the second button
    $("#button1").click(function(){
        $("#p3").toggle();
        $("#p4").toggle();
      });

    //for the third button
    $("#button2").click(function(){
        $("#p5").toggle();
        $("#p6").toggle();
      });

    //for the fourth button
    $("#button3").click(function(){
        $("#p7").toggle();
        $("#p8").toggle();
      });

    //for the fifth button
    $("#button4").click(function(){
        $("#p9").toggle();
        $("#p10").toggle();
      });

    //for the sixth button
    $("#button5").click(function(){
        $("#p11").toggle();
        $("#p12").toggle();
      });

    //for the seventh button
    $("#button6").click(function(){
        $("#p13").toggle();
        $("#p14").toggle();
      });

    //for the eigth button
    $("#button7").click(function(){
        $("#p15").toggle();
        $("#p16").toggle();
      });

    //for the ninth button
    $("#button8").click(function(){
        $("#p17").toggle();
        $("#p18").toggle();
      });
    });

     //for the tenth button
     $("#button9").click(function(){
        $("#p19").toggle();
        $("#p20").toggle();
      });