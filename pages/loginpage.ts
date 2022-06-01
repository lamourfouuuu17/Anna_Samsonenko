import {By, WebDriver} from "selenium-webdriver";
import BasePage  from "./basepage";

class LoginPage extends BasePage {

    constructor(driver: WebDriver){
        super(driver);
    }

    async loginInto(log: string, pass: string){
        await this.driver.findElement(By.id("loginusername")).sendKeys(log);
        await this.driver.findElement(By.id("loginpassword")).sendKeys(pass);
        await this.driver.findElement(By.className("btn btn-primary")).click();

    }

}
export default LoginPage;