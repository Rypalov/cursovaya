function listCtrl($http, $location, $rootScope) {


    let vm = this;
    vm.title = "Каталог товаров";

    let p1 = $http.get('/api/practics', {
        headers : {
            token: localStorage.getItem('token')
        }
    });


    p1.then(res=>{
        vm.list = res.data;
    }, err=>{
        $location.path('/login');
    });



    vm.test = localStorage.getItem('test');

}