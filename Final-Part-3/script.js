  $(document).ready(function () {
        $.fakeLoader({
          timeToHide: 1000,
          bgColor: "#1c1854",
          spinner: "spinner7"
        });

        ScrollReveal().reveal('.box', { delay: 500 });

        $("#appetizer").lightGallery({
          selector:'a',
          mode:'lg-slide',
          easing:'linear',
          speed:1000,
          height:"100%",
          closable:true,
          controls:true,
          hideBarsDelay: 1000,
        });
         $("#sushi").lightGallery({
          selector:'a',
          mode:'lg-slide',
          easing:'linear',
          speed:1000,
          height:"100%",
          closable:true,
          controls:true,
          hideBarsDelay: 1000,
        });
         $("#noodle").lightGallery({
          selector:'a',
          mode:'lg-slide',
          easing:'linear',
          speed:1000,
          height:"100%",
          closable:true,
          controls:true,
          hideBarsDelay: 1000,
        });
         $("#desserts").lightGallery({
          selector:'a',
          mode:'lg-slide',
          easing:'linear',
          speed:1000,
          height:"100%",
          closable:true,
          controls:true,
          hideBarsDelay: 1000,
        });
        $('.tilt').tilt({
          speed: 400,
          maxGlare: 0.3,
          scale: 1.05,
          transition:true
        });
  });