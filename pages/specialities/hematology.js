import Link from "next/link";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";

const Hematology = () => {
	return (
		<>
			<Navbar />
			<PageBanner
				pageTitle="Hematology Billing Services"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Contact Us"
				bgImage="/images/services/billing-and-invoicing.png"
			/>
			{/* 1st Part Start */}
			<div className="container services-details-img mt-4 mb-4">
				<div className="row">
					<div className="col-lg-4">
						<img src="/images/t1.png" alt="Service Details" />
					</div>
					<div className="col-lg-8">
						<h2 className="fw-medium fs-3">
							PCS’s hematology billing services:
						</h2>
						<p>
							Irrespective of the fact that there are some attempts to simplify
							the medical billing coding; it is still a very complicated task.
							It requires prior knowledge and expertise. So providers concerts
							solutions offers error-free hematology billing services that
							generate high revenues.Irrespective of the fact that there are
							some attempts to simplify the medical billing coding; it is still
							a very complicated task. It requires prior knowledge and
							expertise. So providers concerts solutions offers error-free
							hematology billing services that generate high revenues.
						</p>
						<p>
							Irrespective of the fact that there are some attempts to simplify
							the medical billing coding; it is still a very complicated task.
							It requires prior knowledge and expertise. So providers concerts
							solutions offers error-free hematology billing services that
							generate high revenues.Irrespective of the fact that there are
							some attempts to simplify the medical billing coding; it is still
							a very complicated task. It requires prior knowledge and
							expertise. So providers concerts solutions offers error-free
							hematology billing services that generate high revenues.
						</p>
						<blockquote>
							<i className="icofont-quote-left"></i>
							To learn more about our hillsboro disc regenerative therapy
							treatment services, give us a call at 469-562-4188 or contact us
							online today.
						</blockquote>
					</div>
				</div>
			</div>
			{/* 1st Part End*/}
			{/* 2nd Part Start */}
			<div className="expertise-area pb-70">
				<div className="container">
					<div className="section-title">
						<h2>Expertise</h2>
					</div>
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="expertise-item">
								<div className="row">
									{[1, 2, 3, 4].map((item, key) => (
										<div className="col-sm-6 col-lg-6">
											<div className="expertise-inner">
												<h3>Certified Doctors</h3>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit. Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Lorem ipsum dolor sit amet,
													consectetur Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. adipiscing elit. Lorem ipsum dolor
													sit amet, consectetur adipiscing elit.
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<img src="/images/about4.jpg" alt="Expertise" />
						</div>
					</div>
				</div>
			</div>
			{/* 2nd Part End */}
			{/* 4th Part Start */}
			<div className="faq-area-two ptb-100">
				<div className="faq-shape">
					{/* <img src="/images/faq-shape1.png" alt="Faq" /> */}
					{/* <img src="/images/faq-shape2.png" alt="Faq" /> */}
				</div>

				<div className="container">
					<div className="section-title">
						<h2>Frequently Asked & Queastions</h2>
					</div>

					<div className="row">
						<div className="col-lg-4">
							<div className="faq-img">
								<img src="/images/faq-main.jpg" alt="Faq" />
							</div>
						</div>

						<div className="col-lg-8 text-dark">
							<p>
								In medical billing no field is simple. Each and every field of
								medical billing requires expert level coding and techniques to
								manage the denials. But hematology is a specialization which can
								not drive any benefits without outsourcing medical billing.
								manage the denials. But hematology is a specialization which can
								not drive any benefits without outsourcing medical billing.
								manage the denials. But hematology is a specialization which can
								not drive any benefits without outsourcing medical billing.
								manage the denials. But hematology is a specialization which can
								not drive any benefits without outsourcing medical billing.
								manage the denials. But hematology is a specialization which can
								not drive any benefits without outsourcing medical billing.
							</p>
							<p>
								Here are some reasons why you should outsource hematology
								medical billing. Here are some reasons why you should outsource
								hematology medical billing. Here are some reasons why you should
								outsource hematology medical billing. Here are some reasons why
								you should outsource hematology medical billing. Here are some
								reasons why you should outsource hematology medical billing.
								Here are some reasons why you should outsource hematology
								medical billing. Here are some reasons why you should outsource
								hematology medical billing.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* 4th Part end */}
			{/* 3rd Part Start */}
			<div className="about-area pt-100 pb-70">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="about-item">
								<img src="/images/about1.jpg" alt="About" />
							</div>
						</div>

						<div className="col-lg-6">
							<div className="about-item about-right">
								<h2>About Our Hospital</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
									maecenas accumsan lacus vel facilisis.et dolore magna aliqua.
									Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
									maecenas accumsan lacus vel facilisis.et dolore magna aliqua.
									Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
									maecenas accumsan lacus vel facilisis.
								</p>

								<ul>
									{/* <div className="row">
										<div className="col-6">
											<li>
												<i className="icofont-check-circled"></i>
												Browse Our Website
											</li>
											<li>
												<i className="icofont-check-circled"></i>
												Choose Service
											</li>
										</div>
										<div className="col-6">
											<li>
												<i className="icofont-check-circled"></i>
												Send Messege
											</li>{" "}
											<li>
												<i className="icofont-check-circled"></i>
												Send Messege
											</li>{" "}
										</div>
									</div> */}
									<li>
										<i className="icofont-check-circled"></i>
										Send Messege
									</li>{" "}
									<li>
										<i className="icofont-check-circled"></i>
										Send Messege
									</li>{" "}
									<li>
										<i className="icofont-check-circled"></i>
										Send Messege
									</li>{" "}
									<li>
										<i className="icofont-check-circled"></i>
										Send Messege
									</li>{" "}
									<li>
										<i className="icofont-check-circled"></i>
										Send Messege
									</li>
								</ul>

								<Link href="/demo-request">Contact Us</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* 3rd Part End */}
			{/* 5th Part Start */}
			{/* <div className="departments-area pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<h2>Our Expertise</h2>
					</div>
					<div className="row justify-content-center">
						{[1, 2, 3, 4, 5, 6].map((item, key) => (
							<div className="col-sm-6 col-lg-4">
								<div className="department-item">
									<h3>Dental Care</h3>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Praesentium eaque omnis corporis,amet consectetur
										adipisicing elit. Praesentium eaque omnis corporis,amet
										consectetur adipisicing elit. Praesentium eaque omnis
										corporis, animi aspernatur tempora.
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div> */}
			{/* 5th Part End */}
			<Footer />
		</>
	);
};

export default Hematology;
