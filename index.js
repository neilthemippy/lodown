'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @ return 
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}



    
module.exports.each = each;


/* 
identity: Function takes in any input value and treturn that value unchanged 

@param { any Value }; Function takes in any input value. 

@return {Any Value}; Function returns input value unchanged.




*/ 
 function identity(value){
    return value; 
    
    }; 
module.exports.identity = identity; 