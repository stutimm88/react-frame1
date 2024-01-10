import React from 'react'

function Accordion() {
  return (
    <>
      <div className='container text-start p-5'>
        <h2>
            Frequently Asked Questions (FAQ):
        </h2>

        <div className="accordion accordion-flush p-4" id="accordionFlushExample">
          <div className="accordion-item border rounded-4 shadow" >
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" 
              data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" 
              style={{'background':'#F0EFEF'}}>
              What is a crypto airdrop?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={{'background':'#F0EFEF'}}>
                
              </div>
            </div>
          </div> <br/>

          <div className="accordion-item border rounded-4 shadow">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" 
              data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" 
              style={{'background':'#F0EFEF'}}>
               Why do companies give away free cryptocurrencies?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={{'background':'#F0EFEF'}}>
                
              </div>
            </div>
          </div> <br/>

          <div class="accordion-item border rounded-4 shadow">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" 
              data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" 
              style={{'background':'#F0EFEF'}}>
              What is a crypto airdrop?
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body fs-4" style={{'background':'#F0EFEF'}}>
                Airdrop is another term for free cryptocurrencies. These free cryptocurrencies (also called 
                coins or tokens) are distributed by new projects. These are their own and new coins.
              </div>
            </div>
          </div><br/>

          <div className="accordion-item border rounded-4 shadow">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" 
              data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour" 
              style={{'background':'#F0EFEF'}}>
               Why do companies give away free cryptocurrencies?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={{'background':'#F0EFEF'}}>
                
              </div>
            </div>
          </div><br/>

          <div className="accordion-item border rounded-4 shadow">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" 
              data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive" 
              style={{'background':'#F0EFEF'}}>
               Why do companies give away free cryptocurrencies?
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={{'background':'#F0EFEF'}}>
                
              </div>
            </div>
          </div><br/>

          <div className="accordion-item border rounded-4 shadow">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" 
              data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix" 
              style={{'background':'#F0EFEF'}}>
               Why do companies give away free cryptocurrencies?
              </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={{'background':'#F0EFEF'}}>
                
              </div>
            </div>
          </div><br/>

          <div className="accordion-item border rounded-4 shadow">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" 
              data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven" 
              style={{'background':'#F0EFEF'}}>
               Why do companies give away free cryptocurrencies?
              </button>
            </h2>
            <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={{'background':'#F0EFEF'}}>
                
              </div>
            </div>
          </div><br/>

          <div className="accordion-item border rounded-4 shadow">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" 
              data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight" 
              style={{'background':'#F0EFEF'}}>
               Why do companies give away free cryptocurrencies?
              </button>
            </h2>
            <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body" style={{'background':'#F0EFEF'}}>
                
              </div>
            </div>
          </div><br/>

        </div>
      </div>
      
    </>
  )
}

export default Accordion







































// import { Container } from 'react-bootstrap';
// import Accordion from 'react-bootstrap/Accordion';

// function AllCollapseExample() {
//   return (
//     <Container>
//     <Accordion>
//      <h4> Frequently Asked Questions (FAQ) </h4>
//       <Accordion.Item eventKey="0">
//         <Accordion.Header><h5>What is a Crypto Airdrop?</h5></Accordion.Header>
//         <Accordion.Body>
          
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header><h5> Why do companies give away free cryptocurrencies?</h5></Accordion.Header>
//         <Accordion.Body>
          
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="2">
//         <Accordion.Header><h5> What is a crypto airdrop?</h5></Accordion.Header>
//         <Accordion.Body>
//         <h5>Airdrop is another term for free cryptocurrencies. These free cryptocurrencies (also called coins 
//         or tokens) are distributed by new projects. These are their own and new coins.</h5>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="3">
//         <Accordion.Header><h5> Why do companies give away free cryptocurrencies?</h5></Accordion.Header>
//         <Accordion.Body>
          
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="4">
//         <Accordion.Header><h5> Why do companies give away free cryptocurrencies?</h5></Accordion.Header>
//         <Accordion.Body>
         
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="5">
//         <Accordion.Header><h5> Why do companies give away free cryptocurrencies?</h5></Accordion.Header>
//         <Accordion.Body>
          
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="6">
//         <Accordion.Header><h5> Why do companies give away free cryptocurrencies?</h5></Accordion.Header>
//         <Accordion.Body>
          
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="7">
//         <Accordion.Header><h5> Why do companies give away free cryptocurrencies?</h5></Accordion.Header>
//         <Accordion.Body>
         
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//     </Container>
//   );
// }

// export default AllCollapseExample;