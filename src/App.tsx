import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery{
  genre: Genre |null;
  platform: Platform | null;

}
function App() {
  const [gameQuery, setGameQuery]=useState<GameQuery>({} as GameQuery)

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
            <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
          </GridItem>
          </Show>


        <GridItem area="main">
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})} />
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
