// Product Manager Class creates a manager of products
class ProductManager {
    constructor() {
        this.products = []
    }
    // return a boolean validating a product attributes
    validProduct(product) {
        return (
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock
        )
    }
    addProduct(product) {
        // ask if it was wrote all the required data
        if (!this.validProduct(product)) {
            // if isnt valid, show an error
            console.error(`Error: Some of data products is missing, please fill all the data of the new product`)
        } else {
            //ask if it the code is repeated
            const codeFinder = this.products.find((prod) => prod.code === product.code)
            if (codeFinder) {
                //if the code is repeated, show an error
                console.error(`The code ${product.code} is already in use. Please select another code for this product. `)
            } else {
                // if all valid, set the id by the length of the array and push the product object
                const productId = this.products.length + 1
                product.id = productId
                this.products.push(product)
                console.log(`The product was added correctly.`)
            }
        }
    }
    getProducts() {
        return this.products
    }
    getProductById(productId) {
        //ask to the array if some product has the id
        const productFinded = this.products.find((prod) => prod.id === productId)
        if (productFinded) {
            // return the product with that id
            return productFinded
        }
        else {
            // if not found, show this error
            console.error("Not found.")
        }
    }
}

// Program testing
const productManager = new ProductManager()
//incomplete product
productManager.addProduct({
    title: "Banana",
    description: "Ecuador",
    price: 400,
    thumbnail: 'ruta/bananaE.jpg',
    code: 'P001'
})
//complete products
productManager.addProduct({
    title: "Banana",
    description: "Ecuador",
    price: 400,
    thumbnail: 'ruta/bananaE.jpg',
    code: 'P001',
    stock: 50
})
//complete but repeating code
productManager.addProduct({
    title: "Apple",
    description: "Gaucho",
    price: 600,
    thumbnail: 'ruta/appleG.jpg',
    code: 'P001',
    stock: 60
})
productManager.addProduct({
    title: "Apple",
    description: "Gaucho",
    price: 600,
    thumbnail: 'ruta/appleG.jpg',
    code: 'P002',
    stock: 60
})
productManager.addProduct({
    title: "Orange",
    description: "Juicy",
    price: 350,
    thumbnail: 'ruta/orange.jpg',
    code: 'P003',
    stock: 45
})
productManager.addProduct({
    title: "Tomatoe",
    description: "Rounded",
    price: 480,
    thumbnail: 'ruta/tomatoe.jpg',
    code: 'P004',
    stock: 20
})

// save the array of products in "allProducts and show it"
const allProducts = productManager.getProducts()
console.log(allProducts)

// get Products by Id and show them if they are in the main array
const product1 = productManager.getProductById(1)
if (product1)
    console.log(`The product which id is 1 is ${product1.title}`)

const product2 = productManager.getProductById(2)
if (product2)
    console.log(`The product which id is 2 is${product2.title}`)
//id that doesnt exist to check the error
const product3 = productManager.getProductById(8)
if (product3)
    console.log(`The product which id is 2 is${product3.title}`)
