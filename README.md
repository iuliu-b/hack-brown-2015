# hack-brown-2018

BrownSpeak randomly generates sentences composed of words and phrases "commonly used" by Brown Students. 
All functionality is scripted in the .js file.

Live website can be found at: http://iuliu-b.github.io/hack-brown-2018/

Gritty details:

On button press: First, an array is selected to act as a template. Such an array has blank spaces demarcated by "noun*", "adj*", etc. 
When such a marker is reached, a word from the corresponding part of speech array (generated from .txt files) is randomly chosen 
to fill the blank. When all blanks are filled, the strings are concatenated into a sentence and displayed.
