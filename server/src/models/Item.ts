import mongoose from "mongoose";

export interface IITem {
    name: string;
    price: number;
    description: string;
}

const schema = new mongoose.Schema<IITem>({
    description: { type: "string", required: true },
    price: { type: "number", required: true },
    name: { type: "string", required: true },
});

export default mongoose.model("Item", schema);
