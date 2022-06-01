import {By, WebDriver, Locator} from "selenium-webdriver";
import BasePage from "./basepage";

class Laptoppage extends BasePage{

    constructor(driver: WebDriver){
        super(driver);
    }

  
    async openLaptopDell(){

        await this.driver.sleep(1500);
        await this.driver.findElement(By.className("card-img-top img-fluid")).click()
    }
    async addToCart(){
        await this.driver.sleep(1500);
        await this.driver.findElement(By.className("btn btn-success btn-lg")).click()
        await this.driver.sleep(2000);
    }
    async goToCart(){
        await this.driver.switchTo().alert().accept()
        await this.driver.sleep(1500);
        await this.driver.findElement(By.xpath("//*[@id=\"cartur\"]")).click()
    }
}

export default Laptoppage;