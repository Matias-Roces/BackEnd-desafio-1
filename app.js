// Product Manager Class creates a manager of products
class ProductManager {
    constructor() {
        this.products = []
    }
    addProduct(productName, productDescription, productPrice, productThumbnail, productCode, productStock = 0) {
        const validProduct = productName && productDescription && productPrice && productThumbnail && productCode
        console.log(validProduct)
        if (!validProduct) {
            console.error(`Error: Some of data products is missing, please fill all the data of the new product`)
            return
        }
        const codeFinder = this.products.find((product) => product.code === productCode)
        if (codeFinder) {
            console.error(`The code ${productCode} is already in use. Please select another code for this product. `)
            return
        }

        const productId = this.products.length + 1
        const producto = {
            id: productId,
            title: productName,
            description: productDescription,
            price: productPrice,
            thumbnail: productThumbnail,
            code: productCode,
            stock: productStock
        }

        this.products.push(producto)
        console.log(`The product was added correctly.`)
    }
    getProducts() {
        return this.products
    }
    getProductById(productId) {
        const productFinder = this.products.find((product) => product.id === productId)
        if (!productFinder) {
            console.error("Not found.")
            return
        }
        console.log(`The product with the id number ${productId} is ${productFinder.title}`)
    }
}
// Program function testing
const productManager = new ProductManager()
productManager.addProduct("Banana", "From Ecuador", 400, "22", 70)
productManager.addProduct("Banana", "From Ecuador", 400, "this is a route", "22", 70)
productManager.addProduct("Apple", "Gaucho", 700, "this is a route", "22", 50)
productManager.addProduct("Apple", "Gaucho", 700, "this is a route", "23", 50)
productManager.addProduct("Orange", "Juicy", 350, "this is a route", "30", 120)
productManager.addProduct("Tomatoe", "Rounded", 600, "this is a route", "5", 55)

const allProducts = productManager.getProducts()
console.log(allProducts)

productManager.getProductById(2)
productManager.getProductById(6)

