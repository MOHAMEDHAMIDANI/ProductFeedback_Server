import { Comment } from "src/comments/Comment.entity";
import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
export class Reply {
    @PrimaryGeneratedColumn('uuid')
    id : string;
    @Column()
    content : string;
    @OneToMany(type => Reply, reply => reply.replies, {eager : false} )
    replies : Reply[];
    @ManyToOne(type => Comment, comment => comment.replies)
    comment : Comment;
}