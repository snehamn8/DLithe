import React from "react";
import sampleImage from "./assets/download.jpg";

const Details = ({ setPage }) => {
  return (
    <div className="container">
      <img src={sampleImage} alt="Sample" className="image" />

      <p className="info">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices mi in elit maximus mollis. Sed vel eros vitae mi imperdiet ultricies. Duis ultrices vehicula tempor. Sed sit amet porta magna. Etiam feugiat vel metus non auctor. Donec blandit posuere eros id tristique. Vestibulum at ligula sagittis, elementum arcu eleifend, finibus metus. Quisque metus mi, scelerisque eu pretium imperdiet, vehicula eget mi. Sed viverra elit convallis, dictum nisl non, consectetur massa.

      Aliquam ac cursus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Pellentesque non nunc accumsan urna ultrices laoreet eu sed massa. Mauris pretium, justo in laoreet congue, diam nisi congue lorem, nec tincidunt dolor arcu eget sem. Duis quis odio ut diam maximus interdum nec vitae nisi. Cras tristique sollicitudin odio, vel ullamcorper augue fermentum nec. Suspendisse sed augue tortor.

      Maecenas quis metus aliquet, sodales elit quis, tempor ex. Curabitur vel lorem hendrerit, viverra tortor sit amet, sollicitudin dui. Nunc diam ipsum, porta nec molestie ac, placerat a neque. Aliquam lacinia interdum placerat. Ut sit amet cursus nulla. Nam non dolor vel turpis sodales faucibus quis eget nisl. Nam ac metus fringilla, dapibus lorem eget, dapibus velit. Nam semper, felis et auctor pulvinar, nulla magna feugiat elit, et porta eros leo scelerisque est. Sed ut ligula id lectus interdum suscipit in finibus libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur fermentum, diam sit amet vestibulum tincidunt, urna velit rhoncus lacus, ut convallis mi lectus non tortor. Nulla facilisi. Aliquam at velit nec sapien tempus congue. Morbi blandit quam auctor leo laoreet commodo. Curabitur maximus turpis vel nisl congue, a mollis enim tempor.
      </p>
      <button className="btn" onClick={() => setPage("home")}>
        Go Back
      </button>
    </div>
  );
};

export default Details;
