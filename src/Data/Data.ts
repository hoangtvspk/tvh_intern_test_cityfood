import { FoodModel } from "../Models/FoodModel"
import i1 from "../Assets/Images/i1.png"
import f1 from "../Assets/Images/f1.png"
import c3 from "../Assets/Images/c3.png"
import fi1 from "../Assets/Images/fi1.png"

import f2 from "../Assets/Images/f2.png"
import f3 from "../Assets/Images/f3.png"
import f4 from "../Assets/Images/f4.png"
import f5 from "../Assets/Images/f5.png"
import f6 from "../Assets/Images/f6.png"
import f7 from "../Assets/Images/f7.png"
import f8 from "../Assets/Images/f8.png"
import f9 from "../Assets/Images/f9.png"
import f10 from "../Assets/Images/f10.png"

import c1 from "../Assets/Images/c1.png"
import c2 from "../Assets/Images/c2.png"
import c4 from "../Assets/Images/c4.png"
import c6 from "../Assets/Images/c6.png"
import c7 from "../Assets/Images/c7.png"

import cu1 from "../Assets/Images/cu1.png"
import cu2 from "../Assets/Images/cu2.png"
import cu3 from "../Assets/Images/cu2.png"
import cu4 from "../Assets/Images/cu3.png"
import cu5 from "../Assets/Images/cu5.png"
import cu6 from "../Assets/Images/cu6.png"

import d1 from "../Assets/Images/d1.png"
import d2 from "../Assets/Images/d2.png"
import d3 from "../Assets/Images/d3.png"
import d4 from "../Assets/Images/d4.png"
import d5 from "../Assets/Images/d5.png"
import d6 from "../Assets/Images/d6.png"
import d7 from "../Assets/Images/d7.png"
import d8 from "../Assets/Images/d8.png"

import fi2 from "../Assets/Images/fi2.png"
import fi3 from "../Assets/Images/fi3.png"
import fi4 from "../Assets/Images/fi4.png"
import fi5 from "../Assets/Images/fi5.png"

import i2 from "../Assets/Images/i2.png"
import i3 from "../Assets/Images/i3.png"
import i4 from "../Assets/Images/i4.png"
import i5 from "../Assets/Images/i5.png"
import i6 from "../Assets/Images/i6.png"
import i7 from "../Assets/Images/i7.png"

import r1 from "../Assets/Images/r1.png"
import r2 from "../Assets/Images/r2.png"
import r3 from "../Assets/Images/r3.png"
import r4 from "../Assets/Images/r4.png"
import r5 from "../Assets/Images/r5.png"

export const BestSellerList:FoodModel[] = [
    {
        name:"Icecream",
        price:5.25,
        description:"Chocolate & vanilla",
        calories:0,
        image: i1,
    },
    {
        name:"Strawberries",
        price:10.25,
        description:"Fresh Strawberries",
        calories:0,
        image:f1,
    },
    {
        name:"Chicken Kebab",
        price:8.25,
        description:"Mixed Kebab Plate",
        calories:0,
        image:c3,
    },
    {
        name:"Fish Kebab",
        price:5.25,
        description:"Mixed Fish Kebab",
        calories:0,
        image:fi1,
    }
]

export const HealthyFoodList:FoodModel[] = [
    {
        name:"Pineapple",
        price:5.25,
        description:"",
        calories:14,
        image:f2,
    },
    {
        name:"Strawberry",
        price:5.25,
        description:"",
        calories:15,
        image:f5,
    },
    {
        name:"Grape",
        price:5.25,
        description:"",
        calories:26,
        image:f4,
    },
    {
        name:"Cherry",
        price:5.25,
        description:"",
        calories:11,
        image:f8,
    },
    {
        name:"Banana",
        price:5.25,
        description:"",
        calories:12,
        image:f9,
    },
    {
        name:"Watermelon",
        price:5.25,
        description:"",
        calories:10,
        image:f10,
    },
    {
        name:"Pomegranate",
        price:5.25,
        description:"",
        calories:11,
        image:f6,
    },
]

export const Category=  ["Chicken","Curry","Rice","Fish","Fruits","Icecreams","Soft Drinks"]

export const HotDishesList:FoodModel[] = [
    {
        name:"Chicken 1",
        price:678,
        calories:14,
        image:c1,
        category: "Chicken",
    },
    {
        name:"Chicken 2",
        price:678,
        calories:14,
        image:c2,
        category: "Chicken",
    },
    {
        name:"Chicken 3",
        price:678,
        calories:14,
        image:c3,
        category: "Chicken",
    },
    {
        name:"Chicken 4",
        price:678,
        calories:14,
        image:c4,
        category: "Chicken",
    },
    {
        name:"Chicken 6",
        price:678,
        calories:14,
        image:c6,
        category: "Chicken",
    },
    {
        name:"Chicken 7",
        price:678,
        calories:14,
        image:c7,
        category: "Chicken",
    },
    {
        name:"Curry 1",
        price:678,
        calories:14,
        image:cu1,
        category: "Curry",
    },
    {
        name:"Curry 2",
        price:678,
        calories:14,
        image:cu2,
        category: "Curry",
    },
    {
        name:"Curry 3",
        price:678,
        calories:14,
        image:cu3,
        category: "Curry",
    },
    {
        name:"Curry 4",
        price:678,
        calories:14,
        image:cu4,
        category: "Curry",
    },
    {
        name:"Curry 5",
        price:678,
        calories:14,
        image:cu5,
        category: "Curry",
    },
    {
        name:"Curry 6",
        price:678,
        calories:14,
        image:cu6,
        category: "Curry",
    },
    {
        name:"Rice 1",
        price:678,
        calories:14,
        image:r1,
        category: "Rice",
    },
    {
        name:"Rice 2",
        price:678,
        calories:14,
        image:r2,
        category: "Rice",
    },
    {
        name:"Rice 3",
        price:678,
        calories:14,
        image:r3,
        category: "Rice",
    },
    {
        name:"Rice 4",
        price:678,
        calories:14,
        image:r4,
        category: "Rice",
    },
    {
        name:"Rice 5",
        price:678,
        calories:14,
        image:r5,
        category: "Rice",
    },
    {
        name:"Fish 1",
        price:678,
        calories:14,
        image:fi1,
        category: "Fish",
    },
    {
        name:"Fish 2",
        price:678,
        calories:14,
        image:fi2,
        category: "Fish",
    },
    {
        name:"Fish 3",
        price:678,
        calories:14,
        image:fi3,
        category: "Fish",
    },
    {
        name:"Fish 4",
        price:678,
        calories:14,
        image:fi4,
        category: "Fish",
    },
    {
        name:"Fish 5",
        price:678,
        calories:14,
        image:fi5,
        category: "Fish",
    },
    {
        name:"Fruits 1",
        price:678,
        calories:14,
        image:f1,
        category: "Fruits",
    },
    {
        name:"Fruits 2",
        price:678,
        calories:14,
        image:f2,
        category: "Fruits",
    },
    {
        name:"Fruits 3",
        price:678,
        calories:14,
        image:f3,
        category: "Fruits",
    },
    {
        name:"Fruits 4",
        price:678,
        calories:14,
        image:f4,
        category: "Fruits",
    },
    {
        name:"Fruits 5",
        price:678,
        calories:14,
        image:f5,
        category: "Fruits",
    },
    {
        name:"Fruits 6",
        price:678,
        calories:14,
        image:f6,
        category: "Fruits",
    },
    {
        name:"Fruits 7",
        price:678,
        calories:14,
        image:f7,
        category: "Fruits",
    },
    {
        name:"Fruits 8",
        price:678,
        calories:14,
        image:f8,
        category: "Fruits",
    },
    {
        name:"Fruits 9",
        price:678,
        calories:14,
        image:f9,
        category: "Fruits",
    },
    {
        name:"Fruits 10",
        price:678,
        calories:14,
        image:f10,
        category: "Fruits",
    },
    {
        name:"Icecreams 1",
        price:678,
        calories:14,
        image:i1,
        category: "Icecreams",
    },
    {
        name:"Icecreams 2",
        price:678,
        calories:14,
        image:i2,
        category: "Icecreams",
    },
    {
        name:"Icecreams 3",
        price:678,
        calories:14,
        image:i3,
        category: "Icecreams",
    },
    {
        name:"Icecreams 4",
        price:678,
        calories:14,
        image:i4,
        category: "Icecreams",
    },
    {
        name:"Icecreams 5",
        price:678,
        calories:14,
        image:i5,
        category: "Icecreams",
    },
    {
        name:"Icecreams 6",
        price:678,
        calories:14,
        image:i6,
        category: "Icecreams",
    },
    {
        name:"Icecreams 7",
        price:678,
        calories:14,
        image:i7,
        category: "Icecreams",
    },
    {
        name:"Soft Drinks 1",
        price:678,
        calories:14,
        image:d1,
        category: "Soft Drinks",
    },
    {
        name:"Soft Drinks 2",
        price:678,
        calories:14,
        image:d2,
        category: "Soft Drinks",
    },
    {
        name:"Soft Drinks 3",
        price:678,
        calories:14,
        image:d3,
        category: "Soft Drinks",
    },
    {
        name:"Soft Drinks 4",
        price:678,
        calories:14,
        image:d4,
        category: "Soft Drinks",
    },
    {
        name:"Soft Drinks 5",
        price:678,
        calories:14,
        image:d5,
        category: "Soft Drinks",
    },
    {
        name:"Soft Drinks 6",
        price:678,
        calories:14,
        image:d6,
        category: "Soft Drinks",
    },
    {
        name:"Soft Drinks 7",
        price:678,
        calories:14,
        image:d7,
        category: "Soft Drinks",
    },
    {
        name:"Soft Drinks 8",
        price:678,
        calories:14,
        image:d8,
        category: "Soft Drinks",
    },
]