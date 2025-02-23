import { Role } from "../../../common/enums";
import { ID } from "../../../common/types";

export class UserEntity {
  id!: ID;
  fullname!: string;
  email!: string;
  password!: string;
  role!: Role;
}
