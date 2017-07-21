package com.fanniemae.stepdefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class login_stepdefination {
	
	@Given("^user is on SDETtraining\\.com home page$")
	public void user_is_on_SDETtraining_com_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		
		System.out.println("code to implement the GIVEN STEP will come here....");
	}

	@When("^user clicks log in button$")
	public void user_clicks_log_in_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		
		System.out.println("code to implement the WHEN STEP will come here....");
	}

	@Then("^user is on  login\\.page$")
	public void user_is_on_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		
		
		System.out.println("code to implement the THEN STEP will come here....");
	}
	
	


}
