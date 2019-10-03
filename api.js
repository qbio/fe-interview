
const data = require('./data.js');
module.exports.getPatients = (request, response) => {
    var patients = [];
    data.forEach((measurement) => {
      if (!patients.find((name) => name == measurement.name)) {
        patients.push(measurement.name);
      }
    })
    response.json(patients);
  }
  
  module.exports.getPatientMeasurements = (request, response) => {
    console.log(request.params.patient)
    var patientMeasurements = [];
    data.forEach((measurement) => {
      if (measurement.name == request.params.patient) {
        patientMeasurements.push(measurement);
      }
    });
  
    response.json(patientMeasurements);
  }