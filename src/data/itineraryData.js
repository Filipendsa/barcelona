// =========================================================================
// ROTEIRO OFICIAL BARCELONA & MADRID (13 A 16 DE SETEMBRO DE 2026)
// Com horários precisos, datas reais, coordenadas e rotas Google Maps
// Adaptado com respeito às preferências Adventistas (sem carne suína/jamón)
// =========================================================================

export const LODGING_INFO = {
  name: "Nossa Hospedagem em Barcelona",
  address: "Avinguda de Gaudí 27, Eixample, 08025 Barcelona, Espanha",
  neighborhood: "Eixample / Sagrada Família",
  highlights: [
    "Apenas 2 minutos a pé da Basílica da Sagrada Família",
    "Boulevard charmoso para pedestres repleto de cafés, restaurantes e vista monumental",
    "Estações de Metrô L2 e L5 a 200 metros (Sagrada Família e Sant Pau)",
    "Ponto estratégico com acesso rápido a pé ou metrô direto para todas as atrações"
  ],
  coordinates: { lat: 41.4063, lng: 2.1764 },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Avinguda+de+Gaudi+27+Barcelona"
};

export const TRIP_META = {
  destination: "Barcelona & Madrid, Espanha",
  dates: "13 a 16 de Setembro de 2026",
  duration: "4 Dias (3 Noites em Barcelona + Madrid Express)",
  arrival: "Domingo, 13/09 às 10:40 no Aeroporto El Prat (BCN)",
  departure: "Quarta-feira, 16/09 às 23:55 no Aeroporto Madrid-Barajas (MAD)",
  currency: "Euro (€)",
  transportPass: "T-Casual Barcelona (10 viagens integradas metrô/ônibus por ~€12,15 a €13,00) + Comboio Cercanías Madrid (~€2,60)",
};

// =========================================================================
// BARCELONA (13 A 16 DE SETEMBRO)
// =========================================================================

export const DAYS_DATA = [
  {
    dayNumber: 1,
    city: "barcelona",
    cityName: "Barcelona",
    date: "Domingo, 13 de Setembro",
    title: "Chegada & O Eixo Gaudí",
    subtitle: "Desembarque matinal, check-in na base e imersão nas três maiores obras de Antoni Gaudí",
    themeColor: "#E76F51",
    accentColor: "#F4A261",
    gradient: "linear-gradient(135deg, #1f120e 0%, #381a13 50%, #0d0d12 100%)",
    specialNotice: {
      type: "highlight",
      title: "Dia de Chegada & Eixo Modernista",
      description: "Chegada às 10:40 no El Prat. Como a base fica na Avinguda de Gaudí, iniciamos a visitação com a Sagrada Família (a 2 min a pé) e seguimos pelo Passeig de Gràcia (La Pedrera e Casa Batlló)."
    },
    googleMapsDayRoute: "https://www.google.com/maps/dir/Aeroport+de+Barcelona-El+Prat/Avinguda+de+Gaud%C3%AD,+27,+Barcelona/Bas%C3%ADlica+de+la+Sagrada+Fam%C3%ADlia,+Barcelona/Casa+Mil%C3%A0,+Barcelona/Casa+Batll%C3%B3,+Barcelona",
    costEstimate: 80,
    attractions: [
      {
        id: "chegada_elprat_gaudi",
        name: "Chegada a Barcelona & Check-in na Av. de Gaudí",
        time: "10:40 - 14:00",
        period: "Manhã / Almoço",
        category: "Chegada & Logística",
        address: "Avinguda de Gaudí, 27, Eixample, 08025 Barcelona, Espanha",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/barcelona_hero.jpg",
        description: "Pouso no Aeroporto El Prat às 10:40. Deslocação até ao alojamento na Avinguda de Gaudí 27 (Aerobús até Plaça Catalunya + metrô ou Linha L9 Sud + L5). Check-in, largar as malas e almoço tranquilo nos cafés da avenida pedonal.",
        routeFromHotel: "Desembarque no Aeroporto BCN → Metrô L9/L5 ou Aerobús até Av. de Gaudí 27",
        metroLines: "Metrô L9 Sud / L5 (Sagrada Família) ou Aerobús A1/A2 + Metrô L2",
        tips: "Aproveite para comprar o cartão de transporte T-Casual de 10 viagens nas máquinas da estação.",
        duration: "3h20",
        coordinates: { lat: 41.4063, lng: 2.1764 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Avinguda+de+Gaudi+27+Barcelona"
      },
      {
        id: "sagrada_familia_interior",
        name: "Templo Expiatório da Sagrada Família",
        time: "14:30 - 16:30",
        period: "Tarde",
        category: "Patrimônio UNESCO / Gaudí",
        address: "Carrer de Mallorca, 401, 08013 Barcelona, Espanha",
        price: 26,
        priceFormatted: "€26,00 a €36,00",
        ticketUrl: "https://sagradafamilia.org/en/tickets",
        isOptional: false,
        image: "/images/sagrada_ext.jpg",
        description: "A obra-prima inacabada de Antoni Gaudí situada a apenas 2 minutos a pé da nossa base! Interior grandioso com colunas em forma de árvore e vitrais que filtram a luz da tarde num espetáculo de cores. Fachadas do Nascimento e da Paixão e museu subterrâneo.",
        routeFromHotel: "🚶 Apenas 2 minutos a pé descendo a Avinguda de Gaudí (180 metros)",
        metroLines: "A pé (180m) ou Metrô Linhas L2 e L5 (Estação Sagrada Família)",
        tips: "OBRIGATÓRIO comprar ingresso com semanas de antecedência. Baixe o app com audioguia em português.",
        duration: "2h",
        coordinates: { lat: 41.4036, lng: 2.1744 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sagrada+Familia+Barcelona"
      },
      {
        id: "casa_mila_pedrera",
        name: "Casa Milà (La Pedrera)",
        time: "17:00 - 18:15",
        period: "Fim de Tarde",
        category: "Gaudí / Terraço Escultural",
        address: "Passeig de Gràcia, 92, 08008 Barcelona, Espanha",
        price: 28,
        priceFormatted: "~€25,00 a €28,00",
        ticketUrl: "https://www.lapedrera.com/en/visits",
        isOptional: false,
        image: "/images/casa_mila.jpg",
        description: "Edifício icônico no Passeig de Gràcia com fachada de pedra ondulada sem paredes de sustentação convencionais. Destaque para o terraço escultural dos 'Guerreiros Medievais' (chaminés) e o sótão dos arcos catenários de tijolo.",
        routeFromHotel: "🚇 Metrô L5 (Sagrada Família → Diagonal, 6 min) ou caminhada agradável de 15 min",
        metroLines: "Metrô Linha L5 (Sagrada Família → Diagonal, 2 paradas / 6 min) ou Linha L3",
        tips: "A vista do terraço no fim de tarde enquadra o Eixample e a Sagrada Família ao fundo.",
        duration: "1h15",
        coordinates: { lat: 41.3954, lng: 2.1620 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+Mila+Barcelona"
      },
      {
        id: "casa_batllo",
        name: "Casa Batlló (A Casa do Dragão)",
        time: "18:30 - 19:45",
        period: "Início da Noite",
        category: "Gaudí / Experiência Imersiva",
        address: "Passeig de Gràcia, 43, 08007 Barcelona, Espanha",
        price: 29,
        priceFormatted: "~€29,00 a €35,00",
        ticketUrl: "https://www.casabatllo.es/en/online-tickets/",
        isOptional: false,
        image: "/images/casa_batllo.jpg",
        description: "Localizada a apenas 3 quarteirões da Casa Milà, na famosa 'Maçã da Discórdia'. Fachada de mosaicos coloridos (trencadís), varandas que lembram máscaras/ossos e telhado que reproduz o dorso escamoso do dragão de São Jorge.",
        routeFromHotel: "🚶 4 minutos a pé descendo o Passeig de Gràcia a partir da Casa Milà (350 metros)",
        metroLines: "A pé (350m descendo Passeig de Gràcia) | Metrô Linhas L2, L3, L4 (Estação Passeig de Gràcia)",
        tips: "O ingresso inclui audioguia de realidade aumentada e a sala imersiva Gaudí Cube.",
        duration: "1h15",
        coordinates: { lat: 41.3916, lng: 2.1650 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+Batllo+Barcelona"
      },
      {
        id: "jantar_domingo",
        name: "Jantar no Eixample / Avinguda de Gaudí",
        time: "20:00 - 22:00",
        period: "Noite",
        category: "Gastronomia Catalã",
        address: "Avinguda de Gaudí, Eixample, 08025 Barcelona, Espanha",
        price: 25,
        priceFormatted: "Consumo pessoal (~€20-30)",
        isOptional: false,
        image: "/images/sant_pau.jpg",
        description: "Encerramento do primeiro dia com tapas vegetarianas/de frutos do mar, paella de vegetais e pratos catalães nas charmosas ruas de Eixample ou retornando aos restaurantes da Avinguda de Gaudí.",
        routeFromHotel: "🚶 Caminhada no Eixample ou Metrô L5 de volta para Sagrada Família",
        metroLines: "Metrô Linha L5 (Diagonal → Sagrada Família) ou caminhada",
        tips: "Experimente Pan con Tomate (pão catalão com tomate e azeite de oliva) e Patatas Bravas no primeiro jantar.",
        duration: "2h",
        coordinates: { lat: 41.4063, lng: 2.1764 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Avinguda+de+Gaudi+Barcelona"
      }
    ]
  },
  {
    dayNumber: 2,
    city: "barcelona",
    cityName: "Barcelona",
    date: "Segunda-feira, 14 de Setembro",
    title: "Feira, Parques & Ciência",
    subtitle: "Mercado de pulgas com teto espelhado, oásis verde da Ciutadella, museu interativo e pôr do sol no Parc Güell",
    themeColor: "#2A9D8F",
    accentColor: "#E9C46A",
    gradient: "linear-gradient(135deg, #0e1e1c 0%, #153833 50%, #0d0d12 100%)",
    specialNotice: {
      type: "highlight",
      title: "Segunda-feira: Dia da Feira do Rolo (Encants)!",
      description: "O Mercat dels Encants só abre às segundas, quartas, sextas e sábados — por isso hoje é o dia perfeito! Agrupamos também o museu CosmoCaixa e o Parc Güell na zona alta."
    },
    googleMapsDayRoute: "https://www.google.com/maps/dir/Avinguda+de+Gaud%C3%AD,+27,+Barcelona/Mercat+dels+Encants,+Barcelona/Arc+de+Triomf,+Barcelona/Parc+de+la+Ciutadella,+Barcelona/CosmoCaixa,+Barcelona/Park+G%C3%BCell,+Barcelona",
    costEstimate: 16,
    attractions: [
      {
        id: "mercat_encants",
        name: "Mercat dels Encants (Feira do Rolo)",
        time: "09:00 - 11:00",
        period: "Manhã",
        category: "Mercado & Curiosidades",
        address: "Carrer de los Castillejos, 158, 08013 Barcelona, Espanha",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/mercat_encants.jpg",
        description: "O mais emblemático mercado de pulgas de Barcelona, situado na Plaça de les Glòries. Complexo espetacular com teto espelhado futurista onde se encontra de tudo: antiguidades, livros raros, colecionáveis, eletrônicos e curiosidades.",
        routeFromHotel: "🚶 15 min a pé da base ou Metrô L2 (Sagrada Família → Monumental / Glòries, 5 min)",
        metroLines: "Metrô Linha L2 (Sagrada Família → Encants / Monumental) ou Linha L1 (Glòries)",
        tips: "Chegue cedo para ver os leilões tradicionais e fotografar o teto espelhado.",
        duration: "2h",
        coordinates: { lat: 41.4011, lng: 2.1868 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mercat+dels+Encants+Barcelona"
      },
      {
        id: "ciutadella_arc_triomf",
        name: "Parc de la Ciutadella & Arco do Triunfo",
        time: "11:15 - 13:00",
        period: "Manhã / Meio-dia",
        category: "Parque & Monumento",
        address: "Passeig de Lluís Companys / Parc de la Ciutadella, 08003 Barcelona, Espanha",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/parc_ciutadella.jpg",
        description: "Passeio pelo majestoso Arco do Triunfo de tijolos avermelhados e descida pelo bulevar até ao maior parque central. Contemplação da Cascada Monumental (desenhada com participação do jovem Gaudí) e lago central.",
        routeFromHotel: "🚋 Tram T4 de Glòries direto até Ciutadella ou caminhada agradável de 12 min",
        metroLines: "Tram T4 (Glòries → Ciutadella / Vila Olímpica) ou Metrô Linha L1 (Estação Arc de Triomf)",
        tips: "Excelente momento para relaxar na sombra. Almoce no bairro vizinho de El Born (13:00–14:15).",
        duration: "1h45",
        coordinates: { lat: 41.3888, lng: 2.1874 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Parc+de+la+Ciutadella+Barcelona"
      },
      {
        id: "cosmocaixa_ciencia",
        name: "CosmoCaixa (Museu da Ciência)",
        time: "14:30 - 17:00",
        period: "Tarde",
        category: "Museu Interativo & Natureza",
        address: "Carrer d'Isaac Newton, 26, 08022 Barcelona, Espanha",
        price: 6,
        priceFormatted: "~€6,00",
        ticketUrl: "https://cosmocaixa.org/en/",
        isOptional: false,
        image: "/images/cosmocaixa.jpg",
        description: "Um dos museus de ciência mais impressionantes e baratos da Europa! Abriga o 'Bosque Inundado' (uma floresta tropical amazônica viva indoor de 1.000m² com peixes e árvores reais), o Planetário e dezenas de experimentos interativos de física e astronomia.",
        routeFromHotel: "🚇 Metrô L1/L4 até Plaça Catalunya + Trem FGC Linha L7 até Av. Tibidabo + 5 min caminhada",
        metroLines: "Metrô L1/L4 até Catalunya → Trem FGC Linha L7 até Av. Tibidabo + 5 min caminhada ou Ônibus 196",
        tips: "Ingresso super acessível (€6). Não perca a estufa da floresta amazônica com chuva simulada!",
        duration: "2h30",
        coordinates: { lat: 41.4132, lng: 2.1317 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=CosmoCaixa+Barcelona"
      },
      {
        id: "parc_guell_sunset",
        name: "Parque Güell (Zona Monumental & Pôr do Sol)",
        time: "17:45 - 19:30",
        period: "Fim de Tarde / Pôr do Sol",
        category: "Patrimônio UNESCO / Gaudí",
        address: "Carrer d'Olot, 08024 Barcelona, Espanha",
        price: 10,
        priceFormatted: "€10,00 a €18,00",
        ticketUrl: "https://parkguell.barcelona/en/buy-tickets",
        isOptional: false,
        image: "/images/parc_guell.jpg",
        description: "Parque modernista nas colinas com vista desafogada sobre Barcelona e o mar. Famoso banco ondulante de mosaicos trencadís, a escadaria monumental com a salamandra 'El Drac' e a imponente Sala Hipóstila sob as luzes douradas do pôr do sol.",
        routeFromHotel: "🚌 Ônibus V19 ou Táxi rápido (10 min) direto do CosmoCaixa até à entrada do Parc Güell",
        metroLines: "Ônibus V19 direto (ou Metrô Linha L3 - Estação Lesseps / Vallcarca)",
        tips: "Horário rígido de entrada com ingresso marcado. Vista panorâmica espetacular do pôr do sol!",
        duration: "1h45",
        coordinates: { lat: 41.4145, lng: 2.1527 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Park+Guell+Barcelona"
      }
    ]
  },
  {
    dayNumber: 3,
    city: "barcelona",
    cityName: "Barcelona",
    date: "Terça-feira, 15 de Setembro",
    title: "Centro Gótico, Barça & Praia",
    subtitle: "Catedral matinal gratuita, labirinto gótico, aromas de La Boqueria, tour no Camp Nou, mirante de Montjuïc e brisa do Mediterrâneo",
    themeColor: "#3A86FF",
    accentColor: "#00F5D4",
    gradient: "linear-gradient(135deg, #091a2e 0%, #0d2c52 50%, #0d0d12 100%)",
    specialNotice: {
      type: "highlight",
      title: "Logística Perfeita na Linha L3 do Metrô",
      description: "Aproveite a entrada gratuita na Catedral logo cedo (08h30–09h30). A Linha L3 conecta diretamente La Boqueria (Liceu) ao Camp Nou (Palau Reial) e Montjuïc (Espanya)."
    },
    googleMapsDayRoute: "https://www.google.com/maps/dir/Catedral+de+Barcelona/Pont+del+Bisbe,+Barcelona/Mercat+de+la+Boqueria,+Barcelona/Spotify+Camp+Nou,+Barcelona/Museu+Nacional+d'Art+de+Catalunya,+Barcelona/Platja+de+la+Barceloneta,+Barcelona/Font+M%C3%A0gica+de+Montju%C3%AFc,+Barcelona",
    costEstimate: 40,
    attractions: [
      {
        id: "catedral_barcelona_gratis",
        name: "Catedral de Barcelona (La Seu — Acesso Gratuito)",
        time: "08:30 - 09:30",
        period: "Manhã",
        category: "Patrimônio Histórico / Gótico",
        address: "Pla de la Seu, s/n, 08002 Barcelona, Espanha",
        price: 0,
        priceFormatted: "Grátis (08h30 às 12h30)",
        ticketUrl: "https://catedralbcn.org/en/visit/",
        isOptional: false,
        image: "/images/catedral_barcelona.jpg",
        description: "Acesso gratuito no horário matinal dedicado à oração e culto (08h30 às 12h30). Imponente sé gótica catalã dedicada a Santa Eulália, com interior solene e claustro histórico com palmeiras e os tradicionais 13 gansos brancos.",
        routeFromHotel: "🚇 Metrô L2 (Sagrada Família → Passeig de Gràcia) + L3 (Liceu) ou L4 (Jaume I) ~15 min",
        metroLines: "Metrô Linha L4 (Estação Jaume I) ou Linha L3 (Liceu) / L1 (Catalunya)",
        tips: "Entrada gratuita pela manhã. Vista o interior respeitando o ambiente de culto (sem flash).",
        duration: "1h",
        coordinates: { lat: 41.3839, lng: 2.1762 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Catedral+de+Barcelona"
      },
      {
        id: "gotico_pont_bisbe",
        name: "Bairro Gótico & Pont del Bisbe",
        time: "09:30 - 11:00",
        period: "Manhã",
        category: "História Medieval",
        address: "Carrer del Bisbe, 08002 Barcelona, Espanha",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/pont_del_bisbe.jpg",
        description: "Ao sair da Catedral, mergulho direto no labirinto de ruelas medievais. Paragem na famosa Pont del Bisbe (ponte neogótica suspensa com a misteriosa caveira esculpida), Plaça del Rei e Plaça Sant Jaume.",
        routeFromHotel: "🚶 Imediatamente adjacente à Catedral de Barcelona",
        metroLines: "A pé (adjacente à Catedral) | Metrô Linha L4 (Jaume I) ou Linha L3 (Liceu)",
        tips: "Diz a lenda que fazer um pedido olhando para a adaga na caveira sob a ponte traz boa sorte.",
        duration: "1h30",
        coordinates: { lat: 41.3833, lng: 2.1766 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pont+del+Bisbe+Barcelona"
      },
      {
        id: "boqueria_mercado",
        name: "Mercado La Boqueria & Las Ramblas",
        time: "11:15 - 12:30",
        period: "Manhã / Almoço Tapas",
        category: "Mercado Tradicional",
        address: "La Rambla, 91, 08001 Barcelona, Espanha",
        price: 15,
        priceFormatted: "Consumo pessoal (~€10-15)",
        isOptional: false,
        image: "/images/la_boqueria.jpg",
        description: "O mercado mais famoso da Espanha, com acesso direto pelas célebres Ramblas. Balcões repletos de frutas frescas cortadas, sumos tropicais naturais (€2), queijos artesanais, pães tradicionais e empanadas vegetarianas.",
        routeFromHotel: "🚶 5 minutos a pé do Bairro Gótico até às Ramblas",
        metroLines: "Metrô Linha L3 (Estação Liceu, em frente ao mercado)",
        tips: "Excelente para provar frutas frescas, queijos artesanais e sumos naturais antes de seguir para o estádio.",
        duration: "1h15",
        coordinates: { lat: 41.3817, lng: 2.1716 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mercat+de+la+Boqueria+Barcelona"
      },
      {
        id: "camp_nou_tour",
        name: "Camp Nou (Barça Immersive Tour & Museu)",
        time: "13:00 - 15:00",
        period: "Tarde",
        category: "Futebol & Museu Imersivo",
        address: "Carrer d'Arístides Maillol, 12, 08028 Barcelona, Espanha",
        price: 28,
        priceFormatted: "~€28,00",
        ticketUrl: "https://www.fcbarcelona.com/en/tickets/tour-and-museum",
        isOptional: false,
        image: "/images/camp_nou.jpg",
        description: "O santuário do futebol do FC Barcelona. Visita ao Barça Immersive Tour: museu interativo com os troféus da Champions League e bolas de ouro de Messi, sala imersiva circular 360° e miradouro panorâmico das obras do novo estádio Spotify Camp Nou.",
        routeFromHotel: "🚇 Metrô L3 (Estação Liceu na porta da Boqueria → Palau Reial / Les Corts, 15 min direto)",
        metroLines: "Metrô Linha L3 direto (Estação Liceu → Palau Reial / Les Corts, 15 min)",
        tips: "Passeio rápido e empolgante com fotos épicas na sala de troféus e maquetes da nova arena.",
        duration: "2h",
        coordinates: { lat: 41.3809, lng: 2.1228 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camp+Nou+Barcelona"
      },
      {
        id: "montjuic_mnac_mirador",
        name: "Jardins de Montjuïc & MNAC (Mirante)",
        time: "15:30 - 17:30",
        period: "Tarde",
        category: "Arte, Jardins & Panoramas",
        address: "Palau Nacional, Parc de Montjuïc, s/n, 08038 Barcelona, Espanha",
        price: 12,
        priceFormatted: "€12,00 (Esplanada Grátis)",
        ticketUrl: "https://www.museunacional.cat/en/tickets",
        isOptional: false,
        image: "/images/mnac_montjuic.jpg",
        description: "Palácio monumental no alto da colina de Montjuïc com a esplanada mais espetacular de Barcelona. Vista desafogada de 360° para a Plaça d'Espanya e para o horizonte da cidade até a Sagrada Família.",
        routeFromHotel: "🚇 Metrô L3 (Palau Reial → Espanya, 10 min) + subida pelas escadas rolantes panorâmicas",
        metroLines: "Metrô Linha L3 (Palau Reial → Estação Espanya, 10 min) + escadas rolantes da av. Reina Maria Cristina",
        tips: "O acesso à grande esplanada e aos mirantes exteriores é 100% gratuito!",
        duration: "2h",
        coordinates: { lat: 41.3688, lng: 2.1534 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MNAC+Barcelona"
      },
      {
        id: "barceloneta_praia",
        name: "Praia de La Barceloneta & Orla",
        time: "18:00 - 20:30",
        period: "Fim de Tarde / Noite",
        category: "Praia & Lazer Marítimo",
        address: "Passeig Marítim de la Barceloneta, 08003 Barcelona, Espanha",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/barceloneta_beach.jpg",
        description: "A praia urbana mais famosa da capital catalã. Caminhada pelo calçadão ladeado de palmeiras, relaxamento na areia, brisa do Mar Mediterrâneo e jantar à beira-mar com paella de vegetais ou frutos do mar.",
        routeFromHotel: "🚇 Metrô L3 (Espanya → Drassanes) + caminhada pelo porto ou Metrô L4 (Barceloneta)",
        metroLines: "Metrô Linha L4 (Estação Barceloneta) ou Linha L3 (Drassanes) + caminhada pelo Port Vell",
        tips: "Momento perfeito para relaxar os pés na areia e brindar ao pôr do sol mediterrâneo.",
        duration: "2h30",
        coordinates: { lat: 41.3784, lng: 2.1925 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Playa+de+la+Barceloneta+Barcelona"
      },
      {
        id: "fonte_magica_encerramento",
        name: "Fonte Mágica de Montjuïc (Encerramento)",
        time: "21:00 - 22:00",
        period: "Noite",
        category: "Espetáculo de Águas & Luz",
        address: "Plaça de Carles Buïgas, 1, 08038 Barcelona, Espanha",
        price: 0,
        priceFormatted: "Grátis",
        image: "/images/fonte_magica.jpg",
        description: "Espetáculo de coreografias de água, luzes coloridas e trilha sonora sinfônica na base de Montjuïc em frente à Plaça d'Espanya. Fecho perfeito para a passagem por Barcelona.",
        routeFromHotel: "🚇 Metrô L3/L1 até Plaça d'Espanya",
        metroLines: "Metrô Linhas L1 e L3 (Estação Plaça d'Espanya)",
        tips: "Nota: sujeito à programação municipal hídrica. Ótima atmosfera noturna na Plaça d'Espanya.",
        duration: "1h",
        coordinates: { lat: 41.3712, lng: 2.1517 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Font+Magica+de+Montjuic+Barcelona"
      }
    ]
  }
];

// =========================================================================
// MADRID EXPRESS (16 DE SETEMBRO - QUARTA-FEIRA)
// =========================================================================

export const MADRID_LODGING_INFO = {
  name: "Escala & Chegada em Madrid (Aeroporto Barajas / Centro)",
  address: "Centro Histórico: Sol / Plaza Mayor / Gran Vía / Retiro, Madrid",
  neighborhood: "Sol / Centro / Retiro",
  highlights: [
    "Voo BCN 10:35 → Desembarque MAD 13:45",
    "Consigna de bagagens no Aeroporto (Left Luggage ~€10) e trem rápido ao centro",
    "Roteiro dinâmico 100% a pé das 15:00 às 21:15 pelos maiores cartões-postais",
    "Retorno ao Aeroporto às 22:00 para o voo noturno das 23:55"
  ],
  coordinates: { lat: 40.4168, lng: -3.7038 },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Puerta+del+Sol+Madrid"
};

export const MADRID_TRIP_META = {
  destination: "Madrid, Comunidade de Madrid, Espanha",
  dates: "Quarta-feira, 16 de Setembro de 2026",
  duration: "1 Tarde & Noite Express (13:45 às 23:55)",
  arrival: "Quarta, 16/09 às 13:45 no Aeroporto Adolfo Suárez-Barajas (MAD)",
  departure: "Quarta, 16/09 às 23:55 no Aeroporto Adolfo Suárez-Barajas (MAD)",
  currency: "Euro (€)",
  transportPass: "Comboio Cercanías C1/C10 (~€2,60) ou Metrô Linha 8 + Caminhada a pé no centro",
};

export const MADRID_DAYS_DATA = [
  {
    dayNumber: 4,
    city: "madrid",
    cityName: "Madrid",
    date: "Quarta-feira, 16 de Setembro",
    title: "Madrid Express — O Melhor da Capital em 1 Tarde",
    subtitle: "Do marco do Quilômetro Zero ao Palácio Real, tapas em São Miguel, compras na Gran Vía e pôr do sol no Retiro",
    themeColor: "#E63946",
    accentColor: "#FFB703",
    gradient: "linear-gradient(135deg, #2b0e12 0%, #4a151b 50%, #0d0d12 100%)",
    specialNotice: {
      type: "highlight",
      title: "Roteiro Otimizado de Escala (13:45 às 23:55)",
      description: "07:45 Check-out BCN → 10:35 Voo BCN-MAD → 13:45 Chegada MAD → 14:00 Malas na consigna e comboio ao centro → 15:00 a 21:15 Roteiro a pé → 22:00 Retorno ao Aeroporto → 23:55 Voo de regresso."
    },
    googleMapsDayRoute: "https://www.google.com/maps/dir/Aeropuerto+Adolfo+Su%C3%A1rez+Madrid-Barajas/Puerta+del+Sol,+Madrid/Plaza+Mayor,+Madrid/Mercado+de+San+Miguel,+Madrid/Palacio+Real+de+Madrid/Gran+V%C3%ADa,+Madrid/Plaza+de+Cibeles,+Madrid/Puerta+de+Alcal%C3%A1,+Madrid/Parque+de+El+Retiro,+Madrid",
    costEstimate: 20,
    attractions: [
      {
        id: "madrid_chegada_logistica",
        name: "Desembarque em Madrid & Trem ao Centro",
        time: "13:45 - 15:00",
        period: "Meio-dia / Tarde",
        category: "Chegada & Logística",
        address: "Aeroporto Adolfo Suárez Madrid-Barajas (Terminal T4), 28042 Madrid, Espanha",
        price: 13,
        priceFormatted: "Consigna (~€10) + Trem (~€2,60)",
        isOptional: false,
        image: "/images/madrid_hero.jpg",
        description: "Desembarque às 13:45 no Aeroporto Adolfo Suárez-Barajas. Deixar as malas no serviço de guarda-volumes (Consigna / Left Luggage, ~€10 por mala) e apanhar o comboio Cercanías C1/C10 ou Metrô L8 direto à estação Sol / Nuevos Ministerios.",
        routeFromHotel: "Aeroporto T4 → Comboio Cercanías C1/C10 direto a Chamartín/Nuevos Ministerios/Sol (25 min)",
        metroLines: "Comboio Cercanías Linha C1 ou C10 (Aeroporto T4 → Nuevos Ministerios / Sol) ou Metrô Linha 8",
        tips: "Viaje apenas com mochila leve para o centro para aproveitar a tarde com máxima liberdade.",
        duration: "1h15",
        coordinates: { lat: 40.4900, lng: -3.5676 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Aeropuerto+Madrid+Barajas+T4"
      },
      {
        id: "madrid_sol_plaza_mayor",
        name: "Porta do Sol & Plaza Mayor",
        time: "15:00 - 16:30",
        period: "Tarde",
        category: "Centro Histórico & Símbolos",
        address: "Puerta del Sol / Plaza Mayor, 28012 Madrid, Espanha",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/puerta_del_sol.jpg",
        description: "O epicentro da capital espanhola. Paragem no marco do Quilômetro Zero (origem das estradas da Espanha), estátua do Urso e do Medronheiro e caminhada de 4 minutos até à grandiosa Plaza Mayor com arcos simétricos dos Habsburgos e estátua de Felipe III.",
        routeFromHotel: "🚶 Ponto de início no centro de Madrid (saída da estação Sol)",
        metroLines: "Metrô Linhas L1, L2, L3 ou Comboio Cercanías C3, C4 (Estação Sol)",
        tips: "Tire a clássica foto com os pés sobre o marco do Quilômetro Zero!",
        duration: "1h30",
        coordinates: { lat: 40.4168, lng: -3.7038 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Puerta+del+Sol+Madrid"
      },
      {
        id: "madrid_mercado_san_miguel",
        name: "Mercado de São Miguel (Lanche de Tapas)",
        time: "16:30 - 17:15",
        period: "Tarde / Degustação",
        category: "Mercado Gastronômico",
        address: "Plaza de San Miguel, s/n, 28005 Madrid, Espanha",
        price: 15,
        priceFormatted: "Consumo pessoal (~€12-20)",
        isOptional: false,
        image: "/images/mercado_san_miguel.jpg",
        description: "Mercado gastronômico do início do século XX preservado em estrutura de ferro fundido. Balcões com queijos artesanais manchego, empanadas vegetais, azeitonas temperadas, frutos do mar e tapas variadas. (Opção: Chocolateria San Ginés logo ao lado).",
        routeFromHotel: "🚶 3 minutos a pé da Plaza Mayor (150 metros)",
        metroLines: "A pé (150m da Plaza Mayor) | Metrô Linhas L2 e L5 (Estação Ópera) ou L1/L2/L3 (Sol)",
        tips: "Opção alternativa de lanche: churros com chocolate denso na Chocolateria San Ginés a 2 min.",
        duration: "45 min",
        coordinates: { lat: 40.4154, lng: -3.7090 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mercado+de+San+Miguel+Madrid"
      },
      {
        id: "madrid_palacio_almudena",
        name: "Palácio Real de Madrid & Catedral de Almudena",
        time: "17:30 - 18:30",
        period: "Tarde",
        category: "Realeza & Patrimônio",
        address: "Calle de Bailén, s/n, 28071 Madrid, Espanha",
        price: 0,
        priceFormatted: "Grátis (Exteriores e Jardins)",
        isOptional: false,
        image: "/images/palacio_real_madrid.jpg",
        description: "O conjunto monumental mais imponente da monarquia espanhola. Fachada neoclássica do palácio voltada para a arborizada Plaza de Oriente, Jardins de Sabatini e a imponente Catedral de Almudena erguida logo em frente. (Opção: Templo de Debod a 10 min).",
        routeFromHotel: "🚶 5 minutos a pé do Mercado de São Miguel subindo a Calle Mayor (400 metros)",
        metroLines: "Metrô Linhas L2 e L5 (Estação Ópera, a 5 min a pé)",
        tips: "O miradouro junto à muralha do palácio tem vista desafogada para a Casa de Campo.",
        duration: "1h",
        coordinates: { lat: 40.4180, lng: -3.7143 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Palacio+Real+de+Madrid"
      },
      {
        id: "madrid_gran_via_cibeles",
        name: "Gran Vía & Praça de Cibeles",
        time: "18:45 - 19:45",
        period: "Fim de Tarde",
        category: "Avenida Monumental & Compras",
        address: "Gran Vía / Plaza de Cibeles, 28014 Madrid, Espanha",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/plaza_cibeles.jpg",
        description: "A avenida dos grandes teatros, lojas e edifícios emblemáticos (Metrópolis e Telefónica). Caminhada até à monumental Praça de Cibeles, com a célebre fonte esculpida em mármore diante do Palácio de Cibeles (sede da prefeitura) e Banco de España.",
        routeFromHotel: "🚶 10 minutos a pé da Plaza de Oriente descendo a Gran Vía",
        metroLines: "Metrô Linha L2 (Estação Banco de España / Sevilla) ou Linhas L1 e L5 (Gran Vía)",
        tips: "Momento ideal para compras rápidas de lembranças e roupas nas lojas da avenida.",
        duration: "1h",
        coordinates: { lat: 40.4195, lng: -3.6925 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+de+Cibeles+Madrid"
      },
      {
        id: "madrid_puerta_alcala_retiro",
        name: "Puerta de Alcalá & Jardins do Retiro",
        time: "20:00 - 21:15",
        period: "Início da Noite",
        category: "Parque UNESCO & Monumento",
        address: "Plaza de la Independencia, 7 / Parque de El Retiro, 28001 Madrid, Espanha",
        price: 0,
        priceFormatted: "Grátis",
        isOptional: false,
        image: "/images/parque_retiro.jpg",
        description: "O portal neoclássico de cinco vãos encomendado pelo rei Carlos III e entrada para o parque mais emblemático de Madrid (Patrimônio UNESCO). Passeio relaxante até ao Palácio de Cristal (pavilhão de vidro) e ao Grande Estanque sob a iluminação do entardecer.",
        routeFromHotel: "🚶 5 minutos a pé de Cibeles até à Puerta de Alcalá (entrada do parque)",
        metroLines: "Metrô Linha L2 (Estação Retiro) ou Linha L9 (Ibiza)",
        tips: "O Palácio de Cristal iluminado sobre o lago é um dos cenários mais mágicos da cidade.",
        duration: "1h15",
        coordinates: { lat: 40.4136, lng: -3.6820 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Parque+del+Retiro+Madrid"
      },
      {
        id: "madrid_jantar_despedida",
        name: "Jantar Rápido & Retorno ao Aeroporto",
        time: "21:15 - 22:00",
        period: "Noite / Despedida",
        category: "Gastronomia & Embarque",
        address: "Estación de Atocha / Recoletos, Madrid, Espanha",
        price: 20,
        priceFormatted: "Consumo pessoal (~€15-25)",
        isOptional: false,
        image: "/images/puerta_alcala.jpg",
        description: "Últimas tapas vegetarianas/de frutos do mar e brinde no eixo Retiro / Atocha ou Recoletos antes de embarcar no Cercanías ou Metrô de volta ao Aeroporto Madrid-Barajas às 22:00 para o voo final das 23:55.",
        routeFromHotel: "🚇 Estação Recoletos ou Atocha → Comboio Cercanías direto ao Aeroporto T4 (25 min)",
        metroLines: "Comboio Cercanías Linha C1/C10 (Estação Recoletos ou Atocha → Aeroporto T4, 25 min)",
        tips: "Chegada às 22:00 no aeroporto: recolha de malas na consigna e passagem na segurança para o voo das 23:55.",
        duration: "45 min",
        coordinates: { lat: 40.4110, lng: -3.6910 },
        googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Estacion+de+Atocha+Madrid"
      }
    ]
  }
];

// Madrid Optional Alternative Attractions
export const MADRID_OPTIONAL_ATTRACTIONS = [
  {
    name: "Chocolateria San Ginés (Churros & Chocolate)",
    category: "Gastronomia Tradicional",
    price: 6.00,
    priceFormatted: "~€6,00",
    url: "https://chocolateriasangines.com/",
    description: "Ao lado do Mercado de São Miguel. Churros estaladiços com chocolate denso desde 1894.",
    location: "Perto da Plaza Mayor"
  },
  {
    name: "Templo de Debod",
    category: "História & Mirante",
    price: 0,
    priceFormatted: "Grátis",
    description: "Templo egípcio do século II a.C. doado à Espanha, com vista espetacular da cidade.",
    location: "A 10 min a pé do Palácio Real"
  },
  {
    name: "Museu do Prado (Obras-Primas)",
    category: "Arte & Pintura",
    price: 15.00,
    priceFormatted: "€15,00",
    url: "https://www.museodelprado.es/en/visit-the-museum",
    description: "Pinacoteca de Velázquez ('As Meninas') e Goya, adjacente aos Jardins do Retiro.",
    location: "Paseo del Prado / Retiro"
  }
];

// Pricing Breakdown
export const PRICING_BREAKDOWN = [
  {
    name: "Sagrada Família (Interior & Torres)",
    price: 26.00,
    day: "Dia 1 (Dom 13/09)",
    status: "Essencial",
    category: "Gaudí",
    url: "https://sagradafamilia.org/en/tickets",
    notes: "Comprar com semanas de antecedência! Audioguia no app incluso."
  },
  {
    name: "Casa Batlló (Experiência Imersiva)",
    price: 29.00,
    day: "Dia 1 (Dom 13/09)",
    status: "Essencial",
    category: "Gaudí",
    url: "https://www.casabatllo.es/en/online-tickets/",
    notes: "Inclui Gaudí Cube e tablet com realidade aumentada."
  },
  {
    name: "Casa Milà / La Pedrera",
    price: 25.00,
    day: "Dia 1 (Dom 13/09)",
    status: "Essencial",
    category: "Gaudí",
    url: "https://www.lapedrera.com/en/visits",
    notes: "Terraço dos guerreiros de pedra e sótão com arcos de baleia."
  },
  {
    name: "CosmoCaixa (Museu da Ciência)",
    price: 6.00,
    day: "Dia 2 (Seg 14/09)",
    status: "Essencial",
    category: "Ciência",
    url: "https://cosmocaixa.org/en/",
    notes: "Floresta amazônica indoor de 1.000m² e planetário interativo."
  },
  {
    name: "Parque Güell (Zona Monumental)",
    price: 10.00,
    day: "Dia 2 (Seg 14/09)",
    status: "Essencial",
    category: "Parque UNESCO",
    url: "https://parkguell.barcelona/en/buy-tickets",
    notes: "Ingresso com horário marcado. Banco ondulante e dragão el Drac."
  },
  {
    name: "Camp Nou (Barça Immersive Tour)",
    price: 28.00,
    day: "Dia 3 (Ter 15/09)",
    status: "Destaque",
    category: "Esporte",
    url: "https://www.fcbarcelona.com/en/tickets/tour-and-museum",
    notes: "Museu dos troféus do Barça, sala 360° e vista das obras da nova arena."
  },
  {
    name: "MNAC (Museu Nacional d'Art de Catalunya)",
    price: 12.00,
    day: "Dia 3 (Ter 15/09)",
    status: "Essencial",
    category: "Arte / Mirador",
    url: "https://www.museunacional.cat/en/tickets",
    notes: "Arte românica e gótica. A grande esplanada exterior tem acesso gratuito."
  },
  {
    name: "Cartão T-Casual Barcelona (10 Viagens)",
    price: 12.15,
    day: "Todos os Dias",
    status: "Transporte",
    category: "Mobilidade",
    url: "https://www.tmb.cat/en/barcelona-fares-metro-bus/single-tickets-and-travel-cards/t-casual",
    notes: "Válido para metrô, ônibus e tram na Zona 1 de Barcelona."
  }
];

export const FREE_ATTRACTIONS = [
  { name: "Catedral de Barcelona (La Seu — Horário de Oração 08h30-12h30)", day: "Dia 3 (Ter 15/09)", cost: "€0,00" },
  { name: "Mercat dels Encants (Feira do Rolo)", day: "Dia 2 (Seg 14/09)", cost: "€0,00" },
  { name: "Avinguda de Gaudí Boulevard Pedonal", day: "Todos os dias", cost: "€0,00" },
  { name: "Parc de la Ciutadella & Arco do Triunfo", day: "Dia 2 (Seg 14/09)", cost: "€0,00" },
  { name: "Bairro Gótico & Pont del Bisbe", day: "Dia 3 (Ter 15/09)", cost: "€0,00" },
  { name: "Mercat de la Boqueria & Las Ramblas", day: "Dia 3 (Ter 15/09)", cost: "€0,00" },
  { name: "Praia de La Barceloneta & Calçadão", day: "Dia 3 (Ter 15/09)", cost: "€0,00" },
  { name: "Esplanada e Miradouros de Montjuïc", day: "Dia 3 (Ter 15/09)", cost: "€0,00" },
  { name: "Fonte Mágica de Montjuïc (Show de Luzes)", day: "Dia 3 (Ter 15/09)", cost: "€0,00" }
];

export const PRACTICAL_TIPS = [
  {
    title: "Transporte Integrado T-Casual",
    icon: "Train",
    content: "Compre o cartão T-Casual nas máquinas de qualquer estação de metrô (~€12,15 por 10 viagens integradas na Zona 1). Como a base na Avinguda de Gaudí fica a 200m do metrô, 1 ou 2 cartões por pessoa cobrem 100% da estadia com conforto."
  },
  {
    title: "Reserva Antecipada Mandatória",
    icon: "Ticket",
    content: "Sagrada Família, Casa Batlló e Parque Güell esgotam com semanas de antecedência. Adquira os bilhetes pelos links oficiais deste roteiro com 3 a 4 semanas antes da viagem."
  },
  {
    title: "Catedral de Barcelona Gratuita",
    icon: "Landmark",
    content: "A Catedral abre gratuitamente de segunda a sexta para oração e culto das 08h30 às 12h30. Chegando logo às 08h30 na terça-feira, o acesso ao interior e claustro histórico é 100% livre e sem filas."
  },
  {
    title: "Feira do Rolo (Mercat dels Encants)",
    icon: "Sparkles",
    content: "O mercado de pulgas com teto espelhado só funciona às segundas, quartas, sextas e sábados das 09h às 20h. Por isso, a visitação foi alocada estrategicamente na segunda-feira pela manhã."
  },
  {
    title: "Gastronomia & Alimentação Consciente",
    icon: "Utensils",
    content: "O roteiro prioriza opções vegetarianas, frutos do mar frescos, frutas, sucos naturais e pratos tradicionais catalães/espanhóis totalmente isentos de carne suína."
  },
  {
    title: "Madrid Express (Dia 4)",
    icon: "Sun",
    content: "Ao pousar em Madrid às 13:45, deixe as malas na consigna do aeroporto (~€10) e vá de comboio Cercanías C1/C10 direto ao centro. O percurso a pé das 15h às 21h15 conecta todos os cartões-postais sem perder tempo no trânsito."
  }
];

export const MADRID_PRICING_BREAKDOWN = [
  {
    name: "Consigna no Aeroporto Barajas (Left Luggage)",
    price: 10.00,
    day: "Dia 4 (Qua 16/09)",
    status: "Logística",
    category: "Serviço",
    notes: "Por volume/mala para o período de escala no aeroporto."
  },
  {
    name: "Comboio Cercanías C1/C10 (Aeroporto T4 ↔ Sol/Atocha)",
    price: 2.60,
    day: "Dia 4 (Qua 16/09)",
    status: "Transporte",
    category: "Mobilidade",
    notes: "Ligação direta rápida e barata entre o aeroporto e o centro histórico."
  },
  {
    name: "Mercado de São Miguel (Lanche de Tapas)",
    price: 15.00,
    day: "Dia 4 (Qua 16/09)",
    status: "Gastronomia",
    category: "Alimentação",
    notes: "Tapas vegetais, queijos manchego e empanadas no histórico mercado de ferro fundido."
  },
  {
    name: "Museu do Prado (Opcional)",
    price: 15.00,
    day: "Dia 4 (Qua 16/09)",
    status: "Opcional",
    category: "Arte",
    url: "https://www.museodelprado.es/en/visit-the-museum",
    notes: "Opção sugerida ao lado dos Jardins do Retiro para os amantes de arte."
  }
];

export const MADRID_FREE_ATTRACTIONS = [
  { name: "Porta do Sol & Marco Quilômetro Zero", day: "Madrid", cost: "€0,00" },
  { name: "Plaza Mayor & Arcos dos Habsburgos", day: "Madrid", cost: "€0,00" },
  { name: "Palácio Real de Madrid (Exteriores & Jardins Sabatini)", day: "Madrid", cost: "€0,00" },
  { name: "Catedral de Almudena (Fachada e Interior)", day: "Madrid", cost: "€0,00" },
  { name: "Gran Vía (Boulevard e Arquitetura)", day: "Madrid", cost: "€0,00" },
  { name: "Praça de Cibeles & Palácio de Cibeles", day: "Madrid", cost: "€0,00" },
  { name: "Puerta de Alcalá (Arco de Carlos III)", day: "Madrid", cost: "€0,00" },
  { name: "Jardins do Retiro & Palácio de Cristal (UNESCO)", day: "Madrid", cost: "€0,00" }
];

export const MADRID_PRACTICAL_TIPS = [
  {
    title: "1 Tarde Intensiva Bem Planejada",
    icon: "Sun",
    content: "Com a chegada às 13:45 e o voo às 23:55, o roteiro das 15h às 21h15 conecta Sol, Plaza Mayor, Palácio Real, Gran Vía e Retiro numa sequência geográfica contínua e sem cruzamentos."
  },
  {
    title: "Consigna no Aeroporto (T4)",
    icon: "ShieldCheck",
    content: "Deixar as malas na consigna (Left Luggage) do aeroporto permite explorar Madrid apenas com mochila leve, sem peso nem filas de guarda-volumes no centro."
  },
  {
    title: "Compras na Gran Vía",
    icon: "ShoppingBag",
    content: "O trecho entre o Palácio e Cibeles passa pelas maiores lojas da Gran Vía, perfeito para comprar lembranças e artigos espanhóis no final de tarde."
  },
  {
    title: "Atrações Opcionais Flexíveis",
    icon: "Sparkles",
    content: "Chocolateria San Ginés, Templo de Debod e Museu do Prado estão mapeados como opções ao longo do percurso para quem quiser personalizar a tarde."
  }
];

// Helper Function for City Data
export function getCityData(cityId = 'barcelona') {
  if (cityId === 'madrid') {
    return {
      id: 'madrid',
      name: 'Madrid',
      country: 'Espanha',
      heroImage: '/images/madrid_hero.jpg',
      tripMeta: MADRID_TRIP_META,
      lodgingInfo: MADRID_LODGING_INFO,
      daysData: MADRID_DAYS_DATA,
      pricingBreakdown: MADRID_PRICING_BREAKDOWN,
      freeAttractions: MADRID_FREE_ATTRACTIONS,
      practicalTips: MADRID_PRACTICAL_TIPS,
      optionalAttractions: MADRID_OPTIONAL_ATTRACTIONS
    };
  }

  return {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Catalunha, Espanha',
    heroImage: '/images/barcelona_hero.jpg',
    tripMeta: TRIP_META,
    lodgingInfo: LODGING_INFO,
    daysData: DAYS_DATA,
    pricingBreakdown: PRICING_BREAKDOWN,
    freeAttractions: FREE_ATTRACTIONS,
    practicalTips: PRACTICAL_TIPS
  };
}
