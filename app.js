const products = [];
class ProductManager {
    constructor(title, description, price, thumbnail, code, stock) {
        (this.title = title),
            (this.description = description),
            (this.price = price),
            (this.thumbnail = thumbnail),
            (this.code = code),
            (this.stock = stock),
            (this.id = 1);
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        let producto = new ProductManager(
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        );
        producto.id = this.id;
        this.id++;
        let codigoExistenteOIncompleto = false;
        for (let i = 0; i < products.length; i++) {
            if (products[i].code === producto.code) {
                console.log("Este codigo ya existe");
                codigoExistenteOIncompleto = true;
                break;
            } else if (
                producto.title === undefined ||
                producto.description === undefined ||
                producto.price === undefined ||
                producto.thumbnail === undefined ||
                producto.code === undefined ||
                producto.stock === undefined
            ) {
                console.log("Se deben completar todos los campos");
                codigoExistenteOIncompleto = true;
                break;
            }
        }
        if (!codigoExistenteOIncompleto) {
            products.push({
                title: producto.title,
                description: producto.description,
                price: producto.price,
                thumbnail: producto.thumbnail,
                code: producto.code,
                stock: producto.stock,
                id: producto.id,
            });
        }
    }
    getProducts() {
        console.log(products);
    }
    getProductById(id) {
        let foundProduct = products.find((prod) => prod.id === id);
        if (foundProduct) {
            console.log("El item con el id que dio es: ", foundProduct);
        } else {
            console.log("Not found");
        }
    }
}

// const producto = new ProductManager();
// producto.addProduct("bici", "soy una bici", 20, "soy una img", "abc", 10);
// producto.addProduct("moto", "soy una moto", 20, "soy una img", "sdf", 10);
// producto.addProduct("auto", "soy un auto", 20, "soy una img", "jpk", 10);
// producto.addProduct("bici", "soy una bici", 20, "soy una img", "abc", 10);
// producto.addProduct("bici", "soy una bici", 20, "soy una img", "iii");
// producto.addProduct("soy una bici", 20, "soy una img", "sss", 10);
// producto.addProduct("auto", 20, "soy una img", "ttt", 10);
// producto.getProductById(3);

// producto.getProducts();
