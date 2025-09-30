exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page;
        this.productCount = '//tbody[@id="tbodyid"]/tr/td[2]';
    }

    async CheckProductInCart(productName) {
        const productsInCart = await this.page.$$(this.productCount)
        for (const product of productsInCart) {
            console.log(await product.textContent())
            if (productName === await product.textContent()) {
                break;
            }
        }
        return true;
    }
}