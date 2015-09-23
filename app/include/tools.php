<?php
use app\scriptName;

switch ($_SERVER["SCRIPT_NAME"]) {
	case "/reel.php":
		$pageTitle="reel";
		$pageDesc="Recent Work";
		$metaDescription="We have been building websites for quite some time now. One of the drawbacks of that is many of our early works are no longer online. Fortunately, that is not true in every case.";
		$metaKeywords="websites,web,web development,api,rest,twitter,json,ajax";
		break;
	case "/talk.php":
		$pageTitle="talk";
		$pageDesc="Talk to Us";
		$metaDescription="Whether you are a human or a robot, we would love to hear from you (robots are often more interesting). We can get started on your project right away.";
		$metaKeywords="javascript,venice,websites,web design,web development,twitter,json,ajax  ";
		break;
	default:
        $pageTitle="home";
        $pageDesc="Home";
        $metaDescription="Whether you are a human or a robot, we would love to hear from you (robots are often more interesting). We can get started on your project right away.";
        $metaKeywords="web designer,jquery,javascript,santa monica,websites,web sites,web development,ajax  ";
		break;
	}

/**
 * @param $tag_name
 * @param $tag_content
 * @return string
 */
function MakeMetaTag($tag_name,$tag_content) {
    return "<meta name=\"".$tag_name."\" content=\"".$tag_content."\" />\n";
}

/**
 * @param $pageTitle
 * @return string
 */
function MakeTitleTag($pageTitle) {
	$pageTitle = substr("Socktan.digital.media() - Venice, Cal - ".$pageTitle,0,65);
	return "<title>".$pageTitle."</title>\n";
}

/**
 * @param scriptName $
 * @return bool
 */
function IsScript($scriptName) {
    return ($scriptName == $_SERVER["SCRIPT_NAME"]);
}

/**
 *
 */
function GetContent($scriptName) {
    require('include' . $scriptName);
}
