/*General Footer*/ 
class MnFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
    <footer">
    <div class="footer">
    <hr>
        <p>Author: Mercy Mo<br>
        <a href="mailto:hege@example.com">Mercy'sEmail@domain.com</a>
        <br><br>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-google"></a>
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-youtube"></a>
        </p>  
        <br>  
    </div>
</footer>
  `;

	}
}

customElements.define('mn-footer', MnFooter);