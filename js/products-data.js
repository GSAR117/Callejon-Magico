/**
 * CALLEJÓN MÁGICO — Catálogo Departamental Completo
 * Evento Especial: BUEN FIN MÁGICO (13 al 21 de Noviembre de 2026) · 50%, 60% y 75% OFF en artículos seleccionados.
 * Total de productos integrados desde las carpetas Productos/, Productos 2/, Productos 3/ y Productos 4/.
 */

const PRODUCTS_DATA = [
  {
    "id": "fashion-1",
    "department": "Moda · Ropa",
    "name": "Chamarra Biker en Piel Sintética Premium",
    "slug": "chamarra-biker-piel-sintetica",
    "category": "ropa",
    "gender": "hombre",
    "subcategory": "chamarras",
    "brand": "D'Avanti Signature",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2299,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 84,
    "image": "Productos/chamarra de piel sintetica hombre.jpg",
    "description": "Corte Slim Fit con cuello solapa, cierre cruzado metálico asimétrico, bolsillos laterales con cremallera y forro interior satinado térmico.",
    "sku": "MOD-HMB-CHK01",
    "inStock": true,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Negro Azabache"
    ],
    "colorHex": [
      "#111111"
    ],
    "features": [
      "Piel sintética de grano fino",
      "Cierres reforzados",
      "Bolsillo interior de seguridad",
      "Corte entallado moderno"
    ]
  },
  {
    "id": "fashion-2",
    "department": "Moda · Ropa",
    "name": "Vestido Midi Plisado Satín de Fiesta",
    "slug": "vestido-midi-plisado-fiesta",
    "category": "ropa",
    "gender": "mujer",
    "subcategory": "vestidos",
    "brand": "D'Avanti Studio",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1699,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 46,
    "image": "Productos/Vestido Midi Plisado de Satín azul.jpg",
    "description": "Vestido midi con escote cruzado en V, falda plisada con caída fluida y cinturón a juego con hebilla dorada. Satén sedoso con brillo sutil.",
    "sku": "MOD-MJR-VST02",
    "inStock": true,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Azul Medianoche",
      "Negro Noche",
      "Rojo Rubí",
      "Celeste Seda"
    ],
    "colorHex": [
      "#1e3a8a",
      "#111827",
      "#dc2626",
      "#38bdf8"
    ],
    "features": [
      "Satén de alta densidad",
      "Falda plisada permanente",
      "Cinturón extraíble",
      "Cierre invisible en espalda"
    ],
    "colorImages": {
      "Azul Medianoche": "Productos/Vestido Midi Plisado de Satín azul.jpg",
      "Negro Noche": "Productos/Vestido Midi Plisado de Satín negro.jpg",
      "Rojo Rubí": "Productos/Vestido Midi Plisado de Satín rojo.jpg",
      "Celeste Seda": "Productos/vestido midi plisado celeste.jpg"
    },
    "gallery": [
      "Productos/vestido midi pisado de satin negro.jpg"
    ]
  },
  {
    "id": "fashion-3",
    "department": "Moda · Ropa",
    "name": "Traje Formal Slim Fit Lana Italiana",
    "slug": "traje-formal-slim-fit-lana",
    "category": "ropa",
    "gender": "hombre",
    "subcategory": "trajes",
    "brand": "Hugo Boss Selection",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 6299,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 32,
    "image": "Productos/Traje Formal Slim Fit de Lana Italiana.jpg",
    "description": "Conjunto de saco de dos botones y pantalón a juego confeccionado en mezcla de lana virgen de textura mil rayas sutil. Elegancia ejecutiva intachable.",
    "sku": "MOD-HMB-TRJ03",
    "inStock": true,
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "colors": [
      "Gris Marengo",
      "Azul Marino Oxford"
    ],
    "colorHex": [
      "#3d3d3d",
      "#152238"
    ],
    "features": [
      "Lana virgen transpirable",
      "Solapas en muesca",
      "Medio forro interior",
      "Ajuste de sastrería"
    ],
    "gallery": [
      "Productos/Traje Formal Slim Fit de Lana Italiana 2.jpg"
    ]
  },
  {
    "id": "fashion-4",
    "department": "Moda · Ropa",
    "name": "Bolso Tote de Piel Genuina Grabada",
    "slug": "bolso-tote-piel-genuina",
    "category": "ropa",
    "gender": "mujer",
    "subcategory": "bolsas",
    "brand": "Michael Kors",
    "badge": "Nuevo",
    "badgeType": "new",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "price": 3899,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 71,
    "image": "Productos/Bolso Tote de Piel Genuina.jpg",
    "description": "Bolso tote espacioso estructurado en piel vacuno genuina con herrajes dorados grabados, doble asa superior y compartimento acolchado para laptop de hasta 14\".",
    "sku": "MOD-MJR-BLS04",
    "inStock": true,
    "sizes": [
      "Unitalla (35 x 28 x 14 cm)"
    ],
    "colors": [
      "Habano Cuero",
      "Café Tostado",
      "Blanco Marfil"
    ],
    "colorHex": [
      "#78350f",
      "#451a03",
      "#fefce8"
    ],
    "features": [
      "100% Piel vacuno",
      "Herrajes oro ionizado",
      "Organizador interior",
      "Funda guardapolvo incluida"
    ],
    "colorImages": {
      "Habano Cuero": "Productos/Bolso Tote de Piel Genuina.jpg",
      "Café Tostado": "Productos/Bolso Tote de Piel Cafe.jpg",
      "Blanco Marfil": "Productos/Bolso Tote de Piel blanco.jpg"
    }
  },
  {
    "id": "fashion-5",
    "department": "Moda · Ropa",
    "name": "Zapatillas de Tacón Stiletto Elegance",
    "slug": "zapatillas-tacon-stiletto-elegance",
    "category": "ropa",
    "gender": "mujer",
    "subcategory": "calzado",
    "brand": "D'Avanti Studio",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1999,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 58,
    "image": "Productos/zapatillas de tacon negro.jpg",
    "description": "Stilettos con punta fina clásica, tacón aguja de 9 cm forrado y plantilla acolchada con tecnología de confort Memory Foam para uso prolongado.",
    "sku": "MOD-MJR-ZAP05",
    "inStock": true,
    "sizes": [
      "23.0 MX",
      "24.0 MX",
      "24.5 MX",
      "25.0 MX",
      "26.0 MX"
    ],
    "colors": [
      "Negro Charol",
      "Rojo Pasión",
      "Café Oscuro"
    ],
    "colorHex": [
      "#111111",
      "#dc2626",
      "#451a03"
    ],
    "features": [
      "Tacón 9 cm equilibrado",
      "Plantilla ultra confort",
      "Suela antideslizante",
      "Punta afilada europea"
    ],
    "colorImages": {
      "Negro Charol": "Productos/zapatillas de tacon negro.jpg",
      "Rojo Pasión": "Productos/zapatillas rojas.jpg",
      "Café Oscuro": "Productos/zapatillas cafe oscuro.jpg"
    },
    "gallery": [
      "Productos/zapatillas rojas.jpg",
      "Productos/zapatillas cafe oscuro.jpg"
    ]
  },
  {
    "id": "fashion-6",
    "department": "Moda · Ropa",
    "name": "Camisa Casual de Lino Francés Manga Larga",
    "slug": "camisa-casual-lino-frances",
    "category": "ropa",
    "gender": "hombre",
    "subcategory": "camisas",
    "brand": "Ralph Lauren",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1199,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 63,
    "image": "Productos/camisa casual de manga larga.jpg",
    "description": "Confeccionada 100% en lino europeo prelavado, cuello americano con botones y corte Custom Fit relajado que brinda frescura inigualable y caída impecable.",
    "sku": "MOD-HMB-CAM06",
    "inStock": true,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Blanco Puro",
      "Azul Celeste",
      "Verde Olivo"
    ],
    "colorHex": [
      "#ffffff",
      "#b0c4de",
      "#556b2f"
    ],
    "features": [
      "100% lino transpirable",
      "Botones de concha natural",
      "Puño ajustable",
      "Corte relajado sofisticado"
    ]
  },
  {
    "id": "fashion-7",
    "department": "Moda · Ropa",
    "name": "Jeans Slim Tapered Clásicos 512",
    "slug": "jeans-slim-tapered-clasicos-512",
    "category": "ropa",
    "gender": "hombre",
    "subcategory": "pantalones",
    "brand": "Levi's",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1599,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 115,
    "image": "Productos/Jeans skinny.jpg",
    "description": "Corte ajustado desde el muslo que se estrecha hacia el tobillo, confeccionado con denim elástico de alta retención de forma y lavado índigo medio clásico.",
    "sku": "MOD-HMB-JNS07",
    "inStock": true,
    "sizes": [
      "30x32",
      "32x32",
      "34x32",
      "36x32"
    ],
    "colors": [
      "Azul Índigo Medio",
      "Negro Lavado"
    ],
    "colorHex": [
      "#2b4a78",
      "#222222"
    ],
    "features": [
      "Denim stretch flexible",
      "Remaches de cobre reforzados",
      "Parche de cuero icónico",
      "Lavado ecológico Water<Less"
    ],
    "gallery": [
      "Productos/jean 1.jpg",
      "Productos/jean 2.jpg",
      "Productos/jean 3.jpg"
    ]
  },
  {
    "id": "fashion-8",
    "department": "Moda · Ropa",
    "name": "Tenis Deportivos Nike Air Max Casual",
    "slug": "tenis-deportivos-nike-air-max",
    "category": "ropa",
    "gender": "unisex",
    "subcategory": "calzado",
    "brand": "Nike",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1499,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 128,
    "image": "assets/images/prod_sneakers.jpg",
    "description": "Tenis urbanos de diseño icónico con cápsula de aire visible en el talón, exterior de piel y malla sintética para máxima amortiguación y soporte.",
    "sku": "NK-AIR-9921",
    "inStock": true,
    "sizes": [
      "25.5 MX",
      "26.0 MX",
      "27.0 MX",
      "27.5 MX",
      "28.0 MX",
      "29.0 MX"
    ],
    "colors": [
      "Blanco Puro"
    ],
    "colorHex": [
      "#ffffff"
    ],
    "features": [
      "Cápsula de aire Max Air",
      "Suela tipo waffle antideslizante",
      "Malla ultra transpirable",
      "Envío express disponible"
    ]
  },
  {
    "id": "fashion-9",
    "department": "Moda · Ropa",
    "name": "Conjunto Infantil Sudadera & Jogger Denim",
    "slug": "conjunto-infantil-sudadera-jogger",
    "category": "ropa",
    "gender": "infantil",
    "subcategory": "ninos",
    "brand": "Tommy Hilfiger Kids",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1199,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 39,
    "image": "assets/images/fashion/ropa_infantil.jpg",
    "description": "Set de dos piezas para niños y niñas de 4 a 12 años con interior afelpado hipoalergénico suave, cinturón elástico ajustable y bordado distintivo.",
    "sku": "MOD-KID-SET09",
    "inStock": true,
    "sizes": [
      "Talla 4",
      "Talla 6",
      "Talla 8",
      "Talla 10",
      "Talla 12"
    ],
    "colors": [
      "Gris Jaspe & Marino",
      "Rosa Pastel"
    ],
    "colorHex": [
      "#5a6b7c",
      "#f4c2c2"
    ],
    "features": [
      "Algodón peinado hipoalergénico",
      "Cintura con jareta ajustable",
      "Costuras planas ultrasuaves"
    ]
  },
  {
    "id": "fashion-10",
    "department": "Moda · Ropa",
    "name": "Reloj Cronógrafo D'Avanti Gold 18K Edition",
    "slug": "reloj-cronografo-grande-gold-18k",
    "category": "ropa",
    "gender": "hombre",
    "subcategory": "accesorios",
    "brand": "D'Avanti Horlogerie",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 4399,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 204,
    "image": "Productos 2/Reloj Festina Timeless Chronograph hombre.jpg",
    "description": "Caja de acero quirúrgico 316L con baño de oro ionizado de 18K, esfera con índices facetados a mano, cristal de zafiro irrayable y movimiento de cuarzo japonés.",
    "sku": "JOY-RLJ-GLD",
    "inStock": true,
    "sizes": [
      "Caja 42 mm"
    ],
    "colors": [
      "Dorado & Negro Chronograph",
      "Negro Minimalista",
      "Acero Inoxidable"
    ],
    "colorHex": [
      "#eab308",
      "#09090b",
      "#cbd5e1"
    ],
    "features": [
      "Cristal de zafiro irrayable",
      "Resistencia al agua 5 ATM",
      "Garantía oficial de 3 años",
      "Estuche conmemorativo"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "colorImages": {
      "Dorado & Negro Chronograph": "Productos 2/Reloj Festina Timeless Chronograph hombre.jpg",
      "Negro Minimalista": "Productos 2/Reloj - FIZILI - Para Hombre - 08.jpg",
      "Acero Inoxidable": "Productos 2/reloj de hombre.jpg"
    }
  },
  {
    "id": "fashion-11",
    "department": "Moda · Ropa",
    "name": "Lentes de Sol Aviador Polarizados Titanio",
    "slug": "lentes-sol-aviador-polarizados",
    "category": "ropa",
    "gender": "unisex",
    "subcategory": "accesorios",
    "brand": "Ray-Ban",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1799,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 52,
    "image": "Productos 2/Gafas de Sol Rb4418d en Gris transparente sobre bronce de cañón y Polar.jpg",
    "description": "Armazón ultraligero de aleación de titanio con micas de cristal mineral polarizado que bloquean el 100% de los rayos UVA/UVB eliminando reflejos molestos.",
    "sku": "MOD-ACC-LNT11",
    "inStock": true,
    "sizes": [
      "Mediano 58mm",
      "Grande 62mm"
    ],
    "colors": [
      "Gris Cañón Polarizado",
      "Carey Dorado Mujer",
      "Negro Urbano Hombre"
    ],
    "colorHex": [
      "#475569",
      "#b45309",
      "#09090b"
    ],
    "features": [
      "Micas polarizadas de cristal",
      "Protección UV400 total",
      "Almohadillas nasales de silicona",
      "Estuche de piel incluido"
    ],
    "colorImages": {
      "Gris Cañón Polarizado": "Productos 2/Gafas de Sol Rb4418d en Gris transparente sobre bronce de cañón y Polar.jpg",
      "Carey Dorado Mujer": "Productos 2/Gafas de Sol Rb4418d en Gris transparente sobre bronce de cañón y Polar mujer.jpg",
      "Negro Urbano Hombre": "Productos 2/Lentes de sol para hombres modernos.jpg"
    }
  },
  {
    "id": "tech-1",
    "name": "Apple iPhone 15 Pro Max 256GB Titanio Natural",
    "slug": "apple-iphone-15-pro-max-256gb",
    "category": "electronica",
    "subcategory": "telefonia",
    "brand": "Apple",
    "department": "Tecnología · Telefonía Móvil",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 30499,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 168,
    "image": "Productos/Apple iPhone 15 Pro Max 256GB.jpg",
    "description": "Diseño forjado en titanio de grado aeroespacial, chip A17 Pro revolucionario, botón de Acción personalizable y el sistema de cámaras más potente en un iPhone.",
    "sku": "APL-IP15PM-256",
    "inStock": true,
    "sizes": [
      "256 GB",
      "512 GB",
      "1 TB"
    ],
    "colors": [
      "Titanio Natural",
      "Titanio Negro",
      "Titanio Blanco",
      "Titanio Azul"
    ],
    "colorHex": [
      "#9a9895",
      "#212121",
      "#e3e4e5",
      "#2e3a47"
    ],
    "specs": {
      "pantalla": "6.7\" Super Retina XDR ProMotion 120Hz",
      "procesador": "Chip A17 Pro con GPU de 6 núcleos",
      "camara": "Triple 48 MP + Teleobjetivo 5x (120 mm)",
      "bateria": "Hasta 29 horas de reproducción de video",
      "conectividad": "5G · Wi-Fi 6E · USB-C 3.0 (hasta 10 Gb/s)"
    },
    "features": [
      "Estructura aeroespacial en Titanio Grado 5",
      "Dynamic Island interactiva con alertas en vivo",
      "Grabación de video espacial y formato ProRes 4K a 60 fps",
      "Conector USB-C universal de alta velocidad"
    ]
  },
  {
    "id": "tech-2",
    "name": "Samsung Galaxy S24 Ultra 512GB con Galaxy AI Titanium Gray",
    "slug": "samsung-galaxy-s24-ultra-512gb",
    "category": "electronica",
    "subcategory": "telefonia",
    "brand": "Samsung",
    "department": "Tecnología · Telefonía Móvil",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 30999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 124,
    "image": "Productos/Samsung Galaxy S24 Ultra 512GB.jpg",
    "description": "La era de la Inteligencia Artificial móvil ha llegado. Galaxy AI te permite traducir llamadas en vivo, editar fotos con IA generativa y buscar cualquier objeto en pantalla con Circle to Search.",
    "sku": "SAM-S24U-512",
    "inStock": true,
    "sizes": [
      "256 GB",
      "512 GB",
      "1 TB"
    ],
    "colors": [
      "Titanium Gray",
      "Titanium Black",
      "Titanium Violet",
      "Titanium Yellow"
    ],
    "colorHex": [
      "#767678",
      "#2c2c2e",
      "#494254",
      "#d4c8a5"
    ],
    "specs": {
      "pantalla": "6.8\" Dynamic AMOLED 2X QHD+ 120Hz antirreflejo",
      "procesador": "Snapdragon 8 Gen 3 for Galaxy (4nm)",
      "camara": "200 MP Principal + Zoom Óptico 50 MP 5x / 100x Space Zoom",
      "bateria": "5,000 mAh con carga súper rápida 2.0 de 45W",
      "conectividad": "5G · Wi-Fi 7 · Bluetooth 5.3 · S Pen integrado"
    },
    "features": [
      "Galaxy AI integrado sin suscripción adicional",
      "S Pen de latencia ultrabaja para dibujo y notas",
      "Armazón de titanio de máxima durabilidad y cristal Gorilla Armor",
      "7 años garantizados de actualizaciones de software y seguridad"
    ],
    "gallery": [
      "Productos/Samsung Galaxy S24 Ultra 512GB 1.jpg"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "tech-3",
    "name": "Apple MacBook Pro 14\" Chip M3 Pro 18GB RAM 512GB SSD Negro Espacial",
    "slug": "apple-macbook-pro-14-m3-pro",
    "category": "electronica",
    "subcategory": "computo",
    "brand": "Apple",
    "department": "Tecnología · Cómputo",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 47999,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 92,
    "image": "Productos/Apple MacBook Pro 14 pulgadas.jpg",
    "description": "Rendimiento monstruoso impulsado por el chip M3 Pro. Pantalla Liquid Retina XDR con 1,600 nits de brillo pico, hasta 18 horas de batería y acabado en elegante Negro Espacial resistente a huellas.",
    "sku": "APL-MBP14-M3P",
    "inStock": true,
    "sizes": [
      "512 GB SSD",
      "1 TB SSD",
      "2 TB SSD"
    ],
    "colors": [
      "Negro Espacial",
      "Plata"
    ],
    "colorHex": [
      "#2d2f33",
      "#e0e2e5"
    ],
    "specs": {
      "pantalla": "14.2\" Liquid Retina XDR (3024 x 1964) ProMotion 120Hz",
      "procesador": "Apple M3 Pro (CPU de 11 núcleos, GPU de 14 núcleos)",
      "memoria": "18 GB de memoria unificada de alta velocidad",
      "bateria": "Hasta 18 horas de reproducción de películas",
      "puertos": "3x Thunderbolt 4 · HDMI · SDXC · MagSafe 3 · Jack 3.5mm"
    },
    "features": [
      "Arquitectura de 3 nm pionera con trazado de rayos por aceleración de hardware",
      "Cámara FaceTime HD de 1080p y sistema de 6 bocinas con Audio Espacial",
      "Magic Keyboard retroiluminado con Touch ID integrado",
      "Chasis unibody 100% de aluminio reciclado"
    ],
    "gallery": [
      "Productos/Apple MacBook Pro 14 pulgadas 1.jpg"
    ]
  },
  {
    "id": "tech-4",
    "name": "Smart TV Samsung 55\" Crystal UHD 4K DU8000 con Gaming Hub",
    "slug": "smart-tv-samsung-55-crystal-4k",
    "category": "electronica",
    "subcategory": "pantallas",
    "brand": "Samsung",
    "department": "Tecnología · Pantallas",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 10499,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 142,
    "image": "Productos/Smart TV Samsung 55 pulgadas.jpg",
    "description": "Disfruta de colores más vivos y realistas con Dynamic Crystal Color. El procesador Crystal 4K escala todo tu contenido a ultra alta definición con fluidez y negros precisos.",
    "sku": "SAM-TV55-DU8K",
    "inStock": true,
    "sizes": [
      "55 Pulgadas",
      "65 Pulgadas",
      "75 Pulgadas"
    ],
    "colors": [
      "Bisel Negro Slim"
    ],
    "colorHex": [
      "#1c1c1e"
    ],
    "specs": {
      "resolucion": "4K UHD (3,840 x 2,160) HDR10+",
      "procesador": "Crystal Processor 4K",
      "sistema": "Tizen Smart TV OS con Bixby y Alexa",
      "audio": "20W con Object Tracking Sound Lite y Q-Symphony",
      "conectividad": "3x HDMI · 2x USB · Wi-Fi 5 · Bluetooth 5.2 · Ethernet"
    },
    "features": [
      "Diseño AirSlim ultradelgado de perfil minimalista",
      "Samsung Gaming Hub: juega títulos de Xbox en la nube sin consola",
      "Control remoto ecológico SolarCell recargable con luz ambiental",
      "Modo Filmmaker para ver películas exactamente como el director las concibió"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "tech-5",
    "name": "Pantalla LG OLED evo 65\" Serie C4 4K Cinema HDR 144Hz Dolby Atmos",
    "slug": "pantalla-lg-oled-evo-65-c4",
    "category": "electronica",
    "subcategory": "pantallas",
    "brand": "LG",
    "department": "Tecnología · Pantallas",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 38999,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 110,
    "image": "Productos/Pantalla LG OLED evo 65 pulgadas.jpg",
    "description": "La cumbre de la calidad de imagen. Millones de píxeles autoiluminados ofrecen contraste infinito y negros perfectos sin fugas de luz. Procesador con IA Alpha 9 Gen 7 y soporte gamer a 144Hz.",
    "sku": "LG-OLED65-C4",
    "inStock": true,
    "sizes": [
      "55 Pulgadas",
      "65 Pulgadas",
      "77 Pulgadas"
    ],
    "colors": [
      "Titanio Oscuro Metálico"
    ],
    "colorHex": [
      "#2d3136"
    ],
    "specs": {
      "panel": "OLED evo con Brightness Booster y negro absoluto",
      "procesador": "Alpha 9 Gen 7 4K con Inteligencia Artificial profunda",
      "tasaRefresco": "144 Hz con NVIDIA G-Sync, AMD FreeSync y VRR",
      "sonido": "Dolby Atmos 9.1.2 Virtual Surround Sound 40W",
      "gaming": "4 entradas HDMI 2.1 completas a 48 Gbps (0.1ms de respuesta)"
    },
    "features": [
      "Negro absoluto y 100% de fidelidad de color certificada",
      "Dolby Vision y Dolby Atmos integrados para experiencia de cine IMAX",
      "webOS Re:New Program con 5 años garantizados de actualizaciones",
      "Magic Remote con puntero de navegación por movimiento"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "tech-6",
    "name": "Audífonos Inalámbricos Sony WH-1000XM5 Cancelación Activa de Ruido",
    "slug": "audifonos-sony-wh1000xm5-anc",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Sony",
    "department": "Tecnología · Audio",
    "badge": "Buen Fin -50%",
    "badgeType": "offer",
    "price": 4250,
    "originalPrice": 8499,
    "rating": 4.9,
    "reviewsCount": 215,
    "image": "Productos/Audífonos Sony WH-1000XM5 negro.jpg",
    "description": "Los audífonos con cancelación de ruido más aclamados del mundo. Dos procesadores y ocho micrófonos aíslan por completo el ruido del exterior para una inmersión acústica total.",
    "sku": "SNY-WH1000XM5-BLK",
    "inStock": true,
    "sizes": [
      "Estándar Ajustable"
    ],
    "colors": [
      "Negro",
      "Azul",
      "Blanco",
      "Morado"
    ],
    "colorHex": [
      "#111111",
      "#1e3a8a",
      "#f3f4f6",
      "#581c87"
    ],
    "specs": {
      "cancelacion": "Procesador integrado V1 + Procesador HD QN1 con 8 micrófonos",
      "autonomia": "Hasta 30 horas con cancelación activa (carga de 3 min = 3 hrs)",
      "audio": "Hi-Res Audio inalámbrico LDAC y tecnología DSEE Extreme",
      "llamadas": "4 micrófonos de formación de haces con IA de reducción de ruido",
      "peso": "250 gramos de peso pluma y diseño ergonómico envolvente"
    },
    "features": [
      "Optimización automática de cancelación de ruido según la presión barométrica",
      "Speak-to-Chat: se pausa la reproducción al comenzar a hablar",
      "Conexión multipunto que se empareja a dos dispositivos a la vez",
      "Estuche plegable rígido de viaje incluido"
    ],
    "colorImages": {
      "Negro": "Productos/Audífonos Sony WH-1000XM5 negro.jpg",
      "Azul": "Productos/Audífonos Sony WH-1000XM5 azul.jpg",
      "Blanco": "Productos/Audífonos Sony WH-1000XM5 blanco.jpg",
      "Morado": "Productos/Audífonos Sony WH-1000XM5 morado.jpg"
    },
    "buenFinDiscount": 50,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 50% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "tech-7",
    "name": "Audífonos Apple AirPods Pro (2.ª Generación) MagSafe USB-C",
    "slug": "apple-airpods-pro-2-usbc",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Apple",
    "department": "Tecnología · Audio",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 5299,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 340,
    "image": "Productos/Apple AirPods Pro de 2.ª Generación.jpg",
    "description": "Chip H2 de Apple para una cancelación activa de ruido hasta 2 veces más potente, Audio Espacial personalizado y estuche de carga MagSafe con USB-C y bocina para rastreo.",
    "sku": "APL-APP2-USBC",
    "inStock": true,
    "sizes": [
      "Estuche MagSafe USB-C"
    ],
    "colors": [
      "Blanco Brillante"
    ],
    "colorHex": [
      "#ffffff"
    ],
    "specs": {
      "chip": "Chip de audio H2 + Chip U1 en estuche de carga",
      "cancelacion": "Cancelación Activa de Ruido de grado pro + Audio Adaptativo",
      "audio": "Audio Espacial personalizado con seguimiento dinámico de la cabeza",
      "bateria": "Hasta 6 horas por carga (30 horas con estuche)",
      "resistencia": "Resistencia IP54 al polvo, sudor y agua"
    },
    "features": [
      "Modo Ambiente adaptable que reduce ruidos fuertes en la calle",
      "Control táctil deslizante para ajustar el volumen directamente en el auricular",
      "Rastreo de precisión mediante la app Encontrar con bocina en el estuche",
      "Almohadillas de silicón suave en 4 tamaños (XS, S, M, L)"
    ],
    "gallery": [
      "Productos/Apple AirPods Pro de 2.ª Generación 1.jpg"
    ]
  },
  {
    "id": "tech-8",
    "name": "Consola Sony PlayStation 5 Slim 1TB Edición Estándar con DualSense",
    "slug": "consola-sony-playstation-5-slim-1tb",
    "category": "electronica",
    "subcategory": "videojuegos",
    "brand": "Sony",
    "department": "Tecnología · Videojuegos",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 11999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 295,
    "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    "description": "Descubre nuevas posibilidades de juego que nunca imaginaste con la PS5 Slim. Tiempos de carga casi instantáneos gracias al SSD de 1TB ultrarrápido, audio 3D y gatillos adaptativos inmersivos.",
    "sku": "SNY-PS5-SLIM1T",
    "inStock": true,
    "sizes": [
      "1 TB SSD (Con lector de discos)"
    ],
    "colors": [
      "Blanco / Negro"
    ],
    "colorHex": [
      "#f2f2f2"
    ],
    "specs": {
      "almacenamiento": "1 TB SSD ultra veloz personalizado (5.5 GB/s sin compresión)",
      "resolucion": "Hasta 4K a 120 fps con soporte HDR y salida 8K",
      "procesador": "AMD Ryzen Zen 2 de 8 núcleos a 3.5 GHz con GPU RDNA 2",
      "audio": "Tempest 3D AudioTech para acústica espacial envolvente",
      "control": "DualSense con respuesta háptica y gatillos de resistencia variable"
    },
    "features": [
      "Volumen 30% más reducido y peso 18% menor que la versión anterior",
      "Ray Tracing por hardware para reflejos y sombras fotorrealistas",
      "Lector de discos Blu-ray Ultra HD 4K integrado",
      "Juego preinstalado ASTRO's PLAYROOM para estrenar el control"
    ]
  },
  {
    "id": "tech-9",
    "name": "Consola Nintendo Switch Modelo OLED 64GB Edición Blanca",
    "slug": "nintendo-switch-oled-blanca",
    "category": "electronica",
    "subcategory": "videojuegos",
    "brand": "Nintendo",
    "department": "Tecnología · Videojuegos",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 6999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 180,
    "image": "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80",
    "description": "Sumérgete en colores brillantes y contrastes nítidos con la pantalla OLED de 7 pulgadas. Juega en cualquier momento, en cualquier lugar y con quien quieras en sus 3 modos de juego.",
    "sku": "NTD-SWOLED-WHT",
    "inStock": true,
    "sizes": [
      "64 GB (Expandible MicroSD)"
    ],
    "colors": [
      "Blanco Neón",
      "Azul / Rojo Neón"
    ],
    "colorHex": [
      "#ffffff",
      "#e60012"
    ],
    "specs": {
      "pantalla": "7.0\" OLED táctil capacitiva multi-touch (1280 x 720)",
      "almacenamiento": "64 GB interno expandible hasta 2 TB mediante MicroSD",
      "modos": "Modo TV (1080p vía HDMI) · Modo Semiportátil · Modo Portátil",
      "bateria": "Ion de litio con autonomía estimada de 4.5 a 9 horas",
      "conectividad": "Wi-Fi · Bluetooth 4.1 · Puerto LAN Ethernet en la base"
    },
    "features": [
      "Soporte trasero ancho y ajustable para jugar con estabilidad en mesas",
      "Audio estéreo optimizado en los altavoces integrados",
      "Incluye dos controles Joy-Con y correas de seguridad",
      "Acceso a la enorme librería exclusiva de Mario, Zelda, Pokémon y más"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "tech-10",
    "name": "Apple Watch Ultra 2 GPS + Cellular Caja de Titanio 49mm",
    "slug": "apple-watch-ultra-2-titanio-49mm",
    "category": "electronica",
    "subcategory": "wearables",
    "brand": "Apple",
    "department": "Tecnología · Smartwatches",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 19999,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 63,
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
    "description": "El reloj deportivo y de aventuras definitivo. Caja de titanio de 49 mm resistente a la corrosión, pantalla brillante de 3,000 nits, chip S9 SiP con doble toque y GPS de doble frecuencia.",
    "sku": "APL-WULTRA2-49",
    "inStock": true,
    "sizes": [
      "49 mm (Correa S/M)",
      "49 mm (Correa M/L)"
    ],
    "colors": [
      "Titanio / Correa Alpine Naranja",
      "Titanio / Correa Trail Azul"
    ],
    "colorHex": [
      "#e57339",
      "#203a43"
    ],
    "specs": {
      "pantalla": "OLED Retina siempre activa de hasta 3,000 nits (la más brillante)",
      "caja": "Titanio de grado aeroespacial con borde elevado protector",
      "bateria": "Hasta 36 horas en uso normal (hasta 72 horas en ahorro)",
      "resistencia": "100 m sumergible · Certificación EN13319 para buceo hasta 40 m",
      "sensores": "ECG, SpO2, temperatura, profundímetro, sensor de temperatura del agua"
    },
    "features": [
      "Gesto de Doble Toque para responder llamadas o pausar música sin tocar la pantalla",
      "GPS de precisión de doble frecuencia (L1 y L5) para rutas exactas",
      "Sirena de emergencia integrada de 86 decibeles audible a 180 metros",
      "Botón de Acción naranja de acceso directo configurable"
    ]
  },
  {
    "id": "tech-11",
    "name": "Samsung Galaxy Watch6 Classic 47mm Bluetooth Bisel Giratorio",
    "slug": "samsung-galaxy-watch6-classic-47mm",
    "category": "electronica",
    "subcategory": "wearables",
    "brand": "Samsung",
    "department": "Tecnología · Smartwatches",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 6999,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 82,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    "description": "Estilo atemporal con la tecnología de salud más avanzada. Cuenta con el característico bisel giratorio físico en acero inoxidable, análisis de composición corporal y monitor de sueño avanzado.",
    "sku": "SAM-GW6C-47MM",
    "inStock": true,
    "sizes": [
      "43 mm",
      "47 mm"
    ],
    "colors": [
      "Negro Black",
      "Plata Silver"
    ],
    "colorHex": [
      "#1c1c1e",
      "#d8d8d8"
    ],
    "specs": {
      "pantalla": "1.5\" Super AMOLED (480 x 480) con Cristal de Zafiro",
      "procesador": "Exynos W930 Dual-Core 1.4 GHz",
      "bateria": "425 mAh con carga rápida inalámbrica WPC",
      "salud": "Sensor BioActive 3 en 1 (ECG, Presión Arterial, BIA)",
      "resistencia": "5ATM + IP68 y estándar militar MIL-STD-810H"
    },
    "features": [
      "Bisel giratorio físico suave y preciso para navegar menús",
      "Sensor BIA: mide porcentaje de grasa corporal, masa muscular y agua",
      "Entrenador de sueño con medición de oxígeno continuo y ronquidos",
      "Compatible con correas estándar One-Click de fácil cambio"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "tech-12",
    "name": "Laptop Gamer ASUS ROG Zephyrus G16 OLED Core Ultra 9 RTX 4070",
    "slug": "asus-rog-zephyrus-g16-oled-rtx4070",
    "category": "electronica",
    "subcategory": "computo",
    "brand": "ASUS",
    "department": "Tecnología · Cómputo",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 43999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 57,
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    "description": "Precisión, potencia y elegancia ultradelgada en un chasis CNC de aluminio. Pantalla OLED ROG Nebula de 240Hz, procesador Intel Core Ultra 9 con IA y gráficos NVIDIA RTX 4070.",
    "sku": "ASU-ROG-G16-407",
    "inStock": true,
    "sizes": [
      "1 TB SSD NVMe",
      "2 TB SSD NVMe"
    ],
    "colors": [
      "Eclipse Gray",
      "Platinum White"
    ],
    "colorHex": [
      "#3a3d40",
      "#f0f2f5"
    ],
    "specs": {
      "pantalla": "16\" OLED 2.5K (2560 x 1600) 240Hz 0.2ms 100% DCI-P3",
      "procesador": "Intel Core Ultra 9 185H (16 núcleos con NPU de IA dedicada)",
      "grafica": "NVIDIA GeForce RTX 4070 8GB GDDR6 (105W con Dynamic Boost)",
      "memoria": "32 GB LPDDR5X a 7467 MHz ultrarrápida",
      "refrigeracion": "ROG Intelligent Cooling con metal líquido y 3 ventiladores"
    },
    "features": [
      "Grosor de tan solo 1.49 cm y peso de 1.85 kg para máxima portabilidad",
      "Barra de iluminación diagonal Slash Lighting en la tapa con efectos dinámicos",
      "Sistema de 6 bocinas con woofers duales con cancelación de fuerza",
      "Carga rápida por USB-C de 100W además del cargador de alto voltaje"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "tech-13",
    "name": "Barra de Sonido Sonos Arc Premium Dolby Atmos para Cine en Casa",
    "slug": "sonos-arc-soundbar-dolby-atmos",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Sonos",
    "department": "Tecnología · Audio",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 19999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 88,
    "image": "Productos/Barra de Sonido Sonos Arc Dolby Atmos.jpg",
    "description": "Llena tu sala de sonido envolvente de calidad cinematográfica. Cuenta con once bocinas internas de alto rendimiento, incluyendo canales dedicados hacia el techo para efectos 3D de Dolby Atmos.",
    "sku": "SNS-ARC-BLK",
    "inStock": true,
    "sizes": [
      "Barra 114 cm"
    ],
    "colors": [
      "Negro Mate",
      "Blanco Mate"
    ],
    "colorHex": [
      "#1a1a1a",
      "#f5f5f5"
    ],
    "specs": {
      "altavoces": "11 amplificadores digitales clase D con 8 woofers y 3 tweeters de seda",
      "audio": "Decodificación Dolby Atmos, Dolby TrueHD y estéreo multicanal",
      "calibracion": "Trueplay acústico que ajusta el sonido a las paredes de tu habitación",
      "conectividad": "HDMI eARC · Wi-Fi (802.11 b/g/n) · Apple AirPlay 2 · Entrada óptica",
      "control": "App Sonos, control remoto de tu TV y comandos por voz con Alexa"
    },
    "features": [
      "Audio 3D inmersivo que sitúa los sonidos por encima y a los lados de ti",
      "Mejora de la voz humana para no perderse ningún diálogo de películas",
      "Modo nocturno para comprimir sonidos estridentes sin molestar a otros",
      "Se conecta inalámbricamente a subwoofers Sonos Sub y satélites Era"
    ],
    "gallery": [
      "Productos/1. Barra de Sonido Sonos Arc Dolby Atmos.jpg"
    ]
  },
  {
    "id": "tech-14",
    "name": "Cámara Mirrorless Canon EOS R50 con Lente 18-45mm 4K Video",
    "slug": "canon-eos-r50-mirrorless-kit",
    "category": "electronica",
    "subcategory": "fotografia",
    "brand": "Canon",
    "department": "Tecnología · Fotografía",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 17499,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 45,
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    "description": "Crea contenido sobresaliente con calidad profesional. Sensor APS-C de 24.2 MP, video 4K sin recorte a 30p y el aclamado autoenfoque Dual Pixel con detección de sujetos por aprendizaje profundo.",
    "sku": "CAN-EOS-R50K",
    "inStock": true,
    "sizes": [
      "Kit con Lente 18-45mm"
    ],
    "colors": [
      "Negro Clásico",
      "Blanco Estudio"
    ],
    "colorHex": [
      "#151515",
      "#f0f0f0"
    ],
    "specs": {
      "sensor": "CMOS APS-C de 24.2 Megapíxeles efectivos",
      "procesador": "DIGIC X con Dual Pixel CMOS AF II y 651 zonas de enfoque",
      "video": "4K UHD 30p sobremuestreado de 6K y Full HD hasta 120p",
      "disparo": "Ráfaga de hasta 15 disparos por segundo con obturador electrónico",
      "pantalla": "Pantalla táctil LCD de ángulo variable de 3.0\" con 1.62M de puntos"
    },
    "features": [
      "Enfoque automático con seguimiento de ojos, rostros, perros, gatos y autos",
      "Modo para demostración en primer plano ideal para creadores y unboxing",
      "Transmisión en vivo por USB plug & play como webcam de alta gama",
      "Cuerpo ultracompacto que cabe en la palma de tu mano con solo 375 gramos"
    ]
  },
  {
    "id": "tech-15",
    "name": "Dron DJI Mini 4 Pro Fly More Combo con Control DJI RC 2",
    "slug": "dji-mini-4-pro-fly-more-combo",
    "category": "electronica",
    "subcategory": "fotografia",
    "brand": "DJI",
    "department": "Tecnología · Drones",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 24999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 71,
    "image": "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    "description": "Vuela seguro y captura tomas aéreas de cine. Menos de 249 g de peso, detección omnidireccional de obstáculos en 360°, transmisión O4 de 20 km y grabación vertical nativa 4K a 60 fps en HDR.",
    "sku": "DJI-MINI4P-FMC",
    "inStock": true,
    "sizes": [
      "Fly More Combo (3 Baterías + Hub + Bolso)"
    ],
    "colors": [
      "Gris DJI"
    ],
    "colorHex": [
      "#9e9e9e"
    ],
    "specs": {
      "peso": "Menos de 249 gramos (sin necesidad de permisos aeronáuticos)",
      "camara": "Sensor CMOS 1/1.3\" con apertura f/1.7 y fotos de 48 MP",
      "video": "4K a 60 fps HDR, 4K a 100 fps en slow motion y D-Log M de 10 bits",
      "transmision": "DJI O4 FHD hasta 20 km con estabilidad ultra baja de latencia",
      "autonomia": "Hasta 34 minutos por batería (más de 1.5 horas totales con combo)"
    },
    "features": [
      "Detección de obstáculos omnidireccional 360° con sensores de ojo de pez",
      "Tomas verticales reales: la cámara gira físicamente para historias y TikTok",
      "ActiveTrack 360° para planificar trayectorias de seguimiento automáticas",
      "Control remoto DJI RC 2 con pantalla FHD de 700 nits incorporada"
    ]
  },
  {
    "id": "tech-16",
    "name": "Monitor Curvo Gamer Samsung Odyssey OLED G9 49\" 240Hz Dual QHD",
    "slug": "samsung-odyssey-oled-g9-49",
    "category": "electronica",
    "subcategory": "pantallas",
    "brand": "Samsung",
    "department": "Tecnología · Monitores",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 32999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 39,
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    "description": "Una experiencia visual fuera de este mundo. Pantalla curva 1800R ultraancha de 49 pulgadas equivalente a dos pantallas QHD lado a lado. Panel OLED con 0.03 ms de respuesta y 240 Hz.",
    "sku": "SAM-ODY-G9-49",
    "inStock": true,
    "sizes": [
      "49 Pulgadas Curvo 1800R"
    ],
    "colors": [
      "Plata Metálico Slim"
    ],
    "colorHex": [
      "#c5c7cb"
    ],
    "specs": {
      "resolucion": "Dual QHD (5,120 x 1,440) proporción panorámica 32:9",
      "tasaRefresco": "240 Hz y tiempo de respuesta récord de 0.03 ms (GtG)",
      "panel": "OLED con procesador inteligente Neo Quantum Pro",
      "iluminacion": "CoreSync y Core Lighting+ que proyecta colores en tu pared",
      "puertos": "HDMI 2.1 · Micro HDMI 2.1 · DisplayPort 1.4 · Hub USB 3.0"
    },
    "features": [
      "Certificación VESA DisplayHDR True Black 400",
      "Tecnología AMD FreeSync Premium Pro para cero tartamudeos",
      "Diseño delgado en acabado metálico de apenas 4.5 mm de grosor",
      "Gaming Hub y Smart TV Apps integradas con control remoto"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "tech-17",
    "name": "Bocina Portátil Bose SoundLink Max Bluetooth con Audio Espacial",
    "slug": "bose-soundlink-max-bluetooth",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Bose",
    "department": "Tecnología · Audio",
    "badge": "Buen Fin -60%",
    "badgeType": "offer",
    "price": 3600,
    "originalPrice": 8999,
    "rating": 4.8,
    "reviewsCount": 54,
    "image": "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80",
    "description": "El sonido más potente en una bocina portátil de su categoría. Bajos intensos que llenan cualquier fiesta, hasta 20 horas de batería, resistencia al agua y polvo IP67 y asa de transporte suave.",
    "sku": "BSE-SL-MAX-BLK",
    "inStock": true,
    "sizes": [
      "Estándar con Asa Extraíble"
    ],
    "colors": [
      "Negro Black",
      "Azul Blue Dusk"
    ],
    "colorHex": [
      "#181818",
      "#2c3e50"
    ],
    "specs": {
      "sonido": "Transductores estéreo de rango completo y radiadores pasivos duales",
      "autonomia": "Hasta 20 horas de reproducción ininterrumpida",
      "resistencia": "Grado de protección IP67 a prueba de agua, polvo y caídas",
      "puertos": "USB-C bidireccional (funciona como PowerBank para recargar tu celular)",
      "conectividad": "Bluetooth 5.3 con códec Snapdragon Sound y entrada AUX 3.5mm"
    },
    "features": [
      "Tecnología Bose Articulated Array para un sonido estéreo ultra amplio",
      "Asa ergonómica de cuerda suave de tacto agradable y fácil agarre",
      "Compatible con Bose SimpleSync para emparejar con barras de sonido del hogar",
      "Ecualizador ajustable de graves, medios y agudos en la app Bose"
    ],
    "buenFinDiscount": 60,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 60% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "tech-18",
    "name": "Laptop Dell XPS 13 Plus Intel Core i7 16GB RAM 512GB SSD OLED 3.5K",
    "slug": "laptop-dell-xps-13-plus-oled",
    "category": "electronica",
    "subcategory": "computo",
    "brand": "Dell",
    "department": "Tecnología · Cómputo",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 36999,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 41,
    "image": "Productos/Laptop Dell XPS 13 Plus Blanca.jpg",
    "description": "Diseño futurista sin bordes. Cuenta con fila de funciones táctil capacitiva integrada, teclado de borde a borde sin espacios y touchpad de cristal continuo con respuesta háptica ultrasensible.",
    "sku": "DEL-XPS13P-512",
    "inStock": true,
    "sizes": [
      "512 GB SSD",
      "1 TB SSD"
    ],
    "colors": [
      "Blanco Platino",
      "Negro Grafito",
      "Rojo Carmesí"
    ],
    "colorHex": [
      "#f8fafc",
      "#1e293b",
      "#991b1b"
    ],
    "specs": {
      "pantalla": "13.4\" 3.5K (3456 x 2160) OLED Táctil InfinityEdge 400 nits",
      "procesador": "Intel Core i7-1360P de 13ª generación (12 núcleos hasta 5.0 GHz)",
      "memoria": "16 GB LPDDR5 a 6,000 MHz en canal dual",
      "bateria": "55 Wh con ExpressCharge: 80% de carga en 60 minutos",
      "puertos": "2x Thunderbolt 4 (USB Type-C con DisplayPort y Power Delivery)"
    },
    "features": [
      "Chasis de aluminio mecanizado CNC con reposamanos de cristal Gorilla Glass",
      "Touchpad sin costuras invisibles con hápticos de retroalimentación precisa",
      "Sistema de 4 altavoces con sonido de estudio Waves MaxxAudio Pro",
      "Cámara web dual con sensor infrarrojo para desbloqueo facial Windows Hello"
    ],
    "colorImages": {
      "Blanco Platino": "Productos/Laptop Dell XPS 13 Plus Blanca.jpg",
      "Negro Grafito": "Productos/Laptop Dell XPS 13 Plus Negra.jpg",
      "Rojo Carmesí": "Productos/Laptop Dell XPS 13 Plus Roja.jpg"
    }
  },
  {
    "id": "prod-3",
    "name": "Sofá Seccional Modular 3 Plazas Gris Oxford",
    "slug": "sofa-seccional-modular-3-plazas-gris-oxford",
    "category": "hogar",
    "subcategory": "muebles",
    "brand": "D'Avanti Maison",
    "department": "Hogar · Salas & Muebles",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 10299,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 64,
    "image": "Productos/Sofa seccional modula 3 plazas gris.jpg",
    "description": "Sofá seccional modular de 3 plazas tapizado en tela premium antimanchas de alta densidad. Estructura interna de madera maciza estufada con resortes zig-zag y cojines reversibles de espuma de alta resiliencia.",
    "sku": "HGR-SOFA-3PL",
    "inStock": true,
    "sizes": [
      "Seccional Izquierdo (240x160 cm)",
      "Seccional Derecho (240x160 cm)"
    ],
    "colors": [
      "Gris Carbón",
      "Azul Marino",
      "Arena Claro"
    ],
    "colorHex": [
      "#374151",
      "#1e3a8a",
      "#e2d9cc"
    ],
    "specs": {
      "estructura": "Madera maciza de pino estufada de primera calidad",
      "tapizado": "Tela de poliéster de tejido cerrado con tratamiento repelente de líquidos",
      "dimensiones": "240 cm largo x 160 cm fondo chaise x 88 cm alto",
      "confort": "Espuma de poliuretano densidad 30 kg/m³ con resortes ensacados",
      "garantia": "5 años en estructura y 1 año en tapizado"
    },
    "features": [
      "Tratamiento hidrofóbico antimanchas de fácil limpieza con paño húmedo",
      "Módulo de chaise longue reversible que se adapta a cualquier esquina",
      "Patas de madera maciza con regatones plásticos que no rayan el piso",
      "Cojines con fundas removibles y cierres ocultos para lavado"
    ]
  },
  {
    "id": "prod-5",
    "name": "Bleu de Chanel Parfum 100ml",
    "brand": "Dior",
    "subcategory": "perfumeria-hombre",
    "slug": "perfume-para-hombre",
    "category": "belleza",
    "department": "Belleza · Perfumería",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1299,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 78,
    "image": "Productos/Bleu de Chanel Parfum.jpg",
    "description": "Eau de Parfum Amaderado Aromático con notas de bergamota y cedro.",
    "sku": "BLZ-PRF-H100",
    "inStock": true,
    "sizes": [
      "100 ml"
    ],
    "colors": [
      "Noir"
    ],
    "features": [
      "Alta concentración EDP"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "prod-6",
    "name": "Set de maquillaje",
    "brand": "Charlotte Tilbury",
    "subcategory": "maquillaje",
    "slug": "set-de-maquillaje",
    "category": "belleza",
    "department": "Belleza · Maquillaje",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 649,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 52,
    "image": "assets/images/prod_makeup.jpg",
    "description": "Colección completa de brochas profesionales con estuche de viaje.",
    "sku": "BLZ-MKP-GLAM",
    "inStock": true,
    "sizes": [
      "Kit 12 Piezas"
    ],
    "colors": [
      "Rose Gold"
    ],
    "features": [
      "Cruelty-free"
    ]
  },
  {
    "id": "prod-9",
    "name": "Sala Modular Nórdica de Diseño Escandinavo 4 Plazas con Chaise Longue",
    "slug": "sala-modular-nordica-diseno-escandinavo",
    "category": "hogar",
    "subcategory": "muebles",
    "brand": "BoConcept",
    "department": "Hogar · Salas & Muebles",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 15499,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 43,
    "image": "Productos/Sala Modular Nórdica de Diseño Escandinavo.jpg",
    "description": "Sala de diseño nórdico minimalista con líneas puras y tapizado en lino texturizado. Incluye tres cojines decorativos de pluma y patas cónicas en roble natural que aportan ligereza y sofisticación a tu estancia.",
    "sku": "HGR-SALA-NORD",
    "inStock": true,
    "sizes": [
      "Modular 4 Plazas (280x175 cm)"
    ],
    "colors": [
      "Gris Perla",
      "Verde Salvia",
      "Gris Antracita"
    ],
    "colorHex": [
      "#cbd5e1",
      "#84a98c",
      "#334155"
    ],
    "specs": {
      "diseno": "Línea contemporánea de inspiración escandinava nórdica",
      "tapizado": "Lino grueso 100% transpirable de alta resistencia al roce",
      "dimensiones": "280 cm largo x 175 cm fondo chaise x 82 cm alto",
      "patas": "Madera natural de roble macizo con barniz protector mate",
      "garantia": "10 años en estructura y resortes"
    },
    "features": [
      "Estructura reforzada con esquineros metálicos y garantía decenal",
      "Incluye 3 cojines decorativos a juego rellenos de microfibra siliconada",
      "Asientos profundos y ergonómicos para máxima relajación",
      "Entrega con servicio White Glove que incluye colocación en habitación"
    ],
    "gallery": [
      "Productos/Sala Modular Nórdica de Diseño Escandinavo 1.jpg"
    ]
  },
  {
    "id": "toy-1",
    "name": "LEGO Star Wars Halcón Milenario 7,541 Piezas Coleccionista UCS",
    "slug": "lego-star-wars-halcon-milenario-ucs",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "LEGO",
    "department": "Juguetes · Construcción & Bloques",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 18999,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 142,
    "age": "+16 años",
    "image": "Productos/LEGO Star Wars Halcón Milenario UCS.jpg",
    "description": "El modelo LEGO Star Wars más grande y detallado jamás creado. Incluye cabina desmontable, torretas láser cuádruples, rampas retráctiles y minifiguras de Han Solo, Chewbacca, Leia y C-3PO.",
    "sku": "LEG-SW-MILL75",
    "inStock": true,
    "sizes": [
      "7,541 Piezas (84 cm largo)"
    ],
    "colors": [
      "Gris Espacial"
    ],
    "colorHex": [
      "#9e9e9e"
    ],
    "specs": {
      "piezas": "7,541 piezas de máxima precisión",
      "edad": "Recomendado para mayores de 16 años y adultos",
      "dimensiones": "21 cm alto x 84 cm largo x 60 cm ancho",
      "minifiguras": "7 figuras (Han Solo, Chewie, Leia, C-3PO, Rey, Finn, BB-8)"
    },
    "features": [
      "Placa de exhibición conmemorativa con datos del navío",
      "Interior minuciosamente recreado con mesa de holoajedrez de Dejarik",
      "Torretas láser cuádruples giratorias superiores e inferiores",
      "Cabina con parabrisas desmontable para 4 minifiguras"
    ]
  },
  {
    "id": "toy-2",
    "name": "Barbie Casa de los Sueños Dreamhouse Deluxe 3 Pisos con Luces y Sonidos",
    "slug": "barbie-casa-de-los-suenos-dreamhouse-deluxe",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Barbie",
    "department": "Juguetes · Muñecas & Accesorios",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 5199,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 188,
    "age": "3-5 años",
    "image": "Productos/Barbie Casa de los Sueños Dreamhouse.jpg",
    "description": "Mide más de 1 metro de alto y ancho con 10 áreas de juego, tobogán de 3 pisos con alberca real, elevador para silla de ruedas y más de 75 piezas y muebles.",
    "sku": "BAR-DRM-HOU01",
    "inStock": true,
    "sizes": [
      "102 cm Alto x 108 cm Ancho"
    ],
    "colors": [
      "Rosa Barbie / Turquesa"
    ],
    "colorHex": [
      "#e91e63",
      "#00bcd4"
    ],
    "specs": {
      "pisos": "3 pisos con 10 zonas de juego interiores y exteriores",
      "piezas": "Más de 75 accesorios y muebles interactivos",
      "lucesSonidos": "8 efectos de luz y sonidos realistas de cocina y baño",
      "edad": "Recomendado para edades de 3 años en adelante"
    },
    "features": [
      "Tobogán en espiral de 3 niveles con alberca llenable de agua",
      "Efectos de sonido y 8 opciones de iluminación ambiental día/noche",
      "Elevador operable con capacidad para 4 muñecas o silla de ruedas",
      "Mobiliario transformable para fiesta en la terraza del techo"
    ]
  },
  {
    "id": "toy-3",
    "name": "Hot Wheels Pista Super Mega Garaje Motorizado con Elevador y T-Rex",
    "slug": "hot-wheels-pista-super-mega-garaje-t-rex",
    "category": "juguetes",
    "subcategory": "vehiculos",
    "brand": "Hot Wheels",
    "department": "Juguetes · Pistas & Carritos",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 3499,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 95,
    "age": "6-8 años",
    "image": "Productos/Hot Wheels Pista Super Mega Garaje.jpg",
    "description": "El garaje Hot Wheels definitivo con capacidad para almacenar más de 100 vehículos a escala 1:64 y un amenazante dinosaurio T-Rex motorizado que desafía a los autos en la pista.",
    "sku": "HW-GAR-TREX02",
    "inStock": true,
    "sizes": [
      "Capacidad +100 Autos"
    ],
    "colors": [
      "Azul / Naranja Pista"
    ],
    "colorHex": [
      "#0288d1",
      "#ff6f00"
    ],
    "specs": {
      "capacidad": "Almacenamiento para más de 100 vehículos a escala 1:64",
      "mecanismo": "Elevador motorizado continuo para 2 autos",
      "altura": "Aproximadamente 90 cm de altura vertical",
      "edad": "Para niños de 5 a 10 años"
    },
    "features": [
      "T-Rex mecánico que devora autos mientras suben por el elevador",
      "Pista de carreras doble lado a lado para competencias de descenso",
      "Puntos de conexión para unir a otras pistas Hot Wheels City",
      "Incluye 2 vehículos Hot Wheels metálicos de colección"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "toy-4",
    "name": "Juego de Mesa Catan El Juego Edición Completa en Español",
    "slug": "juego-de-mesa-catan-espanol",
    "category": "juguetes",
    "subcategory": "juegos-mesa",
    "brand": "Devir",
    "department": "Juguetes · Juegos de Mesa",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1299,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 230,
    "age": "+12 años",
    "image": "Productos/Juego de Mesa Catan Edición Completa.jpg",
    "description": "El juego de estrategia y negociación más premiado. Coloniza la isla de Catan recolectando madera, trigo, ladrillos, lana y mineral para construir poblados, caminos y ciudades.",
    "sku": "CAT-BRD-ESP01",
    "inStock": true,
    "sizes": [
      "Edición Estándar (3-4 Jugadores)"
    ],
    "colors": [
      "Madera Natural"
    ],
    "colorHex": [
      "#8d6e63"
    ],
    "specs": {
      "jugadores": "3 a 4 jugadores (expandible a 6)",
      "duracion": "Aproximadamente 75 minutos por partida",
      "piezas": "19 hexágonos de terreno, 95 cartas de materia prima, 96 figuras de madera",
      "edad": "A partir de los 10 años"
    },
    "features": [
      "Tablero modular con combinaciones geográficas infinitas",
      "Desarrolla visión estratégica, gestión de recursos y diplomacia",
      "Piezas esculpidas en madera natural no tóxica de calidad europea",
      "Reglamento y manual didáctico completamente en español"
    ]
  },
  {
    "id": "toy-5",
    "name": "LEGO Technic Ferrari Daytona SP3 Escala 1:8 con Caja de Cambios",
    "slug": "lego-technic-ferrari-daytona-sp3",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "LEGO",
    "department": "Juguetes · Construcción & Bloques",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 10999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 78,
    "age": "+16 años",
    "image": "Productos/LEGO Technic Ferrari Daytona SP3.jpg",
    "description": "Obra maestra de ingeniería a escala 1:8 con 3,778 piezas. Caja de cambios secuencial de 8 velocidades con levas en volante, motor V12 con pistones móviles y elegantes puertas de mariposa.",
    "sku": "LEG-TEC-FERRSP3",
    "inStock": true,
    "sizes": [
      "3,778 Piezas (59 cm largo)"
    ],
    "colors": [
      "Rojo Ferrari"
    ],
    "colorHex": [
      "#d32f2f"
    ],
    "specs": {
      "piezas": "3,778 piezas LEGO Technic de ultra precisión",
      "escala": "1:8 réplica oficial con licencia Ferrari SpA",
      "dimensiones": "14 cm alto x 59 cm largo x 25 cm ancho",
      "edad": "Diseñado para constructores adultos de +18 años"
    },
    "features": [
      "Caja de cambios secuencial de 8 marchas funcional con levas",
      "Motor V12 atmosférico con pistones de movimiento mecánico",
      "Elegantes puertas de mariposa que se elevan suavemente",
      "Incluye placa de exhibición numerada y acceso a contenidos en línea"
    ]
  },
  {
    "id": "toy-6",
    "name": "Figura de Acción Marvel Spider-Man No Way Home Articulada",
    "slug": "figura-marvel-spiderman-articulada",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Marvel",
    "department": "Juguetes · Figuras de Acción",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1499,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 310,
    "age": "+4 años",
    "image": "Productos/Figura Marvel Spider-Man.jpg",
    "description": "Figura de acción coleccionable Marvel Spider-Man inspirada en el traje integrado de No Way Home. Cuenta con más de 20 puntos de articulación para poses acrobáticas dinámicas, manos arácnidas intercambiables y acabados cinematográficos de alta fidelidad.",
    "sku": "MVL-SPD-NWH01",
    "inStock": true,
    "sizes": [
      "Escala 6 Pulgadas (15 cm)"
    ],
    "colors": [
      "Rojo y Dorado Traje Integrado"
    ],
    "colorHex": [
      "#c62828",
      "#eab308"
    ],
    "specs": {
      "escala": "Escala coleccionista de 6 pulgadas (15 cm)",
      "articulaciones": "Más de 20 puntos de articulación dinámica en cuerpo completo",
      "accesorios": "2 pares de manos arácnidas intercambiables (puño y telaraña)",
      "licencia": "Oficial Marvel Studios / Hasbro"
    },
    "features": [
      "Detalles esculpidos de alta precisión y textura micro-relieve en traje",
      "Articulación avanzada en hombros tipo mariposa, codos dobles y rodillas",
      "Manos intercambiables para recrear las poses más icónicas del Hombre Araña",
      "Empaque de colección con diseño gráfico cinematográfico de Marvel"
    ]
  },
  {
    "id": "toy-7",
    "name": "Figura de Acción Marvel Legends Spider-Man 60 Aniversario",
    "slug": "figura-marvel-legends-spiderman-60th",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Hasbro",
    "department": "Juguetes · Figuras de Acción",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 899,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 165,
    "age": "6-8 años",
    "image": "Productos/Figura Marvel Legends Spider-Man.jpg",
    "description": "Figura de colección prémium a escala de 6 pulgadas con más de 30 puntos de articulación para poses dinámicas. Incluye cabezas intercambiables, manos arácnidas y telarañas.",
    "sku": "HAS-MVL-SPD60",
    "inStock": true,
    "sizes": [
      "Escala 6 Pulgadas (15 cm)"
    ],
    "colors": [
      "Rojo y Azul Clásico"
    ],
    "colorHex": [
      "#c62828",
      "#1565c0"
    ],
    "specs": {
      "articulacion": "Más de 30 puntos de pivote con articulación de mariposa en hombros",
      "escala": "6 pulgadas (15.2 cm)",
      "accesorios": "2 cabezas intercambiables, 3 pares de manos, 2 telarañas",
      "edad": "Recomendado para 4 años en adelante y coleccionistas"
    },
    "features": [
      "Esculpido fiel a la era clásica de los cómics de Stan Lee y Steve Ditko",
      "Articulaciones sin pernos visibles para una estética limpia de colección",
      "Empaque conmemorativo retro estilo blister vintage",
      "Plástico duradero de alta densidad resistente a caídas"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "toy-8",
    "name": "Carro Buggy Eléctrico Montable Todo Terreno 12V con Batería y Control Remoto",
    "slug": "montable-electrico-jeep-12v-4x4",
    "category": "juguetes",
    "subcategory": "vehiculos",
    "brand": "Action Wheels",
    "department": "Juguetes · Montables Eléctricos",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 7999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 62,
    "age": "3-5 años",
    "image": "Productos 3/Carro Buggy Electrico Montable De Bateria para Niños.jpg",
    "description": "Aventura todoterreno para pequeños pilotos. Batería de 12V recargable, doble motor con suspensión en las 4 ruedas, luces LED, bocina y control remoto inalámbrico para padres.",
    "sku": "MNT-JEP-12V4X",
    "inStock": true,
    "sizes": [
      "12V Biplaza"
    ],
    "colors": [
      "Rojo Fuego",
      "Verde Militar",
      "Negro Extremo",
      "Gris Can-Am ATV",
      "Deportivo Infantil"
    ],
    "colorHex": [
      "#dc2626",
      "#15803d",
      "#18181b",
      "#4b5563",
      "#2563eb"
    ],
    "specs": {
      "motor": "Doble motor de 12V con tracción asistida",
      "velocidad": "2 velocidades regulables: 3 a 6 km/h",
      "bateria": "Batería sellada recargable de 12V 7Ah (hasta 90 min de uso)",
      "pesoMaximo": "Soporta hasta 35 kg (apto para 1 a 2 niños pequeños)"
    },
    "features": [
      "Control remoto inalámbrico de 2.4 GHz con botón de freno de emergencia",
      "Conexión Bluetooth / USB para reproducir música favorita mientras conduce",
      "Faros LED delanteros y luces traseras funcionales",
      "Cinturón de seguridad de tres puntos y puertas con cerrojo de protección"
    ],
    "colorImages": {
      "Rojo Fuego": "Productos 3/Carro Buggy Electrico Montable De Bateria para Niños rojo.jpg",
      "Verde Militar": "Productos 3/Carro Buggy Electrico Montable De Bateria para Niños verde.jpg",
      "Negro Extremo": "Productos 3/Carro Buggy Electrico Montable De Bateria para Niños.jpg",
      "Gris Can-Am ATV": "Productos 3/Vehículo Montable a Batería Xootz Can Am ATV 12V con Licencia Gris Electrico.jpg",
      "Deportivo Infantil": "Productos 3/Montable Electrico para Niños Carro Deportivo Bluetooth Luz Led Control Remoto 12v.jpg"
    }
  },
  {
    "id": "toy-9",
    "name": "Juego de Mesa Monopoly Banco Electrónico Definitivo",
    "slug": "monopoly-banco-electronico-definitivo",
    "category": "juguetes",
    "subcategory": "juegos-mesa",
    "brand": "Hasbro",
    "department": "Juguetes · Juegos de Mesa",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1099,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 140,
    "age": "+8 años",
    "image": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80",
    "description": "Olvídate de los billetes de papel. Cuenta con una terminal bancaria todo en uno con tecnología sin contacto para registrar pagos, compras de propiedades y fluctuaciones de mercado.",
    "sku": "HAS-MNP-ELCBK",
    "inStock": true,
    "sizes": [
      "Juego Completo Electrónico"
    ],
    "colors": [
      "Verde Monopoly"
    ],
    "colorHex": [
      "#2e7d32"
    ],
    "specs": {
      "jugadores": "2 a 4 jugadores",
      "banco": "Unidad electrónica sin contacto con pantalla LCD",
      "edad": "Recomendado para edades de 8 años en adelante",
      "baterias": "Requiere 3 pilas AAA (no incluidas)"
    },
    "features": [
      "Transacciones inmediatas acercando tu tarjeta bancaria personal",
      "Valores inmobiliarios que suben y bajan de acuerdo a las acciones",
      "Partidas dinámicas y más rápidas (aproximadamente 45 minutos)",
      "Incluye 4 peones exclusivos y 22 casas de diseño moderno"
    ]
  },
  {
    "id": "toy-10",
    "name": "Play-Doh Set Súper Tienda de Helados y Dulces Creativos",
    "slug": "play-doh-super-tienda-helados",
    "category": "juguetes",
    "subcategory": "didacticos",
    "brand": "Play-Doh",
    "department": "Juguetes · Arte & Creatividad",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 799,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 115,
    "age": "3-5 años",
    "image": "Productos 3/Play-Doh Set Súper Tienda de Helados y Dulces Creativos.jpg",
    "description": "Crea helados en espiral, barquillos y postres de colores. Incluye máquina dispensadora doble, jarabe Drizzle líquido que se endurece como chocolate y 8 latas de masa no tóxica.",
    "sku": "PLY-HLD-SMR01",
    "inStock": true,
    "sizes": [
      "Kit 8 Latas + Accesorios"
    ],
    "colors": [
      "Multicolor Creativo"
    ],
    "colorHex": [
      "#e91e63",
      "#ffeb3b",
      "#00bcd4"
    ],
    "specs": {
      "masa": "8 latas de plastilina Play-Doh de 56 g cada una (448 g totales)",
      "jarabe": "2 botellas de jarabe Play-Doh Drizzle (chocolate y fresa)",
      "edad": "Apto para niños a partir de los 3 años",
      "seguridad": "Fórmula no tóxica hecha a base de harina de trigo y sal"
    },
    "features": [
      "Máquina con palanca suave de prensado fácil para manitas pequeñas",
      "Jarabe Drizzle que simula cobertura crujiente despegable",
      "Moldes para crear galletas, fresas, chispas y cerezas",
      "Estimula el desarrollo sensorial y la imaginación gastronómica"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "toy-11",
    "name": "Nerf Elite 2.0 Lanzador Motorizado Turbine CS-18 con 36 Dardos",
    "slug": "nerf-elite-20-turbine-cs18",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Nerf",
    "department": "Juguetes · Lanzadores & Deportes",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1499,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 92,
    "age": "+8 años",
    "image": "Productos/Nerf Elite 2.0 Lanzador Motorizado Turbine CS-18 con 36 Dardos.jpg",
    "description": "Dispara ráfagas veloces con motor eléctrico de alta potencia. Cuenta con clip extraíble de 18 dardos, 4 rieles tácticos y alcance de lanzamiento de hasta 27 metros.",
    "sku": "NRF-EL2-TRB18",
    "inStock": true,
    "sizes": [
      "Clip 18 Dardos + 36 Dardos"
    ],
    "colors": [
      "Azul Eléctrico / Naranja"
    ],
    "colorHex": [
      "#0277bd",
      "#ff6d00"
    ],
    "specs": {
      "alcance": "Hasta 27 metros de distancia",
      "dardos": "Incluye 36 dardos oficiales Nerf Elite de hule espuma",
      "baterias": "Requiere 4 pilas C (no incluidas)",
      "edad": "Recomendado para mayores de 8 años"
    },
    "features": [
      "Mecanismo motorizado: mantén presionado el acelerador y aprieta el gatillo",
      "Clip transparente para monitorear la munición restante en combate",
      "4 rieles tácticos para instalar miras, linternas y bípodes Nerf",
      "Dardos de punta suave seguros diseñados para máximo vuelo aerodinámico"
    ]
  },
  {
    "id": "toy-12",
    "name": "Rompecabezas Ravensburger 1,000 Piezas Mapa del Mundo Histórico",
    "slug": "rompecabezas-ravensburger-1000-mapa-mundo",
    "category": "juguetes",
    "subcategory": "juegos-mesa",
    "brand": "Ravensburger",
    "department": "Juguetes · Rompecabezas",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 649,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 84,
    "age": "+12 años",
    "image": "Productos 3/Rompecabezas Ravensburger 1,000 Piezas Mapa del Mundo Histórico.jpg",
    "description": "Tecnología Softclick prémium con piezas cortadas a mano que encajan a la perfección. Impreso en papel de lino especial antirreflejos de alta calidad gráfica.",
    "sku": "RAV-PUZ-MAP1000",
    "inStock": true,
    "sizes": [
      "1,000 Piezas (70 x 50 cm)"
    ],
    "colors": [
      "Cartografía Antigua"
    ],
    "colorHex": [
      "#d7ccc8"
    ],
    "specs": {
      "piezas": "1,000 piezas individuales con corte único Softclick",
      "medidas": "70 cm de largo x 50 cm de alto una vez montado",
      "origen": "Fabricado con cartón ecológico en Ravensburg, Alemania",
      "edad": "Ideal para adolescentes y adultos a partir de 12 años"
    },
    "features": [
      "Acabado mate antirreflejante de textura de lino fina",
      "Ilustración histórica con constelaciones y carabelas de época",
      "Piezas resistentes que no se doblan ni pierden color con el tiempo",
      "Actividad antiestrés para ejercitar la memoria visual y concentración"
    ]
  },
  {
    "id": "toy-13",
    "name": "Transformers Generations Autobot Optimus Prime Líder 35 Pasos",
    "slug": "transformers-generations-optimus-prime",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Hasbro",
    "department": "Juguetes · Figuras de Acción",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1899,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 73,
    "age": "+8 años",
    "image": "Productos/transformers autobot optimus prime.jpg",
    "description": "El legendario comandante Autobot con conversión de robot a tractocamión en 35 pasos. Incluye el cañón iónico y la Matriz de Liderazgo desmontable.",
    "sku": "HAS-TRN-OPT01",
    "inStock": true,
    "sizes": [
      "Escala Líder 18 cm"
    ],
    "colors": [
      "Rojo y Azul Metálico"
    ],
    "colorHex": [
      "#b71c1c",
      "#0d47a1"
    ],
    "specs": {
      "conversion": "35 pasos de transformación articulada sin piezas sobrantes",
      "altura": "Aproximadamente 18 cm en modo robot",
      "accesorios": "Cañón iónico, remolque convertible y Matriz del Liderazgo",
      "edad": "A partir de 8 años en adelante"
    },
    "features": [
      "Fiel a los planos de animación clásica G1 de los años 80",
      "Pecho que se abre para almacenar la legendaria Matriz de Liderazgo",
      "El remolque se despliega como estación de batalla con rampa de lanzamiento",
      "Articulación avanzada en tobillos y muñecas para poses de batalla"
    ]
  },
  {
    "id": "toy-14",
    "name": "Telescopio Astronómico Infantil 70mm Refractor con Trípode y Celular",
    "slug": "telescopio-astronomico-infantil-70mm",
    "category": "juguetes",
    "subcategory": "didacticos",
    "brand": "Discovery Kids",
    "department": "Juguetes · Ciencia & Exploración",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2299,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 51,
    "age": "+8 años",
    "image": "Productos 3/Telescopio Astronómico Infantil 70mm Refractor con Trípode y Celular.jpg",
    "description": "Explora la luna, cráteres y constelaciones. Apertura de 70 mm con lentes de cristal multicapa, trípode de aluminio ligero y adaptador universal para celular.",
    "sku": "DSC-TEL-70MM",
    "inStock": true,
    "sizes": [
      "Apertura 70 mm (Aumentos 16x - 120x)"
    ],
    "colors": [
      "Blanco Astral"
    ],
    "colorHex": [
      "#f5f5f5"
    ],
    "specs": {
      "apertura": "70 mm (2.75\") con distancia focal de 400 mm (f/5.7)",
      "oculares": "Oculares K25mm (16x) y K9mm (44x) + Lente Barlow 3x",
      "tripode": "Aluminio ajustable de 40 cm a 110 cm de altura",
      "edad": "Recomendado para niños a partir de 8 años y principiantes"
    },
    "features": [
      "Óptica de cristal multicapa de alta transmisión para imágenes brillantes",
      "Buscador óptico 5x24 para localizar astros rápidamente en el cielo",
      "Adaptador universal para celular para tomar fotos de la luna y compartirlas",
      "Mochila de transporte impermeable incluida para excursiones de campamento"
    ]
  },
  {
    "id": "toy-15",
    "name": "Auto Deportivo Radiocontrol RC Todo Terreno 4x4 Alta Velocidad 40 km/h",
    "slug": "auto-rc-todoterreno-4x4-alta-velocidad",
    "category": "juguetes",
    "subcategory": "vehiculos",
    "brand": "Monster RC",
    "department": "Juguetes · Radiocontrol",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2399,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 68,
    "age": "+8 años",
    "image": "Productos 3/Auto Deportivo Radiocontrol RC Todo Terreno 4x4 Alta Velocidad.jpg",
    "description": "Velocidad salvaje en pasto, arena y rocas. Tracción integral 4x4 con amortiguadores de aceite, motor de alto torque y control remoto antiinterferencias.",
    "sku": "RC-TRK-4X4-40K",
    "inStock": true,
    "sizes": [
      "Escala 1:16 Alta Velocidad"
    ],
    "colors": [
      "Verde Neón",
      "Naranja Llamas"
    ],
    "colorHex": [
      "#76ff03",
      "#ff3d00"
    ],
    "specs": {
      "velocidad": "Hasta 40 km/h con acelerador y dirección proporcional",
      "control": "Frecuencia de 2.4 GHz con alcance de hasta 80 metros",
      "baterias": "2 baterías de litio de 7.4V 850 mAh incluidas (40 min totales)",
      "proteccion": "Electrónica a prueba de salpicaduras IPX4"
    },
    "features": [
      "Tracción a las 4 ruedas (4WD) con diferenciales metálicos reforzados",
      "Amortiguadores independientes de aleación para saltos sin roturas",
      "Neumáticos de caucho hueco con grabado agresivo para agarre superior",
      "Chasis flexible compuesto de nylon ultrarresistente a impactos frontales"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "toy-16",
    "name": "Oso de Peluche Gigante 1.20m Extra Suave Hipoalergénico",
    "slug": "oso-peluche-gigante-120m",
    "category": "juguetes",
    "subcategory": "bebes",
    "brand": "D'Avanti Kids",
    "department": "Juguetes · Peluches & Bebés",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 155,
    "age": "0-2 años",
    "image": "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=800&q=80",
    "description": "Tierno y suave oso de peluche gigante de 120 cm. Relleno esponjoso hipoalergénico de alta densidad con moño satinado dorado, perfecto para abrazar y decorar habitaciones infantiles.",
    "sku": "JUG-OSO-120",
    "inStock": true,
    "sizes": [
      "120 cm de Altura"
    ],
    "colors": [
      "Café Miel",
      "Blanco Nieve"
    ],
    "colorHex": [
      "#795548",
      "#f5f5f5"
    ],
    "specs": {
      "tamano": "120 cm de altura desde la cabeza hasta las patas",
      "material": "Fibra de poliéster hipoalergénica de tacto ultra suave",
      "seguridad": "Ojos con costura de seguridad antitirones (apto para bebés)",
      "cuidado": "Lavable en superficie con paño húmedo y jabón neutro"
    },
    "features": [
      "Pelaje ultrasuave hipoalergénico que no desprende pelusa",
      "Costuras dobles reforzadas para máxima durabilidad",
      "Elegante moño satinado en tono dorado clásico D'Avanti",
      "Ideal como regalo para baby showers, cumpleaños y fechas especiales"
    ]
  },
  {
    "id": "beauty-1",
    "name": "Dior Sauvage Elixir Eau de Parfum 60ml",
    "slug": "dior-sauvage-elixir-60ml",
    "category": "belleza",
    "subcategory": "perfumeria-hombre",
    "brand": "Dior",
    "department": "Belleza · Perfumería Masculina",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 4290,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 342,
    "beautyType": "Eau de Parfum Concentrado",
    "image": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    "description": "Una fragancia extraordinariamente concentrada, impregnada del frescor icónico de Sauvage con un corazón embriagador de especias, esencia de lavanda de Nyons a medida y una mezcla de maderas licorosas que dejan una estela poderosa y noble.",
    "sku": "DIOR-SAUV-ELX60",
    "inStock": true,
    "sizes": [
      "60 ml",
      "100 ml"
    ],
    "colors": [
      "Frasco Azul Noche Laqueado"
    ],
    "colorHex": [
      "#0a192f"
    ],
    "specs": {
      "presentacion": "Frasco de vidrio azul medianoche con tapón magnético cincelado",
      "familia": "Amaderada Especiada Cálida",
      "notasSalida": "Cardamomo de Guatemala, Nuez moscada, Canela y Toronja",
      "notasCorazon": "Lavanda silvestre de Nyons (destilada a medida)",
      "notasFondo": "Regaliz, Sándalo de Sri Lanka, Ámbar, Pachulí y Vetiver",
      "concentracion": "Elixir Alta Concentración (duración +14 horas)",
      "origen": "Fabricado y envasado en Francia"
    },
    "features": [
      "Concentración de aceites esenciales al 25% para fijación extrema",
      "Estuche de alta costura Dior con grabado dorado auténtico",
      "Muestra de lujo de 5ml de cortesía incluida con tu compra",
      "Ideal para eventos formales, galas y veladas especiales"
    ]
  },
  {
    "id": "beauty-2",
    "name": "Chanel N°5 L'Eau Eau de Toilette 100ml",
    "slug": "chanel-n5-leau-100ml",
    "category": "belleza",
    "subcategory": "perfumeria-mujer",
    "brand": "Chanel",
    "department": "Belleza · Perfumería Femenina",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 4790,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 289,
    "beautyType": "Eau de Toilette Floral Luminoso",
    "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    "description": "La reinterpretación más fresca, moderna y radiante del mito de N°5. Una composición abstracta de cítricos centelleantes sobre un corazón de jazmín de Grasse, rosa de mayo e ylang-ylang, descansando en cedro blanco y almizcles suaves.",
    "sku": "CHNL-N5-LEAU100",
    "inStock": true,
    "sizes": [
      "50 ml",
      "100 ml"
    ],
    "colors": [
      "Cristal Puro Translúcido"
    ],
    "colorHex": [
      "#f5f5f4"
    ],
    "specs": {
      "presentacion": "Frasco clásico biselado de cristal puro de alta transparencia",
      "familia": "Floral Aldehídica Moderna",
      "notasSalida": "Limón, Mandarina, Naranja, Neroli y Aldehídos frescos",
      "notasCorazon": "Rosa de Mayo de Grasse, Jazmín y bouquet de Ylang-Ylang",
      "notasFondo": "Cedro blanco del Atlas, Almizcle blanco algodonoso y Vainilla",
      "concentracion": "Eau de Toilette de fijación prolongada (8-10 horas)",
      "origen": "Neuilly-sur-Seine, París, Francia"
    },
    "features": [
      "Flores cosechadas a mano exclusivamente en los campos de Grasse, Francia",
      "Fórmula ligera y etérea apta para uso diario y ocasiones elegantes",
      "Bolsa de regalo de boutique Chanel con cinta de grosgrain incluida",
      "Garantía de originalidad con sello holográfico de importación oficial"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "beauty-3",
    "name": "Estée Lauder Advanced Night Repair Serum Multi-Recuperación 50ml",
    "slug": "estee-lauder-advanced-night-repair-50ml",
    "category": "belleza",
    "subcategory": "cuidado-piel",
    "brand": "Estée Lauder",
    "department": "Belleza · Cuidado Facial Antiedad",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 3490,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 512,
    "beautyType": "Serum Reparador Noche & Día",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    "description": "El suero #1 en México y el mundo. Con tecnología patentada Chronolux™ Power Signal, penetra profundamente para reducir múltiples signos de envejecimiento, reafirmar los poros e infundir la piel con 72 horas de hidratación continua.",
    "sku": "EST-ANR-SER50",
    "inStock": true,
    "sizes": [
      "30 ml",
      "50 ml",
      "75 ml"
    ],
    "colors": [
      "Frasco Ámbar Clásico Reciclable"
    ],
    "colorHex": [
      "#78350f"
    ],
    "specs": {
      "tipoPiel": "Apto para todo tipo de piel: seca, grasa, mixta y sensible",
      "ingredientesClave": "Ácido Hialurónico puro, Péptidos de colágeno, Fermento bífida y Vitamina E",
      "beneficioPrincipal": "Reducción visible de líneas finas, textura uniforme y luminosidad",
      "textura": "Suero ligero de rápida absorción sin sensación grasa ni pegajosa",
      "formula": "Libre de parabenos, sulfatos, aceites minerales y fragancias sintéticas",
      "volumen": "50 ml con gotero dosificador de precisión antimicrobiano"
    },
    "features": [
      "8 horas de protección antioxidante contra la contaminación y luz azul",
      "Incrementa la firmeza y elasticidad cutánea en solo 3 semanas de uso",
      "Hidratación profunda comprobada por estudios clínicos con ácido hialurónico",
      "Testado dermatológica y oftalmológicamente, no comedogénico"
    ]
  },
  {
    "id": "beauty-4",
    "name": "Dyson Airwrap Multi-Styler Complete Long Edición Especial Cobre",
    "slug": "dyson-airwrap-complete-long-cobre",
    "category": "belleza",
    "subcategory": "cuidado-capilar",
    "brand": "Dyson",
    "department": "Belleza · Estilizado Capilar Tecnológico",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 15499,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 187,
    "beautyType": "Moldeador de Aire Coanda",
    "image": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "description": "Estiliza, riza, ondula y oculta el frizz sin calor extremo dañino. Utiliza el efecto aerodinámico Coanda potenciado por el motor digital Dyson V9 para moldear el cabello desde húmedo utilizando únicamente flujo de aire controlado.",
    "sku": "DYS-AW-LONG-CPR",
    "inStock": true,
    "sizes": [
      "Kit Completo para Cabello Medio a Largo"
    ],
    "colors": [
      "Cobre Satinado & Níquel Pulido",
      "Azul Prusiano & Cobre"
    ],
    "colorHex": [
      "#b45309",
      "#1e3a8a"
    ],
    "specs": {
      "motor": "Motor Digital Dyson V9 a 110,000 RPM de 13 aspas",
      "controlTemperatura": "Monitoreo térmico inteligente 40 veces por segundo (<150°C)",
      "potencia": "1300 Watts con iones negativos antiestática",
      "accesoriosIncluidos": "6 boquillas: cilindros bidireccionales 30mm/40mm, cepillos alisadores y secador Coanda",
      "estuche": "Caja de almacenamiento en piel sintética acolchada con cierre magnético",
      "garantia": "Garantía oficial Dyson México de 2 años contra defectos"
    },
    "features": [
      "Rizos en ambas direcciones con un solo barril giratorio Coanda",
      "Acabado sedoso y brillante sin quemar la fibra capilar",
      "Incluye estuche de lujo acolchado y cepillo de limpieza de filtro",
      "Hasta 18 Mensualidades Sin Intereses con Tarjeta D'Avanti"
    ]
  },
  {
    "id": "beauty-5",
    "name": "Tom Ford Noir Extreme Parfum 100ml",
    "slug": "tom-ford-noir-extreme-parfum-100ml",
    "category": "belleza",
    "subcategory": "perfumeria-hombre",
    "brand": "Tom Ford",
    "department": "Belleza · Perfumería de Nicho",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 5890,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 142,
    "beautyType": "Parfum Oriental Ambarino",
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    "description": "Una intensificación audaz y opulenta del aroma original. Fusiona el jengibre picante de la India con el exótico acorde dulce de Kulfi oriental, envuelto en cuero negro y vainilla dorada de Madagascar para un magnetismo irresistible.",
    "sku": "TF-NOIR-EXT100",
    "inStock": true,
    "sizes": [
      "50 ml",
      "100 ml"
    ],
    "colors": [
      "Frasco Oro Metálico Espejo"
    ],
    "colorHex": [
      "#d97706"
    ],
    "specs": {
      "presentacion": "Frasco acanalado de cristal recubierto en oro metálico bruñido",
      "familia": "Oriental Amaderada Especiada",
      "notasSalida": "Cardamomo, Jengibre Shimoga de la India, Mandarina y Neroli",
      "notasCorazon": "Postre tradicional Kulfi, Azahar, Rosa, Jazmín y Mastic",
      "notasFondo": "Vainilla de Madagascar, Cuero negro, Gamuza, Haba tonka y Cedro",
      "concentracion": "Parfum Puro de Máxima Fijación (+16 horas)",
      "origen": "Fabricado en Estados Unidos / Suiza"
    },
    "features": [
      "Fórmula de perfumería de autor ultra exclusiva Tom Ford Private Blend",
      "Diseño arquitectónico con placa frontal metálica grabada",
      "Efecto envolvente con estela cálida y seductora",
      "Envío express asegurado en empaque negro mate con lacre"
    ]
  },
  {
    "id": "beauty-6",
    "name": "Yves Saint Laurent Libre Le Parfum 90ml",
    "slug": "ysl-libre-le-parfum-90ml",
    "category": "belleza",
    "subcategory": "perfumeria-mujer",
    "brand": "Yves Saint Laurent",
    "department": "Belleza · Perfumería Femenina",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 4190,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 265,
    "beautyType": "Le Parfum Floral Especiado",
    "image": "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
    "description": "La interpretación más cálida, ardiente y picante de la icónica lavanda floral de Libre. Un corazón de azafrán rojo de los Jardines Comunitarios Ourika de Marruecos combinado con azahar de Marruecos y miel de lavanda.",
    "sku": "YSL-LIB-LPF90",
    "inStock": true,
    "sizes": [
      "50 ml",
      "90 ml"
    ],
    "colors": [
      "Jugo Rojo Fuego & Oro"
    ],
    "colorHex": [
      "#991b1b"
    ],
    "specs": {
      "presentacion": "Frasco joya con la icónica Cassandre YSL dorada doblada sobre el cristal",
      "familia": "Floral Ambarina Especiada",
      "notasSalida": "Azafrán de Ourika, Jengibre fresco, Mandarina y Bergamota",
      "notasCorazon": "Flor de Azahar de Marruecos y Lavanda Diva de Francia",
      "notasFondo": "Vainilla Bourbon de Madagascar, Miel dorada, Vetiver y Haba Tonka",
      "concentracion": "Le Parfum Alta Concentración (duración +12 horas)",
      "origen": "París, Francia"
    },
    "features": [
      "Azafrán cosechado de forma sostenible por mujeres en las montañas de Marruecos",
      "Tapón negro asimétrico de alta costura inspirado en los esmóquines YSL",
      "Fragancia premiada internacionalmente como fragancia del año",
      "Muestra de lujo de 7.5ml incluida de regalo"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "beauty-7",
    "name": "La Mer Crème de la Mer Crema Hidratante Milagrosa 60ml",
    "slug": "la-mer-creme-de-la-mer-60ml",
    "category": "belleza",
    "subcategory": "cuidado-piel",
    "brand": "La Mer",
    "department": "Belleza · Skincare de Lujo Extremo",
    "badge": "Buen Fin -75%",
    "badgeType": "offer",
    "price": 2373,
    "originalPrice": 9490,
    "rating": 5,
    "reviewsCount": 198,
    "beautyType": "Crema Reparadora Celular",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    "description": "La legendaria crema que comenzó la leyenda. Formulada con el exclusivo elixir celular Miracle Broth™ derivado de algas marinas gigantes fermentadas, transforma visiblemente la piel, calmando rojeces, reparando la barrera y devolviendo la juventud eterna.",
    "sku": "LAMER-CRM-60",
    "inStock": true,
    "sizes": [
      "30 ml",
      "60 ml",
      "100 ml"
    ],
    "colors": [
      "Tarro de Porcelana Opalina Blanca"
    ],
    "colorHex": [
      "#f8fafc"
    ],
    "specs": {
      "ingredienteEstrella": "Miracle Broth™ fermentado bioenergético y Té de Lima antioxidante",
      "tipoPiel": "Piel seca a muy seca, piel madura o en proceso de recuperación",
      "metodoAplicacion": "Calentar entre las yemas de los dedos hasta volverse translúcida y aplicar a toques",
      "beneficios": "Regeneración celular, hidratación infinita, firmeza y alivio de irritaciones",
      "presentacion": "Tarro clásico de porcelana blanca con espátula dosificadora de resina",
      "origen": "Laboratorios Max Huber, Nueva York / Suiza"
    },
    "features": [
      "Algas kelp cosechadas a mano según las fases lunares en la costa de California",
      "Proceso de biofermentación de 3 a 4 meses con energía de luz y sonido",
      "Protege contra el estrés ambiental, la polución y la resequedad extrema",
      "Incluye ritual de muestras de regalo La Mer con tu pedido"
    ],
    "buenFinDiscount": 75,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 75% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "beauty-8",
    "name": "Charlotte Tilbury Magic Cream & Pillow Talk Luxury Palette Set",
    "slug": "charlotte-tilbury-magic-cream-pillow-talk-set",
    "category": "belleza",
    "subcategory": "maquillaje",
    "brand": "Charlotte Tilbury",
    "department": "Belleza · Maquillaje de Alta Gama",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 3950,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 167,
    "beautyType": "Dúo Preparación & Maquillaje",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    "description": "El secreto mejor guardado de los maquillistas de Hollywood. La crema hidratante iluminadora Magic Cream con complejo BioNymph Peptide combinada con la emblemática paleta de sombras de ojos de 4 tonos Pillow Talk para miradas soñadas.",
    "sku": "CT-MAG-PLW-SET",
    "inStock": true,
    "sizes": [
      "Crema 50ml + Paleta 4 Sombras"
    ],
    "colors": [
      "Pillow Talk Nude Rosa & Oro Rosa"
    ],
    "colorHex": [
      "#f43f5e"
    ],
    "specs": {
      "incluye": "Magic Cream 50ml en tarro recargable + Luxury Palette Pillow Talk",
      "acabado": "Piel jugosa 'Glow' satinada y sombras con destellos microperlas",
      "ingredientes": "Ácido Hialurónico, Vitaminas C y E, Aceite de Rosa Mosqueta y Aloe",
      "tonosSombra": "Prime (Champán suave), Enhance (Rosa cálido), Smoke (Marrón baya), Pop (Oro rosa destellos)",
      "duracion": "Fijación impecable de hasta 16 horas sin cuartearse",
      "origen": "Londres, Reino Unido / Hecho en Italia"
    },
    "features": [
      "Fórmula utilizada en modelos y celebridades antes de desfiles y alfombras rojas",
      "Efecto difuminador de poros instantáneo con luz envolvente",
      "Libre de crueldad animal certificado por Leaping Bunny",
      "Estuche dorado de coleccionista con espejo incorporado"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "beauty-9",
    "name": "Lancôme Advanced Génifique Serum Rejuvenecedor 50ml",
    "slug": "lancome-advanced-genifique-serum-50ml",
    "category": "belleza",
    "subcategory": "cuidado-piel",
    "brand": "Lancôme",
    "department": "Belleza · Cuidado Facial",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 3150,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 310,
    "beautyType": "Serum Activador del Microbioma",
    "image": "Productos 2/Lancôme Advanced Génifique Serum Rejuvenecedor 50ml.jpg",
    "description": "Inspirado en la ciencia del microbioma de la piel. Enriquecido con una fórmula patentada de 7 fracciones pre y probióticas, refuerza la barrera cutánea y mejora visiblemente la elasticidad, luminosidad y textura en tan solo 7 días.",
    "sku": "LAN-GEN-SER50",
    "inStock": true,
    "sizes": [
      "30 ml",
      "50 ml",
      "75 ml"
    ],
    "colors": [
      "Frasco Degradado Negro a Cristal"
    ],
    "colorHex": [
      "#1e293b"
    ],
    "specs": {
      "complejoActivo": "7 fracciones prebióticas y probióticas + Ácido Hialurónico + Vitamina Cg",
      "resultadosClinicos": "Barrera cutánea 77% más fuerte y recuperación acelerada",
      "aplicador": "Gotero autocargable que proporciona la dosis exacta con cada uso",
      "textura": "Ultraligera, acuosa y refrescante de absorción instantánea",
      "compatibilidad": "Apto para pieles sensibles, reactivas o en cambios de clima",
      "origen": "París, Francia"
    },
    "features": [
      "Gotero tecnológico patentado que carga la dosis precisa al girar la tapa",
      "Apto para aplicar de día y noche antes de tu crema hidratante",
      "Dermatológicamente probado en mujeres de todos los fototipos",
      "Recibe muestras premium Lancôme en cada compra"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "beauty-10",
    "name": "Bleu de Chanel Parfum 100ml",
    "slug": "bleu-de-chanel-parfum-100ml",
    "category": "belleza",
    "subcategory": "perfumeria-hombre",
    "brand": "Chanel",
    "department": "Belleza · Perfumería Masculina",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 4890,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 420,
    "beautyType": "Parfum Amaderado Aromático",
    "image": "Productos/Bleu de Chanel Parfum.jpg",
    "description": "La expresión más pura, majestuosa y sofisticada de Bleu de Chanel. Un sendero aromático intensamente amaderado que abre con frescor cítrico y continúa con una generosa profundidad de sándalo de Nueva Caledonia.",
    "sku": "CHNL-BLEU-PRF100",
    "inStock": true,
    "sizes": [
      "50 ml",
      "100 ml",
      "150 ml"
    ],
    "colors": [
      "Frasco Azul Profundo Enigmático"
    ],
    "colorHex": [
      "#091b29"
    ],
    "specs": {
      "presentacion": "Frasco monolítico de cristal tintado en azul noche con tapón magnético",
      "familia": "Amaderada Aromática Pura",
      "notasSalida": "Cáscara de Limón, Bergamota, Menta piperita y Artemisia",
      "notasCorazon": "Lavanda, Geranio, Piña y notas verdes crujientes",
      "notasFondo": "Sándalo de Nueva Caledonia raro, Cedro, Madera de ámbar e Iso E Super",
      "concentracion": "Parfum Concentrado (duración +14 horas)",
      "origen": "Neuilly-sur-Seine, París, Francia"
    },
    "features": [
      "Elaborado con madera de sándalo protegida y destilada con métodos sustentables",
      "Equilibrio perfecto entre elegancia formal y frescura moderna",
      "Tapón con cierre magnético y grabado del doble logo entrelazado de Chanel",
      "Envío asegurado en caja acolchada D'Avanti de alta perfumería"
    ]
  },
  {
    "id": "beauty-11",
    "name": "Carolina Herrera Good Girl Eau de Parfum Suprême 80ml",
    "slug": "carolina-herrera-good-girl-supreme-80ml",
    "category": "belleza",
    "subcategory": "perfumeria-mujer",
    "brand": "Carolina Herrera",
    "department": "Belleza · Perfumería Femenina",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 3890,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 295,
    "beautyType": "Eau de Parfum Oriental Goloso",
    "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    "description": "Atrevida, seductora y poderosa. La icónica fragancia del stiletto se reinventa con una fórmula intensamente golosa donde las bayas silvestres jugosas se mezclan con nardo afrodisíaco y haba tonka tostada con vetiver.",
    "sku": "CH-GG-SUP80",
    "inStock": true,
    "sizes": [
      "50 ml",
      "80 ml"
    ],
    "colors": [
      "Stiletto Negro Degradado con Purpurina Dorada"
    ],
    "colorHex": [
      "#171717"
    ],
    "specs": {
      "presentacion": "Frasco escultórico en forma de tacón de aguja stiletto con destellos de glitter",
      "familia": "Oriental Gourmand Floral",
      "notasSalida": "Bayas silvestres del bosque y Jazmín egipcio",
      "notasCorazon": "Nardo intoxicante y Flor de Azahar",
      "notasFondo": "Haba tonka tostada y Vetiver terroso profundo",
      "concentracion": "Eau de Parfum Suprême (duración 10-12 horas)",
      "origen": "Barcelona, España / Nueva York"
    },
    "features": [
      "Uno de los diseños de frasco más galardonados en la historia de la perfumería",
      "Estela hipnótica perfecta para fiestas, cócteles y salidas nocturnas",
      "Fórmula duradera con aceites florales y gourmands de alta tenacidad",
      "Envoltorio de regalo con lazo rojo y tarjeta de felicitación disponible"
    ]
  },
  {
    "id": "beauty-12",
    "name": "Dyson Supersonic Secadora de Cabello Inteligente Nural",
    "slug": "dyson-supersonic-nural-secadora",
    "category": "belleza",
    "subcategory": "cuidado-capilar",
    "brand": "Dyson",
    "department": "Belleza · Cuidado Capilar Tecnológico",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 12999,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 96,
    "beautyType": "Secadora con Sensores Nural",
    "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    "description": "La secadora de cabello más avanzada del planeta. Con red de sensores inteligentes Nural™ que ajusta automáticamente la temperatura para proteger la salud del cuero cabelludo y potenciar el brillo natural del cabello sin quemarlo jamás.",
    "sku": "DYS-SUPER-NURAL",
    "inStock": true,
    "sizes": [
      "Kit Completo con 5 Boquillas Magnéticas"
    ],
    "colors": [
      "Cerámica Pátina & Topacio Naranja",
      "Azul Vinca & Rosa"
    ],
    "colorHex": [
      "#0d9488",
      "#fb923c"
    ],
    "specs": {
      "tecnologiaSensores": "Modo de protección del cuero cabelludo que reduce el calor a 55°C al acercarse",
      "reconocimientoAccesorios": "Aprende y recuerda tus preferencias de calor y flujo para cada boquilla",
      "motor": "Dyson Digital V9 a 110,000 RPM con flujo de aire Air Multiplier™",
      "boquillasIncluidas": "Difusor Wave+Curl, Accesorio Flyaway anti-frizz, Peine de dientes anchos, Boquilla suave",
      "peso": "680 gramos ergonómicamente equilibrados en el mango",
      "garantia": "Garantía oficial Dyson de 2 años con reemplazo express"
    },
    "features": [
      "Secado ultrarrápido protegiendo la barrera de hidratación natural de la piel cabelluda",
      "Cápsula iluminada que cambia de color según la distancia y temperatura",
      "Detección de pausa: se apaga automáticamente al soltarla en el tocador",
      "Hasta 18 Mensualidades Sin Intereses con Tarjeta D'Avanti"
    ]
  },
  {
    "id": "beauty-13",
    "name": "Kérastase Elixir Ultime L'Huile Originale Oro Líquido 100ml",
    "slug": "kerastase-elixir-ultime-100ml",
    "category": "belleza",
    "subcategory": "cuidado-capilar",
    "brand": "Kérastase",
    "department": "Belleza · Tratamiento Capilar de Salón",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1690,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 388,
    "beautyType": "Aceite Sublimador Capilar Recargable",
    "image": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    "description": "El icónico aceite capilar multiusos para todo tipo de cabello. Enriquecido con extracto de camelia salvaje cosechada a mano en Bretaña y aceite de marula, aporta brillo radiante instantáneo, 96 horas de control anti-frizz y termoprotección hasta 230°C.",
    "sku": "KER-ELX-ULT100",
    "inStock": true,
    "sizes": [
      "50 ml",
      "100 ml"
    ],
    "colors": [
      "Frasco de Vidrio Recargable Dorado"
    ],
    "colorHex": [
      "#eab308"
    ],
    "specs": {
      "ingredientes": "Aceite de Camelia Sagrada de Bretaña, Aceite de Marula y Argán orgánico",
      "proteccionTermica": "Resistencia térmica comprobada hasta 230°C frente a planchas y secadoras",
      "beneficios": "+100% de brillo espejo inmediato y reducción de puntas abiertas",
      "textura": "Aceite seco que no apelmaza, no deja residuos grasos y se absorbe al instante",
      "sustentabilidad": "Nuevo envase de vidrio 95% reciclado con sistema de cartucho recargable",
      "origen": "París, Francia"
    },
    "features": [
      "Fragancia floral amaderada creada por maestros perfumistas franceses",
      "Puede utilizarse como prelavado, protector térmico previo al secado o serum de acabado",
      "Controla el encrespamiento incluso en climas con 80% de humedad ambiental",
      "Producto oficial con holograma de seguridad de L'Oréal Luxe México"
    ]
  },
  {
    "id": "beauty-14",
    "name": "NARS Light Reflecting Foundation & Radiant Creamy Concealer Dúo",
    "slug": "nars-light-reflecting-foundation-concealer-duo",
    "category": "belleza",
    "subcategory": "maquillaje",
    "brand": "NARS",
    "department": "Belleza · Maquillaje Rostro",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2250,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 176,
    "beautyType": "Base Híbrida Tratamiento + Corrector",
    "image": "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
    "description": "El combo perfecto para un cutis de piel real impecable. Base de maquillaje híbrida compuesta en 70% por ingredientes de skincare que refleja la luz natural, junto al corrector galardonado #1 por su cobertura cremosa de ojeras sin marcar líneas.",
    "sku": "NARS-LRF-RCC-DUO",
    "inStock": true,
    "sizes": [
      "Base 30ml + Corrector 6ml"
    ],
    "colors": [
      "Disponible en tonos Deauville, Punjab, Barcelona y Syracuse"
    ],
    "colorHex": [
      "#f5d0b5"
    ],
    "specs": {
      "formula": "Fórmula híbrida 70% skincare + 30% pigmentos fotográficos reflectores",
      "cobertura": "Media modulable con acabado natural translúcido luminoso",
      "ingredientes": "Avena peptídica, cardo mariano, polifenoles de cacao y cúrcuma",
      "corrector": "Radiant Creamy Concealer enriquecido con extracto de corteza de magnolia",
      "duracion": "16 horas de uso resistente a la transpiración y la humedad",
      "origen": "Shiseido Americas / Hecho en Estados Unidos y Japón"
    },
    "features": [
      "Fotogénica y a prueba de flash: no produce rebote blanco en fotografías",
      "Mejora la claridad y luminosidad de la piel con el uso continuo diario",
      "Fórmula no comedogénica aprobada por dermatólogos para uso diario",
      "Incluye esponja de precisión de microfibra de regalo"
    ]
  },
  {
    "id": "beauty-15",
    "name": "Kiehl's Ultra Facial Cream con Escualano 125ml",
    "slug": "kiehls-ultra-facial-cream-125ml",
    "category": "belleza",
    "subcategory": "cuidado-piel",
    "brand": "Kiehl's",
    "department": "Belleza · Cuidado Facial Hidratante",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1790,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 421,
    "beautyType": "Crema 24h Hidratación Profunda",
    "image": "Productos 2/Kiehl's Ultra Facial Cream con Escualano 125ml.jpg",
    "description": "La crema hidratante más aclamada de la botica neoyorquina desde 1851. Proporciona hidratación continua por 24 horas incluso en condiciones climáticas extremas. Formulada con Escualano vegetal de oliva y Glicoproteína Glacial de la Antártida.",
    "sku": "KHL-UFC-125",
    "inStock": true,
    "sizes": [
      "50 ml",
      "125 ml"
    ],
    "colors": [
      "Tarro Blanco Botica Clásico"
    ],
    "colorHex": [
      "#ffffff"
    ],
    "specs": {
      "ingredientesClave": "4.5% Escualano de oliva derivado sustentable y Glicoproteína Glacial antártica",
      "tipoPiel": "Todo tipo de piel, en especial pieles deshidratadas y expuestas a aire acondicionado",
      "textura": "Crema ultraligera de rápida absorción que duplica la hidratación al instante",
      "beneficios": "Barrera cutánea 47.9% más resistente en 1 hora tras su aplicación",
      "formula": "Sin fragancias artificiales, libre de parabenos y apta para piel sensible",
      "origen": "Kiehl's Since 1851, Nueva York, Estados Unidos"
    },
    "features": [
      "Probada en expediciones reales al Ártico y Groenlandia bajo climas subcero",
      "Absorción inmediata sin dejar brillo graso, ideal antes del maquillaje",
      "Tarro de gran tamaño de 125ml con rendimiento para más de 4 meses de uso",
      "Incluye 3 muestras botánicas Kiehl's de bienvenida"
    ]
  },
  {
    "id": "beauty-16",
    "name": "Fenty Beauty Gloss Bomb Universal Lip Luminizer Trío Colección",
    "slug": "fenty-beauty-gloss-bomb-trio",
    "category": "belleza",
    "subcategory": "maquillaje",
    "brand": "Fenty Beauty",
    "department": "Belleza · Labiales y Brillos",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1490,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 367,
    "beautyType": "Trío de Brillos Labiales Nutritivos",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
    "description": "El brillo labial definitivo creado por Rihanna. Trío de edición especial con los 3 tonos más universales del planeta: Fenty Glow (nude rosado), Fu$$y (rosa perlado) y Hot Chocolit (café destellos). Con manteca de karité acondicionadora y aroma a durazno.",
    "sku": "FB-GLOSS-TRIO",
    "inStock": true,
    "sizes": [
      "Kit 3 x 9ml Tamaño Completo"
    ],
    "colors": [
      "Fenty Glow · Fu$$y · Hot Chocolit"
    ],
    "colorHex": [
      "#be185d"
    ],
    "specs": {
      "contenido": "3 brillos labiales Gloss Bomb de tamaño completo de 9ml cada uno",
      "ingredientes": "Manteca de karité enriquecida, Vitamina E y microperlas reflectoras",
      "aplicador": "Varita XXL con aplicador acolchado para cobertura generosa en una sola pasada",
      "sensacion": "Labios instantáneamente más carnosos, suaves y brillantes sin pegajosidad",
      "aroma": "Fragancia adictiva de durazno y vainilla natural",
      "origen": "Fenty Beauty by Rihanna / Hecho en Estados Unidos"
    },
    "features": [
      "100% libre de crueldad animal y con fórmula vegana certificada",
      "Seleccionado personalmente por Rihanna para lucir espectacular en todos los tonos de piel",
      "Fórmula hidratante que nutre los labios secos a la vez que proporciona brillo espejo",
      "Presentado en caja de edición especial para regalo"
    ]
  },
  {
    "id": "sport-1",
    "name": "Nike Vaporfly 3 Tenis de Carrera Maratón de Élite",
    "slug": "nike-vaporfly-3-maraton-elite",
    "category": "deportes",
    "subcategory": "calzado",
    "brand": "Nike",
    "department": "Deportes · Calzado de Running",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 5999,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 218,
    "discipline": "Running & Maratón",
    "image": "Productos/Nike Vaporfly 3 Tenis de Carrera rosado.jpg",
    "description": "Los tenis de competición que rompieron récords mundiales. Con placa completa de fibra de carbono Flyplate y la espuma más reactiva de Nike, ZoomX, ofrecen un retorno de energía sin precedentes para tus carreras de 10K hasta maratón completo.",
    "sku": "NKE-VP3-RED42",
    "inStock": true,
    "sizes": [
      "25.5 MX",
      "26.0 MX",
      "26.5 MX",
      "27.0 MX",
      "27.5 MX",
      "28.0 MX",
      "28.5 MX",
      "29.0 MX"
    ],
    "colors": [
      "Rosa Flúor",
      "Rojo con Blanco",
      "Blanco con Amarillo"
    ],
    "colorHex": [
      "#ec4899",
      "#dc2626",
      "#facc15"
    ],
    "specs": {
      "placa": "Placa completa de fibra de carbono Flyplate de rigidez propulsora",
      "espuma": "Espuma ultraligera Nike ZoomX de máxima amortiguación y retorno",
      "upper": "Malla técnica Flyknit microperforada de ventilación biomecánica",
      "peso": "Aprox. 198 gramos (talla 27 MX)",
      "drop": "8 mm (38 mm talón / 30 mm antepié)",
      "suela": "Goma Waffle delgada con patrón geométrico antideslizante"
    },
    "features": [
      "Diseño aerodinámico optimizado para reducción del gasto cardíaco y fatiga muscular",
      "Placa curva que brinda sensación de despegue hacia adelante en cada zancada",
      "Talón acolchado con almohadillas internas para bloqueo sin rozaduras",
      "Aprobado por World Athletics para competencias oficiales y maratones olímpicos"
    ],
    "colorImages": {
      "Rosa Flúor": "Productos/Nike Vaporfly 3 Tenis de Carrera rosado.jpg",
      "Rojo con Blanco": "Productos/Nike Vaporfly 3 Tenis de Carrera rojo con blanco.jpg",
      "Blanco con Amarillo": "Productos/Nike Vaporfly 3 Tenis de Carrera blanco con amarillo.jpg"
    }
  },
  {
    "id": "sport-2",
    "name": "Adidas Ultraboost Light Tenis para Correr con Amortiguación Boost",
    "slug": "adidas-ultraboost-light-running",
    "category": "deportes",
    "subcategory": "calzado",
    "brand": "Adidas",
    "department": "Deportes · Calzado de Running",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 4299,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 312,
    "discipline": "Running & Entrenamiento Diario",
    "image": "Productos/Caminadora Eléctrica NordicTrack T Series.jpg",
    "description": "El Ultraboost más ligero jamás creado, con un 30% menos de peso en la cápsula Light BOOST. Diseñado para ofrecer una amortiguación nube superior y soporte reactivo en cada kilómetro sobre asfalto o caminadora.",
    "sku": "ADI-UB-LGT-BLK",
    "inStock": true,
    "sizes": [
      "25.0 MX",
      "26.0 MX",
      "26.5 MX",
      "27.0 MX",
      "27.5 MX",
      "28.0 MX",
      "29.0 MX"
    ],
    "colors": [
      "Negro Core & Blanco Boost",
      "Gris Nube & Coral"
    ],
    "colorHex": [
      "#18181b",
      "#94a3b8"
    ],
    "specs": {
      "amortiguacion": "Cápsula molecular Light BOOST 30% más ligera con retorno energético",
      "suela": "Caucho Continental™ de adherencia superior en piso seco y mojado",
      "sistemaEstabilidad": "Sistema Linear Energy Push (LEP) para mayor rigidez en la flexión",
      "corteSuperior": "Tejido adidas PRIMEKNIT+ confeccionado con hilo Parley Ocean Plastic",
      "drop": "10 mm (30 mm talón / 20 mm antepié)",
      "peso": "Aprox. 293 gramos"
    },
    "features": [
      "Amortiguación suprema que absorbe el impacto articular en asfalto",
      "Suela Continental de agarre extraordinario que previene resbalones en lluvia",
      "Parte superior que abraza el pie como un calcetín ergonómico adaptable",
      "Fabricado con al menos un 50% de materiales reciclados de los océanos"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "sport-3",
    "name": "Caminadora Eléctrica NordicTrack T Series con Inclinación y Pantalla HD",
    "slug": "caminadora-nordictrack-t-series-hd",
    "category": "deportes",
    "subcategory": "fitness",
    "brand": "NordicTrack",
    "department": "Deportes · Fitness & Máquinas de Gimnasio",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 22999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 88,
    "discipline": "Cardio & Gimnasio en Casa",
    "image": "Productos/Caminadora Eléctrica NordicTrack T Series.jpg",
    "description": "Caminadora profesional interactiva con motor de 3.0 CHP de alto torque. Cuenta con inclinación digital automática del 0% al 12%, velocidad de hasta 19 km/h, sistema de amortiguación FlexSelect que protege tus rodillas y pantalla táctil HD interactiva.",
    "sku": "NDT-TR-T75HD",
    "inStock": true,
    "sizes": [
      "Plegable SpaceSaver con EasyLift Assist"
    ],
    "colors": [
      "Negro Acero & Gris Titán"
    ],
    "colorHex": [
      "#27272a"
    ],
    "specs": {
      "motor": "Motor de 3.0 CHP DurX™ Commercial Plus silencioso con autoventilación",
      "inclinacion": "Control de inclinación digital motorizada de 0% a 12%",
      "velocidad": "0 a 19 km/h con botones OneTouch de acceso directo",
      "superficieCarrera": "Cinta ancha de 51 cm x 152 cm con absorción FlexSelect™",
      "pantalla": "Pantalla táctil HD de 7 pulgadas con conectividad Bluetooth para audio",
      "pesoMaximoUsuario": "Hasta 136 kg de capacidad garantizada"
    },
    "features": [
      "Diseño plegable SpaceSaver con pistón hidráulico EasyLift para ahorrar espacio",
      "Amortiguadores regulables que reducen el impacto en articulaciones hasta un 30%",
      "Altavoces estéreo duales de 2 pulgadas y soporte para tableta integrado",
      "Hasta 18 Meses Sin Intereses y servicio de entrega a domicilio asegurado"
    ]
  },
  {
    "id": "sport-4",
    "name": "Mancuernas Ajustables Bowflex SelectTech 552 (2 a 24 kg Par)",
    "slug": "mancuernas-ajustables-bowflex-selecttech-552",
    "category": "deportes",
    "subcategory": "fitness",
    "brand": "Bowflex",
    "department": "Deportes · Pesas & Fuerza",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 10499,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 265,
    "discipline": "Crossfit, Fuerza & Hipertrofia",
    "image": "Productos/Mancuernas Ajustables Bowflex SelectTech 552.jpg",
    "description": "Reemplaza 15 pares de mancuernas tradicionales con un solo sistema compacto. Con solo girar el dial lateral seleccionas pesos desde 2 kg hasta 24 kg por mancuerna en incrementos progresivos, manteniendo tu espacio limpio y ordenado.",
    "sku": "BWX-MAN-ST552",
    "inStock": true,
    "sizes": [
      "Par Completo con Bases de Reposo"
    ],
    "colors": [
      "Negro Mate & Rojo"
    ],
    "colorHex": [
      "#dc2626"
    ],
    "specs": {
      "rangoPeso": "De 2 a 24 kg (5 a 52.5 lbs) por cada mancuerna",
      "incrementos": "2, 3, 4, 5, 7, 8, 9, 11, 14, 16, 18, 20, 23 y 24 kg",
      "sistemaAjuste": "Selector de dial giratorio mecánico con trinquete de bloqueo de seguridad",
      "material": "Placas de acero mecanizado recubiertas con polímero termoplástico antirruido",
      "dimensiones": "43 cm de largo x 21 cm de ancho x 23 cm de alto cada una",
      "incluye": "2 mancuernas graduables + 2 bandejas de soporte ergonómicas"
    },
    "features": [
      "Ahorra el espacio de 30 mancuernas pesadas en un rincón de tan solo 1 m²",
      "Recubrimiento especial que evita ruidos metálicos y no raya el piso de tu hogar",
      "Empuñadura ergonómica de agarre texturizado antideslizante",
      "Garantía oficial de 2 años en discos y mecanismo de selección"
    ]
  },
  {
    "id": "sport-5",
    "name": "Bicicleta de Montaña Trek Marlin 7 Gen 3 Aro 29 Cuadro Aluminio Alpha",
    "slug": "bicicleta-montana-trek-marlin-7-gen3",
    "category": "deportes",
    "subcategory": "ciclismo",
    "brand": "Trek",
    "department": "Deportes · Ciclismo & Montaña",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 21999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 74,
    "discipline": "Ciclismo MTB & Senderos",
    "image": "Productos/bicicleta de montaña negra.jpg",
    "description": "La bicicleta de montaña que domina cualquier sendero. Construida con cuadro ligero de Aluminio Alpha Silver con guiado interno de cables, suspensión delantera RockShox Judy con bloqueo hidráulico, transmisión 1x10 Shimano Deore y frenos de disco hidráulicos.",
    "sku": "TRK-MAR7-G3-29",
    "inStock": true,
    "sizes": [
      "Talla M (1.65 - 1.76m)",
      "Talla ML (1.73 - 1.80m)",
      "Talla L (1.77 - 1.88m)"
    ],
    "colors": [
      "Negro Mate",
      "Blanco Glaciar",
      "Naranja Lava",
      "Rojo & Naranja Sport"
    ],
    "colorHex": [
      "#18181b",
      "#f4f4f5",
      "#ea580c",
      "#dc2626"
    ],
    "specs": {
      "cuadro": "Aluminio Alpha Silver con geometría Trail moderna y cableado interno",
      "suspension": "RockShox Judy Silver con resorte Solo Air, bloqueo TurnKey y 100mm de recorrido",
      "transmision": "Shimano Deore M5120 de 10 velocidades 1x10 con embrague Shadow Plus",
      "frenos": "Frenos de disco hidráulicos Shimano MT200 con rotores de 180/160 mm",
      "ruedas": "Bontrager Kovee tubeless ready con llantas Bontrager XT3 de 29 x 2.40 pulgadas",
      "pesoTotal": "Aprox. 13.8 kg con pedales de plataforma de nylon"
    },
    "features": [
      "Geometría más larga y relajada que brinda estabilidad y confianza en descensos pronunciados",
      "Transmisión 1x monoplatón simple y eficiente sin ruidos de desviador delantero",
      "Puntos de montaje para portabultos, salpicaderas y soporte de pata lateral",
      "Garantía de por vida en el cuadro respaldada por Trek Bicycle México"
    ],
    "colorImages": {
      "Negro Mate": "Productos/bicicleta de montaña negra.jpg",
      "Blanco Glaciar": "Productos/bicicleta de montaña blanca.jpg",
      "Naranja Lava": "Productos/bicicleta de montaña naranja.jpg",
      "Rojo & Naranja Sport": "Productos/bicicleta de montaña roja y naranja.jpg"
    }
  },
  {
    "id": "sport-6",
    "name": "Pala de Pádel Bullpadel Hack 03 Pro Paquito Navarro Carbono 12K",
    "slug": "pala-padel-bullpadel-hack-03-pro",
    "category": "deportes",
    "subcategory": "raqueta",
    "brand": "Bullpadel",
    "department": "Deportes · Pádel & Raquetas",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 7299,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 146,
    "discipline": "Pádel Profesional",
    "image": "Productos/pala de padel bullpadel.jpg",
    "description": "La pala oficial del ídolo Paquito Navarro en el circuito mundial. Diseñada en forma de diamante para ofrecer máxima potencia en el remate sin perder control gracias al carbono Tricarbon 12K y el núcleo MultiEva de dos densidades.",
    "sku": "BUL-HACK03-PRO",
    "inStock": true,
    "sizes": [
      "Peso Estándar (365 - 375g)"
    ],
    "colors": [
      "Negro Carbón & Naranja Neón"
    ],
    "colorHex": [
      "#ea580c"
    ],
    "specs": {
      "forma": "Forma de Diamante de balance alto para pegada potente",
      "caras": "Fibra de carbono combinada Tricarbon 12K de alta resistencia",
      "nucleo": "Goma MultiEva de doble densidad (exterior compacta, interior suave)",
      "marco": "Marco CarbonTube 100% fibra de carbono bidireccional",
      "tecnologias": "Air React Channel, Protector de aluminio Metalshield, Grip Hesacore y Vibradrive",
      "peso": "365 a 375 gramos personalizable con pesas CustomWeight"
    },
    "features": [
      "Canal de aire aerodinámico Air React Channel que aumenta la velocidad de salida de bola",
      "Grip Hesacore premontado que reduce vibraciones y previene lesiones de codo de tenista",
      "Acabado rugoso 3D Grain para imprimir efectos endemoniados a la pelota",
      "Incluye funda térmica de lujo oficial Bullpadel de regalo"
    ]
  },
  {
    "id": "sport-7",
    "name": "Tienda de Campaña Coleman Instant Cabin 6 Personas WeatherTec",
    "slug": "tienda-campana-coleman-instant-cabin-6p",
    "category": "deportes",
    "subcategory": "outdoor",
    "brand": "Coleman",
    "department": "Deportes · Camping & Senderismo",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 5699,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 189,
    "discipline": "Camping & Aventura Outdoor",
    "image": "Productos/Tienda de Campaña Coleman Instant Cabin.jpg",
    "description": "Ármala en solo 60 segundos gracias a sus varillas telescópicas preinstaladas. Con sistema patentado WeatherTec de pisos soldados y costuras invertidas que mantienen el agua afuera incluso en tormentas fuertes, y espacio para 2 colchones inflables Queen.",
    "sku": "COL-CAB-6PINST",
    "inStock": true,
    "sizes": [
      "Capacidad 6 Personas (3.05 x 2.74 m)"
    ],
    "colors": [
      "Verde Bosque & Gris Piedra"
    ],
    "colorHex": [
      "#166534"
    ],
    "specs": {
      "dimensiones": "3.05 m de largo x 2.74 m de ancho x 1.83 m de altura al centro",
      "tiempoMontaje": "Armado express en menos de 1 minuto con postes integrados",
      "materialTejido": "Poliéster 150D Polyguard resistente al desgarre con protección UVGuard™",
      "impermeabilidad": "Sistema WeatherTec con esquinas soldadas y piso tipo tina impermeable",
      "ventilacion": "Ventanas amplias con mosquitero ultrafino y ventilación de piso Ground Vent",
      "pesoTotal": "11.2 kg con bolsa de transporte expandible con ruedas"
    },
    "features": [
      "Techo alto de 1.83 metros que permite estar de pie cómodamente dentro de la tienda",
      "Bolsillo organizador interno de malla para linternas, celulares y llaves",
      "Bolsa de transporte resistente con cremallera rip-strip para fácil guardado",
      "Resistencia comprobada a ráfagas de viento de más de 55 km/h"
    ],
    "gallery": [
      "Productos/Tienda de Campaña Coleman Instant Cabin 1.jpg",
      "Productos/Tienda de Campaña Coleman Instant Cabin 2.jpg",
      "Productos/Tienda de Campaña Coleman Instant Cabin 3.jpg"
    ]
  },
  {
    "id": "sport-8",
    "name": "Termo Stanley Quencher H2.0 FlowState 1.18L / 40oz Acero Inoxidable",
    "slug": "termo-stanley-quencher-h20-40oz",
    "category": "deportes",
    "subcategory": "outdoor",
    "brand": "Stanley",
    "department": "Deportes · Hidratación & Accesorios",
    "badge": "Buen Fin -75%",
    "badgeType": "offer",
    "price": 350,
    "originalPrice": 1399,
    "rating": 5,
    "reviewsCount": 489,
    "discipline": "Fitness, Gym & Uso Diario",
    "image": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L.jpg",
    "description": "El vaso térmico más popular del planeta. Fabricado con acero inoxidable reciclado al 90%, aislamiento al vacío de doble pared que mantiene tus bebidas frías por 11 horas (o heladas por 2 días) y tapa FlowState giratoria de 3 posiciones con popote reutilizable.",
    "sku": "STY-QNCH-40-CRM",
    "inStock": true,
    "sizes": [
      "40 oz / 1.18 Litros"
    ],
    "colors": [
      "Verde Salvia Original",
      "Negro Mate",
      "Rosa Cuarzo",
      "Gris Glaciar",
      "Rojo Escarlata"
    ],
    "colorHex": [
      "#a7f3d0",
      "#18181b",
      "#fbcfe8",
      "#cbd5e1",
      "#dc2626"
    ],
    "specs": {
      "capacidad": "1.18 litros (40 onzas líquidas)",
      "rendimientoTermico": "11 horas frío / 7 horas caliente / 48 horas con hielo",
      "material": "Acero inoxidable de grado alimenticio 18/8 90% reciclado libre de BPA",
      "tapa": "Tapa FlowState™ de 3 posiciones: apertura para popote, para beber directo y cubierta total",
      "compatibilidad": "Base cónica delgada que cabe en los portavasos de casi cualquier automóvil",
      "limpieza": "Apto para lavavajillas sin perder color ni acabado mate"
    },
    "features": [
      "Asa ergonómica de agarre suave con insertos de silicona confortables",
      "Popote reutilizable incluido a juego con el tono del termo",
      "Sello hermético que previene salpicaduras durante el ejercicio o traslados",
      "Garantía de por vida Stanley Built for Life™ contra defectos térmicos"
    ],
    "offerTitle": "🔥 BUEN FIN MÁGICO · 75% OFF",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-21T23:59:59-06:00",
    "colorImages": {
      "Verde Salvia Original": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L.jpg",
      "Negro Mate": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L negro.jpg",
      "Rosa Cuarzo": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L rosa.jpg",
      "Gris Glaciar": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L gris.jpg",
      "Rojo Escarlata": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L  rojo.jpg"
    },
    "buenFinDiscount": 75
  },
  {
    "id": "sport-9",
    "name": "Jersey Oficial Selección Mexicana de Fútbol Adidas Versión Jugador Heat.RDY",
    "slug": "jersey-seleccion-mexicana-adidas-jugador",
    "category": "deportes",
    "subcategory": "ropa-tecnica",
    "brand": "Adidas",
    "department": "Deportes · Ropa Técnica & Fútbol",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 165,
    "discipline": "Fútbol & Deporte en Equipo",
    "image": "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=80",
    "description": "El mismo jersey que visten los seleccionados nacionales en la cancha. Confeccionado con tejido ultra transpirable con tecnología Heat.RDY que maximiza el flujo de aire y detalles termotransferidos ultraligeros que reducen el peso y la fricción.",
    "sku": "ADI-MEX-JUG26",
    "inStock": true,
    "sizes": [
      "Chica (S)",
      "Mediana (M)",
      "Grande (L)",
      "Extra Grande (XL)"
    ],
    "colors": [
      "Verde Bandera Oficial",
      "Pavo Real & Borgoña"
    ],
    "colorHex": [
      "#15803d",
      "#7f1d1d"
    ],
    "specs": {
      "tecnologia": "HEAT.RDY de enfriamiento activo y microventilación cortada por láser",
      "escudo": "Escudo de la Federación Mexicana de Fútbol termoadherido en 3D ultraliviano",
      "corte": "Corte atlético ajustado de alto rendimiento para competición profesional",
      "material": "100% poliéster reciclado de punto doble de alta tenacidad",
      "detalles": "Cuello acanalado ergonómico y dobladillo curvo para cobertura al correr",
      "origen": "Producto Oficial Licenciado por la FMF"
    },
    "features": [
      "Idéntico al usado en la Copa América y eliminatorias mundialistas",
      "Material que absorbe el sudor y se seca en cuestión de minutos",
      "Costuras planas que eliminan roces en el pecho y hombros",
      "Etiqueta de autenticidad holográfica numerada de Adidas Oficial"
    ]
  },
  {
    "id": "sport-10",
    "name": "Reloj Deportivo GPS Garmin Forerunner 265 Pantalla AMOLED y Pulsómetro",
    "slug": "garmin-forerunner-265-gps-reloj",
    "category": "deportes",
    "subcategory": "calzado",
    "brand": "Garmin",
    "department": "Deportes · Wearables & Tecnología Running",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 9999,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 112,
    "discipline": "Running, Triatlón & Ciclismo",
    "image": "Productos 2/reloj inteligente para hombre color negro.jpg",
    "description": "Entrena de forma más inteligente con su brillante pantalla táctil AMOLED de 1.3 pulgadas. Proporciona métricas avanzadas de entrenamiento como dinámica de carrera en muñeca, potencia de zancada, estado de variabilidad de frecuencia cardíaca (VFC) y batería de hasta 13 días.",
    "sku": "GRM-FR265-BLK",
    "inStock": true,
    "sizes": [
      "Caja 46mm Pantalla 1.3\""
    ],
    "colors": [
      "Negro Carbón GPS",
      "Rosa Cuarzo Smart"
    ],
    "colorHex": [
      "#09090b",
      "#f472b6"
    ],
    "specs": {
      "pantalla": "AMOLED táctil a color de 1.3 pulgadas ultra nítida con cristal Gorilla Glass 3",
      "bateria": "Hasta 13 días en modo smartwatch / 20 horas con GPS activado continuo",
      "sensores": "GPS multibanda, monitor de pulso cardíaco Elevate V4, oxímetro Pulse Ox y altímetro",
      "metricasAvanzadas": "VO2 Máx, tiempo de recuperación, carga de entrenamiento y Training Readiness",
      "musica": "Almacenamiento para más de 500 canciones de Spotify, Amazon Music o Deezer sin celular",
      "resistenciaAgua": "5 ATM (sumergible hasta 50 metros para natación)"
    },
    "features": [
      "Informe matutino diario con resumen de sueño, recuperación y pronóstico meteorológico",
      "Planes de entrenamiento adaptables gratuitos con Garmin Coach para 5K, 10K y 21K",
      "Pagos contactless Garmin Pay directo desde el reloj en terminales bancarias",
      "Hasta 18 Mensualidades Sin Intereses con Tarjeta D'Avanti"
    ],
    "colorImages": {
      "Negro Carbón GPS": "Productos 2/reloj inteligente para hombre color negro.jpg",
      "Rosa Cuarzo Smart": "Productos 2/reloj inteligente para mujer color rosa.jpg"
    }
  },
  {
    "id": "sport-11",
    "name": "Bicicleta Fija de Spinning Profesional Magnética con Volante de Inercia 18kg",
    "slug": "bicicleta-spinning-profesional-magnetica-18kg",
    "category": "deportes",
    "subcategory": "fitness",
    "brand": "D'Avanti Pro Sport",
    "department": "Deportes · Ciclismo Indoor & Cardio",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 11999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 94,
    "discipline": "Spinning & Cardio Intensivo",
    "image": "Productos 2/Bicicleta Fija de Spinning Profesional Magnética con Volante de Inercia 18kg.jpg",
    "description": "Entrenamiento de estudio en la comodidad de tu hogar. Equipada con resistencia magnética silenciosa de precisión, volante de inercia de acero de 18 kg para pedaleo suave, transmisión por banda Poly-V sin mantenimiento y conectividad Bluetooth con apps como Zwift y Kinomap.",
    "sku": "SPO-SPIN-MAG18",
    "inStock": true,
    "sizes": [
      "Cuadro Ajustable Multiusuario (1.50 - 1.95m)"
    ],
    "colors": [
      "Negro Mate con Detalles Oro D'Avanti"
    ],
    "colorHex": [
      "#09090b"
    ],
    "specs": {
      "volanteInercia": "Disco de acero equilibrado con peso de inercia de 18 kg",
      "resistencia": "Sistema de frenado magnético silencioso de 100 niveles micrométricos",
      "transmision": "Correa de transmisión por correa Poly-V de tracción ultrasilenciosa",
      "ajustes": "Asiento ergonómico 4-vías (alto/profundidad) y manubrio multiposición ajustable",
      "conectividad": "Bluetooth FTMS compatible con Zwift, Peloton App y Rouvy",
      "capacidadCarga": "Estructura de acero reforzado que soporta hasta 150 kg"
    },
    "features": [
      "Soporte acolchado para iPad/tablet y botellero de aluminio incluidos",
      "Pedales dobles: clips para calzado deportivo estándar y calas SPD para zapatillas de ciclismo",
      "Ruedas delanteras de transporte para moverla fácilmente por la habitación",
      "Monitor LCD que registra tiempo, distancia, calorías quemadas, velocidad y pulso"
    ]
  },
  {
    "id": "sport-12",
    "name": "Raqueta de Tenis Wilson Pro Staff 97 v14 Grafito Trenzado",
    "slug": "raqueta-tenis-wilson-pro-staff-97-v14",
    "category": "deportes",
    "subcategory": "raqueta",
    "brand": "Wilson",
    "department": "Deportes · Tenis & Raquetas",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 5999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 86,
    "discipline": "Tenis de Competición",
    "image": "Productos 2/Raqueta de Tenis Wilson Pro Staff 97 v14 Grafito Trenzado.jpg",
    "description": "La heredera de la legendaria raqueta de Roger Federer. Con construcción Braid 45 que orienta las fibras de grafito a 45 grados para una sensación de impacto suprema y estabilidad torsional incomparable en cada golpe plano o con efecto.",
    "sku": "WIL-PS97-V14",
    "inStock": true,
    "sizes": [
      "Puño 4 1/4 (G2)",
      "Puño 4 3/8 (G3)",
      "Puño 4 1/2 (G4)"
    ],
    "colors": [
      "Cobre Bronce Metálico Iridiscente"
    ],
    "colorHex": [
      "#78350f"
    ],
    "specs": {
      "tamanoCabeza": "626 cm² / 97 pulgadas cuadradas de precisión quirúrgica",
      "pesoSinCuerda": "315 gramos de masa equilibrada",
      "patronEncordado": "16 x 19 para combinación balanceada de potencia y efectos",
      "balance": "31 cm / 10 pts HL (balance hacia el mango para maniobrabilidad rápida)",
      "tecnologia": "Construcción Braid 45 conParadigm Bending para flexión optimizada del marco",
      "material": "Grafito trenzado con fibras de aramida de alta densidad"
    },
    "features": [
      "Color cobrizo elegante que cambia de tono bajo la luz natural del sol",
      "Sensación clásica de control milimétrico al contacto con la pelota",
      "Tapa ergonómica de extremo suave para mayor confort en el saque y revés",
      "Encordado profesional opcional de cortesía disponible en boutiques D'Avanti"
    ]
  },
  {
    "id": "sport-13",
    "name": "Mochila de Senderismo y Montañismo Osprey Atmos AG 50L Antigravedad",
    "slug": "mochila-montanismo-osprey-atmos-ag-50l",
    "category": "deportes",
    "subcategory": "outdoor",
    "brand": "Osprey",
    "department": "Deportes · Montañismo & Mochilas",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 7299,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 134,
    "discipline": "Trekking & Senderismo",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    "description": "La mochila de expedición más cómoda del mundo. Su revolucionaria suspensión de malla continua AntiGravity™ envuelve tu espalda y cadera distribuyendo la carga de manera ingrávida y permitiendo ventilación 3D total en travesías de 2 a 5 días.",
    "sku": "OSP-ATMOS-50L",
    "inStock": true,
    "sizes": [
      "Talla S/M (Torso 43-52 cm)",
      "Talla L/XL (Torso 49-58 cm)"
    ],
    "colors": [
      "Gris Ventisca & Azul Noche",
      "Verde Abeto"
    ],
    "colorHex": [
      "#0284c7",
      "#14532d"
    ],
    "specs": {
      "capacidad": "50 litros de volumen de carga útil",
      "sistemaSuspension": "Malla continua suspendida AntiGravity™ 3D desde la espalda hasta el cinturón lumbar",
      "ajuste": "Sistema Fit-on-the-Fly en hombreras y cinturón lumbar para ajuste a medida en ruta",
      "fundaLluvia": "Funda impermeable integrada de alta visibilidad incluida en bolsillo inferior",
      "compartimentos": "Acceso superior y lateral con cremallera curva, división para bolsa de dormir y funda para hidratación",
      "pesoVacio": "Aprox. 2.0 kg confeccionada con nylon reciclado de alta resistencia 210D"
    },
    "features": [
      "Sistema de sujeción para bastones de trekking Stow-on-the-Go sin quitarse la mochila",
      "Respaldada por la famosa garantía de por vida All Mighty Guarantee de Osprey",
      "Tejidos con certificación bluesign® libres de químicos perfluorados (PFC/PFAS)",
      "Bolsillos dobles con cremallera en el cinturón lumbar para barritas y teléfono"
    ]
  },
  {
    "id": "sport-14",
    "name": "Tenis de Baloncesto Air Jordan 1 Retro High OG Piel Genuina",
    "slug": "tenis-air-jordan-1-retro-high-og",
    "category": "deportes",
    "subcategory": "calzado",
    "brand": "Nike",
    "department": "Deportes · Baloncesto & Calzado Urbano",
    "badge": "Buen Fin -60%",
    "badgeType": "offer",
    "price": 1960,
    "originalPrice": 4899,
    "rating": 5,
    "reviewsCount": 387,
    "discipline": "Basketball & Streetwear",
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    "description": "La silueta que cambió la historia del básquetbol y la cultura urbana en 1985. Confeccionada con paneles de piel genuina de alta calidad, cuello acolchado de soporte al tobillo, la icónica unidad de amortiguación Air-Sole encapsulada y el logotipo Wings estampado.",
    "sku": "JDN-AJ1-HIGH-CHI",
    "inStock": true,
    "sizes": [
      "25.5 MX",
      "26.0 MX",
      "26.5 MX",
      "27.0 MX",
      "27.5 MX",
      "28.0 MX",
      "28.5 MX",
      "29.0 MX"
    ],
    "colors": [
      "Rojo Chicago & Blanco / Negro",
      "Royal Blue & Negro"
    ],
    "colorHex": [
      "#b91c1c",
      "#1d4ed8"
    ],
    "specs": {
      "materialCorte": "Piel natural de primera flor suave y duradera con puntera perforada",
      "amortiguacion": "Unidad Air-Sole encapsulada en el talón para absorción de impactos",
      "suela": "Goma sólida con ranuras de flexión profundas y punto de pivote circular clásico",
      "cuello": "Perfil alto High OG acolchado que abraza y protege el tobillo",
      "accesorios": "Incluye dos juegos de agujetas de repuesto (negro y blanco)",
      "origen": "Edición Limitada Coleccionista Jordan Brand"
    },
    "features": [
      "Autenticidad 100% garantizada con caja original con logotipo Nike Air",
      "Tracción legendaria en duela de madera pulida y asfalto urbano",
      "Emblema Wings en relieve en el lateral del cuello del tobillo",
      "Uno de los modelos más cotizados y reconocibles de la historia del deporte"
    ],
    "buenFinDiscount": 60,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 60% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "sport-15",
    "name": "Banco de Pesas Multifuncional Multiposición Reclinable Profesional",
    "slug": "banco-pesas-multifuncional-multiposicion",
    "category": "deportes",
    "subcategory": "fitness",
    "brand": "D'Avanti Pro Sport",
    "department": "Deportes · Pesas & Gimnasio en Casa",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 4499,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 154,
    "discipline": "Hipertrofia, Mancuernas & Pecho",
    "image": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    "description": "La pieza central para cualquier gimnasio en casa. Con 7 posiciones de respaldo (declinado, plano, inclinado hasta 90°) y 3 posiciones de asiento, estructura de tubo de acero comercial de calibre pesado y tapizado con espuma de alta densidad resistente al sudor.",
    "sku": "SPO-BNC-MULTI7",
    "inStock": true,
    "sizes": [
      "Estructura Reforzada Ajustable (125 x 45 x 115 cm)"
    ],
    "colors": [
      "Negro Mate & Cuero Sintético Carbono"
    ],
    "colorHex": [
      "#1c1917"
    ],
    "specs": {
      "posicionesRespaldo": "7 ángulos ajustables: -20° (declinado), 0° (plano), 30°, 45°, 60°, 75° y 90° militar",
      "posicionesAsiento": "3 ángulos ergonómicos que evitan que el usuario se resbale al inclinar",
      "capacidadCarga": "Hasta 350 kg de peso total garantizado (usuario + mancuernas)",
      "espumaAcolchado": "Espuma de alta densidad de 6 cm de grosor indeformable",
      "tapizado": "Cuero sintético de poliuretano antideslizante con costuras reforzadas a prueba de sudor",
      "movilidad": "Ruedas de transporte integradas y mango delantero para traslado sin esfuerzo"
    },
    "features": [
      "Permite realizar press de pecho plano e inclinado, press militar, remo y abdominales",
      "Base ancha triangular que no se tambalea con cargas pesadas",
      "Acabado con pintura electrostática en polvo negro mate resistente a rayones",
      "Fácil ensamblaje en menos de 20 minutos con herramientas incluidas"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "sport-16",
    "name": "Playera de Compresión Nike Pro Dri-FIT Tight Fit Manga Larga",
    "slug": "playera-compresion-nike-pro-dri-fit",
    "category": "deportes",
    "subcategory": "ropa-tecnica",
    "brand": "Nike",
    "department": "Deportes · Ropa Técnica & Fitness",
    "badge": "Buen Fin -50%",
    "badgeType": "offer",
    "price": 550,
    "originalPrice": 1099,
    "rating": 4.9,
    "reviewsCount": 245,
    "discipline": "Crossfit, Running & Gym",
    "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
    "description": "Capa base de compresión ligera que te mantiene fresco, seco y concentrado en tus entrenamientos más intensos. Confeccionada con tejido elástico con tecnología Dri-FIT y paneles de malla transpirable en la espalda y costados para máxima ventilación.",
    "sku": "NKE-PRO-CMP-BLK",
    "inStock": true,
    "sizes": [
      "Chica (S)",
      "Mediana (M)",
      "Grande (L)",
      "Extra Grande (XL)"
    ],
    "colors": [
      "Negro Obsidian",
      "Blanco Puro",
      "Gris Carbón"
    ],
    "colorHex": [
      "#09090b",
      "#f8fafc",
      "#4b5563"
    ],
    "specs": {
      "tecnologia": "Nike Dri-FIT que capilariza el sudor para evaporación rápida",
      "ajuste": "Tight Fit de compresión que proporciona soporte muscular a brazos y torso",
      "panelesVentilacion": "Malla transpirable en zonas de alto calor (espalda y axilas)",
      "costuras": "Costuras planas ergonómicas que previenen irritaciones y rozaduras",
      "elasticidad": "Tejido elástico de 4 vías que permite total libertad de movimiento",
      "material": "90% poliéster reciclado, 10% elastano"
    },
    "features": [
      "Ideal como primera capa en invierno o prenda única en gimnasio y carreras",
      "Banda elástica con grabado Nike Pro en el cuello que mantiene la forma lavada tras lavada",
      "Secado ultrarrápido y tecnología que inhibe malos olores",
      "Logotipo clásico Swoosh termotransferido en el centro del pecho"
    ],
    "buenFinDiscount": 50,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 50% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "home-1",
    "name": "Cafetera Espresso Automática Barista Touch con Molino Integrado",
    "slug": "cafetera-espresso-automatica-barista-touch-breville",
    "category": "hogar",
    "subcategory": "electrodomesticos",
    "brand": "Breville",
    "department": "Hogar · Gourmet & Café",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 22499,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 95,
    "image": "Productos/Cafetera Espresso Automática Barista Touch.jpg",
    "description": "Rendimiento barista profesional con pantalla táctil intuitiva a color. Muele los granos en segundos, dosifica la cantidad exacta, controla la temperatura digital PID y texturiza automáticamente la leche con microespuma sedosa para latte art.",
    "sku": "HGR-BREV-TOUCH",
    "inStock": true,
    "sizes": [
      "Capacidad 2L (Acero Inox)"
    ],
    "colors": [
      "Acero Inoxidable Cepillado",
      "Negro Trufa"
    ],
    "colorHex": [
      "#e2e8f0",
      "#18181b"
    ],
    "specs": {
      "presion": "Bomba italiana de 15 bares con preinfusión a baja presión",
      "molino": "Muelas cónicas de acero templado con 30 ajustes de molienda",
      "pantalla": "Pantalla táctil a color con 8 perfiles personalizados",
      "calentamiento": "Sistema ThermoJet que alcanza temperatura óptima en 3 segundos",
      "vaporizador": "Lanza de vapor automática con auto-purga y ajuste de temperatura"
    },
    "features": [
      "Extracción precisa con control digital de temperatura PID (±1°C)",
      "Texturizado de leche automático que crea microespuma calidad de cafetería",
      "Menú preprogramado para Espresso, Americano, Latte, Flat White y Cappuccino",
      "Incluye portafiltro de 54 mm en acero inoxidable y prensador magnético integrado"
    ]
  },
  {
    "id": "home-2",
    "name": "Batería de Cocina Esmaltada 10 Piezas en Hierro Fundido Vitrificado",
    "slug": "bateria-cocina-esmaltada-10-piezas-le-creuset",
    "category": "hogar",
    "subcategory": "cocina",
    "brand": "Le Creuset",
    "department": "Hogar · Cocina & Culinaria",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 17299,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 68,
    "image": "Productos/Batería de Cocina Esmaltada.jpg",
    "description": "La cumbre de la cocina francesa. Fabricada en hierro fundido esmaltado que distribuye y retiene el calor de manera insuperable. Acabado vitrificado ultrarresistente que no absorbe olores ni sabores y permite cocinar a fuego lento con resultados extraordinarios.",
    "sku": "HGR-LECR-10SET",
    "inStock": true,
    "sizes": [
      "Set 10 Piezas Gourmet"
    ],
    "colors": [
      "Rojo Volcánico",
      "Azul Marsella",
      "Crema Meringue"
    ],
    "colorHex": [
      "#b91c1c",
      "#1d4ed8",
      "#fef3c7"
    ],
    "specs": {
      "material": "Hierro fundido vitrificado de máxima densidad",
      "piezas": "Cocotte redonda 24 cm, Cacerola 20 cm, Sartén Skillet 26 cm y 4 tapas herméticas",
      "compatibilidad": "Apta para inducción, gas, vitrocerámica y horno hasta 260°C",
      "limpieza": "Esmalte interior satinado de fácil lavado, apto para lavavajillas",
      "garantia": "Garantía de por vida directa de fabricante Le Creuset"
    },
    "features": [
      "Retención de calor excepcional que mantiene los alimentos calientes en la mesa",
      "Tapas herméticas con puntos de condensación que recirculan la humedad",
      "Asas ergonómicas diseñadas para un agarre seguro incluso con guantes térmicos",
      "Perillas fenólicas y metálicas resistentes a temperaturas extremas de horneado"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "home-3",
    "name": "Robot Aspirador y Trapeador Inteligente Roomba Combo j9+ Autovaciado",
    "slug": "robot-aspirador-trapeador-roomba-combo-j9-plus",
    "category": "hogar",
    "subcategory": "electrodomesticos",
    "brand": "iRobot",
    "department": "Hogar · Smart Home & Limpieza",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 25999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 54,
    "image": "Productos/robot aspirador blanco.jpg",
    "description": "El robot 2 en 1 más potente y autónomo de iRobot. Cuenta con brazo robótico retractil para trapear que se eleva automáticamente al detectar alfombras, sistema Dirt Detective que prioriza las habitaciones más sucias y base Clean Base con autovaciado de polvo y recarga de agua.",
    "sku": "HGR-IRBT-J9PLUS",
    "inStock": true,
    "sizes": [
      "Robot + Base Clean Base"
    ],
    "colors": [
      "Negro Grafito con Tapa Madera"
    ],
    "colorHex": [
      "#18181b"
    ],
    "specs": {
      "navegacion": "Cámara frontal PrecisionVision con IA que esquiva obstáculos y cables",
      "succion": "100% mayor potencia de succión con rodillos de goma multisuperficie",
      "autovaciado": "Estación Clean Base con capacidad para 60 días de polvo y 30 días de agua",
      "mopa": "Trapeador SmartScrub que frota hacia adelante y atrás con presión constante",
      "conectividad": "App iRobot OS, WiFi 5GHz, Alexa, Google Home y Apple Siri Shortcuts"
    },
    "features": [
      "Brazo de mopa 100% retráctil: jamás moja alfombras ni tapetes",
      "Mapeo 3D ultrarrápido con zonas de exclusión y limpieza personalizada por habitación",
      "Detección y evasión de cables, calcetines y accidentes de mascotas garantizada por P.O.O.P.",
      "Base de diseño premium con acabado tipo mueble nórdico que decora el hogar"
    ]
  },
  {
    "id": "home-4",
    "name": "Colchón Híbrido Supreme King Size Espuma Tempur + Resortes Pocket",
    "slug": "colchon-hibrido-supreme-king-size-tempur-pedic",
    "category": "hogar",
    "subcategory": "recamara",
    "brand": "Tempur-Pedic",
    "department": "Hogar · Recámara & Descanso",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 29999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 112,
    "image": "Productos/Colchón Híbrido Supreme King Size.jpg",
    "description": "Experimenta la ingravidez y el descanso más reparador. Combina el auténtico material viscoelástico TEMPUR® desarrollado por la NASA que alivia la presión con más de 1,200 resortes ensacados individuales para respuesta dinámica y cero transferencia de movimiento entre parejas.",
    "sku": "HGR-TMPR-KNGHYB",
    "inStock": true,
    "sizes": [
      "King Size (200x190x34 cm)",
      "Queen Size (150x190x34 cm)"
    ],
    "colors": [
      "Blanco Platino"
    ],
    "colorHex": [
      "#f1f5f9"
    ],
    "specs": {
      "nucleo": "1,200+ resortes independientes Pocket Springs de acero templado",
      "confort": "Capa superior TEMPUR-ES® de 8 cm que se adapta a la curvatura de la columna",
      "funda": "Funda SmartClimate® Dual Cover System con fibras refrescantes desmontable con cierre",
      "dimensiones": "King Size: 200 cm largo x 190 cm ancho x 34 cm altura",
      "garantia": "10 años de garantía completa contra deformaciones"
    },
    "features": [
      "Eliminación total de los puntos de presión en hombros, cadera y zona lumbar",
      "Aislamiento de movimiento absoluto: los movimientos de tu pareja no se sienten",
      "Tejido técnico termorregulador que disipa el calor corporal durante la noche",
      "Tratamiento antimicrobiano y barrera hipoalergénica contra ácaros"
    ]
  },
  {
    "id": "home-5",
    "name": "Purificador y Calefactor de Aire Purifier Hot+Cool Formaldehyde HP09",
    "slug": "purificador-calefactor-dyson-purifier-hot-cool-hp09",
    "category": "hogar",
    "subcategory": "electrodomesticos",
    "brand": "Dyson",
    "department": "Hogar · Climatización & Confort",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 17999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 88,
    "image": "Productos/Purificador y Calefactor Dyson Purifier Hot+Cool.jpg",
    "description": "Purifica, calienta y refresca de manera inteligente. Detecta y destruye permanentemente el formaldehído emitido por muebles y pinturas. Su sistema de filtración completamente sellado según la norma HEPA H13 captura el 99.97% de polvo fino, alérgenos, polen y virus.",
    "sku": "HGR-DYSN-HP09",
    "inStock": true,
    "sizes": [
      "Torre Compacta (76 cm altura)"
    ],
    "colors": [
      "Blanco / Oro Satinado",
      "Níquel / Oro"
    ],
    "colorHex": [
      "#fafaf9",
      "#d4af37"
    ],
    "specs": {
      "filtracion": "Filtro HEPA H13 de fibra de vidrio + carbón activado + filtro catalítico",
      "funciones": "Purificación continua 360°, Calefactor cerámico PTC y Ventilador potente",
      "sensores": "4 sensores integrados para partículas PM2.5, PM10, VOCs, NO2 y formaldehído",
      "cobertura": "Circulación de aire Air Multiplier en habitaciones de hasta 81 m³",
      "conectividad": "App MyDyson, WiFi, control remoto magnético curvo y comandos de voz"
    },
    "features": [
      "Sensor de formaldehído de estado sólido que no se desgasta con el tiempo",
      "Flujo de aire divergente para purificar sin corriente de aire directo en frío",
      "Modo nocturno ultrasilencioso con atenuación de pantalla para descanso",
      "Oscilación suave programable hasta 350 grados para envolver todo el ambiente"
    ]
  },
  {
    "id": "home-6",
    "name": "Batidora de Pedestal Profesional Artisan 4.8L en Acero Inoxidable",
    "slug": "batidora-pedestal-artisan-kitchenaid-4-8l",
    "category": "hogar",
    "subcategory": "electrodomesticos",
    "brand": "KitchenAid",
    "department": "Hogar · Cocina & Repostería",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 11499,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?auto=format&fit=crop&w=800&q=80",
    "description": "El ícono legendario de la repostería mundial. Cabezal inclinable para fácil acceso al tazón, construcción 100% de metal macizo fundido a presión y acción planetaria con 59 puntos de contacto para un mezclado homogéneo y rápido de masas pesadas, merengues y cremas.",
    "sku": "HGR-KTCH-ART48",
    "inStock": true,
    "sizes": [
      "Capacidad 4.8 Litros (5 Cuartos)"
    ],
    "colors": [
      "Rojo Imperial",
      "Negro Matte Onyx",
      "Blanco Glaciar"
    ],
    "colorHex": [
      "#991b1b",
      "#18181b",
      "#f8fafc"
    ],
    "specs": {
      "motor": "Transmisión directa por engranajes de 300W de alta eficiencia",
      "tazon": "Acero inoxidable pulido de 4.8 Litros con asa ergonómica de confort",
      "velocidades": "10 velocidades regulables desde mezclado suave hasta batido rápido",
      "peso": "10.4 kg de metal que garantiza estabilidad sin vibraciones",
      "incluye": "Batidor plano, batidor de 6 alambres, gancho para amasar y escudo vertedor"
    },
    "features": [
      "Centro de conexión multiusos compatible con más de 15 aditamentos KitchenAid",
      "Diseño de cabezal móvil que permite incorporar ingredientes cómodamente",
      "Capacidad para amasar hasta 2 kg de masa de pan o batir 12 claras de huevo",
      "Acabado esmaltado electrostático resistente a rayaduras y fácil de limpiar"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "home-7",
    "name": "Comedor Contemporáneo 6 Plazas en Madera de Roble Macizo y Tapiz Lino",
    "slug": "comedor-contemporaneo-6-plazas-roble-ashley",
    "category": "hogar",
    "subcategory": "muebles",
    "brand": "Ashley Furniture",
    "department": "Hogar · Comedores & Mesas",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 23999,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 41,
    "image": "Productos 2/conjunto de mesa y sillas para cocina.jpg",
    "description": "Diseño orgánico y refinado que celebra la belleza natural de la madera. Mesa rectangular de 180 cm con cantos redondeados y vetas naturales a la vista, acompañada por 6 sillas ergonómicas con respaldo curvado y asiento tapizado en lino de textura cálida.",
    "sku": "HGR-ASHL-DIN6P",
    "inStock": true,
    "sizes": [
      "Set Mesa 180x90 cm + 6 Sillas"
    ],
    "colors": [
      "Roble Claro Natural",
      "Nogal Cálido"
    ],
    "colorHex": [
      "#d7b899",
      "#5c3d2e"
    ],
    "specs": {
      "mesa": "Madera maciza de roble blanco secada al horno con barniz mate poliuretano",
      "sillas": "Estructura de madera sólida con espuma de alta resiliencia tapizada en lino",
      "dimensionesMesa": "180 cm largo x 90 cm ancho x 76 cm alto",
      "dimensionesSilla": "52 cm ancho x 56 cm profundidad x 82 cm alto (altura asiento 47 cm)",
      "capacidad": "Resistencia probada hasta 140 kg por silla"
    },
    "features": [
      "Tratamiento protector repelente de derrames en mesa y tapicería",
      "Uniones en caja y espiga reforzadas que garantizan solidez de por vida",
      "Esquinas biseladas seguras para hogares con niños",
      "Servicio de armado y colocación en tu comedor sin costo adicional"
    ]
  },
  {
    "id": "home-8",
    "name": "Sillón Reclinable Eléctrico de Piel Genuina con Calefacción y USB-C",
    "slug": "sillon-reclinable-electrico-piel-italiana-boconcept",
    "category": "hogar",
    "subcategory": "muebles",
    "brand": "BoConcept",
    "department": "Hogar · Salas & Muebles",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 19999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 37,
    "image": "Productos/Sillón Reclinable Eléctrico de Piel Genuina.jpg",
    "description": "El máximo confort con elegancia escandinava. Tapizado íntegramente en piel vacuna genuina flor entera importada de Italia. Motor alemán ultra silencioso con control de micro-posiciones independientes para reposapiés y respaldo, soporte lumbar dinámico y puerto USB-C para tus dispositivos.",
    "sku": "HGR-BOCP-REC01",
    "inStock": true,
    "sizes": [
      "Sillón Individual Amplio (95x98x105 cm)"
    ],
    "colors": [
      "Piel Negro",
      "Piel Café Tabaco",
      "Lino Beige Arena",
      "Chenille Gris"
    ],
    "colorHex": [
      "#09090b",
      "#713f12",
      "#fef3c7",
      "#4b5563"
    ],
    "specs": {
      "tapizado": "100% Piel vacuna italiana flor entera curtida artesanalmente",
      "mecanismo": "Doble motor eléctrico alemán OKIN silencioso con botón touch integrado",
      "extras": "Puerto de carga rápida USB-C y USB-A + suave calefacción lumbar",
      "dimensiones": "95 cm ancho x 98 cm fondo (168 cm reclinado) x 105 cm alto",
      "capacidad": "Estructura de acero reforzado para soportar hasta 160 kg"
    },
    "features": [
      "Reclinación con tecnología Zero-Wall que requiere solo 8 cm de separación del muro",
      "Cabecero ajustable manualmente para lectura cómoda o ver televisión",
      "Piel suave que gana una pátina hermosa y distinguida con el paso del tiempo",
      "Batería recargable opcional para usar sin cables a la vista en el centro de la sala"
    ],
    "colorImages": {
      "Piel Negro": "Productos/Sillón Reclinable Eléctrico de Piel Genuina.jpg",
      "Piel Café Tabaco": "Productos/Sillón Reclinable Eléctrico de Piel Genuina cafe.jpg",
      "Lino Beige Arena": "Productos/Sillón Reclinable Eléctrico beige.jpg",
      "Chenille Gris": "Productos/Sillón Reclinable Eléctrico Gris.jpg"
    }
  },
  {
    "id": "home-9",
    "name": "Juego de Sábanas 1000 Hilos 100% Satén de Algodón Egipcio King Size",
    "slug": "juego-sabanas-1000-hilos-saten-algodon-egipcio",
    "category": "hogar",
    "subcategory": "recamara",
    "brand": "D'Avanti Blancos",
    "department": "Hogar · Blancos de Lujo",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 3899,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 160,
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    "description": "Lleva la experiencia del hotel de 5 estrellas a tu recámara. Tejidas con 1000 hilos por pulgada cuadrada de auténtico algodón egipcio Giza de fibra extra larga. Tejido de satén con caída sedosa, brillo sutil elegante y frescura transpirable que se suaviza con cada lavada.",
    "sku": "HGR-GRD-SAB1000",
    "inStock": true,
    "sizes": [
      "King Size (4 Piezas)",
      "Queen Size (4 Piezas)"
    ],
    "colors": [
      "Blanco Nube",
      "Gris Perla",
      "Azul Noche"
    ],
    "colorHex": [
      "#ffffff",
      "#e2e8f0",
      "#1e293b"
    ],
    "specs": {
      "composicion": "100% Algodón Egipcio peinado Giza de fibra extra larga (ELS)",
      "tejido": "Satén de 1000 hilos por pulgada con orillos reforzados",
      "incluye": "1 sábana plana (270x280 cm), 1 sábana de cajón profunda (45 cm fuelle) y 2 fundas King (50x100 cm)",
      "certificacion": "OEKO-TEX® Standard 100 libre de pesticidas y sustancias dañinas",
      "cuidado": "Lavable en máquina con agua fría, secado a baja temperatura"
    },
    "features": [
      "Cajón extra profundo con elástico perimetral de 360° que abraza colchones de hasta 45 cm",
      "Termorregulación biológica: frescas en verano y cálidas en invierno",
      "Costuras de doble pespunte con dobladillo festoneado tipo boutique",
      "Tejido anti-pilling de fibra larga que no genera motas ni bolitas"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "home-10",
    "name": "Freidora de Aire DualZone 9.5 Litros Doble Canastilla Smart XL",
    "slug": "freidora-de-aire-dualzone-9-5l-ninja",
    "category": "hogar",
    "subcategory": "electrodomesticos",
    "brand": "Ninja",
    "department": "Hogar · Cocina Eléctrica",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 5899,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 178,
    "image": "Productos/Freidora de Aire DualZone 9.5 Litros Doble Canastilla Smart XL.jpg",
    "description": "Cocina dos alimentos diferentes, de dos formas distintas, y sírvelos listos al mismo tiempo. Capacidad XL de 9.5 litros dividida en dos zonas independientes de 4.75L con tecnología Smart Finish para sincronizar la cocción y Match Cook para duplicar recetas familiares.",
    "sku": "HGR-NINJ-DZ401",
    "inStock": true,
    "sizes": [
      "Capacidad XL 9.5 Litros"
    ],
    "colors": [
      "Negro / Acero Inox"
    ],
    "colorHex": [
      "#18181b"
    ],
    "specs": {
      "capacidad": "9.5 Litros (hasta 3.6 kg de papas fritas o 2 pollos de 2 kg)",
      "funciones": "6 en 1: Freír con aire, Asar, Hornear, Recalentar, Deshidratar y Air Broil",
      "potencia": "1,690 Watts de calentamiento por convección ultra veloz",
      "temperatura": "Rango amplio de 40°C a 230°C con control digital preciso",
      "limpieza": "Canastillas y placas crisper con recubrimiento antiadherente cerámico sin PTFE/PFOA"
    },
    "features": [
      "Hasta 75% menos grasa que los métodos tradicionales de fritura profunda",
      "Función Smart Finish que termina ambas canastas al mismo segundo exacto",
      "Función Match Cook para copiar fácilmente tiempo y temperatura en ambas zonas",
      "Componentes desmontables aptos para lavavajillas que facilitan la limpieza diaria"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "home-11",
    "name": "Set de 6 Cuchillos Profesionales de Chef Acero Damasco Japonés VG-10",
    "slug": "set-cuchillos-chef-acero-damasco-japones-grande",
    "category": "hogar",
    "subcategory": "cocina",
    "brand": "D'Avanti Gourmet",
    "department": "Hogar · Cuchillería de Precisión",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 4899,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 45,
    "image": "Productos 2/set de cuchillos 1.jpg",
    "description": "Corte quirúrgico y belleza milenaria en tu cocina. Forjados con núcleo central de acero japonés VG-10 envuelto en 67 capas de acero damasco de alto carbono. Filo afilado artesanalmente a 15 grados por lado mediante el método tradicional japonés Honbazuke.",
    "sku": "HGR-GRD-KN6SET",
    "inStock": true,
    "sizes": [
      "Kit 6 Piezas + Bloque Magnético"
    ],
    "colors": [
      "Acero Damasco Ébano",
      "Acero Damasco Nogal",
      "Edición Tradicional"
    ],
    "colorHex": [
      "#1c1917",
      "#78350f",
      "#94a3b8"
    ],
    "specs": {
      "acero": "Núcleo de acero japonés VG-10 con 67 capas de forja Damasco",
      "dureza": "60±2 HRC en escala Rockwell para retención prolongada del filo",
      "mango": "Madera prensada Pakkawood resistente al agua con remache mosaico decorativo",
      "incluye": "Cuchillo Chef 20cm, Santoku 18cm, Pan 20cm, Utilitario 13cm, Pelador 9cm y Bloque magnético de Acacia",
      "anguloFilo": "15° por lado afilado con precisión láser"
    },
    "features": [
      "Patrón de olas damasco único en cada hoja que evita que los alimentos se peguen",
      "Equilibrio perfecto de peso entre hoja y mango para cortar sin fatiga",
      "Bloque magnético vertical de doble vista en madera maciza de acacia",
      "Presentado en caja de lujo acolchada para regalo con protectores de punta"
    ],
    "colorImages": {
      "Acero Damasco Ébano": "Productos 2/set de cuchillos 1.jpg",
      "Acero Damasco Nogal": "Productos 2/set de cuchillos 2.jpg",
      "Edición Tradicional": "Productos 2/set de cuchillos.jpg"
    }
  },
  {
    "id": "home-12",
    "name": "Cafetera Nespresso Vertuo Next Deluxe con Espumador de Leche Aeroccino 3",
    "slug": "cafetera-nespresso-vertuo-next-deluxe-aeroccino",
    "category": "hogar",
    "subcategory": "electrodomesticos",
    "brand": "Nespresso",
    "department": "Hogar · Gourmet & Café",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 5199,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 110,
    "image": "Productos/Cafetera Nespresso Vertuo Next Deluxe con Espumador de Leche Aeroccino.jpg",
    "description": "Revoluciona tu experiencia cafetera con solo pulsar un botón. La tecnología de extracción Centrifusion™ lee el código de barras de cada cápsula y gira a 4,000 RPM para calibrar temperatura, flujo de agua y crear una crema densa y deliciosa. Incluye Aeroccino 3 para capuchinos calientes o iced lattes.",
    "sku": "HGR-NESP-VNEXT",
    "inStock": true,
    "sizes": [
      "Vertuo Next + Aeroccino 3"
    ],
    "colors": [
      "Negro Mate con Cromo",
      "Dark Chrome"
    ],
    "colorHex": [
      "#27272a",
      "#71717a"
    ],
    "specs": {
      "tecnologia": "Extracción Centrifusion™ patentada por código de barras de cápsula",
      "tamanosTaza": "5 tamaños: Espresso (40 ml), Doble Espresso (80 ml), Gran Lungo (150 ml), Taza (230 ml) y Jarra (535 ml)",
      "calentamiento": "30 segundos listo para extraer",
      "tanqueAgua": "1.1 Litros desmontable",
      "aeroccino": "Espumador Aeroccino3 para espuma fría y caliente cremosa en 60 segundos"
    },
    "features": [
      "Conectividad Bluetooth y WiFi para actualizaciones automáticas de software",
      "Fabricada con 54% de plásticos reciclados y empaque 100% libre de plásticos",
      "Apagado automático tras 2 minutos de inactividad para máximo ahorro energético",
      "Incluye kit de bienvenida con cápsulas Vertuo de tuestes variados"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "home-13",
    "name": "Lámpara de Techo Colgante Moderna LED en Cristal y Acero",
    "slug": "lampara-de-pie-arco-marmol-laton-boconcept",
    "category": "hogar",
    "subcategory": "decoracion",
    "brand": "BoConcept",
    "department": "Hogar · Iluminación & Decoración",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 7999,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 39,
    "image": "Productos 2/Lámpara De Techo Cristal Moderna.jpg",
    "description": "Una obra maestra de diseño y presencia visual. La icónica silueta de arco flotante se extiende grácilmente sobre tu sala o comedor. Su base sólida de mármol blanco de Carrara aporta estabilidad escultural, combinada con tubos telescópicos regulables en latón cepillado acabado oro mate.",
    "sku": "HGR-BOCP-LAMP01",
    "inStock": true,
    "sizes": [
      "Arco Extensible (185 a 220 cm altura)"
    ],
    "colors": [
      "Cristal Ahumado Moderno",
      "Cristal Transparente Élite",
      "LED Minimalista"
    ],
    "colorHex": [
      "#64748b",
      "#e2e8f0",
      "#f59e0b"
    ],
    "specs": {
      "base": "Bloque sólido de mármol blanco natural de Carrara de 26 kg",
      "arco": "Estructura telescópica en latón macizo con recubrimiento electrostático",
      "pantalla": "Cúpula de aluminio semiesférica de 35 cm con difusor interior cálido",
      "iluminacion": "Socket estándar E26, bombilla LED Edison de 2700K regulable incluida",
      "control": "Interruptor de pedal metálico con regulador rotativo de intensidad lumínica"
    },
    "features": [
      "Arco con longitud y altura regulables para salvar respaldos de sofás y mesas",
      "Base de mármol con orificio biselado tradicional que facilita su reubicación",
      "Proyección de luz suave, envolvente y sin deslumbramientos para lectura",
      "Cable de alimentación textil trenzado de 2.5 metros con alta resistencia"
    ],
    "colorImages": {
      "Cristal Ahumado Moderno": "Productos 2/Lámpara De Techo Cristal Moderna.jpg",
      "Cristal Transparente Élite": "Productos 2/Lámpara de techo de vidrio moderna.jpg",
      "LED Minimalista": "Productos 2/lampara de techo LED.jpg"
    }
  },
  {
    "id": "home-14",
    "name": "Tapete Monumental Geométrico Nórdico Tejido a Mano en Lana 200x300 cm",
    "slug": "tapete-monumental-nordico-lana-west-elm",
    "category": "hogar",
    "subcategory": "decoracion",
    "brand": "West Elm",
    "department": "Hogar · Tapetes & Decoración",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 9499,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 29,
    "image": "Productos/Tapete Monumental Geométrico Nórdico Tejido a Mano en Lana 200x300 cm.jpg",
    "description": "Eleva el confort y la acústica de tu espacio. Tejido artesanalmente en telar de mano por maestros artesanos usando 100% lana virgen de Nueva Zelanda de primera calidad. Patrón geométrico moderno de inspiración Bauhaus en tonos neutros que aportan profundidad visual y calidez táctil inigualable.",
    "sku": "HGR-WELM-RUG2030",
    "inStock": true,
    "sizes": [
      "200 x 300 cm",
      "160 x 230 cm"
    ],
    "colors": [
      "Marfil & Gris Grafito",
      "Arena & Terracota"
    ],
    "colorHex": [
      "#f1f5f9",
      "#e2d9cc"
    ],
    "specs": {
      "material": "100% Lana virgen de Nueva Zelanda de fibra densa",
      "tecnica": "Tejido artesanal Hand-Tufted con pelo cortado a ras de 14 mm",
      "base": "Respaldo de lona de algodón 100% natural con látex biodegradable",
      "dimensiones": "200 cm ancho x 300 cm largo (ideal para salas y comedores de 6 a 8 personas)",
      "certificacion": "Certificado GoodWeave que garantiza comercio justo libre de explotación"
    },
    "features": [
      "Aislamiento térmico natural y amortiguación acústica de pisadas en la habitación",
      "Lana repelente natural a manchas y suciedad gracias a su lanolina biológica",
      "Tacto ultrasuave y denso que invita a caminar descalzo con total placer",
      "Bordes reforzados con ribete cosido a mano para evitar deshilachados"
    ]
  },
  {
    "id": "home-15",
    "name": "Edredón Nórdico Duvet de Plumón de Ganso Blanco All-Season King Size",
    "slug": "edredon-duvet-plumon-ganso-blanco-grande",
    "category": "hogar",
    "subcategory": "recamara",
    "brand": "D'Avanti Blancos",
    "department": "Hogar · Blancos de Lujo",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 6299,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    "description": "Duerme envuelto en una nube de esponjosidad y confort térmico inigualable. Relleno con 90% auténtico plumón de ganso blanco europeo y 10% pluma fina seleccionada con poder de inflado 750+ Fill Power. Su confección Baffle Box en cajas tridimensionales garantiza una distribución uniforme del relleno sin zonas frías.",
    "sku": "HGR-GRD-DUVKNG",
    "inStock": true,
    "sizes": [
      "King Size (260x240 cm)",
      "Queen Size (230x240 cm)"
    ],
    "colors": [
      "Blanco Puro Nieve"
    ],
    "colorHex": [
      "#ffffff"
    ],
    "specs": {
      "relleno": "90% Plumón de ganso blanco europeo / 10% pluma fina estéril",
      "fillPower": "750+ cuin de esponjosidad de alto aislamiento térmico y ligereza",
      "funda": "100% Algodón batista de 400 hilos a prueba de escape de plumón (Down-Proof)",
      "costura": "Construcción en cámaras Baffle Box con paredes internas de 2.5 cm",
      "certificacion": "Responsible Down Standard (RDS) que certifica origen ético y trazable"
    },
    "features": [
      "Climatización All-Season: calidez reconfortante en invierno y ligereza transpirable en verano",
      "8 lazos esquineros y laterales para sujetar firmemente cualquier funda nórdica duvet",
      "Tratamiento hipoalergénico de 8 lavados térmicos libre de polvo y olores",
      "Doble costura perimetral con vivo satinado elegante para máxima durabilidad"
    ]
  },
  {
    "id": "home-16",
    "name": "Difusor de Aromas Ultrasónico Inteligente en Cerámica Blanca y Madera",
    "slug": "difusor-aromas-ultrasonico-ceramica-madera-zara-home",
    "category": "hogar",
    "subcategory": "decoracion",
    "brand": "Zara Home",
    "department": "Hogar · Aromaterapia & Ambientes",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1699,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 83,
    "image": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    "description": "Crea una atmósfera de serenidad y bienestar holístico en tu hogar. Cubierta artesanal en cerámica blanca mate estriada sobre una base de madera maciza de haya natural. Su placa ultrasónica de 2.4 MHz vaporiza suavemente el agua y los aceites esenciales sin calentarlos, conservando todas sus propiedades terapéuticas intactas.",
    "sku": "HGR-ZARA-DIF01",
    "inStock": true,
    "sizes": [
      "Capacidad 300 ml (Hasta 12 horas)"
    ],
    "colors": [
      "Cerámica Blanca / Haya Natural"
    ],
    "colorHex": [
      "#f8fafc",
      "#d7b899"
    ],
    "specs": {
      "tanque": "300 ml de capacidad sin BPA con medidor de nivel máximo",
      "autonomia": "Hasta 12 horas en modo intermitente o 6 horas continuas",
      "tecnologia": "Vaporización ultrasónica a 2.4 MHz ultra silenciosa (< 20 dB)",
      "iluminacion": "Luz LED cálida regulable con efecto vela parpadeante para meditación",
      "seguridad": "Apagado automático inteligente de seguridad cuando el agua se agota"
    },
    "features": [
      "Humidifica sutilmente el ambiente mejorando la hidratación de piel y vías respiratorias",
      "Temporizador programable de 1h, 3h, 6h o difusión continua",
      "Diseño minimalista y zen que decora estanterías, burós y mesas auxiliares",
      "Incluye adaptador de corriente y vaso dosificador de precisión"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "gaming-con-1",
    "department": "Videojuegos & Consolas",
    "name": "PlayStation 5 Slim Edición Digital",
    "slug": "ps5-slim-edicion-digital",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "PlayStation",
    "platformTag": "ps",
    "brand": "Sony",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 11999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 1248,
    "image": "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=800&q=80",
    "description": "La PlayStation 5 Slim Digital Edition es hasta un 30% más delgada y ligera que el modelo original, con 1TB de almacenamiento UltraHigh Speed SSD. Sin lector de disco, diseñada para la era digital. Incluye DualSense Wireless Controller.",
    "sku": "GAM-SON-PS5SL01",
    "inStock": true,
    "genre": "Consola",
    "features": [
      "1TB SSD UltraHigh Speed",
      "Ray Tracing y 4K a 120fps",
      "DualSense con retroalimentación háptica",
      "Compatible con PlayStation VR2",
      "Diseño 30% más compacto"
    ],
    "specs": {
      "almacenamiento": "1TB SSD",
      "resolucion": "4K / 8K",
      "fps": "Hasta 120fps",
      "cpu": "AMD Ryzen Zen 2 / 8 núcleos 3.5GHz",
      "gpu": "AMD RDNA 2 / 10.28 TFLOPS",
      "ram": "16GB GDDR6",
      "audio": "Tempest 3D Audio",
      "conectividad": "WiFi 6 / Bluetooth 5.1 / USB-C"
    },
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "gaming-con-2",
    "department": "Videojuegos & Consolas",
    "name": "Xbox Series X — 2TB Galaxy Black",
    "slug": "xbox-series-x-2tb-galaxy-black",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Microsoft",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 14999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 876,
    "image": "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80",
    "description": "Xbox Series X Galaxy Black Special Edition con 2TB de almacenamiento y diseño exclusivo nebular profundo. La consola más poderosa de Microsoft con Xbox Game Pass Ultimate incluido por 3 meses.",
    "sku": "GAM-MSF-XSXGB02",
    "inStock": true,
    "genre": "Consola",
    "features": [
      "2TB NVMe SSD Custom",
      "Quick Resume para múltiples juegos",
      "Xbox Smart Delivery",
      "3 meses Xbox Game Pass Ultimate",
      "Retrocompatibilidad con 4 generaciones"
    ],
    "specs": {
      "almacenamiento": "2TB SSD Custom NVMe",
      "resolucion": "4K / 8K",
      "fps": "Hasta 120fps",
      "cpu": "AMD Ryzen Zen 2 / 8 núcleos 3.8GHz",
      "gpu": "AMD RDNA 2 / 12 TFLOPS",
      "ram": "16GB GDDR6",
      "conectividad": "WiFi 6E / Bluetooth 5.1 / USB-C"
    }
  },
  {
    "id": "gaming-con-3",
    "department": "Videojuegos & Consolas",
    "name": "Nintendo Switch OLED — Edición Zelda",
    "slug": "nintendo-switch-oled-zelda",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Nintendo",
    "platformTag": "nintendo",
    "brand": "Nintendo",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 8999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 2134,
    "image": "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80",
    "description": "Edición Limitada de The Legend of Zelda: Tears of the Kingdom. Pantalla OLED vibrante de 7 pulgadas, diseño grabado inspirado en Hyrule, Joy-Con dorados con motivos Triforce y dock exclusivo.",
    "sku": "GAM-NIN-SWOLEDZEL03",
    "inStock": true,
    "genre": "Consola Híbrida",
    "features": [
      "Pantalla OLED 7 pulgadas",
      "Modo TV, Sobremesa y Portátil",
      "Joy-Con dorados edición especial",
      "64GB almacenamiento interno",
      "Batería: hasta 9 horas portátil"
    ],
    "specs": {
      "pantalla": "7 pulgadas OLED",
      "resolucion": "1280x720 portátil / 1080p TV",
      "almacenamiento": "64GB + MicroSD",
      "bateria": "4310 mAh / hasta 9h",
      "conectividad": "WiFi 5 / Bluetooth 4.1 / USB-C"
    }
  },
  {
    "id": "gaming-game-1",
    "department": "Videojuegos & Consolas",
    "name": "Marvel's Spider-Man 2 — PS5",
    "slug": "marvels-spider-man-2-ps5",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "PlayStation",
    "platformTag": "ps",
    "brand": "Sony Interactive Entertainment",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1699,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 3456,
    "image": "Productos 3/Marvel's Spider-Man 2 — PS5.jpg",
    "description": "Dos Spider-Men, un enemigo legendario. Controla tanto a Peter Parker como a Miles Morales en una aventura épica que expande el universo Marvel en PS5 con gráficos next-gen impresionantes.",
    "sku": "GAM-SIE-SPMAN2-04",
    "inStock": true,
    "genre": "Acción / Aventura",
    "features": [
      "Juega como Peter Parker y Miles Morales",
      "Manhattan, Queens y Brooklyn abiertos",
      "Villano Venom con poderes simbionte",
      "Ray Tracing y 60fps constantes",
      "Haptic feedback DualSense inmersivo"
    ],
    "specs": {
      "genero": "Acción Aventura",
      "jugadores": "1 jugador (offline)",
      "clasificacion": "T (Teen) +13 años",
      "espacio": "98GB",
      "resolucion": "4K @ 60fps con Ray Tracing"
    }
  },
  {
    "id": "gaming-game-2",
    "department": "Videojuegos & Consolas",
    "name": "The Legend of Zelda: Tears of the Kingdom",
    "slug": "zelda-tears-of-the-kingdom",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Nintendo",
    "platformTag": "nintendo",
    "brand": "Nintendo",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1099,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 8921,
    "image": "Productos 3/The Legend of Zelda.jpg",
    "description": "Link regresa para explorar los cielos de Hyrule en la secuela de Breath of the Wild. Con nuevas habilidades como Ultrahand, construye armas y vehículos únicos para resolver puzzles y derrotar enemigos.",
    "sku": "GAM-NIN-ZELTOTK05",
    "inStock": true,
    "genre": "RPG / Aventura",
    "features": [
      "Mundo abierto masivo en tierra y cielos",
      "Habilidad Ultrahand para construcción libre",
      "200+ horas de contenido",
      "Modo portátil y sobremesa",
      "Sistema de crafting revolucionario"
    ],
    "specs": {
      "genero": "Aventura / RPG",
      "jugadores": "1 jugador",
      "clasificacion": "E10+ (Mayores de 10)",
      "espacio": "18.2GB",
      "resolucion": "900p portátil / 1080p TV"
    }
  },
  {
    "id": "gaming-game-3",
    "department": "Videojuegos & Consolas",
    "name": "Call of Duty: Black Ops III",
    "slug": "call-of-duty-black-ops-3",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Activision / Treyarch",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 2840,
    "image": "Productos 3/call of duty black ops 3.jpg",
    "description": "Un futuro oscuro donde surge una nueva raza de soldados Black Ops. Combina campaña cooperativa para 4 jugadores, multijugador frenético con sistema de especialistas y el aclamado modo Zombies Shadows of Evil.",
    "sku": "GAM-ACT-CODBO3",
    "inStock": true,
    "genre": "FPS / Acción / Zombies",
    "features": [
      "Campaña cooperativa diseñada para hasta 4 jugadores",
      "Sistema de movimiento fluido encadenado con propulsores y carreras por muros",
      "9 especialistas únicos en multijugador con armas y habilidades exclusivas",
      "Modo Zombies cinemático Shadows of Evil con ambientación noir de los años 40"
    ],
    "specs": {
      "genero": "First Person Shooter / Zombies",
      "jugadores": "1-4 cooperativo / 1-18 multijugador online",
      "clasificacion": "M (Mature) +17 años",
      "desarrollador": "Treyarch / Activision",
      "resolucion": "1080p @ 60fps de alta fluidez"
    }
  },
  {
    "id": "gaming-game-4",
    "department": "Videojuegos & Consolas",
    "name": "Elden Ring Shadow of the Erdtree — Multiplatforma",
    "slug": "elden-ring-shadow-erdtree",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Multiplataforma",
    "platformTag": "multi",
    "brand": "Bandai Namco / FromSoftware",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1199,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 5643,
    "image": "Productos/Elden Ring Shadow of the Erdtree — Multiplatforma.jpg",
    "description": "La expansión más aclamada de 2024. Explora las Tierras del Sueño con nuevas armas, hechizos, armaduras y la historia inédita de Miquella. Incluye el juego base Elden Ring.",
    "sku": "GAM-BNE-ELDSOTE07",
    "inStock": true,
    "genre": "RPG / Soulslike",
    "features": [
      "Incluye juego base + DLC",
      "100+ horas de contenido nuevo",
      "8 jefes opcionales legendarios",
      "100+ nuevas armas y artes de guerra",
      "Modo cooperativo hasta 3 jugadores"
    ],
    "specs": {
      "genero": "Action RPG",
      "jugadores": "1-4 cooperativo online",
      "clasificacion": "M (Mature) +18 años",
      "espacio": "60GB (Base + DLC)",
      "plataformas": "PS5 / PS4 / Xbox / PC"
    },
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "gaming-acc-1",
    "department": "Videojuegos & Consolas",
    "name": "Control Inalámbrico DualSense Edge — PS5",
    "slug": "dualsense-edge-ps5",
    "category": "videojuegos",
    "subcategory": "accesorios",
    "platform": "PlayStation",
    "platformTag": "ps",
    "brand": "Sony",
    "badge": "Buen Fin -50%",
    "badgeType": "offer",
    "price": 2000,
    "originalPrice": 3999,
    "rating": 4.8,
    "reviewsCount": 1876,
    "image": "Productos 3/Control Inalámbrico DualSense Edge — PS5.jpg",
    "description": "El control pro definitivo para PlayStation 5. Perfiles personalizados, gatillos y sticks intercambiables, deadzone ajustable y botones traseros programables. Diseñado para rendimiento competitivo máximo.",
    "sku": "GAM-SON-DSEDGE08",
    "inStock": true,
    "genre": "Accesorio",
    "features": [
      "Gatillos adaptativos customizables",
      "3 perfiles de configuración guardables",
      "Sticks intercambiables High / Low dome",
      "Cable USB-C trenzado de 3 metros",
      "Estuche de transporte incluido"
    ],
    "specs": {
      "bateria": "hasta 6h de juego continuo",
      "conexion": "Bluetooth 5.1 / USB-C",
      "perfiles": "3 perfiles guardados",
      "sticks": "Estándar / Alto / Cúpula plana",
      "backButtons": "2 botones programables traseros"
    },
    "offerTitle": "🔥 BUEN FIN MÁGICO · 50% OFF",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-21T23:59:59-06:00",
    "buenFinDiscount": 50
  },
  {
    "id": "gaming-acc-2",
    "department": "Videojuegos · Consolas",
    "name": "SteelSeries Arctis Nova Pro — Audífonos Gaming",
    "slug": "steelseries-arctis-nova-pro",
    "category": "videojuegos",
    "subcategory": "accesorios",
    "platform": "Multiplataforma",
    "platformTag": "multi",
    "brand": "SteelSeries",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 6499,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 987,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    "description": "Audífonos gaming de referencia con cancelación de ruido activa (ANC) multimodal, audio espacial 360° y sistema de baterías intercambiables. Compatible con PS5, Xbox, PC y Switch.",
    "sku": "GAM-STS-ANPRO09",
    "inStock": true,
    "genre": "Accesorio",
    "features": [
      "Cancelación de ruido activa (ANC)",
      "Audio espacial 360° con Sonar PC",
      "Batería intercambiable — 0 tiempos muertos",
      "Micrófono retráctil ClearCast Gen2",
      "Compatible PS5, Xbox, PC, Switch, Mobile"
    ],
    "specs": {
      "drivers": "40mm con imanes de neodimio",
      "frecuencia": "10Hz-40kHz",
      "microfono": "ClearCast Gen2 retráctil",
      "conexion": "USB-C 2.4GHz / Bluetooth 5.3 / Jack 3.5mm",
      "bateria": "Intercambiable 36 horas por batería"
    }
  },
  {
    "id": "gaming-pc-1",
    "department": "Videojuegos · Consolas",
    "name": "Laptop ASUS ROG Zephyrus G16 — RTX 4090",
    "slug": "asus-rog-zephyrus-g16-rtx4090",
    "category": "videojuegos",
    "subcategory": "pc-gaming",
    "platform": "PC",
    "platformTag": "pc",
    "brand": "ASUS ROG",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 69999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 234,
    "image": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=800&q=80",
    "description": "La laptop gaming más poderosa de ASUS ROG. Intel Core i9-14900HX + NVIDIA GeForce RTX 4090 con 16GB GDDR6X en pantalla OLED QHD 240Hz. El poder de una PC de escritorio en formato ultra-portátil.",
    "sku": "GAM-ROG-ZG16RTX-11",
    "inStock": true,
    "genre": "Laptop Gaming",
    "features": [
      "RTX 4090 Laptop GPU 16GB GDDR6X",
      "Core i9-14900HX 24 núcleos 5.8GHz",
      "Pantalla 16\" OLED QHD 240Hz",
      "64GB RAM DDR5 / 2TB NVMe PCIe 5.0",
      "ROG Intelligent Cooling Tri-Fan"
    ],
    "specs": {
      "cpu": "Intel Core i9-14900HX",
      "gpu": "NVIDIA RTX 4090 16GB GDDR6X",
      "pantalla": "16\" OLED QHD 2560x1600 240Hz",
      "ram": "64GB DDR5-5600",
      "almacenamiento": "2TB PCIe 5.0 NVMe",
      "bateria": "90Wh / adaptador 330W"
    }
  },
  {
    "id": "gaming-pc-2",
    "department": "Videojuegos · Consolas",
    "name": "Razer DeathAdder V3 Pro — Ratón Wireless",
    "slug": "razer-deathadder-v3-pro",
    "category": "videojuegos",
    "subcategory": "accesorios",
    "platform": "PC",
    "platformTag": "pc",
    "brand": "Razer",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2799,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 1543,
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    "description": "El ratón gaming inalámbrico más premiado del mundo. Sensor Focus Pro 30K de Razer con 9 botones programables, peso ultraligero de 63g y hasta 90 horas de batería con HyperSpeed Wireless.",
    "sku": "GAM-RZR-DAV3PRO12",
    "inStock": true,
    "genre": "Periférico PC",
    "features": [
      "Sensor Focus Pro 30,000 DPI",
      "HyperSpeed Wireless 4x más rápido",
      "63g ultraligero ergonómico",
      "Switches ópticos 90M clics de vida",
      "90 horas de batería / carga USB-C"
    ],
    "specs": {
      "sensor": "Focus Pro 30K DPI Óptico",
      "dpi": "100 - 30,000 DPI ajustable",
      "botones": "9 programables + rueda",
      "conexion": "HyperSpeed 2.4GHz / Bluetooth / USB-C",
      "peso": "63g",
      "bateria": "Hasta 90 horas"
    }
  },
  {
    "id": "gaming-vr-1",
    "department": "Videojuegos · Consolas",
    "name": "PlayStation VR2 — Kit Completo",
    "slug": "playstation-vr2-kit-completo",
    "category": "videojuegos",
    "subcategory": "realidad-virtual",
    "platform": "PlayStation",
    "platformTag": "ps",
    "brand": "Sony",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 14999,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 654,
    "image": "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=800&q=80",
    "description": "La realidad virtual de siguiente generación para PS5. Resolución 4K HDR OLED, seguimiento ocular con foveated rendering, retroalimentación háptica en el visor y Sense Controllers con gatillos adaptativos.",
    "sku": "GAM-SON-PVR2-13",
    "inStock": true,
    "genre": "Realidad Virtual",
    "features": [
      "Pantalla OLED 4K HDR 2000x2040 por ojo",
      "Seguimiento ocular + Foveated Rendering",
      "Sens Controllers con gatillos adaptativos",
      "Retroalimentación háptica en casco y mandos",
      "Catálogo de 100+ juegos VR exclusivos"
    ],
    "specs": {
      "pantalla": "OLED 4K 2000x2040 por ojo",
      "frecuencia": "90Hz / 120Hz",
      "fov": "110 grados horizontal",
      "conexion": "USB-C (PS5 directo)",
      "sensores": "6 DOF / Seguimiento ocular integrado"
    }
  },
  {
    "id": "game-clm-1",
    "department": "Videojuegos & Consolas",
    "name": "Call of Duty: Black Ops 6",
    "slug": "call-of-duty-black-ops-6",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Multiplataforma",
    "platformTag": "multi",
    "brand": "Activision",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1799,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 1420,
    "image": "Productos/BLACK OPS 6.jpg",
    "description": "Una narrativa de espionaje dinámico ambientada a principios de los años 90. Acción de infarto, modo multijugador renovado con omnimovimiento y el regreso del legendario modo Zombis por rondas.",
    "sku": "GAM-ACT-BO6-01",
    "inStock": true,
    "genre": "Shooter / Acción",
    "features": [
      "Sistema revolucionario de Omnimovimiento 360°",
      "Campaña de espionaje cinematográfica",
      "Modo Zombis tradicional por rondas",
      "16 mapas multijugador desde el día 1"
    ]
  },
  {
    "id": "game-clm-2",
    "department": "Videojuegos & Consolas",
    "name": "Call of Duty: Black Ops 7 — Edición Vault",
    "slug": "call-of-duty-black-ops-7",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Multiplataforma",
    "platformTag": "multi",
    "brand": "Activision",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 890,
    "image": "Productos/BLACK OPS 7.jpg",
    "description": "La evolución de la guerra táctica encubierta. Armamento futurista experimental, mapas de combate a gran escala y compatibilidad cross-play completa entre consolas y PC.",
    "sku": "GAM-ACT-BO7-02",
    "inStock": true,
    "genre": "Shooter / Táctico",
    "features": [
      "Campaña cooperativa de 4 jugadores",
      "Nuevas mecánicas de combate táctico",
      "Paquete de operadores BlackCell incluido",
      "Resolución 4K nativa a 120 FPS"
    ]
  },
  {
    "id": "game-clm-3",
    "department": "Videojuegos & Consolas",
    "name": "Call of Duty: Modern Warfare III",
    "slug": "call-of-duty-modern-warfare-3",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Multiplataforma",
    "platformTag": "multi",
    "brand": "Activision",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1599,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 2310,
    "image": "Productos/Call OF DUTY MORDEN WARFARE 3.jpg",
    "description": "El Capitán Price y la Fuerza Operativa 141 se enfrentan a la amenaza definitiva del criminal de guerra ultranacionalista Vladimir Makarov en un conflicto de escala global.",
    "sku": "GAM-ACT-MW3-03",
    "inStock": true,
    "genre": "Shooter / Militar",
    "features": [
      "Mapas icónicos remasterizados",
      "Modo Zombis en mundo abierto masivo",
      "Misiones de combate abierto",
      "Personalización de armas Gunsmith 2.0"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "game-clm-4",
    "department": "Videojuegos & Consolas",
    "name": "Halo: Combat Evolved 2026 Anniversary Remaster",
    "slug": "halo-combat-evolved-2026",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Xbox Game Studios",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1699,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 3120,
    "image": "Productos/HALO CE 2026.jpg",
    "description": "La obra maestra que revolucionó los videojuegos, reconstruida desde cero en Unreal Engine 5 para la potencia de Xbox Series X. Revive la llegada del Jefe Maestro a la instalación 04.",
    "sku": "GAM-MSF-HCE26-04",
    "inStock": true,
    "genre": "Ciencia Ficción / Shooter",
    "features": [
      "Gráficos Unreal Engine 5 con Ray Tracing",
      "Audio espacial Dolby Atmos 3D",
      "Multijugador clásico reimaginado",
      "Modo campaña cooperativa en línea y pantalla dividida"
    ]
  },
  {
    "id": "game-clm-5",
    "department": "Videojuegos & Consolas",
    "name": "Halo Infinite — Edición Campaña Estándar",
    "slug": "halo-infinite-campana",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Xbox Game Studios",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1499,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 4500,
    "image": "Productos/halo infinite.jpg",
    "description": "Cuando toda esperanza se ha perdido y el destino de la humanidad pende de un hilo, el Jefe Maestro está listo para enfrentarse al enemigo más despiadado en el vasto mundo abierto de Zeta Halo.",
    "sku": "GAM-MSF-HINF-05",
    "inStock": true,
    "genre": "Acción / Aventura",
    "features": [
      "Mundo abierto en Zeta Halo",
      "Gancho de agarre Grappleshot dinámico",
      "Optimizado para 4K 60fps en Xbox Series X",
      "Soporte Smart Delivery incluido"
    ]
  },
  {
    "id": "game-clm-6",
    "department": "Videojuegos & Consolas",
    "name": "Halo: Reach Definitive Edition 4K 60FPS",
    "slug": "halo-reach-definitive-edition",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Xbox Game Studios",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1099,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 5200,
    "image": "Productos/HALO REACH.jpg",
    "description": "Sigue la valiente resistencia del Noble Team durante la caída del planeta Reach. Una de las campañas más emotivas e impactantes de la historia con gráficos 4K y 60fps fluidos.",
    "sku": "GAM-MSF-HRCH-06",
    "inStock": true,
    "genre": "Shooter / Épico",
    "features": [
      "Resolución 4K nativa Ultra HD",
      "Modo Tiroteo (Firefight) cooperativo",
      "Personalización completa de armadura Spartan",
      "Sonido remasterizado"
    ]
  },
  {
    "id": "game-clm-7",
    "department": "Videojuegos & Consolas",
    "name": "Gears 5 — Edición Definitiva",
    "slug": "gears-5-definitive-edition",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Xbox Game Studios",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1299,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 2840,
    "image": "Productos/GEARS 5.jpg",
    "description": "Acompaña a Kait Diaz a descubrir su conexión con el enemigo Swarm en la entrega más ambiciosa de la franquicia Gears con soporte para multijugador competitivo a 120 FPS.",
    "sku": "GAM-MSF-G5-07",
    "inStock": true,
    "genre": "Acción / Tercera Persona",
    "features": [
      "Campaña en 4K HDR a 60 FPS",
      "Multijugador hasta 120 FPS en Xbox Series X",
      "Modo Horda cooperativo de 5 jugadores",
      "Modo Escape de ritmo frenético"
    ]
  },
  {
    "id": "game-clm-8",
    "department": "Videojuegos & Consolas",
    "name": "Gears of War 3 — Colección Clásica Xbox",
    "slug": "gears-of-war-3-clasico",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Xbox Game Studios",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 899,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 1980,
    "image": "Productos/GEARS OF WAR 3.jpg",
    "description": "El clímax inolvidable de la trilogía original de Marcus Fenix y el Escuadrón Delta. Mejorado con resolución mejorada y FPS Boost para las consolas Xbox modernas.",
    "sku": "GAM-MSF-G3-08",
    "inStock": true,
    "genre": "Acción / Shooter",
    "features": [
      "Campaña cooperativa de hasta 4 jugadores",
      "Modo Horda 2.0 y Modo Bestia",
      "Mejoras de rendimiento automáticas en Series X",
      "Caja física de colección"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "game-clm-9",
    "department": "Videojuegos & Consolas",
    "name": "Gears of War: Ultimate Edition Remastered",
    "slug": "gears-of-war-ultimate-edition",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Xbox Game Studios",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 2200,
    "image": "Productos/GEARS OF WAR ULTIMATE EDITION.jpg",
    "description": "El título que sentó las bases del género de acción táctica en tercera persona, completamente remasterizado con gráficos 1080p/4K, cinemáticas recreadas y controles modernizados.",
    "sku": "GAM-MSF-GUE-09",
    "inStock": true,
    "genre": "Acción / Remaster",
    "features": [
      "Cinemáticas reconstruidas de 90 minutos",
      "5 capítulos de campaña exclusivos",
      "Multijugador a 60 FPS en servidores dedicados",
      "Controles suaves inspirados en Gears 3"
    ]
  },
  {
    "id": "game-clm-10",
    "department": "Videojuegos & Consolas",
    "name": "Tom Clancy's Ghost Recon Breakpoint",
    "slug": "ghost-recon-breakpoint",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Multiplataforma",
    "platformTag": "multi",
    "brand": "Ubisoft",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1299,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 1740,
    "image": "Productos/ghost recon breakpoint.jpg",
    "description": "Enfréntate a los Wolves, una unidad letal de antiguos soldados estadounidenses que han tomado el control del misterioso archipiélago tecnológico de Auroa.",
    "sku": "GAM-UBI-GRBP-10",
    "inStock": true,
    "genre": "Táctico / Mundo Abierto",
    "features": [
      "Mundo abierto hostil y variado",
      "Modo Inmersivo sin niveles de botín",
      "Cooperativo sin interrupciones para 4 jugadores",
      "Personalización táctica total"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "game-clm-11",
    "department": "Videojuegos & Consolas",
    "name": "Tom Clancy's Ghost Recon Wildlands",
    "slug": "ghost-recon-wildlands",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Multiplataforma",
    "platformTag": "multi",
    "brand": "Ubisoft",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1099,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 3100,
    "image": "Productos/ghost recon wildlands.jpg",
    "description": "Conviértete en un Ghost en una enorme Bolivia de mundo abierto. Desmantela el cartel de Santa Blanca con libertad táctica total por tierra, mar y aire.",
    "sku": "GAM-UBI-GRWL-11",
    "inStock": true,
    "genre": "Acción / Sigilo",
    "features": [
      "Mapa gigantesco con 21 provincias",
      "Total libertad táctica en cada misión",
      "Ciclo dinámico de día/noche y clima",
      "Cooperativo de hasta 4 jugadores"
    ]
  },
  {
    "id": "game-clm-12",
    "department": "Videojuegos & Consolas",
    "name": "Tom Clancy's Ghost Recon Advanced Warfighter",
    "slug": "ghost-recon-advanced-warfighter",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Multiplataforma",
    "platformTag": "multi",
    "brand": "Ubisoft",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 799,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 950,
    "image": "Productos/ghost recon.jpg",
    "description": "Ambientado en una Ciudad de México futurista, lidera a tu equipo de élite en una misión crítica con el sistema de comando táctico Cross-Com.",
    "sku": "GAM-UBI-GRAW-12",
    "inStock": true,
    "genre": "Táctico / Militar",
    "features": [
      "Sistema de información táctica Cross-Com",
      "Escenario detallado de la Ciudad de México",
      "Combate táctico realista en entornos urbanos",
      "Armamento militar avanzado"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "game-clm-13",
    "department": "Videojuegos & Consolas",
    "name": "Hogwarts Legacy: El Legado de Hogwarts",
    "slug": "hogwarts-legacy",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Multiplataforma",
    "platformTag": "multi",
    "brand": "Warner Bros. Games",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1699,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 4200,
    "image": "Productos/harry potter legacy.jpg",
    "description": "Vive lo no escrito en el Colegio Hogwarts de Magia y Hechicería del siglo XIX. Explora el castillo, aprende hechizos, elabora pociones y decide el destino del mundo mágico.",
    "sku": "GAM-WB-HL-13",
    "inStock": true,
    "genre": "RPG / Fantasía",
    "features": [
      "Mundo abierto que incluye Hogwarts, Hogsmeade y el Bosque Prohibido",
      "Sistema de magia y combate dinámico",
      "Vuelo en escoba y monturas mágicas",
      "Personalización completa de mago o bruja"
    ]
  },
  {
    "id": "game-clm-14",
    "department": "Videojuegos & Consolas",
    "name": "Senua's Saga: Hellblade II",
    "slug": "senuas-saga-hellblade-2",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Ninja Theory / Xbox",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1499,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 1650,
    "image": "Productos/Hellblade II.jpg",
    "description": "Senua regresa en un viaje brutal de supervivencia a través del mito y el tormento de la Islandia vikinga del siglo X. Gráficos fotorrealistas revolucionarios y audio binaural 3D inmersivo.",
    "sku": "GAM-NT-SHB2-14",
    "inStock": true,
    "genre": "Aventura Narrativa / Psicología",
    "features": [
      "Fotorrealismo en Unreal Engine 5",
      "Audio espacial binaural 360°",
      "Combate visceral y cinematográfico",
      "Captura de movimiento de vanguardia"
    ]
  },
  {
    "id": "game-clm-15",
    "department": "Videojuegos & Consolas",
    "name": "Starfield — Edición Constelación",
    "slug": "starfield",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Bethesda Game Studios",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1799,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 3800,
    "image": "Productos/Starfield.jpg",
    "description": "En este juego de rol de nueva generación ambientado entre las estrellas, crea el personaje que desees y explora con una libertad sin precedentes mientras te embarcas en un viaje épico.",
    "sku": "GAM-BTH-STR-15",
    "inStock": true,
    "genre": "RPG / Ciencia Ficción",
    "features": [
      "Más de 1,000 planetas para explorar",
      "Construcción y personalización de naves espaciales",
      "Combate espacial y terrestre estratégico",
      "Compañeros de tripulación y puestos de avanzada"
    ]
  },
  {
    "id": "game-clm-16",
    "department": "Videojuegos & Consolas",
    "name": "Super Mario Bros. Wonder",
    "slug": "super-mario-bros-wonder",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Nintendo",
    "platformTag": "nintendo",
    "brand": "Nintendo",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1499,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 6100,
    "image": "Productos/Super Mario Bros. Wonder.jpg",
    "description": "¡Espera lo inesperado en el Reino Flor! Toca flores maravilla para transformar el mundo, deslízate como elefante y disfruta del juego de plataformas 2D más creativo de la saga Mario.",
    "sku": "GAM-NIN-SMW-16",
    "inStock": true,
    "genre": "Plataformas / Aventura",
    "features": [
      "Efectos Maravilla que cambian el nivel",
      "Transformación Mario Elefante",
      "Multijugador local de hasta 4 jugadores",
      "Insignias con habilidades especiales"
    ]
  },
  {
    "id": "game-clm-17",
    "department": "Videojuegos & Consolas",
    "name": "Super Mario Odyssey",
    "slug": "super-mario-odyssey",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Nintendo",
    "platformTag": "nintendo",
    "brand": "Nintendo",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1399,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 8900,
    "image": "Productos/Super Mario Odyssey.jpg",
    "description": "Acompaña a Mario en una aventura 3D trotamundos masiva y usa sus increíbles nuevas habilidades para recolectar energilunas, rescatar a la Princesa Peach y frustrar la boda de Bowser.",
    "sku": "GAM-NIN-SMO-17",
    "inStock": true,
    "genre": "Aventura 3D / Plataformas",
    "features": [
      "Cappy: lanza y captura objetos y enemigos",
      "Mundos sandbox repletos de secretos",
      "Minijuegos y modo foto integrado",
      "Trajes y atuendos coleccionables"
    ]
  },
  {
    "id": "game-clm-18",
    "department": "Videojuegos & Consolas",
    "name": "Star Wars Jedi: Fallen Order",
    "slug": "star-wars-jedi-fallen-order",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Multiplataforma",
    "platformTag": "multi",
    "brand": "Electronic Arts / Respawn",
    "badge": "Buen Fin -60%",
    "badgeType": "offer",
    "price": 480,
    "originalPrice": 1199,
    "rating": 4.8,
    "reviewsCount": 3400,
    "image": "Productos/STAR WARS  FALLEN ORDER JEDI.jpg",
    "description": "Una aventura en tercera persona donde te conviertes en un Padawan Jedi que debe completar su entrenamiento, desarrollar poderosas habilidades con la Fuerza y dominar el sable de luz.",
    "sku": "GAM-EA-JFO-18",
    "inStock": true,
    "genre": "Acción / Aventura",
    "features": [
      "Combate visceral y técnico con sable de luz",
      "Poderes de la Fuerza dinámicos",
      "Planetas icónicos de Star Wars para explorar",
      "Compañero droide BD-1 interactivo"
    ],
    "offerTitle": "🔥 BUEN FIN MÁGICO · 60% OFF",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-21T23:59:59-06:00",
    "buenFinDiscount": 60
  },
  {
    "id": "game-clm-19",
    "department": "Videojuegos & Consolas",
    "name": "Star Wars: Battlefront Classic Collection",
    "slug": "star-wars-battlefront-classic-collection",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Multiplataforma",
    "platformTag": "multi",
    "brand": "Lucasfilm Games / Aspyr",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 899,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 1520,
    "image": "Productos/STAR WARS CLASSIC COLLECTION.jpg",
    "description": "Lucha en batallas galácticas legendarias de toda la galaxia Star Wars con Battlefront I y II originales con soporte multijugador masivo de hasta 64 jugadores en línea.",
    "sku": "GAM-LCS-SWBF-19",
    "inStock": true,
    "genre": "Shooter Galáctico / Multijugador",
    "features": [
      "Incluye Star Wars Battlefront I y Battlefront II",
      "Batallas espaciales con naves X-Wing y TIE Fighters",
      "Juega como héroes y villanos legendarios",
      "Hasta 64 jugadores en línea simultáneos"
    ]
  },
  {
    "id": "game-clm-20",
    "department": "Videojuegos & Consolas",
    "name": "LEGO Harry Potter: Colección Años 1-4 & 5-7 PS3",
    "slug": "lego-harry-potter-ps3",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "PlayStation",
    "platformTag": "ps",
    "brand": "Warner Bros. Games / TT Games",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 849,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 1100,
    "image": "Productos/LEGO HARRY POTTER PS3.jpg",
    "description": "Revive las siete aventuras mágicas de Harry Potter con el humor y encanto inconfundibles de los bloques LEGO. Resuelve acertijos, aprende encantamientos y participa en duelos de varitas.",
    "sku": "GAM-TT-LHP-20",
    "inStock": true,
    "genre": "Aventura Familiar / Puzzle",
    "features": [
      "Abarca los 7 libros y 8 películas completas",
      "Modo cooperativo pantalla dividida familiar",
      "Más de 200 personajes jugables",
      "Castillo de Hogwarts interactivo en bloques"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "toy-clm-1",
    "department": "Juguetes & Niños",
    "name": "Barbie Coffee Shop Playset Barista con Cafetera y Pastelillos",
    "slug": "barbie-coffee-shop-playset",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Barbie / Mattel",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1099,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 780,
    "image": "Productos/Barbie Coffee Shop.jpg",
    "description": "¡Dirige tu propia cafetería gourmet con Barbie! Incluye máquina de café con dispensador que cambia de color, vitrina de repostería, vasos para llevar y delantal de barista.",
    "sku": "JUG-MAT-BCS-01",
    "inStock": true,
    "sizes": [
      "Talla Única"
    ],
    "features": [
      "Máquina de espresso con efectos de agua",
      "Más de 20 accesorios incluidos",
      "Muñeca Barbie vestida de barista",
      "Fomenta el juego de rol y la creatividad"
    ]
  },
  {
    "id": "toy-clm-2",
    "department": "Juguetes & Niños",
    "name": "Muñeca Barbie Signature Edición de Colección Vestido de Gala",
    "slug": "barbie-coleccion-signature",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Barbie / Mattel",
    "badge": "Buen Fin -75%",
    "badgeType": "offer",
    "price": 450,
    "originalPrice": 1799,
    "rating": 4.9,
    "reviewsCount": 540,
    "image": "Productos/Muñeca de coleccion barbie.jpg",
    "description": "Muñeca de alta costura de la serie Barbie Signature con vestido bordado en hilo dorado, tiara reluciente, empaque especial de exhibición y certificado de autenticidad.",
    "sku": "JUG-MAT-BSG-02",
    "inStock": true,
    "sizes": [
      "Colección"
    ],
    "features": [
      "Vestido de alta costura artesanal",
      "Base de exhibición incluida",
      "Certificado de autenticidad para coleccionistas",
      "Caja con ventana transparente de lujo"
    ],
    "buenFinDiscount": 75,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 75% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "toy-clm-3",
    "department": "Juguetes & Niños",
    "name": "Halo Master Chief Spartan-117 Figura Articulada 30cm Deluxe",
    "slug": "halo-master-chief-figura-30cm",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Jazwares / Halo",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1299,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 1320,
    "image": "Productos/HALO Master Chief Figure.jpg",
    "description": "Impresionante figura de acción a escala de 30 cm del legendario Jefe Maestro con armadura Mjolnir Mark VI, rifle de asalto MA40 desmontable y más de 14 puntos de articulación.",
    "sku": "JUG-JAZ-HMC-03",
    "inStock": true,
    "sizes": [
      "30 cm"
    ],
    "features": [
      "30 cm de altura con detalles exactos del juego",
      "Arma rifle de asalto MA40 incluida",
      "14 puntos de articulación dinámica",
      "Pintura con textura de desgaste de batalla"
    ]
  },
  {
    "id": "toy-clm-4",
    "department": "Juguetes & Niños",
    "name": "Mega Construx Halo UNSC Infinity Supernave Insignia Coleccionista",
    "slug": "mega-construx-halo-unsc-infinity",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "Mega Construx",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 5699,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 620,
    "image": "Productos/Mega Construx Halo UNSC Infinity.jpg",
    "description": "La supernave más grande de la flota de la UNSC en un set de construcción colosal de más de 2,400 piezas con hangar interior desplegable, cañones MAC y microfiguras exclusivas.",
    "sku": "JUG-MCX-HINF-04",
    "inStock": true,
    "sizes": [
      "2,430 Piezas"
    ],
    "features": [
      "Superestructura de 80 cm de largo",
      "Hangar interior con compuertas funcionales",
      "Pedestal de exhibición de lujo",
      "Microfiguras de Master Chief y Cortana"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "toy-clm-5",
    "department": "Juguetes & Niños",
    "name": "Mega Construx Halo UNSC Elephant Sandnest Base Blindada",
    "slug": "mega-construx-halo-elephant-sandnest",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "Mega Construx",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 3899,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 410,
    "image": "Productos/Mega Construx  Halo UNSC Elephant Sandnest.jpg",
    "description": "Vehículo de recuperación móvil blindado gigante con orugas masivas, grúa funcional de rescate, bahía de reparación de Warthog y escuadrón Spartan con armamento pesado.",
    "sku": "JUG-MCX-HELE-05",
    "inStock": true,
    "sizes": [
      "1,980 Piezas"
    ],
    "features": [
      "Orugas cuádruples de tracción articulada",
      "Grúa mecánica operativa 360°",
      "Interior modular con sala de comando",
      "4 microfiguras tácticas articuladas"
    ]
  },
  {
    "id": "toy-clm-6",
    "department": "Juguetes & Niños",
    "name": "Mega Construx Halo Banshee Breakout Vehicle con Cañones de Plasma",
    "slug": "mega-construx-halo-banshee-breakout",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "Mega Construx",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 880,
    "image": "Productos/Mega Construx Halo Banshee Breakout Vehicle Halo Infinite.jpg",
    "description": "Nave de asalto aéreo Covenant Banshee con alas ajustables, cabina abatible y microfigura de Elite Ultra con espada de energía para recrear duelos aéreos.",
    "sku": "JUG-MCX-HBAN-06",
    "inStock": true,
    "sizes": [
      "218 Piezas"
    ],
    "features": [
      "Cabina abatible para piloto Covenant",
      "Alas articuladas con modo de planeo",
      "Cañones dobles con lanzadores de proyectiles",
      "Soporte de vuelo transparente"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "toy-clm-7",
    "department": "Juguetes & Niños",
    "name": "LEGO Halo MOC Escuadrón Spartan Fireteam Combate Terrestre",
    "slug": "lego-halo-fireteam-spartan",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "LEGO Custom / Halo",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1499,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 390,
    "image": "Productos/Lego HALO.jpg",
    "description": "Set de construcción con temática de incursión Spartan con torreta pesada, barricadas reforzadas, armamento modular y 4 minifiguras acorazadas compatibles.",
    "sku": "JUG-LEG-HFT-07",
    "inStock": true,
    "sizes": [
      "480 Piezas"
    ],
    "features": [
      "4 minifiguras Spartan con armadura desmontable",
      "Torreta de defensa pesada 360°",
      "Armas modulares intercambiables",
      "Compatible con bloques estándar"
    ]
  },
  {
    "id": "toy-clm-8",
    "department": "Juguetes & Niños",
    "name": "LEGO Star Wars Robot Mech de Combate con Cañón Blaster",
    "slug": "lego-star-wars-robot-mech",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "LEGO Star Wars",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 699,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 940,
    "image": "Productos/LEGO STAR WARS ROBOT.jpg",
    "description": "Traje mecánico articulado de combate galáctico con cabina para minifigura, manos prensiles gigantes y cañón blaster con disparo de proyectiles.",
    "sku": "JUG-LEG-SWR-08",
    "inStock": true,
    "sizes": [
      "145 Piezas"
    ],
    "features": [
      "Articulaciones completas en brazos y piernas",
      "Cabina abatible frontal",
      "Cañón disparador de proyectiles",
      "Minifigura de piloto estelar incluida"
    ]
  },
  {
    "id": "toy-clm-9",
    "department": "Juguetes & Niños",
    "name": "LEGO Star Wars Galactic Adventures Pack de Naves y Héroes",
    "slug": "lego-star-wars-galactic-adventures",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "LEGO Star Wars",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 1150,
    "image": "Productos/LEGO Star Wars Galactic Adventures Pack.jpg",
    "description": "Paquete multipack de aventuras interestelares con droides, speeder terrestre, minifiguras con sables de luz y accesorios de batalla para batallas épicas.",
    "sku": "JUG-LEG-SWGA-09",
    "inStock": true,
    "sizes": [
      "620 Piezas"
    ],
    "features": [
      "Speeder terrestre con tren de aterrizaje",
      "5 minifiguras icónicas de la saga",
      "Efectos translúcidos de propulsión",
      "Armas bláster y sables de luz incluidos"
    ]
  },
  {
    "id": "toy-clm-10",
    "department": "Juguetes & Niños",
    "name": "LEGO Star Wars Caza Estelar Rebelde Starfighter con Alas Móviles",
    "slug": "lego-star-wars-starfighter-caza",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "LEGO Star Wars",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1399,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 820,
    "image": "Productos/lEGO STAR WARS.jpg",
    "description": "Caza estelar clásico de ataque con alas de geometría variable para modo de combate y velocidad crucero, cañones láser y compartimento para droide astromecánico.",
    "sku": "JUG-LEG-SWSF-10",
    "inStock": true,
    "sizes": [
      "474 Piezas"
    ],
    "features": [
      "Alas con mecanismo de apertura de ataque",
      "Espacio para droide R2 en el fuselaje",
      "Lanza-misiles de resorte",
      "Tren de aterrizaje retráctil"
    ]
  },
  {
    "id": "toy-clm-11",
    "department": "Juguetes & Niños",
    "name": "Figura Marvel Legends Series Spider-Man Clásico Articulado",
    "slug": "figura-marvel-legends-spider-man-clasico",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Hasbro Marvel Legends",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 849,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 1850,
    "image": "Productos/Figura Marvel Legends Spider-Man.jpg",
    "description": "Figura de colección Spider-Man con diseño inspirado en los cómics clásicos de Marvel, más de 20 puntos de articulación, manos intercambiables y accesorios de telaraña.",
    "sku": "JUG-HAS-MLSP-11",
    "inStock": true,
    "sizes": [
      "15 cm"
    ],
    "features": [
      "Más de 20 puntos de articulación dinámica",
      "Manos intercambiables de puño y telaraña",
      "Líneas de traje grabadas con precisión",
      "Empaque retro de colección"
    ]
  },
  {
    "id": "toy-clm-12",
    "department": "Juguetes & Niños",
    "name": "Hot Wheels Pack Coleccionable de 10 Autos Metálicos a Escala 1:64",
    "slug": "hot-wheels-pack-10-autos",
    "category": "juguetes",
    "subcategory": "vehiculos",
    "brand": "Hot Wheels / Mattel",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 599,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 3100,
    "image": "Productos/Hot Wheels.jpg",
    "description": "Colección variada de 10 vehículos de fundición a presión con diseños de autos deportivos, muscle cars y bólidos futuristas compatibles con pistas Hot Wheels.",
    "sku": "JUG-MAT-HW10-12",
    "inStock": true,
    "sizes": [
      "Escala 1:64"
    ],
    "features": [
      "10 vehículos metálicos die-cast",
      "Compatible con todas las pistas Hot Wheels",
      "Pintura brillante y acabados de precisión",
      "Empaque con ventana exhibidora"
    ]
  },
  {
    "id": "home-clm-10",
    "department": "Hogar · Comedores & Mesas",
    "name": "Juego de Comedor Moderno 6 Plazas con Mesa de Cristal Templado y Sillas Blancas",
    "slug": "juego-comedor-moderno-cristal-6-sillas-blancas",
    "category": "hogar",
    "subcategory": "muebles",
    "brand": "D'Avanti Home / Callejón",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 15999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "Productos/Juego de mesa blanco.jpg",
    "description": "Juego de comedor contemporáneo de 6 plazas con cubierta de cristal templado de alta resistencia, estructura de acero cromado pulido y 6 sillas ergonómicas tapizadas en piel sintética blanca de fácil limpieza.",
    "sku": "HGR-CMD-WHT-06",
    "inStock": true,
    "sizes": [
      "Comedor 6 Plazas (150 x 90 x 75 cm)"
    ],
    "features": [
      "Cubierta de cristal templado segura que aporta sensación de amplitud y luminosidad",
      "Sillas acolchadas con costuras reforzadas que brindan máximo confort en sobremesa",
      "Patas con tapones plásticos antiderrapantes que no rayan el piso",
      "Incluye servicio de armado profesional y entrega en planta baja garantizada"
    ],
    "colors": [
      "Blanco Nieve con Cristal"
    ],
    "colorHex": [
      "#f8fafc"
    ],
    "specs": {
      "capacidad": "6 personas cómodamente sentadas",
      "cubierta": "Cristal templado de 10 mm biselado resistente a impactos y cambios térmicos",
      "estructura": "Patas de acero inoxidable con acabado cromado brillante",
      "sillas": "6 sillas con respaldo ergonómico alto y acojinado indeformable",
      "tapiz": "Ecopiel blanca de alta densidad lavable y antimanchas"
    }
  },
  {
    "id": "home-clm-11",
    "department": "Hogar · Comedores & Mesas",
    "name": "Juego de Comedor Imperial 8 Plazas con Mesa de Madera y Sillas Capitoné Gris Grafito",
    "slug": "juego-comedor-imperial-8-plazas-sillas-capitone-gris",
    "category": "hogar",
    "subcategory": "muebles",
    "brand": "D'Avanti Home / Callejón",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 24999,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 186,
    "image": "Productos/juego de mesa gris.jpg",
    "description": "Comedor señorial para 8 personas fabricado en madera de roble con acabado oscuro y elegante centro de cristal templado. Acompañado de 8 sillas de respaldo alto con acabado capitoné artesanal abotonado en suave terciopelo gris grafito.",
    "sku": "HGR-CMD-GRY-08",
    "inStock": true,
    "sizes": [
      "Comedor Imperial 8 Plazas (220 x 105 x 78 cm)"
    ],
    "features": [
      "Diseño aristocrático con respaldo capitoné que viste cualquier salón o comedor",
      "Madera tratada en horno que evita deformaciones por humedad o cambios de clima",
      "Confort excepcional para cenas formales y reuniones familiares prolongadas",
      "Hasta 18 Meses Sin Intereses con tarjetas participantes y garantía de 5 años"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "colors": [
      "Gris Grafito & Madera Oscura"
    ],
    "colorHex": [
      "#374151"
    ],
    "specs": {
      "capacidad": "8 personas con espacio amplio para servicio gourmet",
      "madera": "Estructura robusta en madera sólida de roble con sellador de poliuretano mate",
      "cubierta": "Marco de madera con panel central de cristal templado esmerilado",
      "sillas": "8 sillas capitoné con botones tapizados y relleno de espuma de memoria",
      "tapiz": "Terciopelo tecnológico repelente a líquidos y fácil de aspirar"
    }
  },
  {
    "id": "tech-clm-1",
    "department": "Tecnología · Electrónica",
    "name": "Bocina Bluetooth Portátil Backdrop BD92 Inalámbrica Bass Boost",
    "slug": "bocina-backdrop-bd92-inalambrica",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Backdrop Audio",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1499,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 640,
    "image": "Productos/Bocina Bluetooth Portátil Backdrop BD92 Inalámbrica.jpg",
    "description": "Bocina portátil de diseño cilíndrico robusto con radiadores pasivos de graves profundos, batería para 14 horas de reproducción continua y conectividad TWS para emparejar dos unidades.",
    "sku": "TEC-BCK-BD92-01",
    "inStock": true,
    "features": [
      "Graves profundos con tecnología Bass Boost",
      "Batería recargable de 14 horas de autonomía",
      "Conexión Bluetooth 5.3 de baja latencia",
      "Resistencia a salpicaduras IPX5"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "tech-clm-2",
    "department": "Tecnología · Electrónica",
    "name": "Bafle Bocina Kaiser Bluetooth Alta Potencia Karaoke con Micrófono",
    "slug": "bocina-kaiser-bluetooth-potencia",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Kaiser",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 2099,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 920,
    "image": "Productos/bocina kaiser.jpg",
    "description": "Bafle amplificado de alta fidelidad con luces LED audiorrítmicas, entrada para micrófono y guitarra, ecualizador manual y potencia suficiente para amenizar reuniones grandes.",
    "sku": "TEC-KAI-BF01-02",
    "inStock": true,
    "features": [
      "Woofer de 8 pulgadas de alto rendimiento",
      "Luces LED multicolores audiorrítmicas",
      "Incluye micrófono inalámbrico para karaoke",
      "Batería recargable integrada con asa de transporte"
    ]
  },
  {
    "id": "tech-clm-3",
    "department": "Tecnología · Electrónica",
    "name": "Mini Bocina Bluetooth Ginga Sound Pro Compacta Resistente",
    "slug": "mini-bocina-ginga-sound-pro",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Ginga",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 599,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 380,
    "image": "Productos/ginga mini bocina.jpg",
    "description": "Bocina de bolsillo ultra ligera con sonido claro y definido, correa de silicona para colgar en mochila o bicicleta y micrófono integrado para llamadas manos libres.",
    "sku": "TEC-GIN-MB01-03",
    "inStock": true,
    "features": [
      "Tamaño ultra compacto cabe en la palma de la mano",
      "Correa integrada para colgar",
      "Micrófono con cancelación de eco para llamadas",
      "Hasta 6 horas de música continua"
    ]
  },
  {
    "id": "tech-clm-4",
    "department": "Tecnología · Electrónica",
    "name": "Mini Bocina Portátil Total Black Impermeable IPX7 Outdoor",
    "slug": "mini-bocina-portatil-negra-ipx7",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Callejón Sound",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 899,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 710,
    "image": "Productos/mini bocina portatil negra.jpg",
    "description": "Construida para resistir agua, arena y golpes. Certificación IPX7 sumergible, cubierta de goma reforzada anti-impactos y sonido 360° nítido.",
    "sku": "TEC-CLM-MBIPX7-04",
    "inStock": true,
    "features": [
      "Resistente al agua IPX7 sumergible hasta 1 metro",
      "Sonido envolvente 360 grados",
      "Carga rápida por puerto USB-C",
      "Cubierta de goma anti-golpes"
    ]
  },
  {
    "id": "tech-clm-5",
    "department": "Tecnología · Electrónica",
    "name": "Bocina Bluetooth Azul Cobalto 360° Soundwave Surround",
    "slug": "bocina-bluetooth-azul-soundwave",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Callejón Sound",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1199,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 460,
    "image": "Productos/bocina bluetooth azul.jpg",
    "description": "Acabado textil acústico en tono azul cobalto con drivers duales de rango completo y batería para 10 horas de música continua sin distorsión.",
    "sku": "TEC-CLM-BBAZUL-05",
    "inStock": true,
    "features": [
      "Drivers duales estéreo de rango completo",
      "Tejido acústico premium resistente al polvo",
      "Conexión Bluetooth 5.2 de 15 metros de alcance",
      "Controles táctiles superiores"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "tech-clm-6",
    "department": "Tecnología · Electrónica",
    "name": "Audífonos Diadema Sony Retro Studio Monitor Bass Boost",
    "slug": "audifonos-sony-diadema-studio",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Sony",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1599,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 1640,
    "image": "Productos/Audífonos Sony.jpg",
    "description": "Audífonos circumaurales con diafragmas de neodimio de 40 mm, almohadillas acolchadas de espuma viscoelástica para largas sesiones y cable libre de oxígeno reforzado.",
    "sku": "TEC-SON-ADST-06",
    "inStock": true,
    "features": [
      "Diafragmas de 40 mm para graves profundos",
      "Diseño plegable giratorio para fácil transporte",
      "Almohadillas acolchadas anti-fatiga",
      "Aislamiento pasivo de ruido superior"
    ]
  },
  {
    "id": "tech-clm-7",
    "department": "Tecnología · Electrónica",
    "name": "Audífonos Over-Ear Hi-Res Audio Estéreo Aislantes Alámbricos",
    "slug": "audifonos-hi-res-audio-profesional",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Audio-Technica / Callejón",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 580,
    "image": "Productos/Audífonos.jpg",
    "description": "Calidad de audio para audiófilos y producción musical con certificación Hi-Res, respuesta de frecuencia extendida de 5Hz a 40kHz y diadema autoajustable con almohadillas transpirables.",
    "sku": "TEC-CLM-AUDHR-07",
    "inStock": true,
    "features": [
      "Certificación Hi-Res Audio con rango 5Hz-40kHz",
      "Cable desmontable con conector chapado en oro",
      "Diadema ergonómica con distribución uniforme de peso",
      "Claridad cristalina en voces e instrumentos"
    ]
  },
  {
    "id": "fash-clm-1",
    "department": "Moda · Ropa",
    "name": "Chamarra Biker en Piel Vacuno Premium de Lujo Hombre",
    "slug": "chamarra-piel-premium-hombre",
    "category": "ropa",
    "subcategory": "chamarras",
    "gender": "hombre",
    "brand": "D'Avanti Sartoria",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 4699,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 420,
    "image": "Productos/chamarra de piel premium.jpg",
    "description": "Confeccionada artesanalmente en piel de vacuno flor entera con curtido vegetal. Cuello con solapas a presión, cierres metálicos YKK envejecidos y forro interior de algodón suave.",
    "sku": "MOD-DAV-CHKPRM-01",
    "inStock": true,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Negro Clásico"
    ],
    "colorHex": [
      "#111111"
    ],
    "features": [
      "100% Piel vacuno flor entera",
      "Cierres metálicos YKK de uso rudo",
      "Bolsillos interiores de seguridad",
      "Corte entallado clásico atemporal"
    ]
  },
  {
    "id": "fash-clm-2",
    "department": "Moda · Ropa",
    "name": "Chamarra Biker en Piel Sintética para Mujer con Cinturón",
    "slug": "chamarra-piel-sintetica-mujer",
    "category": "ropa",
    "subcategory": "chamarras",
    "gender": "mujer",
    "brand": "D'Avanti Studio",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2299,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 890,
    "image": "Productos/chamarra de piel sintetica mujer.jpg",
    "colors": [
      "Negro Biker",
      "Rojo Pasión"
    ],
    "colorHex": [
      "#18181b",
      "#dc2626"
    ],
    "colorImages": {
      "Negro Biker": "Productos/chamarra de piel sintetica mujer.jpg",
      "Rojo Pasión": "Productos/chamarra de piel sintetica roja mujer.jpg"
    },
    "description": "Silueta entallada moderna con solapas en pico, cremalleras asimétricas plateadas, charreteras en hombros y cinturón ajustable a la cintura en piel sintética suave de tacto sedoso.",
    "sku": "MOD-DAV-CHKMJR-02",
    "inStock": true,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "features": [
      "Piel sintética eco-friendly de alta durabilidad",
      "Cinturón inferior con hebilla metálica",
      "Forro térmico satinado",
      "Lavable en seco con facilidad"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "fash-clm-3",
    "department": "Moda · Ropa",
    "name": "Blusa Rayada con Líneas Marinera Chic Manga 3/4",
    "slug": "blusa-rayada-con-lineas-marinera",
    "category": "ropa",
    "subcategory": "camisas",
    "gender": "mujer",
    "brand": "D'Avanti Studio",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 999,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 310,
    "image": "Productos/blusa con lineas.jpg",
    "description": "Elegante blusa en tejido de punto elástico con estampado a rayas horizontales estilo náutico parisino. Cuello barco favorecedor y manga francesa 3/4.",
    "sku": "MOD-DAV-BLSRAY-03",
    "inStock": true,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Blanco con Rayas Negras"
    ],
    "colorHex": [
      "#f4f4f5"
    ],
    "features": [
      "Algodón con elastano para ajuste cómodo",
      "Cuello barco amplio y estilizado",
      "Manga 3/4 versátil para toda estación",
      "Caída suave que no se arruga"
    ]
  },
  {
    "id": "fash-clm-4",
    "department": "Moda · Ropa",
    "name": "Camisa Casual Resort Fit de Manga Corta en Lino Puro",
    "slug": "camisa-casual-manga-corta-lino",
    "category": "ropa",
    "subcategory": "camisas",
    "gender": "hombre",
    "brand": "D'Avanti Signature",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1149,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 540,
    "image": "Productos/camisa casual de manga corta.jpg",
    "description": "Ideal para climas cálidos y fines de semana relajados. Confeccionada en mezcla de lino y algodón transpirable con cuello camp con botones nacarados.",
    "sku": "MOD-DAV-CMSMC-04",
    "inStock": true,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Azul Cielo"
    ],
    "colorHex": [
      "#7dd3fc"
    ],
    "features": [
      "Mezcla 70% lino y 30% algodón",
      "Cuello camp estilo resort",
      "Bolsillo en pecho funcional",
      "Corte relajado confortable"
    ]
  },
  {
    "id": "fash-clm-5",
    "department": "Moda · Ropa",
    "name": "Playera Polo Clásica Piqué de Algodón Celeste",
    "slug": "playera-polo-clasica-celeste",
    "category": "ropa",
    "subcategory": "camisas",
    "gender": "hombre",
    "brand": "D'Avanti Signature",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1199,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 780,
    "image": "Productos/camiseta polo clasica color celeste.jpg",
    "description": "Tejido piqué de algodón peinado de alta densidad con cuello acanalado reforzado que no se deforma, dos botones grabados y bordado distintivo en el pecho.",
    "sku": "MOD-DAV-POLOCEL-05",
    "inStock": true,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Celeste Cielo"
    ],
    "colorHex": [
      "#38bdf8"
    ],
    "features": [
      "100% Algodón piqué de 220 gsm",
      "Cuello tejido que mantiene la forma",
      "Aberturas laterales reforzadas",
      "Corte Classic Fit cómodo"
    ]
  },
  {
    "id": "fash-clm-6",
    "department": "Moda · Ropa",
    "name": "Playera Polo Clásica Piqué de Algodón Azul Marino Signature",
    "slug": "playera-polo-clasica-azul-marino",
    "category": "ropa",
    "subcategory": "camisas",
    "gender": "hombre",
    "brand": "D'Avanti Signature",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1299,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 1120,
    "image": "Productos/polo clasica azul marino.jpg",
    "description": "El tono azul marino más versátil del armario masculino. Algodón piqué prémium transpirable, costuras dobles reforzadas y teñido resistente al desgaste por lavado.",
    "sku": "MOD-DAV-POLOMAR-06",
    "inStock": true,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Azul Marino Oxford"
    ],
    "colorHex": [
      "#0f172a"
    ],
    "features": [
      "Algodón mercerizado con brillo sutil",
      "Botones de nácar genuino",
      "Tratamiento anti-pilling",
      "Ideal para combinaciones formales y casuales"
    ]
  },
  {
    "id": "fash-clm-7",
    "department": "Moda · Ropa",
    "name": "Suéter de Punto Fino Cuello Redondo Azul para Mujer",
    "slug": "sueter-punto-azul-mujer",
    "category": "ropa",
    "subcategory": "camisas",
    "gender": "mujer",
    "brand": "D'Avanti Studio",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1149,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 450,
    "image": "Productos/sueter azul mujer.jpg",
    "gallery": [
      "Productos/sueter azul mujer 2.jpg"
    ],
    "description": "Tejido de punto suave con caída fluida y puños acanalados. Perfecto para llevar solo o en capas sobre camisas durante días frescos.",
    "sku": "MOD-DAV-STRMJR-07",
    "inStock": true,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Azul Océano"
    ],
    "colorHex": [
      "#2563eb"
    ],
    "features": [
      "Punto fino de tacto cashmere",
      "Cuello redondo con ribete suave",
      "Corte ligeramente holgado moderno",
      "Fácil mantenimiento en lavadora"
    ]
  },
  {
    "id": "fash-clm-8",
    "department": "Moda · Ropa",
    "name": "Suéter Cuello Redondo Negro Unisex en Tejido de Punto Fino",
    "slug": "sueter-negro-unisex-punto",
    "category": "ropa",
    "subcategory": "camisas",
    "gender": "unisex",
    "brand": "D'Avanti Maison",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1199,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 680,
    "image": "Productos/sueter negro unisex.jpg",
    "description": "El suéter negro imprescindible. Silueta relajada unisex en punto milanés con ribete elástico en puños y pretina. Elegancia sobria en cualquier ocasión.",
    "sku": "MOD-DAV-STRNEG-08",
    "inStock": true,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Negro Absoluto"
    ],
    "colorHex": [
      "#09090b"
    ],
    "features": [
      "Corte unisex relajado",
      "Tejido térmico ultra suave",
      "Pretina y puños reforzados",
      "Resistente a deformaciones"
    ]
  },
  {
    "id": "fash-clm-9",
    "department": "Moda · Ropa",
    "name": "Vestido Floral Bohemio Estampado Primaveral con Vuelo",
    "slug": "vestido-floral-bohemio-primaveral",
    "category": "ropa",
    "subcategory": "vestidos",
    "gender": "mujer",
    "brand": "D'Avanti Studio",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1499,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 520,
    "image": "Productos/vestido floral.jpg",
    "description": "Romántico vestido midi con estampado floral botánico sobre chifón vaporoso. Escote en V cruzado, cintura elástica fruncida y falda con volantes escalonados.",
    "sku": "MOD-DAV-VSTFLR-09",
    "inStock": true,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Estampado Floral"
    ],
    "colorHex": [
      "#f43f5e"
    ],
    "features": [
      "Chifón ligero con forro interior opaco",
      "Cintura elástica que enmarca la figura",
      "Volantes inferiores con movimiento",
      "Cierre con lazo en espalda"
    ]
  },
  {
    "id": "fash-clm-10",
    "department": "Moda · Ropa",
    "name": "Pantalón Chino Slim Fit en Algodón Elástico Premium",
    "slug": "pantalon-chino-slim-fit-premium",
    "category": "ropa",
    "subcategory": "pantalones",
    "gender": "hombre",
    "brand": "Dockers / D'Avanti",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1599,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 1460,
    "image": "Productos/Pantalón Chino Slim Fit.jpg",
    "colors": [
      "Caqui Arena",
      "Blanco Marfil",
      "Negro Formal"
    ],
    "colorHex": [
      "#d97706",
      "#f8fafc",
      "#0f172a"
    ],
    "colorImages": {
      "Caqui Arena": "Productos/Pantalón Chino Slim Fit.jpg",
      "Blanco Marfil": "Productos/Pantalón Chino Slim Fit blanco.jpg",
      "Negro Formal": "Productos/Pantalón Chino Slim Fit nergo.jpg"
    },
    "description": "El chino moderno definitivo con tecnología Smart 360 Flex para flexibilidad en 4 direcciones, pretina flexible oculta y bolsillos de seguridad con cremallera.",
    "sku": "MOD-DCK-CHN01-10",
    "inStock": true,
    "sizes": [
      "30x32",
      "32x32",
      "34x32",
      "36x32"
    ],
    "features": [
      "Tejido elástico de 4 vías Smart 360 Flex",
      "Pretina interior flexible de confort",
      "Bolsillos traseros con botones de ojal",
      "Planchado fácil resistente a arrugas"
    ]
  },
  {
    "id": "fash-clm-11",
    "department": "Moda · Ropa",
    "name": "Pantalón de Mezclilla Denim para Mujer Corte Recto Clásico",
    "slug": "pantalon-mezclilla-mujer-denim",
    "category": "ropa",
    "subcategory": "pantalones",
    "gender": "mujer",
    "brand": "Levi's / D'Avanti",
    "badge": "Buen Fin -60%",
    "badgeType": "offer",
    "price": 600,
    "originalPrice": 1499,
    "rating": 4.8,
    "reviewsCount": 920,
    "image": "Productos/pantalon de mezclilla mujer.jpg",
    "colors": [
      "Azul Índigo",
      "Negro Azabache"
    ],
    "colorHex": [
      "#1d4ed8",
      "#18181b"
    ],
    "colorImages": {
      "Azul Índigo": "Productos/pantalon de mezclilla mujer.jpg",
      "Negro Azabache": "Productos/pantalon de meclilla negro mujer.jpg"
    },
    "description": "Denim estructurado con el toque justo de elasticidad para moldear la cadera sin perder la forma. Tiro alto estilizador y pierna recta clásica que alarga la figura.",
    "sku": "MOD-LVS-JNSTR-11",
    "inStock": true,
    "sizes": [
      "26",
      "28",
      "30",
      "32"
    ],
    "features": [
      "Tiro alto favorecedor que estiliza",
      "Denim con 2% elastano para movilidad",
      "5 bolsillos clásicos con remaches reforzados",
      "Lavado auténtico de larga duración"
    ],
    "buenFinDiscount": 60,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 60% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "fash-clm-12",
    "department": "Moda · Ropa",
    "name": "Short de Mezclilla Denim Casual Deslavado para Mujer",
    "slug": "short-mezclilla-denim-mujer",
    "category": "ropa",
    "subcategory": "pantalones",
    "gender": "mujer",
    "brand": "D'Avanti Studio",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 899,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 430,
    "image": "Productos/short mezclilla mujer.jpg",
    "colors": [
      "Azul Deslavado",
      "Rosa Pastel"
    ],
    "colorHex": [
      "#60a5fa",
      "#f472b6"
    ],
    "colorImages": {
      "Azul Deslavado": "Productos/short mezclilla mujer.jpg",
      "Rosa Pastel": "Productos/short mezclilla rosa mujer.jpg"
    },
    "description": "Short denim de tiro medio con dobladillo deshilachado sutil, bolsillos frontales funcionales y lavado vintage ideal para días soleados.",
    "sku": "MOD-DAV-SHRTDN-12",
    "inStock": true,
    "sizes": [
      "26",
      "28",
      "30",
      "32"
    ],
    "features": [
      "Mezclilla 100% algodón resistente",
      "Dobladillo deshilachado moderno",
      "Botones y remaches de latón dorado",
      "Corte relajado cómodo en piernas"
    ]
  },
  {
    "id": "fash-clm-13",
    "department": "Moda · Ropa",
    "name": "Sandalias de Tiras Cruzadas de Piel Negra para Mujer",
    "slug": "sandalias-tiras-cruzadas-piel-negra",
    "category": "ropa",
    "subcategory": "calzado",
    "gender": "mujer",
    "brand": "D'Avanti Studio",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1199,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 370,
    "image": "Productos/sandalias negro.jpg",
    "description": "Sandalias planas de diseño minimalista con tiras de piel suave al tacto, plantilla acolchada ergonómica y suela de goma antideslizante para caminar todo el día.",
    "sku": "MOD-DAV-SNDNEG-13",
    "inStock": true,
    "sizes": [
      "23",
      "24",
      "25",
      "26"
    ],
    "colors": [
      "Negro Piel"
    ],
    "colorHex": [
      "#111111"
    ],
    "features": [
      "Piel vacuno suave que no roza",
      "Plantilla con memoria de espuma",
      "Suela antideslizante de perfil bajo",
      "Hebilla lateral ajustable en tobillo"
    ]
  },
  {
    "id": "fash-clm-14",
    "department": "Moda · Ropa",
    "name": "Zapatos Oxford Artesanales en Piel Café Pátina para Hombre",
    "slug": "zapatos-oxford-piel-cafe-patina",
    "category": "ropa",
    "subcategory": "calzado",
    "gender": "hombre",
    "brand": "D'Avanti Sartoria",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2999,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 480,
    "image": "Productos/zapatos oxford cafe.jpg",
    "description": "Zapatos de vestir con construcción Goodyear welt en piel vacuno de primera selección teñida a mano con acabado pátina ahumada en puntera.",
    "sku": "MOD-DAV-ZOXFCF-14",
    "inStock": true,
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "colors": [
      "Café Pátina"
    ],
    "colorHex": [
      "#78350f"
    ],
    "features": [
      "Construcción artesanal Goodyear Welt",
      "Piel teñida a mano con acabado degradado",
      "Suela de cuero legítimo con inserto de goma",
      "Interior forrado en piel transpirable"
    ]
  },
  {
    "id": "fash-clm-15",
    "department": "Moda · Ropa",
    "name": "Zapatos Derby Formales en Piel Azul Marino con Suela Café",
    "slug": "zapatos-derby-azul-suela-cafe",
    "category": "ropa",
    "subcategory": "calzado",
    "gender": "hombre",
    "brand": "Cole Haan / D'Avanti",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 2799,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 310,
    "image": "Productos/zapatos azules con suela cafe.jpg",
    "description": "Contraste moderno de piel de becerro azul medianoche con cerco de cuero café caramelo. Combina la elegancia de sastrería con la amortiguación de una suela flexible.",
    "sku": "MOD-CH-ZDBAZ-15",
    "inStock": true,
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "colors": [
      "Azul Marino con Café"
    ],
    "colorHex": [
      "#1e3a8a"
    ],
    "features": [
      "Piel de becerro de grano fino",
      "Cerco cosido artesanal en contraste",
      "Plantilla de amortiguación anatómica",
      "Cordones encerados de alta resistencia"
    ]
  },
  {
    "id": "fash-clm-16",
    "department": "Moda · Ropa",
    "name": "Zapatos de Vestir Oxford de Piel Negra Lustrada Formal",
    "slug": "zapatos-oxford-piel-negra-formal",
    "category": "ropa",
    "subcategory": "calzado",
    "gender": "hombre",
    "brand": "Florsheim / D'Avanti",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2599,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 650,
    "image": "Productos/zapatos negros.jpg",
    "description": "El calzado definitivo para trajes y ocasiones de gala. Piel vacuno de lustre brillante con puntera lisa sin costuras, cordones ciegos y horma europea estilizada.",
    "sku": "MOD-FLR-ZOXFNG-16",
    "inStock": true,
    "sizes": [
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "colors": [
      "Negro Lustrado"
    ],
    "colorHex": [
      "#09090b"
    ],
    "features": [
      "Piel de becerro pulida con acabado espejo",
      "Horma europea elegante y entallada",
      "Suela de piel con tacón de goma antideslizante",
      "Ideal para eventos de etiqueta y negocios"
    ]
  },
  {
    "id": "home-clm-1",
    "department": "Hogar, Muebles & Gourmet",
    "name": "Batería de Cocina Antiadherente Granito Pro 12 Piezas",
    "slug": "bateria-cocina-granito-pro-12pz",
    "category": "hogar",
    "subcategory": "cocina",
    "brand": "T-fal / Callejón Gourmet",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 3199,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 840,
    "image": "Productos/Batería de Cocina 1.jpg",
    "gallery": [
      "Productos/Batería de Cocina.jpg"
    ],
    "description": "Revestimiento mineral de granito multicapa 100% libre de PFOA, plomo y cadmio. Base de inducción difusora de calor homogéneo y mangos de baquelita de tacto frío.",
    "sku": "HOG-TFL-BCG12-01",
    "inStock": true,
    "features": [
      "12 piezas completas con tapas de cristal templado",
      "Recubrimiento antiadherente de partículas minerales",
      "Apta para estufas de gas, inducción y vitrocerámica",
      "Mangos ergonómicos que no se calientan"
    ]
  },
  {
    "id": "home-clm-2",
    "department": "Hogar, Muebles & Gourmet",
    "name": "Set de Cocina Integral en Acero Inoxidable Quirúrgico Triple Fondo",
    "slug": "set-cocina-acero-inoxidable-quirurgico",
    "category": "hogar",
    "subcategory": "cocina",
    "brand": "Cuisinart / Callejón",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 3899,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 490,
    "image": "Productos/set de cocina.jpg",
    "description": "Acero inoxidable 18/10 de alta resistencia que preserva los sabores puros de los alimentos. Fondo encapsulado de aluminio de 3 capas para máxima eficiencia térmica.",
    "sku": "HOG-CUI-SCACR-02",
    "inStock": true,
    "features": [
      "Acero inoxidable 18/10 pulido espejo",
      "Base triple fondo difusora termo-conductora",
      "Marcas medidoras de volumen en el interior",
      "Apta para horno hasta 260°C y lavavajillas"
    ]
  },
  {
    "id": "home-clm-3",
    "department": "Hogar, Muebles & Gourmet",
    "name": "Cafetera Automática Programable de Goteo con Jarra Térmica",
    "slug": "cafetera-automatica-programable-goteo",
    "category": "hogar",
    "subcategory": "electrodomesticos",
    "brand": "Oster Gourmet / Callejón",
    "badge": "Buen Fin -75%",
    "badgeType": "offer",
    "price": 475,
    "originalPrice": 1899,
    "rating": 4.7,
    "reviewsCount": 670,
    "image": "Productos/cafetera automatica.jpg",
    "description": "Despierta cada mañana con el aroma de café recién hecho. Pantalla LED digital programable 24 horas, selector de intensidad de colado y jarra térmica de acero inoxidable.",
    "sku": "HOG-OST-CFPG-03",
    "inStock": true,
    "features": [
      "Temporizador digital programable con reloj LCD",
      "Jarra térmica de doble pared que mantiene el café caliente 4 horas",
      "Selector de fuerza de aroma para café intenso o suave",
      "Filtro permanente lavable de malla dorada"
    ],
    "buenFinDiscount": 75,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 75% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "home-clm-4",
    "department": "Hogar, Muebles & Gourmet",
    "name": "Cafetera Espresso Clásica con Vaporizador de Alta Presión 15 Bares",
    "slug": "cafetera-espresso-clasica-15bares",
    "category": "hogar",
    "subcategory": "electrodomesticos",
    "brand": "De'Longhi / Callejón",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 3499,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 910,
    "image": "Productos/Cafetera Espresso.jpg",
    "description": "Bomba italiana de 15 bares que extrae crema dorada y espesa. Tubo de vaporización tradicional para espumar leche densa ideal para capuchinos y lattes estilo barista.",
    "sku": "HOG-DLG-CFESP-04",
    "inStock": true,
    "features": [
      "Bomba de presión italiana de 15 bares",
      "Portafiltro dual para café molido o monodosis ESE",
      "Espumador manual giratorio de leche Panarello",
      "Depósito de agua transparente desmontable de 1.1L"
    ]
  },
  {
    "id": "home-clm-5",
    "department": "Hogar, Muebles & Gourmet",
    "name": "Colchón Individual Ortopédico con Núcleo Foam y Tela Transpirable",
    "slug": "colchon-individual-ortopedico-foam",
    "category": "hogar",
    "subcategory": "recamara",
    "brand": "Spring Air / Callejón",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 4299,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 520,
    "image": "Productos/colchon individual.jpg",
    "description": "Diseñado para brindar soporte anatómico correcto a la columna vertebral. Espuma de alta resiliencia de firmeza media con tejido hipoalergénico fresco al tacto.",
    "sku": "HOG-SPR-CLCHIND-05",
    "inStock": true,
    "features": [
      "Firmeza media ortopédica ideal para espalda",
      "Tratamiento anti-ácaros y antibacterial",
      "No necesita voltearse gracias a su sistema Never Turn",
      "Garantía de confort de 5 años"
    ]
  },
  {
    "id": "home-clm-6",
    "department": "Hogar, Muebles & Gourmet",
    "name": "Colchón Matrimonial Híbrido Pillow Top con Sistema Anti-Ácaros",
    "slug": "colchon-matrimonial-hibrido-pillow-top",
    "category": "hogar",
    "subcategory": "recamara",
    "brand": "Sealy Posturepedic / Callejón",
    "badge": "Buen Fin -50%",
    "badgeType": "offer",
    "price": 4250,
    "originalPrice": 8499,
    "rating": 4.9,
    "reviewsCount": 780,
    "image": "Productos/colchon matrimonial.jpg",
    "description": "Combinación de colchoneta Euro-Pillow acolchada con resortes embolsados individuales que absorben los movimientos de la pareja para un sueño continuo y profundo.",
    "sku": "HOG-SLY-CLCHMAT-06",
    "inStock": true,
    "features": [
      "Resortes independientes Pocket Spring sin transferencia de movimiento",
      "Colchoneta superior Euro-Pillow con fibras de bambú",
      "Refuerzo perimetral que evita hundimientos en los bordes",
      "Altura total de 32 cm de confort de lujo"
    ],
    "buenFinDiscount": 50,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 50% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "home-clm-7",
    "department": "Hogar, Muebles & Gourmet",
    "name": "Robot Aspirador Inteligente Láser Mapping con Sensores Anticaída",
    "slug": "robot-aspirador-inteligente-laser",
    "category": "hogar",
    "subcategory": "electrodomesticos",
    "brand": "Xiaomi / Callejón Smart",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 5199,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 630,
    "image": "Productos/robot aspirador 1.jpg",
    "gallery": [
      "Productos/robot aspirador 2.jpg"
    ],
    "description": "Navegación láser LDS de 360° que mapea tu hogar con precisión milimétrica. Potencia de succión de 4000 Pa, control total desde la app y batería de 5200 mAh para casas grandes.",
    "sku": "HOG-XIA-RBT01-07",
    "inStock": true,
    "features": [
      "Sensor LiDAR 360° con mapas en tiempo real multinivel",
      "Potencia de succión ciclónica de 4000 Pa",
      "Retorno automático a base de carga inteligente",
      "Zonas prohibidas y barreras virtuales configurables en app"
    ]
  },
  {
    "id": "sport-clm-1",
    "department": "Deportes, Fitness & Outdoor",
    "name": "Tenis Nike Air Max Blanco con Gris Running & Lifestyle",
    "slug": "tenis-nike-air-max-blanco-gris",
    "category": "deportes",
    "subcategory": "calzado",
    "brand": "Nike",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 3299,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 1650,
    "image": "Productos/teni nike air max blanco con gris.jpg",
    "gallery": [
      "Productos/tenis nike.jpg"
    ],
    "description": "La icónica unidad Air Max visible proporciona amortiguación reactiva inigualable. Parte superior en malla transpirable con superposiciones sintéticas duraderas y suela tipo waffle.",
    "sku": "DEP-NIK-AMBG-01",
    "inStock": true,
    "sizes": [
      "25",
      "26",
      "27",
      "28",
      "29"
    ],
    "colors": [
      "Blanco con Gris Platino"
    ],
    "colorHex": [
      "#e2e8f0"
    ],
    "features": [
      "Cámara de aire Max Air en talón para máxima amortiguación",
      "Malla ventilada de secado rápido",
      "Suela de caucho con patrón waffle de tracción superior",
      "Diseño deportivo versátil para correr y vestir"
    ]
  },
  {
    "id": "sport-clm-2",
    "department": "Deportes, Fitness & Outdoor",
    "name": "Tenis Nike Stealth Total Black para Entrenamiento de Alto Rendimiento",
    "slug": "tenis-nike-stealth-total-black",
    "category": "deportes",
    "subcategory": "calzado",
    "brand": "Nike",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2899,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 890,
    "image": "Productos/nike us negro.jpg",
    "description": "Diseñados para gimnasio, sprints y entrenamientos funcionales. Construcción ligera y flexible con soporte en mediopié y tracción multidireccional en color negro absoluto.",
    "sku": "DEP-NIK-STBL-02",
    "inStock": true,
    "sizes": [
      "25",
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "colors": [
      "Negro Stealth"
    ],
    "colorHex": [
      "#09090b"
    ],
    "features": [
      "Amortiguación de espuma reactiva de perfil bajo",
      "Talón plano y ancho que brinda estabilidad en levantamientos",
      "Parte superior de malla resistente a la abrasión",
      "Acabado Total Black discreto y elegante"
    ]
  },
  {
    "id": "sport-clm-3",
    "department": "Deportes, Fitness & Outdoor",
    "name": "Red para Portería Deportiva Nike Pro Reforzada All-Weather",
    "slug": "red-porteria-deportiva-nike-pro",
    "category": "deportes",
    "subcategory": "fitness",
    "brand": "Nike Training",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1199,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 320,
    "image": "Productos/red nike.jpg",
    "description": "Red de entrenamiento de alta durabilidad confeccionada en polietileno de alta densidad trenzado sin nudos. Tratamiento UV resistente a lluvia, sol intenso y balonazos potentes.",
    "sku": "DEP-NIK-REDPR-03",
    "inStock": true,
    "sizes": [
      "Medida Oficial"
    ],
    "features": [
      "Malla trenzada de 3 mm de grosor resistente al desgaste",
      "Protección contra rayos UV y humedad impermeable",
      "Borde reforzado con costuras dobles de seguridad",
      "Instalación rápida en cualquier estructura estándar"
    ],
    "offerStartDate": "2026-11-06T00:00:00-06:00"
  },
  {
    "id": "toy-clm-15",
    "name": "Lanzador Nerf Fortnite B-AR Motorizado con Ráfaga de Dardos",
    "slug": "lanzador-nerf-fortnite-b-ar",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Nerf",
    "department": "Juguetes · Lanzadores & Deportes",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1699,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 84,
    "age": "+8 años",
    "image": "Productos/Lanzador NEF Fornite.jpg",
    "description": "Inspirado en el equipamiento de Fortnite con el envoltorio Converge. Cuenta con lanzamiento motorizado de 10 dardos continuos y clip extraíble de alta precisión.",
    "sku": "NRF-FTN-BAR01",
    "inStock": true,
    "sizes": [
      "Clip 10 Dardos + 10 Dardos Elite"
    ],
    "colors": [
      "Diseño Converge Camuflaje"
    ],
    "colorHex": [
      "#0284c7"
    ],
    "specs": {
      "alcance": "Hasta 24 metros de distancia",
      "dardos": "Incluye 10 dardos oficiales Nerf Elite",
      "baterias": "Requiere 4 pilas C (no incluidas)",
      "edad": "Recomendado para mayores de 8 años"
    },
    "features": [
      "Lanzamiento motorizado por ráfagas de 10 dardos",
      "Mira de precisión integrada en el armazón",
      "Envoltorio oficial con licencia Fortnite Epic Games"
    ]
  },
  {
    "id": "toy-clm-16",
    "name": "Lanzador Nerf Elite 2.0 Shockwave RD-15 con Tambor Giratorio",
    "slug": "lanzador-nerf-elite-shockwave-rd15",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Nerf",
    "department": "Juguetes · Lanzadores & Deportes",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1249,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 112,
    "age": "+8 años",
    "image": "Productos/Lanzador NERF Elite 2.0.jpg",
    "description": "Lanzador táctico personalizable con tambor giratorio de 15 dardos y acción de bombeo manual sin necesidad de baterías.",
    "sku": "NRF-EL2-SHK15",
    "inStock": true,
    "sizes": [
      "Tambor 15 Dardos + 30 Dardos"
    ],
    "colors": [
      "Azul Eléctrico / Naranja"
    ],
    "colorHex": [
      "#0277bd",
      "#ff6d00"
    ],
    "specs": {
      "alcance": "Hasta 27 metros de distancia",
      "dardos": "Incluye 30 dardos oficiales Nerf Elite 2.0",
      "baterias": "No requiere baterías (bombeo manual)",
      "edad": "Recomendado para mayores de 8 años"
    },
    "features": [
      "Tambor giratorio de 15 dardos para fuego continuo rápido",
      "3 rieles tácticos y puntos de unión para culata y cañón",
      "Mecanismo de acción por bombeo suave y resistente"
    ]
  },
  {
    "id": "toy-clm-17",
    "name": "Lanzador Nerf Halo Infinite MA40 Motorizado Réplica Oficial",
    "slug": "lanzador-nerf-halo-infinite-ma40",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Nerf",
    "department": "Juguetes · Lanzadores & Deportes",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2299,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 156,
    "age": "+8 años",
    "image": "Productos/Lanzador NERF halo infinite.jpg",
    "description": "Réplica oficial a escala inspirada en el legendario rifle de asalto MA40 de Halo Infinite. Lanzamiento motorizado con clip de 10 dardos y riel táctico.",
    "sku": "NRF-HALO-MA40",
    "inStock": true,
    "sizes": [
      "Clip 10 Dardos + 10 Dardos Elite"
    ],
    "colors": [
      "Verde Olivo UNSC"
    ],
    "colorHex": [
      "#4b5320"
    ],
    "specs": {
      "alcance": "Hasta 25 metros de alcance balístico",
      "dardos": "Incluye 10 dardos Nerf Elite especiales",
      "baterias": "Requiere 4 pilas C (no incluidas)",
      "edad": "Para fanáticos y jugadores de +8 años"
    },
    "features": [
      "Réplica con licencia oficial de 343 Industries / Halo Infinite",
      "Motor de alta aceleración para disparo semiautomático veloz",
      "Incluye tarjeta con código de contenido descargable para Halo Infinite"
    ]
  },
  {
    "id": "toy-clm-18",
    "name": "Lanzador Nerf Ultra One Motorizado de Alta Velocidad y Precisión",
    "slug": "lanzador-nerf-ultra-one-motorizado",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Nerf",
    "department": "Juguetes · Lanzadores & Deportes",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 97,
    "age": "+8 años",
    "image": "Productos/Lanzador NERF ultra one.jpg",
    "description": "Experimenta la distancia extrema con dardos Nerf Ultra que vuelan hasta 36 metros. Tambor motorizado de alta capacidad de 25 dardos.",
    "sku": "NRF-ULT-ONE25",
    "inStock": true,
    "sizes": [
      "Tambor 25 Dardos Ultra"
    ],
    "colors": [
      "Blanco, Naranja y Oro"
    ],
    "colorHex": [
      "#f8fafc",
      "#ea580c",
      "#eab308"
    ],
    "specs": {
      "alcance": "Alcance récord de hasta 36 metros",
      "dardos": "Incluye 25 dardos oficiales Nerf Ultra con punta aerodinámica",
      "baterias": "Requiere 4 pilas C (no incluidas)",
      "edad": "Mayores de 8 años"
    },
    "features": [
      "Tambor motorizado de 25 dardos para ráfagas continuas masivas",
      "Tecnología Aerofin de vuelo ultra recto y veloz",
      "Porta dardos en culata para recargas inmediatas"
    ]
  },
  {
    "id": "fash-clm-17",
    "department": "Moda · Ropa",
    "name": "Playera Polo Clásica Piqué de Algodón Negro Carbón Signature",
    "slug": "playera-polo-clasica-negro-carbon",
    "category": "ropa",
    "subcategory": "camisas",
    "gender": "hombre",
    "brand": "D'Avanti Signature",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1299,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 940,
    "image": "Productos/Playera tipo polo color negro.jpg",
    "description": "El tono negro carbón elegante y versátil. Algodón piqué prémium transpirable de alta densidad, cuello acanalado reforzado indeformable y botones grabados.",
    "sku": "MOD-DAV-POLOBLK-17",
    "inStock": true,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Negro Carbón"
    ],
    "colorHex": [
      "#18181b"
    ],
    "features": [
      "100% Algodón piqué peinado de 220 gsm",
      "Teñido reactivo profundo resistente al desvanecimiento",
      "Cuello acanalado indeformable",
      "Aberturas laterales reforzadas y corte Classic Fit"
    ]
  },
  {
    "id": "fash-clm-18",
    "department": "Moda · Bolsos & Accesorios",
    "name": "Bolso Crossbody Elegante para Dama con Cadena y Broche",
    "slug": "bolso-crossbody-dama-elegante",
    "category": "ropa",
    "subcategory": "bolsas",
    "gender": "mujer",
    "brand": "D'Avanti Atelier",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1899,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 168,
    "image": "Productos 2/Bolso Crossbody para Mujer.jpg",
    "description": "Bolso bandolera crossbody de estructura compacta en piel sintética suave con correa de eslabones pulidos y herrajes dorados inoxidables.",
    "sku": "BLS-CRSB-W01",
    "inStock": true,
    "sizes": [
      "Unitalla (24 x 16 x 8 cm)"
    ],
    "colors": [
      "Negro Azabache",
      "Café Tostado",
      "Rosa Pastel",
      "Beige Crema"
    ],
    "colorHex": [
      "#09090b",
      "#78350f",
      "#f472b6",
      "#fef3c7"
    ],
    "colorImages": {
      "Negro Azabache": "Productos 2/bolso para dama negro.jpg",
      "Café Tostado": "Productos 2/bolso para dama cafe.jpg",
      "Rosa Pastel": "Productos 2/bolso para dama rosa.jpg",
      "Beige Crema": "Productos 2/bolso para dama.jpg"
    },
    "features": [
      "Correa ajustable para llevar al hombro o cruzada",
      "Bolsillo interior con cremallera y compartimento para celular",
      "Herrajes reforzados con baño dorado resistente al desgaste"
    ]
  },
  {
    "id": "fash-clm-19",
    "department": "Moda · Accesorios de Hombre",
    "name": "Cartera Bifold de Piel Genuina para Hombre con Bloqueo RFID y Soporte AirTag",
    "slug": "cartera-hombre-piel-rfid-airtag",
    "category": "ropa",
    "subcategory": "accesorios",
    "gender": "hombre",
    "brand": "D'Avanti Sartorial",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 312,
    "image": "Productos 2/Airtag Cartera para Hombre RFID Bloqueo Tarjetero.jpg",
    "description": "Cartera de caballero extrafina elaborada en piel genuina con ranura integrada para Apple AirTag, tecnología de blindaje contra clonación RFID y tarjetero de extracción rápida.",
    "sku": "ACC-CRT-HMB01",
    "inStock": true,
    "sizes": [
      "Slim Fit (11 x 8.5 cm)"
    ],
    "colors": [
      "Negro Carbón AirTag",
      "Café Miel RFID",
      "Negro Clásico Antirrobo"
    ],
    "colorHex": [
      "#18181b",
      "#92400e",
      "#09090b"
    ],
    "colorImages": {
      "Negro Carbón AirTag": "Productos 2/Airtag Cartera para Hombre RFID Bloqueo Tarjetero.jpg",
      "Café Miel RFID": "Productos 2/cartera para caballero cafe.jpg",
      "Negro Clásico Antirrobo": "Productos 2/cartera para caballero negro.jpg"
    },
    "features": [
      "Protección certificada RFID contra lectores electrónicos no deseados",
      "Espacio dedicado para 8 tarjetas bancarias, billetes y credencial con visor",
      "Perfil ultradelgado que no abulta en el bolsillo"
    ]
  },
  {
    "id": "fash-clm-20",
    "department": "Moda · Accesorios de Mujer",
    "name": "Cartera Billetera Larga para Dama con Cierre Perimetral y Monedero",
    "slug": "cartera-larga-dama-cierre",
    "category": "ropa",
    "subcategory": "accesorios",
    "gender": "mujer",
    "brand": "D'Avanti Atelier",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1099,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 220,
    "image": "Productos 2/cartera para mujer cafe.jpg",
    "description": "Billetera larga tipo clutch confeccionada en textura suave con múltiples divisiones para tarjetas, billetes extendidos y monedero central con cremallera.",
    "sku": "ACC-CRT-MJR01",
    "inStock": true,
    "sizes": [
      "Largo 19 x 10 cm"
    ],
    "colors": [
      "Café Caramelo",
      "Rosa Rubor",
      "Negro Noche"
    ],
    "colorHex": [
      "#92400e",
      "#f472b6",
      "#18181b"
    ],
    "colorImages": {
      "Café Caramelo": "Productos 2/cartera para mujer cafe.jpg",
      "Rosa Rubor": "Productos 2/cartera mujer rosa.jpg",
      "Negro Noche": "Productos 2/cartera para mujer.jpg"
    },
    "features": [
      "Cierre perimetral de acero dorado suave y duradero",
      "12 ranuras para tarjetas bancarias y ventana de identificación",
      "Compartimento amplio para teléfonos de hasta 6.7 pulgadas"
    ]
  },
  {
    "id": "fash-clm-21",
    "department": "Moda · Ropa de Mujer",
    "name": "Vestido de Cóctel Elegante con Vuelo y Escote Cruzado",
    "slug": "vestido-coctel-elegante-escote",
    "category": "ropa",
    "subcategory": "vestidos",
    "gender": "mujer",
    "brand": "D'Avanti Studio",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1799,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 185,
    "image": "Productos 2/vestido coctel rojo vino.jpg",
    "description": "Silueta femenina y sofisticada con escote sensual cruzado, falda con vuelo suave y tejido elástico que se adapta a la figura.",
    "sku": "VST-CCT-01",
    "inStock": true,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Rojo Vino",
      "Azul Real",
      "Blanco Puro",
      "Rosa Palo"
    ],
    "colorHex": [
      "#881337",
      "#1d4ed8",
      "#f8fafc",
      "#fbcfe8"
    ],
    "colorImages": {
      "Rojo Vino": "Productos 2/vestido coctel rojo vino.jpg",
      "Azul Real": "Productos 2/vestido coctel azul.jpg",
      "Blanco Puro": "Productos 2/vestido coctel blanco.jpg",
      "Rosa Palo": "Productos 2/vestido coctel rosa.jpg"
    },
    "features": [
      "Tejido crepé elástico de alta densidad que no transparenta",
      "Escote en V cruzado que realza el busto con comodidad",
      "Largo a la rodilla perfecto para bodas, cócteles y cenas"
    ]
  },
  {
    "id": "fash-clm-22",
    "department": "Moda · Ropa de Mujer",
    "name": "Vestido Largo de Noche de Gala Alta Costura con Escote",
    "slug": "vestido-largo-noche-gala-escote",
    "category": "ropa",
    "subcategory": "vestidos",
    "gender": "mujer",
    "brand": "D'Avanti Alta Costura",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 3299,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 140,
    "image": "Productos 2/vestido de noche.jpg",
    "description": "Vestido largo de fiesta de diseño imperial con caída fluida hasta el suelo, abertura lateral pronunciada y escote elegante.",
    "sku": "VST-NCH-02",
    "inStock": true,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Azul Marino Gala",
      "Verde Esmeralda",
      "Amarillo Sol Naciente"
    ],
    "colorHex": [
      "#0f172a",
      "#065f46",
      "#eab308"
    ],
    "colorImages": {
      "Azul Marino Gala": "Productos 2/vestido azul marino.jpg",
      "Verde Esmeralda": "Productos 2/vestido de noche verde.jpg",
      "Amarillo Sol Naciente": "Productos 2/vestido de noche amarillo.jpg"
    },
    "features": [
      "Caída espectacular con forro interior sedoso antiestático",
      "Abertura sutil en pierna que estiliza el movimiento al caminar",
      "Ideal para alfombras rojas, graduaciones y galas nocturnas"
    ]
  },
  {
    "id": "fash-clm-23",
    "department": "Moda · Ropa de Mujer",
    "name": "Traje Formal Sastre para Mujer Conjunto Saco y Pantalón Slim",
    "slug": "traje-formal-sastre-mujer-conjunto",
    "category": "ropa",
    "subcategory": "trajes",
    "gender": "mujer",
    "brand": "D'Avanti Sartorial",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2799,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 118,
    "image": "Productos 2/traje formal mujer.jpg",
    "description": "Conjunto formal sastre de 2 piezas compuesto por blazer entallado con solapas en punta y pantalón de corte recto que estiliza la silueta.",
    "sku": "TRJ-SST-W01",
    "inStock": true,
    "sizes": [
      "XS (28)",
      "S (30)",
      "M (32)",
      "L (34)",
      "XL (36)"
    ],
    "colors": [
      "Negro Ejecutivo",
      "Blanco Nieve Formal"
    ],
    "colorHex": [
      "#09090b",
      "#f8fafc"
    ],
    "colorImages": {
      "Negro Ejecutivo": "Productos 2/traje formal mujer.jpg",
      "Blanco Nieve Formal": "Productos 2/traje formal feminino blanco.jpg"
    },
    "features": [
      "Corte de sastrería profesional con hombreras estructuradas ligeras",
      "Pantalón de tiro medio con bolsillos laterales funcionales",
      "Tejido bielástico resistente a las arrugas para jornadas completas"
    ]
  },
  {
    "id": "fash-clm-24",
    "department": "Moda · Ropa de Hombre",
    "name": "Chamarra de Mezclilla Clásica Denim Trucker para Hombre",
    "slug": "chamarra-mezclilla-clasica-hombre",
    "category": "ropa",
    "subcategory": "chamarras",
    "gender": "hombre",
    "brand": "D'Avanti Denim",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1699,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 205,
    "image": "Productos 2/chamarra de mezclilla de hombre.jpg",
    "description": "La chamarra vaquera imprescindible. Denim de algodón grueso de 13 oz con lavado vintage, botones metálicos reforzados y cuatro bolsillos exteriores.",
    "sku": "CHM-DEN-H01",
    "inStock": true,
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Azul Denim Vintage",
      "Negro Urbano",
      "Azul Marino"
    ],
    "colorHex": [
      "#2563eb",
      "#09090b",
      "#1e3a8a"
    ],
    "colorImages": {
      "Azul Denim Vintage": "Productos 2/chamarra de mezclilla de hombre.jpg",
      "Negro Urbano": "Productos 2/chamarra negra hombre.jpg",
      "Azul Marino": "Productos 2/chamarra azul marino hombre.jpg"
    },
    "features": [
      "Algodón 100% resistente y duradero que mejora con el tiempo",
      "Ajustadores de cintura traseros con botones de presilla",
      "Costuras dobles reforzadas en hombros y espalda"
    ]
  },
  {
    "id": "fash-clm-25",
    "department": "Moda · Ropa de Mujer",
    "name": "Chamarra Biker en Piel Sintética Café Tostado para Mujer",
    "slug": "chamarra-biker-piel-cafe-mujer",
    "category": "ropa",
    "subcategory": "chamarras",
    "gender": "mujer",
    "brand": "D'Avanti Studio",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "Productos 2/chamarra cafe de mujer.jpg",
    "description": "Chamarra estilo motero con cremallera asimétrica, solapas con broches metálicos y textura suave que emula la piel natural.",
    "sku": "CHM-BKR-WCF01",
    "inStock": true,
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Café Tostado"
    ],
    "colorHex": [
      "#78350f"
    ],
    "features": [
      "Corte entallado favorecedor a la cintura",
      "Bolsillos laterales con cremallera de uso rudo",
      "Forro interior de tafetán suave que brinda confort térmico"
    ]
  },
  {
    "id": "home-clm-8",
    "department": "Hogar · Muebles & Decoración",
    "name": "Mesa de Centro Moderna para Sala en Madera y Acabado Nórdico",
    "slug": "mesa-centro-moderna-sala-nordica",
    "category": "hogar",
    "subcategory": "muebles",
    "brand": "Marbilia Interiorismo",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 4799,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 76,
    "image": "Productos 2/mesa de centro en madera Marbilia interiorismo.jpg",
    "description": "Mesa de centro contemporánea fabricada con cubierta en chapa de roble natural y estructura sólida con repisa inferior de apoyo.",
    "sku": "MBL-MSC-01",
    "inStock": true,
    "sizes": [
      "110 x 60 x 45 cm"
    ],
    "colors": [
      "Roble Marbilia Natural",
      "Blanco Minimalista",
      "Redonda Contemporánea"
    ],
    "colorHex": [
      "#92400e",
      "#f8fafc",
      "#a8a29e"
    ],
    "colorImages": {
      "Roble Marbilia Natural": "Productos 2/mesa de centro en madera Marbilia interiorismo.jpg",
      "Blanco Minimalista": "Productos 2/Mesa de Centro Moderna en Blanco.jpg",
      "Redonda Contemporánea": "Productos 2/mesa redonda.jpg"
    },
    "features": [
      "Madera sustentable certificada con barniz protector contra manchas y líquidos",
      "Bordes suavemente redondeados que brindan seguridad familiar",
      "Estructura reforzada que soporta hasta 80 kg de peso"
    ]
  },
  {
    "id": "home-clm-9",
    "department": "Hogar · Recámara & Muebles",
    "name": "Buró Mesa de Noche para Recámara con Cajón y Repisa Inferior",
    "slug": "buro-mesa-noche-recamara-cajon",
    "category": "hogar",
    "subcategory": "muebles",
    "brand": "D'Avanti Home",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2399,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 92,
    "image": "Productos 2/buro para recamara.jpg",
    "description": "Mesa de noche compacta ideal para dormitorios modernos. Incluye cajón espacioso con guías telescópicas y repisa inferior para libros o decoración.",
    "sku": "MBL-BRO-01",
    "inStock": true,
    "sizes": [
      "45 x 40 x 55 cm"
    ],
    "colors": [
      "Madera Natural Escandinava",
      "Café Oscuro Wengue"
    ],
    "colorHex": [
      "#d97706",
      "#451a03"
    ],
    "colorImages": {
      "Madera Natural Escandinava": "Productos 2/buro para recamara.jpg",
      "Café Oscuro Wengue": "Productos 2/mesa de noche color cade oscuro.jpg"
    },
    "features": [
      "Cajón con correderas metálicas de cierre suave",
      "Patas estilizadas de madera maciza con niveladores de piso",
      "Superficie resistente a raspaduras y fácil de limpiar"
    ]
  },
  {
    "id": "fash-clm-26",
    "department": "Moda · Joyería & Relojes",
    "name": "Reloj Analógico de Cuarzo Clásico para Caballero Carátula Negra",
    "slug": "reloj-analogico-cuarzo-caballero",
    "category": "ropa",
    "subcategory": "accesorios",
    "gender": "hombre",
    "brand": "Curren Chrono",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1299,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 245,
    "image": "Productos 2/reloj curen hombre.jpg",
    "description": "Reloj de pulsera con maquinaria de cuarzo japonesa de alta precisión, caja de acero con fechador automático y correa metálica ajustable.",
    "sku": "RLJ-CRN-H01",
    "inStock": true,
    "sizes": [
      "Caja 44 mm"
    ],
    "colors": [
      "Negro Elegance",
      "Acero Clásico Casio",
      "Digital Táctico"
    ],
    "colorHex": [
      "#09090b",
      "#94a3b8",
      "#1c1917"
    ],
    "colorImages": {
      "Negro Elegance": "Productos 2/reloj curen hombre.jpg",
      "Acero Clásico Casio": "Productos 2/reloj hombre casio.jpg",
      "Digital Táctico": "Productos 2/reloj digital negro hombre.jpg"
    },
    "features": [
      "Cristal mineral Hardlex antiarañazos",
      "Resistencia al agua 3 ATM contra salpicaduras y lluvia",
      "Fechador a las 3 en punto funcional"
    ]
  },
  {
    "id": "fash-clm-27",
    "department": "Moda · Joyería & Relojes",
    "name": "Reloj de Pulsera Femenino en Acero Inoxidable Estilo Joya Cartier",
    "slug": "reloj-pulsera-mujer-joya-acero",
    "category": "ropa",
    "subcategory": "accesorios",
    "gender": "mujer",
    "brand": "D'Avanti Timepieces",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1599,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 178,
    "image": "Productos 2/reloj para mujer tipo cartier.jpg",
    "description": "Reloj de joyería para dama con diseño clásico rectangular y brazalete de eslabones pulidos, números romanos y corona con cabujón azul.",
    "sku": "RLJ-CRT-W01",
    "inStock": true,
    "sizes": [
      "Caja 28 mm"
    ],
    "colors": [
      "Plateado Espejo",
      "Dorado Rosa Joya"
    ],
    "colorHex": [
      "#e2e8f0",
      "#fb7185"
    ],
    "colorImages": {
      "Plateado Espejo": "Productos 2/reloj para mujer tipo cartier.jpg",
      "Dorado Rosa Joya": "Productos 2/reloj para mujer.jpg"
    },
    "features": [
      "Brazalete con broche mariposa invisible de doble seguridad",
      "Cristal biselado resistente a impactos",
      "Hermético al agua para uso cotidiano"
    ]
  },
  {
    "id": "fash-clm-28",
    "department": "Moda · Accesorios",
    "name": "Lentes de Sol Polarizados UV400 Montura Retro Unisex",
    "slug": "lentes-sol-polarizados-uv400-retro",
    "category": "ropa",
    "subcategory": "accesorios",
    "gender": "unisex",
    "brand": "D'Avanti Eyewear",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 380,
    "image": "Productos 2/gafas de sol.jpg",
    "description": "Gafas de sol con micas polarizadas TAC de alta fidelidad que eliminan destellos molestos y ofrecen protección total UVA/UVB 400.",
    "sku": "OPT-SOL-01",
    "inStock": true,
    "sizes": [
      "Unitalla Estándar"
    ],
    "colors": [
      "Negro Clásico Polar",
      "Carey Modelo Penélope Dama"
    ],
    "colorHex": [
      "#09090b",
      "#78350f"
    ],
    "colorImages": {
      "Negro Clásico Polar": "Productos 2/gafas de sol.jpg",
      "Carey Modelo Penélope Dama": "Productos 2/Lentes de Sol Mujer Modelo Penelope.jpg"
    },
    "features": [
      "Micas polarizadas de 7 capas con filtro antirreflejante",
      "Bisagras flexibles con resorte que no aprietan las sienes",
      "Incluye funda rígida magnética y paño de microfibra"
    ]
  },
  {
    "id": "fash-clm-29",
    "department": "Moda · Ropa de Hombre",
    "name": "Playera Básica Cuello Redondo 100% Algodón Peinado",
    "slug": "playera-basica-cuello-redondo-algodon",
    "category": "ropa",
    "subcategory": "camisas",
    "gender": "hombre",
    "brand": "D'Avanti Essentials",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 549,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 420,
    "image": "Productos 2/playera blanca de hombre.jpg",
    "description": "Playera esencial en algodón peinado premium suave al tacto y transpirable, corte regular cómodo para uso diario.",
    "sku": "PLY-BSC-H01",
    "inStock": true,
    "sizes": [
      "CH",
      "M",
      "G",
      "XG"
    ],
    "colors": [
      "Blanco Puro",
      "Manga Larga Gris"
    ],
    "colorHex": [
      "#ffffff",
      "#9ca3af"
    ],
    "colorImages": {
      "Blanco Puro": "Productos 2/playera blanca de hombre.jpg",
      "Manga Larga Gris": "Productos 2/playera de manga larga color gris hombre.jpg"
    },
    "features": [
      "Algodón 100% peinado de 180 g/m² sin costuras laterales incómodas",
      "Cuello en canalé reforzado con cinta de hombro a hombro",
      "Prelavada para evitar encogimiento tras los lavados"
    ]
  },
  {
    "id": "toy-clm-19",
    "name": "Rompecabezas 4D Build Pokémon Charmander 241 Piezas Modelo 3D Coleccionable",
    "slug": "rompecabezas-4d-pokemon-charmander-241-piezas",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "Pokémon",
    "department": "Juguetes · Rompecabezas & Colección",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 899,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 88,
    "age": "+12 años",
    "image": "Productos 3/Rompecabezas 4D Puzzles Pokémon Charmander 241 Piezas.jpg",
    "description": "Arma tu propio Charmander tridimensional con este increíble kit de precisión 4D Build. Incluye 241 piezas troqueladas de alta calidad y base para exhibición.",
    "sku": "PKM-4D-CHRM241",
    "inStock": true,
    "sizes": [
      "241 Piezas Troqueladas"
    ],
    "colors": [
      "Naranja Fuego Charmander"
    ],
    "colorHex": [
      "#ea580c"
    ],
    "specs": {
      "piezas": "241 piezas de precisión numeradas",
      "dimensiones": "27 cm alto x 18 cm ancho ensamblado",
      "dificultad": "Media-Avanzada (tiempo estimado 2 a 3 horas)",
      "licencia": "Oficial The Pokémon Company / Spin Master"
    },
    "features": [
      "No requiere pegamento ni herramientas de corte",
      "Incluye folleto con instrucciones paso a paso a todo color",
      "Pintura y acabado mate de colección para vitrina"
    ],
    "gallery": [
      "Productos 3/Rompecabezas 4D Puzzles Pokémon Charmander 241 Piezas 1.jpg"
    ]
  },
  {
    "id": "gaming-game-5",
    "name": "Pokémon Edición Roja Original Game Boy Nuevo en Caja con Protector Acrílico UV",
    "slug": "pokemon-edicion-roja-game-boy-coleccionista",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "brand": "Nintendo",
    "department": "Videojuegos & Consolas",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 5999,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 165,
    "image": "Productos 3/Pokémon Red Versión Game Boy Nuevo En Caja Con Acrílico.jpg",
    "description": "El juego que inició el fenómeno mundial. Cartucho clásico Pokémon Red Version para Game Boy / Game Boy Color en su caja original sellada de colección protegida en vitrina de acrílico grado archivo con filtro UV.",
    "sku": "NIN-GB-PKMRED",
    "inStock": true,
    "sizes": [
      "Caja Colección con Vitrina Acrílica"
    ],
    "colors": [
      "Rojo Charizard Original"
    ],
    "colorHex": [
      "#dc2626"
    ],
    "specs": {
      "plataforma": "Nintendo Game Boy / Game Boy Color / Game Boy Advance",
      "estado": "Nuevo en caja original con inserto y manual",
      "protector": "Caja de acrílico transparente de 4mm con cierre magnético y protección UV",
      "region": "NTSC-U/C (Edición en Inglés oficial)"
    },
    "features": [
      "Pieza definitiva de colección para aficionados de Pokémon y videojuegos clásicos",
      "Acrílico grado archivo que previene decoloración solar y polvo",
      "Certificado de autenticidad y envío con embalaje reforzado de alta seguridad"
    ]
  },
  {
    "id": "toy-clm-20",
    "name": "Andadera y Juguete de Empuje para Bebés Fisher-Price Perrito Camina Conmigo Musical",
    "slug": "fisher-price-perrito-camina-conmigo-andadera",
    "category": "juguetes",
    "subcategory": "bebes",
    "brand": "Fisher-Price",
    "department": "Juguetes · Bebés & Estimulación Temprana",
    "badge": "Buen Fin -50%",
    "badgeType": "offer",
    "price": 600,
    "originalPrice": 1199,
    "rating": 4.9,
    "reviewsCount": 215,
    "age": "6-36 meses",
    "image": "Productos 3/Juguete para Caminar y Empujar para bebés Fisher-Price Perrito Camina Conmigo Café.jpg",
    "description": "El compañero perfecto para dar los primeros pasos. Con más de 75 canciones, sonidos y frases educativas, enseña el abecedario, formas, colores y números mientras el bebé empuja o juega sentado.",
    "sku": "FSH-PRT-CMP01",
    "inStock": true,
    "sizes": [
      "Andadera Musical con Asa Ergonómica"
    ],
    "colors": [
      "Café Cachorro Amigable"
    ],
    "colorHex": [
      "#92400e"
    ],
    "specs": {
      "etapas": "Tecnología Aprendizaje Continuo Smart Stages",
      "contenido": "Más de 75 canciones, melodías, sonidos y frases en español",
      "motricidad": "Fortalece la coordinación motriz gruesa y equilibrio",
      "edad": "De 6 a 36 meses"
    },
    "features": [
      "2 formas de jugar: Sentarse a explorar el panel o pararse y empujar",
      "Asa de fácil agarre y base ancha con 4 ruedas resistentes que dan estabilidad",
      "Nariz y botones iluminados que estimulan la curiosidad del bebé"
    ],
    "buenFinDiscount": 50,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 50% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "toy-clm-21",
    "name": "Set LEGO City Persecución en Auto y Moto de Policía con Minifiguras",
    "slug": "lego-city-persecucion-policia-auto-moto",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "LEGO",
    "department": "Juguetes · Construcción & LEGO City",
    "badge": "Buen Fin -60%",
    "badgeType": "offer",
    "price": 320,
    "originalPrice": 799,
    "rating": 4.9,
    "reviewsCount": 142,
    "age": "+5 años",
    "image": "Productos 3/Set LEGO City Persecución de Policía.jpg",
    "description": "Acción a toda velocidad con este emocionante set de persecución policial de LEGO City. Incluye patrulla interceptora, moto policial veloz y minifiguras de oficial de policía y ladrón con accesorios.",
    "sku": "LEG-CTY-POL01",
    "inStock": true,
    "sizes": [
      "Set Completo con 2 Vehículos y Minifiguras"
    ],
    "colors": [
      "Patrulla Interceptora",
      "Moto de Persecución"
    ],
    "colorHex": [
      "#2563eb",
      "#1d4ed8"
    ],
    "colorImages": {
      "Patrulla Interceptora": "Productos 3/Set LEGO City Persecución de Policía.jpg",
      "Moto de Persecución": "Productos 3/Set LEGO City Persecución en Moto de Policía.jpg"
    },
    "specs": {
      "piezas": "198 piezas LEGO oficiales de alta precisión",
      "minifiguras": "2 minifiguras (oficial de policía y sospechoso) con esposas y billete",
      "edad": "Recomendado para constructores de 5 años en adelante",
      "compatibilidad": "Compatible con todos los sets del universo LEGO City"
    },
    "features": [
      "Vehículo patrulla con cabina abatible y espacio para el oficial",
      "Moto deportiva policial con neumáticos de alta tracción",
      "Guía didáctica ilustrada paso a paso e interactiva en app LEGO Builder"
    ],
    "buenFinDiscount": 60,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 60% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "tech-clm-8",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Smartphone Honor X6e 128GB Cámara Triple 50MP Pantalla 90Hz Batería 5200mAh",
    "slug": "honor-x6e-128gb-negro",
    "category": "electronica",
    "subcategory": "celulares",
    "brand": "Honor",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 3899,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 175,
    "image": "Productos 3/Movistar Honor X6e 128 GB Negro.jpg",
    "description": "Smartphone ágil y confiable con almacenamiento expandible de 128GB, sistema de triple cámara con sensor principal de 50MP para fotos nítidas con IA y batería gigante de 5200 mAh para hasta 2 días de uso continuo.",
    "sku": "HNR-X6E-128BLK",
    "inStock": true,
    "sizes": [
      "128GB Almacenamiento / 4GB RAM"
    ],
    "colors": [
      "Negro Medianoche"
    ],
    "colorHex": [
      "#09090b"
    ],
    "specs": {
      "pantalla": "6.56\" HD+ con tasa de refresco ultra fluida de 90Hz",
      "procesador": "MediaTek Helio G36 Octa-Core de alto rendimiento",
      "bateria": "5,200 mAh de ultra larga duración con carga inteligente",
      "seguridad": "Lector de huellas dactilares lateral y desbloqueo facial"
    },
    "features": [
      "Cámara ultra clara de 50 megapíxeles con modo retrato y noche",
      "Memoria expandible hasta 1TB mediante tarjeta MicroSD",
      "Desbloqueado para cualquier compañía telefónica"
    ]
  },
  {
    "id": "tech-clm-9",
    "department": "Tecnología · Tablets & Productividad",
    "name": "Tablet Lenovo IdeaTab 11\" 128GB 8GB RAM con Teclado Magnético Incluido",
    "slug": "tablet-lenovo-ideatab-11-teclado",
    "category": "electronica",
    "subcategory": "tablets",
    "brand": "Lenovo",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 7999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "Productos 3/Tablet Lenovo Ideatab 11 + Keyboard 11 Pulgadas 128 GB 8 GB RAM.jpg",
    "description": "Productividad y entretenimiento sin límites. Pantalla IPS 2K de 11 pulgadas, 8GB de memoria RAM para multitarea fluida, 128GB de almacenamiento y teclado físico magnético desmontable que la convierte al instante en una laptop ligera.",
    "sku": "LNV-TAB11-KB",
    "inStock": true,
    "sizes": [
      "11 Pulgadas / 128GB + 8GB RAM"
    ],
    "colors": [
      "Gris Tormenta Metálico"
    ],
    "colorHex": [
      "#4b5563"
    ],
    "specs": {
      "pantalla": "11\" 2K (2000 x 1200) IPS con brillo de 400 nits y certificación TÜV Low Blue Light",
      "procesador": "MediaTek Helio G99 Octa-Core de 6nm de alta eficiencia",
      "bateria": "7,700 mAh con hasta 12 horas continuas de reproducción de video",
      "audio": "Cuatro altavoces estéreo optimizados con Dolby Atmos"
    },
    "features": [
      "Incluye funda protectora con soporte y teclado magnético desmontable en español",
      "Modo lectura inmersivo con simulación de papel para cuidar la vista",
      "Cuerpo unibody de aleación de aluminio pulido ultra delgado de solo 7.4 mm"
    ]
  },
  {
    "id": "game-clm-21",
    "department": "Videojuegos & Consolas",
    "name": "Grand Theft Auto V: Premium Edition",
    "slug": "gta-v-premium-edition",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "PlayStation / Xbox / PC",
    "platformTag": "all",
    "brand": "Rockstar Games",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 899,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 15420,
    "image": "Productos 3/GTA 5.jpg",
    "description": "Experimenta el fenómeno mundial aclamado por la crítica de Rockstar Games en el extenso y soleado estado de San Andreas. Incluye la experiencia de historia completa, acceso ilimitado a Grand Theft Auto Online y el pack de inicio Criminal Enterprise.",
    "sku": "GAM-RCK-GTAV",
    "inStock": true,
    "genre": "Acción / Mundo Abierto",
    "features": [
      "Tres protagonistas interconectados: Michael, Franklin y Trevor",
      "Mundo abierto vivo y gigantesco en Los Santos y Blaine County",
      "Incluye Grand Theft Auto Online con todas las expansiones de contenido",
      "Pack de inicio Criminal Enterprise con propiedades, vehículos y armas"
    ],
    "specs": {
      "genero": "Acción / Mundo Abierto",
      "jugadores": "1 historia / hasta 30 online",
      "clasificacion": "M (Mature) +18 años",
      "desarrollador": "Rockstar North"
    }
  },
  {
    "id": "game-clm-22",
    "department": "Videojuegos & Consolas",
    "name": "Battlefield 1: Revolution Edition",
    "slug": "battlefield-1-revolution-edition",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox / PlayStation / PC",
    "platformTag": "all",
    "brand": "EA DICE",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 799,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 4210,
    "image": "Productos 3/battlefield 1.jpg",
    "description": "Vive el amanecer de la guerra total en la Primera Guerra Mundial. Batallas multijugador masivas de hasta 64 jugadores en ciudades francesas sitiadas, los Alpes italianos y las dunas de Arabia.",
    "sku": "GAM-DCE-BF1",
    "inStock": true,
    "genre": "Guerra / FPS Masivo",
    "features": [
      "Guerra total a escala masiva con tanques, aviones, zeppelines y caballos",
      "Destrucción dinámica ambiental de edificios y trincheras",
      "Historias de guerra individuales emotivas en campaña para un jugador",
      "Incluye Premium Pass con todas las 4 expansiones de mapas"
    ],
    "specs": {
      "genero": "FPS Táctico / Guerra",
      "jugadores": "1 campaña / hasta 64 multijugador online",
      "clasificacion": "M (Mature) +17 años"
    }
  },
  {
    "id": "game-clm-23",
    "department": "Videojuegos & Consolas",
    "name": "Battlefield V: Definitive Edition",
    "slug": "battlefield-v-definitive-edition",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox / PlayStation / PC",
    "platformTag": "all",
    "brand": "EA DICE",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 849,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 3105,
    "image": "Productos 3/battlefield V.jpg",
    "description": "La Segunda Guerra Mundial como nunca antes la habías visto. Lidera a tu escuadrón en intensas operaciones a gran escala en el norte de África, los fiordos noruegos y las islas del Pacífico.",
    "sku": "GAM-DCE-BFV",
    "inStock": true,
    "genre": "Guerra / FPS Táctico",
    "features": [
      "Físicas balísticas avanzadas y sistema de fortificaciones en tiempo real",
      "Modo Grandes Operaciones que simula ofensivas históricas de varios días",
      "Incluye todas las armas, vehículos y atuendos del primer y segundo año"
    ],
    "specs": {
      "genero": "FPS Bélico",
      "jugadores": "Hasta 64 en línea",
      "clasificacion": "M (Mature) +17 años"
    }
  },
  {
    "id": "game-clm-24",
    "department": "Videojuegos & Consolas",
    "name": "Call of Duty: Modern Warfare II (2022)",
    "slug": "cod-modern-warfare-2-2022",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox / PlayStation / PC",
    "platformTag": "all",
    "brand": "Activision / Infinity Ward",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1599,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 5400,
    "image": "Productos 3/call of duty modern warfare 2 2022.jpg",
    "description": "El regreso de la legendaria Fuerza Operativa 141 con el Capitán Price, Ghost, Soap y Gaz. Revolucionario sistema de manejo de armas Gunsmith y operaciones tácticas globales.",
    "sku": "GAM-ACT-MW2-22",
    "inStock": true,
    "genre": "FPS Táctico / Militar",
    "features": [
      "Campaña global épica con misiones encubiertas en tierra, mar y aire",
      "Motor gráfico de nueva generación con fidelidad fotográfica realista",
      "Operaciones Especiales cooperativas y multijugador táctico de élite"
    ],
    "specs": {
      "genero": "Shooter Militar",
      "jugadores": "1 campaña / online multijugador",
      "clasificacion": "M (Mature) +17 años"
    }
  },
  {
    "id": "game-clm-25",
    "department": "Videojuegos & Consolas",
    "name": "Metro 2033 Redux — Edición Remasterizada",
    "slug": "metro-2033-redux-remaster",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox / PlayStation / PC",
    "platformTag": "all",
    "brand": "4A Games / Deep Silver",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 599,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 2900,
    "image": "Productos 3/metro 2033.jpg",
    "description": "En las ruinas subterráneas del metro de Moscú tras un apocalipsis nuclear, una generación entera lucha por sobrevivir contra mutantes feroces y los horrores de las profundidades.",
    "sku": "GAM-4A-MET2033",
    "inStock": true,
    "genre": "Survival Horror / FPS",
    "features": [
      "Remasterizado por completo con el motor 4A Engine de última generación",
      "Atmósfera postapocalíptica asfixiante con máscaras de gas y filtros limitados",
      "Dos estilos de juego únicos: Supervivencia (estilo terror) y Espartano (estilo acción)"
    ],
    "specs": {
      "genero": "FPS / Survival Horror Atmosférico",
      "jugadores": "1 jugador (offline)",
      "clasificacion": "M (Mature) +17 años"
    }
  },
  {
    "id": "gaming-acc-4",
    "department": "Videojuegos & Consolas",
    "name": "Control Inalámbrico Xbox Series X|S — Robot White",
    "slug": "control-xbox-series-robot-white",
    "category": "videojuegos",
    "subcategory": "accesorios",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Microsoft / Xbox",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1699,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 3820,
    "image": "Productos 3/control inalambrico xbox serie x-s.jpg",
    "description": "Control oficial inalámbrico Xbox en impecable acabado Robot White. Cuenta con pad direccional híbrido, agarre texturizado en gatillos y botón Compartir dedicado para Xbox, PC y móviles.",
    "sku": "GAM-MS-XBCON-WHT",
    "inStock": true,
    "genre": "Accesorio / Control",
    "features": [
      "Tecnología inalámbrica Xbox Wireless y Bluetooth para PC y dispositivos móviles",
      "Pad híbrido de alta sensibilidad para combates y juegos deportivos",
      "Entrada jack de audio de 3.5 mm para audífonos"
    ],
    "specs": {
      "bateria": "Hasta 40 horas de autonomía",
      "conexion": "Inalámbrico Xbox / Bluetooth / USB-C"
    }
  },
  {
    "id": "game-clm-26",
    "department": "Videojuegos & Consolas",
    "name": "Call of Duty: Modern Warfare (2019)",
    "slug": "call-of-duty-modern-warfare-2019",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox / PlayStation / PC",
    "platformTag": "all",
    "brand": "Activision / Infinity Ward",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1299,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 6890,
    "image": "Productos 3/call of duty modern warfare 2019.jpg",
    "description": "El aclamado reinicio de la icónica saga Modern Warfare con un motor gráfico fotorrealista. Acompaña a la CIA, el SAS británico y la Fuerza de Liberación de Urzikistán en tensas misiones tácticas encubiertas.",
    "sku": "GAM-ACT-MW2019",
    "inStock": true,
    "genre": "FPS Táctico / Militar",
    "features": [
      "Campaña cinematográfica de alto impacto con el Capitán John Price",
      "Multijugador frenético con juego cruzado crossplay total entre plataformas",
      "Operaciones Especiales cooperativas de 4 jugadores"
    ],
    "specs": {
      "genero": "FPS Militar Táctico",
      "jugadores": "1 campaña / multijugador online",
      "clasificacion": "M (Mature) +17 años"
    }
  },
  {
    "id": "game-clm-27",
    "department": "Videojuegos & Consolas",
    "name": "Call of Duty 4: Modern Warfare Remastered",
    "slug": "call-of-duty-4-modern-warfare-remastered",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox / PlayStation / PC",
    "platformTag": "all",
    "brand": "Activision",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 899,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 8410,
    "image": "Productos 3/call of duty 4 morden warfare.jpg",
    "description": "El legendario juego que revolucionó los shooters en primera persona para siempre. Remasterizado en impresionante alta definición con texturas mejoradas, renderizado basado en la física e iluminación de alto rango dinámico.",
    "sku": "GAM-ACT-COD4MW",
    "inStock": true,
    "genre": "FPS / Clásico",
    "features": [
      "Misiones inolvidables como \"Todos camuflados\" en Prípiat",
      "El multijugador clásico que definió rachas de bajas y puntos de experiencia",
      "Audio remasterizado y gráficos optimizados a 60 fps"
    ],
    "specs": {
      "genero": "Shooter Clásico",
      "jugadores": "1 jugador / multijugador online",
      "clasificacion": "M (Mature) +17 años"
    }
  },
  {
    "id": "game-clm-28",
    "department": "Videojuegos & Consolas",
    "name": "Call of Duty: Modern Warfare 4 (2026)",
    "slug": "call-of-duty-modern-warfare-4-2026",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox / PlayStation / PC",
    "platformTag": "all",
    "brand": "Activision / Infinity Ward",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1799,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 920,
    "image": "Productos 3/call of duty modern warfare 4 2026.jpg",
    "description": "La culminación definitiva de la saga bélica moderna. Con físicas balísticas avanzadas, combate militar global a escala masiva y tecnología gráfica de última generación para consolas next-gen y PC.",
    "sku": "GAM-ACT-MW4-26",
    "inStock": true,
    "genre": "FPS Táctico Next-Gen",
    "features": [
      "Misiones tácticas con entornos 100% destructibles en tiempo real",
      "Integración total de audio espacial 3D y trazado de rayos completo",
      "Campaña global con operaciones clandestinas de escala mundial"
    ],
    "specs": {
      "genero": "FPS Next-Gen",
      "jugadores": "1 campaña / hasta 128 online",
      "clasificacion": "M (Mature) +17 años"
    }
  },
  {
    "id": "game-clm-29",
    "department": "Videojuegos & Consolas",
    "name": "Call of Duty: Modern Warfare 2 (Clásico)",
    "slug": "call-of-duty-modern-warfare-2-clasico",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox / PlayStation / PC",
    "platformTag": "all",
    "brand": "Activision / Infinity Ward",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 899,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 11200,
    "image": "Productos 3/call of duty modern warfare 2.jpg",
    "description": "Una de las entregas más aclamadas en la historia de los videojuegos. Sigue a la Fuerza Operativa 141 y a los Rangers del ejército de EE.UU. en una emocionante campaña que culmina en un multijugador legendario.",
    "sku": "GAM-ACT-MW2-CLS",
    "inStock": true,
    "genre": "FPS Acción Militar",
    "features": [
      "La legendaria campaña con Soap, Ghost y el Capitán Price",
      "Modo Operaciones Especiales con 23 misiones cooperativas desafiantes",
      "Mapas multijugador icónicos como Rust, Terminal y Favela"
    ],
    "specs": {
      "genero": "FPS Acción",
      "jugadores": "1 historia / hasta 18 online",
      "clasificacion": "M (Mature) +17 años"
    }
  },
  {
    "id": "game-clm-30",
    "department": "Videojuegos & Consolas",
    "name": "Battlefield 6: Próxima Generación (2026)",
    "slug": "battlefield-6-proxima-generacion-2026",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox / PlayStation / PC",
    "platformTag": "all",
    "brand": "EA DICE",
    "badge": "Buen Fin -75%",
    "badgeType": "offer",
    "price": 450,
    "originalPrice": 1799,
    "rating": 4.9,
    "reviewsCount": 780,
    "image": "Productos 3/battlefield 6.jpg",
    "description": "La guerra total regresa a su máxima gloria. Batallas masivas en línea con físicas de destrucción a gran escala, combate vehicular de aire, tierra y mar y climatología extrema dinámica.",
    "sku": "GAM-DCE-BF6",
    "inStock": true,
    "genre": "Guerra Masiva / FPS",
    "features": [
      "Combates de hasta 128 jugadores simultáneos en mapas abiertos gigantescos",
      "Destrucción ambiental táctica donde cualquier edificio puede ser derribado",
      "Clima dinámico con tormentas de arena, huracanes e inundaciones"
    ],
    "specs": {
      "genero": "FPS Bélico Masivo",
      "jugadores": "Hasta 128 en línea",
      "clasificacion": "M (Mature) +17 años"
    },
    "buenFinDiscount": 75,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 75% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "game-clm-31",
    "department": "Videojuegos & Consolas",
    "name": "Call of Duty: Black Ops (Original Clásico)",
    "slug": "call-of-duty-black-ops-original",
    "category": "videojuegos",
    "subcategory": "consolas-videojuegos",
    "platform": "Xbox / PlayStation / PC",
    "platformTag": "all",
    "brand": "Activision / Treyarch",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 849,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 9600,
    "image": "Productos 3/call of duty black ops.jpg",
    "description": "Adéntrate en los oscuros secretos de la Guerra Fría junto a Alex Mason y Frank Woods. Descubre el significado de los números en una de las mejores historias de espionaje bélico y sobrevive en Kino der Toten.",
    "sku": "GAM-ACT-CODBO1",
    "inStock": true,
    "genre": "FPS / Zombies / Espionaje",
    "features": [
      "Inolvidable campaña psicológica ambientada en la Guerra Fría y Vietnam",
      "El legendario mapa Zombies \"Kino der Toten\"",
      "Multijugador icónico con partidas de apuestas y contrato de armas"
    ],
    "specs": {
      "genero": "FPS / Zombies",
      "jugadores": "1 campaña / 4 zombies / 18 multijugador",
      "clasificacion": "M (Mature) +17 años"
    }
  },
  {
    "id": "gaming-acc-5",
    "department": "Videojuegos & Consolas",
    "name": "Control Inalámbrico Xbox Series X|S — Carbon Black",
    "slug": "control-xbox-series-carbon-black",
    "category": "videojuegos",
    "subcategory": "accesorios",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Microsoft / Xbox",
    "badge": "Buen Fin -60%",
    "badgeType": "offer",
    "price": 680,
    "originalPrice": 1699,
    "rating": 4.9,
    "reviewsCount": 4120,
    "image": "Productos 3/control inalambrico xbox.jpg",
    "description": "El clásico atemporal en elegante acabado Carbon Black mate. Ergonomía optimizada para largas sesiones de juego con agarre antideslizante y gatillos de respuesta ultra rápida.",
    "sku": "GAM-MS-XBCON-BLK",
    "inStock": true,
    "genre": "Accesorio / Control",
    "features": [
      "Acabado mate antihuellas y agarre texturizado en laterales y gatillos",
      "Compatibilidad nativa con consolas Xbox Series X|S, Xbox One y Windows 10/11",
      "Mapeo de botones personalizable a través de la app Accesorios de Xbox"
    ],
    "specs": {
      "bateria": "Hasta 40 horas de juego",
      "conexion": "Bluetooth / USB-C"
    },
    "buenFinDiscount": 60,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 60% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "gaming-acc-6",
    "department": "Videojuegos & Consolas",
    "name": "Control Inalámbrico Xbox Series X|S — Edición Especial Verde Lima Pulse",
    "slug": "control-xbox-series-verde-lima-pulse",
    "category": "videojuegos",
    "subcategory": "accesorios",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Microsoft / Xbox",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1799,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 1620,
    "image": "Productos 3/control inalambrico xbox verde lima.jpg",
    "description": "Destaca con el vibrante acabado Electric Volt Verde Lima. Diseñado para ofrecer una estética llamativa con la misma precisión competitiva y autonomía duradera de Xbox.",
    "sku": "GAM-MS-XBCON-LIME",
    "inStock": true,
    "genre": "Accesorio / Control",
    "features": [
      "Color verde lima eléctrico exclusivo con parte trasera blanca en contraste",
      "Gatillos texturizados y pad híbrido refinado",
      "Conexión instantánea con consolas, PC y teléfonos inteligentes"
    ],
    "specs": {
      "bateria": "Hasta 40 horas de juego",
      "conexion": "Inalámbrico Xbox / Bluetooth"
    }
  },
  {
    "id": "gaming-acc-7",
    "department": "Videojuegos & Consolas",
    "name": "Control Inalámbrico Xbox Series X|S — Edición Militar Verde Velocity",
    "slug": "control-xbox-series-verde-militar-velocity",
    "category": "videojuegos",
    "subcategory": "accesorios",
    "platform": "Xbox",
    "platformTag": "xbox",
    "brand": "Microsoft / Xbox",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1799,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 1980,
    "image": "Productos 3/control inalambrico xbox verde.jpg",
    "description": "Inspirado en la temática táctica militar. Color verde oliva con detalles en negro, agarre mejorado en mangos y gatillos para una sujeción firme durante intensas partidas.",
    "sku": "GAM-MS-XBCON-GRN",
    "inStock": true,
    "genre": "Accesorio / Control",
    "features": [
      "Estilo militar táctico con tonos verdes mate y botones oscuros",
      "Textura en gatillos y botones superiores que evita resbalones",
      "Conexión rápida mediante Bluetooth para juego en la nube"
    ],
    "specs": {
      "bateria": "Hasta 40 horas de juego",
      "conexion": "Bluetooth / Xbox Wireless"
    }
  },
  {
    "id": "gaming-acc-8",
    "department": "Videojuegos & Consolas",
    "name": "Control Inalámbrico Pro para Xbox y PC con Grip Ergonómico",
    "slug": "control-inalambrico-pro-xbox-pc",
    "category": "videojuegos",
    "subcategory": "accesorios",
    "platform": "Xbox / PC",
    "platformTag": "all",
    "brand": "Microsoft / Xbox Pro",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 2099,
    "originalPrice": null,
    "rating": 5,
    "reviewsCount": 2450,
    "image": "Productos 3/control inalambrico.jpg",
    "description": "Control de alta gama diseñado para gamers exigentes. Sticks analógicos de ultra precisión con tensión balanceada, carátula pulida y conexión inalámbrica de baja latencia.",
    "sku": "GAM-MS-PROCON",
    "inStock": true,
    "genre": "Accesorio / Control",
    "features": [
      "Latencia ultrabaja para juegos competitivos y shooters en primera persona",
      "Empuñaduras de goma envolventes de tacto prémium",
      "Batería recargable integrada con carga rápida por USB-C"
    ],
    "specs": {
      "bateria": "Batería recargable hasta 30 horas continuas",
      "conexion": "USB-C y Bluetooth 5.2"
    }
  },
  {
    "id": "prod-productos-218",
    "department": "Tecnología · Cómputo",
    "name": "Barra de Sonido Sonos Arc Dolby Atmos",
    "slug": "barra-de-sonido-sonos-arc-dolby-atmos-218",
    "category": "electronica",
    "brand": "Sonos",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 20099,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 156,
    "image": "Productos/1. Barra de Sonido Sonos Arc Dolby Atmos.jpg",
    "description": "Barra de Sonido Sonos Arc Dolby Atmos con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "TEC-PRODUCTOS-0218",
    "inStock": true
  },
  {
    "id": "prod-productos-219",
    "department": "Tecnología · Cómputo",
    "name": "Apple AirPods Pro de 2.ª Generación 1",
    "slug": "apple-airpods-pro-de-2-generacion-1-219",
    "category": "electronica",
    "brand": "Apple",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 3899,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 163,
    "image": "Productos/Apple AirPods Pro de 2.ª Generación 1.jpg",
    "description": "Apple AirPods Pro de 2.ª Generación 1 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "TEC-PRODUCTOS-0219",
    "inStock": true
  },
  {
    "id": "prod-productos-220",
    "department": "Tecnología · Cómputo",
    "name": "Apple MacBook Pro 14 pulgadas 1",
    "slug": "apple-macbook-pro-14-pulgadas-1-220",
    "category": "electronica",
    "brand": "Apple",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 41299,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 170,
    "image": "Productos/Apple MacBook Pro 14 pulgadas 1.jpg",
    "description": "Apple MacBook Pro 14 pulgadas 1 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "TEC-PRODUCTOS-0220",
    "inStock": true
  },
  {
    "id": "prod-productos-221",
    "department": "Tecnología · Cómputo",
    "name": "Audífonos Sony WH-1000XM5 azul",
    "slug": "audifonos-sony-wh-1000xm5-azul-221",
    "category": "electronica",
    "brand": "Sony",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 7699,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 177,
    "image": "Productos/Audífonos Sony WH-1000XM5 azul.jpg",
    "description": "Audífonos Sony WH-1000XM5 azul con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "TEC-PRODUCTOS-0221",
    "inStock": true
  },
  {
    "id": "prod-productos-222",
    "department": "Tecnología · Cómputo",
    "name": "Audífonos Sony WH-1000XM5 blanco",
    "slug": "audifonos-sony-wh-1000xm5-blanco-222",
    "category": "electronica",
    "brand": "Sony",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 7699,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 184,
    "image": "Productos/Audífonos Sony WH-1000XM5 blanco.jpg",
    "description": "Audífonos Sony WH-1000XM5 blanco con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "TEC-PRODUCTOS-0222",
    "inStock": true
  },
  {
    "id": "prod-productos-223",
    "department": "Tecnología · Cómputo",
    "name": "Audífonos Sony WH-1000XM5 morado",
    "slug": "audifonos-sony-wh-1000xm5-morado-223",
    "category": "electronica",
    "brand": "Sony",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 7699,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 191,
    "image": "Productos/Audífonos Sony WH-1000XM5 morado.jpg",
    "description": "Audífonos Sony WH-1000XM5 morado con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "TEC-PRODUCTOS-0223",
    "inStock": true
  },
  {
    "id": "prod-productos-224",
    "department": "Hogar · Muebles",
    "name": "Batería de Cocina",
    "slug": "bateria-de-cocina-224",
    "category": "hogar",
    "brand": "T-fal Heritage",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1829,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 198,
    "image": "Productos/Batería de Cocina.jpg",
    "description": "Batería de Cocina con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS-0224",
    "inStock": true
  },
  {
    "id": "prod-productos-225",
    "department": "Deportes · Fitness",
    "name": "Bicicleta de montaña blanca",
    "slug": "bicicleta-de-montana-blanca-225",
    "category": "deportes",
    "brand": "Pro Fitness",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 8999,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 205,
    "image": "Productos/bicicleta de montaña blanca.jpg",
    "description": "Bicicleta de montaña blanca con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "DEP-PRODUCTOS-0225",
    "inStock": true
  },
  {
    "id": "prod-productos-226",
    "department": "Deportes · Fitness",
    "name": "Bicicleta de montaña naranja",
    "slug": "bicicleta-de-montana-naranja-226",
    "category": "deportes",
    "brand": "Pro Fitness",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 8999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 212,
    "image": "Productos/bicicleta de montaña naranja.jpg",
    "description": "Bicicleta de montaña naranja con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "DEP-PRODUCTOS-0226",
    "inStock": true
  },
  {
    "id": "prod-productos-227",
    "department": "Deportes · Fitness",
    "name": "Bicicleta de montaña roja y naranja",
    "slug": "bicicleta-de-montana-roja-y-naranja-227",
    "category": "deportes",
    "brand": "Pro Fitness",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 8999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 219,
    "image": "Productos/bicicleta de montaña roja y naranja.jpg",
    "description": "Bicicleta de montaña roja y naranja con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "DEP-PRODUCTOS-0227",
    "inStock": true
  },
  {
    "id": "prod-productos-228",
    "department": "Moda · Accesorios",
    "name": "Bolso Tote de Piel blanco",
    "slug": "bolso-tote-de-piel-blanco-228",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1679,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 226,
    "image": "Productos/Bolso Tote de Piel blanco.jpg",
    "description": "Bolso Tote de Piel blanco con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0228",
    "inStock": true
  },
  {
    "id": "prod-productos-229",
    "department": "Moda · Accesorios",
    "name": "Bolso Tote de Piel Cafe",
    "slug": "bolso-tote-de-piel-cafe-229",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1679,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 233,
    "image": "Productos/Bolso Tote de Piel Cafe.jpg",
    "description": "Bolso Tote de Piel Cafe con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0229",
    "inStock": true
  },
  {
    "id": "prod-productos-230",
    "department": "Moda · Ropa",
    "name": "Chamarra de piel sintetica roja mujer",
    "slug": "chamarra-de-piel-sintetica-roja-mujer-230",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 240,
    "image": "Productos/chamarra de piel sintetica roja mujer.jpg",
    "description": "Chamarra de piel sintetica roja mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0230",
    "inStock": true
  },
  {
    "id": "prod-productos-231",
    "department": "Moda · Ropa",
    "name": "Jean 1",
    "slug": "jean-1-231",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 719,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 247,
    "image": "Productos/jean 1.jpg",
    "description": "Jean 1 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0231",
    "inStock": true
  },
  {
    "id": "prod-productos-232",
    "department": "Moda · Ropa",
    "name": "Jean 2",
    "slug": "jean-2-232",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 719,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 254,
    "image": "Productos/jean 2.jpg",
    "description": "Jean 2 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0232",
    "inStock": true
  },
  {
    "id": "prod-productos-233",
    "department": "Moda · Ropa",
    "name": "Jean 3",
    "slug": "jean-3-233",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 719,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 261,
    "image": "Productos/jean 3.jpg",
    "description": "Jean 3 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0233",
    "inStock": true
  },
  {
    "id": "prod-productos-234",
    "department": "Tecnología · Cómputo",
    "name": "Laptop Dell XPS 13 Plus Negra",
    "slug": "laptop-dell-xps-13-plus-negra-234",
    "category": "electronica",
    "brand": "Dell",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 34199,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 268,
    "image": "Productos/Laptop Dell XPS 13 Plus Negra.jpg",
    "description": "Laptop Dell XPS 13 Plus Negra con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "TEC-PRODUCTOS-0234",
    "inStock": true
  },
  {
    "id": "prod-productos-235",
    "department": "Tecnología · Cómputo",
    "name": "Laptop Dell XPS 13 Plus Roja",
    "slug": "laptop-dell-xps-13-plus-roja-235",
    "category": "electronica",
    "brand": "Dell",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 34199,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 275,
    "image": "Productos/Laptop Dell XPS 13 Plus Roja.jpg",
    "description": "Laptop Dell XPS 13 Plus Roja con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "TEC-PRODUCTOS-0235",
    "inStock": true
  },
  {
    "id": "prod-productos-236",
    "department": "Deportes · Fitness",
    "name": "Nike Vaporfly 3 Tenis de Carrera blanco con amarillo",
    "slug": "nike-vaporfly-3-tenis-de-carrera-blanco-con-amarillo-236",
    "category": "deportes",
    "brand": "Nike",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 6359,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 282,
    "image": "Productos/Nike Vaporfly 3 Tenis de Carrera blanco con amarillo.jpg",
    "description": "Nike Vaporfly 3 Tenis de Carrera blanco con amarillo con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "DEP-PRODUCTOS-0236",
    "inStock": true
  },
  {
    "id": "prod-productos-237",
    "department": "Deportes · Fitness",
    "name": "Nike Vaporfly 3 Tenis de Carrera rojo con blanco",
    "slug": "nike-vaporfly-3-tenis-de-carrera-rojo-con-blanco-237",
    "category": "deportes",
    "brand": "Nike",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 6359,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 289,
    "image": "Productos/Nike Vaporfly 3 Tenis de Carrera rojo con blanco.jpg",
    "description": "Nike Vaporfly 3 Tenis de Carrera rojo con blanco con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "DEP-PRODUCTOS-0237",
    "inStock": true
  },
  {
    "id": "prod-productos-238",
    "department": "Moda · Ropa",
    "name": "Pantalon de meclilla negro mujer",
    "slug": "pantalon-de-meclilla-negro-mujer-238",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 719,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 296,
    "image": "Productos/pantalon de meclilla negro mujer.jpg",
    "description": "Pantalon de meclilla negro mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0238",
    "inStock": true
  },
  {
    "id": "prod-productos-239",
    "department": "Moda · Ropa",
    "name": "Pantalón Chino Slim Fit blanco",
    "slug": "pantalon-chino-slim-fit-blanco-239",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 719,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 303,
    "image": "Productos/Pantalón Chino Slim Fit blanco.jpg",
    "description": "Pantalón Chino Slim Fit blanco con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0239",
    "inStock": true
  },
  {
    "id": "prod-productos-240",
    "department": "Moda · Ropa",
    "name": "Pantalón Chino Slim Fit nergo",
    "slug": "pantalon-chino-slim-fit-nergo-240",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 719,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 310,
    "image": "Productos/Pantalón Chino Slim Fit nergo.jpg",
    "description": "Pantalón Chino Slim Fit nergo con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0240",
    "inStock": true
  },
  {
    "id": "prod-productos-241",
    "department": "Hogar · Muebles",
    "name": "Robot aspirador 2",
    "slug": "robot-aspirador-2-241",
    "category": "hogar",
    "brand": "iRobot Roomba",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1829,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 317,
    "image": "Productos/robot aspirador 2.jpg",
    "description": "Robot aspirador 2 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS-0241",
    "inStock": true
  },
  {
    "id": "prod-productos-242",
    "department": "Hogar · Muebles",
    "name": "Sala Modular Nórdica de Diseño Escandinavo 1",
    "slug": "sala-modular-nordica-de-diseno-escandinavo-1-242",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 24399,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 324,
    "image": "Productos/Sala Modular Nórdica de Diseño Escandinavo 1.jpg",
    "description": "Sala Modular Nórdica de Diseño Escandinavo 1 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS-0242",
    "inStock": true
  },
  {
    "id": "prod-productos-243",
    "department": "Tecnología · Cómputo",
    "name": "Samsung Galaxy S24 Ultra 512GB 1",
    "slug": "samsung-galaxy-s24-ultra-512gb-1-243",
    "category": "electronica",
    "brand": "Samsung",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 29499,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 331,
    "image": "Productos/Samsung Galaxy S24 Ultra 512GB 1.jpg",
    "description": "Samsung Galaxy S24 Ultra 512GB 1 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "TEC-PRODUCTOS-0243",
    "inStock": true
  },
  {
    "id": "prod-productos-244",
    "department": "Moda · Ropa",
    "name": "Short mezclilla rosa mujer",
    "slug": "short-mezclilla-rosa-mujer-244",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 719,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 338,
    "image": "Productos/short mezclilla rosa mujer.jpg",
    "description": "Short mezclilla rosa mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0244",
    "inStock": true
  },
  {
    "id": "prod-productos-245",
    "department": "Hogar · Muebles",
    "name": "Sillón Reclinable Eléctrico beige",
    "slug": "sillon-reclinable-electrico-beige-245",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 18299,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 345,
    "image": "Productos/Sillón Reclinable Eléctrico beige.jpg",
    "description": "Sillón Reclinable Eléctrico beige con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS-0245",
    "inStock": true
  },
  {
    "id": "prod-productos-246",
    "department": "Hogar · Muebles",
    "name": "Sillón Reclinable Eléctrico de Piel Genuina cafe",
    "slug": "sillon-reclinable-electrico-de-piel-genuina-cafe-246",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 18299,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 352,
    "image": "Productos/Sillón Reclinable Eléctrico de Piel Genuina cafe.jpg",
    "description": "Sillón Reclinable Eléctrico de Piel Genuina cafe con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS-0246",
    "inStock": true
  },
  {
    "id": "prod-productos-247",
    "department": "Hogar · Muebles",
    "name": "Sillón Reclinable Eléctrico Gris",
    "slug": "sillon-reclinable-electrico-gris-247",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 18299,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 359,
    "image": "Productos/Sillón Reclinable Eléctrico Gris.jpg",
    "description": "Sillón Reclinable Eléctrico Gris con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS-0247",
    "inStock": true
  },
  {
    "id": "prod-productos-248",
    "department": "Moda · Ropa",
    "name": "Sueter azul mujer 2",
    "slug": "sueter-azul-mujer-2-248",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 719,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 366,
    "image": "Productos/sueter azul mujer 2.jpg",
    "description": "Sueter azul mujer 2 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0248",
    "inStock": true
  },
  {
    "id": "prod-productos-249",
    "department": "Deportes · Fitness",
    "name": "Tenis nike",
    "slug": "tenis-nike-249",
    "category": "deportes",
    "brand": "Nike",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 373,
    "image": "Productos/tenis nike.jpg",
    "description": "Tenis nike con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "DEP-PRODUCTOS-0249",
    "inStock": true
  },
  {
    "id": "prod-productos-250",
    "department": "Deportes · Fitness",
    "name": "Tienda de Campaña Coleman Instant Cabin 1",
    "slug": "tienda-de-campana-coleman-instant-cabin-1-250",
    "category": "deportes",
    "brand": "Coleman",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 5159,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 30,
    "image": "Productos/Tienda de Campaña Coleman Instant Cabin 1.jpg",
    "description": "Tienda de Campaña Coleman Instant Cabin 1 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "DEP-PRODUCTOS-0250",
    "inStock": true
  },
  {
    "id": "prod-productos-251",
    "department": "Deportes · Fitness",
    "name": "Tienda de Campaña Coleman Instant Cabin 2",
    "slug": "tienda-de-campana-coleman-instant-cabin-2-251",
    "category": "deportes",
    "brand": "Coleman",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 5159,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 37,
    "image": "Productos/Tienda de Campaña Coleman Instant Cabin 2.jpg",
    "description": "Tienda de Campaña Coleman Instant Cabin 2 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "DEP-PRODUCTOS-0251",
    "inStock": true
  },
  {
    "id": "prod-productos-252",
    "department": "Deportes · Fitness",
    "name": "Tienda de Campaña Coleman Instant Cabin 3",
    "slug": "tienda-de-campana-coleman-instant-cabin-3-252",
    "category": "deportes",
    "brand": "Coleman",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 5159,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 44,
    "image": "Productos/Tienda de Campaña Coleman Instant Cabin 3.jpg",
    "description": "Tienda de Campaña Coleman Instant Cabin 3 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "DEP-PRODUCTOS-0252",
    "inStock": true
  },
  {
    "id": "prod-productos-253",
    "department": "Moda · Ropa",
    "name": "Traje Formal Slim Fit de Lana Italiana 2",
    "slug": "traje-formal-slim-fit-de-lana-italiana-2-253",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 5399,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 51,
    "image": "Productos/Traje Formal Slim Fit de Lana Italiana 2.jpg",
    "description": "Traje Formal Slim Fit de Lana Italiana 2 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0253",
    "inStock": true
  },
  {
    "id": "prod-productos-254",
    "department": "Moda · Ropa",
    "name": "Vestido midi pisado de satin negro",
    "slug": "vestido-midi-pisado-de-satin-negro-254",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2759,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 58,
    "image": "Productos/vestido midi pisado de satin negro.jpg",
    "description": "Vestido midi pisado de satin negro con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0254",
    "inStock": true
  },
  {
    "id": "prod-productos-255",
    "department": "Moda · Ropa",
    "name": "Vestido midi plisado celeste",
    "slug": "vestido-midi-plisado-celeste-255",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2759,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 65,
    "image": "Productos/vestido midi plisado celeste.jpg",
    "description": "Vestido midi plisado celeste con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0255",
    "inStock": true
  },
  {
    "id": "prod-productos-256",
    "department": "Moda · Ropa",
    "name": "Vestido Midi Plisado de Satín negro",
    "slug": "vestido-midi-plisado-de-satin-negro-256",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2759,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 72,
    "image": "Productos/Vestido Midi Plisado de Satín negro.jpg",
    "description": "Vestido Midi Plisado de Satín negro con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0256",
    "inStock": true
  },
  {
    "id": "prod-productos-257",
    "department": "Moda · Ropa",
    "name": "Vestido Midi Plisado de Satín rojo",
    "slug": "vestido-midi-plisado-de-satin-rojo-257",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 2759,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 79,
    "image": "Productos/Vestido Midi Plisado de Satín rojo.jpg",
    "description": "Vestido Midi Plisado de Satín rojo con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0257",
    "inStock": true
  },
  {
    "id": "prod-productos-258",
    "department": "Moda · Ropa",
    "name": "Zapatillas cafe oscuro",
    "slug": "zapatillas-cafe-oscuro-258",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 719,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 86,
    "image": "Productos/zapatillas cafe oscuro.jpg",
    "description": "Zapatillas cafe oscuro con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0258",
    "inStock": true
  },
  {
    "id": "prod-productos-259",
    "department": "Moda · Ropa",
    "name": "Zapatillas rojas",
    "slug": "zapatillas-rojas-259",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 719,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 93,
    "image": "Productos/zapatillas rojas.jpg",
    "description": "Zapatillas rojas con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS-0259",
    "inStock": true
  },
  {
    "id": "prod-productos2-260",
    "department": "Moda · Accesorios",
    "name": "Bolso para dama 1",
    "slug": "bolso-para-dama-1-260",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1679,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 100,
    "image": "Productos 2/bolso para dama 1.jpg",
    "description": "Bolso para dama 1 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0260",
    "inStock": true
  },
  {
    "id": "prod-productos2-261",
    "department": "Moda · Accesorios",
    "name": "Bolso para dama cafe",
    "slug": "bolso-para-dama-cafe-261",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1679,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 107,
    "image": "Productos 2/bolso para dama cafe.jpg",
    "description": "Bolso para dama cafe con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0261",
    "inStock": true
  },
  {
    "id": "prod-productos2-262",
    "department": "Moda · Accesorios",
    "name": "Bolso para dama negro",
    "slug": "bolso-para-dama-negro-262",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Buen Fin -50%",
    "badgeType": "offer",
    "price": 840,
    "originalPrice": 1679,
    "rating": 4.8,
    "reviewsCount": 114,
    "image": "Productos 2/bolso para dama negro.jpg",
    "description": "Bolso para dama negro con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0262",
    "inStock": true,
    "buenFinDiscount": 50,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 50% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "prod-productos2-263",
    "department": "Moda · Accesorios",
    "name": "Bolso para dama rosa",
    "slug": "bolso-para-dama-rosa-263",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1679,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "Productos 2/bolso para dama rosa.jpg",
    "description": "Bolso para dama rosa con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0263",
    "inStock": true
  },
  {
    "id": "prod-productos2-264",
    "department": "Moda · Accesorios",
    "name": "Bolso para dama",
    "slug": "bolso-para-dama-264",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1679,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 128,
    "image": "Productos 2/bolso para dama.jpg",
    "description": "Bolso para dama con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0264",
    "inStock": true
  },
  {
    "id": "prod-productos2-265",
    "department": "Moda · Accesorios",
    "name": "Cartera de Hombre con RFID Bloqueo",
    "slug": "cartera-de-hombre-con-rfid-bloqueo-265",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 839,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 135,
    "image": "Productos 2/Cartera de Hombre con RFID Bloqueo.jpg",
    "description": "Cartera de Hombre con RFID Bloqueo con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0265",
    "inStock": true
  },
  {
    "id": "prod-productos2-266",
    "department": "Moda · Accesorios",
    "name": "Cartera mujer rosa",
    "slug": "cartera-mujer-rosa-266",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 839,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 142,
    "image": "Productos 2/cartera mujer rosa.jpg",
    "description": "Cartera mujer rosa con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0266",
    "inStock": true
  },
  {
    "id": "prod-productos2-267",
    "department": "Moda · Accesorios",
    "name": "Cartera para caballero cafe",
    "slug": "cartera-para-caballero-cafe-267",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 839,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "Productos 2/cartera para caballero cafe.jpg",
    "description": "Cartera para caballero cafe con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0267",
    "inStock": true
  },
  {
    "id": "prod-productos2-268",
    "department": "Moda · Accesorios",
    "name": "Cartera para caballero negro",
    "slug": "cartera-para-caballero-negro-268",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 839,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 156,
    "image": "Productos 2/cartera para caballero negro.jpg",
    "description": "Cartera para caballero negro con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0268",
    "inStock": true
  },
  {
    "id": "prod-productos2-269",
    "department": "Moda · Accesorios",
    "name": "Cartera para Hombre, Cartera de Piel para Hombre RFID Bloqueo Antirrobo",
    "slug": "cartera-para-hombre-cartera-de-piel-para-hombre-rfid-bloqueo-antirrobo-269",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 839,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 163,
    "image": "Productos 2/Cartera para Hombre, Cartera de Piel para Hombre RFID Bloqueo Antirrobo.jpg",
    "description": "Cartera para Hombre, Cartera de Piel para Hombre RFID Bloqueo Antirrobo con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0269",
    "inStock": true
  },
  {
    "id": "prod-productos2-270",
    "department": "Moda · Accesorios",
    "name": "Cartera para mujer 1",
    "slug": "cartera-para-mujer-1-270",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 839,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 170,
    "image": "Productos 2/cartera para mujer 1.jpg",
    "description": "Cartera para mujer 1 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0270",
    "inStock": true
  },
  {
    "id": "prod-productos2-271",
    "department": "Moda · Accesorios",
    "name": "Cartera para mujer",
    "slug": "cartera-para-mujer-271",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Buen Fin -50%",
    "badgeType": "offer",
    "price": 420,
    "originalPrice": 839,
    "rating": 4.9,
    "reviewsCount": 177,
    "image": "Productos 2/cartera para mujer.jpg",
    "description": "Cartera para mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0271",
    "inStock": true,
    "buenFinDiscount": 50,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 50% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "prod-productos2-272",
    "department": "Moda · Ropa",
    "name": "Chamarra azul marino hombre",
    "slug": "chamarra-azul-marino-hombre-272",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 184,
    "image": "Productos 2/chamarra azul marino hombre.jpg",
    "description": "Chamarra azul marino hombre con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0272",
    "inStock": true
  },
  {
    "id": "prod-productos2-273",
    "department": "Moda · Ropa",
    "name": "Chamarra de mesclilla hombre",
    "slug": "chamarra-de-mesclilla-hombre-273",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 191,
    "image": "Productos 2/chamarra de mesclilla hombre.jpg",
    "description": "Chamarra de mesclilla hombre con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0273",
    "inStock": true
  },
  {
    "id": "prod-productos2-274",
    "department": "Moda · Ropa",
    "name": "Chamarra negra hombre",
    "slug": "chamarra-negra-hombre-274",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 198,
    "image": "Productos 2/chamarra negra hombre.jpg",
    "description": "Chamarra negra hombre con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0274",
    "inStock": true
  },
  {
    "id": "prod-productos2-275",
    "department": "Hogar · Muebles",
    "name": "Comoda para recamara",
    "slug": "comoda-para-recamara-275",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 5239,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 205,
    "image": "Productos 2/comoda para recamara.jpg",
    "description": "Comoda para recamara con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS2-0275",
    "inStock": true
  },
  {
    "id": "prod-productos2-276",
    "department": "Moda · Ropa",
    "name": "Conjunto de chaqueta y pantalones formales para mujer, traje de 2",
    "slug": "conjunto-de-chaqueta-y-pantalones-formales-para-mujer-traje-de-2-276",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 5399,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 212,
    "image": "Productos 2/Conjunto de chaqueta y pantalones formales para mujer, traje de 2.jpg",
    "description": "Conjunto de chaqueta y pantalones formales para mujer, traje de 2 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0276",
    "inStock": true
  },
  {
    "id": "prod-productos2-277",
    "department": "Moda · Ropa",
    "name": "Conjunto de chaqueta y pantalones formales para mujer",
    "slug": "conjunto-de-chaqueta-y-pantalones-formales-para-mujer-277",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 719,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 219,
    "image": "Productos 2/Conjunto de chaqueta y pantalones formales para mujer.jpg",
    "description": "Conjunto de chaqueta y pantalones formales para mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0277",
    "inStock": true
  },
  {
    "id": "prod-productos2-278",
    "department": "Moda · Accesorios",
    "name": "Gafas de Sol Rb4418d en Gris transparente sobre bronce de cañón y Polar mujer",
    "slug": "gafas-de-sol-rb4418d-en-gris-transparente-sobre-bronce-de-canon-y-polar-mujer-278",
    "category": "ropa",
    "brand": "Ray-Ban",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 226,
    "image": "Productos 2/Gafas de Sol Rb4418d en Gris transparente sobre bronce de cañón y Polar mujer.jpg",
    "description": "Gafas de Sol Rb4418d en Gris transparente sobre bronce de cañón y Polar mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0278",
    "inStock": true
  },
  {
    "id": "prod-productos2-279",
    "department": "Hogar · Muebles",
    "name": "Lampara colgante led",
    "slug": "lampara-colgante-led-279",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2319,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 233,
    "image": "Productos 2/lampara colgante led.jpg",
    "description": "Lampara colgante led con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS2-0279",
    "inStock": true
  },
  {
    "id": "prod-productos2-280",
    "department": "Hogar · Muebles",
    "name": "Lampara de techo LED",
    "slug": "lampara-de-techo-led-280",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2319,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 240,
    "image": "Productos 2/lampara de techo LED.jpg",
    "description": "Lampara de techo LED con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS2-0280",
    "inStock": true
  },
  {
    "id": "prod-productos2-281",
    "department": "Hogar · Muebles",
    "name": "Lamparas colgantes",
    "slug": "lamparas-colgantes-281",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2319,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 247,
    "image": "Productos 2/lamparas colgantes.jpg",
    "description": "Lamparas colgantes con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS2-0281",
    "inStock": true
  },
  {
    "id": "prod-productos2-282",
    "department": "Moda · Accesorios",
    "name": "Lentes de Sol Mujer Modelo Penelope",
    "slug": "lentes-de-sol-mujer-modelo-penelope-282",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Buen Fin -75%",
    "badgeType": "offer",
    "price": 750,
    "originalPrice": 2999,
    "rating": 4.8,
    "reviewsCount": 254,
    "image": "Productos 2/Lentes de Sol Mujer Modelo Penelope.jpg",
    "description": "Lentes de Sol Mujer Modelo Penelope con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0282",
    "inStock": true,
    "buenFinDiscount": 75,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 75% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "prod-productos2-283",
    "department": "Moda · Accesorios",
    "name": "Lentes de sol mujer",
    "slug": "lentes-de-sol-mujer-283",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2999,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 261,
    "image": "Productos 2/lentes de sol mujer.jpg",
    "description": "Lentes de sol mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0283",
    "inStock": true
  },
  {
    "id": "prod-productos2-284",
    "department": "Moda · Accesorios",
    "name": "Lentes de sol para hombres modernos",
    "slug": "lentes-de-sol-para-hombres-modernos-284",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2999,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 268,
    "image": "Productos 2/Lentes de sol para hombres modernos.jpg",
    "description": "Lentes de sol para hombres modernos con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0284",
    "inStock": true
  },
  {
    "id": "prod-productos2-285",
    "department": "Moda · Accesorios",
    "name": "Lentes de sol para mujer",
    "slug": "lentes-de-sol-para-mujer-285",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 2999,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 275,
    "image": "Productos 2/lentes de sol para mujer.jpg",
    "description": "Lentes de sol para mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0285",
    "inStock": true
  },
  {
    "id": "prod-productos2-286",
    "department": "Moda · Accesorios",
    "name": "Lentes para sol mujer",
    "slug": "lentes-para-sol-mujer-286",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2999,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 282,
    "image": "Productos 2/lentes para sol mujer.jpg",
    "description": "Lentes para sol mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0286",
    "inStock": true
  },
  {
    "id": "prod-productos2-287",
    "department": "Hogar · Muebles",
    "name": "Lámpara de techo de vidrio moderna",
    "slug": "lampara-de-techo-de-vidrio-moderna-287",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2319,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 289,
    "image": "Productos 2/Lámpara de techo de vidrio moderna.jpg",
    "description": "Lámpara de techo de vidrio moderna con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS2-0287",
    "inStock": true
  },
  {
    "id": "prod-productos2-288",
    "department": "Hogar · Muebles",
    "name": "Lámparas de techo de cristal, luminación elegante para tu hogar",
    "slug": "lamparas-de-techo-de-cristal-luminacion-elegante-para-tu-hogar-288",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2319,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 296,
    "image": "Productos 2/Lámparas de techo de cristal, luminación elegante para tu hogar.jpg",
    "description": "Lámparas de techo de cristal, luminación elegante para tu hogar con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS2-0288",
    "inStock": true
  },
  {
    "id": "prod-productos2-289",
    "department": "Hogar · Muebles",
    "name": "Mesa de Centro Moderna en Blanco",
    "slug": "mesa-de-centro-moderna-en-blanco-289",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 5239,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 303,
    "image": "Productos 2/Mesa de Centro Moderna en Blanco.jpg",
    "description": "Mesa de Centro Moderna en Blanco con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS2-0289",
    "inStock": true
  },
  {
    "id": "prod-productos2-290",
    "department": "Hogar · Muebles",
    "name": "Mesa de centro para sala",
    "slug": "mesa-de-centro-para-sala-290",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 24399,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 310,
    "image": "Productos 2/mesa de centro para sala.jpg",
    "description": "Mesa de centro para sala con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS2-0290",
    "inStock": true
  },
  {
    "id": "prod-productos2-291",
    "department": "Hogar · Muebles",
    "name": "Mesa de noche color cade oscuro",
    "slug": "mesa-de-noche-color-cade-oscuro-291",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Buen Fin -60%",
    "badgeType": "offer",
    "price": 2096,
    "originalPrice": 5239,
    "rating": 4.9,
    "reviewsCount": 317,
    "image": "Productos 2/mesa de noche color cade oscuro.jpg",
    "description": "Mesa de noche color cade oscuro con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS2-0291",
    "inStock": true,
    "buenFinDiscount": 60,
    "offerTitle": "🔥 BUEN FIN MÁGICO · 60% OFF",
    "offerEndDate": "2026-11-21T23:59:59-06:00"
  },
  {
    "id": "prod-productos2-292",
    "department": "Hogar · Muebles",
    "name": "Mesa redonda",
    "slug": "mesa-redonda-292",
    "category": "hogar",
    "brand": "Maison & Confort",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 5239,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 324,
    "image": "Productos 2/mesa redonda.jpg",
    "description": "Mesa redonda con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS2-0292",
    "inStock": true
  },
  {
    "id": "prod-productos2-293",
    "department": "Moda · Ropa",
    "name": "Mesita de noche 1",
    "slug": "mesita-de-noche-1-293",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 719,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 331,
    "image": "Productos 2/mesita de noche 1.jpg",
    "description": "Mesita de noche 1 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0293",
    "inStock": true
  },
  {
    "id": "prod-productos2-294",
    "department": "Moda · Accesorios",
    "name": "Otto Cartera Para Hombre Con Monedero Y Bloqueo Rfid Fal221",
    "slug": "otto-cartera-para-hombre-con-monedero-y-bloqueo-rfid-fal221-294",
    "category": "ropa",
    "brand": "Otto",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 839,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 338,
    "image": "Productos 2/otto Cartera Para Hombre Con Monedero Y Bloqueo Rfid Fal221.jpg",
    "description": "Otto Cartera Para Hombre Con Monedero Y Bloqueo Rfid Fal221 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0294",
    "inStock": true
  },
  {
    "id": "prod-productos2-295",
    "department": "Moda · Ropa",
    "name": "Playera de manga larga color gris hombre",
    "slug": "playera-de-manga-larga-color-gris-hombre-295",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 719,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 345,
    "image": "Productos 2/playera de manga larga color gris hombre.jpg",
    "description": "Playera de manga larga color gris hombre con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0295",
    "inStock": true
  },
  {
    "id": "prod-productos2-296",
    "department": "Moda · Ropa",
    "name": "Playera gris mujer",
    "slug": "playera-gris-mujer-296",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 719,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 352,
    "image": "Productos 2/playera gris mujer.jpg",
    "description": "Playera gris mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0296",
    "inStock": true
  },
  {
    "id": "prod-productos2-297",
    "department": "Moda · Ropa",
    "name": "Playera polo azul marino",
    "slug": "playera-polo-azul-marino-297",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 719,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 359,
    "image": "Productos 2/playera polo azul marino.jpg",
    "description": "Playera polo azul marino con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0297",
    "inStock": true
  },
  {
    "id": "prod-productos2-298",
    "department": "Moda · Ropa",
    "name": "Playera polo naranja de hombre",
    "slug": "playera-polo-naranja-de-hombre-298",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 719,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 366,
    "image": "Productos 2/playera polo naranja de hombre.jpg",
    "description": "Playera polo naranja de hombre con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0298",
    "inStock": true
  },
  {
    "id": "prod-productos2-299",
    "department": "Moda · Ropa",
    "name": "Playera roja de mujer",
    "slug": "playera-roja-de-mujer-299",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 719,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 373,
    "image": "Productos 2/playera roja de mujer.jpg",
    "description": "Playera roja de mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0299",
    "inStock": true
  },
  {
    "id": "prod-productos2-300",
    "department": "Moda · Accesorios",
    "name": "Reloj - FIZILI - Para Hombre - 08",
    "slug": "reloj-fizili-para-hombre-08-300",
    "category": "ropa",
    "brand": "FIZILI",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 30,
    "image": "Productos 2/Reloj - FIZILI - Para Hombre - 08.jpg",
    "description": "Reloj - FIZILI - Para Hombre - 08 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0300",
    "inStock": true
  },
  {
    "id": "prod-productos2-301",
    "department": "Moda · Accesorios",
    "name": "Reloj de hombre",
    "slug": "reloj-de-hombre-301",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 37,
    "image": "Productos 2/reloj de hombre.jpg",
    "description": "Reloj de hombre con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0301",
    "inStock": true
  },
  {
    "id": "prod-productos2-302",
    "department": "Moda · Accesorios",
    "name": "Reloj digital hombre",
    "slug": "reloj-digital-hombre-302",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 44,
    "image": "Productos 2/reloj digital hombre.jpg",
    "description": "Reloj digital hombre con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0302",
    "inStock": true
  },
  {
    "id": "prod-productos2-303",
    "department": "Moda · Accesorios",
    "name": "Reloj digital mujer",
    "slug": "reloj-digital-mujer-303",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "Productos 2/reloj digital mujer.jpg",
    "description": "Reloj digital mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0303",
    "inStock": true
  },
  {
    "id": "prod-productos2-304",
    "department": "Moda · Accesorios",
    "name": "Reloj digital negro hombre",
    "slug": "reloj-digital-negro-hombre-304",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 58,
    "image": "Productos 2/reloj digital negro hombre.jpg",
    "description": "Reloj digital negro hombre con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0304",
    "inStock": true
  },
  {
    "id": "prod-productos2-305",
    "department": "Moda · Accesorios",
    "name": "Reloj hombre casio",
    "slug": "reloj-hombre-casio-305",
    "category": "ropa",
    "brand": "Casio",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 65,
    "image": "Productos 2/reloj hombre casio.jpg",
    "description": "Reloj hombre casio con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0305",
    "inStock": true
  },
  {
    "id": "prod-productos2-306",
    "department": "Moda · Accesorios",
    "name": "Reloj inteligente para mujer color rosa",
    "slug": "reloj-inteligente-para-mujer-color-rosa-306",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 72,
    "image": "Productos 2/reloj inteligente para mujer color rosa.jpg",
    "description": "Reloj inteligente para mujer color rosa con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0306",
    "inStock": true
  },
  {
    "id": "prod-productos2-307",
    "department": "Moda · Accesorios",
    "name": "Reloj mujer 2",
    "slug": "reloj-mujer-2-307",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 79,
    "image": "Productos 2/reloj mujer 2.jpg",
    "description": "Reloj mujer 2 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0307",
    "inStock": true
  },
  {
    "id": "prod-productos2-308",
    "department": "Moda · Accesorios",
    "name": "Reloj mujer",
    "slug": "reloj-mujer-308",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 86,
    "image": "Productos 2/reloj mujer.jpg",
    "description": "Reloj mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0308",
    "inStock": true
  },
  {
    "id": "prod-productos2-309",
    "department": "Moda · Accesorios",
    "name": "Reloj para hombre",
    "slug": "reloj-para-hombre-309",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 93,
    "image": "Productos 2/reloj para hombre.jpg",
    "description": "Reloj para hombre con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0309",
    "inStock": true
  },
  {
    "id": "prod-productos2-310",
    "department": "Moda · Accesorios",
    "name": "Reloj para mujer",
    "slug": "reloj-para-mujer-310",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2279,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 100,
    "image": "Productos 2/reloj para mujer.jpg",
    "description": "Reloj para mujer con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0310",
    "inStock": true
  },
  {
    "id": "prod-productos2-311",
    "department": "Hogar · Muebles",
    "name": "Set de cuchillos 2",
    "slug": "set-de-cuchillos-2-311",
    "category": "hogar",
    "brand": "Zwilling J.A. Henckels",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1829,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 107,
    "image": "Productos 2/set de cuchillos 2.jpg",
    "description": "Set de cuchillos 2 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS2-0311",
    "inStock": true
  },
  {
    "id": "prod-productos2-312",
    "department": "Hogar · Muebles",
    "name": "Set de cuchillos",
    "slug": "set-de-cuchillos-312",
    "category": "hogar",
    "brand": "Zwilling J.A. Henckels",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1829,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 114,
    "image": "Productos 2/set de cuchillos.jpg",
    "description": "Set de cuchillos con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "HOG-PRODUCTOS2-0312",
    "inStock": true
  },
  {
    "id": "prod-productos2-313",
    "department": "Moda · Ropa",
    "name": "Tainrunse vestido largo elegante con escote",
    "slug": "tainrunse-vestido-largo-elegante-con-escote-313",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 2759,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 121,
    "image": "Productos 2/tainrunse vestido largo elegante con escote.jpg",
    "description": "Tainrunse vestido largo elegante con escote con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0313",
    "inStock": true
  },
  {
    "id": "prod-productos2-314",
    "department": "Moda · Ropa",
    "name": "Traje formal feminino blanco",
    "slug": "traje-formal-feminino-blanco-314",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 5399,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 128,
    "image": "Productos 2/traje formal feminino blanco.jpg",
    "description": "Traje formal feminino blanco con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0314",
    "inStock": true
  },
  {
    "id": "prod-productos2-315",
    "department": "Moda · Ropa",
    "name": "Vestido azul marino",
    "slug": "vestido-azul-marino-315",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2759,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "Productos 2/vestido azul marino.jpg",
    "description": "Vestido azul marino con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0315",
    "inStock": true
  },
  {
    "id": "prod-productos2-316",
    "department": "Moda · Ropa",
    "name": "Vestido coctel azul",
    "slug": "vestido-coctel-azul-316",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2759,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 142,
    "image": "Productos 2/vestido coctel azul.jpg",
    "description": "Vestido coctel azul con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0316",
    "inStock": true
  },
  {
    "id": "prod-productos2-317",
    "department": "Moda · Ropa",
    "name": "Vestido coctel blanco",
    "slug": "vestido-coctel-blanco-317",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 2759,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 149,
    "image": "Productos 2/vestido coctel blanco.jpg",
    "description": "Vestido coctel blanco con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0317",
    "inStock": true
  },
  {
    "id": "prod-productos2-318",
    "department": "Moda · Ropa",
    "name": "Vestido coctel escotado",
    "slug": "vestido-coctel-escotado-318",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2759,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 156,
    "image": "Productos 2/vestido coctel escotado.jpg",
    "description": "Vestido coctel escotado con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0318",
    "inStock": true
  },
  {
    "id": "prod-productos2-319",
    "department": "Moda · Ropa",
    "name": "Vestido coctel rosa",
    "slug": "vestido-coctel-rosa-319",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2759,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 163,
    "image": "Productos 2/vestido coctel rosa.jpg",
    "description": "Vestido coctel rosa con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0319",
    "inStock": true
  },
  {
    "id": "prod-productos2-320",
    "department": "Moda · Ropa",
    "name": "Vestido de noche amarillo",
    "slug": "vestido-de-noche-amarillo-320",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2759,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 170,
    "image": "Productos 2/vestido de noche amarillo.jpg",
    "description": "Vestido de noche amarillo con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0320",
    "inStock": true
  },
  {
    "id": "prod-productos2-321",
    "department": "Moda · Ropa",
    "name": "Vestido de noche verde",
    "slug": "vestido-de-noche-verde-321",
    "category": "ropa",
    "brand": "D'Avanti Exclusive",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2759,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 177,
    "image": "Productos 2/vestido de noche verde.jpg",
    "description": "Vestido de noche verde con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "MOD-PRODUCTOS2-0321",
    "inStock": true
  },
  {
    "id": "prod-productos3-322",
    "department": "Juguetes · Montables",
    "name": "Carro Buggy Electrico Montable De Bateria para Niños rojo",
    "slug": "carro-buggy-electrico-montable-de-bateria-para-ninos-rojo-322",
    "category": "juguetes",
    "brand": "Kids World",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 6119,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 184,
    "image": "Productos 3/Carro Buggy Electrico Montable De Bateria para Niños rojo.jpg",
    "description": "Carro Buggy Electrico Montable De Bateria para Niños rojo con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "JUG-PRODUCTOS3-0322",
    "inStock": true
  },
  {
    "id": "prod-productos3-323",
    "department": "Juguetes · Montables",
    "name": "Carro Buggy Electrico Montable De Bateria para Niños verde",
    "slug": "carro-buggy-electrico-montable-de-bateria-para-ninos-verde-323",
    "category": "juguetes",
    "brand": "Kids World",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 6119,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 191,
    "image": "Productos 3/Carro Buggy Electrico Montable De Bateria para Niños verde.jpg",
    "description": "Carro Buggy Electrico Montable De Bateria para Niños verde con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "JUG-PRODUCTOS3-0323",
    "inStock": true
  },
  {
    "id": "prod-productos3-324",
    "department": "Juguetes · Montables",
    "name": "Montable Electrico para Niños Carro Deportivo Bluetooth Luz Led Control Remoto 12v",
    "slug": "montable-electrico-para-ninos-carro-deportivo-bluetooth-luz-led-control-remoto-12v-324",
    "category": "juguetes",
    "brand": "Kids World",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 6119,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 198,
    "image": "Productos 3/Montable Electrico para Niños Carro Deportivo Bluetooth Luz Led Control Remoto 12v.jpg",
    "description": "Montable Electrico para Niños Carro Deportivo Bluetooth Luz Led Control Remoto 12v con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "JUG-PRODUCTOS3-0324",
    "inStock": true
  },
  {
    "id": "prod-productos3-325",
    "department": "Juguetes · Montables",
    "name": "Rompecabezas 4D Puzzles Pokémon Charmander 241 Piezas 1",
    "slug": "rompecabezas-4d-puzzles-pokemon-charmander-241-piezas-1-325",
    "category": "juguetes",
    "brand": "Kids World",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 619,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 205,
    "image": "Productos 3/Rompecabezas 4D Puzzles Pokémon Charmander 241 Piezas 1.jpg",
    "description": "Rompecabezas 4D Puzzles Pokémon Charmander 241 Piezas 1 con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "JUG-PRODUCTOS3-0325",
    "inStock": true
  },
  {
    "id": "prod-productos3-326",
    "department": "Juguetes · Montables",
    "name": "Set LEGO City Persecución en Moto de Policía",
    "slug": "set-lego-city-persecucion-en-moto-de-policia-326",
    "category": "juguetes",
    "brand": "LEGO",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1119,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 212,
    "image": "Productos 3/Set LEGO City Persecución en Moto de Policía.jpg",
    "description": "Set LEGO City Persecución en Moto de Policía con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "JUG-PRODUCTOS3-0326",
    "inStock": true
  },
  {
    "id": "prod-productos3-327",
    "department": "Deportes · Fitness",
    "name": "Termo Stanley Quencher H2.0 FlowState 1.18L rojo",
    "slug": "termo-stanley-quencher-h2-0-flowstate-1-18l-rojo-327",
    "category": "deportes",
    "brand": "Stanley",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1439,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 219,
    "image": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L  rojo.jpg",
    "description": "Termo Stanley Quencher H2.0 FlowState 1.18L rojo con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "DEP-PRODUCTOS3-0327",
    "inStock": true
  },
  {
    "id": "prod-productos3-328",
    "department": "Deportes · Fitness",
    "name": "Termo Stanley Quencher H2.0 FlowState 1.18L gris",
    "slug": "termo-stanley-quencher-h2-0-flowstate-1-18l-gris-328",
    "category": "deportes",
    "brand": "Stanley",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1439,
    "originalPrice": null,
    "rating": 4.6,
    "reviewsCount": 226,
    "image": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L gris.jpg",
    "description": "Termo Stanley Quencher H2.0 FlowState 1.18L gris con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "DEP-PRODUCTOS3-0328",
    "inStock": true
  },
  {
    "id": "prod-productos3-329",
    "department": "Deportes · Fitness",
    "name": "Termo Stanley Quencher H2.0 FlowState 1.18L negro",
    "slug": "termo-stanley-quencher-h2-0-flowstate-1-18l-negro-329",
    "category": "deportes",
    "brand": "Stanley",
    "badge": "Envío Gratis",
    "badgeType": "shipping",
    "price": 1439,
    "originalPrice": null,
    "rating": 4.7,
    "reviewsCount": 233,
    "image": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L negro.jpg",
    "description": "Termo Stanley Quencher H2.0 FlowState 1.18L negro con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "DEP-PRODUCTOS3-0329",
    "inStock": true
  },
  {
    "id": "prod-productos3-330",
    "department": "Deportes · Fitness",
    "name": "Termo Stanley Quencher H2.0 FlowState 1.18L rosa",
    "slug": "termo-stanley-quencher-h2-0-flowstate-1-18l-rosa-330",
    "category": "deportes",
    "brand": "Stanley",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1439,
    "originalPrice": null,
    "rating": 4.8,
    "reviewsCount": 240,
    "image": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L rosa.jpg",
    "description": "Termo Stanley Quencher H2.0 FlowState 1.18L rosa con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "DEP-PRODUCTOS3-0330",
    "inStock": true
  },
  {
    "id": "prod-productos3-331",
    "department": "Juguetes · Montables",
    "name": "Vehículo Montable a Batería Xootz Can Am ATV 12V con Licencia Gris Electrico",
    "slug": "vehiculo-montable-a-bateria-xootz-can-am-atv-12v-con-licencia-gris-electrico-331",
    "category": "juguetes",
    "brand": "Can-Am Licensed",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 6119,
    "originalPrice": null,
    "rating": 4.9,
    "reviewsCount": 247,
    "image": "Productos 3/Vehículo Montable a Batería Xootz Can Am ATV 12V con Licencia Gris Electrico.jpg",
    "description": "Vehículo Montable a Batería Xootz Can Am ATV 12V con Licencia Gris Electrico con acabados de primera calidad y diseño departamental oficial de Callejón Mágico.",
    "sku": "JUG-PRODUCTOS3-0331",
    "inStock": true
  },

  // =========================================================================
  // PRODUCTOS DE LA CARPETA PRODUCTOS 4 (TOTAL: 137 ARTÍCULOS)
  // =========================================================================
  {
    "id": "prod-productos4-001",
    "department": "Moda · Ropa",
    "name": "Tenis Adidas Samba OG Mujer Azul Nube",
    "slug": "tenis-adidas-samba-og-mujer-azul-nube-p4-001",
    "category": "ropa",
    "brand": "Adidas Originals",
    "subcategory": "calzado",
    "gender": "mujer",
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 2199,
    "originalPrice": 2699,
    "rating": 4.7,
    "reviewsCount": 62,
    "image": "Productos 4/Adidas Samba OG. mujer azul.jpg",
    "description": "Silueta clásica de fútbol sala reinventada para el estilo urbano femenino con exterior de piel suave y puntera en T de ante azul. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-001",
    "inStock": true,
    "features": [
      "Piel prémium de grano fino",
      "Puntera reforzada en ante",
      "Suela de goma color caramelo",
      "Diseño icónico con 3 franjas"
    ],
    "sizes": [
      "23 MX",
      "24 MX",
      "25 MX",
      "26 MX",
      "27 MX",
      "28 MX"
    ]
  },
  {
    "id": "prod-productos4-002",
    "department": "Moda · Ropa",
    "name": "Tenis Adidas Samba OG Mujer Negro Carbón",
    "slug": "tenis-adidas-samba-og-mujer-negro-carbon-p4-002",
    "category": "ropa",
    "brand": "Adidas Originals",
    "subcategory": "calzado",
    "gender": "mujer",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2199,
    "originalPrice": 2699,
    "rating": 4.8,
    "reviewsCount": 79,
    "image": "Productos 4/Adidas Samba OG. mujer negro.jpg",
    "description": "El clásico atemporal de Adidas en negro azabache con contrastes blancos y suela de caucho retro de alta adherencia. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-002",
    "inStock": true,
    "features": [
      "Piel sintética y ante prémium",
      "Plantilla acolchada OrthoLite",
      "Suela de caucho adherente",
      "Ajuste regular con cordones"
    ],
    "sizes": [
      "23 MX",
      "24 MX",
      "25 MX",
      "26 MX",
      "27 MX",
      "28 MX"
    ]
  },
  {
    "id": "prod-productos4-003",
    "department": "Moda · Ropa",
    "name": "Tenis Adidas Samba OG Mujer Blanco Clásico",
    "slug": "tenis-adidas-samba-og-mujer-blanco-clasico-p4-003",
    "category": "ropa",
    "brand": "Adidas Originals",
    "subcategory": "calzado",
    "gender": "mujer",
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 2199,
    "originalPrice": 2699,
    "rating": 4.9,
    "reviewsCount": 96,
    "image": "Productos 4/Adidas Samba OG. mujer.jpg",
    "description": "El modelo Samba OG original en blanco puro con detalles negros y puntera de gamuza gris, ideal para cualquier look casual. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-003",
    "inStock": true,
    "features": [
      "Colorway blanco y negro clásico",
      "Materiales de máxima durabilidad",
      "Suela de goma vulcanizada",
      "Estilo retro terrace atemporal"
    ],
    "sizes": [
      "23 MX",
      "24 MX",
      "25 MX",
      "26 MX",
      "27 MX",
      "28 MX"
    ],
    "colors": [
      "Blanco Clásico",
      "Azul Nube",
      "Negro Carbón"
    ],
    "colorHex": [
      "#FFFFFF",
      "#5B84B1",
      "#111111"
    ],
    "colorImages": {
      "Blanco Clásico": "Productos 4/Adidas Samba OG. mujer.jpg",
      "Azul Nube": "Productos 4/Adidas Samba OG. mujer azul.jpg",
      "Negro Carbón": "Productos 4/Adidas Samba OG. mujer negro.jpg"
    }
  },
  {
    "id": "prod-productos4-004",
    "department": "Tecnología · Audio",
    "name": "Audífonos Inalámbricos Huawei FreeBuds 5i Blanco Cerámica",
    "slug": "audifonos-inalambricos-huawei-freebuds-5i-blanco-ceramica-p4-004",
    "category": "electronica",
    "brand": "Huawei",
    "subcategory": "audio",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 1499,
    "originalPrice": 1999,
    "rating": 5,
    "reviewsCount": 113,
    "image": "Productos 4/Audífonos Huawei FreeBuds 5i blanco.jpg",
    "description": "Sonido de alta resolución con certificación Hi-Res Wireless, cancelación activa de ruido híbrida de hasta 42 dB y 28 horas de batería. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-004",
    "inStock": true,
    "features": [
      "Certificación Hi-Res Audio Wireless",
      "Cancelación activa de ruido (ANC) 42 dB",
      "Hasta 28 horas con estuche de carga",
      "Carga rápida y conexión dual"
    ]
  },
  {
    "id": "prod-productos4-005",
    "department": "Tecnología · Audio",
    "name": "Audífonos Inalámbricos Huawei FreeBuds 5i Negro Obsidiana",
    "slug": "audifonos-inalambricos-huawei-freebuds-5i-negro-obsidiana-p4-005",
    "category": "electronica",
    "brand": "Huawei",
    "subcategory": "audio",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1499,
    "originalPrice": 1999,
    "rating": 4.6,
    "reviewsCount": 130,
    "image": "Productos 4/Audífonos Huawei FreeBuds 5i negro.jpg",
    "description": "Elegante acabado negro mate con textura de guijarro esmerilado, transductores dinámicos de 10 mm y resistencia al agua IP54. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-005",
    "inStock": true,
    "features": [
      "Acabado mate antimanchas",
      "Transductores dinámicos de 10 mm",
      "Resistencia al sudor y salpicaduras IP54",
      "Baja latencia para gaming"
    ]
  },
  {
    "id": "prod-productos4-006",
    "department": "Tecnología · Audio",
    "name": "Audífonos Inalámbricos Huawei FreeBuds 5i Azul Glaciar",
    "slug": "audifonos-inalambricos-huawei-freebuds-5i-azul-glaciar-p4-006",
    "category": "electronica",
    "brand": "Huawei",
    "subcategory": "audio",
    "gender": null,
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1499,
    "originalPrice": 1999,
    "rating": 4.7,
    "reviewsCount": 147,
    "image": "Productos 4/Audífonos Huawei FreeBuds 5i.jpg",
    "description": "Tono azul glaciar con estuche compacto ovalado, ecualizador multiefecto y cancelación de ruido ambiental en llamadas con IA. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-006",
    "inStock": true,
    "features": [
      "Color Azul Glaciar exclusivo",
      "Llamadas nítidas con IA de dos micrófonos",
      "Modo atención para escuchar el entorno",
      "Control táctil intuitivo deslizable"
    ],
    "colors": [
      "Azul Glaciar",
      "Blanco Cerámica",
      "Negro Obsidiana"
    ],
    "colorHex": [
      "#A3C1DA",
      "#FFFFFF",
      "#1A1A1A"
    ],
    "colorImages": {
      "Azul Glaciar": "Productos 4/Audífonos Huawei FreeBuds 5i.jpg",
      "Blanco Cerámica": "Productos 4/Audífonos Huawei FreeBuds 5i blanco.jpg",
      "Negro Obsidiana": "Productos 4/Audífonos Huawei FreeBuds 5i negro.jpg"
    }
  },
  {
    "id": "prod-productos4-007",
    "department": "Tecnología · Audio",
    "name": "Audífonos Inalámbricos Xiaomi Redmi Buds 5 ANC 46dB",
    "slug": "audifonos-inalambricos-xiaomi-redmi-buds-5-anc-46db-p4-007",
    "category": "electronica",
    "brand": "Xiaomi Redmi",
    "subcategory": "audio",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 649,
    "originalPrice": 899,
    "rating": 4.8,
    "reviewsCount": 164,
    "image": "Productos 4/Audífonos Xiaomi Redmi Buds 5..jpg",
    "description": "Cancelación de ruido de banda ancha de hasta 46 dB con 3 modos de transparencia, diafragma de titanio de 12.4 mm y 40h de autonomía. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-007",
    "inStock": true,
    "features": [
      "Cancelación activa de ruido de 46 dB",
      "Diafragma recubierto de titanio",
      "Hasta 40 horas con estuche de carga",
      "Conexión inteligente con dos dispositivos"
    ]
  },
  {
    "id": "prod-productos4-008",
    "department": "Tecnología · Audio",
    "name": "Audífonos Inalámbricos Xiaomi Redmi Buds 6 Celeste Glaciar",
    "slug": "audifonos-inalambricos-xiaomi-redmi-buds-6-celeste-glaciar-p4-008",
    "category": "electronica",
    "brand": "Xiaomi Redmi",
    "subcategory": "audio",
    "gender": null,
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 749,
    "originalPrice": 999,
    "rating": 4.9,
    "reviewsCount": 181,
    "image": "Productos 4/Audífonos Xiaomi Redmi Buds 6 celeste.jpg",
    "description": "Nueva generación Redmi Buds 6 con driver dinámico dual de 12.4 mm, Bluetooth 5.4 de ultra baja latencia y acabado celeste pastel. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-008",
    "inStock": true,
    "features": [
      "Bluetooth 5.4 de última generación",
      "Driver dual con graves profundos",
      "36 horas de reproducción continua",
      "Diseño ultraligero y ergonómico"
    ],
    "colors": [
      "Celeste Glaciar",
      "Negro Profundo",
      "Rosa Pastel"
    ],
    "colorHex": [
      "#93C5FD",
      "#111827",
      "#F472B6"
    ],
    "colorImages": {
      "Celeste Glaciar": "Productos 4/Audífonos Xiaomi Redmi Buds 6 celeste.jpg",
      "Negro Profundo": "Productos 4/Audífonos Xiaomi Redmi Buds 6 negro.jpg",
      "Rosa Pastel": "Productos 4/Audífonos Xiaomi Redmi Buds 6 rosa.jpg"
    }
  },
  {
    "id": "prod-productos4-009",
    "department": "Tecnología · Audio",
    "name": "Audífonos Inalámbricos Xiaomi Redmi Buds 6 Negro Profundo",
    "slug": "audifonos-inalambricos-xiaomi-redmi-buds-6-negro-profundo-p4-009",
    "category": "electronica",
    "brand": "Xiaomi Redmi",
    "subcategory": "audio",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 749,
    "originalPrice": 999,
    "rating": 5,
    "reviewsCount": 198,
    "image": "Productos 4/Audífonos Xiaomi Redmi Buds 6 negro.jpg",
    "description": "Versión negro carbón con audio espacial 360°, cancelación de ruido de viento para llamadas y resistencia IP54 contra polvo y sudor. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-009",
    "inStock": true,
    "features": [
      "Color Negro Profundo mate",
      "Efecto de audio espacial 360°",
      "Reducción de ruido ambiental en llamadas",
      "Protección contra salpicaduras IP54"
    ]
  },
  {
    "id": "prod-productos4-010",
    "department": "Tecnología · Audio",
    "name": "Audífonos Inalámbricos Xiaomi Redmi Buds 6 Rosa Pastel",
    "slug": "audifonos-inalambricos-xiaomi-redmi-buds-6-rosa-pastel-p4-010",
    "category": "electronica",
    "brand": "Xiaomi Redmi",
    "subcategory": "audio",
    "gender": null,
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 749,
    "originalPrice": 999,
    "rating": 4.6,
    "reviewsCount": 215,
    "image": "Productos 4/Audífonos Xiaomi Redmi Buds 6 rosa.jpg",
    "description": "Diseño chic en rosa pastel con ajuste intrauditivo suave de silicona médica, controles táctiles y carga rápida USB-C. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-010",
    "inStock": true,
    "features": [
      "Tono Rosa Pastel moderno",
      "Almohadillas de silicona hipoalergénica",
      "10 min de carga rinden 2 horas de música",
      "Compatibles con Xiaomi Earbuds App"
    ]
  },
  {
    "id": "prod-productos4-011",
    "department": "Moda · Ropa",
    "name": "Blusa Casual de Dama Escote V con Mangas Acampanadas",
    "slug": "blusa-casual-de-dama-escote-v-con-mangas-acampanadas-p4-011",
    "category": "ropa",
    "brand": "Studio F",
    "subcategory": "blusas",
    "gender": "mujer",
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 799,
    "originalPrice": 999,
    "rating": 4.7,
    "reviewsCount": 232,
    "image": "Productos 4/blusa de dama.jpg",
    "description": "Blusa femenina confeccionada en tejido suave con escote en V que estiliza el cuello y mangas tres cuartos acampanadas con detalle calado. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-011",
    "inStock": true,
    "features": [
      "Tejido fresco y liviano ideal para media estación",
      "Escote en V con favorecedora caída en busto",
      "Mangas 3/4 con detalles de encaje sutil",
      "Fácil combinación con pantalones formales o mezclilla"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-012",
    "department": "Moda · Ropa",
    "name": "Blusa Elegante de Satín Cuello Camisero Verde Esmeralda",
    "slug": "blusa-elegante-de-satin-cuello-camisero-verde-esmeralda-p4-012",
    "category": "ropa",
    "brand": "Studio F",
    "subcategory": "blusas",
    "gender": "mujer",
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 899,
    "originalPrice": 1199,
    "rating": 4.8,
    "reviewsCount": 249,
    "image": "Productos 4/blusa elegante verde.jpg",
    "description": "Deslumbrante tono verde esmeralda con acabado satinado de alto brillo, botones forrados al tono y puños anchos de estilo sastre. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-012",
    "inStock": true,
    "features": [
      "Tono Verde Esmeralda luminoso y sofisticado",
      "Tela satinada de tacto de seda",
      "Botones forrados en la misma tela",
      "Corte recto con abertura lateral discreta"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-013",
    "department": "Moda · Ropa",
    "name": "Blusa de Fiesta Sofisticada Satinada con Botones Dorados",
    "slug": "blusa-de-fiesta-sofisticada-satinada-con-botones-dorados-p4-013",
    "category": "ropa",
    "brand": "Studio F",
    "subcategory": "blusas",
    "gender": "mujer",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 899,
    "originalPrice": 1199,
    "rating": 4.9,
    "reviewsCount": 46,
    "image": "Productos 4/blusa elegante.jpg",
    "description": "Blusa de gala con cuello de solapa suave, botones dorados grabados y mangas fluidas, ideal para cenas, cócteles y eventos nocturnos. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-013",
    "inStock": true,
    "features": [
      "Botones metálicos dorados grabados",
      "Textura sedosa de excelente caída",
      "Costuras invisibles de alta costura",
      "Lavable a mano sin pérdida de brillo"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-014",
    "department": "Moda · Ropa",
    "name": "Blusa Zara Satin Effect Manga Larga Azul Noche",
    "slug": "blusa-zara-satin-effect-manga-larga-azul-noche-p4-014",
    "category": "ropa",
    "brand": "Zara",
    "subcategory": "blusas",
    "gender": "mujer",
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 899,
    "originalPrice": 1199,
    "rating": 5,
    "reviewsCount": 63,
    "image": "Productos 4/Blusa Zara Satin Effect. azul.jpg",
    "description": "Blusa fluida con tejido satinado de brillo sutil en azul noche, cuello solapa cruzado y puños con botones joya. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-014",
    "inStock": true,
    "features": [
      "Tejido satinado de alta densidad",
      "Caída fluida elegante",
      "Puños con botones metálicos",
      "Fácil planchado y cuidado"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-015",
    "department": "Moda · Ropa",
    "name": "Blusa Zara Satin Effect Cuello Fluido Champagne Perla",
    "slug": "blusa-zara-satin-effect-cuello-fluido-champagne-perla-p4-015",
    "category": "ropa",
    "brand": "Zara",
    "subcategory": "blusas",
    "gender": "mujer",
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 899,
    "originalPrice": 1199,
    "rating": 4.6,
    "reviewsCount": 80,
    "image": "Productos 4/Blusa Zara Satin Effect..jpg",
    "description": "Corte sofisticado en tono champagne perla con escote en V suave y mangas ligeramente abullonadas, perfecta para oficina o eventos. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-015",
    "inStock": true,
    "features": [
      "Color champagne perla luminoso",
      "Acabado satinado suave al tacto",
      "Corte favorecedor entallado",
      "Composición 100% poliéster reciclado"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Champagne Perla",
      "Azul Noche"
    ],
    "colorHex": [
      "#F5E6D3",
      "#1E3A8A"
    ],
    "colorImages": {
      "Champagne Perla": "Productos 4/Blusa Zara Satin Effect..jpg",
      "Azul Noche": "Productos 4/Blusa Zara Satin Effect. azul.jpg"
    }
  },
  {
    "id": "prod-productos4-016",
    "department": "Moda · Ropa",
    "name": "Chamarra de Mezclilla Levi's Trucker Jacket Denim Claro",
    "slug": "chamarra-de-mezclilla-levi-s-trucker-jacket-denim-claro-p4-016",
    "category": "ropa",
    "brand": "Levi's",
    "subcategory": "chamarras",
    "gender": "hombre",
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 2399,
    "originalPrice": 2999,
    "rating": 4.7,
    "reviewsCount": 97,
    "image": "Productos 4/Chamarra Levi's Trucker Jacket 1.jpg",
    "description": "La legendaria chamarra de mezclilla Levi's Trucker Jacket en lavado claro veraniego con botones metálicos de vástago originales. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-016",
    "inStock": true,
    "features": [
      "100% algodón rígido de mezclilla",
      "Bolsillos con solapa y botón en pecho",
      "Pestañas de ajuste en cintura",
      "Silueta recta Trucker clásica"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-017",
    "department": "Moda · Ropa",
    "name": "Chamarra de Mezclilla Levi's Trucker Jacket Stonewash Azul Medio",
    "slug": "chamarra-de-mezclilla-levi-s-trucker-jacket-stonewash-azul-medio-p4-017",
    "category": "ropa",
    "brand": "Levi's",
    "subcategory": "chamarras",
    "gender": "hombre",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2399,
    "originalPrice": 2999,
    "rating": 4.8,
    "reviewsCount": 114,
    "image": "Productos 4/Chamarra Levi's Trucker Jacket. 2.jpg",
    "description": "Tratamiento de lavado a la piedra que brinda un aspecto vintage auténtico, resistente al paso del tiempo y con corte tradicional. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-017",
    "inStock": true,
    "features": [
      "Lavado Stonewash vintage",
      "Costuras reforzadas en contraste oro",
      "Bolsillos laterales ribeteados",
      "Etiqueta roja Levi's Red Tab original"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-018",
    "department": "Moda · Ropa",
    "name": "Chamarra de Mezclilla Levi's Trucker Jacket Denim Oscuro Clásico",
    "slug": "chamarra-de-mezclilla-levi-s-trucker-jacket-denim-oscuro-clasico-p4-018",
    "category": "ropa",
    "brand": "Levi's",
    "subcategory": "chamarras",
    "gender": "hombre",
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 2399,
    "originalPrice": 2999,
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "Productos 4/Chamarra Levi's Trucker Jacket..jpg",
    "description": "El tono índigo profundo insignia de Levi's que adquiere carácter único con el uso diario, una prenda esencial de guardarropa. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-018",
    "inStock": true,
    "features": [
      "Tono índigo oscuro prémium",
      "Denim grueso de 14.5 oz",
      "Cierre frontal de botones metálicos",
      "Garantía de confección Levi's"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Denim Oscuro Clásico",
      "Denim Claro",
      "Stonewash Azul Medio"
    ],
    "colorHex": [
      "#1B365D",
      "#6B90B5",
      "#3E5C8A"
    ],
    "colorImages": {
      "Denim Oscuro Clásico": "Productos 4/Chamarra Levi's Trucker Jacket..jpg",
      "Denim Claro": "Productos 4/Chamarra Levi's Trucker Jacket 1.jpg",
      "Stonewash Azul Medio": "Productos 4/Chamarra Levi's Trucker Jacket. 2.jpg"
    }
  },
  {
    "id": "prod-productos4-019",
    "department": "Moda · Joyería & Relojes",
    "name": "Collar Swarovski Matrix Baño de Rodio con Cristales Talla Redonda",
    "slug": "collar-swarovski-matrix-bano-de-rodio-con-cristales-talla-redonda-p4-019",
    "category": "ropa",
    "brand": "Swarovski",
    "subcategory": "joyeria",
    "gender": "mujer",
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 3499,
    "originalPrice": 4299,
    "rating": 5,
    "reviewsCount": 148,
    "image": "Productos 4/Collar Swarovski Matrix. mujer.jpg",
    "description": "Una deslumbrante fila continua de cristales transparentes Swarovski talla brillante montados sobre engaste con baño de rodio pulido. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-019",
    "inStock": true,
    "features": [
      "Cristales Swarovski originales certificados",
      "Baño de rodio hipoalergénico",
      "Cierre de seguridad con broche oculto",
      "Longitud ajustable 38 - 42 cm"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-020",
    "department": "Videojuegos · Consolas",
    "name": "Consola Clásica Microsoft Xbox Original Edición Colección",
    "slug": "consola-clasica-microsoft-xbox-original-edicion-coleccion-p4-020",
    "category": "videojuegos",
    "brand": "Microsoft Xbox",
    "subcategory": "consolas",
    "gender": null,
    "badge": "Coleccionista",
    "badgeType": "quality",
    "price": 3499,
    "originalPrice": 4499,
    "rating": 4.6,
    "reviewsCount": 165,
    "image": "Productos 4/Consola Microsoft Xbox Classic.jpg",
    "description": "La icónica consola que inició la era Xbox con disco duro interno, procesador Intel Pentium III y mando Duke / Controller S. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-020",
    "inStock": true,
    "features": [
      "Edición de colección restaurada",
      "Unidad lectora DVD funcional",
      "Puerto de red Ethernet para red LAN",
      "Compatible con catálogo clásico Halo, Fable y más"
    ]
  },
  {
    "id": "prod-productos4-021",
    "department": "Videojuegos · Consolas",
    "name": "Consola Retro Nintendo Entertainment System (NES) con Mandos Originales",
    "slug": "consola-retro-nintendo-entertainment-system-nes-con-mandos-originales-p4-021",
    "category": "videojuegos",
    "brand": "Nintendo",
    "subcategory": "consolas",
    "gender": null,
    "badge": "Retro",
    "badgeType": "quality",
    "price": 2899,
    "originalPrice": 3699,
    "rating": 4.7,
    "reviewsCount": 182,
    "image": "Productos 4/Consola Nintendo Entertainment System (NES) 1.jpg",
    "description": "La legendaria NES de 8 bits con sistema frontal Zero Insertion Force, dos controles rectangulares originales y cableado completo. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-021",
    "inStock": true,
    "features": [
      "Sistema NES 8-bit auténtico",
      "Incluye 2 controles Nintendo originales",
      "Salida AV compuesta para pantallas modernas",
      "Compatible con cartuchos NES originales"
    ]
  },
  {
    "id": "prod-productos4-022",
    "department": "Videojuegos · Consolas",
    "name": "Consola Retro Nintendo NES Edición Clásica",
    "slug": "consola-retro-nintendo-nes-edicion-clasica-p4-022",
    "category": "videojuegos",
    "brand": "Nintendo",
    "subcategory": "consolas",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2799,
    "originalPrice": 3499,
    "rating": 4.8,
    "reviewsCount": 199,
    "image": "Productos 4/Consola Nintendo Entertainment System (NES).jpg",
    "description": "La consola de sobremesa más influyente de la historia en estado estético impecable, lista para revivir Super Mario Bros, Zelda y Metroid. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-022",
    "inStock": true,
    "features": [
      "Chasis original gris y negro impecable",
      "Control ergonómico D-Pad",
      "Fuente de poder estabilizada incluida",
      "Probada y garantizada al 100%"
    ]
  },
  {
    "id": "prod-productos4-023",
    "department": "Videojuegos · Consolas",
    "name": "Consola Portátil Retro Nintendo Game Boy Clásica Gris",
    "slug": "consola-portatil-retro-nintendo-game-boy-clasica-gris-p4-023",
    "category": "videojuegos",
    "brand": "Nintendo",
    "subcategory": "consolas",
    "gender": null,
    "badge": "Coleccionista",
    "badgeType": "quality",
    "price": 2499,
    "originalPrice": 3199,
    "rating": 4.9,
    "reviewsCount": 216,
    "image": "Productos 4/Consola Nintendo Game Boy.jpg",
    "description": "El mítico Game Boy DMG-01 de 1989 diseñado por Gunpei Yokoi con pantalla LCD monocromática reflectante y altavoz estéreo integrado. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-023",
    "inStock": true,
    "features": [
      "Modelo original DMG-01 gris",
      "Pantalla LCD reflectante nítida",
      "Sonido chip estéreo por auriculares",
      "Autonomía de más de 15 horas con 4 pilas AA"
    ]
  },
  {
    "id": "prod-productos4-024",
    "department": "Videojuegos & Consolas",
    "name": "Videojuego Cyberpunk 2077 Edición Estándar",
    "slug": "videojuego-cyberpunk-2077-edicion-estandar-p4-024",
    "category": "videojuegos",
    "brand": "CD PROJEKT RED",
    "subcategory": "juegos",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 899,
    "originalPrice": 1299,
    "rating": 5,
    "reviewsCount": 233,
    "image": "Productos 4/Cyberpunk 2077.jpg",
    "description": "Aventura de rol y acción en el mundo abierto futurista de Night City donde tomas el control del mercenario mejorado cibernéticamente V. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-024",
    "inStock": true,
    "features": [
      "Gráficos de nueva generación con Ray Tracing",
      "Libertad absoluta de personalización de armas y ciberimplantes",
      "Historia ramificada con múltiples finales",
      "Banda sonora original inmersiva"
    ]
  },
  {
    "id": "prod-productos4-025",
    "department": "Hogar · Salas & Muebles",
    "name": "Sofá Confort Darcy Asientos Mullidos Respaldos Ergonómicos",
    "slug": "sofa-confort-darcy-asientos-mullidos-respaldos-ergonomicos-p4-025",
    "category": "hogar",
    "brand": "Ashley Furniture",
    "subcategory": "salas",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 12999,
    "originalPrice": 15999,
    "rating": 4.6,
    "reviewsCount": 250,
    "image": "Productos 4/darcy sofa.jpg",
    "description": "La legendaria línea Darcy de Ashley Furniture que combina líneas contemporáneas con un acolchado generoso para largas tardes de descanso. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-025",
    "inStock": true,
    "features": [
      "Cojines rellenos de fibra siliconada de alta densidad",
      "Tapizado en tela suave de microfibra de fácil limpieza",
      "Estructura sólida de madera tratada contra plagas",
      "Apoyo lumbar envolvente"
    ]
  },
  {
    "id": "prod-productos4-026",
    "department": "Hogar · Cocina & Electrodomésticos",
    "name": "Estufa de Piso Acros AF5000D 30 Pulgadas 6 Quemadores Negra",
    "slug": "estufa-de-piso-acros-af5000d-30-pulgadas-6-quemadores-negra-p4-026",
    "category": "hogar",
    "brand": "Acros",
    "subcategory": "estufas",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 6499,
    "originalPrice": 7999,
    "rating": 4.7,
    "reviewsCount": 47,
    "image": "Productos 4/Estufa Acros AF5000D negra.jpg",
    "description": "Estufa de piso a gas de 30\" con acabado esmaltado negro de fácil limpieza, 6 quemadores de aluminio estampado y parrillas de alambrón grueso. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-026",
    "inStock": true,
    "features": [
      "Cubierta sellada de porcelana negra",
      "6 quemadores (4 estándar + 2 súper)",
      "Horno de gran capacidad con ventana panorámica",
      "Encendido electrónico de botón"
    ]
  },
  {
    "id": "prod-productos4-027",
    "department": "Hogar · Cocina & Electrodomésticos",
    "name": "Estufa de Piso Acros AF5000D 30 Pulgadas Encendido Electrónico Acero",
    "slug": "estufa-de-piso-acros-af5000d-30-pulgadas-encendido-electronico-acero-p4-027",
    "category": "hogar",
    "brand": "Acros",
    "subcategory": "estufas",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 6299,
    "originalPrice": 7799,
    "rating": 4.8,
    "reviewsCount": 64,
    "image": "Productos 4/Estufa Acros AF5000D.jpg",
    "description": "Estufa versátil con respaldo porcelanizado, perillas ergonómicas con puntero cromado y sistema de cocción uniforme en horno. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-027",
    "inStock": true,
    "features": [
      "Quemadores de alta eficiencia de calor",
      "Parrillas dobles de gran estabilidad",
      "Termostato en horno para repostería precisa",
      "Fácil conversión a gas LP o natural"
    ]
  },
  {
    "id": "prod-productos4-028",
    "department": "Hogar · Cocina & Electrodomésticos",
    "name": "Estufa Mabe EM7641BFIS0 30 Pulgadas Horno Perfect Cook Negro",
    "slug": "estufa-mabe-em7641bfis0-30-pulgadas-horno-perfect-cook-negro-p4-028",
    "category": "hogar",
    "brand": "Mabe",
    "subcategory": "estufas",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 9899,
    "originalPrice": 11999,
    "rating": 4.9,
    "reviewsCount": 81,
    "image": "Productos 4/Estufa Mabe EM7641BFIS0 negro.jpg",
    "description": "Estufa premium con tecnología Ultimate que cocina hasta un 33% más rápido, recubrimiento Easy Clean Pro y quemador Fast Cook. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-028",
    "inStock": true,
    "features": [
      "Parrillas continuas de hierro fundido",
      "Tecnología Perfect Cook en horno",
      "Recubrimiento interior Easy Clean Pro",
      "Quemador jumbo de potencia extra"
    ]
  },
  {
    "id": "prod-productos4-029",
    "department": "Hogar · Cocina & Electrodomésticos",
    "name": "Estufa Mabe EM7641BFIS0 30 Pulgadas Parrillas Fundición Inoxidable",
    "slug": "estufa-mabe-em7641bfis0-30-pulgadas-parrillas-fundicion-inoxidable-p4-029",
    "category": "hogar",
    "brand": "Mabe",
    "subcategory": "estufas",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 9699,
    "originalPrice": 11699,
    "rating": 5,
    "reviewsCount": 98,
    "image": "Productos 4/Estufa Mabe EM7641BFIS0..jpg",
    "description": "Acabado en acero inoxidable cepillado con capelo de cristal templado serigrafiado, luz en horno y encendido automático en perillas. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-029",
    "inStock": true,
    "features": [
      "Cubierta de acero inoxidable antihuellas",
      "Capelo protector de cristal templado",
      "Horno con parrilla autodeslizable",
      "Válvula de seguridad en horno"
    ]
  },
  {
    "id": "prod-productos4-030",
    "department": "Hogar · Cocina & Electrodomésticos",
    "name": "Estufa Mabe EMC5040CAIS0 20 Pulgadas 4 Quemadores Plateada",
    "slug": "estufa-mabe-emc5040cais0-20-pulgadas-4-quemadores-plateada-p4-030",
    "category": "hogar",
    "brand": "Mabe",
    "subcategory": "estufas",
    "gender": null,
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 7499,
    "originalPrice": 8999,
    "rating": 4.6,
    "reviewsCount": 115,
    "image": "Productos 4/Estufa Mabe EMC5040CAIS0 plateada.jpg",
    "description": "Diseño compacto de 20 pulgadas ideal para departamentos y espacios modernos con acabado plata titanio y quemadores de alta potencia. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-030",
    "inStock": true,
    "features": [
      "Ancho compacto de 50 cm",
      "4 quemadores de flama envolvente",
      "Cubierta porcelanizada totalmente sellada",
      "Horno térmico con vidrio reflex"
    ]
  },
  {
    "id": "prod-productos4-031",
    "department": "Hogar · Cocina & Electrodomésticos",
    "name": "Estufa Mabe EMC5040CAIS0 20 Pulgadas Cubierta Porcelanizada",
    "slug": "estufa-mabe-emc5040cais0-20-pulgadas-cubierta-porcelanizada-p4-031",
    "category": "hogar",
    "brand": "Mabe",
    "subcategory": "estufas",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 7299,
    "originalPrice": 8799,
    "rating": 4.7,
    "reviewsCount": 132,
    "image": "Productos 4/Estufa Mabe EMC5040CAIS0..jpg",
    "description": "Rendimiento eficiente en espacio reducido con parrillas de alambrón reforzado y manija tipo toallero de una sola pieza. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-031",
    "inStock": true,
    "features": [
      "Perillas de seguridad Push & Turn",
      "Sistema de calor envolvente en horno",
      "Bajo consumo de gas LP",
      "Parrilla niquelada de horno incluida"
    ]
  },
  {
    "id": "prod-productos4-032",
    "department": "Hogar · Cocina & Electrodomésticos",
    "name": "Estufa de Gas Whirlpool WFR5000D 30 Pulgadas Acero Inoxidable",
    "slug": "estufa-de-gas-whirlpool-wfr5000d-30-pulgadas-acero-inoxidable-p4-032",
    "category": "hogar",
    "brand": "Whirlpool",
    "subcategory": "estufas",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 8999,
    "originalPrice": 10999,
    "rating": 4.8,
    "reviewsCount": 149,
    "image": "Productos 4/Estufa Whirlpool WFR5000D 1.jpg",
    "description": "Estufa de 30\" con cubierta de acero inoxidable, 6 quemadores de aluminio con tapas esmaltadas mate y encendido electrónico de 2 pasos. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-032",
    "inStock": true,
    "features": [
      "Quemador Xpert Flamer de alta potencia",
      "Parrillas de hierro fundido de alta resistencia",
      "Horno con acabado EverClean antiadherente",
      "Luz incandescente en el horno"
    ]
  },
  {
    "id": "prod-productos4-033",
    "department": "Hogar · Cocina & Electrodomésticos",
    "name": "Estufa de Gas Whirlpool WFR5000D con Comal Teflón y Quemador Xpert",
    "slug": "estufa-de-gas-whirlpool-wfr5000d-con-comal-teflon-y-quemador-xpert-p4-033",
    "category": "hogar",
    "brand": "Whirlpool",
    "subcategory": "estufas",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 9199,
    "originalPrice": 11299,
    "rating": 4.9,
    "reviewsCount": 166,
    "image": "Productos 4/Estufa Whirlpool WFR5000D 2.jpg",
    "description": "Incluye comal de teflón antiadherente removible sobre las parrillas centrales, ventana panorámica de cristal ahumado y jaladera de aluminio. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-033",
    "inStock": true,
    "features": [
      "Comal antiadherente desmontable incluido",
      "Horno de 5.1 pies cúbicos de capacidad",
      "Quemadores sellados a prueba de derrames",
      "Puerta del horno desmontable para limpieza profunda"
    ]
  },
  {
    "id": "prod-productos4-034",
    "department": "Hogar · Cocina & Electrodomésticos",
    "name": "Estufa de Piso Whirlpool WFR5000D 6 Quemadores Cristal Templado",
    "slug": "estufa-de-piso-whirlpool-wfr5000d-6-quemadores-cristal-templado-p4-034",
    "category": "hogar",
    "brand": "Whirlpool",
    "subcategory": "estufas",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 8899,
    "originalPrice": 10799,
    "rating": 5,
    "reviewsCount": 183,
    "image": "Productos 4/Estufa Whirlpool WFR5000D.jpg",
    "description": "Modelo insignia de Whirlpool con respaldo protector de cristal templado, perillas ergonómicas push-to-turn y cocción uniforme garantizada. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-034",
    "inStock": true,
    "features": [
      "Respaldo decorativo de cristal templado",
      "6 quemadores multifunción (estándar, súper y simmer)",
      "Encendido electrónico integrado",
      "Garantía oficial Whirlpool de 1 año"
    ]
  },
  {
    "id": "prod-productos4-035",
    "department": "Videojuegos & Consolas",
    "name": "Videojuego EA Sports FIFA 23 Edición Oficial",
    "slug": "videojuego-ea-sports-fifa-23-edicion-oficial-p4-035",
    "category": "videojuegos",
    "brand": "EA Sports",
    "subcategory": "juegos",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 799,
    "originalPrice": 1199,
    "rating": 4.6,
    "reviewsCount": 200,
    "image": "Productos 4/FIFA 23.jpg",
    "description": "La experiencia futbolística definitiva con tecnología HyperMotion2, torneos de la Copa Mundial masculina y femenina y licencias oficiales. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-035",
    "inStock": true,
    "features": [
      "Tecnología HyperMotion2 con más de 6,000 animaciones realistas",
      "Modo Ultimate Team con química renovada",
      "Clubes de fútbol femenino por primera vez",
      "Modo Carrera como jugador o mánager"
    ]
  },
  {
    "id": "prod-productos4-036",
    "department": "Moda · Ropa",
    "name": "Pantalón Jeans Wrangler Texas Regular Fit Hombre Azul Auténtico",
    "slug": "pantalon-jeans-wrangler-texas-regular-fit-hombre-azul-autentico-p4-036",
    "category": "ropa",
    "brand": "Wrangler",
    "subcategory": "pantalones",
    "gender": "hombre",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1199,
    "originalPrice": 1499,
    "rating": 4.7,
    "reviewsCount": 217,
    "image": "Productos 4/Jeans Wrangler Texas hombre.jpg",
    "description": "Corte clásico Texas Straight de tiro medio y pierna recta tradicional confeccionado en mezclilla de algodón elástico resistente. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-036",
    "inStock": true,
    "features": [
      "Corte Regular Straight atemporal",
      "Mezclilla con 1% de elastano para flexibilidad",
      "Costuras icónicas en \"W\" en bolsillos traseros",
      "Remaches de cobre reforzados"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-037",
    "department": "Hogar · Smart Home & Limpieza",
    "name": "Lavadora LG Smart Inverter WT21WT6HKA Carga Superior 21kg Gris Grafito",
    "slug": "lavadora-lg-smart-inverter-wt21wt6hka-carga-superior-21kg-gris-grafito-p4-037",
    "category": "hogar",
    "brand": "LG Inverter",
    "subcategory": "lavado",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 13999,
    "originalPrice": 16999,
    "rating": 4.8,
    "reviewsCount": 234,
    "image": "Productos 4/Lavadora LG WT21WT6HKA..jpg",
    "description": "Capacidad masiva de 21 kg con motor Smart Inverter con 10 años de garantía, sistema de lavado TurboDrum y cascadas de agua multidireccionales. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-037",
    "inStock": true,
    "features": [
      "Motor Smart Inverter silencioso y ahorrador",
      "Capacidad para edredones King Size (21 kg)",
      "Tecnología TurboDrum que evita el desgaste de prendas",
      "Tapa de cristal templado con cierre suave Soft-Closing"
    ]
  },
  {
    "id": "prod-productos4-038",
    "department": "Hogar · Smart Home & Limpieza",
    "name": "Lavadora Whirlpool 7MWTW1904 Carga Superior 19kg Xpert System",
    "slug": "lavadora-whirlpool-7mwtw1904-carga-superior-19kg-xpert-system-p4-038",
    "category": "hogar",
    "brand": "Whirlpool",
    "subcategory": "lavado",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 10499,
    "originalPrice": 12999,
    "rating": 4.9,
    "reviewsCount": 251,
    "image": "Productos 4/Lavadora Whirlpool 7MWTW1904..jpg",
    "description": "Sistema de lavado Xpert System con ciclos expertos para ropa blanca y de color, agitador Double Action y canasta de 100% acero inoxidable. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-038",
    "inStock": true,
    "features": [
      "Capacidad de 19 kg para cargas pesadas",
      "Ciclos automáticos Xpert System",
      "Tina de acero inoxidable porcelanizado",
      "Dispensadores automáticos de detergente y suavizante"
    ]
  },
  {
    "id": "prod-productos4-039",
    "department": "Hogar · Smart Home & Limpieza",
    "name": "Lavadora Automática Whirlpool Carga Superior Agitador Doble Acción",
    "slug": "lavadora-automatica-whirlpool-carga-superior-agitador-doble-accion-p4-039",
    "category": "hogar",
    "brand": "Whirlpool",
    "subcategory": "lavado",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 9999,
    "originalPrice": 12499,
    "rating": 5,
    "reviewsCount": 48,
    "image": "Productos 4/Lavadora Whirlpool.jpg",
    "description": "Lavadora de alta eficiencia con panel intuitivo de perillas, sensor automático de nivel de agua AutoLevel y centrifugado ultraveloz. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-039",
    "inStock": true,
    "features": [
      "Sensor automático de llenado AutoLevel",
      "Agitador Double Action con 8 movimientos",
      "12 ciclos de lavado preprogramados",
      "Filtro atrapapelusas de fácil limpieza"
    ]
  },
  {
    "id": "prod-productos4-040",
    "department": "Hogar · Salas & Muebles",
    "name": "Librero Estantería IKEA BILLY 6 Niveles Blanco Puro",
    "slug": "librero-estanteria-ikea-billy-6-niveles-blanco-puro-p4-040",
    "category": "hogar",
    "brand": "IKEA",
    "subcategory": "muebles",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2899,
    "originalPrice": 3499,
    "rating": 4.6,
    "reviewsCount": 65,
    "image": "Productos 4/Librero IKEA BILLY..jpg",
    "description": "El mueble para libros más vendido del mundo con baldas regulables en altura para adaptarse a tus necesidades de lectura y decoración. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-040",
    "inStock": true,
    "features": [
      "Diseño icónico escandinavo IKEA BILLY",
      "5 baldas ajustables y 1 fija central",
      "Fácil anclaje de seguridad a la pared",
      "Capacidad de carga de hasta 30 kg por estante"
    ]
  },
  {
    "id": "prod-productos4-041",
    "department": "Hogar · Salas & Muebles",
    "name": "Librero Ejecutivo Contemporáneo 5 Repisas Negro Mate",
    "slug": "librero-ejecutivo-contemporaneo-5-repisas-negro-mate-p4-041",
    "category": "hogar",
    "brand": "Maison & Confort",
    "subcategory": "muebles",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2699,
    "originalPrice": 3299,
    "rating": 4.7,
    "reviewsCount": 82,
    "image": "Productos 4/librero negro.jpg",
    "description": "Estantería vertical de 5 niveles en acabado negro mate antirrayaduras para oficinas, despachos o salas que requieren orden y sofisticación. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-041",
    "inStock": true,
    "features": [
      "5 niveles de almacenaje con repisas reforzadas",
      "Acabado en melamina negra mate texturizada",
      "Pies niveladores ajustables para pisos irregulares",
      "Soporta hasta 25 kg por repisa"
    ]
  },
  {
    "id": "prod-productos4-042",
    "department": "Hogar · Salas & Muebles",
    "name": "Librero Minimalista Madera Natural 5 Niveles para Sala",
    "slug": "librero-minimalista-madera-natural-5-niveles-para-sala-p4-042",
    "category": "hogar",
    "brand": "Maison & Confort",
    "subcategory": "muebles",
    "gender": null,
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2799,
    "originalPrice": 3399,
    "rating": 4.8,
    "reviewsCount": 99,
    "image": "Productos 4/librero.jpg",
    "description": "Estructura abierta de estilo nórdico con vetas de roble claro que aporta calidez visual y amplitud a salas de estar y recámaras. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-042",
    "inStock": true,
    "features": [
      "Estilo nórdico escandinavo en roble claro",
      "Diseño abierto que no satura el espacio visual",
      "Fácil ensamblaje en menos de 20 minutos",
      "Estructura estable con travesaños cruzados posteriores"
    ]
  },
  {
    "id": "prod-productos4-043",
    "department": "Hogar · Cocina Eléctrica",
    "name": "Licuadora Oster Clásica BLSTKAG Motor Reversible Vaso Vidrio Gris",
    "slug": "licuadora-oster-clasica-blstkag-motor-reversible-vaso-vidrio-gris-p4-043",
    "category": "hogar",
    "brand": "Oster Clásica",
    "subcategory": "electrodomesticos",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 1499,
    "originalPrice": 1899,
    "rating": 4.9,
    "reviewsCount": 116,
    "image": "Productos 4/Licuadora Oster clásica BLSTKAG gris.jpg",
    "description": "El diseño legendario de Oster con interruptor de palanca metálica de 2 velocidades, motor de 700 watts y vaso de vidrio Boroclass de 1.5L. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-043",
    "inStock": true,
    "features": [
      "Interruptor de palanca metálica clásica",
      "Vaso de vidrio resistente a choques térmicos",
      "Cuchilla de acero inoxidable de 4 aspas",
      "Acople metálico All-Metal Drive"
    ]
  },
  {
    "id": "prod-productos4-044",
    "department": "Hogar · Cocina Eléctrica",
    "name": "Licuadora Oster Clásica BLSTKAG All-Metal Drive 700W Negra",
    "slug": "licuadora-oster-clasica-blstkag-all-metal-drive-700w-negra-p4-044",
    "category": "hogar",
    "brand": "Oster Clásica",
    "subcategory": "electrodomesticos",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1499,
    "originalPrice": 1899,
    "rating": 5,
    "reviewsCount": 133,
    "image": "Productos 4/Licuadora Oster clásica BLSTKAG negra.jpg",
    "description": "Elegante base cromada en negro mate que combina la tradición y durabilidad de Oster con un toque contemporáneo para tu cocina. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-044",
    "inStock": true,
    "features": [
      "Acabado negro mate moderno",
      "Potencia de 700W pico para picar hielo",
      "Tapa con orificio dosificador y copa medidora",
      "Partes desmontables aptas para lavavajillas"
    ]
  },
  {
    "id": "prod-productos4-045",
    "department": "Hogar · Cocina Eléctrica",
    "name": "Licuadora Oster Clásica BLSTKAG Acabado Metálico Rojo Rubí",
    "slug": "licuadora-oster-clasica-blstkag-acabado-metalico-rojo-rubi-p4-045",
    "category": "hogar",
    "brand": "Oster Clásica",
    "subcategory": "electrodomesticos",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 1499,
    "originalPrice": 1899,
    "rating": 4.6,
    "reviewsCount": 150,
    "image": "Productos 4/Licuadora Oster clásica BLSTKAG roja.jpg",
    "description": "Pintura automotriz roja de alta resistencia al calor y rayones, perfecta para resaltar el diseño de tu isla o meseta de cocina. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-045",
    "inStock": true,
    "features": [
      "Pintura automotriz Rojo Rubí brillante",
      "Vaso de vidrio refractario Boroclass",
      "Cuchilla Crush Pro 4 aspas",
      "10 veces más duradera que acoples plásticos"
    ]
  },
  {
    "id": "prod-productos4-046",
    "department": "Hogar · Cocina Eléctrica",
    "name": "Licuadora Oster Clásica BLSTKAG Vaso Boroclass Resistente",
    "slug": "licuadora-oster-clasica-blstkag-vaso-boroclass-resistente-p4-046",
    "category": "hogar",
    "brand": "Oster Clásica",
    "subcategory": "electrodomesticos",
    "gender": null,
    "badge": "Oferta",
    "badgeType": "sale",
    "price": 1399,
    "originalPrice": 1799,
    "rating": 4.7,
    "reviewsCount": 167,
    "image": "Productos 4/Licuadora Oster clásica BLSTKAG.jpg",
    "description": "La licuadora tradicional que dura toda la vida, probada para triturar desde hielo hasta ingredientes hirviendo sin estrellarse. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-046",
    "inStock": true,
    "features": [
      "Resiste cambios térmicos de hasta 90°C",
      "Palanca de encendido de larga vida útil",
      "Fácil de armar, desarmar y lavar",
      "Refacciones universales Oster compatibles"
    ],
    "colors": [
      "Cromado Acero",
      "Gris Grafito",
      "Negro Mate",
      "Rojo Rubí"
    ],
    "colorHex": [
      "#C0C0C0",
      "#64748B",
      "#0F172A",
      "#BE123C"
    ],
    "colorImages": {
      "Cromado Acero": "Productos 4/Licuadora Oster clásica BLSTKAG.jpg",
      "Gris Grafito": "Productos 4/Licuadora Oster clásica BLSTKAG gris.jpg",
      "Negro Mate": "Productos 4/Licuadora Oster clásica BLSTKAG negra.jpg",
      "Rojo Rubí": "Productos 4/Licuadora Oster clásica BLSTKAG roja.jpg"
    }
  },
  {
    "id": "prod-productos4-047",
    "department": "Hogar · Cocina Eléctrica",
    "name": "Licuadora de Alta Potencia Oster Xpert Series BLST3A 2HP Plata",
    "slug": "licuadora-de-alta-potencia-oster-xpert-series-blst3a-2hp-plata-p4-047",
    "category": "hogar",
    "brand": "Oster Xpert",
    "subcategory": "electrodomesticos",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 2899,
    "originalPrice": 3599,
    "rating": 4.8,
    "reviewsCount": 184,
    "image": "Productos 4/Licuadora Oster Xpert Series BLST3A. plata.jpg",
    "description": "Motor de 2 caballos de fuerza de fuerza bruta con cuchilla de acero quirúrgico 50% más grande y programas inteligentes automáticos. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-047",
    "inStock": true,
    "features": [
      "Motor de 2HP de alto torque",
      "Cuchilla de 6 aspas para moler granos y hielo seco",
      "Vaso Tritan de 2 litros libre de BPA",
      "3 programas automáticos inteligentes"
    ]
  },
  {
    "id": "prod-productos4-048",
    "department": "Hogar · Cocina Eléctrica",
    "name": "Licuadora de Alto Rendimiento Oster Xpert Series BLST3A 1500W Roja",
    "slug": "licuadora-de-alto-rendimiento-oster-xpert-series-blst3a-1500w-roja-p4-048",
    "category": "hogar",
    "brand": "Oster Xpert",
    "subcategory": "electrodomesticos",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 2899,
    "originalPrice": 3599,
    "rating": 4.9,
    "reviewsCount": 201,
    "image": "Productos 4/Licuadora Oster Xpert Series BLST3A. roja.jpg",
    "description": "Acabado en rojo metálico brillante con tecnología de motor reversible que rota en ambos sentidos para mezclas ultrasuaves sin grumos. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-048",
    "inStock": true,
    "features": [
      "Tecnología de giro bidireccional reversible",
      "Acabado metálico Rojo Borgoña",
      "Panel con botones táctiles de pulso",
      "Empujador ergonómico para batidos espesos"
    ]
  },
  {
    "id": "prod-productos4-049",
    "department": "Hogar · Cocina Eléctrica",
    "name": "Licuadora Profesional Oster Xpert Series BLST3A Trituradora de Hielo",
    "slug": "licuadora-profesional-oster-xpert-series-blst3a-trituradora-de-hielo-p4-049",
    "category": "hogar",
    "brand": "Oster Xpert",
    "subcategory": "electrodomesticos",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2799,
    "originalPrice": 3499,
    "rating": 5,
    "reviewsCount": 218,
    "image": "Productos 4/Licuadora Oster Xpert Series BLST3A..jpg",
    "description": "Prepara frappés, smoothies nutritivos, salsas y masas con consistencia gourmet en cuestión de segundos gracias a su motor comercial. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-049",
    "inStock": true,
    "features": [
      "Sistema de acople All-Metal Drive metálico",
      "Vaso de Tritan resistente a caídas y olores",
      "Cuchillas trituradoras S-Blade",
      "Base de servicio pesado antiderrapante"
    ],
    "colors": [
      "Plata Acero",
      "Rojo Borgoña"
    ],
    "colorHex": [
      "#CBD5E1",
      "#991B1B"
    ],
    "colorImages": {
      "Plata Acero": "Productos 4/Licuadora Oster Xpert Series BLST3A. plata.jpg",
      "Rojo Borgoña": "Productos 4/Licuadora Oster Xpert Series BLST3A. roja.jpg"
    }
  },
  {
    "id": "prod-productos4-050",
    "department": "Hogar · Cocina Eléctrica",
    "name": "Licuadora T-fal Infinyforce 10 Velocidades 550W Powelix Negra",
    "slug": "licuadora-t-fal-infinyforce-10-velocidades-550w-powelix-negra-p4-050",
    "category": "hogar",
    "brand": "T-fal",
    "subcategory": "electrodomesticos",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 1199,
    "originalPrice": 1499,
    "rating": 4.6,
    "reviewsCount": 235,
    "image": "Productos 4/Licuadora T-fal Infinyforce. negra.jpg",
    "description": "Cuchillas con tecnología Powelix de 6 aspas de acero inoxidable que proporcionan hasta 3 veces más eficiencia de corte en menor tiempo. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-050",
    "inStock": true,
    "features": [
      "Cuchillas con tecnología Powelix de 6 filos",
      "10 velocidades + función de pulso continuo",
      "Vaso de vidrio de 1.75 litros resistente",
      "Bloqueo de seguridad Safe-Lock en base"
    ],
    "colors": [
      "Negro Obsidiana",
      "Rojo Carmín"
    ],
    "colorHex": [
      "#18181B",
      "#DC2626"
    ],
    "colorImages": {
      "Negro Obsidiana": "Productos 4/Licuadora T-fal Infinyforce. negra.jpg",
      "Rojo Carmín": "Productos 4/Licuadora T-fal Infinyforce. roja.jpg"
    }
  },
  {
    "id": "prod-productos4-051",
    "department": "Hogar · Cocina Eléctrica",
    "name": "Licuadora T-fal Infinyforce 12 Velocidades Cuchillas Powelix Roja",
    "slug": "licuadora-t-fal-infinyforce-12-velocidades-cuchillas-powelix-roja-p4-051",
    "category": "hogar",
    "brand": "T-fal",
    "subcategory": "electrodomesticos",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1249,
    "originalPrice": 1549,
    "rating": 4.7,
    "reviewsCount": 252,
    "image": "Productos 4/Licuadora T-fal Infinyforce. roja.jpg",
    "description": "Potente motor de 550 watts en carcasas roja vibrante con sistema de enfriamiento de motor integrado para sesiones de licuado intensas. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-051",
    "inStock": true,
    "features": [
      "12 velocidades con teclado ergonómico",
      "Sistema de enfriamiento de aire para motor",
      "Cuchillas desmontables para limpieza fácil",
      "Pies de goma con ventosa antideslizante"
    ]
  },
  {
    "id": "prod-productos4-052",
    "department": "Videojuegos & Consolas",
    "name": "Videojuego Mario Kart 8 Deluxe para Nintendo Switch",
    "slug": "videojuego-mario-kart-8-deluxe-para-nintendo-switch-p4-052",
    "category": "videojuegos",
    "brand": "Nintendo",
    "subcategory": "juegos",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1399,
    "originalPrice": 1699,
    "rating": 4.8,
    "reviewsCount": 49,
    "image": "Productos 4/Mario Kart 8 Deluxe.jpg",
    "description": "El juego definitivo de carreras para jugar en familia y online con 48 pistas originales, modo batalla renovado y resolución 1080p a 60 fps. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-052",
    "inStock": true,
    "features": [
      "Multijugador local de hasta 4 jugadores y 12 online",
      "Incluye todos los personajes y circuitos descargables de Wii U",
      "Función de volante inteligente para principiantes",
      "Compatible con figuras amiibo para trajes Mii"
    ]
  },
  {
    "id": "prod-productos4-053",
    "department": "Videojuegos & Consolas",
    "name": "Videojuego Mortal Kombat 1 Edición Nueva Era",
    "slug": "videojuego-mortal-kombat-1-edicion-nueva-era-p4-053",
    "category": "videojuegos",
    "brand": "Warner Bros Games",
    "subcategory": "juegos",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 1199,
    "originalPrice": 1599,
    "rating": 4.9,
    "reviewsCount": 66,
    "image": "Productos 4/Mortal Kombat 1.jpg",
    "description": "El renacimiento del universo Mortal Kombat creado por el Dios del Fuego Liu Kang con el nuevo sistema de luchadores Kameo de apoyo. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-053",
    "inStock": true,
    "features": [
      "Nuevo sistema de luchadores Kameo aliados",
      "Modo historia cinematográfico inmersivo",
      "Gráficos de combate hiperrealistas y Fatalities brutales",
      "Modo Invasiones con desafíos RPG semanales"
    ]
  },
  {
    "id": "prod-productos4-054",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Smartphone Motorola Edge 50 Ultra 512GB Peach Fuzz Pantone",
    "slug": "smartphone-motorola-edge-50-ultra-512gb-peach-fuzz-pantone-p4-054",
    "category": "electronica",
    "brand": "Motorola",
    "subcategory": "smartphones",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 18999,
    "originalPrice": 22999,
    "rating": 5,
    "reviewsCount": 83,
    "image": "Productos 4/Motorola Edge 50 Ultra. 1.jpg",
    "description": "Edición en cuero vegano con el color del año Pantone Peach Fuzz, procesador Snapdragon 8s Gen 3, cámara periscópica 64MP y carga 125W. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-054",
    "inStock": true,
    "features": [
      "Carga rápida TurboPower de 125W (batería llena en 18 min)",
      "Pantalla curva pOLED 6.7\" Super HD 144Hz",
      "Cámara telefoto periscópica de 64 MP con zoom óptico 3x",
      "Certificación militar contra agua y polvo IP68"
    ]
  },
  {
    "id": "prod-productos4-055",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Smartphone Motorola Edge 50 Ultra 512GB Pantalla pOLED 144Hz Negro",
    "slug": "smartphone-motorola-edge-50-ultra-512gb-pantalla-poled-144hz-negro-p4-055",
    "category": "electronica",
    "brand": "Motorola",
    "subcategory": "smartphones",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 18999,
    "originalPrice": 22999,
    "rating": 4.6,
    "reviewsCount": 100,
    "image": "Productos 4/Motorola Edge 50 Ultra. negro.jpg",
    "description": "Potencia insignia en negro carbón con audio sintonizado por Bose, conectividad Wi-Fi 7 y sistema Moto AI para fotografía computacional. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-055",
    "inStock": true,
    "features": [
      "Acabado negro mate con tacto sedoso antimanchas",
      "Audio estéreo certificado por Dolby Atmos y Bose",
      "16 GB de memoria RAM LPDDR5X + 512 GB UFS 4.0",
      "Carga inalámbrica rápida de 50W"
    ]
  },
  {
    "id": "prod-productos4-056",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Smartphone Motorola Edge 50 Ultra 512GB Nordic Wood Madera",
    "slug": "smartphone-motorola-edge-50-ultra-512gb-nordic-wood-madera-p4-056",
    "category": "electronica",
    "brand": "Motorola",
    "subcategory": "smartphones",
    "gender": null,
    "badge": "Exclusivo",
    "badgeType": "new",
    "price": 19499,
    "originalPrice": 23499,
    "rating": 4.7,
    "reviewsCount": 117,
    "image": "Productos 4/Motorola Edge 50 Ultra..jpg",
    "description": "La primera cubierta trasera del mundo fabricada en madera auténtica sostenible con fragancia sutil integrada y especificaciones de gama ultra. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-056",
    "inStock": true,
    "features": [
      "Cubierta trasera de madera natural Nordic Wood real",
      "Sensor principal de 50 MP con OIS y autoenfoque láser",
      "Pantalla calibrada por Pantone Validated Color",
      "Resistencia a caídas con cristal Gorilla Glass Victus"
    ],
    "colors": [
      "Nordic Wood Madera",
      "Peach Fuzz Pantone",
      "Negro Carbón"
    ],
    "colorHex": [
      "#C19A6B",
      "#FFBE98",
      "#18181B"
    ],
    "colorImages": {
      "Nordic Wood Madera": "Productos 4/Motorola Edge 50 Ultra..jpg",
      "Peach Fuzz Pantone": "Productos 4/Motorola Edge 50 Ultra. 1.jpg",
      "Negro Carbón": "Productos 4/Motorola Edge 50 Ultra. negro.jpg"
    }
  },
  {
    "id": "prod-productos4-057",
    "department": "Videojuegos & Consolas",
    "name": "Videojuego Need for Speed Heat Carreras Callejeras",
    "slug": "videojuego-need-for-speed-heat-carreras-callejeras-p4-057",
    "category": "videojuegos",
    "brand": "Electronic Arts",
    "subcategory": "juegos",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 799,
    "originalPrice": 1099,
    "rating": 4.8,
    "reviewsCount": 134,
    "image": "Productos 4/Need for Speed Heat.jpg",
    "description": "Compite de día en el Speedhunters Showdown para ganar dinero y arriésgalo todo de noche en carreras callejeras ilegales en Palm City. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-057",
    "inStock": true,
    "features": [
      "Doble ciclo día / noche con mecánicas de juego contrastantes",
      "Tuning visual y de rendimiento mecánico extremo",
      "Persecuciones policiales de alto riesgo táctico",
      "Más de 120 superdeportivos licenciados de las mejores marcas"
    ]
  },
  {
    "id": "prod-productos4-058",
    "department": "Moda · Ropa",
    "name": "Sneakers Nike Air Force 1 '07 LV8 Hombre Gris Lobo y Blanco",
    "slug": "sneakers-nike-air-force-1-07-lv8-hombre-gris-lobo-y-blanco-p4-058",
    "category": "ropa",
    "brand": "Nike",
    "subcategory": "calzado",
    "gender": "hombre",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2499,
    "originalPrice": 2999,
    "rating": 4.9,
    "reviewsCount": 151,
    "image": "Productos 4/Nike Air Force 1 hombre gris.jpg",
    "description": "El mito del básquetbol y la cultura hip-hop en elegante combinación de ante gris y piel blanca con amortiguación Nike Air encapsulada. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-058",
    "inStock": true,
    "features": [
      "Amortiguación Nike Air en entresuela",
      "Piel genuina combinada con paneles de ante",
      "Zona del tobillo acolchada de perfil bajo",
      "Suela de goma con puntos de giro clásicos"
    ],
    "sizes": [
      "23 MX",
      "24 MX",
      "25 MX",
      "26 MX",
      "27 MX",
      "28 MX"
    ]
  },
  {
    "id": "prod-productos4-059",
    "department": "Moda · Ropa",
    "name": "Sneakers Nike Air Force 1 Low Mujer Rosa Pastel Soft Pink",
    "slug": "sneakers-nike-air-force-1-low-mujer-rosa-pastel-soft-pink-p4-059",
    "category": "ropa",
    "brand": "Nike",
    "subcategory": "calzado",
    "gender": "mujer",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 2399,
    "originalPrice": 2899,
    "rating": 5,
    "reviewsCount": 168,
    "image": "Productos 4/Nike Air Force 1 rosa mujer.jpg",
    "description": "Estilo fresco y femenino en tono Soft Pink pastel con el legendario deubré metálico en los cordones y comodidad legendaria para todo el día. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-059",
    "inStock": true,
    "features": [
      "Colorway Rosa Pastel de edición especial",
      "Mediasuela de espuma con cámara de aire oculta",
      "Perforaciones en la puntera para transpirabilidad",
      "Confección cosida de suela para años de uso"
    ],
    "sizes": [
      "23 MX",
      "24 MX",
      "25 MX",
      "26 MX",
      "27 MX",
      "28 MX"
    ]
  },
  {
    "id": "prod-productos4-060",
    "department": "Deportes · Calzado de Running",
    "name": "Tenis para Correr Infantiles Nike Revolution 7 Kids Gris Humo",
    "slug": "tenis-para-correr-infantiles-nike-revolution-7-kids-gris-humo-p4-060",
    "category": "deportes",
    "brand": "Nike Kids",
    "subcategory": "tenis",
    "gender": "kids",
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 1199,
    "originalPrice": 1499,
    "rating": 4.6,
    "reviewsCount": 185,
    "image": "Productos 4/Nike Revolution 7 Kids gris.jpg",
    "description": "Calzado ligero y transpirable para niños con espuma ultrasuave en la entresuela, suela de tracción duradera y correa con velcro para fácil postura. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "DEP-P4-060",
    "inStock": true,
    "features": [
      "Cierre con correa de velcro y cordones elásticos",
      "Malla transpirable en empeine",
      "Entresuela de espuma con amortiguación suave",
      "Puntera reforzada contra raspaduras infantiles"
    ]
  },
  {
    "id": "prod-productos4-061",
    "department": "Deportes · Calzado de Running",
    "name": "Tenis Deportivos Infantiles Nike Revolution 7 Kids Rosa y Blanco",
    "slug": "tenis-deportivos-infantiles-nike-revolution-7-kids-rosa-y-blanco-p4-061",
    "category": "deportes",
    "brand": "Nike Kids",
    "subcategory": "tenis",
    "gender": "kids",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1199,
    "originalPrice": 1499,
    "rating": 4.7,
    "reviewsCount": 202,
    "image": "Productos 4/Nike Revolution 7 Kids rosa con blanco.jpg",
    "description": "Diseño deportivo enérgico para niñas con colores vivos, cuello acolchado alrededor del tobillo y suela de goma que no marca los pisos. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "DEP-P4-061",
    "inStock": true,
    "features": [
      "Suela de goma non-marking para interiores y patio escolar",
      "Puntos táctiles en el talón para fácil calzado",
      "Diseño ergonómico para el desarrollo del pie infantil",
      "Construcción con materiales reciclados"
    ]
  },
  {
    "id": "prod-productos4-062",
    "department": "Belleza · Maquillaje de Alta Gama",
    "name": "Paleta de Sombras Urban Decay Naked 12 Tonos Neutros Larga Duración",
    "slug": "paleta-de-sombras-urban-decay-naked-12-tonos-neutros-larga-duracion-p4-062",
    "category": "belleza",
    "brand": "Urban Decay",
    "subcategory": "ojos",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 1250,
    "originalPrice": 1550,
    "rating": 4.8,
    "reviewsCount": 219,
    "image": "Productos 4/Paleta Urban Decay Naked..jpg",
    "description": "La paleta que cambió la historia del maquillaje con 12 sombras neutras en tonos bronce, ámbar y marrones con la famosa fórmula aterciopelada Pigment Infusion. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "BEL-P4-062",
    "inStock": true,
    "features": [
      "12 sombras aterciopeladas altamente pigmentadas",
      "Acabados mate, satinados, brillantes y metálicos",
      "Incluye brocha profesional doble punta",
      "Estuche metálico con espejo panorámico"
    ]
  },
  {
    "id": "prod-productos4-063",
    "department": "Belleza · Maquillaje de Alta Gama",
    "name": "Paleta de Sombras Urban Decay Naked Reloaded Acabados Mate y Satín",
    "slug": "paleta-de-sombras-urban-decay-naked-reloaded-acabados-mate-y-satin-p4-063",
    "category": "belleza",
    "brand": "Urban Decay",
    "subcategory": "ojos",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1250,
    "originalPrice": 1550,
    "rating": 4.9,
    "reviewsCount": 236,
    "image": "Productos 4/Paleta Urban naked.jpg",
    "description": "Versión renovada Naked Reloaded con moldes más anchos en los tonos universales de transición para favorecer cualquier tono de piel y edad. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "BEL-P4-063",
    "inStock": true,
    "features": [
      "Tonos de transición ampliados para mayor rendimiento",
      "Fórmula sin pliegues de hasta 16 horas de duración",
      "Textura ultra sedosa de fácil difuminado",
      "Libre de crueldad animal (Cruelty-Free)"
    ]
  },
  {
    "id": "prod-productos4-064",
    "department": "Tecnología · Pantallas",
    "name": "Smart TV Hisense 32A4NR 32 Pulgadas HD VIDAA Smart OS",
    "slug": "smart-tv-hisense-32a4nr-32-pulgadas-hd-vidaa-smart-os-p4-064",
    "category": "electronica",
    "brand": "Hisense",
    "subcategory": "pantallas",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 3499,
    "originalPrice": 4299,
    "rating": 5,
    "reviewsCount": 253,
    "image": "Productos 4/Pantalla Hisense 32A4NR de 32 pulgadas..jpg",
    "description": "Smart TV compacta ideal para recámaras y cocinas con sistema operativo VIDAA ultra rápido, audio DTS Virtual:X y control por voz. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-064",
    "inStock": true,
    "features": [
      "Resolución HD con reducción de ruido digital",
      "Sistema operativo VIDAA con Netflix, YouTube, Prime y Disney+",
      "Sonido envolvente DTS Virtual:X",
      "Conectividad Wi-Fi, 2 puertos HDMI y USB"
    ]
  },
  {
    "id": "prod-productos4-065",
    "department": "Tecnología · Pantallas",
    "name": "Smart TV Hisense 50A4NR 50 Pulgadas 4K Ultra HD Dolby Vision",
    "slug": "smart-tv-hisense-50a4nr-50-pulgadas-4k-ultra-hd-dolby-vision-p4-065",
    "category": "electronica",
    "brand": "Hisense",
    "subcategory": "pantallas",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 6899,
    "originalPrice": 8499,
    "rating": 4.6,
    "reviewsCount": 50,
    "image": "Productos 4/Pantalla Hisense 32A4NR de 50 pulgadas.jpg",
    "description": "Pantalla 4K UHD con soporte HDR10 y Dolby Vision para negros profundos y colores vibrantes, escalador inteligente AI 4K Upscaler y modo juego. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-065",
    "inStock": true,
    "features": [
      "Resolución 4K UHD (3840 x 2160 píxeles)",
      "Compatibilidad con Dolby Vision y HDR10",
      "Modo Juego con baja latencia automática (ALLM)",
      "Diseño sin bordes en 3 lados Frameless"
    ]
  },
  {
    "id": "prod-productos4-066",
    "department": "Tecnología · Pantallas",
    "name": "Smart TV JVC 32 Pulgadas Frameless HD Android TV",
    "slug": "smart-tv-jvc-32-pulgadas-frameless-hd-android-tv-p4-066",
    "category": "electronica",
    "brand": "JVC",
    "subcategory": "pantallas",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2999,
    "originalPrice": 3799,
    "rating": 4.7,
    "reviewsCount": 67,
    "image": "Productos 4/Pantalla JVC de 32 pulgadas..jpg",
    "description": "Panel de biseles ultradelgados con Android TV oficial, Chromecast integrado para proyectar desde el celular y Google Assistant en el control. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-066",
    "inStock": true,
    "features": [
      "Sistema operativo Android TV con Google Play Store",
      "Chromecast built-in integrado",
      "Control remoto con comando de voz Google Assistant",
      "Audio estéreo Dolby Digital Plus"
    ]
  },
  {
    "id": "prod-productos4-067",
    "department": "Tecnología · Pantallas",
    "name": "Smart TV JVC SI24R 24 Pulgadas HD Roku TV Integrado",
    "slug": "smart-tv-jvc-si24r-24-pulgadas-hd-roku-tv-integrado-p4-067",
    "category": "electronica",
    "brand": "JVC",
    "subcategory": "pantallas",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 2299,
    "originalPrice": 2899,
    "rating": 4.8,
    "reviewsCount": 84,
    "image": "Productos 4/Pantalla JVC SI24R de 24 pulgadas..jpg",
    "description": "La Smart TV más práctica para espacios pequeños con plataforma Roku TV integrada, miles de canales de streaming gratuitos y control remoto simple. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-067",
    "inStock": true,
    "features": [
      "Plataforma Roku TV con actualizaciones automáticas",
      "Compatible con Apple AirPlay 2 y Google Home",
      "App móvil de Roku para escuchar con audífonos",
      "Entrada HDMI ARC y salida de audio óptica"
    ]
  },
  {
    "id": "prod-productos4-068",
    "department": "Tecnología · Pantallas",
    "name": "Pantalla LG 43LR6700 43 Pulgadas 4K UHD Procesador α5 AI webOS",
    "slug": "pantalla-lg-43lr6700-43-pulgadas-4k-uhd-procesador-5-ai-webos-p4-068",
    "category": "electronica",
    "brand": "LG Electronics",
    "subcategory": "pantallas",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 6299,
    "originalPrice": 7999,
    "rating": 4.9,
    "reviewsCount": 101,
    "image": "Productos 4/Pantalla LG 43LR6700 de 43 pulgadas.jpg",
    "description": "Procesador inteligente α5 Gen6 AI que optimiza imagen y sonido en tiempo real, sistema webOS 23 con perfiles personalizados y Filmmaker Mode. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-068",
    "inStock": true,
    "features": [
      "Resolución 4K Real UHD con procesador α5 Gen6",
      "HDR10 Pro con brillo dinámico escena por escena",
      "Sistema webOS 23 con alertas deportivas",
      "Compatible con Magic Remote y LG ThinQ"
    ]
  },
  {
    "id": "prod-productos4-069",
    "department": "Tecnología · Pantallas",
    "name": "Pantalla LG 55UA7500 55 Pulgadas 4K UHD Inteligencia Artificial ThinQ AI",
    "slug": "pantalla-lg-55ua7500-55-pulgadas-4k-uhd-inteligencia-artificial-thinq-ai-p4-069",
    "category": "electronica",
    "brand": "LG Electronics",
    "subcategory": "pantallas",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 9499,
    "originalPrice": 11999,
    "rating": 5,
    "reviewsCount": 118,
    "image": "Productos 4/Pantalla LG 55UA7500 de 55 pulgadas..jpg",
    "description": "Gran formato de 55 pulgadas con panel IPS de amplio ángulo de visión, sonido virtual AI Sound Pro 5.1.2 canales y optimizador de juegos. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-069",
    "inStock": true,
    "features": [
      "Panel de 55 pulgadas con visión cinematográfica",
      "Sonido AI Sound Pro con mezcla envolvente 5.1.2",
      "Game Dashboard & Optimizer con HGiG",
      "Control domótico inteligente con Apple HomeKit y Alexa"
    ]
  },
  {
    "id": "prod-productos4-070",
    "department": "Tecnología · Pantallas",
    "name": "Smart TV LG 50 Pulgadas Cinema HDR Sonido Virtual 5.1 Canales",
    "slug": "smart-tv-lg-50-pulgadas-cinema-hdr-sonido-virtual-5-1-canales-p4-070",
    "category": "electronica",
    "brand": "LG Electronics",
    "subcategory": "pantallas",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 7999,
    "originalPrice": 9999,
    "rating": 4.6,
    "reviewsCount": 135,
    "image": "Productos 4/Pantalla LG.jpg",
    "description": "Experiencia inmersiva para películas y series con modo Filmmaker original de directores de Hollywood y diseño moderno con marco minimalista. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-070",
    "inStock": true,
    "features": [
      "Modo cineasta Filmmaker Mode fiel a la visión original",
      "Conexión Bluetooth Surround Ready para bocinas inalámbricas",
      "Frecuencia de actualización de 60Hz nativa",
      "3 puertos HDMI eARC y 2 puertos USB"
    ]
  },
  {
    "id": "prod-productos4-071",
    "department": "Moda · Ropa",
    "name": "Jeans Levi's 501 Original Fit Denim Clásico para Hombre",
    "slug": "jeans-levi-s-501-original-fit-denim-clasico-para-hombre-p4-071",
    "category": "ropa",
    "brand": "Levi's",
    "subcategory": "pantalones",
    "gender": "hombre",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1599,
    "originalPrice": 1999,
    "rating": 4.7,
    "reviewsCount": 152,
    "image": "Productos 4/Pantalón Levi's 501 hombre.jpg",
    "description": "El blue jean original desde 1873 con corte recto en cadera y muslos, tiro medio y la emblemática bragueta de botones metálicos. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-071",
    "inStock": true,
    "features": [
      "El pantalón vaquero original con bragueta de botones",
      "100% algodón resistente no elástico",
      "Corte recto Straight Leg clásico",
      "Parche de cuero Two Horse en pretina"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-072",
    "department": "Moda · Ropa",
    "name": "Jeans Levi's 501 Crop Straight Fit Denim para Mujer",
    "slug": "jeans-levi-s-501-crop-straight-fit-denim-para-mujer-p4-072",
    "category": "ropa",
    "brand": "Levi's",
    "subcategory": "pantalones",
    "gender": "mujer",
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 1599,
    "originalPrice": 1999,
    "rating": 4.8,
    "reviewsCount": 169,
    "image": "Productos 4/Pantalón Levi's 501 mujer.jpg",
    "description": "Inspirado en el archivo vintage de Levi's con tiro alto ceñido que resalta la cintura, corte recto y largo recortado al tobillo. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-072",
    "inStock": true,
    "features": [
      "Tiro alto High Rise que estiliza la figura",
      "Largo Crop perfecto para lucir botines o tenis",
      "Mezclilla prémium de tacto auténtico",
      "Cierre clásico de botones"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-073",
    "department": "Moda · Ropa",
    "name": "Playera Infantil Nike Sportswear Gráfica Urbana Algodón",
    "slug": "playera-infantil-nike-sportswear-grafica-urbana-algodon-p4-073",
    "category": "ropa",
    "brand": "Nike Kids",
    "subcategory": "playeras",
    "gender": "kids",
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 549,
    "originalPrice": 699,
    "rating": 4.9,
    "reviewsCount": 186,
    "image": "Productos 4/Playera infantil Nike Sportswear 2.jpg",
    "description": "Playera de corte holgado para niños confeccionada en algodón transpirable suave con estampado gráfico frontal Nike Sportswear. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-073",
    "inStock": true,
    "features": [
      "100% algodón suave de peso medio",
      "Estampado gráfico frontal serigrafiado",
      "Cuello redondo elástico acanalado",
      "Ajuste cómodo para juegos y deporte"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-074",
    "department": "Moda · Ropa",
    "name": "Playera Juvenil Nike Sportswear Logo Swoosh Clásico",
    "slug": "playera-juvenil-nike-sportswear-logo-swoosh-clasico-p4-074",
    "category": "ropa",
    "brand": "Nike Kids",
    "subcategory": "playeras",
    "gender": "kids",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 549,
    "originalPrice": 699,
    "rating": 5,
    "reviewsCount": 203,
    "image": "Productos 4/Playera infantil Nike Sportswear..jpg",
    "description": "Básico indispensable para niños y adolescentes con el logotipo Swoosh icónico centrado en el pecho y costuras reforzadas. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-074",
    "inStock": true,
    "features": [
      "Logotipo Nike Swoosh oficial en el pecho",
      "Tejido fresco que absorbe la humedad",
      "Etiqueta interior termosellada sin roces",
      "Lavable a máquina sin encogimiento"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-075",
    "department": "Moda · Ropa",
    "name": "Playera Infantil Nike Sportswear Crewneck Básica",
    "slug": "playera-infantil-nike-sportswear-crewneck-basica-p4-075",
    "category": "ropa",
    "brand": "Nike Kids",
    "subcategory": "playeras",
    "gender": "kids",
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 549,
    "originalPrice": 699,
    "rating": 4.6,
    "reviewsCount": 220,
    "image": "Productos 4/Playera infantil Nike Sportswear.jpg",
    "description": "Prenda duradera diseñada para el movimiento constante de los niños en el colegio, parque o entrenamiento deportivo diario. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-075",
    "inStock": true,
    "features": [
      "Tejido transpirable de alta resistencia",
      "Corte estándar atlético",
      "Colores firmes resistentes a lavados",
      "Composición 100% algodón"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-076",
    "department": "Moda · Ropa",
    "name": "Playera Básica Infantil 100% Algodón Peinado Unisex Blanca",
    "slug": "playera-basica-infantil-100-algodon-peinado-unisex-blanca-p4-076",
    "category": "ropa",
    "brand": "Callejón Kids",
    "subcategory": "playeras",
    "gender": "kids",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 399,
    "originalPrice": 499,
    "rating": 4.7,
    "reviewsCount": 237,
    "image": "Productos 4/playera infantil unisex blanca.jpg",
    "description": "Básico escolar y diario en algodón peinado hipoalergénico de tacto extrasuave, resistente a constantes lavadas y juegos infantiles. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-076",
    "inStock": true,
    "features": [
      "100% algodón peinado hipoalergénico",
      "Costuras reforzadas con doble puntada",
      "Cuello elástico indeformable",
      "Apta para teñir, estampar o bordar"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-077",
    "department": "Moda · Ropa",
    "name": "Playera Deportiva Niño Nike Dri-FIT Manga Corta Negra",
    "slug": "playera-deportiva-nino-nike-dri-fit-manga-corta-negra-p4-077",
    "category": "ropa",
    "brand": "Nike Kids",
    "subcategory": "playeras",
    "gender": "kids",
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 549,
    "originalPrice": 699,
    "rating": 4.8,
    "reviewsCount": 254,
    "image": "Productos 4/playera niño nike negro.jpg",
    "description": "Tecnología Nike Dri-FIT que capilariza el sudor de la piel para mantener a los niños secos y cómodos durante sus prácticas deportivas. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-077",
    "inStock": true,
    "features": [
      "Tecnología Nike Dri-FIT de secado rápido",
      "Corte atlético estándar que se adapta al movimiento",
      "Logotipo Nike Swoosh estampado en el pecho",
      "Tejido de poliéster 100% reciclado"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-078",
    "department": "Moda · Ropa",
    "name": "Camisa Polo Lacoste Classic Fit Piqué de Algodón Blanco Óptico",
    "slug": "camisa-polo-lacoste-classic-fit-pique-de-algodon-blanco-optico-p4-078",
    "category": "ropa",
    "brand": "Lacoste",
    "subcategory": "playeras",
    "gender": "hombre",
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 2490,
    "originalPrice": 2990,
    "rating": 4.9,
    "reviewsCount": 51,
    "image": "Productos 4/Polo Lacoste Classic Fit blanco.jpg",
    "description": "La legendaria polo L.12.12 inventada por René Lacoste en 1933 con tejido petit piqué de algodón puro y el icónico cocodrilo verde bordado. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-078",
    "inStock": true,
    "features": [
      "Tejido petit piqué de algodón 100%",
      "Bordado icónico de cocodrilo con más de 1,400 puntadas",
      "Botones de nácar genuino",
      "Corte Classic Fit recto y cómodo"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blanco Óptico",
      "Celeste Náutico",
      "Rojo Escarlata"
    ],
    "colorHex": [
      "#FFFFFF",
      "#7DD3FC",
      "#DC2626"
    ],
    "colorImages": {
      "Blanco Óptico": "Productos 4/Polo Lacoste Classic Fit blanco.jpg",
      "Celeste Náutico": "Productos 4/Polo Lacoste Classic Fit celeste.jpg",
      "Rojo Escarlata": "Productos 4/Polo Lacoste Classic Fit roja.jpg"
    }
  },
  {
    "id": "prod-productos4-079",
    "department": "Moda · Ropa",
    "name": "Camisa Polo Lacoste Classic Fit Piqué de Algodón Celeste Náutico",
    "slug": "camisa-polo-lacoste-classic-fit-pique-de-algodon-celeste-nautico-p4-079",
    "category": "ropa",
    "brand": "Lacoste",
    "subcategory": "playeras",
    "gender": "hombre",
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 2490,
    "originalPrice": 2990,
    "rating": 5,
    "reviewsCount": 68,
    "image": "Productos 4/Polo Lacoste Classic Fit celeste.jpg",
    "description": "Refrescante tono celeste pastel que proyecta elegancia informal en climas cálidos y eventos de fin de semana. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-079",
    "inStock": true,
    "features": [
      "Color celeste náutico de alta durabilidad",
      "Cuello y ribete de mangas acanalados",
      "Aberturas laterales en el bajo",
      "Garantía de confección artesanal Lacoste"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-080",
    "department": "Moda · Ropa",
    "name": "Camisa Polo Lacoste Classic Fit Piqué de Algodón Rojo Escarlata",
    "slug": "camisa-polo-lacoste-classic-fit-pique-de-algodon-rojo-escarlata-p4-080",
    "category": "ropa",
    "brand": "Lacoste",
    "subcategory": "playeras",
    "gender": "hombre",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2490,
    "originalPrice": 2990,
    "rating": 4.6,
    "reviewsCount": 85,
    "image": "Productos 4/Polo Lacoste Classic Fit roja.jpg",
    "description": "Intenso color rojo escarlata que añade distinción y carácter a cualquier atuendo casual o deportivo con bermudas o pantalones chinos. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-080",
    "inStock": true,
    "features": [
      "Color Rojo Escarlata intenso",
      "Tejido petit piqué transpirable",
      "Cuello abotonado con doble solapa",
      "Costuras francesas interiores"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-081",
    "department": "Belleza · Maquillaje Rostro",
    "name": "Primer Facial Fijador e.l.f. Power Grip con Ácido Hialurónico",
    "slug": "primer-facial-fijador-e-l-f-power-grip-con-acido-hialuronico-p4-081",
    "category": "belleza",
    "brand": "e.l.f. Cosmetics",
    "subcategory": "rostro",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 349,
    "originalPrice": 449,
    "rating": 4.7,
    "reviewsCount": 102,
    "image": "Productos 4/Primer e.l.f. Power Grip. 1.jpg",
    "description": "El primer viral en gel a base de agua que fija el maquillaje como un imán mientras hidrata profundamente la piel con ácido hialurónico. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "BEL-P4-081",
    "inStock": true,
    "features": [
      "Fórmula en gel que atrapa el maquillaje todo el día",
      "Enriquecido con ácido hialurónico para hidratación",
      "Acabado translúcido para todos los tonos de piel",
      "100% vegano y libre de crueldad animal"
    ]
  },
  {
    "id": "prod-productos4-082",
    "department": "Belleza · Maquillaje Rostro",
    "name": "Primer Hidratante e.l.f. Power Grip Niacinamida 4% Acabado Glow",
    "slug": "primer-hidratante-e-l-f-power-grip-niacinamida-4-acabado-glow-p4-082",
    "category": "belleza",
    "brand": "e.l.f. Cosmetics",
    "subcategory": "rostro",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 349,
    "originalPrice": 449,
    "rating": 4.8,
    "reviewsCount": 119,
    "image": "Productos 4/Primer e.l.f. Power Grip..jpg",
    "description": "Con 4% de niacinamida para emparejar el tono de la piel y dar un brillo húmedo radiante de apariencia fresca y saludable. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "BEL-P4-082",
    "inStock": true,
    "features": [
      "Contiene 4% de niacinamida para perfeccionar la tez",
      "Proporciona un brillo \"dewy\" radiante natural",
      "Textura no pegajosa de rápida absorción",
      "Fijación de maquillaje hasta por 16 horas"
    ]
  },
  {
    "id": "prod-productos4-083",
    "department": "Moda · Ropa",
    "name": "Sneakers Reebok Classic Leather Blanco Triple Piel Genuina",
    "slug": "sneakers-reebok-classic-leather-blanco-triple-piel-genuina-p4-083",
    "category": "ropa",
    "brand": "Reebok Classic",
    "subcategory": "calzado",
    "gender": "unisex",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1899,
    "originalPrice": 2399,
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "Productos 4/Reebok Classic Leather 1.jpg",
    "description": "Zapatilla deportiva clásica de los años 80 con exterior de piel de guante ultrasuave y entresuela de EVA troquelada para una pisada acolchada. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-083",
    "inStock": true,
    "features": [
      "Piel de vacuno suave de primera calidad",
      "Mediasuela de EVA ligera y cómoda",
      "Suela de caucho resistente a la abrasión",
      "Logotipo Vector y bandera británica clásica"
    ],
    "sizes": [
      "23 MX",
      "24 MX",
      "25 MX",
      "26 MX",
      "27 MX",
      "28 MX"
    ]
  },
  {
    "id": "prod-productos4-084",
    "department": "Moda · Ropa",
    "name": "Sneakers Reebok Classic Leather Vintage Chalk con Detalles Verdes",
    "slug": "sneakers-reebok-classic-leather-vintage-chalk-con-detalles-verdes-p4-084",
    "category": "ropa",
    "brand": "Reebok Classic",
    "subcategory": "calzado",
    "gender": "unisex",
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 1899,
    "originalPrice": 2399,
    "rating": 5,
    "reviewsCount": 153,
    "image": "Productos 4/Reebok Classic Leather 2.jpg",
    "description": "Estética vintage en tono blanco tiza (Chalk) con contrastes verde bosque retro en la lengüeta y el talón para amantes del estilo retro. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-084",
    "inStock": true,
    "features": [
      "Colorway Vintage Chalk / Green",
      "Lengüeta con espuma expuesta estilo retro",
      "Plantilla de confort moldeada",
      "Perfil bajo estilizado"
    ],
    "sizes": [
      "23 MX",
      "24 MX",
      "25 MX",
      "26 MX",
      "27 MX",
      "28 MX"
    ]
  },
  {
    "id": "prod-productos4-085",
    "department": "Moda · Ropa",
    "name": "Sneakers Reebok Classic Leather Negro Suela Caramelo",
    "slug": "sneakers-reebok-classic-leather-negro-suela-caramelo-p4-085",
    "category": "ropa",
    "brand": "Reebok Classic",
    "subcategory": "calzado",
    "gender": "unisex",
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 1899,
    "originalPrice": 2399,
    "rating": 4.6,
    "reviewsCount": 170,
    "image": "Productos 4/Reebok Classic Leather 3.jpg",
    "description": "Look urbano sobrio en piel negra con elegante suela de goma color caramelo que brinda tracción y resistencia impecable. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-085",
    "inStock": true,
    "features": [
      "Piel negra resistente a la suciedad",
      "Suela de goma color caramelo (Gum Sole)",
      "Forro interior afelpado en cuello",
      "Diseño versátil para combinar con jeans y joggers"
    ],
    "sizes": [
      "23 MX",
      "24 MX",
      "25 MX",
      "26 MX",
      "27 MX",
      "28 MX"
    ]
  },
  {
    "id": "prod-productos4-086",
    "department": "Moda · Ropa",
    "name": "Sneakers Reebok Classic Leather Retro Blanco Clásico con Azul",
    "slug": "sneakers-reebok-classic-leather-retro-blanco-clasico-con-azul-p4-086",
    "category": "ropa",
    "brand": "Reebok Classic",
    "subcategory": "calzado",
    "gender": "unisex",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1899,
    "originalPrice": 2399,
    "rating": 4.7,
    "reviewsCount": 187,
    "image": "Productos 4/Reebok Classic Leather.jpg",
    "description": "El diseño icónico en blanco nítido con el logotipo lateral en azul marino y rojo, un modelo imprescindible en la cultura sneakerhead. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-086",
    "inStock": true,
    "features": [
      "Silueta clásica original de 1983",
      "Amortiguación suave y flexible",
      "Perforaciones en empeine para ventilación",
      "Suela duradera de caucho vulcanizado"
    ],
    "sizes": [
      "23 MX",
      "24 MX",
      "25 MX",
      "26 MX",
      "27 MX",
      "28 MX"
    ],
    "colors": [
      "Blanco Retro Clásico",
      "Triple Blanco",
      "Vintage Chalk",
      "Negro Suela Caramelo"
    ],
    "colorHex": [
      "#FFFFFF",
      "#F8FAFC",
      "#E2D9C8",
      "#1E293B"
    ],
    "colorImages": {
      "Blanco Retro Clásico": "Productos 4/Reebok Classic Leather.jpg",
      "Triple Blanco": "Productos 4/Reebok Classic Leather 1.jpg",
      "Vintage Chalk": "Productos 4/Reebok Classic Leather 2.jpg",
      "Negro Suela Caramelo": "Productos 4/Reebok Classic Leather 3.jpg"
    }
  },
  {
    "id": "prod-productos4-087",
    "department": "Hogar · Cocina & Electrodomésticos",
    "name": "Refrigerador French Door LG GM57MPZ 22 Pies Acero Antihuellas",
    "slug": "refrigerador-french-door-lg-gm57mpz-22-pies-acero-antihuellas-p4-087",
    "category": "hogar",
    "brand": "LG French Door",
    "subcategory": "refrigeracion",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 21999,
    "originalPrice": 26999,
    "rating": 4.8,
    "reviewsCount": 204,
    "image": "Productos 4/Refrigerador LG GM57MPZ.jpg",
    "description": "Diseño French Door de puertas francesas con tecnología Door Cooling+, enfriamiento uniforme Multi Air Flow y compresor Smart Inverter. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-087",
    "inStock": true,
    "features": [
      "Compresor Smart Inverter con 10 años de garantía",
      "Tecnología DoorCooling+ para enfriamiento rápido",
      "Filtro antibacteriano Hygiene Fresh+",
      "Iluminación LED interior brillante en todo el compartimento"
    ]
  },
  {
    "id": "prod-productos4-088",
    "department": "Hogar · Cocina & Electrodomésticos",
    "name": "Refrigerador Top Mount LG GT32WPP 11 Pies Dispensador Inverter",
    "slug": "refrigerador-top-mount-lg-gt32wpp-11-pies-dispensador-inverter-p4-088",
    "category": "hogar",
    "brand": "LG Top Mount",
    "subcategory": "refrigeracion",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 11499,
    "originalPrice": 13999,
    "rating": 4.9,
    "reviewsCount": 221,
    "image": "Productos 4/Refrigerador LG GT32WPP.jpg",
    "description": "Refrigerador Top Mount de 11 pies cúbicos con dispensador de agua exterior de fácil acceso, cajón de frutas y verduras con control de humedad. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-088",
    "inStock": true,
    "features": [
      "Dispensador exterior de agua fría integrado",
      "Cajón Moist Balance Crisper para conservar vegetales frescos",
      "Repisas de cristal templado ajustables",
      "Ahorro de energía con motor Inverter"
    ]
  },
  {
    "id": "prod-productos4-089",
    "department": "Hogar · Cocina & Electrodomésticos",
    "name": "Refrigerador Whirlpool WT1433A 14 Pies Evox Platinum",
    "slug": "refrigerador-whirlpool-wt1433a-14-pies-evox-platinum-p4-089",
    "category": "hogar",
    "brand": "Whirlpool",
    "subcategory": "refrigeracion",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 9899,
    "originalPrice": 11999,
    "rating": 5,
    "reviewsCount": 238,
    "image": "Productos 4/Refrigerador Whirlpool WT1433A..jpg",
    "description": "Tecnología Evox con película protectora contra huellas y corrosión, sistema 3D Air Flow para temperatura homogénea y luz LED. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-089",
    "inStock": true,
    "features": [
      "Acabado Evox resistente a huellas y óxido",
      "Sistema de enfriamiento 3D Air Flow",
      "Compartimento especial para carnes frías Cold Room",
      "Control electrónico de temperatura frontal"
    ]
  },
  {
    "id": "prod-productos4-090",
    "department": "Videojuegos & Consolas",
    "name": "Videojuego Resident Evil 2 Remake Survival Horror",
    "slug": "videojuego-resident-evil-2-remake-survival-horror-p4-090",
    "category": "videojuegos",
    "brand": "Capcom",
    "subcategory": "juegos",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 899,
    "originalPrice": 1199,
    "rating": 4.6,
    "reviewsCount": 255,
    "image": "Productos 4/resident Evil 2 Remake.jpg",
    "description": "Acompaña al policía novato Leon S. Kennedy y a la universitaria Claire Redfield en su intento de escapar de una comisaría sitiada por zombis. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-090",
    "inStock": true,
    "features": [
      "Motor gráfico RE Engine con física de daño realista",
      "Campaña dual interconectada con Leon y Claire",
      "Puzles clásicos reinventados con atmósfera opresiva",
      "Gestión táctica de munición y espacio de inventario"
    ]
  },
  {
    "id": "prod-productos4-091",
    "department": "Videojuegos & Consolas",
    "name": "Videojuego Resident Evil 3 Remake Edición Némesis",
    "slug": "videojuego-resident-evil-3-remake-edicion-nemesis-p4-091",
    "category": "videojuegos",
    "brand": "Capcom",
    "subcategory": "juegos",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 899,
    "originalPrice": 1199,
    "rating": 4.7,
    "reviewsCount": 52,
    "image": "Productos 4/Resident Evil 3 Remake.jpg",
    "description": "Jill Valentine intenta escapar de una devastada Raccoon City mientras es perseguida incansablemente por el arma biológica Némesis. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-091",
    "inStock": true,
    "features": [
      "Motor gráfico RE Engine fotorrealista",
      "Enemigo Némesis con inteligencia artificial implacable",
      "Perspectiva sobre el hombro moderna con controles dinámicos",
      "Incluye el juego multijugador online Resident Evil Resistance"
    ]
  },
  {
    "id": "prod-productos4-092",
    "department": "Videojuegos & Consolas",
    "name": "Videojuego Resident Evil 4 Remake Gold Edition",
    "slug": "videojuego-resident-evil-4-remake-gold-edition-p4-092",
    "category": "videojuegos",
    "brand": "Capcom",
    "subcategory": "juegos",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 1199,
    "originalPrice": 1499,
    "rating": 4.8,
    "reviewsCount": 69,
    "image": "Productos 4/Resident Evil 4 Remake.jpg",
    "description": "La aclamada obra maestra del survival horror completamente reconstruida: Leon S. Kennedy se adentra en un remoto pueblo europeo para rescatar a la hija del presidente. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-092",
    "inStock": true,
    "features": [
      "Remake total con gráficos cinematográficos en 4K HDR",
      "Mecánicas de combate mejoradas con cuchillo y parry",
      "Historia profundizada con personajes secundarios enriquecidos",
      "Modo Mercenarios gratuito y expansión Separate Ways compatible"
    ]
  },
  {
    "id": "prod-productos4-093",
    "department": "Videojuegos & Consolas",
    "name": "Videojuego Resident Evil: Requiem Anthology Edition",
    "slug": "videojuego-resident-evil-requiem-anthology-edition-p4-093",
    "category": "videojuegos",
    "brand": "Capcom",
    "subcategory": "juegos",
    "gender": null,
    "badge": "Coleccionista",
    "badgeType": "quality",
    "price": 999,
    "originalPrice": 1299,
    "rating": 4.9,
    "reviewsCount": 86,
    "image": "Productos 4/resident evil requiem.jpg",
    "description": "Edición especial antológica que recopila los capítulos más oscuros y misiones especiales de la saga biológica de Capcom. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-093",
    "inStock": true,
    "features": [
      "Contenido extra con modos de supervivencia extrema",
      "Ilustraciones y modelos 3D conceptuales desbloqueables",
      "Optimizado con sonido envolvente binaural 3D",
      "Compatible con mandos hápticos de última generación"
    ]
  },
  {
    "id": "prod-productos4-094",
    "department": "Videojuegos & Consolas",
    "name": "Videojuego Resident Evil Village Gold Edition",
    "slug": "videojuego-resident-evil-village-gold-edition-p4-094",
    "category": "videojuegos",
    "brand": "Capcom",
    "subcategory": "juegos",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 999,
    "originalPrice": 1299,
    "rating": 5,
    "reviewsCount": 103,
    "image": "Productos 4/Resident Evil Village.jpg",
    "description": "Octava entrega de la saga principal donde Ethan Winters explora un pueblo misterioso custodiado por cuatro jerarcas liderados por Lady Dimitrescu. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-094",
    "inStock": true,
    "features": [
      "Opción de cámara en primera o tercera persona",
      "Audio 3D inmersivo que eriza la piel",
      "Combate táctico con gestión de inventario maletín",
      "Incluye el DLC Sombras de Rose y nuevos personajes en Mercenarios"
    ]
  },
  {
    "id": "prod-productos4-095",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Smartphone Samsung Galaxy A14 128GB Cámara Triple Plata Holográfica",
    "slug": "smartphone-samsung-galaxy-a14-128gb-camara-triple-plata-holografica-p4-095",
    "category": "electronica",
    "brand": "Samsung",
    "subcategory": "smartphones",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 3299,
    "originalPrice": 3999,
    "rating": 4.6,
    "reviewsCount": 120,
    "image": "Productos 4/Samsung Galaxy A14 1.jpg",
    "description": "Pantalla expansiva FHD+ de 6.6 pulgadas con cámara principal de 50 MP, batería masiva de 5000 mAh y lector lateral de huellas dactilares. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-095",
    "inStock": true,
    "features": [
      "Pantalla Infinity-V FHD+ de 6.6\"",
      "Cámara principal de 50 MP + lente macro y profundidad",
      "Batería de 5,000 mAh de hasta 2 días de duración",
      "Almacenamiento expandible hasta 1 TB mediante MicroSD"
    ]
  },
  {
    "id": "prod-productos4-096",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Smartphone Samsung Galaxy A14 128GB Pantalla FHD+ Verde Menta",
    "slug": "smartphone-samsung-galaxy-a14-128gb-pantalla-fhd-verde-menta-p4-096",
    "category": "electronica",
    "brand": "Samsung",
    "subcategory": "smartphones",
    "gender": null,
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 3299,
    "originalPrice": 3999,
    "rating": 4.7,
    "reviewsCount": 137,
    "image": "Productos 4/Samsung Galaxy A14 2.jpg",
    "description": "Atractivo acabado en verde menta con textura de micropatrón grabado al tacto que evita resbalones y huellas marcadas. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-096",
    "inStock": true,
    "features": [
      "Color Verde Menta fresco y juvenil",
      "Procesador Octa-Core eficiente",
      "Interfaz Samsung One UI Core intuitiva",
      "Conector de audio para audífonos 3.5mm"
    ]
  },
  {
    "id": "prod-productos4-097",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Smartphone Samsung Galaxy A14 128GB Batería 5000mAh Negro Carbón",
    "slug": "smartphone-samsung-galaxy-a14-128gb-bateria-5000mah-negro-carbon-p4-097",
    "category": "electronica",
    "brand": "Samsung",
    "subcategory": "smartphones",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 3299,
    "originalPrice": 3999,
    "rating": 4.8,
    "reviewsCount": 154,
    "image": "Productos 4/Samsung Galaxy A14.jpg",
    "description": "El teléfono Android más confiable de su segmento en negro clásico con sonido Dolby Atmos al conectar auriculares y seguridad Knox. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-097",
    "inStock": true,
    "features": [
      "Seguridad biométrica con huella digital lateral",
      "Audio optimizado con Dolby Atmos",
      "Cámara selfie de 13 MP de alta definición",
      "4 años de parches de seguridad garantizados"
    ],
    "colors": [
      "Negro Carbón",
      "Plata Holográfica",
      "Verde Menta"
    ],
    "colorHex": [
      "#111827",
      "#E5E7EB",
      "#6EE7B7"
    ],
    "colorImages": {
      "Negro Carbón": "Productos 4/Samsung Galaxy A14.jpg",
      "Plata Holográfica": "Productos 4/Samsung Galaxy A14 1.jpg",
      "Verde Menta": "Productos 4/Samsung Galaxy A14 2.jpg"
    }
  },
  {
    "id": "prod-productos4-098",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Smartphone Samsung Galaxy A16 5G 128GB Super AMOLED 90Hz",
    "slug": "smartphone-samsung-galaxy-a16-5g-128gb-super-amoled-90hz-p4-098",
    "category": "electronica",
    "brand": "Samsung",
    "subcategory": "smartphones",
    "gender": null,
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 4199,
    "originalPrice": 4999,
    "rating": 4.9,
    "reviewsCount": 171,
    "image": "Productos 4/Samsung Galaxy A16 5G..jpg",
    "description": "Conectividad móvil 5G ultrarrápida con pantalla Super AMOLED de 90 Hz, diseño ultra estilizado de 7.9 mm de grosor y resistencia IP54. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-098",
    "inStock": true,
    "features": [
      "Conectividad 5G de alta velocidad para descargas y streaming",
      "Pantalla Super AMOLED de 6.7\" fluida a 90 Hz",
      "Protección contra salpicaduras y polvo IP54",
      "6 años de actualizaciones de sistema Android"
    ]
  },
  {
    "id": "prod-productos4-099",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Smartphone Plegable Samsung Galaxy Z Flip6 256GB Galaxy AI Azul Hielo",
    "slug": "smartphone-plegable-samsung-galaxy-z-flip6-256gb-galaxy-ai-azul-hielo-p4-099",
    "category": "electronica",
    "brand": "Samsung",
    "subcategory": "smartphones",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 21999,
    "originalPrice": 26999,
    "rating": 5,
    "reviewsCount": 188,
    "image": "Productos 4/Samsung Galaxy Z Flip6..jpg",
    "description": "El plegable más avanzado con funciones inteligentes Galaxy AI, pantalla externa FlexWindow de 3.4\", cámara de 50 MP y bisagra Armor Aluminum. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-099",
    "inStock": true,
    "features": [
      "Inteligencia Artificial Galaxy AI con traducción en tiempo real",
      "Cámara principal de 50 MP con ProVisual Engine",
      "Batería mejorada de 4,000 mAh con cámara de vapor de refrigeración",
      "Chasis de Armor Aluminum y resistencia al agua IP48"
    ]
  },
  {
    "id": "prod-productos4-100",
    "department": "Hogar · Cocina & Culinaria",
    "name": "Sartén Black+Decker Antiadherente 24cm Mango Ergonómico Soft Touch",
    "slug": "sarten-black-decker-antiadherente-24cm-mango-ergonomico-soft-touch-p4-100",
    "category": "hogar",
    "brand": "Black+Decker",
    "subcategory": "cocina",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 489,
    "originalPrice": 599,
    "rating": 4.6,
    "reviewsCount": 205,
    "image": "Productos 4/Sartén Black+Decker Antiadherente..jpg",
    "description": "Sartén de aluminio de alta transferencia térmica con 3 capas de antiadherente libre de PFOA para cocinar con mínimo aceite o mantequilla. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-100",
    "inStock": true,
    "features": [
      "Antiadherente de triple capa libre de tóxicos PFOA",
      "Mango aislante de calor con textura Soft Touch",
      "Base de calor difusor para cocción homogénea",
      "Apto para estufas de gas, eléctricas y vitrocerámica"
    ]
  },
  {
    "id": "prod-productos4-101",
    "department": "Hogar · Cocina & Culinaria",
    "name": "Sartén T-fal Easy Cook Plus 26cm con Thermo-Spot Antiadherente",
    "slug": "sarten-t-fal-easy-cook-plus-26cm-con-thermo-spot-antiadherente-p4-101",
    "category": "hogar",
    "brand": "T-fal",
    "subcategory": "cocina",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 599,
    "originalPrice": 749,
    "rating": 4.7,
    "reviewsCount": 222,
    "image": "Productos 4/Sartén T-fal Easy Cook..jpg",
    "description": "Indicador de temperatura patentado Thermo-Spot que cambia de color cuando el sartén alcanza la temperatura ideal para sellar carnes y verduras. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-101",
    "inStock": true,
    "features": [
      "Indicador de calor Thermo-Spot original T-fal",
      "Revestimiento Titanium Non-Stick de alta durabilidad",
      "Bordes antiderrame para servir líquidos con facilidad",
      "100% seguro para alimentos: 0% plomo y cadmio"
    ]
  },
  {
    "id": "prod-productos4-102",
    "department": "Hogar · Cocina & Culinaria",
    "name": "Sartén Profesional Tramontina Aluminio Grueso 28cm Calidad Restaurantera",
    "slug": "sarten-profesional-tramontina-aluminio-grueso-28cm-calidad-restaurantera-p4-102",
    "category": "hogar",
    "brand": "Tramontina",
    "subcategory": "cocina",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 799,
    "originalPrice": 999,
    "rating": 4.8,
    "reviewsCount": 239,
    "image": "Productos 4/Sartén Tramontina Professional.jpg",
    "description": "Cuerpo robusto de aluminio de 3 mm de espesor con recubrimiento antiadherente Starflon Premium y mango de acero inoxidable remachado con funda de silicona. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-102",
    "inStock": true,
    "features": [
      "Calidad certificada para restaurantes y chefs",
      "Cuerpo de aluminio grueso que no se deforma con calor intenso",
      "Mango remachado de acero con funda de silicona removible",
      "Excelente para saltear y sellar a fuego alto"
    ]
  },
  {
    "id": "prod-productos4-103",
    "department": "Hogar · Cocina & Culinaria",
    "name": "Sartén Gourmet de Inducción con Recubrimiento Cerámico Reforzado",
    "slug": "sarten-gourmet-de-induccion-con-recubrimiento-ceramico-reforzado-p4-103",
    "category": "hogar",
    "brand": "MasterChef Collection",
    "subcategory": "cocina",
    "gender": null,
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 649,
    "originalPrice": 799,
    "rating": 4.9,
    "reviewsCount": 256,
    "image": "Productos 4/Sartén.jpg",
    "description": "Superficie de cerámica antiadherente ecológica resistente a rayones con disco de acero magnético en base apto para estufas de inducción. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-103",
    "inStock": true,
    "features": [
      "Apto para todo tipo de estufas, incluida inducción",
      "Recubrimiento cerámico ecológico libre de químicos PTFE",
      "Distribución de calor rápida y uniforme",
      "Diseño elegante apto para llevar a la mesa"
    ]
  },
  {
    "id": "prod-productos4-104",
    "department": "Belleza · Cuidado Capilar",
    "name": "Shampoo Pantene Pro-V Restauración Profunda con Óleo de Argán 750ml",
    "slug": "shampoo-pantene-pro-v-restauracion-profunda-con-oleo-de-argan-750ml-p4-104",
    "category": "belleza",
    "brand": "Pantene Pro-V",
    "subcategory": "cuidado-capilar",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 189,
    "originalPrice": 239,
    "rating": 5,
    "reviewsCount": 53,
    "image": "Productos 4/Shampoo Pantene Pro-V..jpg",
    "description": "Fórmula Pro-Vitaminas con aceite de argán que repara el daño desde el primer uso, dejando el cabello sedoso, fuerte y brillante hasta las puntas. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "BEL-P4-104",
    "inStock": true,
    "features": [
      "Botella familiar económica de 750 ml con dispensador pump",
      "Enriquecido con complejo de Pro-Vitaminas y lípidos reparadores",
      "Previene las puntas abiertas y reduce el frizz",
      "Sin sal dañina añadida"
    ]
  },
  {
    "id": "prod-productos4-105",
    "department": "Moda · Ropa",
    "name": "Short de Mezclilla Levi's 501 Original Fit Deshilachado",
    "slug": "short-de-mezclilla-levi-s-501-original-fit-deshilachado-p4-105",
    "category": "ropa",
    "brand": "Levi's",
    "subcategory": "shorts",
    "gender": "mujer",
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 999,
    "originalPrice": 1299,
    "rating": 4.6,
    "reviewsCount": 70,
    "image": "Productos 4/Short Levi's 501 Original..jpg",
    "description": "El primer short vaquero de la historia cortado directamente del patrón 501 con dobladillo deshilachado estilo cut-off y tiro alto favorecedor. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-105",
    "inStock": true,
    "features": [
      "Corte 501 Cut-off auténtico",
      "Tiro alto que abraza la cintura",
      "Bajos deshilachados con acabado desgastado",
      "100% algodón rígido de mezclilla prémium"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-106",
    "department": "Moda · Ropa",
    "name": "Short de Mezclilla Zara Denim Mom Fit Tiro Alto para Mujer",
    "slug": "short-de-mezclilla-zara-denim-mom-fit-tiro-alto-para-mujer-p4-106",
    "category": "ropa",
    "brand": "Zara",
    "subcategory": "shorts",
    "gender": "mujer",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 899,
    "originalPrice": 1199,
    "rating": 4.7,
    "reviewsCount": 87,
    "image": "Productos 4/Short Zara Denim. mujer.jpg",
    "description": "Silueta Mom Fit holgada en muslos confeccionada en algodón orgánico con lavado azul claro veraniego y cinco bolsillos funcionales. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-106",
    "inStock": true,
    "features": [
      "Corte Mom Fit holgado y cómodo",
      "Tiro alto favorecedor para todo tipo de cuerpo",
      "Lavado azul cielo con sutiles desgastes",
      "Confeccionado bajo estándares sostenibles Zara Join Life"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-107",
    "department": "Hogar · Salas & Muebles",
    "name": "Sofá Moderno de 2 Plazas Tapizado Aterciopelado Rojo Carmesí",
    "slug": "sofa-moderno-de-2-plazas-tapizado-aterciopelado-rojo-carmesi-p4-107",
    "category": "hogar",
    "brand": "Maison & Confort",
    "subcategory": "salas",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 9499,
    "originalPrice": 11999,
    "rating": 4.8,
    "reviewsCount": 104,
    "image": "Productos 4/sofa rojo.jpg",
    "description": "Una pieza de acento vibrante en terciopelo rojo carmesí con patas metálicas cónicas doradas que transforma cualquier sala en un espacio cosmopolita. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-107",
    "inStock": true,
    "features": [
      "Terciopelo suave con tratamiento antimanchas",
      "Patas de acero pulido en tono oro brillante",
      "Cojines de respaldo rellenos de pluma sintética suave",
      "Estructura compacta de 2 plazas ideal para apartamentos"
    ]
  },
  {
    "id": "prod-productos4-108",
    "department": "Hogar · Salas & Muebles",
    "name": "Sofá Contemporáneo Escandinavo 3 Cuerpos Patas de Madera",
    "slug": "sofa-contemporaneo-escandinavo-3-cuerpos-patas-de-madera-p4-108",
    "category": "hogar",
    "brand": "Maison & Confort",
    "subcategory": "salas",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 9999,
    "originalPrice": 12499,
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "Productos 4/sofa.jpg",
    "description": "Silueta recta limpia con tapicería de lino transpirable, cojines acolchados con costuras lineales y patas cónicas de madera de haya maciza. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-108",
    "inStock": true,
    "features": [
      "Tapizado en lino texturizado transpirable de alta densidad",
      "Patas de madera maciza con acabado natural",
      "Cojines con fundas removibles lavables con cremallera",
      "Capacidad para 3 adultos cómodamente sentados"
    ]
  },
  {
    "id": "prod-productos4-109",
    "department": "Hogar · Salas & Muebles",
    "name": "Sofá de 3 Plazas Ashley Furniture Darcy Microfibra Café Moka",
    "slug": "sofa-de-3-plazas-ashley-furniture-darcy-microfibra-cafe-moka-p4-109",
    "category": "hogar",
    "brand": "Ashley Furniture",
    "subcategory": "salas",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 13999,
    "originalPrice": 16999,
    "rating": 5,
    "reviewsCount": 138,
    "image": "Productos 4/Sofá Ashley Furniture Darcy de 3 plazas. 1.jpg",
    "description": "Tapizado en suave microfibra tipo gamuza con brazos acampanados contorneados, cojines de espuma de alta resiliencia y armazón de madera noble reforzada. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-109",
    "inStock": true,
    "features": [
      "Tapicería de microfibra ultrasuave resistente a manchas",
      "Brazos acolchados tipo pillow-top de diseño curvado",
      "Estructura probada para más de 10 años de uso continuo",
      "Cojines de asiento de alta densidad envueltos en fibra"
    ],
    "colors": [
      "Café Moka",
      "Azul Acero",
      "Clásico Darcy"
    ],
    "colorHex": [
      "#5C4033",
      "#4682B4",
      "#8B5A2B"
    ],
    "colorImages": {
      "Café Moka": "Productos 4/Sofá Ashley Furniture Darcy de 3 plazas. 1.jpg",
      "Azul Acero": "Productos 4/Sofá Ashley Furniture Darcy de 3 plazas. 2.jpg",
      "Clásico Darcy": "Productos 4/darcy sofa.jpg"
    }
  },
  {
    "id": "prod-productos4-110",
    "department": "Hogar · Salas & Muebles",
    "name": "Sofá Confortable Ashley Furniture Darcy Brazos Acolchados Azul Acero",
    "slug": "sofa-confortable-ashley-furniture-darcy-brazos-acolchados-azul-acero-p4-110",
    "category": "hogar",
    "brand": "Ashley Furniture",
    "subcategory": "salas",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 13999,
    "originalPrice": 16999,
    "rating": 4.6,
    "reviewsCount": 155,
    "image": "Productos 4/Sofá Ashley Furniture Darcy de 3 plazas. 2.jpg",
    "description": "Sofisticado tono azul acero que aporta serenidad y distinción a tu sala de estar con respaldo ergonómico de soporte lumbar. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-110",
    "inStock": true,
    "features": [
      "Elegante color Azul Acero contemporáneo",
      "Respaldo con costuras decorativas y gran soporte",
      "Resortes sinusoidales de acero de calibre pesado",
      "Dimensiones amplias para que descansen 3 personas cómodamente"
    ]
  },
  {
    "id": "prod-productos4-111",
    "department": "Hogar · Salas & Muebles",
    "name": "Sofá Modular Premium Thomasville 3 Plazas Gris Oxford",
    "slug": "sofa-modular-premium-thomasville-3-plazas-gris-oxford-p4-111",
    "category": "hogar",
    "brand": "Thomasville",
    "subcategory": "salas",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 18499,
    "originalPrice": 22999,
    "rating": 4.7,
    "reviewsCount": 172,
    "image": "Productos 4/Sofá Costco Thomasville de 3 plazas. 1.jpg",
    "description": "Lujo y confort excepcional de la reconocida casa Thomasville con tapizado textil de alto tráfico en gris oxford y asientos con resortes embolsados Pocket Coil. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-111",
    "inStock": true,
    "features": [
      "Cojines con resortes embolsados Pocket Coil independientes",
      "Tapicería con tratamiento antimanchas LiveSmart",
      "Patas de madera maciza de fresno en tono oscuro",
      "Incluye cojines decorativos a juego"
    ]
  },
  {
    "id": "prod-productos4-112",
    "department": "Hogar · Salas & Muebles",
    "name": "Sofá Seccional Thomasville Estructura Madera Maciza Arena Neutro",
    "slug": "sofa-seccional-thomasville-estructura-madera-maciza-arena-neutro-p4-112",
    "category": "hogar",
    "brand": "Thomasville",
    "subcategory": "salas",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 18999,
    "originalPrice": 23999,
    "rating": 4.8,
    "reviewsCount": 189,
    "image": "Productos 4/Sofá Costco Thomasville de 3 plazas. 2.jpg",
    "description": "Tono arena neutro luminoso que combina armoniosamente con cualquier estilo de decoración interior, con cojines reversibles para mayor durabilidad. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-112",
    "inStock": true,
    "features": [
      "Color Arena Neutro atemporal y luminoso",
      "Cojines de respaldo y asiento totalmente reversibles",
      "Estructura en madera secada al horno que no cruje",
      "Espuma de confort certificada CertiPUR-US"
    ]
  },
  {
    "id": "prod-productos4-113",
    "department": "Hogar · Salas & Muebles",
    "name": "Sofá de Lujo Thomasville 3 Plazas en Piel Genuina Negro Noche",
    "slug": "sofa-de-lujo-thomasville-3-plazas-en-piel-genuina-negro-noche-p4-113",
    "category": "hogar",
    "brand": "Thomasville",
    "subcategory": "salas",
    "gender": null,
    "badge": "Exclusivo",
    "badgeType": "quality",
    "price": 21999,
    "originalPrice": 26999,
    "rating": 4.9,
    "reviewsCount": 206,
    "image": "Productos 4/Sofá Costco Thomasville de 3 plazas. negro.jpg",
    "description": "Tapizado integral en 100% piel genuina de grano superior en negro azabache, con acabado capitoné sutil y presencia imponente para salas ejecutivas. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-113",
    "inStock": true,
    "features": [
      "100% piel genuina Top Grain Leather",
      "Tacto suave y fresco que envejece con gracia",
      "Costuras francesas dobles de alta resistencia",
      "Base de suspensión de cinchas elásticas Pirelli"
    ]
  },
  {
    "id": "prod-productos4-114",
    "department": "Hogar · Salas & Muebles",
    "name": "Sofá de 3 Plazas Thomasville Alta Densidad Cojines Reversibles Gris",
    "slug": "sofa-de-3-plazas-thomasville-alta-densidad-cojines-reversibles-gris-p4-114",
    "category": "hogar",
    "brand": "Thomasville",
    "subcategory": "salas",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 18499,
    "originalPrice": 22999,
    "rating": 5,
    "reviewsCount": 223,
    "image": "Productos 4/Sofá Costco Thomasville de 3 plazas..jpg",
    "description": "Proporciones generosas para descansar placenteramente con respaldo envolvente y tela texturizada resistente a garras y mascotas. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-114",
    "inStock": true,
    "features": [
      "Tela texturizada Pet-Friendly de alta durabilidad",
      "Profundidad de asiento ideal para ver películas y leer",
      "Armazón ensamblado con espigas y esquineros encolados",
      "Garantía extendida de confort Thomasville"
    ],
    "colors": [
      "Gris Perla",
      "Gris Oxford",
      "Arena Neutro",
      "Negro Piel"
    ],
    "colorHex": [
      "#D1D5DB",
      "#4B5563",
      "#D7C4A5",
      "#111827"
    ],
    "colorImages": {
      "Gris Perla": "Productos 4/Sofá Costco Thomasville de 3 plazas..jpg",
      "Gris Oxford": "Productos 4/Sofá Costco Thomasville de 3 plazas. 1.jpg",
      "Arena Neutro": "Productos 4/Sofá Costco Thomasville de 3 plazas. 2.jpg",
      "Negro Piel": "Productos 4/Sofá Costco Thomasville de 3 plazas. negro.jpg"
    }
  },
  {
    "id": "prod-productos4-115",
    "department": "Hogar · Salas & Muebles",
    "name": "Sofá Reclinable de Confort La-Z-Boy Paxton 3 Plazas Gris Ceniza",
    "slug": "sofa-reclinable-de-confort-la-z-boy-paxton-3-plazas-gris-ceniza-p4-115",
    "category": "hogar",
    "brand": "La-Z-Boy",
    "subcategory": "salas",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 16999,
    "originalPrice": 20999,
    "rating": 4.6,
    "reviewsCount": 240,
    "image": "Productos 4/Sofá La-Z-Boy Paxton de 3 plazas. gris.jpg",
    "description": "La máxima expresión del confort hogareño La-Z-Boy con cojines de soporte lumbar anatómico y tela afelpada suave en gris ceniza. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-115",
    "inStock": true,
    "features": [
      "Tecnología de confort ergonómico patentada La-Z-Boy",
      "Tapizado aterciopelado de alta densidad",
      "Respaldo con división anatómica para cuello y lumbares",
      "Chasis de acero reforzado patentado"
    ]
  },
  {
    "id": "prod-productos4-116",
    "department": "Hogar · Salas & Muebles",
    "name": "Sofá La-Z-Boy Paxton 3 Plazas Tapizado Antimanchas Ergonómico",
    "slug": "sofa-la-z-boy-paxton-3-plazas-tapizado-antimanchas-ergonomico-p4-116",
    "category": "hogar",
    "brand": "La-Z-Boy",
    "subcategory": "salas",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 16999,
    "originalPrice": 20999,
    "rating": 4.7,
    "reviewsCount": 257,
    "image": "Productos 4/Sofá La-Z-Boy Paxton de 3 plazas..jpg",
    "description": "Espacio espacioso para tres personas con asientos de rebote suave que alivian la presión en la columna tras una larga jornada de trabajo. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-116",
    "inStock": true,
    "features": [
      "Asientos con tecnología Memory Foam infusionada",
      "Tejido antimanchas iClean repulsivo a líquidos",
      "Diseño de brazos anchos para recargar la cabeza",
      "Fabricación de calidad premium"
    ]
  },
  {
    "id": "prod-productos4-117",
    "department": "Videojuegos & Consolas",
    "name": "Videojuego Sonic Frontiers Aventura en Zonas Abiertas",
    "slug": "videojuego-sonic-frontiers-aventura-en-zonas-abiertas-p4-117",
    "category": "videojuegos",
    "brand": "SEGA",
    "subcategory": "juegos",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 949,
    "originalPrice": 1299,
    "rating": 4.8,
    "reviewsCount": 54,
    "image": "Productos 4/Sonic Frontiers.jpg",
    "description": "Una experiencia nunca antes vista de Sonic the Hedgehog a través de cinco enormes islas de Starfall Islands con puzles, plataformas y combates colosales. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "VID-P4-117",
    "inStock": true,
    "features": [
      "Mundo de zonas abiertas con velocidad extrema",
      "Nuevo árbol de habilidades y movimientos de combate",
      "Niveles nostálgicos de ciberespacio a velocidad sónica",
      "Banda sonora épica con orquesta sinfónica y rock"
    ]
  },
  {
    "id": "prod-productos4-118",
    "department": "Moda · Ropa",
    "name": "Sudadera con Capucha Nike Club Fleece Unisex Negro Azabache",
    "slug": "sudadera-con-capucha-nike-club-fleece-unisex-negro-azabache-p4-118",
    "category": "ropa",
    "brand": "Nike",
    "subcategory": "sudaderas",
    "gender": "unisex",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1399,
    "originalPrice": 1699,
    "rating": 4.9,
    "reviewsCount": 71,
    "image": "Productos 4/Sudadera Nike Club Fleece negra.jpg",
    "description": "El polar favorito de todo el mundo con interior cepillado suave que brinda abrigo cálido y agradable sin añadir peso extra. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-118",
    "inStock": true,
    "features": [
      "Tejido Fleece cepillado en el interior ultrasuave",
      "Capucha ajustable con cordón trenzado",
      "Bolsillo delantero tipo canguro",
      "Logotipo Nike Futura bordado en blanco en el pecho"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-119",
    "department": "Moda · Ropa",
    "name": "Sudadera con Gorro Nike Club Fleece Interior Cepillado Gris Jaspe",
    "slug": "sudadera-con-gorro-nike-club-fleece-interior-cepillado-gris-jaspe-p4-119",
    "category": "ropa",
    "brand": "Nike",
    "subcategory": "sudaderas",
    "gender": "unisex",
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 1399,
    "originalPrice": 1699,
    "rating": 5,
    "reviewsCount": 88,
    "image": "Productos 4/Sudadera Nike Club Fleece.jpg",
    "description": "Tono gris jaspeado clásico con puños y dobladillo elásticos que mantienen la prenda en su sitio durante el movimiento cotidiano. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-119",
    "inStock": true,
    "features": [
      "Color Gris Jaspeado atemporal",
      "80% algodón y 20% poliéster para óptima retención de calor",
      "Ajuste holgado relajado para uso en capas",
      "Costuras reforzadas en hombros y sisas"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gris Jaspe",
      "Negro Azabache",
      "Verde Militar"
    ],
    "colorHex": [
      "#94A3B8",
      "#0F172A",
      "#4D5D53"
    ],
    "colorImages": {
      "Gris Jaspe": "Productos 4/Sudadera Nike Club Fleece.jpg",
      "Negro Azabache": "Productos 4/Sudadera Nike Club Fleece negra.jpg",
      "Verde Militar": "Productos 4/sudadera nike verde.jpg"
    }
  },
  {
    "id": "prod-productos4-120",
    "department": "Moda · Ropa",
    "name": "Sudadera Nike Sportswear Club Fleece Verde Militar",
    "slug": "sudadera-nike-sportswear-club-fleece-verde-militar-p4-120",
    "category": "ropa",
    "brand": "Nike",
    "subcategory": "sudaderas",
    "gender": "unisex",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1399,
    "originalPrice": 1699,
    "rating": 4.6,
    "reviewsCount": 105,
    "image": "Productos 4/sudadera nike verde.jpg",
    "description": "El tono verde oliva militar más codiciado de Nike con interior de felpa cepillada, bolsillo canguro y capucha forrada de algodón suave. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ROP-P4-120",
    "inStock": true,
    "features": [
      "Color Verde Militar urbano muy combinable",
      "Interior térmico de vellón de algodón cepillado",
      "Bolsillo tipo canguro para manos cálidas",
      "Logotipo blanco Nike bordado en relieve"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
  {
    "id": "prod-productos4-121",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Flagship Xiaomi 15 Ultra 512GB Óptica Leica Summilux Plata",
    "slug": "flagship-xiaomi-15-ultra-512gb-optica-leica-summilux-plata-p4-121",
    "category": "electronica",
    "brand": "Xiaomi",
    "subcategory": "smartphones",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 24999,
    "originalPrice": 29999,
    "rating": 4.7,
    "reviewsCount": 122,
    "image": "Productos 4/telefono xiamo 15 ultra.jpg",
    "description": "La joya fotográfica de Xiaomi en tono plata titanio con lente periscópico de 200 MP, sensor principal de 1\" y carga inalámbrica de 80W. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-121",
    "inStock": true,
    "features": [
      "Sensor principal Sony de 1 pulgada con apertura variable",
      "Teleobjetivo periscópico de 200 MP con estabilización OIS",
      "Pantalla AMOLED C8 con atenuación PWM de 1920 Hz",
      "Grabación Log de 10 bits profesional para creadores"
    ]
  },
  {
    "id": "prod-productos4-122",
    "department": "Deportes · Calzado de Running",
    "name": "Tenis Deportivos Nike Downshifter Transpirables Running Azul",
    "slug": "tenis-deportivos-nike-downshifter-transpirables-running-azul-p4-122",
    "category": "deportes",
    "brand": "Nike",
    "subcategory": "tenis",
    "gender": "hombre",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1799,
    "originalPrice": 2199,
    "rating": 4.8,
    "reviewsCount": 139,
    "image": "Productos 4/tenis nike 1.jpg",
    "description": "Zapatilla ligera de entrenamiento y carreras de 5K a 10K con banda de ajuste en el mediopié, amortiguación reactiva de espuma y suela flexible. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "DEP-P4-122",
    "inStock": true,
    "features": [
      "Malla transpirable en antepié y mediopié",
      "Banda de ajuste interno para máxima estabilidad al correr",
      "Espuma renovada más suave bajo el pie",
      "Suela de goma con surcos de flexión natural"
    ]
  },
  {
    "id": "prod-productos4-123",
    "department": "Deportes · Calzado de Running",
    "name": "Tenis de Entrenamiento Nike Air Zoom Pegasus Running Negro",
    "slug": "tenis-de-entrenamiento-nike-air-zoom-pegasus-running-negro-p4-123",
    "category": "deportes",
    "brand": "Nike",
    "subcategory": "tenis",
    "gender": "hombre",
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 2299,
    "originalPrice": 2799,
    "rating": 4.9,
    "reviewsCount": 156,
    "image": "Productos 4/tenis nike.jpg",
    "description": "El \"caballo de batalla con alas\" de Nike con unidades dobles Zoom Air, espuma React ligera y diseño duradero para acumular cientos de kilómetros. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "DEP-P4-123",
    "inStock": true,
    "features": [
      "Unidades Zoom Air en antepié y talón para rebote elástico",
      "Espuma Nike React suave y resistente",
      "Malla Engineered Mesh transpirable de ajuste ceñido",
      "Suela tipo gofre tipo Waffle con caucho resistente"
    ]
  },
  {
    "id": "prod-productos4-124",
    "department": "Hogar · Climatización & Confort",
    "name": "Ventilador de Pedestal Lasko 2520 Oscilante 3 Velocidades Ajustable",
    "slug": "ventilador-de-pedestal-lasko-2520-oscilante-3-velocidades-ajustable-p4-124",
    "category": "hogar",
    "brand": "Lasko",
    "subcategory": "climatizacion",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 1199,
    "originalPrice": 1499,
    "rating": 5,
    "reviewsCount": 173,
    "image": "Productos 4/Ventilador de pedestal Lasko 2520..jpg",
    "description": "Pedestal de 16 pulgadas con altura totalmente ajustable hasta 1.25 metros, oscilación de 90° para ventilar salas completas y aspas silenciosas. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-124",
    "inStock": true,
    "features": [
      "Altura ajustable de 95 a 125 cm",
      "Aspas de 16 pulgadas de diseño silencioso",
      "Cabezal inclinable hacia arriba o abajo",
      "Tecnología de fusible de seguridad Blue Plug de Lasko"
    ]
  },
  {
    "id": "prod-productos4-125",
    "department": "Hogar · Climatización & Confort",
    "name": "Ventilador de Techo con Luminaria LED Silencioso 5 Aspas Café",
    "slug": "ventilador-de-techo-con-luminaria-led-silencioso-5-aspas-cafe-p4-125",
    "category": "hogar",
    "brand": "Hunter Fan",
    "subcategory": "climatizacion",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 3299,
    "originalPrice": 3999,
    "rating": 4.6,
    "reviewsCount": 190,
    "image": "Productos 4/ventilador de techo con luz.jpg",
    "description": "Ventilador de techo de 52 pulgadas con 5 aspas reversibles café nogal / roble, motor WhisperWind ultrasilencioso y kit de luz LED integrado. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-125",
    "inStock": true,
    "features": [
      "Motor WhisperWind de alta potencia sin vibraciones",
      "5 aspas reversibles de madera con dos tonos seleccionables",
      "Kit de iluminación LED de bajo consumo incluido",
      "Motor reversible para función verano (fresco) e invierno (calor)"
    ]
  },
  {
    "id": "prod-productos4-126",
    "department": "Hogar · Climatización & Confort",
    "name": "Ventilador de Techo Moderno con Pantalla de Vidrio Opalino",
    "slug": "ventilador-de-techo-moderno-con-pantalla-de-vidrio-opalino-p4-126",
    "category": "hogar",
    "brand": "Hunter Fan",
    "subcategory": "climatizacion",
    "gender": null,
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 3499,
    "originalPrice": 4299,
    "rating": 4.7,
    "reviewsCount": 207,
    "image": "Productos 4/ventilador de techo de vidrio.jpg",
    "description": "Diseño contemporáneo con tulipa de cristal opalino esmerilado que difumina la luz suavemente, control de pared o remoto y acabados níquel pulido. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-126",
    "inStock": true,
    "features": [
      "Pantalla de vidrio opalino esmerilado de diseño moderno",
      "Acabado en níquel cepillado resistente a la corrosión",
      "3 velocidades de flujo de aire ajustable",
      "Incluye varilla de extensión para techos altos"
    ]
  },
  {
    "id": "prod-productos4-127",
    "department": "Hogar · Climatización & Confort",
    "name": "Ventilador de Techo Clásico 52 Pulgadas Reversible",
    "slug": "ventilador-de-techo-clasico-52-pulgadas-reversible-p4-127",
    "category": "hogar",
    "brand": "Hunter Fan",
    "subcategory": "climatizacion",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 2899,
    "originalPrice": 3499,
    "rating": 4.8,
    "reviewsCount": 224,
    "image": "Productos 4/ventilador de techo.jpg",
    "description": "Modelo clásico de gran caudal de aire ideal para dormitorios principales o salas familiares con cadenas de tracción tradicionales y motor blindado. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-127",
    "inStock": true,
    "features": [
      "Diámetro de 52\" (132 cm) de gran cobertura",
      "Cadenas de tracción tradicionales para luz y velocidad",
      "Motor blindado de cobre protegido contra sobrecalentamiento",
      "Certificación de eficiencia energética"
    ]
  },
  {
    "id": "prod-productos4-128",
    "department": "Hogar · Climatización & Confort",
    "name": "Ventilador de Circulación de Aire Honeywell TurboForce HT-900 Negro",
    "slug": "ventilador-de-circulacion-de-aire-honeywell-turboforce-ht-900-negro-p4-128",
    "category": "hogar",
    "brand": "Honeywell",
    "subcategory": "climatizacion",
    "gender": null,
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 799,
    "originalPrice": 999,
    "rating": 4.9,
    "reviewsCount": 241,
    "image": "Productos 4/Ventilador Honeywell TurboForce HT-900. 1.jpg",
    "description": "Diseño aerodinámico TurboForce que mueve el aire hasta 8 metros de distancia con 3 velocidades silenciosas y montaje opcional en pared. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-128",
    "inStock": true,
    "features": [
      "Mueve el aire hasta 8 metros de distancia",
      "Cabezal pivotante con inclinación de 90 grados",
      "3 velocidades de flujo de aire potente",
      "Ahorra hasta un 20% en costos de aire acondicionado"
    ]
  },
  {
    "id": "prod-productos4-129",
    "department": "Hogar · Climatización & Confort",
    "name": "Ventilador Compacto Honeywell TurboForce HT-900 Cabezal Pivotante 90°",
    "slug": "ventilador-compacto-honeywell-turboforce-ht-900-cabezal-pivotante-90-p4-129",
    "category": "hogar",
    "brand": "Honeywell",
    "subcategory": "climatizacion",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 799,
    "originalPrice": 999,
    "rating": 5,
    "reviewsCount": 258,
    "image": "Productos 4/Ventilador Honeywell TurboForce HT-900..jpg",
    "description": "Flujo de aire concentrado en formato compacto para escritorios, mesitas de noche o encimeras de cocina, con rejilla desmontable para fácil limpieza. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-129",
    "inStock": true,
    "features": [
      "Diseño compacto de mesa o pared",
      "Rejilla desmontable para rápida limpieza de aspas",
      "Operación 25% más silenciosa que modelos convencionales",
      "Consumo eléctrico ultra bajo"
    ]
  },
  {
    "id": "prod-productos4-130",
    "department": "Hogar · Climatización & Confort",
    "name": "Ventilador de Torre Lasko Wind Curve 2554 con Ionizador y Control",
    "slug": "ventilador-de-torre-lasko-wind-curve-2554-con-ionizador-y-control-p4-130",
    "category": "hogar",
    "brand": "Lasko",
    "subcategory": "climatizacion",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 1699,
    "originalPrice": 2199,
    "rating": 4.6,
    "reviewsCount": 55,
    "image": "Productos 4/Ventilador Lasko Wind Curve 2554..jpg",
    "description": "Elegante torre estilizada de 42 pulgadas con inserto de madera, ionizador purificador de aire Fresh Air, oscilación amplia y temporizador. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-130",
    "inStock": true,
    "features": [
      "Ionizador Fresh Air que purifica el aire de partículas",
      "Oscilación automática de cobertura amplia",
      "Temporizador programable de hasta 7.5 horas",
      "Control remoto multifuncional incluido con almacenaje en torre"
    ]
  },
  {
    "id": "prod-productos4-131",
    "department": "Hogar · Climatización & Confort",
    "name": "Ventilador de Mesa Ultracompacto Rowenta Turbo Silence Silencioso",
    "slug": "ventilador-de-mesa-ultracompacto-rowenta-turbo-silence-silencioso-p4-131",
    "category": "hogar",
    "brand": "Rowenta",
    "subcategory": "climatizacion",
    "gender": null,
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1599,
    "originalPrice": 1999,
    "rating": 4.7,
    "reviewsCount": 72,
    "image": "Productos 4/Ventilador Rowenta Turbo Silence. mini.jpg",
    "description": "La tecnología francesa de ventilación más silenciosa del mercado: emite solo 38 dB en modo noche con potente caudal de aire refrescante. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-131",
    "inStock": true,
    "features": [
      "Modo Noche silencioso de apenas 38 dB(A)",
      "4 aspas aerodinámicas de alto rendimiento",
      "Asa ergonómica de transporte integrado",
      "Rejilla de seguridad reforzada para niños"
    ]
  },
  {
    "id": "prod-productos4-132",
    "department": "Hogar · Climatización & Confort",
    "name": "Ventilador de Mesa Rowenta Turbo Silence Extreme 4 Velocidades",
    "slug": "ventilador-de-mesa-rowenta-turbo-silence-extreme-4-velocidades-p4-132",
    "category": "hogar",
    "brand": "Rowenta",
    "subcategory": "climatizacion",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 1999,
    "originalPrice": 2499,
    "rating": 4.8,
    "reviewsCount": 89,
    "image": "Productos 4/Ventilador Rowenta Turbo Silence..jpg",
    "description": "Potente función Turbo Boost que brinda una sensación inmediata de frescor intenso de hasta 45 m3/minuto, con oscilación automática de 120 grados. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-132",
    "inStock": true,
    "features": [
      "Función Turbo Boost de frescura inmediata",
      "Oscilación automática de 120° con orientación ajustable",
      "Motor 100% de cobre de larga vida útil",
      "Panel de perilla cromada con 4 niveles de velocidad"
    ]
  },
  {
    "id": "prod-productos4-133",
    "department": "Hogar · Climatización & Confort",
    "name": "Ventilador Circulador de Aire de Mesa Compacto Alta Potencia",
    "slug": "ventilador-circulador-de-aire-de-mesa-compacto-alta-potencia-p4-133",
    "category": "hogar",
    "brand": "AirComfort",
    "subcategory": "climatizacion",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 749,
    "originalPrice": 899,
    "rating": 4.9,
    "reviewsCount": 106,
    "image": "Productos 4/ventilador.jpg",
    "description": "Ventilador personal de mesa con hélice de 3 palas curvadas aerodinámicamente para generar una brisa refrescante constante con consumo mínimo. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "HOG-P4-133",
    "inStock": true,
    "features": [
      "Flujo de aire concentrado de vórtice",
      "2 niveles de velocidad con selector giratorio",
      "Cabezal ajustable en ángulo vertical",
      "Base estable con patas de goma antivibración"
    ]
  },
  {
    "id": "prod-productos4-134",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Flagship Xiaomi 15 Ultra 512GB Edición Cuero Negro y Rojo Leica",
    "slug": "flagship-xiaomi-15-ultra-512gb-edicion-cuero-negro-y-rojo-leica-p4-134",
    "category": "electronica",
    "brand": "Xiaomi",
    "subcategory": "smartphones",
    "gender": null,
    "badge": "Exclusivo",
    "badgeType": "quality",
    "price": 24999,
    "originalPrice": 29999,
    "rating": 5,
    "reviewsCount": 123,
    "image": "Productos 4/Xiaomi 15 Ultra. negro y rojo.jpg",
    "description": "La máxima expresión fotográfica móvil con sensor de 1 pulgada, cuádruple cámara Leica Summilux de 50 MP, zoom óptico 5x y procesador Snapdragon 8 Elite. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-134",
    "inStock": true,
    "features": [
      "Cámaras Leica Summilux con sensor Sony LYT-900 de 1 pulgada",
      "Procesador Qualcomm Snapdragon 8 Elite de 3nm",
      "Acabado en cuero vegano bitono negro y rojo Leica",
      "Grabación de video profesional 8K con Dolby Vision HDR"
    ]
  },
  {
    "id": "prod-productos4-135",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Flagship Xiaomi 15 Ultra 512GB Pantalla OLED 2K Negro Cerámica",
    "slug": "flagship-xiaomi-15-ultra-512gb-pantalla-oled-2k-negro-ceramica-p4-135",
    "category": "electronica",
    "brand": "Xiaomi",
    "subcategory": "smartphones",
    "gender": null,
    "badge": "Top Calidad",
    "badgeType": "quality",
    "price": 24499,
    "originalPrice": 29499,
    "rating": 4.6,
    "reviewsCount": 140,
    "image": "Productos 4/Xiaomi 15 Ultra.jpg",
    "description": "Elegante chasis cerámico ultra pulido con pantalla AMOLED 2K de 120Hz con 3,000 nits de brillo pico, batería de 6,000 mAh y carga HyperCharge 90W. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-135",
    "inStock": true,
    "features": [
      "Pantalla OLED 2K C8 con brillo pico de 3,000 nits",
      "Batería de ánodo de silicio de 6,000 mAh",
      "Carga ultrarrápida 90W por cable y 80W inalámbrica",
      "Certificación de resistencia al agua IP68"
    ],
    "colors": [
      "Negro Cerámica",
      "Cuero Negro y Rojo",
      "Plata Titanio"
    ],
    "colorHex": [
      "#0A0A0A",
      "#831843",
      "#E2E8F0"
    ],
    "colorImages": {
      "Negro Cerámica": "Productos 4/Xiaomi 15 Ultra.jpg",
      "Cuero Negro y Rojo": "Productos 4/Xiaomi 15 Ultra. negro y rojo.jpg",
      "Plata Titanio": "Productos 4/telefono xiamo 15 ultra.jpg"
    }
  },
  {
    "id": "prod-productos4-136",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Smartphone Xiaomi 15 256GB Snapdragon 8 Elite Blanco Nieve",
    "slug": "smartphone-xiaomi-15-256gb-snapdragon-8-elite-blanco-nieve-p4-136",
    "category": "electronica",
    "brand": "Xiaomi",
    "subcategory": "smartphones",
    "gender": null,
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 14999,
    "originalPrice": 17999,
    "rating": 4.7,
    "reviewsCount": 157,
    "image": "Productos 4/Xiaomi 15. 1.jpg",
    "description": "Gama alta compacto con pantalla plana de 6.36 pulgadas con biseles simétricos de solo 1.38 mm, lentes ópticos Leica de última generación y HyperOS 2. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-136",
    "inStock": true,
    "features": [
      "Diseño compacto y ergonómico con pantalla de 6.36\"",
      "Biseles ultradelgados de solo 1.38 mm",
      "Sistema operativo Xiaomi HyperOS 2 con IA avanzada",
      "Triple cámara Leica de 50 MP con telefoto flotante"
    ]
  },
  {
    "id": "prod-productos4-137",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Smartphone Xiaomi 15 256GB Diseño Compacto Verde Esmeralda",
    "slug": "smartphone-xiaomi-15-256gb-diseno-compacto-verde-esmeralda-p4-137",
    "category": "electronica",
    "brand": "Xiaomi",
    "subcategory": "smartphones",
    "gender": null,
    "badge": "Buen Fin",
    "badgeType": "sale",
    "price": 14999,
    "originalPrice": 17999,
    "rating": 4.8,
    "reviewsCount": 174,
    "image": "Productos 4/Xiaomi 15..jpg",
    "description": "Color Verde Esmeralda satinado con marco de aluminio aeronáutico de tacto prémium, altavoces estéreo duales simétricos y sensor ultrasónico en pantalla. Producto 100% original con garantía oficial departamental Callejón Mágico y envío seguro.",
    "sku": "ELE-P4-137",
    "inStock": true,
    "features": [
      "Marco de aluminio aeronáutico microcurvado",
      "Lector ultrasónico de huellas bajo pantalla ultrarrápido",
      "Carga rápida HyperCharge de 90W",
      "Triple certificación TÜV Rheinland de cuidado ocular"
    ],
    "colors": [
      "Verde Esmeralda",
      "Blanco Nieve"
    ],
    "colorHex": [
      "#059669",
      "#F8FAFC"
    ],
    "colorImages": {
      "Verde Esmeralda": "Productos 4/Xiaomi 15..jpg",
      "Blanco Nieve": "Productos 4/Xiaomi 15. 1.jpg"
    }
  }
];

// Exposición global para navegadores y entornos de módulos
if (typeof window !== 'undefined') {
  window.PRODUCTS_DATA = PRODUCTS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRODUCTS_DATA;
}
