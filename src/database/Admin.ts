import Api from "src/database/Api";
import getCookie from "src/database/Csrf";
import {User, UserData} from "src/database/User";

interface AdminData{
  admin_id: number
}

export class Admin{
  public async register (data: AdminData) {
    await getCookie()
    return Api().post('/admin/register')
  }

  public async login (data: UserData) {
    new User().login(data)
  }
}
