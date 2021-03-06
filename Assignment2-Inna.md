Item 1: Go to the Google Homepage and create a jQuery selector to select the image.
Answer:

```javascript
$("#hplogo")
<img alt="Google" height="95" id="hplogo" src="/images/srpr/logo11w.png" style="padding-top:112px" width="269" onload="window.lol&&lol()">
```

Item 2: Go to the MOMA homepage and select the today's hours (aka the underlined section 10:30 a.m.-5:30pm). 
Answer: 

```javascript
$(".moma-time")
[<a class=​"moma-time" href=​"/​visit/​plan">​…​</a>​]
```

Item 3: Using the .html() method we can change the text of a selector. Use the .html() method to change the current hours. 
Answer:

```javascript
$(".moma-time").html("12noon–1pm")
```
Here is the link to the screen shot: https://docs.google.com/a/rocketlawyer.com/drawings/d/1QDP4gmnN_3lRofS4nK2nCniVE486a_K__7AbDxhRfc4/edit .  So cool!  :)


Item 4: Go to ESPN and select the h2 tag for the main headline story
Answer:

```javascript
$(".top-story-headline")
[<div class=​"top-story-headline">​<h2>​Football Paradise Found​</h2>​<p>​…​</p>​<cite>​ESPN​</cite>​</div>​
```

Item5: Go to the SF Gate site and change the title of the sports section in the main menu to "Sports Hour"
Answer:
```javascript
$(".subMenuLink.sports.hdn-analytics").html("SPORT NEWS")
[<a href=​"/​sports/​" class=​"subMenuLink sports hdn-analytics">​SPORT NEWS​</a>​]
```
Link to the screen shot: https://docs.google.com/a/rocketlawyer.com/drawings/d/1GBIN8-iJbC-cyckGKZF4DLxWiyqbFT6fYi-EqnnMULc/edit

Item 6: Go to the Amazon site and change the "Hello, User" section to "Yo, User"
Answer:

```javascript
$("#nav-signin-title").html("Yo, Inna")
[<span id=​"nav-signin-title" class=​"nav-button-title nav-button-line1">​Yo, Inna​</span>​]
```
Link to the screen shot: https://docs.google.com/a/rocketlawyer.com/drawings/d/1nHUBAzvamFtHatT2KcJcT23XAFcXjc5u4I55hf4FjNE/edit


Item 7: Go to the Damn You Autocorrect site and change title of the post using the .html() method.
Answer:
```javascript
$(".post-title").html("ItsnevereverIzy")
[<h2 class=​"post-title">​ItsnevereverIzy​</h2>​]
```
Link to the screen shot of the original page:https://docs.google.com/a/rocketlawyer.com/drawings/d/1apuiBviyrUBsamQ4H8VlBNdgUpr7oqCeUjwp0RKVrrk/edit

Link to the screen shot of the modified page:https://docs.google.com/a/rocketlawyer.com/drawings/d/1GuRyDjEGTDzaVsrgactGcDkbHE1IjZJKWT3LAye2WTg/edit
