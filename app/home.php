<?php include($_SERVER["DOCUMENT_ROOT"]."/include/htmLib.php"); ?>
<!DOCTYPE html>
<html lang="en">

	<?php include($_SERVER["DOCUMENT_ROOT"]."/include/head.php"); ?>

	<body>

		<div data-role="page" id="<?php echo $pageTitle; ?>">

			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/header.php"); ?>

			<div data-role="content">

				<div data-role="collapsible-set">

					<div data-role="collapsible" data-collapsed="false">
				
						<h3>About</h3>

						<p>Socktan designs and builds original web sites for small businesses, non-profits, and other organizations. 

						We also count artists and business professionals among our clients.</p>
					
					</div>

					<div data-role="collapsible" data-collapsed="true">
				
						<h3>Info</h3>

						<p>Socktan operates in the sizable gap left between the amateur design shop and the larger corporate 

						agencies. Our projects might be a single-page brochure web site or a complex database-driven commerce 

						or social media site. We take pride in being knowledgable and friendly professionals. Our clients 

						love us and they never hesitate to recommend our work.</p>

					</div>

					<div data-role="collapsible" data-collapsed="true">
				
						<h3>Who</h3>

						<p>Socktan is a group of skilled digital creatives working together to provide web-centric professional services. Based on the Southern California coast, we aid our clients in their effort to communicate a message to their audience. Whether that audience is a customer, a client, or the public at large, businesses without web-presence are becoming an endangered species. Customers are using the
							web to find you. Trends like social media and web mobility are becoming essential to surviving in the
							marketplace.</p>
						
					</div>
				
				</div><!-- /-- collapsible-set -->

			</div><!-- // content -->

			<?php include($_SERVER["DOCUMENT_ROOT"]."/include/footer.php"); ?>

		</div><!-- // page -->

		<?php include($_SERVER["DOCUMENT_ROOT"]."/include/js.php"); ?>

	</body>

</html>