// Inject overlay elements

setTimeout(function () {
  const overlay = document.createElement("div");
  overlay.id = "overlay-extension";
  document.body.prepend(overlay);

  // Optionally, you can add HTML content to your overlay
  overlay.innerHTML = `
 
  <div id=“alert”  style=" height: 30vh; 
  position:absolute;
  top:20px;
  left:15vw;
  width: 70vw;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  padding: 2vh;
  z-index:9999 !important;
  background-color: rgba(115,5,255,1);
  color:white;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.6);">


      <div class=“cross” style=" float: right;">
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2_30)">
      <path d="M10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0C4.70101 0 0 4.70101 0 10.5C0 16.299 4.70101 21 10.5 21Z" fill="white"/>
      <path d="M6.72 5.88L15.171 14.331" stroke="black" stroke-linecap="round"/>
      <path d="M15.171 5.88L6.72002 14.331" stroke="black" stroke-linecap="round"/>
      </g>
      <defs>
      <clipPath id="clip0_2_30">
      <rect width="21" height="21" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      </div>

      <div class=“content-icon” style="  float: left;
      width: 28%;
      padding-top: 4.2vh;
      margin-left: 2%;">
    
    
      </div>
      <div class=“content-text” style="  float: right;
      width: 80%;
      margin-right: 10%; color:white;" >
          <h1 style="color:white;">Warning – Your data will be resold!</h1>
          <p style="color:white;">This website resells your data. Do not enable cookies here, otherwise your data will be used without your knowledge.</p>
          <a href=“https://www.google.ch” target=“_blank” style="margin-right: 15px; color:white;">Help</a><a href=“https://www.google.ch” target=“_blank” style="color:white;">More Information</a>
      </div>

 
  </div>
`;
}, 500); // 3-second delay
