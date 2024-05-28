import { Comment } from "src/comments/Comment.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Reply {
    @PrimaryGeneratedColumn('uuid')
    id : string;
    @Column()
    content : string;
    @OneToMany(type => Reply, reply => reply.replies,)
    replies : Reply[];
    @ManyToOne(type => Comment, comment => comment.replies)
    comment : Comment;
}