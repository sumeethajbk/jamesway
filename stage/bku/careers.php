<?php
/*
Template Name: Careers
*/
get_header(); ?>

<?php
    $corporate_response_key_points_sub_heading = get_field('corporate_response_key_points_sub_heading');
    $corporate_response_key_points_heading = get_field('corporate_response_key_points_heading');
    $corporate_response_key_points_description = get_field('corporate_response_key_points_description');

    $corporate_response_optional_cta_image = get_field('corporate_response_optional_cta_image');
    $corporate_response_optional_cta_sub_heading = get_field('corporate_response_optional_cta_sub_heading');
    $corporate_response_optional_cta_heading = get_field('corporate_response_optional_cta_heading');
    $corporate_response_optional_cta_description = get_field('corporate_response_optional_cta_description');
    $corporate_response_optional_cta_button_text = get_field('corporate_response_optional_cta_button_text');
    $corporate_response_optional_cta_button_link = get_field('corporate_response_optional_cta_button_link');

    $about_cta_image = get_field('about_cta_image');
    $about_cta_sub_heading = get_field('about_cta_sub_heading');
    $about_cta_heading = get_field('about_cta_heading');
    $about_cta_description = get_field('about_cta_description');
    $about_cta_button_text = get_field('about_cta_button_text');
    $about_cta_button_link = get_field('about_cta_button_link');

    $about_intro_cta_heading = get_field('about_intro_cta_heading');
    $about_intro_cta_button_text = get_field('about_intro_cta_button_text');
    $about_intro_cta_button_link = get_field('about_intro_cta_button_link');

    $services_landing_testimonials = get_field('services_landing_testimonials');

    $other_careers_sub_heading = get_field('other_careers_sub_heading');
    $other_careers_heading = get_field('other_careers_heading');

    $other_careers_description = get_field('other_careers_description');

    $other_careers_button_text = get_field('other_careers_button_text');
    $other_careers_button_link = get_field('other_careers_button_link');
        $other_careers_opportunities_args = get_field('other_careers_opportunities');
          if(empty($other_careers_opportunities_args)){
            $other_careers_opportunities = get_posts( array(
                'post_type'       => 'careers',
                'posts_per_page' => 4,
                'exclude' => $post->ID
            ) );
          } else {
            $other_careers_opportunities = $other_careers_opportunities_args;
          }
?>

<?php echo get_jamesway_career_banner(); ?>
    <!-- end of default banner -->

<?php if (!empty($about_intro_cta_heading)) { ?>
<section class="request-section">
      <div class="container">
        <div class="request-blck flex flex-vcenter">
        <?php if (!empty($about_intro_cta_heading)) { ?>
          <div class="request-lt">
            <h4><?php echo $about_intro_cta_heading; ?></h4>
          </div>
        <?php } ?>
        <?php if (!empty($about_intro_cta_button_text && $about_intro_cta_button_link)) { ?>
          <div class="request-rt"> <a href="<?php echo $about_intro_cta_button_link; ?>" class="yellow-gbtn button"><?php echo $about_intro_cta_button_text; ?></a> </div>
        <?php } ?>
        </div>
      </div>
</section>
<?php } ?>

<?php if ($about_cta_image || $about_cta_heading || $about_cta_description){ ?>
     <section class="who-we-are-section pos-relative">
      <div class="container">
        <div class="who-we-are-main">
          <div class="who-we-are-list flex">
        <?php if ($about_cta_sub_heading){ ?>
            <div class="who-we-are-text"> <span class="optional-text"><?php echo $about_cta_sub_heading; ?></span>
        <?php } ?>
            <?php if ($about_cta_heading){ ?>
              <div class="h2"><?php echo $about_cta_heading; ?></div>
            <?php } ?>
              <?php echo $about_cta_description; ?>
            <?php if ($about_cta_button_text && $about_cta_button_link){ ?>
              <div class="btn"> <a href="<?php echo $about_cta_button_link; ?>" class="button"><?php echo $about_cta_button_text; ?></a></div>
            <?php } ?>
            </div>
            <?php if ($about_cta_image){ ?>
             <div class="who-we-are-img">
              <figure class="object-fit" role="none"> <img src="<?php echo $about_cta_image['url']; ?>" alt="<?php echo $about_cta_image['alt']; ?>"> </figure>
            </div>
            <?php } ?>
          </div>
          </div>
      </div>
    </section>
<?php } ?>

<?php if (have_rows('careers_culture_points')) : ?>
    <section class="features-module pos-relative">
      <div class="container">
        <div class="features-inner flex">
        <?php while (have_rows('careers_culture_points')) : the_row();
            $careers_culture_point_icon = get_sub_field('careers_culture_point_icon');
            $careers_culture_point_heading = get_sub_field('careers_culture_point_heading');
            $careers_culture_point_description = get_sub_field('careers_culture_point_description');
        ?>
        <?php if ($careers_culture_point_icon || $careers_culture_point_heading || $careers_culture_point_description) : ?>
          <div class="features-grid">
        <?php if ($careers_culture_point_icon) : ?>
            <div class="featues-icon">
              <figure role="none"><img src="<?php echo $careers_culture_point_icon['url']; ?>" alt="<?php echo $careers_culture_point_icon['alt']; ?>"/></figure>
            </div>
        <?php endif; ?>
        <?php if ($careers_culture_point_heading) : ?>
            <div class="h4"><?php echo $careers_culture_point_heading; ?></div>
        <?php endif; ?>
            <?php echo $careers_culture_point_description; ?>
          </div>
        <?php endif; endwhile; ?>
        </div>
        <!-- end of features inner --> 
      </div>
    </section>
<?php endif; ?>

<?php if (!empty($services_landing_testimonials)) { ?>
<section class="testimonial-module">
      <div class="container">
        <div class="testimonial-slider">
        <?php foreach( $services_landing_testimonials as $services_landing_testimonial ): 
        $testimonial_image_desktop = get_field('testimonial_image_desktop', $services_landing_testimonial->ID);
        $testimonial_image_m = get_field('testimonial_image_mobile', $services_landing_testimonial->ID);
        $testimonial_image_mobile     = $testimonial_image_m ? $testimonial_image_m : $testimonial_image_desktop;
        $testimonial = get_field('testimonial', $services_landing_testimonial->ID);
        $testimonial_business_name = get_field('testimonial_business_name', $services_landing_testimonial->ID);
        $testimonial_video_options = get_field('testimonial_video_options', $services_landing_testimonial->ID);
        $testimonial_vimeo_video_id = get_field('testimonial_vimeo_video_id', $services_landing_testimonial->ID);
        $testimonial_youtube_video_id = get_field('testimonial_youtube_video_id', $services_landing_testimonial->ID);
        ?>
          <div class="testimonial-slide">
            <div class="testimonial-slide-wrap">
              <div class="testimonial-thumb">
            <?php if ($testimonial_image_desktop) { ?>
                <picture class="object-fit">
                  <source srcset="<?php echo $testimonial_image_desktop['url']; ?>" media="(min-width:768px)">
                  <img src="<?php echo $testimonial_image_mobile['url']; ?>" alt="<?php echo $testimonial_image_mobile['alt']; ?>">
                </picture>
            <?php } ?>
                <?php if ($testimonial_vimeo_video_id || $testimonial_youtube_video_id) { ?>
                    <div class="play-btn-main flex flex-center">
                    <?php if ($testimonial_video_options === 'vimeo' && $testimonial_vimeo_video_id) { ?>
                        <a class="play-btn flex popup-youtube flex-center" href="https://vimeo.com/<?php echo $testimonial_vimeo_video_id; ?>" tabindex="0">
                            <span class="play-btn-wrap"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/play.svg" alt="Play" title="Play"></span>
                        </a>
                    <?php } elseif ($testimonial_video_options === 'youtube' && $testimonial_youtube_video_id) { ?>
                        <a class="play-btn flex popup-youtube flex-center" href="https://www.youtube.com/watch?v=<?php echo $testimonial_youtube_video_id; ?>" tabindex="0">
                            <span class="play-btn-wrap"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/play.svg" alt="Play" title="Play"></span>
                        </a>
                    <?php } ?>
                    </div>
                <?php } ?>
              </div>
              <div class="testimonial-text pos-relative">
                <?php echo $testimonial; ?>
                <div class="author-info">
                  <div class="author-name"><?php echo get_the_title($services_landing_testimonial->ID); ?></div>
                <?php if ($testimonial_business_name) { ?>
                  <div class="author-business"><?php echo $testimonial_business_name; ?></div>
                <?php } ?>
                </div>
                
                <!-- end of author info --> 
              </div>
            </div>
            <!-- end of testimonial slide wrap --> 
          </div>
        <?php endforeach; ?>
          <!-- end of testimonial slider --> 
        </div>
      </div>
</section>
<?php } ?>

<?php if (have_rows('people_points')) : ?>
    <section class="people-module pos-relative">
      <div class="container">
        <div class="people-inner flex">
        <?php while (have_rows('people_points')) : the_row();
            $people_point_image = get_sub_field('people_point_image');
            $people_point_heading = get_sub_field('people_point_heading');
            $people_point_description = get_sub_field('people_point_description');
        ?>
        <?php if ($people_point_image || $people_point_heading) : ?>
          <div class="people-grid">
        <?php if ($people_point_image) : ?>
            <div class="people-icon">
              <figure role="none"><img src="<?php echo $people_point_image['url']; ?>" alt="<?php echo $people_point_image['alt']; ?>"/></figure>
            </div>
        <?php endif; ?>
        <?php if ($people_point_heading) : ?>
            <div class="h4"><?php echo $people_point_heading; ?></div>
        <?php endif; ?>
            <?php echo $people_point_description; ?>
          </div>
        <?php endif; endwhile; ?>
        </div>
        <!-- end of people inner --> 
      </div>
    </section>
<?php endif; ?>

<?php if ($corporate_response_optional_cta_image || $corporate_response_optional_cta_heading || $corporate_response_optional_cta_description){ ?>
    <section class="repeater-section pos-relative">
      <div class="container">
        <div class="repeater-main">
          <div class="repeater-list flex">
        <?php if ($corporate_response_optional_cta_image){ ?>
            <div class="repeater-img">
              <figure class="object-fit" role="none"> <img src="<?php echo $corporate_response_optional_cta_image['url']; ?>" alt="<?php echo $corporate_response_optional_cta_image['alt']; ?>"> </figure>
            </div>
        <?php } ?>
            <div class="repeater-text">
            <?php if ($corporate_response_optional_cta_sub_heading){ ?>
                <span class="optional-text"><?php echo $corporate_response_optional_cta_sub_heading; ?></span>
            <?php } ?>
            <?php if ($corporate_response_optional_cta_heading){ ?>
              <div class="h2"><?php echo $corporate_response_optional_cta_heading; ?></div>
            <?php } ?>
            <?php echo $corporate_response_optional_cta_description; ?>
            <?php if ($corporate_response_optional_cta_button_text && $corporate_response_optional_cta_button_link){ ?>
              <div class="btn"> <a href="<?php echo $corporate_response_optional_cta_button_link; ?>" class="button"><?php echo $corporate_response_optional_cta_button_text; ?></a></div>
            <?php } ?>
            </div>
          </div>
          </div>
        </div>
    </section>
<?php } ?>


<?php if (have_rows('corporate_response_features')) : ?>
<section class="prod-block-section">
      <div class="container">
        <div class="prod-block-main-wrap ">
        <div class="prod-main flex flex-vcenter">
        <?php if ($corporate_response_key_points_sub_heading || $corporate_response_key_points_heading){ ?>
          <div class="prod-lt">
        <?php if ($corporate_response_key_points_sub_heading){ ?>
            <span class="optional-text"><?php echo $corporate_response_key_points_sub_heading; ?></span>
        <?php } ?>
        <?php if ($corporate_response_key_points_heading){ ?>
            <h2><?php echo $corporate_response_key_points_heading; ?></h2>
        <?php } ?>
          </div>
        <?php } ?>
        <?php if ($corporate_response_key_points_description){ ?>
          <div class="prod-rt">
            <?php echo $corporate_response_key_points_description; ?>
          </div>
        <?php } ?>
        </div>
          <div class="prod-block-row flex">
        <?php while (have_rows('corporate_response_features')) : the_row();  ?>
        <?php
              $corporate_response_feature_image = get_sub_field('corporate_response_feature_image');
              $corporate_response_feature_heading = get_sub_field('corporate_response_feature_heading');
              $corporate_response_feature_description = get_sub_field('corporate_response_feature_description');
              $corporate_response_feature_link = get_sub_field('corporate_response_feature_link');
        ?>
        <?php if ($corporate_response_feature_image || $corporate_response_feature_heading || $corporate_response_feature_description){ ?>
            <div class="prod-list">
            <?php if ($corporate_response_feature_image){ ?>
              <div class="prod-img">
                <figure class="object-fit"> <img src="<?php echo $corporate_response_feature_image['url']; ?>" alt="<?php echo $corporate_response_feature_image['alt']; ?>"> </figure>
              </div>
            <?php } ?>
            <?php if ($corporate_response_feature_heading || $corporate_response_feature_description){ ?>
              <div class="prod-text-blc">
            <?php if ($corporate_response_feature_heading){ ?>
                <h3 class="h4">
                <?php if ($corporate_response_feature_link){ ?>
                    <a href="<?php echo $corporate_response_feature_link; ?>">
                <?php } ?>
                    <?php echo $corporate_response_feature_heading; ?>
                <?php if ($corporate_response_feature_link){ ?>
                    </a>
                <?php } ?>
                </h3>
            <?php } ?>
                <?php echo $corporate_response_feature_description; ?>
              </div>
            <?php } ?>
            </div>
        <?php } endwhile; ?>
          </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php echo cta(); ?>

    <section class="open-position-section" id="open-position">
        <div class="container">
            <div class="open-position-wrap">
                <div class="open-position-main flex "><!-- if no open-position-rt add this no_position_rt -->
                <?php if (!empty($other_careers_heading || $other_careers_description)) { ?>
                    <div class="open-position-text">
                        <?php if (!empty($other_careers_sub_heading)) { ?>
                          <span class="optional-text"><?php echo $other_careers_sub_heading; ?></span>
                        <?php } ?>
                        <?php if (!empty($other_careers_heading)) { ?>
                          <h2 class="h4"><?php echo $other_careers_heading; ?></h2>
                        <?php } ?> 
                            <?php echo $other_careers_description; ?>
                        <?php if (!empty($other_careers_button_text && $other_careers_button_link)) { ?>
                            <div class="open-position-btns">
                              <a aria-label="open in new tab" href="<?php echo $other_careers_button_link; ?>" class="button"><?php echo $other_careers_button_text; ?></a>
                            </div>
                        <?php } ?>
                    </div>
                <?php } ?>
                      <div class="open-position-rt flex relative">
                        <?php foreach( $other_careers_opportunities as $other_careers_opportunity ): 
                            $career_location = get_field('career_location', $other_careers_opportunity->ID);
                            $post_time = get_the_time('U'); // Timestamp of post
                            $current_time = current_time('timestamp');
                            $time_diff = human_time_diff($post_time, $current_time);
                            
                        ?>
                            <div class="open-position-list flex flex-vcenter">
                              <div class="open-position-left flex flex-vcenter">
                                  <div class="open-position-title">
                                      <h2 class="h6">
                                        <a aria-label="open in new tab" href="<?php echo get_permalink($other_careers_opportunity->ID); ?>" target="_blank">
                                            <?php if (!empty($other_careers_opportunity->ID)) { ?>
                                             <?php echo get_the_title($other_careers_opportunity->ID); ?><?php } ?> <?php if (!empty($career_location)) { ?>,<?php echo $career_location; ?><?php } ?>
                                         </a>
                                        </h2>
                                  </div>
                              </div>
                              <span class=""><?php echo 'Posted ' . $time_diff . ' ago'; ?></span>
                              <div class="open-position-btn">
                                  <a aria-label="open in new tab" class="button" href="<?php echo get_permalink($other_careers_opportunity->ID); ?>" ><span>View More</span></a>
                              </div>
                            </div>
                        <?php endforeach; ?>
                      </div>
                    </div>
              </div>
        </div>
    </section>

<?php get_footer();