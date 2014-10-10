1. Question - what is the DOM and what purpose does it serve?
Answer - DOM is a Document Object Model.  It serves as a cross-platform and language-independent convention.  It represents objects in HTML and XML documents and interacts with them. 

2. Question - what types are the following variables?:
Answer:    
    "Ivan" - string;
    4043 - integer;
    439.43 - float;
    ["Joe", "John", "Max"] - array;
    { "Name": "Joe, "GPA": 4.0 } - JS object;
    "Test" - string;

3. Question -  what does the following method return?
```javascript
document.getElementsByClassName("foo"); 
```
Answer: this method returns all the elements in the document/on the webpage with the specified lass name ('foo' in this case)

4. Question - how would you select the hero image container? 
Answer: 
```javascript
document.getElementsByClassName("rlHeroSection");
```
returns
```
HTMLCollection [ <div.rlHeroSection.michelle-g-hero> ]
```

5. Question - how many instances of the div tag are selected when you try to select by tag name?
Answer: 
```javascript
document.getElementsByTagName("div")
```

returns 167 instances of the div tag:
```
HTMLCollection [ <div#fb-root..fb_reset>, <div>, <div>, <div#HeaderApp.rlHeader.ng-scope.rlHeaderShowingFullNav>, <div#butterMessage>, <div#change1.butterMessageContent>, <div.clearfix>, <div#butterMessageTextContainer>, <div#butterMessageText>, <div#butterMessageButtonContainer>, 157 more… ]
```
