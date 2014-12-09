casper.test.begin('Login and Registration End to End Test', function suite(test) {
var userName = "itodortest" + Math.random() + "@gmail.com";
var password = userName;


    // =========Load the landing page and verify it is correct=========//
  casper.start("https://www.rocketlawyer.com", function() {
        this.echo("======= Beginning Test Suite =======");
        test.assertHttpStatus(200, 'Connected to Landing page');
        test.assertTitle('Affordable Legal Services, Free Legal Documents, Advice & Ask a Lawyer | Rocket Lawyer', 'Title is correct');
    });

    // =========Click on Sign Up link in the header============///
  casper.thenClick(".rlHeaderTopRightLink[href='/login-register.rl#/register?hd=navreg']", function() {
  this.echo("going to the registration page");

    // =========Verify that user is redirected to Registration page=============//
  casper.waitForUrl("/login-register.rl", function () {
    test.assertTitle("Login and registration", "Title matches the registration page");
  
  this.fillSelectors("form#registerForm", {
    "form#registerForm #email"  : userName,
    "form#registerForm #pass"   : userName
  }, true);
  
    this.echo("User is:  " + userName + "\n");
});



  




  });
    casper.run(function() {
        test.done();
    });
});



