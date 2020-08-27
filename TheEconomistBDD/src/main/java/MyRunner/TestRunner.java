package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\Shailendra\\TheEconomistBDD\\src\\main\\java\\Features\\login.feature",
		glue= {"StepDefinitions"},
		format= {"pretty","html:test-output", "json:json_output/cucumber.json"},
		monochrome=true, // generate the console output in a proper readable format
		dryRun=false  // to match the mapping b/w Feature file and Step Definitions file
		)
public class TestRunner {

	
}
