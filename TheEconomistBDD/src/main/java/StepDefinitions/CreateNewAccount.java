package StepDefinitions;


import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateNewAccount {
	
	WebDriver driver;

@Given("^user is already on Home Page of Jobs$")
public void user_is_already_on_Home_Page_of_Jobs() {
	System.setProperty("webdriver.chrome.driver","D:\\Driver\\chromedriver.exe");
	 driver = new ChromeDriver();
	 driver.get("https://jobs.economist.com");
	 driver.manage().window().maximize();
	 driver.manage().deleteAllCookies();
//	 driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
}

@When("^user clicks on Create account link$")
public void user_clicks_on_Create_account_link() {
	driver.findElement(By.linkText("Create account")).click();
}

@Then("^user is on Create account page$")
public void user_is_on_Create_account_page() {
//	String expectedLabel = "Create an account";
	String actualLabel = driver.findElement(By.xpath("//h1[@id='create-account']")).getText();
	Assert.assertEquals("Create an account", actualLabel);
}

@Then("^user enters new account details \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
public void user_enters_new_account_details(String title, String firstname, String lastname, String email, String password, String confirmpass) {
	
	driver.findElement(By.xpath("//input[@id='title']")).sendKeys(title);
	driver.findElement(By.xpath("//input[@id='firstname']")).sendKeys(firstname);
	driver.findElement(By.xpath("//input[@id='lastname']")).sendKeys(lastname);
	driver.findElement(By.xpath("//input[@id='emailaddress']")).sendKeys(email);
	driver.findElement(By.xpath("//input[@id='regpassword']")).sendKeys(password);
	driver.findElement(By.xpath("//input[@id='confirmpassword']")).sendKeys(confirmpass);
	driver.findElement(By.xpath("//input[@id='rememberme-register']")).click();
	driver.findElement(By.xpath("//input[@id='sitemarketing']")).click();
	driver.findElement(By.xpath("//input[@id='prefertextemails']")).click();
	driver.findElement(By.xpath("//input[@id='agreeTermsAndConds']")).click();



}


@Then("^user clicks on Create an account button$")
public void user_clicks_on_Create_an_account_button() {
	driver.findElement(By.xpath("//div[@class='field no-margin float-right']//input[@class='button button--brand']")).click();
	
}


@Then ("^Verify user account get created$")
public void verify_user_account_get_created() {
	String label2 = driver.findElement(By.xpath("//*[@id='main']/div/h1")).getText();
	Assert.assertEquals("Account created", label2);
	
}


@Then("^user clicks on Sign Out link$")
public void user_clicks_on_Sign_out_link() {
	driver.findElement(By.linkText("Sign out")).click();
}

@Then("^Close the browser$")
public void close_the_browser(){
	 driver.quit();
}




@When("^user clicks on Sign in link$") 
public void user_clicks_on_Sign_in_link()  { 
		driver.findElement(By.linkText("Sign in")).click();
 }


 
@Then("^user enters Sign in details \"([^\"]*)\" and \"([^\"]*)\"$") 
public void user_enters_Sign_in_details_and(String email, String password) { 
	driver.findElement(By.xpath("//input[@id='signinemail']")).sendKeys(email);
	driver.findElement(By.xpath("//input[@id='signinpassword']")).sendKeys(password);
}



@Then("^user clicks on Sign in button$")
public void user_clicks_on_Sign_in_button() {
	driver.findElement(By.xpath("//div[contains(@class,'field float-right')]//input[contains(@class,'button button--brand')]")).click();
	
}


@Then("^user clicks on Find a job link$")
public void user_clicks_on_Find_a_job_link() {
	driver.findElement(By.xpath("//a[contains(text(),'Find a job')]")).click();
		}
		
		
@Then("^user is redirected to the jobs page$")
public void user_is_redirected_to_the_jobs_page() {
	String jobsLabel = driver.findElement(By.xpath("//h1[contains(text(),'Found 27 jobs')]")).getText();
	Assert.assertEquals("Found 27 jobs", jobsLabel);
}

@Then("^user clicks on Jobs alerts link$")
public void user_clicks_on_Jobs_alerts_link() {
	driver.findElement(By.xpath("//a[contains(text(),'Job alerts')]")).click();
}

@Then("^user is redirected to the alerts page$")
public void user_is_redirected_to_the_alerts_page() {
	String alertLabel = driver.findElement(By.xpath("//h1[contains(text(),'Create a job alert')]")).getText();
	Assert.assertEquals("Create a job alert", alertLabel);
}
		
@Then("^user clicks on Search recruiters link$") 
public void user_clicks_on_Search_recruiters_link() {
	driver.findElement(By.xpath("//a[contains(text(),'Search recruiters')]")).click();
}
		
@Then("^user is redirected to the Search Recruiters page$")
public void user_is_redirected_to_the_Search_Recruiters_page() {
	String Label = driver.getCurrentUrl();
	Assert.assertEquals("https://jobs.economist.com/employers/", Label);
}

		
@Then("^user clicks on Jobs blog link$") 
		public void user_clicks_on_Jobs_blog_link() {
	driver.findElement(By.xpath("//a[contains(text(),'Jobs blog')]")).click();
}
		
@Then("^user redirected to Jobs blog page$")
public void user_is_redirected_to_the_Jobs_blog_page() {
	String Label = driver.getCurrentUrl();
	Assert.assertEquals("https://jobs.economist.com/careers/", Label);
}

//@Then ("^Verify the user signed in$")
//public void Verify_the_user_signed_in() {
//	String label3 = driver.findElement(By.xpath("//span[contains(@class,'user-nav__triangle icon-after')]")).getText();
//	Assert.assertEquals("Shailendra Rajput", label3);
//}


}
