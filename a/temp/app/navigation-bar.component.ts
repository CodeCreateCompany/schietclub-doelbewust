import {Component} from '@angular/core';

@Component({
    selector: 'navigation-bar',
    template: `
        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">

                <!-- Navbar dropdown button for mobile screens.-->
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav-collapse" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a href="#" class="navbar-brand">
                  <img alt="Doelbewust" src="assets/images/logo-klein.png" class="img-responsive"/>
                </a>
                <p href="#" class="hidden-sm hidden-md hidden-lg">Doelbewust</p>

              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="nav-collapse">
                <ul class="nav navbar-nav">
                  <li><a href="/">Home</a></li>
                  <li><a href="/info">Info</a></li>
                  <li><a href="contact.php">Contact</a></li>
                  <li><a href="historie.php">Historie</a></li>
                  <li><a href="evenementen.php">Evenementen</a></li>
                  <li><a href="uitslagen.php">Uitslagen</a></li>
                </ul>
              </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    `
})

export class NavigationBarComponent {

}
