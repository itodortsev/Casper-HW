casper.test.begin('Login and Registration End to End Test', function suite(test) {

    // Load the landing page and verify it is correct
    casper.start("https://www.rocketlawyer.com", function() {
        this.echo("======= Beginning Test Suite =======");
        test.assertHttpStatus(200, 'Connected to Landing page');
        test.assertTitle('Affordable Legal Services, Free Legal Documents, Advice & Ask a Lawyer | Rocket Lawyer', 'Title is correct');
    });
  casper.thenClick(".rlHeaderTopRightLink[href='/login-register.rl#/register?hd=navreg']", function() {
  this.echo("=======Registering a user========");
  });
    casper.run(function() {
        test.done();
    });
});

