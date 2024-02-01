import { AxiosInstance } from "axios";
import { api } from "./api";
import { User } from "@prisma/client";

class UsersServices {
  private endpoint = "/users";
  constructor(private readonly api: AxiosInstance) {}

  getUsers(): Promise<User[]> {
    return this.api.get(this.endpoint);
  }
}

export const usersService = new UsersServices(api);
