import {Customer} from './customer'

let customer = new Customer("John","Smith",20);
customer.greeter();
console.log(`Customer's Age : ${customer.GetAge()}`);