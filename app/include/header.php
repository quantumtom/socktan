<div data-role="header" data-id="myHeader">

    <div data-role="navbar" class="nav-custom-icons">

        <ul>

            <!-- Home/About -->

            <li>
                <a href="/home.php" class="home <?php if ($_SERVER["SCRIPT_NAME"] == "/home.php") echo __UIBA__; ?>"
                   id="homeLink" title="home" data-icon="custom">home</a>
            </li>

            <!-- Reel -->

            <li>
                <a href="/reel.php" class="reel <?php if ($_SERVER["SCRIPT_NAME"] == "/reel.php") echo __UIBA__; ?>"
                   id="reelLink" title="reel" data-icon="custom">reel</a>
            </li>

            <!-- Tweets -->

<!--            <li>-->
<!--                <a href="/tweets.php" class="tweets --><?php //if ($_SERVER["SCRIPT_NAME"] == "/tweets.php") echo __UIBA__; ?><!--"-->
<!--                   id="tweetsLink" title="tweets" data-icon="custom">tweets</a>-->
<!--            </li>-->

            <!-- HTML5 -->

<!--            <li>-->
<!--                <a href="/html5.php" class="html5 --><?php //if ($_SERVER["SCRIPT_NAME"] == "/html5.php") echo __UIBA__; ?><!--"-->
<!--                   id="htmlLink" title="html5" data-icon="custom">html5</a>-->
<!--            </li>-->

            <!-- Talk -->

            <li>
                <a href="/talk.php" class="talk <?php if ($_SERVER["SCRIPT_NAME"] == "/talk.php") echo __UIBA__; ?>"
                   id="talkLink" title="talk" data-icon="custom">talk</a>
            </li>

        </ul>

    </div>
    <!-- // navbar -->

</div><!-- // header -->