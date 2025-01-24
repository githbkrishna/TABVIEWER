import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div id="waChat" class="waChat">
			<div class="waChat-container">
				<a class="waChat-toggle" target="_blank" href="https://api.whatsapp.com/send?phone=93XXXXXXXX&amp;text=Hello, let's discuss more about this product!">
					<i class="fa-brands fa-whatsapp"></i>
					<span class="waChat-text">How can I help you?</span>
				</a>
			</div>
		</div>
        <div className="footer-content" id='support'>
            <div className="footer-section">
                <h3>Made with</h3>
                <ul className="bottom-footer">
                    <span>❤ by</span>
                    <h4>Hariom Singh</h4>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Resources</h3>
                <ul className="footer-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#letsTry">Features</a></li>
                    <li><a href="#support">Support</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Social</h3>
                <ul className="footer-links social">
                    <li><a href="mailto:krishna636471@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/hariomsingh97/" target='blank'><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/githbkrishna" target='blank'><i className="fa-brands fa-github"></i></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer