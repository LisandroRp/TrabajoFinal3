import ProductService from '../../service/ProductService.js'

class ProductController {

    getAll = async (req, res) => {
        ProductService.getAll().then(products => {
            res.render("./products/ProductMain", {productList: products, username: req.session.username})
        }).catch(err => {
            if(err.error == 404)
                res.render("./products/ProductMain", {productList: [], username: req.session.username})
            else{
                res.status(err.error)
                res.json(err)
            }
        })
    }
    getCart = async (req, res) => {
        console.log("hoal")
        ProductService.getAll().then(products => {
            res.render("./cart/CartMain", {productList: products, username: req.session.username})
        }).catch(err => {
            if(err.error == 404)
                res.render("./cart/CartMain", {productList: [], username: req.session.username})
            else{
                res.status(err.error)
                res.json(err)
            }
        })
    }
}
export default new ProductController();
