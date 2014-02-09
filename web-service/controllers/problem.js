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
    q.resolve({
      id : 1,
      name : "Hello, World",
      created_at : Math.floor( +new Date() / 1000 ),
      updated_at : Math.floor( +new Date() / 1000 ),
      description : "Create an application that can run on a device or simulator, that displays the text \"Hello, World\".",
      solutions : [
        {
          submitted_by : {
            displayName : "Matthew Jewell"
          },
          id : "123",
          score : 0,
          gist : "https://gist.github.com/mattisfrommars/8899031",
          imgur : "http://i.imgur.com/ucDdMhg.jpg"
        }
      ]
    });
  }
};