casper.test.begin('Login and Registration End to End Test', function suite(test) {

    // Load the landing page and verify it is correct
    casper.start( urlPrefix + ".rocketlawyer.com", function() {
        this.echo("======= Beginning Test Suite =======");
        test.assertHttpStatus(200, 'Connected to Landing page');
        test.assertTitle('Rocket Lawyer', 'Title is correct');
    });

    casper.run(function() {
        test.done();
    });
});
