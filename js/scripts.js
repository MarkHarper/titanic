(function () {
  'use strict';

  var records = csvToObjects(titanic, ['id', 'survived', 'pclass', 'name', 'sex',
   'age', '', '', 'ticket', 'fare', '', ''], true);

  console.log(records);

  //What's the total of all the fares?

  function findFareTotal () {
    var total = {fare: 0};
    records.forEach(function (record) {
      total.fare += parseFloat(record.fare);
    });
    return total.fare;
  }
  console.log("Fare total was " + findFareTotal());


  //What was the average fare?

  function findFareAverage () {
    var total = {fare: 0};
    records.forEach(function (record) {
      total.fare += parseFloat(record.fare);
    });
    var avg = total.fare/records.length;
    return avg;
  }
  console.log("Fare average was " + findFareAverage());

  //What was the average passenger age?

  function filterAge () {

  }

  function findAgeAverage () {

  }
  console.log("Average passenger age was " + findAgeAverage());

  //What was the average female's age?
  //What was the average male's age?
  //What was the average survivor's age?



  //What percentage were female?

  function  percentFemale () {
    var females = 0;
    var percentFemale = 0;
    records.forEach(function (record) {
      if (record.sex=='female') {
        females++;
      }
    })
    return percentFemale = Math.round((females/records.length)*100);
  }

  console.log(percentFemale()+"% of passengers were female.");

  //What percentage survived?

  function percentSurvive () {

  }

  //What percentage of survivors were female?
  //What percentage of survivors were male?

  //What percentage of passengers were male?

  function  percentMale () {
    var males = 0;
    var percentMale = 0;
    records.forEach(function (record) {
      if (record.sex=='male') {
        males++;
      }
    })
    return percentMale = Math.round((males/records.length)*100);
  }

  console.log(percentMale()+"% of passengers were male.");

})();
