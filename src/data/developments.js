const premierCatalog = [
  {
    location: 'Bataan',
    projects: [['Anvaya Cove', 'anvaya-cove']],
  },
  {
    location: 'Bulacan',
    projects: [['Miravera', 'miravera']],
  },
  {
    location: 'Cagayan de Oro',
    projects: [['Alegria Hills', 'alegria-hills']],
  },
  {
    location: 'Cavite',
    projects: [
      ['Lanewood Hills', 'lanewood-hills'],
      ['Ciela at Aera Heights', 'ciela-at-aera-heights'],
      ['Crescent Grove', 'crescent-grove'],
      ['The Courtyards at Vermosa', 'the-courtyards-at-vermosa'],
    ],
  },
  {
    location: 'Cebu',
    projects: [['The Alcoves', 'the-alcoves']],
  },
  {
    location: 'Davao',
    projects: [
      ['The Residences at Azuela', 'the-residences-at-azuela'],
      ['Virendo', 'virendo'],
    ],
  },
  {
    location: 'Laguna',
    projects: [
      ['Arcilo', 'arcilo'],
      ['Soliento', 'soliento'],
      ['Ayala Westgrove Heights', 'ayala-westgrove-heights'],
      ['Abrio', 'abrio'],
      ['Cerilo', 'cerilo'],
      ['Montecito', 'montecito'],
      ['Riomonte', 'riomonte'],
      ['Enara', 'enara'],
      ['Luscara', 'luscara'],
      ['Ayala Greenfield Estates', 'ayala-greenfield-estates'],
      ['Elaro', 'elaro'],
      ['Andacillo', 'andacillo'],
      ['Santierra', 'santierra'],
    ],
  },
  {
    location: 'Makati',
    projects: [
      ['Park Terraces', 'park-terraces'],
      ['Garden Towers', 'garden-towers'],
      ['Park Central Towers', 'park-central-towers'],
      ['Park Villas', 'park-villas'],
    ],
  },
  {
    location: 'Negros Occidental',
    projects: [['The Enclaves at North Point', 'the-enclaves-at-north-point']],
  },
  {
    location: 'Pampanga',
    projects: [['Park Estates at Alviera', 'park-estates-at-alviera']],
  },
  {
    location: 'Quezon City / Pasig',
    projects: [['Parklinks North and South Towers', 'parklinks-north-and-south-towers']],
  },
  {
    location: 'Taguig',
    projects: [
      ['Arbor Lanes', 'arbor-lanes'],
      ['Gardencourt Residences', 'gardencourt-residences'],
      ['One Serendra', 'one-serendra'],
      ['The Suites at One Bonifacio High Street', 'the-suites-at-one-bonifacio-high-street'],
    ],
  },
]

const alveoCatalog = [
  {
    location: 'Batangas',
    directory: 'batangas',
    projects: ['South Palmgrove'],
  },
  {
    location: 'Cagayan de Oro',
    directory: 'cagayan-de-oro',
    projects: ['Bayview Heights'],
  },
  {
    location: 'Cavite',
    directory: 'cavite',
    projects: [
      'Caleia Vermosa',
      'The Residences at Evo City',
      'Verdana Homes Bacoor',
      'Verdea Southmount',
      'Hillside Ridge Southmont',
      'Ardia Vermosa',
      'Kasa Luntian',
    ],
  },
  {
    location: 'Cebu',
    directory: 'cebu',
    projects: ['Sedona Parc', 'Cerule at Solinea'],
  },
  {
    location: 'Davao',
    directory: 'davao',
    projects: ['Patio Suites Abreeza', 'Abreeza Residences', 'Abreeza Place'],
  },
  {
    location: 'Laguna',
    directory: 'laguna',
    projects: [
      'Sereneo Nuvali',
      'Treveia Nuvali',
      'Venare Nuvali',
      'Venido Broadfield',
      'Verdana Homes Mamplasan',
      'Mondia Nuvali',
      'Mirala Nuvali',
      'Lumira Nuvali',
      'Aveia Broadfield',
    ],
  },
  {
    location: 'Las Piñas–Alabang',
    directory: 'alabang',
    projects: ['Viento at Cerca', 'Nuveo at Cerca'],
  },
  {
    location: 'Makati',
    directory: 'makati',
    projects: [
      'Senta',
      'Solstice at Circuit Makati',
      'The Columns Ayala Avenue',
      'The Columns Legazpi Village',
      'Parkford Suites Legazpi',
      'Mergent Residences',
      'The Lerato',
      'Kroma',
      'Gentry Residences',
      'Escala Salcedo',
      'Callisto at Circuit Makati',
      'Astela at Circuit Makati',
    ],
  },
  {
    location: 'Manila',
    directory: 'manila',
    projects: ['Celadon Residences', 'Celadon Park'],
  },
  {
    location: 'Pampanga',
    directory: 'pampanga',
    projects: [
      'The Greenways at Alviera',
      'Versala Alviera',
      'Montala Alviera',
      'Marquee Residences',
      'Marquee Place',
      'Corvia Alviera',
    ],
  },
  {
    location: 'Pasig / Quezon City',
    directory: 'pasig',
    projects: ['The Ametrine at Portico', 'The Lattice at Parklinks', 'Ametta Place'],
  },
  {
    location: 'Quezon City',
    directory: 'quezon-city',
    projects: [
      'Orean Residences at Vertis North',
      'Sentrove at Cloverleaf',
      'Orean Place at Vertis North',
      'High Park at Vertis North',
      'Ferndale Villas',
    ],
  },
  {
    location: 'Taguig',
    directory: 'taguig',
    projects: [
      'The Veranda at Arca South',
      'Two Serendra',
      'Park Triangle Residences',
      'Park East Place',
      'Park Cascades at Arca South',
      'High Street South – Verve Residences',
      'High Street South – Maridien',
    ],
  },
]

const premierDevelopments = premierCatalog.flatMap(({ location, projects }) =>
  projects.map(([name, slug]) => ({
    name,
    brand: 'Ayala Land Premier',
    location,
    type: 'Residential development',
    tag: location.toUpperCase(),
    officialUrl: `https://www.ayalalandpremier.com/properties/${slug}`,
    officialLabel: 'View official project page',
  })),
)

const alveoDevelopments = alveoCatalog.flatMap(({ location, directory, projects }) =>
  projects.map((name) => ({
    name,
    brand: 'Alveo',
    location,
    type: name === 'Kasa Luntian' ? 'Residential and leisure development' : 'Residential development',
    tag: location.toUpperCase(),
    officialUrl: `https://www.alveoland.com.ph/locations/${directory}/`,
    officialLabel: 'Browse official Alveo catalog',
  })),
)

const corporateAlveoDevelopments = [
  {
    name: 'Vertis Residences',
    brand: 'Alveo',
    location: 'Quezon City',
    type: 'Residential development',
    tag: 'QUEZON CITY',
    officialUrl: 'https://ayalaland.com/properties/vertis-residences',
    officialLabel: 'View official project page',
  },
]

export const developments = [
  ...premierDevelopments,
  ...alveoDevelopments,
  ...corporateAlveoDevelopments,
]

export const illustrativePropertyImages = [
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85',
]
