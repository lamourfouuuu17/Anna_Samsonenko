import {Builder, By, WebDriver} from "selenium-webdriver";
import BasePage from "./basepage";

class HomePage extends BasePage {
    
    constructor(driver: WebDriver){ 
        super(driver);
    }

    async goToLoginPage(){

        await this.driver.findElement(By.id("login2")).click()
    }

    async goToLaptopPage(){


        await this.driver.sleep(1500)
        await this.driver.findElement(By.id("login2")).click();

    }
}
export default HomePage;



