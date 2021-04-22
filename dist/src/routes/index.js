"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserLoginController_1 = __importDefault(require("../controllers/UserLoginController"));
var UserController_1 = __importDefault(require("../controllers/UserController"));
var ServiceController_1 = __importDefault(require("../controllers/ServiceController"));
var router = express_1.Router();
var userLoginController = new UserLoginController_1.default();
var userController = new UserController_1.default();
var serviceController = new ServiceController_1.default();
// LOGIN & REGISTER
router.post("/api/register", userLoginController.userRegister);
router.post("/api/login", userLoginController.userLogin);
// ROUTES
router.get("/", function (req, res) {
    res.send({ message: "Voce está no backend da aplicação no heroku" });
});
router.get("/api/users", userController.getUsers);
router.get("/api/users/:id", userController.getUserById);
router.post("/api/users", userController.createUser);
router.put("/api/users/:id", userController.updateUser);
router.delete("/api/users/:id", userController.deleteUser);
router.get("/api/services", serviceController.getServices);
router.get("/api/services/:id", serviceController.getServiceById);
router.post("/api/services", serviceController.createService);
router.put("/api/services/:id", serviceController.updateService);
router.delete("/api/services/:id", serviceController.deleteService);
module.exports = router;
