export const LODGING_INFO = {
  name: "Nossa Hospedagem em Barcelona",
  address: "Avinguda de Gaudí 27, Eixample, 08025 Barcelona, Espanha",
  neighborhood: "Eixample / Sagrada Família",
  highlights: [
    "Apenas 2 minutos a pé da Basílica da Sagrada Família",
    "Boulevard charmoso para pedestres repleto de cafés e vista direta",
    "Estações de Metrô L2 e L5 a 200 metros (Sagrada Família e Sant Pau)",
    "Ponto estratégico para fazer quase tudo a pé ou metrô rápido"
  ],
  coordinates: { lat: 41.4063, lng: 2.1764 }
};

export const TRIP_META = {
  destination: "Barcelona, Catalunha, Espanha",
  dates: "13 a 16 de Setembro de 2026",
  duration: "4 Dias / 3 Noites",
  arrival: "Sábado, 13/09 às 10:35 no Aeroporto El Prat (BCN)",
  sunsetDay1: "20:03 (Fim do Shabat e liberação para compras e jantares)",
  currency: "Euro (€)",
  transportPass: "T-Casual (10 viagens integradas metrô/ônibus/tram por €13,00)",
};

export const DAYS_DATA = [
  {
    dayNumber: 1,
    date: "Sábado, 13 de Setembro",
    title: "Primeiro Olhar & Shabat",
    subtitle: "Chegada matinal, contemplação arquitetônica e brisa mediterrânea",
    themeColor: "#E76F51",
    accentColor: "#F4A261",
    gradient: "linear-gradient(135deg, #1f120e 0%, #381a13 50%, #0d0d12 100%)",
    specialNotice: {
      type: "shabbat",
      title: "Observância do Shabat (Até 20:03)",
      description: "Até o pôr do sol (20:03), faremos um passeio 100% contemplativo e gratuito: caminhadas pelos bulevares, admiração das fachadas de Gaudí e orla da praia sem gastos. Após 20:03, celebraremos com o primeiro jantar catalão!"
    },
    costEstimate: 0,
    attractions: [
      {
        id: "checkin_gaudi",
        name: "Chegada & Avinguda de Gaudí",
        time: "11:00 - 12:00",
        period: "Manhã",
        category: "Hospedagem & Recepção",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/barcelona_hero.jpg",
        description: "Desembarque no aeroporto às 10:35 e chegada à nossa hospedagem na Avinguda de Gaudí 27. Deixar malas, respirar o ar da Catalunha e abrir a janela com vista privilegiada para o Eixample.",
        routeFromHotel: "Local de partida (Avinguda de Gaudí 27)",
        tips: "Boulevard arborizado exclusivo para pedestres com quiosques e vista monumental.",
        duration: "1h"
      },
      {
        id: "sagrada_exterior",
        name: "Sagrada Família (Fachadas Exteriores)",
        time: "12:00 - 13:30",
        period: "Manhã / Tarde",
        category: "Arquitetura / Gaudí",
        price: 0,
        priceFormatted: "Grátis (Exterior)",
        isOptional: false,
        image: "/images/sagrada_ext.jpg",
        description: "A apenas 2 minutos a pé da nossa porta! Momento de contemplação da Façana da Natividad e Façana da Paixão. Detalhes bíblicos esculturais esculpidos na pedra por Antoni Gaudí.",
        routeFromHotel: "🚶 2 minutos a pé (180 metros)",
        tips: "O parque em frente (Plaça de Gaudí) tem o lago com o reflexo perfeito para fotos contemplativas.",
        duration: "1h30"
      },
      {
        id: "sant_pau",
        name: "Boulevard Gaudí & Recinte Modernista de Sant Pau",
        time: "13:30 - 15:00",
        period: "Tarde",
        category: "Patrimônio UNESCO",
        price: 0,
        priceFormatted: "Grátis (Passeio exterior)",
        isOptional: false,
        image: "/images/sant_pau.jpg",
        description: "Caminhada relaxante subindo toda a Avinguda de Gaudí até o magnífico complexo modernista de Sant Pau, projetado por Lluís Domènech i Montaner.",
        routeFromHotel: "🚶 7 minutos subindo a avenida (500 metros)",
        tips: "Ângulo fotográfico clássico da avenida alinhando Sant Pau e Sagrada Família.",
        duration: "1h30"
      },
      {
        id: "eixample_walk",
        name: "Passeig de Gràcia (Fachadas Batlló & Milà)",
        time: "15:30 - 17:00",
        period: "Tarde",
        category: "Passeio Urbano",
        price: 0,
        priceFormatted: "Grátis (Fachadas)",
        isOptional: false,
        image: "/images/casa_batllo.jpg",
        description: "Caminhada agradável pelo 'Quadrat d'Or' (Quadrado de Ouro) do Eixample, admirando o dragão no teto da Casa Batlló e as curvas de pedra da Casa Milà sob a luz dourada do fim de tarde.",
        routeFromHotel: "🚶 20 min a pé ou Metrô L5 (Sagrada Família → Diagonal)",
        tips: "Ideal para apreciar a arquitetura modernista catalã sem filas.",
        duration: "1h30"
      },
      {
        id: "barceloneta_sunset",
        name: "Orla de Barceloneta & Pôr do Sol",
        time: "17:30 - 20:03",
        period: "Fim de Tarde / Pôr do Sol",
        category: "Natureza & Praia",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/barceloneta_beach.jpg",
        description: "Sentir a brisa do Mar Mediterrâneo, caminhar no calçadão ladeado por palmeiras e assistir ao pôr do sol às 20:03 que encerra o Shabat.",
        routeFromHotel: "🚇 Metrô L4 (Verdaguer / Girona → Barceloneta) ~15 min",
        tips: "Pôr do sol oficial às 20:03. Momento de transição perfeito para o jantar de abertura.",
        duration: "2h30"
      },
      {
        id: "jantar_sabado",
        name: "Jantar Festivo de Abertura (Pós-Shabat)",
        time: "20:30 - 22:30",
        period: "Noite",
        category: "Gastronomia Catalã",
        price: 30,
        priceFormatted: "Gasto pessoal (~€25-35)",
        isOptional: false,
        image: "/images/la_boqueria.jpg",
        description: "Após as 20:03, primeiro jantar oficial do grupo em El Born ou orla marítima com tapas, paella de frutos do mar/vegetais e sobremesas catalãs.",
        routeFromHotel: "🚶 Caminhada no Born ou Metrô de volta para Avinguda Gaudí",
        tips: "Restaurantes recomendados: 7 Portes, El Xampanyet ou tapearias na Plaça de Santa Maria del Mar.",
        duration: "2h"
      }
    ]
  },
  {
    dayNumber: 2,
    date: "Domingo, 14 de Setembro",
    title: "Obras-Primas de Gaudí & Fonte Mágica",
    subtitle: "Imersão total no gênio de Gaudí por dentro e espetáculo de águas à noite",
    themeColor: "#2A9D8F",
    accentColor: "#E9C46A",
    gradient: "linear-gradient(135deg, #0e1e1c 0%, #153833 50%, #0d0d12 100%)",
    specialNotice: {
      type: "highlight",
      title: "Noite de Show na Fonte Mágica!",
      description: "Em setembro, o show de luzes e música da Fonte Mágica de Montjuïc opera nas noites de quarta a domingo. Hoje (domingo) é a noite perfeita para assistir ao espetáculo às 21:00!"
    },
    costEstimate: 114,
    attractions: [
      {
        id: "sagrada_interior",
        name: "Sagrada Família (Interior & Torres)",
        time: "09:00 - 11:00",
        period: "Manhã",
        category: "Gaudí / Monumento",
        price: 26,
        priceFormatted: "€26,00",
        ticketUrl: "https://sagradafamilia.org/en/tickets",
        isOptional: false,
        image: "/images/sagrada_ext.jpg",
        description: "Visita com ingresso marcado ao interior da basílica. A luz matinal atravessa os vitrais policromáticos em tons de azul, verde, amarelo e vermelho criando uma floresta mágica de colunas.",
        routeFromHotel: "🚶 2 minutos a pé da nossa hospedagem",
        tips: "Comprar com 3 a 4 semanas de antecedência! Baixar o app oficial com audioguia em português.",
        duration: "2h"
      },
      {
        id: "casa_vicens_visit",
        name: "Casa Vicens (Primeira Casa de Gaudí)",
        time: "11:30 - 13:00",
        period: "Manhã",
        category: "Gaudí / Vila de Gràcia",
        price: 22,
        priceFormatted: "€22,00",
        ticketUrl: "https://casabatllo.es/en/online-tickets/",
        isOptional: false,
        image: "/images/casa_vicens.jpg",
        description: "O manifesto inaugural de Antoni Gaudí: azulejos verdes e brancos, influências orientais mudéjares e interiores deslumbrantes no coração do bairro boêmio de Gràcia.",
        routeFromHotel: "🚶 20 min caminhando pelo charmoso bairro de Gràcia ou Metrô L5/L3",
        tips: "Muito mais tranquila que as outras casas, perfeita para fotos sem multidões.",
        duration: "1h30"
      },
      {
        id: "parc_guell_visit",
        name: "Parc Güell (Zona Monumental)",
        time: "14:30 - 16:30",
        period: "Tarde",
        category: "Parque UNESCO",
        price: 18,
        priceFormatted: "€18,00",
        ticketUrl: "https://parkguell.barcelona/en/buy-tickets",
        isOptional: false,
        image: "/images/parc_guell.jpg",
        description: "O banco ondulante de mosaicos trencadís mais famoso do mundo, a salamandra 'El Drac', a Sala Hipóstila e a vista panorâmica de toda a cidade até o mar.",
        routeFromHotel: "🚌 Ônibus Linha 24 (direto até a entrada superior) ou Metrô L3 Vallcarca/Lesseps",
        tips: "Horário rigoroso de entrada no ingresso. Levar protetor solar e calçado confortável.",
        duration: "2h"
      },
      {
        id: "casa_batllo_visit",
        name: "Casa Batlló (A Casa do Dragão)",
        time: "17:00 - 18:30",
        period: "Fim de Tarde",
        category: "Gaudí / Imersivo",
        price: 29,
        priceFormatted: "€29,00",
        ticketUrl: "https://www.casabatllo.es/en/online-tickets/",
        isOptional: false,
        image: "/images/casa_batllo.jpg",
        description: "Uma das obras mais fascinantes da história da arte mundial. Inclui a experiência de realidade aumentada 'Gaudí Cube' e o terraço do dragão de cerâmica.",
        routeFromHotel: "🚇 Metrô L3 (Lesseps → Passeig de Gràcia, 8 min)",
        tips: "O ingresso online inclui audioguia inteligente e tablets imersivos 3D.",
        duration: "1h30"
      },
      {
        id: "casa_mila_visit",
        name: "Casa Milà / La Pedrera",
        time: "18:45 - 20:00",
        period: "Início da Noite",
        category: "Gaudí / Terraço",
        price: 29,
        priceFormatted: "€29,00",
        ticketUrl: "https://www.lapedrera.com/en/visits",
        isOptional: false,
        image: "/images/casa_mila.jpg",
        description: "A apenas 2 quadras da Casa Batlló! O icônico terraço dos 'Guerreiros de Pedra' (chaminés esculturais) com vista aberta para o Eixample iluminado.",
        routeFromHotel: "🚶 3 minutos a pé da Casa Batlló",
        tips: "O sótão dos arcos catenários de tijolo parece o interior de uma baleia gigante.",
        duration: "1h15"
      },
      {
        id: "fonte_magica_show",
        name: "Show da Fonte Mágica de Montjuïc",
        time: "21:00 - 22:00",
        period: "Noite",
        category: "Espetáculo / Noite",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/fonte_magica.jpg",
        description: "Espetáculo gratuito e emocionante de coreografia de jatos d'água, luzes multicoloridas e trilha sonora sinfônica/pop em frente ao imponente Palau Nacional.",
        routeFromHotel: "🚇 Metrô L3 (Diagonal → Espanya, 12 min)",
        tips: "Chegar 20 min antes para pegar um bom lugar nas escadarias da Plaça Espanya!",
        duration: "1h"
      }
    ]
  },
  {
    dayNumber: 3,
    date: "Segunda, 15 de Setembro",
    title: "Coração Histórico & Bairro Gótico",
    subtitle: "Ruelas medievais romanas, aromas de La Boqueria e Parque de la Ciutadella",
    themeColor: "#8338EC",
    accentColor: "#C77DFF",
    gradient: "linear-gradient(135deg, #1b0e2b 0%, #30134f 50%, #0d0d12 100%)",
    specialNotice: {
      type: "tip",
      title: "Tudo 100% a Pé no Centro",
      description: "Este dia é quase inteiramente gratuito em ingressos, focado em viver a história de mais de 2.000 anos de Barcino (a Barcelona romana e medieval)."
    },
    costEstimate: 14,
    attractions: [
      {
        id: "boqueria_market",
        name: "Mercat de la Boqueria & Las Ramblas",
        time: "09:00 - 10:30",
        period: "Manhã",
        category: "Mercado & Cultura",
        price: 0,
        priceFormatted: "Grátis (Entrada)",
        isOptional: false,
        image: "/images/la_boqueria.jpg",
        description: "O mercado mais famoso da Europa! Sucos de frutas frescas cortadas na hora (€2), queijos artesanais, cones de presunto ibérico e energia vibrante.",
        routeFromHotel: "🚇 Metrô L2 (Sagrada Família → Passeig de Gràcia) + L3 (Liceu) ~15 min",
        tips: "Melhor horário para visitar é pela manhã, antes das grandes excursões turísticas.",
        duration: "1h30"
      },
      {
        id: "catedral_bcn",
        name: "Catedral de Barcelona (La Seu)",
        time: "11:00 - 12:15",
        period: "Manhã",
        category: "Histórico / Gótico",
        price: 14,
        priceFormatted: "€14,00",
        ticketUrl: "https://catedralbcn.org/en/visit/",
        isOptional: false,
        image: "/images/catedral_barcelona.jpg",
        description: "Majestosa catedral gótica do século XIV dedicada a Santa Eulália, com seu claustro secular habitado por 13 gansos brancos e terraço com vista 360° da Cidade Velha.",
        routeFromHotel: "🚶 5 minutos a pé da Boqueria pelo Bairro Gótico",
        tips: "O elevador leva direto ao terraço panorâmico da catedral.",
        duration: "1h15"
      },
      {
        id: "pont_bisbe_gotico",
        name: "Pont del Bisbe & Labirinto Gótico",
        time: "12:15 - 13:30",
        period: "Meio-dia",
        category: "História Medieval",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/pont_del_bisbe.jpg",
        description: "Caminhada pelas ruelas de pedra, Plaça del Rei (sede dos condes de Barcelona), Plaça Sant Felip Neri e a famosa Ponte do Bispo neogótica sobre a Carrer del Bisbe.",
        routeFromHotel: "🚶 Imediatamente adjacente à Catedral de Barcelona",
        tips: "Procure a caveira esculpida sob a ponte — diz a lenda que dá sorte fazer um pedido olhando para ela.",
        duration: "1h15"
      },
      {
        id: "almoco_born",
        name: "Almoço em El Born / Santa Maria del Mar",
        time: "13:30 - 15:00",
        period: "Tarde",
        category: "Gastronomia",
        price: 20,
        priceFormatted: "Gasto pessoal (~€15-25)",
        isOptional: false,
        image: "/images/barcelona_hero.jpg",
        description: "Pausa para almoço no bairro mais charmoso de Barcelona, repleto de ruelas de artesãos, praças arborizadas e a basílica de Santa Maria del Mar.",
        routeFromHotel: "🚶 5 minutos a pé saindo do Bairro Gótico",
        tips: "Experimente 'Pintxos' bascos ou 'Pan con Tomate' com jamón ibérico.",
        duration: "1h30"
      },
      {
        id: "parc_ciutadella_relax",
        name: "Parque de la Ciutadella & Arc de Triomf",
        time: "15:30 - 17:30",
        period: "Tarde",
        category: "Parque / Lazer",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/parc_ciutadella.jpg",
        description: "Oásis verde da cidade com a monumental Cascada de Antoni Gaudí jovem, lago com barquinhos a remo e o majestoso Arco do Triunfo de tijolos avermelhados.",
        routeFromHotel: "🚶 8 minutos a pé de El Born",
        tips: "Ótimo lugar para descansar na grama, tomar um sorvete e recarregar as energias.",
        duration: "2h"
      },
      {
        id: "praia_tarde_livre",
        name: "Praia de Barcelona & Chiringuitos",
        time: "17:30 - 20:00",
        period: "Fim de Tarde",
        category: "Praia & Lazer",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/barceloneta_beach.jpg",
        description: "Caminhada da Ciutadella direto para o calçadão da praia de Bogatell / Barceloneta. Relaxamento à beira-mar, pés na areia e brisa do Mediterrâneo.",
        routeFromHotel: "🚶 10 minutos a pé do Parque da Ciutadella",
        tips: "Os quiosques de praia ('chiringuitos') oferecem sucos e petiscos com vista para o mar.",
        duration: "2h30"
      }
    ]
  },
  {
    dayNumber: 4,
    date: "Terça, 16 de Setembro",
    title: "Montjuïc, Camp Nou (Opcional) & Despedida",
    subtitle: "Panoramas da colina de Montjuïc, opção FC Barcelona e grande encerramento",
    themeColor: "#3A86FF",
    accentColor: "#00F5D4",
    gradient: "linear-gradient(135deg, #091a2e 0%, #0d2c52 50%, #0d0d12 100%)",
    specialNotice: {
      type: "split",
      title: "Manhã Dividida: Camp Nou ou Jardins de Montjuïc",
      description: "Para atender a todos do grupo: quem ama futebol faz o tour imersivo do Camp Nou, e quem prefere contemplação passeia pelos belíssimos Jardins de Montjuïc. Às 12:30, todos se reúnem na Plaça Espanya!"
    },
    costEstimate: 40,
    attractions: [
      {
        id: "camp_nou_option",
        name: "Opção A: Camp Nou (Barça Immersive Tour)",
        time: "09:30 - 12:00",
        period: "Manhã",
        category: "Futebol / Interativo (OPCIONAL)",
        price: 28,
        priceFormatted: "€28,00",
        ticketUrl: "https://www.fcbarcelona.com/en/tickets/tour-and-museum",
        isOptional: true,
        image: "/images/camp_nou.jpg",
        description: "Experiência oficial do FC Barcelona: museu dos troféus de Messi e lendas, sala imersiva circular 360° e mirante das obras de modernização do novo Spotify Camp Nou.",
        routeFromHotel: "🚇 Metrô L5 (Sagrada Família → Collblanc, 18 min sem baldeação)",
        tips: "Ideal para os apaixonados por esporte! Quem não for fará a Opção B nos jardins.",
        duration: "2h30"
      },
      {
        id: "montjuic_gardens_option",
        name: "Opção B: Jardins de Montjuïc & Mirador del Alcalde",
        time: "09:30 - 12:00",
        period: "Manhã",
        category: "Natureza & Mirantes",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: true,
        image: "/images/mnac_montjuic.jpg",
        description: "Para quem não for ao estádio: passeio pelos exuberantes jardins botânicos e mirantes suspensos sobre o porto de Barcelona com vista de cruzeiros e do mar.",
        routeFromHotel: "🚇 Metrô L2 (Sagrada Família → Paral·lel) + Funicular de Montjuïc",
        tips: "Sombra agradável, fontes ornamentais e brisa refrescante na colina.",
        duration: "2h30"
      },
      {
        id: "ponto_encontro",
        name: "Ponto de Encontro: Plaça d'Espanya & Torres Venezianas",
        time: "12:30 - 13:00",
        period: "Meio-dia",
        category: "Ponto de Encontro",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/barcelona_hero.jpg",
        description: "Reunião de todo o grupo entre as monumentais Torres Venezianas da Plaça d'Espanya para subirmos juntos em direção ao Palácio de Montjuïc.",
        routeFromHotel: "🚇 Estação de Metrô Espanya (Linhas L1, L3, L8)",
        tips: "Escadas rolantes ao ar livre auxiliam a subida da colina confortavelmente.",
        duration: "30 min"
      },
      {
        id: "mnac_visit",
        name: "Museu Nacional d'Art de Catalunya (MNAC & Mirante)",
        time: "13:00 - 15:30",
        period: "Tarde",
        category: "Museu / Arte / Vista",
        price: 12,
        priceFormatted: "€12,00",
        ticketUrl: "https://www.museunacional.cat/en/tickets",
        isOptional: false,
        image: "/images/mnac_montjuic.jpg",
        description: "O majestoso Palau Nacional no topo da colina. Abriga a mais importante coleção de afrescos românicos do mundo e o terraço com a vista panorâmica definitiva de Barcelona.",
        routeFromHotel: "🚶 Subida a pé pelas escadarias e esteiras rolantes da Plaça Espanya",
        tips: "Mesmo sem entrar em todas as galerias, a vista das escadarias principais é imperdível.",
        duration: "2h30"
      },
      {
        id: "jardins_montjuic_todos",
        name: "Jardins de Laribal & Anel Olímpico de 1992",
        time: "15:30 - 17:30",
        period: "Tarde",
        category: "História & Jardins",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/mnac_montjuic.jpg",
        description: "Caminhada de todo o grupo pelo Estádio Olímpico Lluís Companys, a emblemática Torre de Telecomunicações de Santiago Calatrava e as pérgolas floridas de Laribal.",
        routeFromHotel: "🚶 Caminhada suave pelos caminhos interligados de Montjuïc",
        tips: "Ambiente calmo e cinematográfico com aroma de pinheiros e jasmins.",
        duration: "2h"
      },
      {
        id: "despedida_barcelona",
        name: "Último Passeio na Avinguda de Gaudí & Malas",
        time: "18:00 - 20:30",
        period: "Fim de Tarde / Noite",
        category: "Encerramento da Viagem",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/sagrada_ext.jpg",
        description: "Retorno à nossa base na Avinguda de Gaudí 27. Último café com vista para a Sagrada Família iluminada, empacotamento das malas e lembranças de uma viagem inesquecível.",
        routeFromHotel: "🚇 Metrô L2 (Paral·lel → Sagrada Família) ou L5",
        tips: "Comprar chocolates e turrón artesanal nos comércios da avenida para levar de presente!",
        duration: "2h30"
      }
    ]
  }
];

export const PRICING_BREAKDOWN = [
  {
    name: "Sagrada Família (Interior)",
    price: 26.00,
    day: "Dia 2 (Domingo)",
    status: "Essencial",
    category: "Gaudí",
    url: "https://sagradafamilia.org/en/tickets",
    notes: "Comprar 3-4 semanas antes. Audioguia no app incluso."
  },
  {
    name: "Casa Batlló (Blue Ticket)",
    price: 29.00,
    day: "Dia 2 (Domingo)",
    status: "Essencial",
    category: "Gaudí",
    url: "https://www.casabatllo.es/en/online-tickets/",
    notes: "Inclui Gaudí Cube e tablet com realidade aumentada."
  },
  {
    name: "Casa Milà / La Pedrera",
    price: 29.00,
    day: "Dia 2 (Domingo)",
    status: "Essencial",
    category: "Gaudí",
    url: "https://www.lapedrera.com/en/visits",
    notes: "Terraço dos guerreiros de pedra e sótão da baleia."
  },
  {
    name: "Casa Vicens",
    price: 22.00,
    day: "Dia 2 (Domingo)",
    status: "Essencial",
    category: "Gaudí",
    url: "https://casavicens.org/tickets/",
    notes: "Primeira casa de Gaudí em Gràcia. Menos cheia e super fotogênica."
  },
  {
    name: "Parc Güell (Zona Monumental)",
    price: 18.00,
    day: "Dia 2 (Domingo)",
    status: "Essencial",
    category: "Parque UNESCO",
    url: "https://parkguell.barcelona/en/buy-tickets",
    notes: "Ingresso com horário rígido. Banco ondulante e dragão."
  },
  {
    name: "Catedral de Barcelona (La Seu)",
    price: 14.00,
    day: "Dia 3 (Segunda)",
    status: "Essencial",
    category: "Histórico",
    url: "https://catedralbcn.org/en/visit/",
    notes: "Acesso ao claustro dos 13 gansos e terraço panorâmico."
  },
  {
    name: "Museu Nacional d'Art de Catalunya (MNAC)",
    price: 12.00,
    day: "Dia 4 (Terça)",
    status: "Essencial",
    category: "Museu / Vistas",
    url: "https://www.museunacional.cat/en/tickets",
    notes: "Terraço panorâmico da colina e arte românica."
  },
  {
    name: "Camp Nou (Barça Immersive Tour)",
    price: 28.00,
    day: "Dia 4 (Terça)",
    status: "Opcional (Futebol)",
    category: "Esporte",
    url: "https://www.fcbarcelona.com/en/tickets/tour-and-museum",
    notes: "Opcional para os fãs do Barça. Quem não for visita os Jardins de Montjuïc grátis."
  },
  {
    name: "Cartão de Transporte T-Casual (10 Viagens)",
    price: 13.00,
    day: "Todos os Dias",
    status: "Transporte",
    category: "Mobilidade",
    url: "https://www.tmb.cat/en/barcelona-fares-metro-bus/single-tickets-and-travel-cards/t-casual",
    notes: "Válido para metrô, ônibus e tram na Zona 1. Compra nas máquinas do metrô."
  }
];

export const FREE_ATTRACTIONS = [
  { name: "Sagrada Família (Vista Exterior & Lago)", day: "Dia 1 & Todos", cost: "€0,00" },
  { name: "Avinguda de Gaudí Boulevard", day: "Todos os dias", cost: "€0,00" },
  { name: "Hospital de Sant Pau (Fachadas)", day: "Dia 1", cost: "€0,00" },
  { name: "Passeig de Gràcia (Fachadas Modernistas)", day: "Dia 1", cost: "€0,00" },
  { name: "Praia de Barceloneta / Bogatell", day: "Dias 1, 3 & 4", cost: "€0,00" },
  { name: "Mercat de la Boqueria (Passeio)", day: "Dia 3", cost: "€0,00" },
  { name: "Las Ramblas & Plaça Reial", day: "Dia 3", cost: "€0,00" },
  { name: "Pont del Bisbe & Bairro Gótico", day: "Dia 3", cost: "€0,00" },
  { name: "Parque de la Ciutadella & Cascada", day: "Dia 3", cost: "€0,00" },
  { name: "Show da Fonte Mágica de Montjuïc (Domingo 21h)", day: "Dia 2", cost: "€0,00" },
  { name: "Jardins de Montjuïc & Mirador del Alcalde", day: "Dia 4", cost: "€0,00" },
  { name: "Plaça d'Espanya & Torres Venezianas", day: "Dia 4", cost: "€0,00" },
  { name: "Anel Olímpico de Barcelona 1992", day: "Dia 4", cost: "€0,00" }
];

export const PRACTICAL_TIPS = [
  {
    title: "Transporte Econômico e Rápido",
    icon: "Train",
    content: "Compre o cartão T-Casual nas máquinas de qualquer estação de metrô (€13 por 10 viagens integradas). Como nossa hospedagem na Avinguda de Gaudí fica a 200m do metrô e muitas atrações são feitas a pé, 1 ou 2 cartões T-Casual por pessoa cobrirão 100% da estadia com conforto extremo."
  },
  {
    title: "Compra Antecipada Rigorosa",
    icon: "Ticket",
    content: "Sagrada Família, Casa Batlló e Parc Güell ESGOTAM com semanas de antecedência. Adquiram os ingressos pelos links oficiais listados neste site com 3 a 4 semanas antes da viagem (especialmente para o domingo, 14/09)."
  },
  {
    title: "Shabat no Sábado (Dia 13/09)",
    icon: "Sun",
    content: "Como o pôr do sol ocorre pontualmente às 20:03, o sábado foi desenhado para ser 100% contemplativo, leve e sem gastos financeiros até a noite. Aproveitaremos a beleza arquitetônica das fachadas e a orla marítima."
  },
  {
    title: "Horários de Alimentação na Espanha",
    icon: "Utensils",
    content: "Os restaurantes espanhóis almoçam tipicamente entre 13:30 e 15:30, e o jantar começa a partir das 20:30 ou 21:00. O roteiro foi perfeitamente sincronizado com esses horários locais."
  },
  {
    title: "Segurança e Conforto",
    icon: "ShieldCheck",
    content: "Barcelona é muito segura, mas requer atenção a batedores de carteira ('pickpockets') em locais com aglomeração como Las Ramblas e estações centrais do metrô. Mantenham mochilas na frente e celulares nos bolsos internos."
  }
];
