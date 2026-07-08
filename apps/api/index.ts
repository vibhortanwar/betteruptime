import express from "express"
const app = express();
import { prisma } from "store/client";

app.use(express.json());

app.post("/website", async (req, res) => {
    if (!req.body.url) {
        res.status(411).json({});
        return;
    }

    try {
        const website = await prisma.website.create({
            data: {
                url: req.body.url,
                timeAdded: new Date()
            }
        });
        res.json({
            id: website.id
        });
    } catch (error: any) {
        res.status(500).json({
            error: error.message,
            code: error.code,
            meta: error.meta
        });
    }
});

app.get("/status/:website", (req, res) => {

})

app.listen(3001);