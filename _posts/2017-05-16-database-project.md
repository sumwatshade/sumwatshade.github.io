---
layout: post
title: My Database Project
---
# Building Pollaroid 

Through my last semester at RIT, I encountered my first long-term team-based coding project.
Although my skills at writing algorithms and solutions were strong by this point, my team
quickly introduced me to my short-comings as a developer and provided me ways of improving.

We were tasked with developing the backend and frontend for a Java application that utilized
any database (the course was in database management). I grouped up with a set of distinguished
students in the interests of not only gaining a good grade, but more importantly making the most
of this new experience. Coming from a background in Physics, I have a strong grasp in problem
solving, but lack experience in enterprise development. 

We chose to write our frontend in Javascript, using Bootstrap for our themes and the React 
framework to create a responsive user experience. Our backend was written in Java and SQL, using mostly
the basic utilities of the native Java release. To allow communication between the frontend and backend
, we used a framework called Dropwizard. The entire code base was wrapped in Gradle, a tool used to allow
for quick and smooth building and deploying for an appllication.

As you might expect, this dichotomy of frameworks became quickly overwhelming for me, so at first I
just buried my head into the Java development. This was easy because from the course, I knew how the database
worked and how to create Data Access Objects (DAO) in Java. After one look at my code, however, my partners
indicated that half of my text could be replaced by annotations! 

To me it felt like I was barely doing any coding, and thus hurting the team effort. So I poured my soul into
the test framework. I did all the research I could to find good testing platforms, and found one in JUnit 5.
Looking up everything I could, I developed as many tests on the database as I could figure out how to. 
To test the effectiveness of my tests, I looked up information on code coverage, and using the built-in 
Intellij Code Coverage framework, I was able to develop tests that covered the whole backend. Along the way,
I discovered several bugs that critically affected the project, which was a testament to the need for testing.

One thing I didn't realize immediately was how quickly I came to adopt framework knowledge through experience.
At face value, working in new frameworks can be quite daunting, as I experienced with React, Gradle, and 
Dropwizard. But if you put in the time to really work with these frameworks, and work them into your own projects,
they really just exist for the benefit of the developer. I learned this through our simple database project, and 
it is a skill/lesson that I will take through my development career.

Pollaroid, the project that I helped develop, is available on <a href="https://github.com/harlanhaskins/Pollaroid">Github</a> 
and a running instance is available at <a href="https://pollaroid.club">this link</a>.
