import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { streamUpload } from "../utils/streamifier";

const prisma = new PrismaClient();

export const createContact = async (req: any, res: Response) => {
  try {
    const { name, phoneNumber, category } = req.body;
    const { secure_url, public_id }: any = await streamUpload(req);
    const contact = await prisma.contactService.create({
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
  } catch (error: any) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};

export const viewContact = async (req: Request, res: Response) => {
  try {
    const contact =await prisma.contactService.findMany({});
    return res.status(200).json({
      message: "viewing contact successfully",
      data: contact,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};

export const updateContact = async (req: Request, res: Response) => {
  try {
    const { contactID } = req.params;
    const { phoneNumber, name } = req.body;
    const contact =await prisma.contactService.update({
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
  } catch (error: any) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  try {
    const { contactID } = req.params;
    const contact =await prisma.contactService.delete({
      where: { id: contactID },
    });
    return res.status(200).json({
      message: "deleting contact successfully",
      data: contact,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};

export const searchCategory =async(req:Request, res:Response)=>{
    try {
        const {category} =req.body

        const contact =await prisma.contactService.findMany({
           where:{
           category
           }
        })
        return res.status(200).json({
            message: "searching contact category successfully",
            data: contact,
          });
    } catch (error:any) {
        return res.status(404).json({
            message: "error",
            data: error.message,
          });
    }
}