import aboutImage from "../assets/hair1.jpg";

function About() {

return (

<section className="about-page">

<div className="about-container">

<div className="about-image">

<img
src={aboutImage}
alt="Atso Beauty"
/>

</div>


<div className="about-content">

<span className="about-tag">
ABOUT ATSO'S BEAUTY
</span>

<h1>
Luxury Hair Styling
Made To Elevate
Your Confidence
</h1>

<p>
Atso's Beauty is a modern beauty salon focused on
premium hairstyling, flawless installations,
and elegant transformations for women who want
to look and feel their absolute best.
</p>

<p>
We specialize in knotless braids, ponytails,
wig installations, and luxury protective styles
crafted with precision, creativity, and attention
to detail.
</p>

<div className="about-stats">

<div className="about-stat">

<h2>500+</h2>

<p>
Happy Clients
</p>

</div>


<div className="about-stat">

<h2>4+</h2>

<p>
Years Experience
</p>

</div>


<div className="about-stat">

<h2>100%</h2>

<p>
Premium Service
</p>

</div>

</div>


<button>
Book Appointment
</button>

</div>

</div>

</section>

);

}

export default About;