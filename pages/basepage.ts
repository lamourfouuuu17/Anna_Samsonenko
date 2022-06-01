import {WebDriver} from 'selenium-webdriver';
import { urlIs } from "selenium-webdriver/lib/until";

class BasePage {
    protected driver: WebDriver;
    
    constructor(driver: WebDriver){
        this.driver = driver;
    }

    async goToURL(theURL: string){
        await this.driver.get(theURL);
    }

    async getURL(){
        return await this.driver.getCurrentUrl();
    }

    
}
export default BasePage;
