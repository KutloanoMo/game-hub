import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`, //Screen: 0px to 1024px -Mobile and Tablet
          lg: `"nav nav" "aside main"`, //Screen: 1024px and above
        }}
      >
        <GridItem area="nav">
          <NavBar/>
        </GridItem>


          <GridItem area="aside" hideBelow={"lg"}>
            Aside
          </GridItem>


        <GridItem area="main">
          <GameGrid/>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
