<?php
/*
Template Name: Payment Template
*/
get_header();

$banner_sub_heading = get_field('banner_sub_heading');
$banner_heading     = get_field('banner_heading') ? get_field('banner_heading') : get_the_title();
?>

<section class="hero-banner-section pos-relative">
    <div class="container">
        <div class="hero-banner-main flex bnr-small">
            <div class="hero-banner-text">
                <div class="hero-banner-inner">
                    <?php if(!empty($banner_sub_heading)){ ?>
                    <span class="optional-text"><?php echo $banner_sub_heading; ?></span>
                    <?php } ?>
                    <h1><?php echo $banner_heading; ?></h1>
                </div>

                <!-- end of hero banner inner -->
            </div>
            <!-- end of hero banner text -->
        </div>
    </div>
</section>

<?php
$content = get_the_content();
if (trim($content)) :
?>
<section class="payment-container">
    <div class="container">
        <div class="payment-inner">            
                    <?php the_content(); ?>               
        </div>
    </div>
</section>
<?php endif; ?>

<?php echo cta_module(); ?>
<?php get_footer(); ?>