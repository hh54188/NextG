import { observable, action, computed, useStrict } from "mobx";

useStrict(true);

class SampleStore {
  @observable firstName = "";
  @observable lastName = "";
  @computed
  get fullName() {
    return this.firstName + this.lastName;
  }
  @action setFirstName = str => (this.firstName = str);
  @action setLastName = str => (this.lastName = str);
}

export default new SampleStore();
export { SampleStore };
