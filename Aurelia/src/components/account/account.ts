import { autoinject } from "aurelia-framework";
import { MdToastService } from "aurelia-materialize-bridge";

export class Account {
  constructor(private toast: MdToastService) {
    this.toast = toast;
  }

  showToast(e) {
    this.toast.show(`You clicked ${e.target.innerText}`, 4000);
  }
}
