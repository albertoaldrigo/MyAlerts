( function($) {
	var MyAlerts = {
		markRead : function (idArray) {
			$.post(
				"xmlhttp.php",
				{
					module : "MyAlerts",
					action : "markRead",
					id : idArray,
					my_post_key : my_post_key
				}
			);
		},
		deleteAlerts : function (idArray) {
			var toReturn = false;

			$.post(
				"xmlhttp.php",
				{
					module : "MyAlerts",
					action : "deleteAlert",
					id : idArray,
					my_post_key : my_post_key
				}
			).success(function (data) {
				toReturn = data;
			});

			return toReturn;
		}
	};
} (jQuery));
