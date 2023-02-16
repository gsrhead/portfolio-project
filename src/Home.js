export default function Home(){

    return(
         <div>
            <div>
      <a 
        className="badge-base__link LI-simple-link"
        href="https://www.linkedin.com/in/ioannis-stathopoulos?trk=profile-badge" // went to linkedin and this started the navabar link to profile..
      >
      </a>
    </div>
    <div>
        <p>
under construction care to buy me <>
  Coffee while this is being worked on!</>
        </p>
      <main>
        <p class="MyResume">
          For more information, 
          <a
            class="highlight-link"
            href="https://resume.io/r/EgTYfxgOE" //* found out in google to do this some where i looked it up..
            target="RESUME"
            rel="noreferrer"
            style={{ color: "yellow", margin:"25px" }}
          >
           View my  RESUME
          </a>
        </p>
         <img
  src="giphy.gif"
  alt="Your"
  style={{
    width: "400px", // googled this to search for npm react dom
    height: "200px",
    display: "block",
    margin: "0 auto",
  }}
/>
      </main>
    </div>
         </div>
    )
}