var MyAlerts = {
	markRead : function (idArray) {
		$.post(
			"xmlhttp.php",
			{
				module : "MyAlerts",
				action : "markRead",
				toMarkRead : idArray,
				my_post_key : my_post_key
			}
		);
	},
	deleteAlert : function (id) {
		var toReturn = false;

		$.post(
			"xmlhttp.php",
			{
				module : "MyAlerts",
				action : "deleteAlert",
				id : id,
				my_post_key : my_post_key
			}
		).success(function (data) {
			toReturn = data;
		});

		return toReturn;
	}
};
