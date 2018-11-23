
$(function(){
	$('#author').on('change',function(e){
			var src='assets/images/usuarios/' + $(this).val()
			$('.nombre__perfil').children()
				.attr('src',src);
			})
	})

	$('.crear__form').on('submit',function(e) {
		e.preventDefault();

		var foto = $('#author').val ();
		var text = $('#mytext').val();
		var caja = '<div class=#board">'
					+ '<div class="post">'
					+'<img class="foto__perfil" src="assets/images/usuarios/'
					+ foto 
					+ '"">'
					+ text
					+ '</div>'
					+ '<a class="likes" href="#">'
					+ '<i class="fas fa-heart"></i>'
					+ '<span class="counter"> 0 </span>'
					+ '</a>'
					+ '<input type="submit" class="mearrepenti" value="X">'
					+ '</div>';

		$("#board").append(caja);
				$('#mytext').val('');
				$('#mytext').focus('');
				$('#author').val('enojado.png');
				$('.foto__perfil .foto2').attr('src','assets/images/usuarios/');
		})

	
	$('#board').on('click', '.mearrepenti', function (){
		$(this).parent().fadeOut(800);
	})

	$('#board').on('click','.likes',function(e){
			e.stopPropagation();
			e.preventDefault();
			$(this).children().addClass('likes--red');
			var nino= $(this).children(".counter");
			var counter = nino.text();
			var total = parseInt(counter)

			nino.text(total + 1); 

	})
    



		
