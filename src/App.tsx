import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`, //Screen: 0px to 1024px -Mobile and Tablet
          lg: `"nav nav" "aside main"`, //Screen: 1024px and above
        }}
        templateColumns={{
          base: "1fr", //Screen: 0px to 1024px -Mobile and Tablet
          lg: "200px 1fr", //Screen: 1024px and above
        }}
      >
        <GridItem area="nav">
          <NavBar/>
        </GridItem>

          <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList/>
          </GridItem>
          </Show>


        <GridItem area="main">
          <GameGrid/>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
