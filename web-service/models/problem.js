var problem = require('cs-utils/model-primitives/hash')('problem');

problem.linkSolution = function ( problem ) {

  var deferred = this.defer();

  var problemSolution = rqr('models/problem_solution');
  var solution = rqr('models/solution');

  problemSolution.find( problem.id )
  .then(
    function ( solutionIds ) {
      return solution.findAll( solutionIds, [] ).promise();
    }
  )
  .then( deferred.resolve, deferred.reject );

  return deferred;

};

module.exports = problem;