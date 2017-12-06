# NgrxFirestoreExamples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0 using [Nrwl Nx](https://nrwl.io/nx).

# Purpose

This project shall be a platform showing all the different possibilities connecting Firestore with an Angular app using ngrx.
The focus lays on loading the data into the store. Manipulating data is not included.

There are several ways how to handle the authentification and the initial loading of data.

On several platforms there is the question of best practice for using the angularfire2 library and combine it with ngrx.
With these examples I want to reproduce them and discuss the pros and cons.

I am using nrwl as I think the lib structure is a good place to seperate all the different examples in one repo.
There is a lib for the the database access functions and different lazy loaded libs for different connections to ngrx.

The live example was NOT build in production to get the log outputs https://ngrx-firestore-examples.firebaseapp.com

Feel free to comment and pull your own approaches...

# Setup

--APP

The App just acts as a container for the authentication and the different libs. It handles the login/logout and routes via the nav buttons to the different libs.

--auth

Auth is the lib handling the authentication. For my database a setup a fake user with a fake password. This is neccessary to to similate the problems occour when the observables are still hot but the user is not authenticated anymore.

--db

Db is the lib to handle all database connections. Pretty straight forward and nothing special to that for the moment.

# first

First lib handling the data with ngrx entity and the advantage of the firestore valueChanges() function.
Basically, in the effects class I linked the valueChanges() with actions from the store. In this case any updates happen on the server side will reflect in the store automatically. 
When updating, deleting or adding new values it can be done directly on the database without using the store. This is the pessimistic approach. Only when the data changed in the database the store will get updated.
It works even offline and the firestore modules will update the database when back online. Unfortunately, not when we reload the app before the device gets back online.