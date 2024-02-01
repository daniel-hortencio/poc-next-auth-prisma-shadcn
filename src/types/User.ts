import { UserRole } from "../enums/UserRole";

export type User = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
  role: UserRole;
};
