'use strict';

var kkNumbersOnly = angular.module('kkNumbersOnly', []);
kkNumbersOnly.directive('kkNumbersOnly', directiveFunction);

function directiveFunction()
{
    
    function linkFunction(scope, element, attrs, ngModelController) 
    {
        
        function parserFunction(viewValue)
        {
            
            if(viewValue) {
                var onlyDigits = viewValue.replace(/\D/g,'');
                var limit = attrs.kkNumbersOnly;
                if(limit) {
                    onlyDigits = onlyDigits.substring(0, limit);
                }
                if(viewValue !== onlyDigits) {
                    ngModelController.$setViewValue(onlyDigits);
                    ngModelController.$render();
                }
                return onlyDigits;
            }
            else
                return viewValue;
            
        }
        ngModelController.$parsers.push(parserFunction);
        
    }
    
    var ddo = {
        require: 'ngModel',
        restrict: 'A',
        link: linkFunction
    };
    
    return ddo;
}