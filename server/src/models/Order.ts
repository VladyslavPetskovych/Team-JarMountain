import mongoose from "mongoose";

export type OrderStatus =
    | "NewOrder"
    | "Registered"
    | "Granted"
    | "Shipped"
    | "Invoiced"
    | "Cancelled";

interface IITem {
    _id: mongoose.Schema.Types.ObjectId;
    count: number;
}

export interface IOrder {
    phone: string;
    items: IITem[];
    status: OrderStatus;
}

const ItemSchema = new mongoose.Schema<IITem>({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
    count: { type: "number", required: true },
});

const schema = new mongoose.Schema<IOrder>({
    phone: { type: "string", required: true },
    status: {
        type: "string",
        enum: [
            "NewOrder",
            "Registered",
            "Granted",
            "Shipped",
            "Invoiced",
            "Canceled",
        ],
        default: "NewOrder",
    },
    items: [ItemSchema],
});

export default mongoose.model("Order", schema);
