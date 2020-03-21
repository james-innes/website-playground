<html>
  <link rel="stylesheet" type="text/css" href="./index.css" />

<article>
  <header>
    <h1>Waldorf Education</h1>
    <p>7 - 16 years at Ringwood Waldorf School</p>
  </header>

  <div class="gallery">
  <?php 
  
  
$images = glob("./images/"."*.jpg");

foreach($images as $image) {
    echo '<img src="'.$image.'" />';
}
  
  ?>
  </div>
</article>

</html>