'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// MEAN //

/**
* FUNCTION mean( lambda )
*	Computes the distribution mean for a Poisson with parameter lambda.
*
* @param {Number} lambda - mean parameter
* @returns {Number} distribution mean
*/
function mean( lambda ) {
	if ( !isPositive( lambda ) ) {
		return NaN;
	}
	return lambda;
} // end FUNCTION mean()


// EXPORTS

module.exports =  mean;
