<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" href="/images/icon.png">

    <title>essou</title>

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet" type="text/css">
</head>
<body>
    <main>
        @yield('content')
    </main>

    <script src="/js/app.js" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.4/gsap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
    <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script>
        var controller = new ScrollMagic.Controller();
        console.log("scrollmagic entered");
        var revealElements = document.getElementsByClassName("reveal");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: 50,												 // start a little later
                                triggerHook: 0.8,
                                // reverse: false,
							})
							.setClassToggle(revealElements[i], "visible") // add class toggle
							// .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
                            .addTo(controller);
        }

    </script>
</body>
</html>
