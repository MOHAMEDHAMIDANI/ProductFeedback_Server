import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./Status.enum"
import { Category } from "./Category.enum"
import { User } from "src/user/User.entity";
import { Comment } from "src/comments/Comment.entity";
@Entity()
export class Feedback {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: string; // Assuming enum or similar, adjust accordingly

    @Column()
    category: string; // Assuming enum or similar, adjust accordingly

    @Column()
    likes: number;

    @ManyToOne(() => User, (user) => user.feedback)
    user: User;

    @OneToMany(() => Comment, (comment) => comment.feedback, { eager: true })
    comments: Comment[];
}