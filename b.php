<?php include($_SERVER["DOCUMENT_ROOT"]."/include/htmLib.php"); ?>
<!DOCTYPE html>
<html lang="en">

	<?php include($_SERVER["DOCUMENT_ROOT"]."/include/head.php"); ?>

	<body>

		<?php include($_SERVER["DOCUMENT_ROOT"].$contentPage); ?>

		<script type="application/javascript" src="/js/jquery/jquery-1.7.2.min.js"></script>

		<script type="application/javascript" src="/js/webkit/core.js"></script>

		<?php echo $specialJS; ?>

		<script type="application/javascript" src="/js/jquery/jquery.mobile-1.1.0.min.js"></script>

	</body>

</html>