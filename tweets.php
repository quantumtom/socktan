<?php include($_SERVER["DOCUMENT_ROOT"]."/include/htmLib.php"); ?>
<!DOCTYPE html>
<html lang="en">

	<?php include($_SERVER["DOCUMENT_ROOT"]."/include/head.php"); ?>

	<body>

	<script type="application/javascript" src="/js/twitter.widget.js"></script>
	<script>
		new TWTR.Widget({
			type: 'search',
			search: "your search query", // includes all advanced search queries.
			width: 250,
			height: 350,
			interval: 6000,
			subject: "What's being said about...",
			title: "JavaScript",
			rpp: 30,
			footer: "Follow me",
			theme: {
				shell: {
					background: '#1deb25',
					color: '#ffffff'
				},
				tweets: {
					background: 'silver',
					color: 'blue',
					links: 'black'
				}
			},

			features: {
				avatars: true, // defaults to false for profile widget, but true for search & faves widget
				hashtags: true,
				timestamp: true,
				fullscreen: false, // ignores width and height and just goes full screen
				scrollbar: false,
				live: true,
				loop: true,
				behavior: 'default',
				dateformat: 'absolute', // defaults to relative (eg: 3 minutes ago)
				toptweets: true // only for search widget
			}
		}).render().start();
	</script>

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