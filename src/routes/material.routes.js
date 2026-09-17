import { Router } from "express";
import { materialService } from "../services/material.services.js";

export const materialRouter = Router()

materialRouter.get("/", async (req, res) => {
    try{
        const material = await materialService.listarmaterial()
    } catch (error) {
        console.error(error);
    }
})