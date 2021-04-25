import chai from 'chai';
import { userData } from "./test-data.js";
import { individualTraveler } from "./test-data.js";
import { trips } from "./test-data.js";
import { destinations } from "./test-data.js";
const expect = chai.expect;
import Traveler from "../Traveler.js";

// const individualTraveler = {
// "id": 1,
// "name": "Ham Leadbeater",
// "travelerType": "relaxer"
// };


describe('Traveler', () => {
  let traveler1, traveler2;

  beforeEach(() => {
    traveler1 = new Traveler(userData);
  });

  it('User should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('Should have an id number', () => {
    expect(traveler1.id).to.equal(1)
  })

  // it('Should be able to show me all of my trips', () => {
  //   expect().to.equal();
  // });
// });


// iteration 1
// should be able to show me all of my trips
//  A: filter method will get my trips return trip.userID === user.id




// should be able to tell me if a trip is past, present, upcomming, or pending
//  A: forEach method or map method trip and compare trip.date to current date (moment.js library) if trip.date < currentDate return 'past' ... (repeat for others)

// should be able to return the total amount spent on triops in a year + 10%
//  A: use getAllTrips method to .reduce iteratie through trips to get costs and add 10%

// const myTrips = getMyTrips() - this is the filter method from line 32;
// return myTrips.reduce((total, trip) => {
//   total += trip.cost + trip.cost * .10;
//   return total;
// }, 0);

// iteration 2
// should be able to make a trip request (main method)
//  - parameters
//    this method should be able to take a date, duration, number of travelers, and a destination
//    this method should return and estimated cost + 10% for trips
//    when a trip request is submitted it will add the trip to the dasboard with a status of pending
//

// LOGIN as a class
// validate user
// validate user password
// check if traveler (or agent)
// makesure the id is good
// will send fetch call to endpoint to get information for a single traveler (or more for travel agent)
// remeber, the login has a conditonal pathway for 2 different dashboards
