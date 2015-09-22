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

		<?php include($_SERVER["DOCUMENT_ROOT"]."/include/js.php"); ?>

	</body>

</html>