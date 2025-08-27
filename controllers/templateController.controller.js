import { Templates } from "../models/templateModel.model.js";

export async function getAllTemplates(req, res) {
    try {
        const templates = await Templates.find({});
        res.status(200).json(templates);
    } catch (error) {
        console.error(error);
    }
}

export async function createTemplate(req, res) {
    const {content, author} = req.body;
    const newTemplate = await Templates.create({
        content: content,
        author: author,
    })
    return res.status(201).json({template: newTemplate});
}