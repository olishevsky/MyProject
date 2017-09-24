$(document).ready(function() {
	
	$("#phone1").mask("+7(999) 999-99-99");	
	$("#phone2").mask("+7(999) 999-99-99");	

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
	
		$("#form2").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail2.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form2").trigger("reset");
		});
		return false;
	});
	
	$("#form3").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail3.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form3").trigger("reset");
		});
		return false;
	});
	
	$("#form4").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail3.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form4").trigger("reset");
		});
		return false;
	});
	
});