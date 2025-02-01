let age = prompt("Enter your age: ");
      let name = prompt("Enter your name: ");
      let citizen = confirm("Are you a citizen? Click OK, Cancel for No."); 
      
      if (age < 18) {
          alert(name + ", you are not eligible to vote.");
      } else if (!citizen) {
          alert(name + ", you are not a citizen and cannot vote.");
      } else {
          alert(name + ", you are eligible to vote!");
      }
let discountCode = "SAVE10"; 
let totalAmount = 100;  

if (discountCode === "SAVE10") {
  totalAmount -= totalAmount *0.01
  console.log("Discount applied: 10%");
} else if (discountCode === "SAVE20") {
  totalAmount -= totalAmount * 0.20; 
  console.log("Discount applied: 20%");
} else if (discountCode === "WELCOME") {
  totalAmount -= totalAmount * 0.15;
  console.log("Discount applied: 15%");
} else {
  console.log("Invalid discount code");
}
