"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactController_1 = require("../controller/contactController");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)().single("avatar");
const router = (0, express_1.Router)();
router.route("/create-contact").post(upload, contactController_1.createContact);
router.route("/get-contact").get(contactController_1.viewContact);
router.route("/:contactID/delete-contact").delete(contactController_1.deleteContact);
router.route("/:contactID/update-contact").patch(contactController_1.updateContact);
router.route("/search-categories").post(contactController_1.searchCategory);
exports.default = router;
