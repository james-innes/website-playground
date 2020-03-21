<html>

<head>
    <link rel="stylesheet" type="text/css" href="../index.css" />
</head>

<article>
    <header>
        <h1>Project One</h1>
        <p>7 - 16 years at Ringwood Waldorf School</p>
    </header>

    <div class="gallery">
        <?php 
$images = glob("./cats/"."*.jpg");

foreach($images as $image) {
    echo '<img src="'.$image.'" />';
}
  
  ?>
    </div>
</article>

</html>