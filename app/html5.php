<?php include($_SERVER["DOCUMENT_ROOT"]."/include/htmLib.php"); ?>
<!DOCTYPE html>
<html lang="en">

	<?php include($_SERVER["DOCUMENT_ROOT"]."/include/head.php"); ?>

	<body>

		<div data-role="page" id="<?php echo $pageTitle; ?>" data-theme="a">

			<?php include($_SERVER['DOCUMENT_ROOT']."/include/header.php"); ?>

			<div data-role="content">
				
				<div data-role="collapsible-set">

					<div data-role="collapsible" data-collapsed="false">
				
						<h3>HTML5</h3>

						<img src="/img/html5.png" class="portfolio" alt="html5 socktan" />
				
						<p>So, chances are, by this point you've heard of HTML5. That's good, even though you 
						may not really know why. html5 isn't really so much a single piece of technology, but 
						rather three components that can work independently of one another. Together, they pretty 
						much eliminate the need for third-party browser plugins like Flash and Java.</p>
					
					</div>
					
					<div data-role="collapsible" data-collapsed="true">
									
						<h3>Video</h3>

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
					
				</div>
				
			</div>

			<?php include($_SERVER['DOCUMENT_ROOT']."/include/footer.php"); ?>

		</div>

		<?php include($_SERVER["DOCUMENT_ROOT"]."/include/js.php"); ?>

	</body>

</html>