function Thing( word ){
  this.result = 'word';
};

mything = new Thing('original');

function processAnswers(data){
  //manage answer data
  var answerBody = data.items[0].body;
  mything.result = answerBody;
}

function processQuestionResult(data){
  var questionId = data.items[0].question_id;
  $.get("https://api.stackexchange.com/2.1/questions/"+ questionId + "/answers?order=desc&sort=votes&site=stackoverflow&filter=!bc0qAAU9ADlgOV",
      processAnswers);
}

function queryStackOverflow( query )
{
  // result = query.example;
  // use different members of the query object to
  // create a stack overflow search
  $.get("http://api.stackexchange.com/2.1/search?page=1&order=desc&sort=relevance&intitle=" + "No+route+matches" + "&site=stackoverflow",
    processQuestionResult);

  // alert(query);
  // debugger;
  // maybe process result into an object
  return mything.result;
}
