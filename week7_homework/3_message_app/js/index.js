var questions = ["What is your name?", "How's your day?", "What can I help you with today?", "OK. Give me a second to look into that."];
var answers = [];
var intCurrentQuestion = 0;

$(function(){

    askQuestion(intCurrentQuestion);

    $('#conversationForm').submit(function(submitEvent){
        submitEvent.preventDefault();
        var answer = $('#answer').val();
        sendAnswer(answer);
    });
});

function askQuestion(questionNumber)
{
    var question = questions[questionNumber];
    if(question)
    {
        $('#conversation').append('<li class="list-group-item ai">' + questions[questionNumber] + '</li>');
        intCurrentQuestion = questionNumber;
    }
}

function sendAnswer(answer)
{
    if(answers)
    {
        $('#answer').val('');
        $('#conversation').append('<li class="list-group-item human">' + answer + '</li>');
        answers.push(answer);
        askQuestion(intCurrentQuestion + 1);      
    }
}

