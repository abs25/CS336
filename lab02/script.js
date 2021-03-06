
/**This is an object prototype for a person. It includes features for names, birthdates, friends, and greeting.
*
*	@author abs25
*	@version 9/14/16
*/

//create the person class
var Person = function (name, birthdate, friends, greeting) {
	this.name = name;
	this.birthdate = new Date(birthdate); //put it in date form
	this.friends = friends;
	this.greeting = greeting;
};

//accessor to get a person's name
Person.prototype.getName = function() {
	return this.name;
}
//mutator to change a person's name
Person.prototype.changeName = function(newName) {
	this.name = newName;
}

//adapted from Naveen Jose, http://jsfiddle.net/codeandcloud/n33RJ/
//returns the person's age
Person.prototype.getAge = function(){
	var today = new Date();
	var age = today.getFullYear() - this.birthdate.getFullYear();
	var month = today.getMonth() - this.birthdate.getMonth();
	if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

//return list of friends
Person.prototype.getFriends = function(){
	var friendList = "";
	//loop through the friend array
	for(var i = 0; i < this.friends.length; i++) {
		//this if statement makes sure that there is no comma after the last friend
		if(i < this.friends.length - 1) {
			friendList += this.friends[i] + ", "; //add each friend to the string
		} else {
			friendList += this.friends[i]; //add last friend without comma
		}
	}
	return friendList; //return the string with all the friends
}

//mutator to add a friend
Person.prototype.addFriend = function(newFriend) {
	this.friends.push(newFriend);
}

//print a greeting
Person.prototype.printGreeting = function() {
	console.log(this.greeting);
}

//create a Student class
function Student(name, birthdate, friends, major, greeting) {
	//make it a Person
	Person.call(this, name, birthdate, friends, greeting);
	this.major = major;
}

//Whenever a student is created, create a person
Student.prototype = Object.create(Person.prototype);
// Set the "constructor" property to refer to Student
Student.prototype.constructor = Student;

//accessor for major
Student.prototype.getMajor = function(){
	return this.major;
}


/////////
//tests//
/////////
//create two people
var p1 = new Person("Austin", "04/02/95", ["Karson", "Chris"], "I'm a person!");
var p2 = new Person("Chris", "04/02/96", ["Derek", "Austin"], "Hi, I'm another person!");

//print out the object
console.log(p1);
console.log(p2);

//get the names of both people and print it out
console.log("P1 name: " + p1.getName());
console.log("P2 name: " + p2.getName());

//change the name of the second person and print it out
p2.changeName("Spencer");
console.log("P2 changed name: " + p2.getName());

//get age of both people
console.log("P1 age: " + p1.getAge());
console.log("P2 age: " + p2.getAge());

//print out list of friends for both people
console.log("P1 friends: " + p1.getFriends());
console.log("P2 friends: " + p2.getFriends());

//add two friends to p1
p1.addFriend("Derek");
p1.addFriend("Lydia");
console.log("P1 friends and new friends: " + p1.getFriends());

//print out greetings for both people
p1.printGreeting();
p2.printGreeting();

//tests for student
//create a student
var s1 = new Student("Derek", "05/03/95", ["Austin", "Chris"], "Computer Science", "Hi, I'm a student!");
var s2 = new Student("Lydia", "06/25/94", ["Derek", "Chris"], "Computer Science", "Hi, I'm another student!");

//make sure both students are instances of a person
console.log(s1 instanceof Person);
console.log(s2 instanceof Person);

//get some of the things from Person
console.log("S1 name: " + s1.getName());
console.log("S2 name: " + s2.getName());
console.log("S1 age: " + s1.getAge());
console.log("S2 age: " + s2.getAge());
console.log("S1 friends: " + s1.getFriends());
console.log("S2 friends: " + s2.getFriends());

//make sure mutators work
s1.changeName("Drew");
console.log("S1 new name: " + s1.getName());
s2.addFriend("Drew");
console.log("S2 friends and new friends: " + s2.getFriends());

//make sure the student properties work
console.log("S1 major: " + s1.getMajor());
console.log("S2 major: " + s2.getMajor());
s1.printGreeting();
s2.printGreeting();
