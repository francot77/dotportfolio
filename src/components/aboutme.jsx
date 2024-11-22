function AboutMe(){
    return <div className='aboutme' id='aboutme'>        
          <h1>About me</h1>
          <div className='text-overlay'>
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
          </div>
          <div className='imgs'>
          <img alt="dagercito" src='./dagersito.webp' className='aboutimg' id="aimg"/>          
          <img alt="dagercito" src='./dagersito1.webp' className='aboutimg'id="aimg1"/> 
          <img alt="dagercito" src='./dagersito2.webp' className='aboutimg'id="aimg2"/> 
          </div>
        </div>
}

export default AboutMe;