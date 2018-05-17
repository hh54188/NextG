import { observable, action, computed } from "mobx";

class UsersStore {
  @observable result = [];
  @observable isLoading = false;
  @observable error = "";

  @action setResult = result => (this.result = result);
  @action setLoading = loadingStatus => (this.isLoading = loadingStatus);
  @action setError = error => (this.error = error);
}

export default UsersStore;
