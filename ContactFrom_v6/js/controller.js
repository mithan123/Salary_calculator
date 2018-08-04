var app = angular.module("mainApp",[]);
app.controller('calSalary',function($scope, calService)
{
    $scope.cal = function()
    {
        $scope.gSalary = calService.gross(parseInt($scope.basicSal),parseInt($scope.houseAll),parseInt( $scope.tax), parseInt($scope.medicalAll),parseInt($scope.transport))
        console.log("controller running")
    }
})
app.service('calService', function(salaryFactory)
{
    this.gross = function(basic,house, tax, medical, transport)
    {
        console.log("service running")
        sum = basic+house+medical+transport
        return salaryFactory.total(sum,tax)
    }
})
app.factory('salaryFactory', function()
    {
        console.log("factory running")
        var factory = {}
        factory.total = function(pay, Tax)
        {
            console.log("pay ="+pay)
            console.log("tax="+Tax)
            return (pay-Tax);
        }
        return factory
    })