// import { loginRequired } from "../controllers/authController";
import { deleteOrder, getLatestTransactions, getUserOrders, updateOrder } from "../controllers/transactionController.js"

const transactionRoute = (app) => {
    app.route('/transaction')
        .get( getLatestTransactions)

    app.route('/transaction/:id')
        .get( getUserOrders)
        .delete(deleteOrder)

    app.route('/order/:order_id')
        .put(updateOrder)

}

export default transactionRoute;