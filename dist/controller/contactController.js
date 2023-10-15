"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCategory = exports.deleteContact = exports.updateContact = exports.viewContact = exports.createContact = void 0;
const client_1 = require("@prisma/client");
const streamifier_1 = require("../utils/streamifier");
const prisma = new client_1.PrismaClient();
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, phoneNumber, category } = req.body;
        const { secure_url, public_id } = yield (0, streamifier_1.streamUpload)(req);
        const contact = yield prisma.contactService.create({
            data: {
                name,
                phoneNumber,
                category,
                avatar: secure_url,
                avatarUrl: public_id,
            },
        });
        return res.status(201).json({
            message: "craeted successfully",
            data: contact,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "error",
            data: error.message,
        });
    }
});
exports.createContact = createContact;
const viewContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield prisma.contactService.findMany({});
        return res.status(200).json({
            message: "viewing contact successfully",
            data: contact,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "error",
            data: error.message,
        });
    }
});
exports.viewContact = viewContact;
const updateContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactID } = req.params;
        const { phoneNumber, name } = req.body;
        const contact = yield prisma.contactService.update({
            where: { id: contactID },
            data: {
                phoneNumber,
                name,
            },
        });
        return res.status(201).json({
            message: "updating contact successfully",
            data: contact,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "error",
            data: error.message,
        });
    }
});
exports.updateContact = updateContact;
const deleteContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactID } = req.params;
        const contact = yield prisma.contactService.delete({
            where: { id: contactID },
        });
        return res.status(200).json({
            message: "deleting contact successfully",
            data: contact,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "error",
            data: error.message,
        });
    }
});
exports.deleteContact = deleteContact;
const searchCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.body;
        const contact = yield prisma.contactService.findMany({
            where: {
                category
            }
        });
        return res.status(200).json({
            message: "searching contact category successfully",
            data: contact,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "error",
            data: error.message,
        });
    }
});
exports.searchCategory = searchCategory;
