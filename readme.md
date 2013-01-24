Javascript Pong using Canvas
============================

Here's the [demo](http://sunwooz.xp3.biz/ "Demo").

Goals
-----

+ Don't use frameworks/libraries except node.js
+ AI or human opponent
  + Use node.js for networked-based multiplayer functionality
+ Smooth Animations
+ Automatically resize as window is resized.

Known Bugs
----------

+ Speed of ball is vastly different in different browsers
  + Chrome is a lot faster than Firefox
+ Top and bottom of paddle doesn't work
+ Framerate suffers/ball goes through paddle -- solution: add deltatime based animation
