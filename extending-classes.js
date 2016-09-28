"use strict";

console.log("A way to format a Date:");
var now = new Date();
console.log((now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear());

console.log("Let's make a class that formats the date to be easily readable by humans:");
class DateFormatter extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[this.getMonth()] + ' ' + this.getDate() + ', ' + this.getFullYear();
  }
}

var myDateNow = new DateFormatter();
console.log(myDateNow.getFormattedDate());

console.log(" \nA way to add 7 days to a Date:");
myDateNow.setDate(now.getDate() + 7);
console.log(myDateNow.getFormattedDate());

console.log("Let's make a class that adds days to a Date:");
class DueDate extends DateFormatter {
  constructor(rentalType) {
    super();
    if (rentalType) {
      switch (rentalType) {
        case "disc":
          this.days = 14;
          break;
        case "book":
          this.days = 21;
          break;
        default:
          this.days = rentalType;
      }
    }
    this.checkedOut = new Date();
    this.setDate(this.checkedOut.getDate() + this.days);
    this.due = this.getFormattedDate();
    this.renewalsRemaining = 3;
  }
  
  sendCheckoutMessage() {
    let plural = this.days === 1? "day" : "days";
    let message = "Your rental is due in " + this.days + " " + plural + " on: " + this.due;
    return message;
  }
  
  renewCheckout() {
    if (this.renewalsRemaining) {
      this.renewalsRemaining -= 1;
      let plural = this.renewalsRemaining === 1? "renewal" : "renewals";
      this.setDate(new Date().getDate() + this.days);
      this.due = this.getFormattedDate();
      let message = "Renewal successful.  You have " + this.renewalsRemaining + " " + plural + " remaining.  " + this.sendCheckoutMessage();
      return message;
    } else {
      let message = "You renewed your rental 3 times and have no renewals remaining.  Your rental will accrue overdue fees if not returned by " + this.due + ".";
      return message;
    }
  }
}

var discRental = new DueDate("disc");
console.log("Disc Due Date is 14 days:");
console.log(discRental);
console.log(discRental.sendCheckoutMessage());

var bookRental = new DueDate("book");
console.log(" \nBook Due Date is 21 days:");
console.log(bookRental);
console.log(bookRental.sendCheckoutMessage());

var flashDriveRental = new DueDate(1);
console.log(" \nFlash Drive Due Date is 1 day:");
console.log(flashDriveRental);

console.log(" \nLet's add a function to decrement renewals:");
console.log(flashDriveRental.sendCheckoutMessage());
console.log(flashDriveRental.renewCheckout());
console.log(flashDriveRental.renewCheckout());
console.log(flashDriveRental.renewCheckout());
console.log(flashDriveRental.renewCheckout());
console.log(flashDriveRental);

