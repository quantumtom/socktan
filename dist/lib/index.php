<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <?php echo MakeTitleTag($pageTitle); ?>
    <link type="text/css" rel="stylesheet" href="https://s3.amazonaws.com/socktan/js/jquerymobile/jquery.mobile-1.4.5.css"/>
    <link type="image/ico" rel="shortcut icon" href="http://socktan.s3.amazonaws.com/favicon.ico"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
    <meta name="Robots" content="index,follow"/>
    <meta name="verify-v1" content="Rc6KplhAOgXutS7j+eHBaJpe4g21p3yvO663bjNJ8v0="/>
    <meta name="ICBM" content="34.019597,-118.489243"/>
    <meta name="google-site-verification" content="zrmxmTlJtteLgRs9qxjBwvl2y22ydIzDr3gNnuC-ApY"/>
    <?php echo MakeMetaTag("description", $metaDescription); ?>
    <?php echo MakeMetaTag("keywords", $metaKeywords); ?>
    <!--
    <link rel="apple-touch-icon" href="/img/touch-icon-iphone.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/img/touch-icon-ipad.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/img/touch-icon-iphone4.png" />
    -->
</head>
<body>
<div data-role="page" id="<?php echo $pageTitle; ?>">
    <!-- // header -->
    <div data-role="header" data-id="header">
        <div data-role="navbar" class="nav-custom-icons" data-grid="c">
            <ul>
                <!-- Home -->
                <li>
                    <a href="../home.php" class="home<?php if (IsScript("/home.php")) echo " ui-state-persist"; ?>"
                       id="homeLink" title="home" data-icon="home" data-theme="b">home</a>
                </li>
                <!-- Reel -->
                <li>
                    <a href="../reel.php" class="reel<?php if (IsScript("/reel.php")) echo " ui-state-persist"; ?>"
                       id="reelLink" title="reel" data-icon="star" data-theme="b">reel</a>
                </li>
                <!-- Twitter -->
                <li>
                    <a href="../twitter.php" class="twitter<?php if (IsScript("/twitter.php")) echo " ui-state-persist"; ?>"
                       id="twitterLink" title="twitter" data-icon="info" data-theme="b">twitter</a>
                </li>
                <!-- Talk -->
                <li>
                    <a href="../talk.php" class="talk<?php if (IsScript("/talk.php")) echo " ui-state-persist"; ?>"
                       id="talkLink" title="talk" data-icon="grid" data-theme="b">talk</a>
                </li>
            </ul>
        </div>
        <!-- // navbar -->

    </div>
    <div data-role="content">
        <?php GetContent($_SERVER["SCRIPT_NAME"]); ?>
    </div>
    <!-- // content -->

    <div data-role="footer" data-id="footer">
        <h3>(technically) creative</h3>
    </div>

</div>
<!-- // page -->
<!-- SHRIMPS -- ahem, I mean, "scripts." -->
<script type="application/javascript" src="https://s3.amazonaws.com/socktan/js/jquery/jquery-1.11.3.js"></script>
<script type="application/javascript" src="https://s3.amazonaws.com/socktan/js/jquerymobile/jquery.mobile-1.4.5.js"></script>
<script type="application/javascript" src="js/bookmark_bubble.js"></script>
<script type="application/javascript" src="https://s3.amazonaws.com/socktan/js/google.analytics.js"></script>
</body>
</html>