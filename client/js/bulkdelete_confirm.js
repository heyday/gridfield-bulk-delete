(function ($) {
	$.entwine(function ($) {
		/**
		 * force a confirm when clearing form submissions
		 */

		$('.cms-edit-form .bulkdelete_button').click(function (e) {

			var button = $(e.target),
				value = button.parents('.ss-gridfield-buttonrow').find('select[name="BulkDeleteUntil"] option:selected').text();

			var action = (value) ? value : $.trim(button.text());
			var message = 'Are you sure you want to ' + action.toLowerCase() + '?';

			if (!confirm(message)) {
				e.preventDefault();
				return false;
			} else {
				this._super(e);
			}
		});

	});

}(jQuery));
