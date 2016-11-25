import { NgModule }     from 'ng-metadata/core';
import { AppComponent } from './app.component';
import { AppService }   from './app.service';
import { AppState }     from './app.config';

@NgModule( {
    declarations: [
        AppComponent
    ],
    providers : [
        'ionic',
        'ngCordova',
        AppService,
        AppState
    ]
} )
export class AppModule {
}
