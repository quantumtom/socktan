<?php include($_SERVER["DOCUMENT_ROOT"]."/include/htmLib.php"); ?>
<!DOCTYPE html>
<html lang="en">

	<?php include($_SERVER["DOCUMENT_ROOT"]."/include/head.php"); ?>

	<body>

		<div data-role="page" id="<?php echo $pageTitle; ?>" data-theme="a">

			<?php include($_SERVER['DOCUMENT_ROOT']."/include/header.php"); ?>

			<div data-role="content">
			
				<div class="ui-grid-b">
				
					<div class="ui-block-a">

						<a data-theme="b" href="mailto:info@socktan.com" data-role="button" data-inline="true" data-mini="false">Email</a>
						
					</div>

					<div class="ui-block-b">

						<a data-theme="b" href="sms:1-424-242-9323" data-role="button" data-inline="true" data-mini="false">SMS</a>

					</div>

					<div class="ui-block-c">

						<a data-theme="b" href="tel:1-424-242-9323" data-role="button" data-inline="true" data-mini="false">Phone</a>
						
					</div>
					
				</div>

				<form action="#" method="post" id="contactform">
				
					<div data-role="fieldcontain">

						<fieldset data-role="controlgroup">

						   <label for="checkbox-1">Mobile Web</label>

						   <input type="checkbox" name="checkbox-1" id="checkbox-1" class="custom" />

						   <label for="checkbox-2">Facebook Apps</label>

						   <input type="checkbox" name="checkbox-2" id="checkbox-2" class="custom" />

						   <label for="checkbox-3">HTML5</label>

						   <input type="checkbox" name="checkbox-3" id="checkbox-3" class="custom" />

						   <label for="checkbox-4">JavaScript</label>

						   <input type="checkbox" name="checkbox-4" id="checkbox-4" class="custom" />

						   <label for="checkbox-5">CSS3</label>

						   <input type="checkbox" name="checkbox-5" id="checkbox-5" class="custom" />

						   <label for="checkbox-6">WebKit Browsers</label>

						   <input type="checkbox" name="checkbox-6" id="checkbox-6" class="custom" />

						</fieldset>

					</div>
					
<!--

					<div data-role="fieldcontain" class="ui-hide-label" data-inline="true">

						<label for="username">Your name</label>

						<input id="username" name="name" value="" placeholder="Your name" />

					</div>
					
					<div data-role="fieldcontain" class="ui-hide-label" data-inline="true">

						<label for="email">Your e-mail</label>

						<input type="email" id="email" name="email" value="" placeholder="Your e-mail" />

					</div>
					
					<div data-role="fieldcontain" class="ui-hide-label" data-inline="true">
					
						<label for="telephone">Your phone number</label>

						<input type="tel" id="telephone" name="telephone" value="" placeholder="Your phone number" />

					</div>
					
				-->
					
				</form>
				
			</div>

			<?php include($_SERVER['DOCUMENT_ROOT']."/include/footer.php"); ?>

		</div>

		<?php include($_SERVER["DOCUMENT_ROOT"]."/include/js.php"); ?>

	</body>

</html>