$(document).ready(function(){
	// Instantiate MixItUp:
	$('#projects').mixItUp();
});

$(document).ready(main);
	var contador = 1;
	function main(){
		$('.navbar-toggle').click(function(){
			if (contador == 1) {
				$('nav').animate({
					left: '0',
					display: 'none'
				});
				contador = 0;
			} else{
					contador =1;
					$('nav').animate({
						left: '-100%',
						display: 'block'
					});
			}
		});
	}


		
		//Maps

		function initialize() {
		 
		  // Exibir mapa;
		  var myLatlng = new google.maps.LatLng(-7.6420137, 112.906768);
		  var mapOptions = {
		    zoom: 17,
		    center: myLatlng,
		    panControl: false,
		    // mapTypeId: google.maps.MapTypeId.ROADMAP
		    mapTypeControlOptions: {
		      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		    }
		  }
		 
		 
		  // Parâmetros do texto que será exibido no clique;
		  var contentString = '<h2>Alun-Alun Pasuruan</h2>' +
		  '<p>Jl. Alun-Alun Selatan, Kebonsari - Pasuruan, Jawa Timur 67116, Indonésia</p>' +
		  '<a href="https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=web&cd=11&cad=rja&uact=8&ved=0CFoQFjAK&url=http%3A%2F%2Fwikimapia.org%2F1042246%2FAlun-Alun-Pasuruan&ei=289WVZz8CYWoNtC0gbAK&usg=AFQjCNGoMAH-T52W-ByoM2Y36jsuofOhdg&bvm=bv.93564037,d.eXY" target="_blank">clique aqui para mais informações</a>';
		  var infowindow = new google.maps.InfoWindow({
		      content: contentString,
		      maxWidth: 700
		  });
		 
		 
		  // Exibir o mapa na div #mapa;
		  var map = new google.maps.Map(document.getElementById("maps"), mapOptions);
		 
		 
		  // Marcador personalizado;
		  var image = 'https://cdn2.iconfinder.com/data/icons/gpsmapicons/orange/gpsmapicons01.png';
		  var marcadorPersonalizado = new google.maps.Marker({
		      position: myLatlng,
		      map: map,
		      icon: image,
		      title: 'Alun-Alun Pasuruan - Indonésia',
		      animation: google.maps.Animation.DROP
		  });
		 
		 
		//   // Exibir texto ao clicar no ícone;
		  google.maps.event.addListener(marcadorPersonalizado, 'click', function() {
		    infowindow.open(map,marcadorPersonalizado);
		  });
		 
		 
		  // Estilizando o mapa;
		  // Criando um array com os estilos
		  var styles = [
		   /* {
		      stylers: [
		        { hue: "#41a7d5" },
		        { saturation: 60 },
		        { lightness: -20 },
		        { gamma: 1.51 }
		      ]
		    },*/
		    {
		      featureType: "road",
		      elementType: "geometry",
		      stylers: [
		        { lightness: 100 },
		        { visibility: "simplified" }
		      ]
		    },
		    {
		      featureType: "road",
		      elementType: "labels"
		    }
		  ];
		 
		  // crio um objeto passando o array de estilos (styles) e definindo um nome para ele;
		  var styledMap = new google.maps.StyledMapType(styles, {
		    name: "Mapa Style"
		  });
		 
		  // Aplicando as configurações do mapa
		  map.mapTypes.set('map_style', styledMap);
		  map.setMapTypeId('map_style');
		 
		}
		 
		 
		// Função para carregamento assíncrono
		function loadScript() {
		  var script = document.createElement("script");
		  script.type = "text/javascript";
		  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDIiWS8DHj4xOj-vcC0susepUUw84LKRMw&sensor=true&callback=initialize";
		  document.body.appendChild(script);
		}
		 
		window.onload = loadScript;

	
