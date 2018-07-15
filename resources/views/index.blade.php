<!doctype html>
 <html class="no-js" lang=""> 
 
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>SO'Extreme - activités sports extrêmes</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">

        <!-- Google fonts link-->
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script&amp;subset=latin-ext" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">

        <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">

        <!--For Plugins external css-->
        <link rel="stylesheet" href="{{ asset('css/plugins.css') }}" />

        <!--Theme custom css -->
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">

        <!--Theme Responsive css-->
        <link rel="stylesheet" href="{{ asset('css/responsive.css') }}" />


        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
    </head>
    <body data-spy="scroll" data-target=".navbar-collapse">
       
        <div class="culmn">
         
            @include ('include.home');
           
            @include ('include.header');
            
            @include ('include.terrain')

            @include('include.footer');


        </div>

        <!-- START SCROLL TO TOP  -->

        <div class="scrollup">
            <a href="#"><i class="fa fa-chevron-up"></i></a>
        </div>

        <script src="{{ asset('js/vendor/jquery.min.js') }}"></script>
        <script src="{{ asset('js/vendor/bootstrap.min.js') }}"></script>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>

        <script src="js/jquery.mixitup.min.js"></script>
        <script src="js/jquery.easing.1.3.js"></script>
        <script src="js/jquery.masonry.min.js"></script>
        <script src="js/jquery.fancybox.pack.js"></script>

        <!--This link is only for gmaps-->
        <!-- <script src="http://maps.google.com/maps/api/js"></script>
        <script src="js/gmaps.min.js"></script>
 -->

        <script>

                function showmap() {
                    var mapOptions = {
                        zoom: 8,
                        scrollwheel: false,
                        center: new google.maps.LatLng(-34.397, 150.644),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
                }

        </script>


        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

    </body>
</html>
