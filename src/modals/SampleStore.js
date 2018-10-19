import { observable, action, computed } from "mobx";

class SampleStore {
  @observable
  firstName = "Guangyi";
  @observable
  lastName = "Lee";
  @computed
  get fullName() {
    return this.firstName + this.lastName;
  }
  @action
  setFirstName = str => (this.firstName = str);
  @action
  setLastName = str => (this.lastName = str);
}

export default SampleStore;
