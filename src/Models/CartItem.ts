import { FoodModel } from "./FoodModel";

export interface CartItemModel {
    food: FoodModel;
    quantity: number;
    totalPrice: number;
}