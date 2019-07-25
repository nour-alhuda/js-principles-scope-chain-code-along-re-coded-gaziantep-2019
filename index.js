/* Your code goes here */

  var customerName = 'bob';
  
  function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
  }
  
  function setBestCustomer(){
    bestCustomer = 'not bob';
  }
  
  function overWriteBestCustomer(){
    bestCustomer = 'maybe bob';
  }
  
  const leastFavoriteCustomer = 'Mona';
  
  function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Sami';
  } 
  let favoriteCustomer = 'Amer';
  function attemptTwoFavoriteCustomers() {
    let favoriteCustomer ='Ali';
    throw ('SyntaxError');
  }
  