
import { Category } from "./category.interface";
import { User } from "./user.interface";

export interface Post{
    id:number;
    title:string;
    content:string;
    createAt:Date;
    updateAt:Date;
    slug:string;
    user:User;
    category:Category;
    status?:string;
    mainImageUrl?:string
    
}