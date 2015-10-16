 // constructor function with name parameter
function Model(name) {
	// property 'type' assigned to parameter 'name'
	this.type = name;
	// property 'data' assigned to empty array
	this.data = [];
	// property '_id' assigned to 0
	this._id = 0;
}



console.log(Model);  // [Function: Model]
console.log(Model.prototype); // {}

// callback function we can use to return an object
// this is similar to how Mongoose operates
function returnThis(object) {
	return object;
}

Model.prototype.create = function(objectProperties, callbackFunction) {
	var objectContainer = {};
	objectContainer.subData = objectProperties;
	this._id++;
	objectContainer._id = this._id;
	objectContainer.timestamp = new Date();
	this.data.push(objectContainer);
	return callbackFunction(objectContainer);
};

var person = new Model('person');
	person.create({first_name: "Mister", last_name: "Robot"}, returnThis);
    person.create({first_name: "Stanley", last_name: "Steemer"}, returnThis);
    person.create({first_name: "Action", last_name: "Bronson"}, returnThis);
    person.create({first_name: "Jillian", last_name: "Murphy"}, returnThis);
    person.create({first_name: "Nichole", last_name: "DeJarden"}, returnThis);

Model.prototype.findById = function(objectId, callbackFunction) {
	for (var i = 0; i < this.data.length; i++) {
		if (this.data[i]._id === objectId) {
			return callbackFunction(this.data[i]);
		}
	}
};

Model.prototype.where = function(properties, callbackFunction) {
	var output = [];
	for (var i = 0; i < this.data.length; i++) {
		console.log(this.data[i].subData);
		for (var key in this.data[i].subData) {
			if (this.data[i].subData[key]  === properties[key]) {
				output.push(this.data[i]);
			}
		}
	}
	return callbackFunction(output);
};

  var people = [
    {first_name: "Mister", last_name: "Robot"},
    {first_name: "Stanley", last_name: "Steemer"},
    {first_name: "Action", last_name: "Bronson"},
    {first_name: "Jillian", last_name: "Murphy"},
    {first_name: "Mister", last_name: "DeJarden"}
  ];

var user = new Model('user');

people.forEach( function(person) {
    user.create(person, function(person){
	// console.log(person)
      return person;
    });
  });

// console.log(user.data);
// console.log(person.data);
user.where({first_name: "Mister"}, function(object) {
	console.log(object);
});
