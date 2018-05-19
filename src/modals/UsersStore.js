import axios from "axios";
import { observable, action, computed, flow } from "mobx";

class UsersStore {
  @observable result = [];
  @observable isLoading = false;
  @observable error = "";

  fetchUsers = flow(function*() {
    this.result = [];
    this.isLoading = true;
    try {
      const resposne = yield axios.get("https://randomuser.me/api/?results=10");
      this.isLoading = false;
      this.result = response.results;
    } catch (error) {
      this.isLoading = false;
      this.error = error;
    }
  });
}

export default UsersStore;
