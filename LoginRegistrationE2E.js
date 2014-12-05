casper.test.begin('Login and Registration End to End Test', function suite(test) {

    // Load the landing page and verify it is correct
    casper.start( urlPrefix + ".rocketlawyer.com", function() {
        this.echo("======= Beginning Test Suite =======");
        test.assertHttpStatus(200, 'Connected to Landing page');

    // can't remember where to look for 'Affordable Legal Services...'
        test.assertTitle("Affordable Legal Services, Free Legal Documents, Advice & Ask a Lawyer | Rocket Lawyer", 'Title is correct');
    });

    //Click the Sign Up button in the navigation bar
    casper.click ("/login-register.rl#/register?hd=navreg" class="rlHeaderTopRightLink" {
        test.done();
    });

    // how do I find an element for Continue button?

    //Register a new user
    "user is: "+username+"\n"

    //Confirm that the user is at the Dashboard after registration
    "rlHeaderTopRightAccountInfoNameEtc ng-binding"

    //log the user out
}); "rlHeaderTopIconProfileImage img" ng-src="/refresh_assets/img/navImages/avatarDefault.png"

    //how do I find an element for Sign Out option?

