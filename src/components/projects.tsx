import './projects.css';

function Projects() {
  const projectData = [
    {
      id: 1,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', // Bulbasaur
      name: 'Bulbasaur',
      type: 'Grass/Poison',
      description: 'A grass/poison-type Pokémon known for its plant bulb on its back.',
    },
    {
      id: 2,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', // Charmander
      name: 'Charmander',
      type: 'Fire',
      description: 'A fire-type Pokémon with a flame on its tail that indicates its life force.',
    },
    {
      id: 3,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png', // Squirtle
      name: 'Squirtle',
      type: 'Water',
      description: 'A water-type Pokémon that withdraws into its shell for protection.',
    },
    {
      id: 4,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png', // Pikachu
      name: 'Pikachu',
      type: 'Electric',
      description: 'An electric-type Pokémon and the mascot of the Pokémon franchise.',
    },
    {
      id: 5,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png', // Jigglypuff
      name: 'Jigglypuff',
      type: 'Fairy',
      description: 'A fairy-type Pokémon known for its ability to sing opponents to sleep.',
    },
    {
      id: 6,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png', // Gengar
      name: 'Gengar',
      type: 'Ghost/Poison',
      description: 'A ghost/poison-type Pokémon that lurks in the shadows.',
    },
    {
      id: 7,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png', // Snorlax
      name: 'Snorlax',
      type: 'Normal',
      description: 'A normal-type Pokémon that loves to eat and sleep.',
    },
    {
      id: 8,
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png', // Mewtwo
      name: 'Mewtwo',
      type: 'Psychic',
      description: 'A psychic-type Pokémon created through genetic manipulation.',
    },
  ];

  return (
    <section className="page-section projects" id="work">
      <div className="projects-title">
        <span>My Pokémons</span>
      </div>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-tile">
            <img src={project.image} alt={project.name} className="project-image" />
            <span className="project-name">{project.name}</span>
            <span className="project-type">{project.type}</span>
            <span className="project-description">{project.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;