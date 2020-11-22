package myRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Shailendra\\git\\TheEconomistJobs\\TheEconomistBDD\\src\\main\\java\\Features\\login.feature",
		glue= {"StepDefinition"},
		format= {"pretty","html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting"}
		monochrome=true, // generate the console output in a proper readable format
		strict=true,    //it will check if any step is not defined in step definition file
		dryRun=false  // to check the mapping b/w Feature file and Step Definitions file
		)


public class TestRunner {
	
}


//C:\\Users\\Shailendra\\git\\TheEconomistJobs\\TheEconomistBDD\\src\\main\\java\\StepDefinitions\\linksNavigation.java

