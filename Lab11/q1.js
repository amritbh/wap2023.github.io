/**
 * Create a simple Node script that converts 'www.miu.edu' domain name to the equivalent IP address.
 *  (Search and learn 'dns' module, resolve4) - For this exercise, you need to look up Node.js API by yourself

 */

const dns = require('dns');

// The domain name to be resolved
const domainName = 'www.miu.edu';


// Resolving the IPv4 addresses associated with the domain name
dns.resolve4(domainName, (error, addresses) => {
  if (error) {
    // If there's an error, log the error message
    console.error(`Error resolving domain: ${domainName}`);
    console.error(error);
  } else {
    // If resolution is successful, log the IP addresses
    console.log(`IP addresses for ${domainName}:`);
    addresses.forEach((address, index) => {
      console.log(`IP Address ${index + 1}: ${address}`);
    });
  }
});

//another way
const dns1 = require('dns');

// Resolve domain name to IP address
dns1.resolve4('www.miu.edu', (err, addresses) => {
  if (err) throw err;
  console.log(`IP address: ${addresses[0]}`);
});