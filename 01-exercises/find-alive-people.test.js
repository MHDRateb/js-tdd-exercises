function findAlive(writers) {
  // ToDo: Implement this function to make all the tests below pass
  // DO NOT Change the tests (you can add more tests though)
  var result = [];
  for (var i = 0; i < writers.length; i++) {
    if (writers[i].alive) {
      result.push(writers[i]);
    }
  }
  return result
}

function age(writers, number) {
  var result = [];
  for (var i = 0; i < writers.length; i++) {
    if (writers[i].age >= number) {
      result.push(writers[i]);
    }
  }
  return result
}


function findByName(writers, name) {
  var result = [];
  for (var i = 0; i < writers.length; i++) {
    if (writers[i].firstName.match(name) || writers[i].lastName.match(name)) {
      result.push(writers[i]);
    }
  }
  return result
}

function getByAge(writers, number, boolean) {
  var result = [];
  if (boolean) {
    for (var i = 0; i < writers.length; i++) {
      if (writers[i].age <= number) {
        result.push(writers[i]);
      }
    }
    return result
  }
  else {
    for (var i = 0; i < writers.length; i++) {
      if (writers[i].age >= number) {
        result.push(writers[i]);
      }
    }
    return result
  }

}


function findWriter(writers, searchCriteria) {
  var search = Object.keys(searchCriteria);
  // var result = writers.filter(function (writer, index, original) {

  // })
  var result = [];
  for (var i = 0; i < writers.length; i++) {
    var shouldSave = true;
    for (k = 0; k < search.length; k++) {
      if (writers[i][search[k]] !== searchCriteria[search[k]]) {
        shouldSave = false;
      }
    }
    if (shouldSave) {
      result.push(writers[i])
    }
  }
  return result
}

function getStatistics(writers){
  var alive=0;
  for (var i = 0; i < writers.length; i++) {
  if(writers[i].alive){
    alive++;
  }
}
return {'alive':alive,'dead':writers.length-alive}
}

test('function should return all the people who are start with s', function () {
  var persons = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    }
  ];
  var result = findByName(persons, "Sm");
  expect(result).toEqual([{
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  }])

});


test('function should return all the people who are name smith', function () {
  var persons = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    }
  ];
  var result = findByName(persons, "Smith");
  expect(result).toEqual([{
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  }])

});


test('function should return all the people over a certain age', function () {
  var persons = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    }
  ];

  var result = age(persons, 60);
  expect(result).toEqual([{
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }]);
});





test('this function return peoples under certain number if passing true', function () {
  var persons = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    },
  ];
  var result = getByAge(persons, 50, true);
  expect(result).toEqual([{
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  }])
});

test('function should retrieve only alive writers', function () {
  var persons = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    },
  ];

  var result = findAlive(persons);

  expect(result).toEqual([{
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }])
});


test('function should return writers who match to obejct keys', function () {
  var persons = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    },
  ];

  var result = findWriter(persons, {
    age: 64, alive: true
  });

  expect(result).toEqual([{
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }])
});



test('function should return object with number of writers who are alive and dead', function () {
  var persons = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 41,
      alive: true
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false
    },
    {
      firstName: "bell",
      lastName: "hooks",
      occupation: "writer",
      age: 64,
      alive: true
    },
  ];

  var result = getStatistics(persons);

  expect(result).toEqual({ alive: 2, dead: 2 })
});