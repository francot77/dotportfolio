import DiscordIcon from "../icons/discord";
import GitHubIcon from "../icons/github";
import InstagramIcon from "../icons/instagram";
import LinkedinIcon from "../icons/linkedin";
import YouTubeIcon from "../icons/youtube";

function Header(){
    return <header>
    <div className='img-container'>
      <div className='overlay'><h2>Hi</h2></div>
      <img alt="hero dagersito" src='./transparentdager.webp' width={400} className='image-dager'/>
    </div>
    <section className='hero'>
      <h3>Hello I'm Dot Dager</h3>
      <h1>Full Stack Developer</h1>
      <h4>Dev with a passion for SOLID code and amazing products.</h4>
      <br/>
      <div className="icons">

      <GitHubIcon path="https://github.com/marianovilla" id="giticon"/>
      <LinkedinIcon path="https://www.linkedin.com/in/mariano-luis-villa" id="linkicon"/>
      <YouTubeIcon path="https://www.youtube.com/@DotDager" id="yticon"/>
      <InstagramIcon path="https://www.instagram.com/dager.32/" id="igicon"/>
      <DiscordIcon path="https://discord.com/invite/4NFk6TamAB" id="discicon"/>
      </div>
    </section>
  </header>
}

export default Header;