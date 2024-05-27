import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./Status.enum"
import { Category } from "./Category.enum"
import { User } from "src/user/User.entity";
import { Comment } from "src/comments/Comment.entity";

export class Feedback {
    @PrimaryGeneratedColumn('uuid')
    id : string;
    @Column()
    title : string;
    @Column()
    description : string;
    @Column()
    status : Status ;
    @Column()
    category : Category ;
    @Column()
    likes : number ;
    @ManyToOne(type => User, user => user.feedback, {eager : true} )
    user : User
    @OneToMany(type => Comment, comment => comment.user, {eager : false} )
    comments : Comment[];
}