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

Feel free to comment and pull your own approaches...