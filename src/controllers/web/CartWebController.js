import CartDao from '../../dao/CartDao.js'

class ProductController {

    getCart = async (req, res) => {
        CartDao.getByIdUser(req.session.idUser).then(cart => {
            res.render("./cart/CartMain", {productList: cart.products, username: req.session.username})
        }).catch(err => {
            if(err.error == 404)
                res.render("./cart/CartMain", {productList: [], username: req.session.username})
            else{
                res.status(err.error)
                res.json(err)
            }
        })
    }
    addProduct = async (req, res) => {
        CartDao.addProduct(req.session.idUser, req.body).then((response) => {
            console.log(response)
            res.render('./messagesScreen/Success', {message: response.response, idUser: req.session.idUser})
        }).catch(err => {
            res.status(err.error)
            res.json(err)
        })
    }
}
export default new ProductController();
