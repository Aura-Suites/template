import users from "@/data/users.json";
import _ from "lodash";

export const getUserByEmail = (email: string) => {
  return _.find(users, (item) => item.email === email);
};

export const getUserById = (id: number) => {
  return _.find(users, (item) => item.id === id);
};
