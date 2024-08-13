
// Function  : To calculate Item Index based on given item postion
// Parameter : itemPosition

export function getIndexValue(itemPosition) { 

    let itemIndex = itemPosition - 1;

    return itemIndex ;
  
};

// Function  : To Calculate yesterday's date
export function getYesterdayDate() {

    const dayjs = require('dayjs');
    
    const yesterday = dayjs().subtract(1, 'day').format('MM-DD'); 
    
    cy.log(" yesterday  = " +yesterday);

    return yesterday;

};
    
// Function  : To Get the same day as today but exactly 40 years ago

export function getDate40YearsAgo() {

    const today = new Date();
    const year = today.getFullYear() - 40;
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const searchDate = `${year}-${month}-${day}`;
    
    return searchDate;

};


// Function  : To assert Status Code
// Parameter : responseStatus, statusCode
export function assertStatusCode(responseStatus, statusCode) {

    expect(responseStatus).to.eq(statusCode);
    
};

// Function  : To assert property value
// Parameter : responseBody, propertyName, propertyValue
export function assertPropertyValue(responseBody, propertyName, propertyValue) {

    expect(responseBody).to.have.property(propertyName, propertyValue);
    
};

// Function  : To assert property exist and not empty in response body. This function works for properties thats are strings or arrays  
// Parameter : responseBody , propertyName
export function assertPropertyExistAndNotEmpty(responseBody, propertyName) {
    
    expect(responseBody).to.have.property(propertyName).to.not.be.empty;

};

// Function  : To assert property exist and not Null in response body. This function works for properties thats are Integre, strings or arrays  
// Parameter : responseBody , propertyName
export function assertPropertyExistAndNotNull(responseBody, propertyName) {
    
    expect(responseBody).to.have.property(propertyName).to.not.be.null;

};

