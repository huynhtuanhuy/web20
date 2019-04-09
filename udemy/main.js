$(document).ready(function() {
	let nextUrl;
	let isLoadingData = false;

	$("#searchCourse").on("submit", function(event) {
		event.preventDefault();

		$(".lds-heart").css("opacity", "1");
		$("#results").empty();
		const keyword = $("#keyword").val();

		$.ajax({
			type: 'GET',
			url: `https://api.techkids.vn/udemy/courses?search=${keyword}&page=1&page_size=12`,
			success: function(data) {
				const results = data.results;
				nextUrl = data.next;
				// for(let i = 0; i < results.length; i++) {
				// 	$("#results").append(`
				// 		<div style='margin: 50px auto;'>
				// 			<img src="${results[i].image_480x270}" />
				// 			<h1>${results[i].title}</h1>
				// 		</div>
				// 	`);
				// }
				const htmlElem = results.map(function(item, index) {
					return `
						<div style='margin: 50px auto;'>
							<img src="${item.image_480x270}" />
							<h1>${item.title}</h1>
						</div>
					`
				});
				$("#results").append(htmlElem.join(''));
			}
		});
	});

	$(window).on("scroll", function() {
		if($(document).height()
			- ($(window).height()
			+ $(window).scrollTop()) < 1000 && !isLoadingData) {
				isLoadingData = true;

				$.ajax({
					type: 'GET',
					url: nextUrl,
					success: function(data) {
						const results = data.results;
						nextUrl = data.next;
						for(let i = 0; i < results.length; i++) {
							$("#results").append(`
								<div style='margin: 50px auto;'>
									<img src="${results[i].image_480x270}" />
									<h1>${results[i].title}</h1>
								</div>
							`);
						}
						isLoadingData = false;
					}
				});
		}
	});
});