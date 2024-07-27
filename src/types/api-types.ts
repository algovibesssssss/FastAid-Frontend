import { User } from "./types";

export type CustomError = {
    status: number;
    data: {
        message: string;
        success: boolean;
    };
}

export type MessageResponse = {
    success: boolean;
    message: string;
}

export type AllUsersResponse = {
    success: boolean;
    users: User[];
}

export type UserResponse = {
    success: boolean;
    user: User;
}

export type DeleteUserRequest = {
    userId: string;
    adminUserId: string;
}
