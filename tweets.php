<?php include($_SERVER["DOCUMENT_ROOT"]."/include/htmLib.php"); ?>
<!DOCTYPE html>
<html lang="en">

	<?php include($_SERVER["DOCUMENT_ROOT"]."/include/head.php"); ?>

	<body>

		<div data-role="page" id="<?php echo $pageTitle; ?>" data-theme="a">

			<?php include($_SERVER['DOCUMENT_ROOT']."/include/header.php"); ?>

			<div data-role="content">
			
				<div id="tweetTarget"></div>

			</div>

			<?php include($_SERVER['DOCUMENT_ROOT']."/include/footer.php"); ?>

		</div>
	
		<script type="text/javascript" src="/js/jquery/jquery-1.7.2.min.js"></script>

		<script type="text/javascript" src="/js/twitter-0.1.js"></script>

		<script type="text/javascript" src="/js/webkit/core.js"></script>

		<script type="text/javascript" src="/js/jquery/jquery.mobile-1.1.0.min.js"></script>

	</body>

</html>