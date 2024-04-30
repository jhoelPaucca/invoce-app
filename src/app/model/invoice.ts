import { client } from "./client";
import { Company } from "./company";
import { Item } from "./item";

export class Invoice{
    id!: number;
    name!: string;
    client!: client;
    company!: Company;
    items!: Item[];
}