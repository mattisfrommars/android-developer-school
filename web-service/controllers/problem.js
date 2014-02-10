module.exports = {
  index : function( q, req ) {
    q.resolve([
      {
        id : 1,
        name : "Hello, World",
        created_at : Math.floor( +new Date() / 1000 ),
        updated_at : Math.floor( +new Date() / 1000 )
      }
    ])
  },
  get : function ( q, req ) {

    var problem = rqr('models/problem');
    problem.findWith(1, ['solution'])
    .then(function( thisProblem ){
      var solution = thisProblem.solution;

      var fakeProblem = {
        id : 1,
        name : "Hello, World",
        created_at : Math.floor( +new Date() / 1000 ),
        updated_at : Math.floor( +new Date() / 1000 ),
        description : "Create an application that can run on a device or simulator, that displays the text \"Hello, World\".",
      };

      fakeProblem.solution = solution

      q.resolve( fakeProblem );

    }, q.reject );
  }
};