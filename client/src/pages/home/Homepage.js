import { useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import About from "./components/about/About";
import ContactUs from "./components/contact-us/ContactUs";

function Home() {
	const about = useRef(null);
	const contactUs = useRef(null);

	const scrollToSection = elementRef => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	};

	const location = useLocation();
	useEffect(() => {
		if (location.state) {
			if (location.state.section === 1) {
				scrollToSection(about);
			} else if (location.state.section === 3) {
				scrollToSection(contactUs);
			}
		}
	}, [location]);
	return (
		<>
			<div>Home</div>
			<div ref={about} className="about-container">
				<About />
			</div>
			<div ref={contactUs} className="contact-us-container">
				<ContactUs />
			</div>
		</>
	);
}

export default Home;
