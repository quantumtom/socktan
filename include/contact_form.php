<?php
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//	NAME:		KILLER CONTACT PAGE
//	AUTHOR:		Tom Cornyn (tom@socktan.com)
//	GROUP:		Socktan, Inc. (www.socktan.com)
//	CREATED:	2008-06-29
//	MOD:		2009-07-08
//	INFO:		Essentailly a custom wrapper for the mail() function.
//	DESC:		This is a PHP contact page with lots of bells and whistles. It 
//				incorporates server side form data validation via both 
//				conventional and AJAX (using Prototype, jQuery, and 
//				JSON) HTTP requests. Additional features include Recaptcha! 
//				verification and form data reportage to a MySQL database and
//				mail recipients.
//
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

include($_SERVER['DOCUMENT_ROOT']."/include/recaptchalib.php");	// Library for Recaptcha functionality
include($_SERVER['DOCUMENT_ROOT']."/include/JSON.php");			// Library for JSON functionality

$formErrors = array('username' => '','email'=> '','telephone' => '','recaptcha_response_field' => '');
$formValues = array('username' => '','email'=> '','telephone' => '','recaptcha_response_field' => '');

// Enables intercompatibility between newer and older versions of PHP (e.g. 4.1 and 5.2)
// Basically just a conditional wrapper
if( !function_exists('json_encode') ) {
    function json_encode($data) {
        $json = new Services_JSON();
        return( $json->encode($data) );
    }
}

if( !function_exists('json_decode') ) {
    function json_decode($data) {
        $json = new Services_JSON();
        return( $json->decode($data) );
    }
}

$sValidFormResponse = "";

// This constant uses server (environment) variables to determine if the page request is coming from AJAX or conventional HTTP and determines if the data response should be in the form of HTML, JSON, or other ... (XML et cetera)
define('REQUEST_IS_AJAX', isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');

// Checks for a flag hidden in the HTML form that positively identifies the HTTP request coming from
// a conventional form submission.
if (@$_REQUEST['action'] == 'register') {
    $formValues = $_POST;
    $formErrors = array();
    
    if (VerifyForm($formValues, $formErrors))
		$sValidFormResponse = ProcessForm($formValues);
}

// Execute this conditional statement if the request is via AJAX
if (REQUEST_IS_AJAX) {
	
	// Depending on the input source process the validation and 
	// send the appropriate corresponding response
	// structured data (an array) back to the JavaScript
	// after encoding it as JSON.
	// This specified in the jQuery.ajax 'data' option.
	switch (@$_REQUEST['action']) {
		case 'check_username':
			echo json_encode(Checkusername($_REQUEST['username']));
			break;
		case 'check_email':
			echo json_encode(Checkemail($_REQUEST['email']));
			break;
		case 'check_telephone':
			echo json_encode(Checktelephone($_REQUEST['telephone']));
			break;
		default:
			break;
	}
	exit;
}

// Form verification called if HTTP request is coming from form submission.
function VerifyForm(&$values, &$errors)
{
	$validusername = array();
	$validemail = array();
	$validtelephone = array();
	$validRecaptcha = array();

    // Verify form data - we recycle the same functions for validation, 
	// but instead of taking the array data they return and placing passing it on
	// to jQuery as JSON we populate the HTML error span tags directly using
	// PHP echo.
	$validusername = Checkusername($values['username']);
	$validemail = Checkemail($values['email']);
	$validtelephone = Checktelephone($values['telephone']);
	
	if (!$validusername['ok']) $errors['username'] = $validusername['msg'];	
	if (!$validemail['ok']) $errors['email'] = $validemail['msg'];
	if (!$validtelephone['ok']) $errors['telephone'] = $validtelephone['msg'];	
        

	// Recaptacha functionality - description available at www.recaptacha.org
	$privatekey = "6LeOiQYAAAAAAD4d46VdSnBpIoa706fJ7dK5Me21";

	$validRecaptcha = recaptcha_check_answer ($privatekey,
									$_SERVER["REMOTE_ADDR"],
									$values['recaptcha_challenge_field'],
									$values['recaptcha_response_field']);

	if (!$validRecaptcha->is_valid)
		$errors['recaptcha_response_field'] = 'Type the words above';

	return (count($errors) == 0);
}

//echo("POST username is: '" . $_REQUEST['username'] . "'");

////////////////////////////////////////////////////////////////////////////////
//
//	NAME:		ProcessForm($arrFormData)
//	RETURNS:	String with response message.
//	AUTHOR:		Tom Cornyn (tom@socktan.com)
//	CREATED:	2008-06-29
//	MOD:		2009-07-08
//	INFO:		Once validation has been verified this form takes care of the
//				pushing the data out to its destinations and reporting back
//				on the status of those pushes
//	PARAMS:		$arrFormData - array containing form data
//
////////////////////////////////////////////////////////////////////////////////

function ProcessForm($arrFormData)
{

	$CRLF = "\r\n";

	$sTimestamp = date('l jS \of F Y h:i:s A');

	$susername = $arrFormData['username'];
	$semail = $arrFormData['email'];
	$stelephone = $arrFormData['telephone'];
	
	$sRecipient = $sSender;	// E-mail is going to this address

	// Assemble the message's subject line
	$sMessageSubject = $susername . " wants to talk (" . $sTimestamp . ")";

	$sMailBody = $susername . " filled out the contact form on www.socktan.com at " . $sTimestamp . $CRLF
		. "Name:" . $susername . $CRLF
		. "E-mail:" . $semail . $CRLF
		. "Phone number:" . $stelephone;

	$sSender = $susername . "<" . $semail . ">";		// E-mail is coming from this address

	// Assemble the additional headers for the message
	$sHeaders = "From: " . $sSender . $CRLF
		. "X-Sender: www.socktan.com" . $CRLF
		. "X-Priority: 1" . $CRLF
		. "Reply-To: " . $sSender . $CRLF
		. "X-Mailer: PHP/". phpversion();

	ini_set(sendmail_from, $sSender); // if you can send from this address it might work

	// Determine the appropriate response message in case there was a problem sending the message	
	if (mail("Tom Cornyn <cornyn@gmail.com>", $sMessageSubject, $sMailBody, $sHeaders)) {
		$sResponseMessage = "Thank you for your information. We will contact you shortly. <br />" . $CRLF;

		// SendResponseMessage($arrFormData);
	} else {
		$sResponseMessage = "<span style=\"color:red;font-weight:bold;\">Unfortunately your information could not be delivered successfully. This is our fault. Please give us a call or send us an e-mail.</span>";
	}
	
	// Send out the info to the database.
	$sDbMessage = AddToDatabase($arrFormData);

	$con = mysql_connect("localhost","socktanc_nothing","Socktan09");

	if (!$con) {
		return ("There was a problem adding your information to our database. '" . $sDbMessage . "'");	
		exit;
	}
	else {
		mysql_select_db("socktanc_corporate", $con);

		$query = "SELECT UserID, username, email, Phone FROM contacts WHERE username = '" . $susername	 . "';";

		$result = mysql_query($query);

		// Check result
		// This shows the actual query sent to MySQL, and the error. Useful for debugging.

		if (!$result) {
			$message  = 'Invalid query: ' . mysql_error() . "\n";
			$message .= 'Whole query: ' . $query;
			die($message);
		} else {
			$row = mysql_fetch_row($result);
//			$sResponseMessage = "ID: " . $row[0] . "<br />";
			$sResponseMessage .= "<br />";
			$sResponseMessage .= "<b>Your name</b>: " . $row[1] . "<br />";
			$sResponseMessage .= "<b>Your e-mail</b>: " . $row[2] . "<br />";
			$sResponseMessage .= "<b>Your phone</b>: " . $row[3] . "<br />";
		}

		mysql_close($con);
	}


	$htmResponse .= "<p>" . $sDbMessage . "<br />" . $sResponseMessage . "</p>";
	
	return ($htmResponse);
}

////////////////////////////////////////////////////////////////////////////////
//
//	NAME:		Checkusername($sData)
//	RETURNS:	Array with bool and string indicating status and response msg.
//	AUTHOR:		Tom Cornyn (tom@socktan.com)
//	CREATED:	2008-06-29
//	MOD:		2009-07-08
//	INFO:		Simple string length validation
//
//	PARAMS:		$sData - the string to be tested
//
////////////////////////////////////////////////////////////////////////////////
function Checkusername($sData) {
	$resp = array();

	$sData = trim($sData);

	if (strlen($sData) < 2) {
		$resp = array('ok' => "no", 'msg' => "Please enter your name");
	} else {
		$resp = array('ok' => "yes", "msg" => "Okay, '" . $sData . "' is it?");
	}

	return $resp;        
}

////////////////////////////////////////////////////////////////////////////////
//
//	NAME:		Checkemail($sData)
//	RETURNS:	Array with bool and string indicating status and response.
//	AUTHOR:		Tom Cornyn (tom@socktan.com)
//	CREATED:	2008-06-29
//	MOD:		2009-07-28
//	INFO:		Simple regex e-mail validation
//
//	PARAMS:		$sData - the string to be tested
//
////////////////////////////////////////////////////////////////////////////////
function Checkemail($sData) {
	$resp = array();

	$sRegExPattern = '/^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*$/';
	$sData = trim($sData);

	if (!$sData) {
		$resp = array('ok' => 'no', 'msg' => "Please enter an e-mail address");
	} else if (strlen($sData) < 4) {
		$resp = array('ok' => 'maybe', 'msg' => $sData);
	} else {
		if (preg_match($sRegExPattern, $sData)) {
			$resp = array('ok' => 'yes', "msg" => "Okay - good e-mail address!");
		} else {
			$resp = array('ok' => 'no', 'msg' => "Please enter a valid e-mail address");
		}
	}

	return $resp;        
}

////////////////////////////////////////////////////////////////////////////////
//
//	NAME:		Checktelephone($sData)
//	RETURNS:	Array with bool and string indicating status and response msg.
//	AUTHOR:		Tom Cornyn (tom@socktan.com)
//	CREATED:	2008-06-29
//	MOD:		2009-07-08
//	INFO:		Simple regex pattern validation
//
//	PARAMS:		$sData - the string to be tested
//
////////////////////////////////////////////////////////////////////////////////
function Checktelephone($sData) {
	$resp = array();

	$sData = trim($sData);

	if (!$sData) {
		$resp = array('ok' => "no", 'msg' => "Please enter a telephone number.");
	} else if (!ereg('\(?[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}', $sData)) {
		$resp = array('ok' => "no", 'msg' => FormatPhone($sData) . ".");
	} else {
		$resp = array('ok' => "yes", "msg" => "Okay, we have " . FormatPhone($sData) . ".");
	}

	return $resp;        
}

////////////////////////////////////////////////////////////////////////////////
//
//	NAME:		FormatPhone($stelephone)
//	RETURNS:	String
//	AUTHOR:		tylerhall
//	CREATED:	n/a
//	MOD:		2009-07-29
//	INFO:		Formats a ten digit phone number to (NNN) 555-1212.
//
//	PARAMS:		$stelephone - a string, hopefully formatted with a ten-digit 
//				number
//
////////////////////////////////////////////////////////////////////////////////
function FormatPhone($stelephone)
{
	$stelephone = preg_replace("/[^0-9]/", "", $stelephone);

	return preg_replace("/([0-9]{3})([0-9]{3})([0-9]{4})/", "($1) $2-$3", $stelephone);
}

////////////////////////////////////////////////////////////////////////////////
//
//	NAME:		SendInfoMessage($arrFormData)
//	RETURNS:	Boolean (from mail())
//	AUTHOR:		Tom Cornyn (tom@socktan.com)
//	CREATED:	2008-06-29
//	MOD:		2009-07-08
//	INFO:		Essentailly a custom wrapper for the mail() function.
//
//	PARAMS:		$arrFormData - array containing form data
//
////////////////////////////////////////////////////////////////////////////////

function SendInfoMessage($arrFormData)
{
	$CRLF = "\r\n";

	$sTimestamp = date('l jS \of F Y h:i:s A');
	$sSender = "info@socktan.com";		// E-mail is coming from this address

	$susername = $arrFormData['username'];
	$semail = $arrFormData['email'];
	$stelephone = $arrFormData['telephone'];
	
	$sRecipient = $sSender;	// E-mail is going to this address

	// Assemble the message's subject line
	$sMessageSubject = $susername . " wants to talk (" . $sTimestamp . ")";

	$sMailBody = $susername . " filled out the contact form on www.socktan.com at " . $sTimestamp . $CRLF
		. "They want to talk.". $CRLF . $CRLF
		. "Name:" . $susername . $CRLF
		. "E-mail:" . $semail . $CRLF
		. "Phone number:" . $stelephone;

	// Assemble the additional headers for the message
	$sHeaders = "From: " . $sSender . $CRLF
		. "Reply-To: " . $sSender . $CRLF
		. "X-Mailer: PHP/". phpversion();

	ini_set(sendmail_from, $sSender); // if you can send from this address it might work

	return mail($sRecipient, $sMessageSubject, $sMailBody, $sHeaders);
}

////////////////////////////////////////////////////////////////////////////////
//
//	NAME:		SendResponseMessage($arrFormData)
//	RETURNS:	Boolean (from mail())
//	AUTHOR:		Tom Cornyn (tom@socktan.com)
//	CREATED:	2008-07-20
//	MOD:		2009-07-20
//	INFO:		Essentailly a custom wrapper for the mail() function.
//
//	PARAMS:		$arrFormData - array containing form data
//
////////////////////////////////////////////////////////////////////////////////

function SendResponseMessage($arrFormData)
{
	$CRLF = "\r\n";

	$sTimestamp = date('l jS \of F Y h:i:s A');
	$sSender = "Socktan Website <info@socktan.com>";

	$susername = $arrFormData['username'];
	$semail = $arrFormData['email'];
	$stelephone = $arrFormData['telephone'];
	
	// Assemble the list of destination addresses
	$sRecipient = $susername . "<" . $semail . ">";

	// Assemble the message's subject line
	$sMessageSubject = $susername . ", we've received your contact info (" . $sTimestamp . ")";

	$sMailBody = "Dear " . $susername . ":" . $CRLF . $CRLF
		. "This is an e-mail to confirm our receipt of your submission of the contact form at " . $sTimestamp . "." . $CRLF . $CRLF
		. "The following information was received and has been forwarded to the appropriate personnel:" . $CRLF . $CRLF
		. "Name: " . $susername . $CRLF
		. "E-mail: " . $semail . $CRLF
		. "Phone number: " . $stelephone;;

	// Assemble the additional headers for the message
	$sHeaders = "From: " . $sSender . $CRLF
		. "Reply-To: " . $sSender . $CRLF
		. "X-Mailer: PHP/". phpversion();

	ini_set(sendmail_from, $sSender); // if you can send from this address it might work

	return mail($sRecipient, $sMessageSubject, $sMailBody, $sHeaders);
}


////////////////////////////////////////////////////////////////////////////////
//
//	NAME:		AddToDatabase($arrFormData)
//	RETURNS:	String; empty if successful - error message otherwise
//	AUTHOR:		Tom Cornyn (tom@socktan.com)
//	CREATED:	2008-06-29
//	MOD:		2009-07-08
//	INFO:		Essentailly a custom wrapper for the mail() function.
//
//	PARAMS:		$arrFormData - array containing form data
//
////////////////////////////////////////////////////////////////////////////////

function AddToDatabase($arrFormData)
{
	$susername = $arrFormData['username'];
	$semail = $arrFormData['email'];
	$stelephone = $arrFormData['telephone'];
	
	$con = mysql_connect("localhost","socktanc_nothing","Socktan09");

	if (!$con) {
		return (" There was a problem adding your information to our database. '" . $sDbMessage . "'");	
		exit;
	}														  
	else {
		mysql_select_db("socktanc_corporate", $con);

		$query = sprintf("INSERT INTO contacts (username, email, Phone) VALUES ('%s', '%s','%s')",
		mysql_real_escape_string($susername),
		mysql_real_escape_string($semail),
		mysql_real_escape_string($stelephone));

		$result = mysql_query($query);

		// Check result
		// This shows the actual query sent to MySQL, and the error. Useful for debugging.
		if (!$result) {
			$message  = 'Invalid query: ' . mysql_error() . "\n";
			$message .= 'Whole query: ' . $query;
			die($message);
		} else {			
			$sResponseMessage = " The database was updated successfully.";			
		}

		mysql_close($con);

		return ($sResponseMessage);
	}
}

?>