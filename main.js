// The learning objective for this challenge is to write a getter for the comboPrice property of a pizza restaurant. This lets you explore the concept of calculated properties.

// Up to this point, we have used methods (i.e. functions on objects) to perform logic and calculations needed for those objects. Properties are simple, primitive values like "John", 100, and true. With the power of getters and setters in your classes, you can still have properties, but their value is calculated via a function rather than being simple assignment and retrieval.

// Take a look at the Restaurant class example from earlier. Note how it uses methods to set some values ( the menu prices ) and calculate others ( the combo meal price ). Those work fine, but we can also use special functions called getters and setters to allow us to get or set values as properties.

// Consider the comboPrice() method we added to the Restaurant object. comboPrice itself is not a behavior, or a process, of the Restaurant, but you had to write it as a method because you needed to add together prices from the menu and return the calculated value.

// By putting the keyword of get in front of the method name (see below) you can make a method behave as if it was a property.

class Restaurant {
  constructor (props) {
      this.comboDiscount = props.discount
      this.menu = props.menu
  }

  get comboPrice () {
    // Add logic here to calc and return combo price
    let totalPrice = 0
   for (const food in this.menu) {
     totalPrice += this.menu[food]
   }
  
 
// toFixed outputs a string.  the 2 is for 2 decimal spaces
    return `$${(totalPrice * this.comboDiscount).toFixed(2)}`
  }
}

const bobsBurgers = new Restaurant({
  discount: 0.85,
  menu: {
      fries: 1.29,
      burger: 3.69
  }
})

const xrest  = new Restaurant({
  discount: 0.50,
  menu: {
      pizza: 2.00,
      soda: 5.00
  }
})

/*
  Note the lack of parenthesis after comboPrice.
  It's a property. As an example, let's assume that
  it returns 4.99.
*/
console.log(bobsBurgers.comboPrice)
console.log(xrest.comboPrice)



/*
  It is also a read-only property since you did not define
  a setter. So while the following code will not throw an error, it won't change the output.
*/

// set combo (items) {
//   if (typeof(items) === "array")
//   this._combo = items
// }

// get combo() {
//   return this._combo
// }
