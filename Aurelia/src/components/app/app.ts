import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  router: Router;
  message = "Entry point!";

  // Configure Routing
  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = "Aurelia Routing";
    config.options.root = "/";
    config.map([
      { route: '', redirect: '/home', settings: { icon: 'home' } },
      { route: "home", name: 'home', moduleId: PLATFORM.moduleName('../home/home'), nav: true, title: 'HOME', settings: { icon: 'home' } },
      { route: "deployment", name: 'deployment', moduleId: PLATFORM.moduleName('../deployment/deployment'), nav: true, title: 'DEPLOYMENT', settings: { icon: 'apps' } },
      { route: "help", name: 'help', moduleId: PLATFORM.moduleName('../help/help'), nav: true, title: 'HELP', settings: { icon: 'help' } },
      { route: "about", name: 'about', moduleId: PLATFORM.moduleName('../about/about'), nav: true, title: 'ABOUT', settings: { icon: 'info' }  }
    ]);
    this.router = router;
    console.log(this.router);

  }
}
