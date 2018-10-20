 
    <header>
        <div id="carouselExampleIndicators" class="fullslider carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <!-- Slide One - Set the background image for this slide in the line below -->
            <div class="carousel-item active" style="background-image: url(images/homebg1.jpg)">
              <div class="carousel-caption d-none d-md-block">
                <div class="row">
                  <form class="form-wrapper cf">
                    <input type="text" placeholder="Search here..." required>
                    <button type="submit">Search</button>
                  </form>
                </div>
                <h3>First Slide</h3>
                <p>This is a description for the first slide.</p>
              </div>
            </div>
            <!-- Slide Two - Set the background image for this slide in the line below -->
            <div class="carousel-item" style="background-image:url(images/homebg2.jpg)">
              <div class="carousel-caption d-none d-md-block">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="input-group" id="adv-search">
                        <input type="text" class="form-control" placeholder="Search for snippets" />
                        <div class="input-group-btn">
                          <div class="btn-group" role="group">
                            <div class="dropdown dropdown-lg">
                              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <span class="caret"></span>
                              </button>
                              <div class="dropdown-menu dropdown-menu-right" role="menu">
                                <form class="form-horizontal" role="form">
                                  <div class="form-group">
                                    <label for="filter">Filter by</label>
                                    <select class="form-control">
                                      <option value="0" selected>All Snippets</option>
                                      <option value="1">Featured</option>
                                      <option value="2">Most popular</option>
                                      <option value="3">Top rated</option>
                                      <option value="4">Most commented</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label for="contain">Author</label>
                                    <input class="form-control" type="text" />
                                  </div>
                                  <div class="form-group">
                                    <label for="contain">Contains the words</label>
                                    <input class="form-control" type="text" />
                                  </div>
                                  <button type="submit" class="btn btn-primary">
                                    <span class="glyphicon glyphicon-search" aria-hidden="true">Search</span>
                                  </button>
                                </form>
                              </div>
                            </div>
                            <button type="button" class="btn btn-primary">
                              <span class="glyphicon glyphicon-search" aria-hidden="true">Search</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <h3>Second Slide</h3>
                <p>This is a description for the second slide.</p>
              </div>
            </div>
            <!-- Slide Three - Set the background image for this slide in the line below -->
            <div class="carousel-item" style="background-image: url(images/homebg3.jpg);">
              <div class="carousel-caption d-none d-md-block">
              <div class="container">
                    <div class="row">
                      <div class="filter-form__block center">
                        <form class="" method="post">
                          <p class="filter-form__title">Affinez votre recherche</p>
                          <div class="separator"></div>
                          <div class="filter-form__option">
                            <div class="filter-form__select">
                              <div class="form-row">
                                <div class="col">
                                  <p>Categorie</p>
                                  <select id="catalog-filter" class="form-control active" name="category_id" style="width: 256px;">
                                    <option value="0">Toutes les activités</option>
                                    <option value="17">
                                      Avion </option>
                                    <option value="165">
                                      Deltaplane </option>
                                    <option value="36">
                                      Parapente </option>
                                    <option value="181">
                                      Pilotage de Drone </option>
                                    <option value="28">
                                      Planeur </option>
                                    <option value="78">
                                      Saut à l'Élastique </option>
                                    <option value="67" selected="">
                                      Saut en Parachute </option>
                                    <option value="175">
                                      Simulateur de chute libre </option>
                                    <option value="66">
                                      Simulateur de vol </option>
                                    <option value="164">
                                      ULM </option>
                                    <option value="83">
                                      Vol avec des Oiseaux </option>
                                    <option value="69">
                                      Vol en Hélicoptère </option>
                                    <option value="64">
                                      Vol en Montgolfière </option>
                                  </select>
                                </div>
                                <div class="col">
                                  <p>Activité</p>
                                  <select id="subcatalog-filter" class="form-control active" name="subcategory_id" style="width: 256px;">
                                    <option value="0">Sous-catégorie</option>
                                    <option value="150" selected="">
                                      Saut Parachute Tandem </option>
                                    <option value="140">
                                      Saut d'initiation </option>
                                    <option value="145">
                                      Stage parachute PAC </option>
                                  </select>
                                </div>
                              </div>


                            </div>
                            <div class="form-row">
                              <div class="col">
                                <p>Lieu</p>
                                <select id="location-filter" class="form-control" name="filter_location" style="width: 256px;">
                                  <option value="0" selected="">Lieu</option>
                                  <option value="-1">France</option>
                                  <option value="0">----------------------Regions----------------------</option>
                                  <option value="r;aquitaine-R5">Aquitaine</option>
                                  <option value="r;auvergne-R6">Auvergne</option>
                                  <option value="r;bourgogne-R7">Bourgogne</option>
                                  <option value="r;bretagne-R8">Bretagne</option>
                                  <option value="r;centre-R9">Centre</option>
                                  <option value="r;champagne-ardenne-R10">Champagne-Ardenne</option>
                                  <option value="r;corse-R11">Corse</option>
                                  <option value="r;franche-comte-R12">Franche-Comté</option>
                                  <option value="r;languedoc-roussillon-R13">Languedoc-Roussillon</option>
                                  <option value="r;limousin-R14">Limousin</option>
                                  <option value="r;lorraine-R15">Lorraine</option>
                                  <option value="r;midi-pyrenees-R16">Midi-Pyrénées</option>
                                  <option value="r;nord-pas-de-calais-R17">Nord-Pas-de-Calais</option>
                                  <option value="r;normandie-R18">Normandie</option>
                                  <option value="r;paca-R2">PACA</option>
                                  <option value="r;pays-de-la-loire-R19">Pays de la Loire</option>
                                  <option value="r;picardie-R20">Picardie</option>
                                  <option value="r;poitou-charentes-R21">Poitou-Charentes</option>
                                  <option value="r;rhone-alpes-R3">Rhône-Alpes</option>
                                  <option value="r;ile-de-france-R1">Île-de-France</option>
                                  <option value="0">------------------Departments------------------</option>
                                  <option value="d;ain-1">01 - Ain</option>
                                  <option value="d;aisne-2">02 - Aisne</option>
                                  <option value="d;allier-3">03 - Allier</option>
                                  <option value="d;alpes-de-haute-provence-4">04 - Alpes de Haute-Provence</option>
                                  <option value="d;hautes-alpes-5">05 - Hautes-Alpes</option>
                                  <option value="d;alpes-maritimes-6">06 - Alpes-Maritimes</option>
                                  <option value="d;ardeche-7">07 - Ardèche</option>
                                  <option value="d;ardennes-8">08 - Ardennes</option>
                                  <option value="d;ariege-9">09 - Ariège</option>
                                  <option value="d;aube-10">10 - Aube</option>
                                  <option value="d;aude-11">11 - Aude</option>
                                  <option value="d;aveyron-12">12 - Aveyron</option>
                                  <option value="d;bouches-du-rhone-13">13 - Bouches-du-Rhône</option>
                                  <option value="d;calvados-14">14 - Calvados</option>
                                  <option value="d;cantal-15">15 - Cantal</option>
                                  <option value="d;charente-16">16 - Charente</option>
                                  <option value="d;charente-maritime-17">17 - Charente-Maritime</option>
                                  <option value="d;cher-18">18 - Cher</option>
                                  <option value="d;correze-19">19 - Corrèze</option>
                                  <option value="d;corse-du-sud-20">20 - Corse</option>
                                  <option value="d;cote-d-or-21">21 - Côte-d'Or</option>
                                  <option value="d;cotes-d-armor-22">22 - Côtes d'Armor</option>
                                  <option value="d;dordogne-24">24 - Dordogne</option>
                                  <option value="d;doubs-25">25 - Doubs</option>
                                  <option value="d;drome-26">26 - Drôme</option>
                                  <option value="d;eure-27">27 - Eure</option>
                                  <option value="d;eure-et-loir-28">28 - Eure-et-Loir</option>
                                  <option value="d;finistere-29">29 - Finistère</option>
                                  <option value="d;gard-30">30 - Gard</option>
                                  <option value="d;haute-garonne-31">31 - Haute-Garonne</option>
                                  <option value="d;gers-32">32 - Gers</option>
                                  <option value="d;gironde-33">33 - Gironde</option>
                                  <option value="d;herault-34">34 - Hérault</option>
                                  <option value="d;ille-et-vilaine-35">35 - Ille-et-Vilaine</option>
                                  <option value="d;indre-et-loire-37">37 - Indre-et-Loire</option>
                                  <option value="d;isere-38">38 - Isère</option>
                                  <option value="d;jura-39">39 - Jura</option>
                                  <option value="d;landes-40">40 - Landes</option>
                                  <option value="d;loir-et-cher-41">41 - Loir-et-Cher</option>
                                  <option value="d;loire-42">42 - Loire</option>
                                  <option value="d;haute-loire-43">43 - Haute-Loire</option>
                                  <option value="d;loire-atlantique-44">44 - Loire-Atlantique</option>
                                  <option value="d;loiret-45">45 - Loiret</option>
                                  <option value="d;lot-46">46 - Lot</option>
                                  <option value="d;lot-et-garonne-47">47 - Lot-et-Garonne</option>
                                  <option value="d;lozere-48">48 - Lozère</option>
                                  <option value="d;maine-et-loire-49">49 - Maine-et-Loire</option>
                                  <option value="d;manche-50">50 - Manche</option>
                                  <option value="d;marne-51">51 - Marne</option>
                                  <option value="d;haute-marne-52">52 - Haute-Marne</option>
                                  <option value="d;mayenne-53">53 - Mayenne</option>
                                  <option value="d;meuse-55">55 - Meuse</option>
                                  <option value="d;morbihan-56">56 - Morbihan</option>
                                  <option value="d;nievre-58">58 - Nièvre</option>
                                  <option value="d;nord-59">59 - Nord</option>
                                  <option value="d;oise-60">60 - Oise</option>
                                  <option value="d;orne-61">61 - Orne</option>
                                  <option value="d;pas-de-calais-62">62 - Pas-de-Calais</option>
                                  <option value="d;puy-de-dome-63">63 - Puy-de-Dôme</option>
                                  <option value="d;pyrenees-atlantiques-64">64 - Pyrénées-Atlantiques</option>
                                  <option value="d;hautes-pyrenees-65">65 - Hautes-Pyrénées</option>
                                  <option value="d;pyrenees-orientales-66">66 - Pyrénées-Orientales</option>
                                  <option value="d;rhone-69">69 - Rhône</option>
                                  <option value="d;haute-saone-70">70 - Haute-Saône</option>
                                  <option value="d;saone-et-loire-71">71 - Saône-et-Loire</option>
                                  <option value="d;savoie-73">73 - Savoie</option>
                                  <option value="d;haute-savoie-74">74 - Haute-Savoie</option>
                                  <option value="d;seine-maritime-76">76 - Seine-Maritime</option>
                                  <option value="d;seine-et-marne-77">77 - Seine-et-Marne</option>
                                  <option value="d;deux-sevres-79">79 - Deux-Sèvres</option>
                                  <option value="d;somme-80">80 - Somme</option>
                                  <option value="d;tarn-81">81 - Tarn</option>
                                  <option value="d;tarn-et-garonne-82">82 - Tarn-et-Garonne</option>
                                  <option value="d;var-83">83 - Var</option>
                                  <option value="d;vaucluse-84">84 - Vaucluse</option>
                                  <option value="d;vendee-85">85 - Vendée</option>
                                  <option value="d;vienne-86">86 - Vienne</option>
                                  <option value="d;haute-vienne-87">87 - Haute-Vienne</option>
                                  <option value="d;yonne-89">89 - Yonne</option>
                                  <option value="d;essonne-91">91 - Essonne</option>
                                </select>
                              </div>

                              <div class="col">
                                <p>Prix</p>
                                <b class="f-left">239&nbsp;€</b>
                                <b class="f-right">527&nbsp;€</b>
                                <input type="range" min="1" max="100" value="50" class="slider" id="myRange">



                              </div>


                            </div>


                                <button title="go" class="btn-orange filter-button" type="submit">
                                  <span>
                                    <span>GO!</span>
                                  </span>
                                </button>

                            <p class="filter-form__num-activites filter-p">61 activités trouvées</p>
                        </form>

                        </div>
                      </div>
                    </div>
                  </div>
                <h3>Third Slide</h3>
                <p>This is a description for the third slide.</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
    </header>



      


