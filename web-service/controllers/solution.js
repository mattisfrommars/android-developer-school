module.exports = {
  create : function( q, req ) {
    var solution = rqr('models/solution');
    var problemId = req.params.problem_id;
    var solutionParams = req.body;

    if ( !solutionParams.submitted_by || !solutionParams.submitted_by.id ) {
      return q.reject( 400, "Bad Request" );
    }

    var submittedById = solutionParams.submitted_by.id;

    solutionParams.submitted_by = JSON.stringify( solutionParams.submitted_by );
    solutionParams.score = 10;
    solutionParams.problem_id = problemId;
    solutionParams.id = solution.hash([ problemId, solutionParams.submitted_by.id ].join(''));

    solution.createIfNotExists( solutionParams.id, solutionParams )
      .then( q.resolve, q.reject );

  }
}