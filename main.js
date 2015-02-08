templateArray=[["noun*","verb*","adj*","noun*"],
["The","noun*","is the","noun*","to the","noun*"],
["adj*","noun*","verb*","into","adj*","noun*"],
["The","noun*","is","adv*","in the","noun*","of","noun*"],
["Your","noun*","is","adj*","to your own actions"],
["Each of us","verb*","adj*","noun*"],
["noun*","is","adj*","in the","noun*","of","noun*"],
["adj*","noun*","verb*","adj*","noun*"],
["adj*","noun*","corresponds to","adj*","noun*"],
["noun*","verb*","adj*","noun*"],
["Although","noun*","verb*","rather","adv*",",","noun*","verb*","quite nicely"],
["On the one hand","noun*","verb*","noun*",",","but on the other hand","noun*","verb*","adv*"],
["It would seem that","noun*","is","adj*",";","how strange"],
["Sadly, I must admit that","noun*","verb*","noun*"],
["How poetic that","noun*","verb*",",","yet","noun*","verb*"],
["noun*","appears to be part","noun*",",","part","noun*"]]
var data1=""
var data2=""
var data3=""
var data4=""
 _get = function() {
    request = new XMLHttpRequest;
    request.open('GET', "verb.txt", false);
    
    request.onload = function() {
      if (request.status == 200){
        data1=request.responseText;
        console.log(data1)
      }
    };

    request.send();
    
  };

_get()

verbArray=data1.split(",")

_get = function() {
    request = new XMLHttpRequest;
    request.open('GET', "noun.txt", false);
    
    request.onload = function() {
      if (request.status == 200){
        data2=request.responseText;
        console.log(data2)
      }
    };

    request.send();
    
  };

_get()

nounArray=data2.split(",")

_get = function() {
    request = new XMLHttpRequest;
    request.open('GET', "adj.txt", false);
    
    request.onload = function() {
      if (request.status == 200){
        data3=request.responseText;
        console.log(data3)
      }
    };

    request.send();
    
  };

_get()

adjArray=data3.split(",")

_get = function() {
    request = new XMLHttpRequest;
    request.open('GET', "adv.txt", false);
    
    request.onload = function() {
      if (request.status == 200){
        data4=request.responseText;
        console.log(data4)
      }
    };

    request.send();
    
  };

_get()

advArray=data4.split(",")

console.log(verbArray)
console.log(nounArray)
console.log(adjArray)
console.log(advArray)


function getRandomElement(array){
	var ind = Math.floor((Math.random() * array.length))
	//console.log(ind);
	var elmt = array[ind];
	return elmt;

}
//takes in a template and returns a string with nouns, verbs, adjectives, and adverbs subbed in
function sentTraverse(template){
	for (var i=0;i<template.length;i++){
		switch (template[i]){
			case "noun*":
				template[i]=getRandomElement(nounArray)
				break;
			case "verb*":
				template[i]=getRandomElement(verbArray)
				break;
			case "adj*":
				template[i]=getRandomElement(adjArray)
				break;
			case "adv*":
				template[i]=getRandomElement(advArray)
				break;
			default:
				template[i]=template[i]

		}
	}
	var sentence = template[0];
	for (var i=1;i<template.length;i++){
		if ((template[i]===",")||(template[i]===";")){
			sentence=sentence+template[i];
		}
		else{


		sentence=sentence+" "+template[i];
			}
	}		
	var firstletter = sentence.substring(0,1);
	firstletter=firstletter.toUpperCase();
	sentence=firstletter + sentence.substring(1) + ".";
	return sentence;

	

}

function bearSpeak(){
	var original = getRandomElement(templateArray);
	var template = new Array
	for(var i=0;i<original.length;i++){
		template[i]=original[i]
	}
	var textToSet = sentTraverse(template);
	//document.getElementById("Brown_sayings").innerHTML = textToSet;
	$("#Brown_sayings")[0].innerHTML = textToSet;
	console.log(textToSet);

}

function tweetAction(){
	var thingToTweet = $("#Brown_sayings")[0].innerHTML;
	
	var urlToSet = "https://twitter.com/share?url="+encodeURIComponent("http://bearspeak.com")+"&text="+encodeURIComponent(thingToTweet);

	console.log(urlToSet);

	$(".linkToTwitter").attr('href', urlToSet);
}