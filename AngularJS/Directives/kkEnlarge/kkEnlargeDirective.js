'use strict';

var kkEnlarge = angular.module('kkEnlarge', []);
kkEnlarge.directive('kkEnlarge', directiveFunction);

function directiveFunction()
{
    
    function linkFunction(scope, element, attrs)
    {
        var scale = 1 + parseFloat(attrs.kkEnlarge);
        
        function onMouseEnter()
        {
            element.css('transform', 'scale('+ scale +')');
        }
        
        function onMouseLeave()
        {
            element.css('transform', 'scale(1)');
        }
        
        element.on('mouseenter', onMouseEnter);
        element.on('mouseleave', onMouseLeave);
        
    }
    
    var ddo = {
        restrict: 'A',
        link: linkFunction
    };
    
    return ddo;
    
}