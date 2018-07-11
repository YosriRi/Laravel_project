<header id="main_menu" class="header navbar-fixed-top navbar-right">
    <div class="main_menu_bg">
        <div class="container">
            <div class="row">
                <div class="nave_menu">
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
                            <!-- Brand and toggle get grouped for better mobile display -->
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand" href="#home">
                                    <img src="images/logo.png"/>
                                </a>
                            </div>

                            <!-- Collect the nav links, forms, and other content for toggling -->



                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                                <ul class="nav navbar-nav navbar-right">
                                
                                    <li><a href="#home">Accueil</a></li>
                                    <li><a href="#terrain">Nos Terrains de jeu</a></li>             
                                    <li><a href="#portfolio">Nouveauté ! Soufflerie</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#service">A propos</a></li>
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><b>Se connecter</b> <span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <div class="row">
                                                        <div class="account-container">
                                                            <div class="new-account">
                                                                <div class="form-reg">
                                                                    <p class="title">PREMIERE CONNEXION?</p>
                                                                    <div class="form-content">
                                                                                                                       
                                                                        <div>
                                                                            <a href="https://graph.facebook.com/oauth/authorize?client_id=1020747071360878&amp;redirect_uri=https%3A%2F%2Fwww.cap-adrenaline.com%2Fsocialconnect%2Ffacebook%2Fconnect&amp;state=18ce242290dbf8dc4399fe618e77ff6a&amp;scope=public_profile%2Cemail%2Cuser_birthday">
                                                                                <button class="btn-blue">Inscription avec Facebook</button>
                                                                            </a>
                                                                            <a href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;redirect_uri=https%3A%2F%2Fwww.cap-adrenaline.com%2Fsocialconnect%2Fgoogle%2Fconnect&amp;client_id=527961676415-oi53aruc06r9qt3m9ig0d5jihbftkas9.apps.googleusercontent.com&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&amp;state=9e33ab41c03a28795da09b6a05576751&amp;access_type=offline&amp;approval_prompt=auto">
                                                                                <button class="btn-red">Inscription avec Google</button>
                                                                            </a>
                                                                            <form action="#" method="post" id="create-account-form">
                                                                                <input type="hidden" name="success_url" value="">
                                                                                <input type="hidden" name="error_url" value="">
                                                                                <input type="hidden" name="form_key" value="FsaJM30y3gCUyAyT">
                                                                                <p class="show-line">
                                                                                    <span class="whites">ou</span>
                                                                                </p>
                                                                                <input type="text" name="firstname" id="firstname" maxlength="255" class="form-control input-text required-entry" placeholder="Prénom">
                                                                                <input type="text" name="lastname" id="lastname" maxlength="255" class="form-control input-text required-entry" placeholder="Nom">
                                                                                <input type="text" name="email" id="email" class="form-control validate-email required-entry" placeholder="Adresse email">
                                                                                <input type="text" name="cemail" id="cemail" class="form-control validate-cemail" placeholder="Confirmation adresse email">
                                                                                <input type="password" name="password" id="password" class="form-control validate-password required-entry" placeholder="Mot de passe">
                                                                                <input type="password" name="confirmation" id="confirmation" class="form-control validate-cpassword required-entry" placeholder="Confirmation mot de passe">
                                                                                <br>
                                                                                <button type="submit" id="create-account-btn" class="btn-orange">Inscription</button>
                                                                                <br>

                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="registered-account">
                                                                <div class="form-log" id="log">
                                                                    <p class="title">ON SE CONNAÎT DÉJÀ ?</p>
                                                                    <div class="form-content">
                                                                        <p class="hidden-xs">Connectez-vous pour accéder à votre compte et retrouver toutes vos informations</p>
                                                                        <a href="https://graph.facebook.com/oauth/authorize?client_id=1020747071360878&amp;redirect_uri=https%3A%2F%2Fwww.cap-adrenaline.com%2Fsocialconnect%2Ffacebook%2Fconnect&amp;state=18ce242290dbf8dc4399fe618e77ff6a&amp;scope=public_profile%2Cemail%2Cuser_birthday">
                                                                            <button class="btn-blue">Connexion avec Facebook</button>
                                                                        </a>
                                                                        <a href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;redirect_uri=https%3A%2F%2Fwww.cap-adrenaline.com%2Fsocialconnect%2Fgoogle%2Fconnect&amp;client_id=527961676415-oi53aruc06r9qt3m9ig0d5jihbftkas9.apps.googleusercontent.com&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&amp;state=9e33ab41c03a28795da09b6a05576751&amp;access_type=offline&amp;approval_prompt=auto">
                                                                            <button class="btn-red">Connexion avec Google</button>
                                                                        </a>
                                                                        <form action="https://www.cap-adrenaline.com/customer/account/loginPost" method="post" id="action-form">
                                                                            <input name="form_key" type="hidden" value="FsaJM30y3gCUyAyT">
                                                                            <p class="show-line">
                                                                                <span>ou</span>
                                                                            </p>
                                                                            <div class="input-box">
                                                                                <input type="text" name="login[username]" value="" class="form-control required-entry validate-email" id="username" placeholder="Adresse email">
                                                                            </div>
                                                                            <div class="input-box">
                                                                                <input type="password" name="login[password]" class="form-control required-entry validate-password" id="login-pass" placeholder="Mot de passe">
                                                                            </div>
                                                                            <div class="text-left text-span bot-0">
                                                                                <span>Mot de passe oublié ou perdu,
                                                                                    <span class="underline show-popup pointer"
                                                                                        id="forgot-pass">cliquez ici</span>
                                                                                </span>
                                                                            </div>
                                                                            <div class="check">
                                                                                <input type="checkbox" name="persistent_remember_me" id="remember_mes6DDc9OHPU" checked="checked" title="Se souvenir de moi">
                                                                                <label class="remember" for="remember_mes6DDc9OHPU">Se souvenir de moi</label>
                                                                            </div>
                                                                            <button type="submit" id="login-btn" class="btn-orange">Connexion</button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                <div class="form-reg visible-xs hidden" id="reg">
                                                                    <p class="title">PREMIÈRE VISITE CHEZ NOUS ?</p>
                                                                    <div class="form-content">
                                                                        <div class="creermoncompte-actives">
                                                                            <a href="https://graph.facebook.com/oauth/authorize?client_id=1020747071360878&amp;redirect_uri=https%3A%2F%2Fwww.cap-adrenaline.com%2Fsocialconnect%2Ffacebook%2Fconnect&amp;state=18ce242290dbf8dc4399fe618e77ff6a&amp;scope=public_profile%2Cemail%2Cuser_birthday">
                                                                                <button class="btn-blue">Inscription avec Facebook</button>
                                                                            </a>
                                                                            <a href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;redirect_uri=https%3A%2F%2Fwww.cap-adrenaline.com%2Fsocialconnect%2Fgoogle%2Fconnect&amp;client_id=527961676415-oi53aruc06r9qt3m9ig0d5jihbftkas9.apps.googleusercontent.com&amp;scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&amp;state=9e33ab41c03a28795da09b6a05576751&amp;access_type=offline&amp;approval_prompt=auto">
                                                                                <button class="btn-red">Inscription avec Google</button>
                                                                            </a>
                                                                            <form action="#" method="post" id="mobile-create-account-form">
                                                                                <input type="hidden" name="success_url" value="">
                                                                                <input type="hidden" name="error_url" value="">
                                                                                <input type="hidden" name="form_key" value="FsaJM30y3gCUyAyT">
                                                                                <p class="show-line">
                                                                                    <span>ou</span>
                                                                                </p>
                                                                                <input type="text" name="firstname" id="firstname" maxlength="255" class="form-control required-entry input-text required-entry"
                                                                                    placeholder="Prénom">
                                                                                <input type="text" name="lastname" id="lastname" maxlength="255" class="form-control required-entry input-text required-entry"
                                                                                    placeholder="Nom">
                                                                                <input type="text" name="email" id="email-xs" class="form-control validate-email email-xs required-entry" placeholder="Adresse email">
                                                                                <input type="text" name="cemail" id="cemail-xs" class="form-control validate-cemail-xs " placeholder="Confirmation adresse email">
                                                                                <input type="password" name="password" id="password-xs" class="form-control validate-password required-entry password-xs"
                                                                                    placeholder="Mot de passe">
                                                                                <input type="password" name="confirmation" id="confirmation-xs" class="form-control validate-cpassword-xs" placeholder="Confirmation mot de passe">
                                                                               
                                                                                <button type="submit" id="create-account-btn" class="btn-orange">Inscription</button>
                                                                               
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                    </li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>

                                    <li>
                                        <a href="#"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                            <i class="fa fa-search"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <form class="navbar-form" role="search">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Search">
                                                    </div>
                                                </form>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </nav>
                </div>	
            </div>

        </div>

    </div>
</header> <!--End of header -->