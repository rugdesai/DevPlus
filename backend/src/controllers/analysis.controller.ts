import { Request, Response } from "express";

import { analyzeDeveloper } from "../services/developer.service";



export const analyzeUser = async (
    req: Request,
    res: Response
) => {

    try {

        const username = req.params.username as string;

        if (!username) {
            return res.status(400).json({
                message: "Username is required"
            });
        }
        
        const result = await analyzeDeveloper(username);


        return res.json(result);


    } 
    
    catch (error: any) {
    if (error.response?.status === 404) {
        return res.status(404).json({
            message: "GitHub user not found"
        });
    }

    console.error(error);

    return res.status(500).json({
        message: "Internal server error"
    });
}

};