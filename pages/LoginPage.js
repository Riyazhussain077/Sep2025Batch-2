exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page;
        this.loginLink = '#login2';
        this.userNameInput = '#loginusername';
        this.passWordInput = '#loginpassword';
        this.loginButton = '[onclick="logIn()"]';
    }

    async lauchUrl() {
        await this.page.goto('https://www.demoblaze.com/');
    };

    async login(userName, passWord) {
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.userNameInput).fill(userName);
        await this.page.locator(this.passWordInput).fill(passWord);
        await this.page.locator(this.loginButton).click();
    }
}