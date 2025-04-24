/*
51. Extract the Domain Name From a URL
Write a function that given an input URL, returns its domain name.
*/
const domainName = url => {
    let word = url.replace('www.', '').replace('http://', '').replace('https://', '')
    return word.split('.')[0]
  };
  
  console.log(domainName('www.google.ca')); // google
  console.log(domainName('http://google.com')); // google
  console.log(domainName('https://google.com')); // google
  console.log(domainName('http://google.co.jp')); // google
  console.log(domainName('https://www.google.com')); // google