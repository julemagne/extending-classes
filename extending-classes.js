"use strict";

console.log("A way to format a Date:");
var now = new Date();
console.log((now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear());

console.log("Let's make a class that formats the date to be easily readable by humans:");
class myDateFormatter extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[this.getMonth()] + ' ' + this.getDate() + ', ' + this.getFullYear();
  }
}

var myDateNow = new myDateFormatter();
console.log(myDateNow.getFormattedDate());

console.log("A way to add 7 days to a Date:");
myDateNow.setDate(now.getDate() + 7);
console.log(myDateNow.getFormattedDate());

console.log("Let's make a class that adds days to a Date:");
class dueDate extends myDateFormatter {
  constructor() {
    super();
  }

  discDueDate() {
    this.setDate(new Date().getDate() + 14);
    this.days = 14;
    this.due = this.getFormattedDate();
    return this;
  }
  
  bookDueDate() {
    this.setDate(new Date().getDate() + 21);
    this.days = 21;
    this.due = this.getFormattedDate();
    return this;
  }
  
  customDueDate(days) {
    this.setDate(new Date().getDate() + days)
    this.days = days;
    this.due = this.getFormattedDate();
    return this;
  }
  
  sendCheckoutMessage() {
    let plural = this.days === 1? "day" : "days";
    var message = "Your rental is due in " + this.days + " " + plural + " on: " + this.due;
    return message;
  }
}

var discRental = new dueDate().discDueDate();
console.log("Disc Due Date is 14 days:")
console.log(discRental);
console.log(discRental.sendCheckoutMessage());

var bookRental = new dueDate().bookDueDate();
console.log("Book Due Date is 21 days:")
console.log(bookRental);
console.log(bookRental.sendCheckoutMessage());

var flashDriveRental = new dueDate().customDueDate(1);
console.log("Flash Drive Due Date is 1 day:")
console.log(flashDriveRental);
console.log(flashDriveRental.sendCheckoutMessage());

