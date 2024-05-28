import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Feedback } from "../feedback/Feedback.entity"
import { Comment } from "src/comments/Comment.entity";
@Entity()
export class User { 
    @PrimaryGeneratedColumn('uuid')
    id : string;
    @Column()
    name : string;
    @Column()
    email : string;
    @Column()
    password : string;
    @OneToMany(type => Feedback, feedback => feedback.user , { eager : true })
    feedback : Feedback[] ;
    @OneToMany(type => Comment, comment => comment.user,)
    comments : Comment[] ;
}