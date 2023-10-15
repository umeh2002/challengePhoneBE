"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const contactRouter_1 = __importDefault(require("./router/contactRouter"));
const main = (app) => {
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use((0, helmet_1.default)());
    app.get("/", (req, res) => {
        try {
            return res.status(200).json({
                message: "welcome to my phone application 👌✌",
            });
        }
        catch (error) {
            return res.status(404).json({
                message: error.message,
            });
        }
    });
    app.use("/api", contactRouter_1.default);
};
exports.default = main;
