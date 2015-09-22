<?php include($_SERVER["DOCUMENT_ROOT"]."/include/htmLib.php"); ?>
<!DOCTYPE html>
<html lang="en">

	<?php include($_SERVER["DOCUMENT_ROOT"]."/include/head.php"); ?>

	<body>

		<div data-role="page" id="<?php echo $pageTitle; ?>" data-theme="a">

			<?php include($_SERVER['DOCUMENT_ROOT']."/include/header.php"); ?>

			<div data-role="content">

				<div data-role="collapsible-set">

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
					
				</div>

			</div>

			<?php include($_SERVER['DOCUMENT_ROOT']."/include/footer.php"); ?>

		</div>

		<?php include($_SERVER["DOCUMENT_ROOT"]."/include/js.php"); ?>

	</body>

</html>