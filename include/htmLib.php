<?php

	define("__ROOT__", $_SERVER["DOCUMENT_ROOT"]);

	define("__PAGE__", $_SERVER["SCRIPT_NAME"]);

	define("__UIBA__", " ui-state-persist");
	
	$contentPage = "/pages/" . $_SERVER["SCRIPT_NAME"];
	
	$uiStyle = " data-theme=\"c\"";

//	$uiStyle = "";

//	$uiHeadStyle = " data-theme=\"c\"";

//	$uiFootStyle = " data-theme=\"c\"";

	$uiHeadStyle = " data-theme=\"c\"";

	$uiFootStyle = " data-theme=\"c\"";

	$uiContentStyle = " data-content-theme=\"c\"";

//	$uiGridStyle = " data-theme=\"a\"";

	$uiContentStyle = " data-content-theme=\"c\"";

//	$domain_name="http://www.socktan.com";

	$domain_name="";

	$specialCSS="";

	$specialJS="";

switch ($_SERVER["SCRIPT_NAME"]) {
	case "/reel.php":
		$pageTitle="reel";
		$pageDesc="Recent Work";
		$metaDescription="We have been building websites for quite some time now. One of the drawbacks of that is many of our early works are no longer online. Fortunately, that is not true in every case.";
		$metaKeywords="websites,web,web development,api,rest,twitter,json,ajax";
		break;
	case "/jquery.php":
		$pageTitle="jquery";
		$pageDesc="jQuery Mobile Framework 1.0 Final";
		$metaDescription="If you've ever done front-end web development or worked as a UI engineer, jQuery will rock your world.";
		$metaKeywords="jquery,web site,css,javascript,jquery development,html5,rest,json,ajax,php";
		break;
	case "/html5.php":
		$pageTitle="html5";
		$pageDesc="HTML5 Video";
		$metaDescription="The future is wow! html5";
		$metaKeywords="html5,javascript api,location awareness,browswer video,jquery,ajax,css3";
		break;
	case "/talk.php":
		$pageTitle="talk";
		$pageDesc="Talk to Us";
		$metaDescription="Whether you are a human or a robot, we would love to hear from you (robots are often more interesting). We can get started on your project right away.";
		$metaKeywords="web designer,jquery,javascript,santa monica,websites,web design,web development,api,rest,twitter,json,ajax  ";
		break;
	case "/home.php":
		$pageTitle="home";
		$pageDesc="Home";
		$metaDescription="Whether you are a human or a robot, we would love to hear from you (robots are often more interesting). We can get started on your project right away.";
		$metaKeywords="web designer,jquery,javascript,santa monica,websites,web design,web development,api,rest,twitter,json,ajax  ";
		break;
	case "/tweets.php":
		$pageTitle="tweets";
		$pageDesc="Tweets";
		$metaDescription="Twitter rocks!";
		$metaKeywords="mobile,mobile web,twitter,web design,websites,web designer,javascript,santa monica,web developer,json,ajax  ";
		break;
	case "/webkit.php":
		$pageTitle="webkit";
		$pageDesc="Webkit";
		$metaDescription="We keep on top of new technologies. It is not an easy job. It is actually a very exciting time for everyone working with the internet. And we have assimilated them all to our repertoire: AJAX, JSON, APIs, semantic interoperability and enhancements to the user interface, such as the Prototype Javascript Framework.";
		$metaKeywords="json,ajax,creative,digital,website design,web design firm,web designer,api,rest";
		break;
	default:
		$pageTitle="about";
		$pageDesc="About Us";
		$metaDescription="This is just a little AJAX (for asynchronous HTTP communication) demo page I am working on.";
		$metaKeywords="json,ajax,websites,web,web development,api,rest,twitter";
		break;
	}

function MakeJSTag($js_path) {
	return "\t\t<script type=\"text/javascript\" src=\"".$js_path."\"></script>\n";
}

function MakeCSSTag($css_path) {
	return "\t\t<link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"".$css_path."\"></link>\n";
}

function MakeTitleTag($pageTitle) {
	$pageTitle = substr("Socktan Websites of Santa Monica - ".$pageTitle,0,65);
	return "\t\t<title>".$pageTitle."</title>\n";
}

function MakeMetaTag($tag_name,$tag_content) {
	return "\t\t<meta name=\"".$tag_name."\" content=\"".$tag_content."\" />\n";
}

function showStatesDrop()
{
	$states_arr=array('AL'=>"Alabama",'AK'=>"Alaska",'AZ'=>"Arizona",'AR'=>"Arkansas",'CO'=>"Colorado",'CT'=>"Connecticut",'DE'=>"Delaware",'DC'=>"District Of Columbia",'FL'=>"Florida",'GA'=>"Georgia",'HI'=>"Hawaii",'ID'=>"Idaho",'IL'=>"Illinois", 'IN'=>"Indiana", 'IA'=>"Iowa",  'KS'=>"Kansas",'KY'=>"Kentucky",'LA'=>"Louisiana",'ME'=>"Maine",'MD'=>"Maryland", 'MA'=>"Massachusetts",'MI'=>"Michigan",'MN'=>"Minnesota",'MS'=>"Mississippi",'MO'=>"Missouri",'MT'=>"Montana",'NE'=>"Nebraska",'NV'=>"Nevada",'NH'=>"New Hampshire",'NJ'=>"New Jersey",'NM'=>"New Mexico",'NY'=>"New York",'NC'=>"North Carolina",'ND'=>"North Dakota",'OH'=>"Ohio",'OK'=>"Oklahoma", 'OR'=>"Oregon",'PA'=>"Pennsylvania",'RI'=>"Rhode Island",'SC'=>"South Carolina",'SD'=>"South Dakota",'TN'=>"Tennessee",'TX'=>"Texas",'UT'=>"Utah",'VT'=>"Vermont",'VA'=>"Virginia",'WA'=>"Washington",'WV'=>"West Virginia",'WI'=>"Wisconsin",'WY'=>"Wyoming");

	return (showOptionsDrop($states_arr));
}

function showOptionsDrop($array){
	$string="";
	foreach($array as $k => $v){        
		$string .= "<option class='text' value='".$k."'".$s.">".$v."</option>"."\n"; 
	}
	return $string;
}

/**
 * Converts an associative array of arbitrary depth and dimension into JSON representation.
 *
 * NOTE: If you pass in a mixed associative and vector array, it will prefix each numerical
 * key with "key_". For example array("foo", "bar" => "baz") will be translated into
 * {'key_0': 'foo', 'bar': 'baz'} but array("foo", "bar") would be translated into [ 'foo', 'bar' ].
 *
 * @param $array The array to convert.
 * @return mixed The resulting JSON string, or false if the argument was not an array.
 * @author Andy Rusterholz
 */
function array_to_json( $array ){

    if( !is_array( $array ) ){
        return false;
    }

    $associative=count( array_diff( array_keys($array), array_keys( array_keys( $array )) ));
    if( $associative ){

        $construct=array();
        foreach( $array as $key => $value ){

            // We first copy each key/value pair into a staging array,
            // formatting each key and value properly as we go.

            // Format the key:
            if( is_numeric($key) ){
                $key="key_$key";
            }
            $key="'".addslashes($key)."'";

            // Format the value:
            if( is_array( $value )){
                $value=array_to_json( $value );
            } else if( !is_numeric( $value ) || is_string( $value ) ){
                $value="'".addslashes($value)."'";
            }

            // Add to staging array:
            $construct[]="$key: $value";
        }

        // Then we collapse the staging array into the JSON form:
        $result="{ ".implode( ", ", $construct )." }";

    } else { // If the array is a vector (not associative):

        $construct=array();
        foreach( $array as $value ){

            // Format the value:
            if( is_array( $value )){
                $value=array_to_json( $value );
            } else if( !is_numeric( $value ) || is_string( $value ) ){
                $value="'".addslashes($value)."'";
            }

            // Add to staging array:
            $construct[]=$value;
        }

        // Then we collapse the staging array into the JSON form:
        $result="[ ".implode( ", ", $construct )." ]";
    }

    return $result;
}