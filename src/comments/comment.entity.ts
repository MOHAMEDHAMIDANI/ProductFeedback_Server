import { Feedback } from "src/feedback/Feedback.entity";
import { Reply } from "src/replies/reply.entity";
import { User } from "src/user/User.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id : string;
    @Column()
    content : string;
    @ManyToOne(type => User , user => user.comments, {eager : false} )
    user : User;
    @ManyToOne(type =>Feedback, feedback => feedback.comments, {eager : true} )
    feedback : Feedback;
    @OneToMany(type => Reply, reply => reply.comment, {eager : false} )
    replies : Reply[];
}