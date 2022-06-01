
import {By, WebDriver, error} from "selenium-webdriver";
import BasePage from "./basepage";
class CartPage extends BasePage{
    

    constructor(driver: WebDriver){
        super(driver);
    }

    async placeOrder(name: string, country: string, city: string, card: string, month: string, year: string){
        await this.driver.findElement(By.className("btn btn-success")).click()
        await this.driver.sleep(1500);

        await this.driver.findElement(By.id("name")).sendKeys(name)
        await this.driver.findElement(By.id("country")).sendKeys(country)
        await this.driver.findElement(By.id("city")).sendKeys(city)
        await this.driver.findElement(By.id("card")).sendKeys(card)
        await this.driver.findElement(By.id("month")).sendKeys(month)
        await this.driver.findElement(By.id("year")).sendKeys(year)
        await this.driver.findElement(By.className("btn btn-primary")).click()
        await this.driver.sleep(2500);

    }

    async clickOk(){
        await this.driver.findElement(By
            .css("body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button")).click()
    }
}

export default CartPage;