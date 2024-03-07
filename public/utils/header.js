document.write(`
	<style>
		@font-face {
		  font-family: 'Protest Riot';
		  src: url("../../public/font/Protest_Riot/ProtestRiot-Regular.ttf");
		}
		#navbarNav{
			font-size: 22px;
		}
		.container-fluid{
			font-family: 'Protest Riot', sans-serif;
		}
		#navbar_header{
			background: #0d1117;
			padding-top: 10px;
			padding-bottom: 10px;
		}
		#txtHeader{
			color: white;
			font-size: 35px; 
			margin-left: 3%;
		}
		#txtHeader:hover{
			cursor: pointer;
		}
		.navbar-nav a{
			color: white;
		}
		img{
			height: auto;
			margin: 5px;
			width: 30px;
		}
	</style>
	<main>
		<nav class="navbar_class" data-bs-theme="light" id="navbar_header">
		  <div class="container-fluid">
		    <a class="navbar-brand" href="home"><label id="txtHeader">Flip~<img src="../../public/img/owl_white_color.png">~Flops</label></a>
		    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		      <span class="navbar-toggler-icon"></span>
		    </button>
		  </div>
		</nav>
	</main>
	

	`);