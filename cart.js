///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const calculatePrice = cart.reduce((acc, curr) => acc + curr.price ,0)


console.log(calculatePrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {

    const taxAmount = cartTotal * tax

    const finalPrice = cartTotal - couponValue + taxAmount

    return finalPrice

}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

   name: I picked the name property so the restaurant has something associated with the customers information, this is a string
   returnCustomer: I picked the returnCustomer property to determine weather or not the restaurant has access to the customers order history or not, this is a boolean
   emailAddress: The reason I used emailAddress is so the restaurant can send promotional emails to the customer, this is a string
   orderHistory: This is an array of strings that contains the customers order history, so accessing their favorite things from the restaurant becomes easier if ordering online


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

custObject = [
    {
        name: 'Zach',
        returnCustomer: true,
        emailAddress: 'zachxwilliams98@gmail.com',
        orderHistory: ['Medium number 1, large number 5, '],
    }
]