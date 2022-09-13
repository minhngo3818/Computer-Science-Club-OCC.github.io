import "./footer.css";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillCalendar } from "react-icons/ai";
import { RiBracesFill } from "react-icons/ri";
import { MdLibraryBooks } from "react-icons/md";
import ClubLogo from "../asset/images/club-logo.png";

function Footer() {
	return (
		<footer>
			<div className="break" />
			<div className="footer-top-content">
				<div className="logo-space">
					<div className="logo-box">
						<img
							className="footer-club-img"
							src={ClubLogo}
							alt="OCC Club Logo"
						/>
						<p className="club-mission">
							<strong>Building community and knowledge through coding. </strong>
						</p>
					</div>
				</div>
				<div className="center-box">
					<ul className="footer-ulist">
						<li className="footer-link-container-header">
							<Link to="/homepage" className="footer-link">
								<span>
									<AiFillHome className="home-icon" />
								</span>
								<span className="footer-title">
									<strong>Home</strong>
								</span>
							</Link>
						</li>
						<li className="footer-link-container">
							<Link to="/homepage" className="footer-sublink">
								<span className="sublink-name">Opportunity</span>
							</Link>
						</li>
					</ul>
					<ul className="footer-ulist">
						<li className="footer-link-container-header">
							<Link to="" className="footer-link">
								<span>
									<AiFillCalendar className="event-icon" />
								</span>
								<span className="footer-title">
									<strong>Activity</strong>
								</span>
							</Link>
						</li>
						<li className="footer-link-container">
							<Link to="/activity/events" className="footer-sublink">
								<span className="sublink-name">Events</span>
							</Link>
						</li>
						<li className="footer-link-container">
							<Link to="/activity/projects" className="footer-sublink">
								<span className="sublink-name">Projects</span>
							</Link>
						</li>
					</ul>
					<ul className="footer-ulist" id="resources-links">
						<li className="footer-link-container-header">
							<Link
								to="/resources"
								className="footer-link"
								state={{ option: 1 }}
							>
								<span>
									<MdLibraryBooks className="resources-icon" />
								</span>
								<span className="footer-title">
									<strong>Resources</strong>
								</span>
							</Link>
						</li>
						<li className="footer-link-container">
							<Link
								to="/resources"
								className="footer-sublink"
								state={{ option: 1 }}
							>
								<span className="sublink-name">Tutorials</span>
							</Link>
						</li>
						<li className="footer-link-container">
							<Link
								to="/resources"
								className="footer-sublink"
								state={{ option: 2 }}
							>
								<span className="sublink-name">Readings</span>
							</Link>
						</li>
						<li className="footer-link-container">
							<Link
								to="/resources"
								className="footer-sublink"
								state={{ option: 3 }}
							>
								<span className="sublink-name">Organizations</span>
							</Link>
						</li>
					</ul>
					<ul className="footer-ulist">
						<li className="footer-link-container-header">
							<Link to="/homepage" className="footer-link">
								<span>
									<RiBracesFill className="about-icon" />
								</span>
								<span className="footer-title">
									<strong>About</strong>
								</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="contact-button">
					<Link to="/contact" className="flat-button">
						CONTACT US
					</Link>
				</div>
			</div>
			<div className="footer-bottom-content">
				<p>
					<strong>&copy; 2022 OCC CS Club</strong>
				</p>
				<p id="map-policy-text">Site Map | Privacy Policy</p>
			</div>
		</footer>
	);
}

export default Footer;
