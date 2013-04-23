<?php include($_SERVER["DOCUMENT_ROOT"]."/include/htmLib.php"); ?>
<!DOCTYPE html>
<html lang="en">

	<?php include($_SERVER["DOCUMENT_ROOT"]."/include/head.php"); ?>

	<body>

		<div data-role="page" id="<?php echo $pageTitle; ?>" data-theme="a">

			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/header.php"); ?>

			<div data-role="content">

				<div data-role="collapsible-set">

					<div data-role="collapsible" data-collapsed="false">
				
						<h3>socktan digital</h3>

						<p>Socktan designs and builds original web sites for small businesses, non-profits, and other organizations. 

						We also count artists and business professionals among our clients.</p>
					
					</div>

					<div data-role="collapsible" data-collapsed="true">
				
						<h3>jQuery Mobile Framework</h3>
						
						<p>6.8 Billion people<br />5.3 Billion active mobile subscriptions</p>

						<p>10+ billion web-enabled mobiles by 2013</p>

						<img src="/img/jquery-mobile.png" alt="jQuery Mobile Framework" />
							
						<blockquote data-cite="http://trends.builtwith.com/javascript/JQuery">
						
							jQuery is a fast, concise, JavaScript Library that simplifies how you traverse HTML documents, handle events, perform animations, and add Ajax interactions to your web pages. jQuery is designed to change the way that you write JavaScript.
							
							<br />- http://trends.builtwith.com/javascript/JQuery
							
						</blockquote>
						
					</div>

					<div data-role="collapsible" data-collapsed="true">
									
						<h3>video</h3>

						<p>The new <code>&lt;video&gt;</code> tag in html5 permits web browsers to natively 
						render video objects. Its arrival is long overdue and the prominence of its absence 
						accounts for the popularity of Adobe's Flash plugin.</p>
						
						<p>As it turns out, implementing this technology is daunting. There are numerous codecs 
						for both the video and audio streams. Each platform has it's own quirks and 
						each browser exhibits its own and aberrant behavior. Including mobile devices, the 
						complexity becomes quite daunting.</p>

						<div style="text-align:center;">
						
							<video poster="/test/movie.png" controls="controls" tabindex="0">

								<source src="/test/movie.ogv" type='video/ogg; codecs="theora, vorbis"' />

								<source src="/test/movie.webm" type='video/webm; codecs="vp8, vorbis"' />

								<source src="/test/movie.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />

								Video tag not supported. Download the video <a href="/test/movie.webm">here</a>.

							</video>
						
						</div>
					
					</div>
					
					<div data-role="collapsible" data-collapsed="true">
				
						<h3>lol wut</h3>

						<p>Socktan operates in the sizable gap left between the amateur design shop and the larger corporate 

						agencies. Our projects might be a single-page brochure web site or a complex database-driven commerce 

						or social media site. We take pride in being knowledgable and friendly professionals. Our clients 

						love us and they never hesitate to recommend our work.</p>

					</div>

					<div data-role="collapsible" data-collapsed="true">
				
						<h3>us</h3>

						<p>Our clients include startups and blue chip businesses alike. We keep on top of new technologies. Mind you, that's not an easy job.</p>

					</div>

					<div data-role="collapsible" data-collapsed="true">
				
						<h3>work</h3>

						<p>Fortunately, we love our work. Actually, it's a very exciting time for everyone working with web technology.</p>
						
					</div>

					<div data-role="collapsible" data-collapsed="true">
				
						<h3>artisan websites</h3>

						<p>Socktan is a group of skilled digital artisans working together to provide web-centric professional 

						services. We're based in the greater Los Angeles metropolitan area. We take care of your "Internet Presence" so 

						you can focus on running your business. Our aim is to aid our clients in their effort to communicate 

						a message to their audience. Whether that audience is a customer, a client, or the public at large, 

						businesses without web-presence are becoming an endangered species. Customers are using the 

						web to find you. Trends like social media and web mobility are becoming essential to surviving in the 

						marketplace. Doing business on the web has never been a better idea. And the penalty for avoiding 

						it has never been greater.</p>
						
					</div>
				
				</div><!-- /-- collapsible-set -->

			</div><!-- // content -->

			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/footer.php"); ?>

		</div><!-- // page -->
	
		<script type="text/javascript" src="/js/jquery/jquery-1.7.2.min.js"></script>

		<script type="text/javascript" src="/js/webkit/core.js"></script>

		<script type="text/javascript" src="/js/jquery/jquery.mobile-1.1.0.min.js"></script>

	</body>

</html>