/*General Header*/ 
class MnHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = ` 
    <head>
    <title>MercyMo</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="main.css"/>
    <script type="text/javascript" src="main.js"> </script>
    <script type="text/javascript" src="Header.js"> </script>
    <script type="text/javascript" src="Footer.js"> </script>
	</head>
	<header>
			<div class="header">
				<a class="logo" href="index.html"> Mercy Moreno</a>
				<div class="header-right">
				    <a class="active" href="index.html">Home</a>
					<a class="active" href="bio.html">Bio</a>
					<a class="active" href="blog.html">Blog</a>
			</div>
			</div>
		</header>
        `;
	}
}
customElements.define('mn-header', MnHeader);

