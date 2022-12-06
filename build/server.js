"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var products_1 = __importDefault(require("./handlers/products"));
var users_1 = __importDefault(require("./handlers/users"));
var orders_1 = __importDefault(require("./handlers/orders"));
var dashboard_1 = __importDefault(require("./handlers/dashboard"));
var order_products_1 = __importDefault(require("./handlers/order_products"));
var port = process.env.PORT;
var app = (0, express_1.default)();
var address = "0.0.0.0:".concat(port);
app.use(body_parser_1.default.json());
app.use('/products', products_1.default);
app.use('/users', users_1.default);
app.use('/orders', orders_1.default);
app.use('/orders-products', order_products_1.default);
app.use('/services', dashboard_1.default);
app.get('/test-api', function (req, res) {
    res.send('Server Works!');
});
app.listen(port || 3000, function () {
    console.log("server started at localhost:".concat(address));
});
exports.default = app;
