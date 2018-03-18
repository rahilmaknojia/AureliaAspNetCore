import { autoinject } from "aurelia-framework";
import { MdToastService } from "aurelia-materialize-bridge";

@autoinject

export class Notifications {
  constructor(private toast: MdToastService) {
    this.toast = toast;
  }

  showToast(e) {
    this.toast.show(`You clicked ${e.target.innerText}`, 4000);
  }
  show = false;

  toggleSideNav() {
    this.show = !this.show;
  }
}
