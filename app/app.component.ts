//Angular is also modular. It is a collection of library modules. Each library is itself a module made up of several, related feature modules.
//The name of the file (without extension) is usually the name of the module. Accordingly, 'app.component' is the name of our first module.
//Modules rely on other modules.In TypeScript Angular apps, when we need something provided by another module, we import it.

import {Component} from 'angular2/core';

/*
** A prefix of '@' represents Decorator (metadata)
** @Component indicates that this class is an Angular component
** A configuration object is passed to the @Component method
** Angular creates and displays an instance of the AppComponent wherever it encounters a 'my-app' element in the HTML.
*/
@Component({
	selector: 'my-app',
	template: '<h1>My SECOND Angular 2 App</h1>'
})

//The act of exporting turns the file into a module.
//A class becomes an Angular component when we give it metadata.	
export class AppComponent { }
