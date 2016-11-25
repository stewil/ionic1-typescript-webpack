import {Component, OnInit, Inject} from 'ng-metadata/core';
import {AppService}                from './app.service';

@Component({
    selector  : 'ionic-app',
    template  : '<ion-nav-view></ion-nav-view>',
    styles    : [require('./app.scss')]
})
export class AppComponent implements OnInit {

    constructor( @Inject('$log') private _$log: ng.ILogService,
                 private appService: AppService ) {
    }

    ngOnInit() {
    }
}
