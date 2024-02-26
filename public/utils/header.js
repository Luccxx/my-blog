document.write(`
	<style>
		@font-face {
		  font-family: 'Protest Riot';
		  src: url("../../public/font/Protest_Riot/ProtestRiot-Regular.ttf");
		}
		#navbarNav{
			margin-left: 26rem;
			margin-right: 26rem;
			font-size: 22px;
		}
		#navbar_header{
			font-family: 'Protest Riot', sans-serif;
		}
		#txtHeader{
			font-size: 30px;
		}
		.navbar-nav a{
			color: white;
		}
	</style>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
	<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" id="navbar_header">
	  <div class="container-fluid">
	    <a class="navbar-brand" href="home"><label id="txtHeader">Blogs~Blogs</label></a>
	    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	      <span class="navbar-toggler-icon"></span>
	    </button>
	    <div class="collapse navbar-collapse" id="navbarNav">
	      <ul class="navbar-nav">
	        <li class="nav-item">
	          <a class="nav-link" href="#" >Home</a>
	        </li>
	        <li class="nav-item">
	          <a class="nav-link" href="#">About</a>
	        </li>
	        <li class="nav-item">
	          <a class="nav-link" href="#">Posts</a>
	        </li>
	      </ul>
	    </div>
	  </div>
	</nav>
	<br>
	`);