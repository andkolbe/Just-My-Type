
// Hide uppercase keyboard when page loads
$('body').ready(function () {  // could also use $('body').ready()
    $('#keyboard-upper-container').hide();
});


// When the shift key is held down, hide lowercase keyboard and show uppercase one
$('body').keydown(function (e) {  
   if(e.which === 16) {
       $('#keyboard-lower-container').hide();
       $('#keyboard-upper-container').show();
   }
});


// When the shift key is released, hide uppercase keyboard and show uppercase one
$('body').keyup(function (e) {  
   if(e.which === 16) {
       $('#keyboard-lower-container').show();
       $('#keyboard-upper-container').hide();
   }
});


// When keys are pressed, they should be highlighted in the browser
$('body').keypress(function(e) {
    //highlight pressed key
    let key = $('#' + e.which);  // <= what?
    $(key).css('background-color', 'yellow');

    $('body').keyup(function(e) {
      //unhighlight released key
      $(key).css('background-color', '');
    });
  });


/*
The sentences in the provided array should be displayed at the top of the page one sentence at a time. 
Once the sentence has been completed, the next in line should appear. 
There is already a div with id="sentence" in your html file. 
This is where you will display each sentence one at a time.
*/

let sentences = [
    'ten ate neite ate nee enet ite ate inet ent eate', 
    'Too ato too nOt enot one totA not anot tOO aNot', 
    'oat itain oat tain nate eate tea anne inant nean', 
    'itant eate anot eat nato inate eat anot tain eat', 
    'nee ene ate ite tent tiet ent ine ene ete ene ate'
];
let sentenceIdx = 0;
let letterIdx = 0;

$('#sentence').text(sentences[sentenceIdx]);

    

//  Highlight the currently expected letter in the on-screen sentence that should be typed next
    // move the #yellow-block along the letterIdx
// if (letterIdx < sentences.length) {} ??


//Also display the currently expected letter in the center (div id="target-letter" provided for you)
$('#target-letter').css('margin', 'auto');





/*
//HINTS

(split(' ').length)


$('body').keydown(function (e) {  //keydown doesn't recognize upper and lowercase 
    console.log(e.which)
});
$('body').keyup(function (e) {});

//BULK OF GAME 
$('body').keypress(function (e) {  //keypress does recognize upper and lowercase
    console.log(e.which)
});
/don't nest or use any other key listeners
 


console.log('anteater'.charCodeAt(0)); 

logs 97, the same thing as 

$('body').keypress(function (e) {  
    console.log(e.which)
});


const sentences = [
    'The dog is named Odin',
    'My dog is nicknamed Odie',
    'A doggo is named Odin',
    'There is a dog is named Odin',
];

let sentenceIdx = 1;
let letterIdx = 0;

console.log(sentences[sentenceIdx][letterIdx]);

sentenceIdx++;
letterIdx++;
letterIdx++;
letterIdx++;
$('#letter').text(sentences[sentenceIdx][letterIdx]);

console.log(sentences[sentenceIdx][letterIdx]);

The last index is length - 1
*/

