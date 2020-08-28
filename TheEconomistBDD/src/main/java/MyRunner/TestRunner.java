package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Shailendra\\git\\TheEconomistJobs\\TheEconomistBDD\\src\\main\\java\\Features\\login.feature",
		glue= {"StepDefinitions"},
		format= {"pretty","html:test-output", "json:json_output/cucumber.json"},
		monochrome=true, // generate the console output in a proper readable format
		dryRun=false  // to check the mapping b/w Feature file and Step Definitions file
		)

//C:\\Users\\Shailendra\\git\\TheEconomistJobs\\TheEconomistBDD\\src\\main\\java\\StepDefinitions\\linksNavigation.java
public class TestRunner {

	
}
