<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

$(document).ready(function(){
    var tooltip = document.querySelector('#tooltip');
    var btn = document.querySelector('#tooltipBtn');

    var popperInstance = Popper.createPopper(btn, tooltip, {
        placement : 'top',
    });

    btn.addEventListener('mouseenter', function(){
        tooltip.Style.display = 'block';
        popperInstance.update();
    });

    btn.addEventListener('mouseenter', function(){
        tooltip.Style.display = 'none';
    });

});