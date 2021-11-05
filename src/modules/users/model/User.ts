import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }

    const currentDate = new Date();

    this.admin = false;
    [this.created_at, this.updated_at] = [currentDate, currentDate];
  }
}

export { User };
