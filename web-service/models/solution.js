var solution = require('cs-utils/model-primitives/hash')('solution');

solution.requiredParams = ['id','submitted_by','gist','imgur', 'score'];
solution.validations = [
  ['gist', /^https:\/\/gist\.github\.com\/[a-zA-Z0-9]+\/[a-zA-Z0-9]+\/?$/ ],
  ['imgur', /^https?:\/\/i\.imgur\.com\/[a-zA-Z0-9]+\.jpg$/ ]
];

solution.parseMap = {
  id : solution.filters.ifStrReturnInt
};

solution.postCreate = function ( thisSolution ) {
  var problemSolution = rqr('models/problem_solution');
  problemSolution.push( thisSolution.problem_id, thisSolution.id );
};

module.exports = solution;