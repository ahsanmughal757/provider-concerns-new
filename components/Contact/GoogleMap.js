import React from "react";

const GoogleMap = () => {
	return (
		<>
			<div className="map-area">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.330390834496!2d-97.75752952530326!3d30.34155887477525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cae2feb064b3%3A0xfbcc19243aa6ddc0!2s5900%20Balcones%20Dr%2C%20Austin%2C%20TX%2078731%2C%20USA!5e0!3m2!1sen!2s!4v1714413105626!5m2!1sen!2s"
					height="550"
				></iframe>
			</div>
		</>
	);
};

export default GoogleMap;
