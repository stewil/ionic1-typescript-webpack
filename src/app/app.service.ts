import {Injectable, Inject}  from 'ng-metadata/core';

@Injectable()
export class AppService {
    constructor( @Inject('$log') private $log: ng.ILogService ) {
    }
}
