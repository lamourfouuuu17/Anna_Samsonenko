import {expect} from 'chai';
import 'mocha';
import {Builder, By, WebDriver} from 'selenium-webdriver';
import LoginPage from '../pages/loginpage';
import HomePage from '../pages/homepage';
import Laptoppage from '../pages/laptoppage';
import CartPage from '../pages/cartpage';


describe('Demoblaze testing script', () => {


    let driver: WebDriver;
    let loginpage: LoginPage;
    let homepage: HomePage;
    let laptoppage: Laptoppage;
    let cartpage: CartPage;

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        loginpage = await new LoginPage(driver);
        homepage = await new HomePage(driver);
        laptoppage = await new Laptoppage(driver);
        cartpage = await new CartPage(driver);
    });
    it('open home page test', async () => {
        let url = 'https://www.demoblaze.com/';
        await homepage.goToURL(url);
        await homepage.goToLoginPage();
        expect(await homepage.getURL()).to.equal('https://www.demoblaze.com/');
    }).timeout(5000);

    it('login test', async () => {
        await driver.sleep(1500);
        await loginpage.loginInto('annasamsonenko', '1234');
        expect(await driver.findElement(By.id("logout2")).isEnabled());
    }).timeout(20000);


    it('open laptop page test', async () => {
        await homepage.goToLaptopPage();
        await driver.sleep(1500);
        expect(await driver.findElement(By.xpath("//*[@id=\"tbodyid\"]/div[1]/div/a/img"))
            .getAttribute("src"))
            .to.equal('https://www.demoblaze.com/imgs/sony_vaio_5.jpg');
    }).timeout(15000);


    it('open laptop Dell i7 test', async () => {
        await laptoppage.openLaptopDell();
        expect(await laptoppage.getURL()).to.equal("https://www.demoblaze.com/prod.html?idp_=12");
    }).timeout(15000);

    it('add to cart test', async () => {
        await laptoppage.addToCart();
        expect(await driver.switchTo().alert().getText()).to.equal("Product added.");
    }).timeout(15000);

    it('go to cart test', async () => {
        await laptoppage.goToCart();
        expect(await laptoppage.getURL()).to.equal("https://www.demoblaze.com/cart.html");
    }).timeout(15000);

    it('place order test', async () => {
        await cartpage.placeOrder("Anna","Ukraine","Kyiv","8750237407531753","11","2024");
        expect(await driver.findElement(By.css("body > div.sweet-alert.showSweetAlert.visible"))
            .getAttribute("class")).to.equal("sweet-alert  showSweetAlert visible");
    }).timeout(15000);

    it('click ok test', async () => {
       await cartpage.clickOk();
        expect(await cartpage.getURL()).to.equal("https://www.demoblaze.com/index.html");
    }).timeout(15000);

    after(async () => {
        await driver.quit();
    });

});
