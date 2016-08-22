# punchcardjs
an experiment about u+1680

Just a quick little experiment, heavily inspired by [@jagracey](https://github.com/jagracey), who made an awesome project about [unicode](https://github.com/jagracey/Awesome-unicode).

On load, it searches all script tags' contents. If there is a u+1680 char, it tries to decode. It is just binary code (space is a zero, u+1680 is a one) which is converted to chars. The odd thing about it is, that u+1680 looks like a dash but it is interpreted as a space.

Demo: http://codepen.io/terabaud/pen/pbBAYb

Used resources: 
https://github.com/jagracey/PhantomScript
https://github.com/jagracey/Awesome-unicode
