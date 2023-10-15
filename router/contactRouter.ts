import { Router } from "express";
import { createContact, deleteContact, searchCategory, updateContact, viewContact } from "../controller/contactController";
import multer from "multer";

const upload = multer().single("avatar")

const router = Router()

router.route("/create-contact").post(upload,createContact)
router.route("/get-contact").get(viewContact)
router.route("/:contactID/delete-contact").delete(deleteContact)
router.route("/:contactID/update-contact").patch(updateContact)
router.route("/search-categories").post(searchCategory)

export default router