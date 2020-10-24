let sentences = [
    'ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate',
    ],
    sentenceIdx = 0,
    letterIdx = 0,
    currentSentence = sentences[sentenceIdx],
    currentLetter = currentSentence[letterIdx],
    numberOfMistakes = 0,
    numberOfWords = null,
    startTime = null;

for (let i = 0; i < sentences.length; i++) {
    numberOfWords = sentences[i].split(' ').length;
}

// Hide uppercase keyboard when page loads
//$('body').ready(function () {  <= Not necessary
$('#keyboard-upper-container').hide();
//});

$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter); //The letter on the screen


// When the shift key is held down, hide lowercase keyboard and show uppercase one
$('body').keydown(function (e) {
    if (e.which === 16) {
        $('#keyboard-lower-container').hide();
        $('#keyboard-upper-container').show();
    }
});


// When the shift key is released, hide uppercase keyboard and show uppercase one
$('body').keyup(function (e) {
    $('.highlight').removeClass('highlight');
    if (e.which === 16) {
        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();
    }
});


// When keys are pressed, they should be highlighted in the browser
$('body').keypress(function (e) {

    if (!startTime) { //starts the timer on the first keypress instead of when the page loads
        startTime = new Date();
    }

    //highlight pressed key
    $('#' + e.which).addClass('highlight');
    //moves yellow block
    $('#yellow-block').css('margin-left', '+=17.5px');

    if (e.which === currentSentence.charCodeAt(letterIdx)) {  // undefined
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>')
    } else {
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>')
        numberOfMistakes++;
    }
    //increment letter index and get next letter
    letterIdx++;
    currentLetter = currentSentence[letterIdx];
    //update DOM with new letter or <space>
    if (currentLetter === ' ') {
        currentLetter = '<space>'
    }
    $('#target-letter').text(currentLetter);

    //interate through all letters in all sentences
    if (letterIdx === currentSentence.length) {
        sentenceIdx++
        letterIdx = 0;
        currentSentence = sentences[sentenceIdx];

        // What to do when we get to the end
        if (sentenceIdx === sentences.length) {
            let endTime = new Date();
            let minutes = (endTime - startTime) / 60000; // 1000ms = 1s  60s = 1min
            //The user's words per minute should be calculated and displayed on the screen when you reach the end of the last sentence
            const wordCount = Math.floor((numberOfWords / minutes) - (2 * numberOfMistakes));
            $('#sentence').text('End of Game! You had ' + Math.abs(wordCount) + ' words per minute').addClass('text-center');
            $('#feedback').empty();
            $('body').off();
            $('#yellow-block').hide();
            $('#target-letter').text('');
            //There should be a delay so the user can see the score. Then ask the user whether they would like to play again
            setTimeout(function () {
                $('#feedback').append('<button>Play Again!</button>')
                $('button').css({
                    'background-color': 'red',
                    'color': 'white',
                    'font': '15px Arial, sans-serif',
                    'padding': '15px',
                    'border-color': 'white',
                })
                $('button').click(function () {
                    location.reload();
                })
            }, 2000);

            return;
    
        }

        //queue up new sentence
        currentLetter = currentSentence[letterIdx];
        $('#sentence').text(currentSentence);
        $('#target-letter').text(currentLetter);
        $('#yellow-block').css('margin-left', '-17.5px')
        $('#feedback').empty();   
    } 
    
});

