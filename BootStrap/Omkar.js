<script>
  $(document).ready(function(){
    $("button").click(function(){
      $("button").removeClass("active-color").addClass("default-color");
      $(this).addClass("active-color").removeClass("default-color");
    });
  });
</script>