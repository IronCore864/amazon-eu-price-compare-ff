import * as amzUtil from "../utils/AmazonUtils"

browser.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if ( request.message === "get_current_page_info" ) {
			sendResponse(amzUtil.getPriceFromAmazonProductDetailPage(document))
		}
	}
)
