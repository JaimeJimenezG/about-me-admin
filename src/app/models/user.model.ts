export class User {
  id: number;
  user_name: string;
  name: string;
  last_name: string;
  email: string;
  password: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number,
    user_name: string,
    name: string,
    last_name: string,
    email: string,
    password: string,
    active: boolean,
    created_at: Date,
    updated_at: Date
    ){
    this.id = id;
    this.user_name = user_name;
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.active = active;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
