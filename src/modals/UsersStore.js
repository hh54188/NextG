import axios from "axios";
import { observable, action, computed, flow } from "mobx";

class UsersStore {
  @observable result = [];
  @observable isLoading = true;
  @observable error = "";

  fetchUsers = flow(function*() {
    this.result = [];
    this.isLoading = true;
    try {
      const response = yield axios.get("https://randomuser.me/api/?results=10");
      this.isLoading = false;
      this.result = response.data.results;
    } catch (error) {
      this.isLoading = false;
      this.error = error;
    }
  });
}

export default UsersStore;
