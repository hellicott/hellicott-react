# Password Generator Task

This task is inspired by the [password game](https://neal.fun/password-game/) in which you have to try to create a valid password whilst the requirements get more and more complex.

We're going to make a program which can generate passwords, the requirements for which will get more and more complex.

This task lends itself well to a [TDD](https://martinfowler.com/bliki/TestDrivenDevelopment.html) approach where we introduce a new test for each password requirement we add. 
The generated password should meet each new requirement as well as continuing to meet each previous requirement

Below is our list of requirements, try to build them in order and one at a time - this helps the tests to be independant. If there is ambiguity in a requirement you may choose how you interpret and test it

1. the password must contain at least 6 characters
2. the password must contain a number
3. the password must contain both uppercase and lower case letters
4. the password must contain the current time (GMT+0:00)
5. the digits in the password must add up to 25
6. the password must include an [ISO 3 letter country code](https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes/blob/master/all/all.csv)
7. the password must contain the length of the password in roman numerals
