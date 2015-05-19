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

  function passengerFilter (record) {
    if (record.age !== '') {
      return record;
    }
  }

  function findAgeAverage () {
    var totalArray = records.filter(passengerFilter);
    var total = {age: 0};
    var avg = 0;
    totalArray.forEach(function (record) {
      total.age += parseFloat(record.age);
    })
    avg = total.age/totalArray.length;
    return avg;
  }

  console.log("Average age was "+findAgeAverage());

  //What was the average female's age?

  function passengerFemaleFilter (record) {
    if (record.age !== ''&& record.sex == 'female') {
      return record;
    }
  }

  function findFemaleAgeAverage () {
    var totalArray = records.filter(passengerFemaleFilter);
    var total = {age: 0};
    var avg = 0;
    totalArray.forEach(function (record) {
      total.age += parseFloat(record.age);
    })
    avg = total.age/totalArray.length;
    return avg;
  }

  console.log("The average age of females on the titanic was "+findFemaleAgeAverage());


  //What was the average male's age?

  function passengerMaleFilter (record) {
    if (record.age !== ''&& record.sex == 'male') {
      return record;
    }
  }

  function findMaleAgeAverage () {
    var totalArray = records.filter(passengerMaleFilter);
    var total = {age: 0};
    var avg = 0;
    totalArray.forEach(function (record) {
      total.age += parseFloat(record.age);
    })
    avg = total.age/totalArray.length;
    return avg;
  }

  console.log("The average age of males on the titanic was "+findMaleAgeAverage());

  //What was the average survivor's age?

  function passengerSurvivorFilter (record) {
    if (record.age !== '' && record.survived > 0) {
      return record;
    }
  }

  function findSurvivorAgeAverage () {
    var totalArray = records.filter(passengerSurvivorFilter);
    var total = {age: 0};
    var avg = 0;
    totalArray.forEach(function (record) {
      total.age += parseFloat(record.age);
    })
    avg = total.age/totalArray.length;
    return avg;
  }

  console.log("The average age of survivors on the titanic was "+findSurvivorAgeAverage());

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

  function  percentSurvive () {
    var survivors = 0;
    var percentSurvive = 0;
    records.forEach(function (record) {
      if (record.survived>0) {
        survivors++;
      }
    })
    return percentSurvive = Math.round((survivors/records.length)*100);
  }

  console.log(percentSurvive()+"% of passengers survived.");

  //What percentage of survivors were female?

  function filterFemaleSurvived (record) {
    if (record.sex =='female' && record.survived == 1)
      return record;
  }


  function percentFemaleSurvived () {
    var survivors = 0;
    records.forEach(function (record) {
      if (record.survived>0) {
        survivors++;
      }
    })
    var percentSurvivorsFemale = records.filter(filterFemaleSurvived).length/survivors;
    return Math.round(percentSurvivorsFemale*100);
  }

  console.log(percentFemaleSurvived()+"% of survivors were female.");

  //What percentage of survivors were male?

  function filterMaleSurvived (record) {
    if (record.sex =='male' && record.survived == 1)
      return record;
  }


  function percentMaleSurvived () {
    var survivors = 0;
    records.forEach(function (record) {
      if (record.survived>0) {
        survivors++;
      }
    })
    var percentSurvivorsMale = records.filter(filterMaleSurvived).length/survivors;
    return Math.round(percentSurvivorsMale*100);
  }

  console.log(percentMaleSurvived()+"% of survivors were male.");

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
