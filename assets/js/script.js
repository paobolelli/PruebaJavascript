/* $(function(){
	$('.cards').on('click','.card',function (){
			$(this).toggleClass('card--open');
		})
	$('.cards').on('click','.card__like',function(e){
			e.stopPropagation();
			e.preventDefault();
			$(this).toggleClass('card__like--red');
		})
	$('.cards').on('click','.card__follow', function(e){
			e.stopPropagation();
			$(this).toggleClass('card__follow-btn--following');
		})
	$('#image').on('change',function(e){
			var src='assets/images/squared/' + $(this).val()
			$('.create__image').children()
				.attr('src',src);
		})
	$('#author').on('change',function(e){
			var src='assets/images/profiles/' + $(this).val()
			$('.create__profile').children()
				.attr('src',src);
		})
	})
	 
	*/
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
			$(this).children().toggleClass('likes--red');
	})

	$('#board').on('click','.likes',function(e){
			e.stopPropagation();
			e.preventDefault();
			$(this).children().toggleClass('likes--red');
	})



		
