/*
* Author: Cecilia Michel Puente
* Created: Feb 15, 2022
*License:Public Domain
*/

// Define Variables:
myTransport = ["Fiat 124 Spider", "bus","car","airplane","motorcycle"
  ];

myMainRide = {
    make:"Fiat",
    model:"124 Spider",
    color: "black",
    year: 2020,
    age: function () {
      return 2020 - this.year;
    }
  }
// output
document.writeln("Kinds of transportation I use:", myTransport, "</br>");
document.writeln("MyMainRide: <pre>",
          JSON.stringify(MyMainRide, null, '\t'), "</pre>");
