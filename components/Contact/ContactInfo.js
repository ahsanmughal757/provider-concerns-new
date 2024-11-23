const ContactInfo = () => {
	return (
		<>
			<div className="location-area pt-100 pb-70">
				<div className="container">
					<div className="row justify-content-center location-wrap">
						<div className="col-sm-6 col-lg-4">
							<div className="location-item">
								<i
									className="icofont-location-pin"
									style={{ backgroundColor: "#0088cc" }}
								></i>
								<h3>Location</h3>
								<p>5900 Balcones Dr 16645, Austin, Texas 78731, USA</p>
							</div>
						</div>

						<div className="col-sm-6 col-lg-4">
							<div className="location-item">
								<i
									className="icofont-ui-message"
									style={{ backgroundColor: "#0088cc" }}
								></i>
								<h3>Email</h3>
								<p>support@providerconcerns.com</p>
							</div>
						</div>

						<div className="col-sm-6 col-lg-4">
							<div className="location-item">
								<i
									className="icofont-ui-call"
									style={{ backgroundColor: "#0088cc" }}
								></i>
								<h3>Phone</h3>
								<p>+1 (888) 285-2880</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactInfo;
