import Carousel from "./carousel";

function AboutMe(){
    return <div className='aboutme ' id='aboutme'>
        
<img id="aboutbackimg" src="./aboutback.webp" alt="una foto no robada de dager"/>
        <div id="about-section-container">       
        <section id="abouts">
          <div>
          <h1 style={{marginBottom:"2em"}}>About me</h1>
          <h2>My name is Mariano Villa</h2>
          <div className='inlineabouttext'>
          <h3>🖥️ Senior developer/lead -</h3><p>I can program even in a calculator.</p>
          </div>
          <div className='inlineabouttext'>
            <h3>⭐ Content Creator -</h3>
            <p>Programming, music, code principles, study.</p>
          </div>
          <div className='inlineabouttext'>
          <h3>❤️ I loves -</h3>
          <p>Programming, cats, guitars, pickles, and philosophy.</p>
          </div><div className='inlineabouttext'>
          <h3>💀 Megalofobic -</h3>
          <p>I'm scared of big things that aren't penises.</p>
          </div>
          <div className='inlineabouttext'>
          <h3>🫂Community-</h3>
          <p>I have a community where the vast majority are otakus.</p>
          </div>
          </div>
          <div className="centerdiv">
          <Carousel />
          </div>
      </section>
      
          
          
          
        </div>
        </div>
}

export default AboutMe;