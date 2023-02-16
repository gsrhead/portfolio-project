export default function Projects () {
//navbar is linked with ^^ ^^ Projects its identifed to be imported from navbar to wich it clicks. followed linked and copied to display in other links
    return (
        <div>
             <p style={{ color: "black" }}>My Projects</p> 
                          <p>
                  These projects gave me a hands-on experience in software development
          and allowed me to apply my theoretical knowledge in a practical
          setting. They also helped me develop my technical skills and allowed
          me to see the results of my efforts. I am proud of what I have
          accomplished and look forward to creating more projects in the future.
        </p>{" "}
        <h3 style={{ color: "blue", textAlign: "center" }}>
          {" "}
        
          <a href="https://github.com/gsrhead">    
         👀 watch it! 
            Check out my latest repo at my Github.👀
          </a>
        </h3>
     <img
  src="calc.png"
  alt="Your"
  style={{
    width: "90px",
    height: "90px",
    display: "block",
    margin: "0 auto",
  }}
/>
        </div>
    )
}