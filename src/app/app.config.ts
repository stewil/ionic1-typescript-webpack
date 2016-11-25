AppState.$inject = ['$stateProvider'];
export function AppState($stateProvider) {
    $stateProvider
        .state('app', {
            url      : '',
            abstract : true,
            template : require('./app.html')
        });
}
