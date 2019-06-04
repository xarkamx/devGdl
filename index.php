<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
  $IMG = wp_get_attachment_image_src( get_post_thumbnail_id( $wp_query->post->ID ))[0];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="/wp-content/themes/devGdl/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <!--
        manifest.json provides metadata used when your web app is added to the
        homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json">
    <!--
        If you're reading this from "view source" in your browser, it might not make sense as
        these tokens have already been evaluated and replaced, even in this remark blurb.

        Notice the use of "php echo $TEMPLATE_PATH;" and /wp-content/themes/devGdl in the tags above.
        Both will be replaced with the URL of the `public` folder during the build (/wp-content/themes/devGdl) or
        at render time (php echo $TEMPLATE_PATH;)
        Only files inside the `public` folder can be referenced like this.

        Unlike "/favicon.ico" or "favicon.ico", "/wp-content/themes/devGdl/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run wpbuild`.
    -->
    <title><?php echo $wp_query->post->post_title ?></title>
<?php $BRC_TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH); ?>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/react-scripts-wptheme-utils/wpThemeClient.js'></script>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/react-scripts-wptheme-error-overlay/wpThemeErrorOverlay.js'></script>

<script> wpThemeClient.start("ws", "127.0.0.1", "8090"); </script>

</head>
    <body>
    <noscript>
        <div 
            id="<?php echo $wp_query->post->ID; ?>"
            class="container"> 
            <?php echo wp_nav_menu(  )?>
            <h1>
            <?php echo $wp_query->post->post_title ?>
        </h1>
        <img src="<?php
            echo $IMG;
        ?>" alt="<?php echo $wp_query->post->post_title ?>"
            data-path="<?php
            echo $IMG;
        ?>"
        />
        <article>
            <?php
              echo $wp_query->post->post_content;
        ?>
        </article>
        <div class="excerpt">
            <?php
              echo get_the_excerpt( $wp_query->post );
        ?>
        </div>
        </div>
        
        
    </noscript>
    <div id="root"></div>
    <!--
        This PHP file is a template.
        If you open it directly in the browser, you will see an empty page.

        You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.

        To begin the development, run `npm run wpstart` or `yarn wpstart`.
        To create a production bundle, use `npm run wpbuild` or `yarn wpbuild`.
    -->
    <script src="/wp-content/themes/devGdl/static/js/bundle.js"></script><script src="/wp-content/themes/devGdl/static/js/1.chunk.js"></script><script src="/wp-content/themes/devGdl/static/js/main.chunk.js"></script></body>
</html>
