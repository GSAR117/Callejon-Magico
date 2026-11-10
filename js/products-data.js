/**
 * CALLEJÓN MÁGICO — Catálogo Departamental Completo
 * Incluye colecciones oficiales de Moda, Tecnología, Hogar, Belleza, Deportes, Juguetes y Videojuegos.
 * Vinculado con el catálogo de imágenes reales de la carpeta Productos/.
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
    "price": 1899,
    "originalPrice": 2299,
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
    "price": 1299,
    "originalPrice": 1699,
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
    "badge": "Exclusivo",
    "badgeType": "bestseller",
    "price": 4899,
    "originalPrice": 6299,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "offerTitle": "Venta Flash Atelier",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00",
    "price": 2899,
    "originalPrice": 3899,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1599,
    "originalPrice": 1999,
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
    "badge": "Tendencia",
    "badgeType": "new",
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1299,
    "originalPrice": 1599,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
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
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 899,
    "originalPrice": 1199,
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
    "badge": "50% OFF",
    "badgeType": "offer",
    "price": 2199,
    "originalPrice": 4399,
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
    "offerTitle": "Edición Limitada Cronógrafo D'Avanti",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00",
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
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 1399,
    "originalPrice": 1799,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 27999,
    "originalPrice": 30499,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 26499,
    "originalPrice": 30999,
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
    "offerTitle": "Flash Deal Galaxy AI",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
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
    "price": 42999,
    "originalPrice": 47999,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 7999,
    "originalPrice": 10499,
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
    "offerTitle": "Venta Flash Tecnología 4K",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "tech-5",
    "name": "Pantalla LG OLED evo 65\" Serie C4 4K Cinema HDR 144Hz Dolby Atmos",
    "slug": "pantalla-lg-oled-evo-65-c4",
    "category": "electronica",
    "subcategory": "pantallas",
    "brand": "LG",
    "department": "Tecnología · Pantallas",
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 28999,
    "originalPrice": 38999,
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
    "offerTitle": "Cine en Casa LG OLED Cinema",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "tech-6",
    "name": "Audífonos Inalámbricos Sony WH-1000XM5 Cancelación Activa de Ruido",
    "slug": "audifonos-sony-wh1000xm5-anc",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Sony",
    "department": "Tecnología · Audio",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 6499,
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
    }
  },
  {
    "id": "tech-7",
    "name": "Audífonos Apple AirPods Pro (2.ª Generación) MagSafe USB-C",
    "slug": "apple-airpods-pro-2-usbc",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Apple",
    "department": "Tecnología · Audio",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 4799,
    "originalPrice": 5299,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 10499,
    "originalPrice": 11999,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 5799,
    "originalPrice": 6999,
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
    "offerTitle": "Especial Nintendo Switch OLED",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "tech-10",
    "name": "Apple Watch Ultra 2 GPS + Cellular Caja de Titanio 49mm",
    "slug": "apple-watch-ultra-2-titanio-49mm",
    "category": "electronica",
    "subcategory": "wearables",
    "brand": "Apple",
    "department": "Tecnología · Smartwatches",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 17499,
    "originalPrice": 19999,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 5299,
    "originalPrice": 6999,
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
    "offerTitle": "Oferta Especial Samsung",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00"
  },
  {
    "id": "tech-12",
    "name": "Laptop Gamer ASUS ROG Zephyrus G16 OLED Core Ultra 9 RTX 4070",
    "slug": "asus-rog-zephyrus-g16-oled-rtx4070",
    "category": "electronica",
    "subcategory": "computo",
    "brand": "ASUS",
    "department": "Tecnología · Cómputo",
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 38999,
    "originalPrice": 43999,
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
    "offerTitle": "Oferta Especial ASUS",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00"
  },
  {
    "id": "tech-13",
    "name": "Barra de Sonido Sonos Arc Premium Dolby Atmos para Cine en Casa",
    "slug": "sonos-arc-soundbar-dolby-atmos",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Sonos",
    "department": "Tecnología · Audio",
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 16999,
    "originalPrice": 19999,
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
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 14999,
    "originalPrice": 17499,
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
    "price": 21999,
    "originalPrice": 24999,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 24999,
    "originalPrice": 32999,
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
    "offerTitle": "Monitor Ultra Wide Odyssey OLED G9",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "tech-17",
    "name": "Bocina Portátil Bose SoundLink Max Bluetooth con Audio Espacial",
    "slug": "bose-soundlink-max-bluetooth",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Bose",
    "department": "Tecnología · Audio",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 7699,
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
    ]
  },
  {
    "id": "tech-18",
    "name": "Laptop Dell XPS 13 Plus Intel Core i7 16GB RAM 512GB SSD OLED 3.5K",
    "slug": "laptop-dell-xps-13-plus-oled",
    "category": "electronica",
    "subcategory": "computo",
    "brand": "Dell",
    "department": "Tecnología · Cómputo",
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 31999,
    "originalPrice": 36999,
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
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 8499,
    "originalPrice": 10299,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 899,
    "originalPrice": 1299,
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
    "offerTitle": "Oferta Especial Dior",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00"
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
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 12999,
    "originalPrice": 15499,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 16999,
    "originalPrice": 18999,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 4299,
    "originalPrice": 5199,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 2699,
    "originalPrice": 3499,
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
    "offerTitle": "Oferta del Día · Pistas & Acción",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "toy-4",
    "name": "Juego de Mesa Catan El Juego Edición Completa en Español",
    "slug": "juego-de-mesa-catan-espanol",
    "category": "juguetes",
    "subcategory": "juegos-mesa",
    "brand": "Devir",
    "department": "Juguetes · Juegos de Mesa",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 999,
    "originalPrice": 1299,
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
    "price": 9499,
    "originalPrice": 10999,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1099,
    "originalPrice": 1499,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 699,
    "originalPrice": 899,
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
    "offerTitle": "Oferta Especial Hasbro",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00"
  },
  {
    "id": "toy-8",
    "name": "Carro Buggy Eléctrico Montable Todo Terreno 12V con Batería y Control Remoto",
    "slug": "montable-electrico-jeep-12v-4x4",
    "category": "juguetes",
    "subcategory": "vehiculos",
    "brand": "Action Wheels",
    "department": "Juguetes · Montables Eléctricos",
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 6499,
    "originalPrice": 7999,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 849,
    "originalPrice": 1099,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 599,
    "originalPrice": 799,
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
    "offerTitle": "Oferta Especial Play-Doh",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00"
  },
  {
    "id": "toy-11",
    "name": "Nerf Elite 2.0 Lanzador Motorizado Turbine CS-18 con 36 Dardos",
    "slug": "nerf-elite-20-turbine-cs18",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Nerf",
    "department": "Juguetes · Lanzadores & Deportes",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1199,
    "originalPrice": 1499,
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
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 499,
    "originalPrice": 649,
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
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 1599,
    "originalPrice": 1899,
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
    "price": 1899,
    "originalPrice": 2299,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 1799,
    "originalPrice": 2399,
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
    "offerTitle": "Velocidad Extrema Auto RC 4x4",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "toy-16",
    "name": "Oso de Peluche Gigante 1.20m Extra Suave Hipoalergénico",
    "slug": "oso-peluche-gigante-120m",
    "category": "juguetes",
    "subcategory": "bebes",
    "brand": "D'Avanti Kids",
    "department": "Juguetes · Peluches & Bebés",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 799,
    "originalPrice": 999,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 3890,
    "originalPrice": 4290,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 4350,
    "originalPrice": 4790,
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
    "offerTitle": "Especial Perfumería Francesa",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "beauty-3",
    "name": "Estée Lauder Advanced Night Repair Serum Multi-Recuperación 50ml",
    "slug": "estee-lauder-advanced-night-repair-50ml",
    "category": "belleza",
    "subcategory": "cuidado-piel",
    "brand": "Estée Lauder",
    "department": "Belleza · Cuidado Facial Antiedad",
    "badge": "Favorito Belleza",
    "badgeType": "bestseller",
    "price": 2950,
    "originalPrice": 3490,
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
    "badge": "Tecnología Premio",
    "badgeType": "new",
    "price": 13999,
    "originalPrice": 15499,
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
    "badge": "Lujo Supremo",
    "badgeType": "bestseller",
    "price": 5290,
    "originalPrice": 5890,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 3650,
    "originalPrice": 4190,
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
    "offerTitle": "Aromas de Alta Costura YSL",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "beauty-7",
    "name": "La Mer Crème de la Mer Crema Hidratante Milagrosa 60ml",
    "slug": "la-mer-creme-de-la-mer-60ml",
    "category": "belleza",
    "subcategory": "cuidado-piel",
    "brand": "La Mer",
    "department": "Belleza · Skincare de Lujo Extremo",
    "badge": "Fórmula de Culto",
    "badgeType": "bestseller",
    "price": 8650,
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
    ]
  },
  {
    "id": "beauty-8",
    "name": "Charlotte Tilbury Magic Cream & Pillow Talk Luxury Palette Set",
    "slug": "charlotte-tilbury-magic-cream-pillow-talk-set",
    "category": "belleza",
    "subcategory": "maquillaje",
    "brand": "Charlotte Tilbury",
    "department": "Belleza · Maquillaje de Alta Gama",
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 3450,
    "originalPrice": 3950,
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
    "offerTitle": "Tratamiento Privé Charlotte Tilbury",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "beauty-9",
    "name": "Lancôme Advanced Génifique Serum Rejuvenecedor 50ml",
    "slug": "lancome-advanced-genifique-serum-50ml",
    "category": "belleza",
    "subcategory": "cuidado-piel",
    "brand": "Lancôme",
    "department": "Belleza · Cuidado Facial",
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 2690,
    "originalPrice": 3150,
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
    "offerTitle": "Oferta Especial Lancôme",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00"
  },
  {
    "id": "beauty-10",
    "name": "Bleu de Chanel Parfum 100ml",
    "slug": "bleu-de-chanel-parfum-100ml",
    "category": "belleza",
    "subcategory": "perfumeria-hombre",
    "brand": "Chanel",
    "department": "Belleza · Perfumería Masculina",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 4450,
    "originalPrice": 4890,
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
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 3390,
    "originalPrice": 3890,
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
    "badge": "Última Innovación",
    "badgeType": "new",
    "price": 11999,
    "originalPrice": 12999,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1390,
    "originalPrice": 1690,
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
    "badge": "Favorito Pro",
    "badgeType": "new",
    "price": 1890,
    "originalPrice": 2250,
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
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 1550,
    "originalPrice": 1790,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1250,
    "originalPrice": 1490,
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
    "price": 5499,
    "originalPrice": 5999,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 3599,
    "originalPrice": 4299,
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
    "offerTitle": "Oferta Running Ultraboost",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "sport-3",
    "name": "Caminadora Eléctrica NordicTrack T Series con Inclinación y Pantalla HD",
    "slug": "caminadora-nordictrack-t-series-hd",
    "category": "deportes",
    "subcategory": "fitness",
    "brand": "NordicTrack",
    "department": "Deportes · Fitness & Máquinas de Gimnasio",
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 18999,
    "originalPrice": 22999,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 8999,
    "originalPrice": 10499,
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
    "badge": "Tecnología Élite",
    "badgeType": "new",
    "price": 19499,
    "originalPrice": 21999,
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
    "badge": "Favorito Pro",
    "badgeType": "bestseller",
    "price": 6499,
    "originalPrice": 7299,
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
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 4999,
    "originalPrice": 5699,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 1199,
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
    "offerTitle": "Oferta del Día · Hidratación Pro",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00",
    "colorImages": {
      "Verde Salvia Original": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L.jpg",
      "Negro Mate": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L negro.jpg",
      "Rosa Cuarzo": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L rosa.jpg",
      "Gris Glaciar": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L gris.jpg",
      "Rojo Escarlata": "Productos 3/Termo Stanley Quencher H2.0 FlowState 1.18L  rojo.jpg"
    }
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
    "price": 2699,
    "originalPrice": 2999,
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
    "badge": "Premio Innovación",
    "badgeType": "new",
    "price": 8999,
    "originalPrice": 9999,
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
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 9499,
    "originalPrice": 11999,
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
    "badge": "Clásico de Campeones",
    "badgeType": "bestseller",
    "price": 5299,
    "originalPrice": 5999,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 6499,
    "originalPrice": 7299,
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
    "badge": "Ícono Mundial",
    "badgeType": "bestseller",
    "price": 4399,
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
    ]
  },
  {
    "id": "sport-15",
    "name": "Banco de Pesas Multifuncional Multiposición Reclinable Profesional",
    "slug": "banco-pesas-multifuncional-multiposicion",
    "category": "deportes",
    "subcategory": "fitness",
    "brand": "D'Avanti Pro Sport",
    "department": "Deportes · Pesas & Gimnasio en Casa",
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 3699,
    "originalPrice": 4499,
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
    "offerTitle": "Oferta Especial D'Avanti Pro Sport",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00"
  },
  {
    "id": "sport-16",
    "name": "Playera de Compresión Nike Pro Dri-FIT Tight Fit Manga Larga",
    "slug": "playera-compresion-nike-pro-dri-fit",
    "category": "deportes",
    "subcategory": "ropa-tecnica",
    "brand": "Nike",
    "department": "Deportes · Ropa Técnica & Fitness",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 899,
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
    ]
  },
  {
    "id": "home-1",
    "name": "Cafetera Espresso Automática Barista Touch con Molino Integrado",
    "slug": "cafetera-espresso-automatica-barista-touch-breville",
    "category": "hogar",
    "subcategory": "electrodomesticos",
    "brand": "Breville",
    "department": "Hogar · Gourmet & Café",
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 18999,
    "originalPrice": 22499,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 14499,
    "originalPrice": 17299,
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
    "offerTitle": "Oferta del Día · Chef Gourmet",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
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
    "price": 21999,
    "originalPrice": 25999,
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
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 24999,
    "originalPrice": 29999,
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
    "price": 15499,
    "originalPrice": 17999,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 8999,
    "originalPrice": 11499,
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
    "offerTitle": "Especial Repostería KitchenAid",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "home-7",
    "name": "Comedor Contemporáneo 6 Plazas en Madera de Roble Macizo y Tapiz Lino",
    "slug": "comedor-contemporaneo-6-plazas-roble-ashley",
    "category": "hogar",
    "subcategory": "muebles",
    "brand": "Ashley Furniture",
    "department": "Hogar · Comedores & Mesas",
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 19899,
    "originalPrice": 23999,
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
    "badge": "Exclusivo",
    "badgeType": "bestseller",
    "price": 16499,
    "originalPrice": 19999,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 2899,
    "originalPrice": 3899,
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
    "offerTitle": "Confort Hotelero Satén Egipcio",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "home-10",
    "name": "Freidora de Aire DualZone 9.5 Litros Doble Canastilla Smart XL",
    "slug": "freidora-de-aire-dualzone-9-5l-ninja",
    "category": "hogar",
    "subcategory": "electrodomesticos",
    "brand": "Ninja",
    "department": "Hogar · Cocina Eléctrica",
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 4699,
    "originalPrice": 5899,
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
    "offerTitle": "Cocina Saludable DualZone XL",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
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
    "price": 3899,
    "originalPrice": 4899,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 3999,
    "originalPrice": 5199,
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
    "offerTitle": "Barista en Casa Nespresso Vertuo",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "home-13",
    "name": "Lámpara de Techo Colgante Moderna LED en Cristal y Acero",
    "slug": "lampara-de-pie-arco-marmol-laton-boconcept",
    "category": "hogar",
    "subcategory": "decoracion",
    "brand": "BoConcept",
    "department": "Hogar · Iluminación & Decoración",
    "badge": "Exclusivo",
    "badgeType": "bestseller",
    "price": 6499,
    "originalPrice": 7999,
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
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 7899,
    "originalPrice": 9499,
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
    "price": 4999,
    "originalPrice": 6299,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 1299,
    "originalPrice": 1699,
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
    "offerTitle": "Oferta Especial Zara Home",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00"
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 10499,
    "originalPrice": 11999,
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
    "offerTitle": "Venta Relámpago Consolas Next-Gen",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
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
    "badge": "Exclusivo",
    "badgeType": "bestseller",
    "price": 8299,
    "originalPrice": 8999,
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
    "badge": "🏆 GOTY",
    "badgeType": "bestseller",
    "price": 1299,
    "originalPrice": 1699,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
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
    "badge": "Clásico FPS",
    "badgeType": "bestseller",
    "price": 699,
    "originalPrice": 999,
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
    "badge": "⭐ En oferta",
    "badgeType": "offer",
    "price": 899,
    "originalPrice": 1199,
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
    "offerTitle": "Expansión del Año Elden Ring Erdtree",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 3299,
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
    "offerTitle": "Pro Gaming Gear DualSense Edge",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
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
    "badge": "Top Rated",
    "badgeType": "bestseller",
    "price": 4999,
    "originalPrice": 6499,
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
    "badge": "🎮 Ultimate Gaming",
    "badgeType": "bestseller",
    "price": 58999,
    "originalPrice": 69999,
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
    "badge": "Envío gratis",
    "badgeType": "shipping",
    "price": 2199,
    "originalPrice": 2799,
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
    "badge": "Experiencia inmersiva",
    "badgeType": "new",
    "price": 12999,
    "originalPrice": 14999,
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
    "badge": "🔥 Lanzamiento",
    "badgeType": "bestseller",
    "price": 1599,
    "originalPrice": 1799,
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
    "badge": "Exclusivo",
    "badgeType": "new",
    "price": 1699,
    "originalPrice": 1999,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 1299,
    "originalPrice": 1599,
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
    "offerTitle": "Combate Táctico Call of Duty",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
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
    "badge": "Edición Aniversario",
    "badgeType": "bestseller",
    "price": 1499,
    "originalPrice": 1699,
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
    "badge": "Recomendado",
    "badgeType": "bestseller",
    "price": 1199,
    "originalPrice": 1499,
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
    "badge": "Clásico Imperdible",
    "badgeType": "bestseller",
    "price": 899,
    "originalPrice": 1099,
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
    "price": 999,
    "originalPrice": 1299,
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
    "badge": "Retrocompatible",
    "badgeType": "offer",
    "price": 699,
    "originalPrice": 899,
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
    "offerTitle": "Oferta Especial Xbox Game Studios",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00"
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
    "badge": "Remasterizado",
    "badgeType": "bestseller",
    "price": 799,
    "originalPrice": 999,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 899,
    "originalPrice": 1299,
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
    "offerTitle": "Oferta Especial Ubisoft",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00"
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
    "badge": "Favorito",
    "badgeType": "bestseller",
    "price": 799,
    "originalPrice": 1099,
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
    "badge": "Clásico Táctico",
    "badgeType": "offer",
    "price": 599,
    "originalPrice": 799,
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
    "offerTitle": "Oferta Especial Ubisoft",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00"
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
    "badge": "🏆 Top Ventas",
    "badgeType": "bestseller",
    "price": 1399,
    "originalPrice": 1699,
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
    "badge": "Obra Maestra Visual",
    "badgeType": "new",
    "price": 1299,
    "originalPrice": 1499,
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
    "badge": "Exploración Espacial",
    "badgeType": "bestseller",
    "price": 1499,
    "originalPrice": 1799,
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
    "badge": "⭐ Éxito Mundial",
    "badgeType": "bestseller",
    "price": 1299,
    "originalPrice": 1499,
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
    "badge": "Imprescindible",
    "badgeType": "bestseller",
    "price": 1199,
    "originalPrice": 1399,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 899,
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
    "offerTitle": "Oferta Especial Electronic Arts / Respawn",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00"
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
    "badge": "Colección Clásica",
    "badgeType": "new",
    "price": 749,
    "originalPrice": 899,
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
    "badge": "Familiar",
    "badgeType": "offer",
    "price": 649,
    "originalPrice": 849,
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
    "offerTitle": "Oferta Especial Warner Bros. Games / TT Games",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00"
  },
  {
    "id": "toy-clm-1",
    "department": "Juguetes & Niños",
    "name": "Barbie Coffee Shop Playset Barista con Cafetera y Pastelillos",
    "slug": "barbie-coffee-shop-playset",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Barbie / Mattel",
    "badge": "Favorito infantil",
    "badgeType": "bestseller",
    "price": 899,
    "originalPrice": 1099,
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
    "badge": "Coleccionable",
    "badgeType": "new",
    "price": 1499,
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
    ]
  },
  {
    "id": "toy-clm-3",
    "department": "Juguetes & Niños",
    "name": "Halo Master Chief Spartan-117 Figura Articulada 30cm Deluxe",
    "slug": "halo-master-chief-figura-30cm",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Jazwares / Halo",
    "badge": "Deluxe",
    "badgeType": "bestseller",
    "price": 999,
    "originalPrice": 1299,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 4899,
    "originalPrice": 5699,
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
    "offerTitle": "Construcción Épica Halo UNSC",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "toy-clm-5",
    "department": "Juguetes & Niños",
    "name": "Mega Construx Halo UNSC Elephant Sandnest Base Blindada",
    "slug": "mega-construx-halo-elephant-sandnest",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "Mega Construx",
    "badge": "Construcción Épica",
    "badgeType": "new",
    "price": 3299,
    "originalPrice": 3899,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 799,
    "originalPrice": 999,
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
    "offerTitle": "Vehículos Sci-Fi Halo Banshee",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "toy-clm-7",
    "department": "Juguetes & Niños",
    "name": "LEGO Halo MOC Escuadrón Spartan Fireteam Combate Terrestre",
    "slug": "lego-halo-fireteam-spartan",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "LEGO Custom / Halo",
    "badge": "Exclusivo Colección",
    "badgeType": "new",
    "price": 1299,
    "originalPrice": 1499,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 599,
    "originalPrice": 699,
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
    "badge": "Set Especial",
    "badgeType": "bestseller",
    "price": 1699,
    "originalPrice": 1999,
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
    "badge": "Favorito",
    "badgeType": "bestseller",
    "price": 1199,
    "originalPrice": 1399,
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
    "badge": "Coleccionable",
    "badgeType": "bestseller",
    "price": 699,
    "originalPrice": 849,
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
    "badge": "Pack Ahorro",
    "badgeType": "bestseller",
    "price": 499,
    "originalPrice": 599,
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
    "badge": "Diseño Moderno",
    "badgeType": "bestseller",
    "price": 12999,
    "originalPrice": 15999,
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
    "badge": "Lujo & Confort",
    "badgeType": "offer",
    "price": 18999,
    "originalPrice": 24999,
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
    "offerTitle": "Venta Especial Hogar · Comedores de Lujo",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-25T23:59:59-06:00",
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 1199,
    "originalPrice": 1499,
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
    "offerTitle": "Especial Audio & Potencia BD92",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "tech-clm-2",
    "department": "Tecnología · Electrónica",
    "name": "Bafle Bocina Kaiser Bluetooth Alta Potencia Karaoke con Micrófono",
    "slug": "bocina-kaiser-bluetooth-potencia",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Kaiser",
    "badge": "Modo Fiesta",
    "badgeType": "bestseller",
    "price": 1699,
    "originalPrice": 2099,
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
    "badge": "Ultra Portátil",
    "badgeType": "new",
    "price": 499,
    "originalPrice": 599,
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
    "badge": "Sumergible IPX7",
    "badgeType": "bestseller",
    "price": 699,
    "originalPrice": 899,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 899,
    "originalPrice": 1199,
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
    "offerTitle": "Sonido 360° Azul Cobalto",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "tech-clm-6",
    "department": "Tecnología · Electrónica",
    "name": "Audífonos Diadema Sony Retro Studio Monitor Bass Boost",
    "slug": "audifonos-sony-diadema-studio",
    "category": "electronica",
    "subcategory": "audio",
    "brand": "Sony",
    "badge": "Sonido Fiel",
    "badgeType": "bestseller",
    "price": 1299,
    "originalPrice": 1599,
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
    "badge": "Hi-Res Audio",
    "badgeType": "new",
    "price": 1599,
    "originalPrice": 1999,
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
    "badge": "Piel Genuina",
    "badgeType": "bestseller",
    "price": 3899,
    "originalPrice": 4699,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 1899,
    "originalPrice": 2299,
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
    "offerTitle": "Semana de la Moda Callejón",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
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
    "badge": "Básico Chic",
    "badgeType": "new",
    "price": 799,
    "originalPrice": 999,
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
    "badge": "Fresco & Ligero",
    "badgeType": "bestseller",
    "price": 899,
    "originalPrice": 1149,
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
    "badge": "Clásico",
    "badgeType": "bestseller",
    "price": 999,
    "originalPrice": 1199,
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
    "badge": "Esencial",
    "badgeType": "bestseller",
    "price": 1099,
    "originalPrice": 1299,
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
    "badge": "Confort Térmico",
    "badgeType": "new",
    "price": 899,
    "originalPrice": 1149,
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
    "badge": "Minimalista",
    "badgeType": "bestseller",
    "price": 949,
    "originalPrice": 1199,
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
    "badge": "Nueva Temporada",
    "badgeType": "new",
    "price": 1199,
    "originalPrice": 1499,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1299,
    "originalPrice": 1599,
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
    "badge": "Clásico Denim",
    "badgeType": "bestseller",
    "price": 1199,
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
    ]
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
    "badge": "Temporada Verano",
    "badgeType": "new",
    "price": 699,
    "originalPrice": 899,
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
    "badge": "Comodidad Diaria",
    "badgeType": "bestseller",
    "price": 899,
    "originalPrice": 1199,
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
    "badge": "Hecho a Mano",
    "badgeType": "bestseller",
    "price": 2499,
    "originalPrice": 2999,
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
    "badge": "Exclusivo",
    "badgeType": "new",
    "price": 2299,
    "originalPrice": 2799,
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
    "badge": "Etiqueta Rigurosa",
    "badgeType": "bestseller",
    "price": 2199,
    "originalPrice": 2599,
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
    "badge": "Anti-adherente Pro",
    "badgeType": "bestseller",
    "price": 2499,
    "originalPrice": 3199,
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
    "badge": "Grado Profesional",
    "badgeType": "new",
    "price": 3199,
    "originalPrice": 3899,
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
    "badge": "Programable 24h",
    "badgeType": "bestseller",
    "price": 1499,
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
    ]
  },
  {
    "id": "home-clm-4",
    "department": "Hogar, Muebles & Gourmet",
    "name": "Cafetera Espresso Clásica con Vaporizador de Alta Presión 15 Bares",
    "slug": "cafetera-espresso-clasica-15bares",
    "category": "hogar",
    "subcategory": "electrodomesticos",
    "brand": "De'Longhi / Callejón",
    "badge": "Espresso Auténtico",
    "badgeType": "bestseller",
    "price": 2899,
    "originalPrice": 3499,
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
    "badge": "Descanso Óptimo",
    "badgeType": "bestseller",
    "price": 3499,
    "originalPrice": 4299,
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
    "badge": "Confort Hotelero",
    "badgeType": "bestseller",
    "price": 6899,
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
    ]
  },
  {
    "id": "home-clm-7",
    "department": "Hogar, Muebles & Gourmet",
    "name": "Robot Aspirador Inteligente Láser Mapping con Sensores Anticaída",
    "slug": "robot-aspirador-inteligente-laser",
    "category": "hogar",
    "subcategory": "electrodomesticos",
    "brand": "Xiaomi / Callejón Smart",
    "badge": "Navegación LDS",
    "badgeType": "new",
    "price": 4299,
    "originalPrice": 5199,
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
    "badge": "Icono Urbano",
    "badgeType": "bestseller",
    "price": 2799,
    "originalPrice": 3299,
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
    "badge": "Stealth Black",
    "badgeType": "new",
    "price": 2499,
    "originalPrice": 2899,
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
    "badge": "En oferta",
    "badgeType": "offer",
    "price": 899,
    "originalPrice": 1199,
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
    "offerTitle": "Fútbol y Cancha Nike Weekend",
    "offerStartDate": "2026-11-06T00:00:00-06:00",
    "offerEndDate": "2026-11-20T23:59:59-06:00"
  },
  {
    "id": "toy-clm-15",
    "name": "Lanzador Nerf Fortnite B-AR Motorizado con Ráfaga de Dardos",
    "slug": "lanzador-nerf-fortnite-b-ar",
    "category": "juguetes",
    "subcategory": "figuras",
    "brand": "Nerf",
    "department": "Juguetes · Lanzadores & Deportes",
    "badge": "Popular",
    "badgeType": "bestseller",
    "price": 1399,
    "originalPrice": 1699,
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
    "price": 999,
    "originalPrice": 1249,
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
    "badge": "Colección",
    "badgeType": "bestseller",
    "price": 1899,
    "originalPrice": 2299,
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
    "badge": "Ultra Alcance",
    "badgeType": "bestseller",
    "price": 1599,
    "originalPrice": 1999,
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
    "badge": "Esencial",
    "badgeType": "bestseller",
    "price": 1099,
    "originalPrice": 1299,
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
    "price": 1499,
    "originalPrice": 1899,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 699,
    "originalPrice": 999,
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
    "badge": "Popular",
    "badgeType": "bestseller",
    "price": 799,
    "originalPrice": 1099,
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
    "badge": "Tendencia",
    "badgeType": "new",
    "price": 1399,
    "originalPrice": 1799,
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
    "badge": "Colección Gala",
    "badgeType": "bestseller",
    "price": 2499,
    "originalPrice": 3299,
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
    "badge": "Ejecutivo",
    "badgeType": "new",
    "price": 2199,
    "originalPrice": 2799,
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
    "badge": "Clásico Esencial",
    "badgeType": "bestseller",
    "price": 1299,
    "originalPrice": 1699,
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
    "badge": "Popular",
    "badgeType": "new",
    "price": 1599,
    "originalPrice": 1999,
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
    "badge": "Diseño Exclusivo",
    "badgeType": "bestseller",
    "price": 3899,
    "originalPrice": 4799,
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
    "badge": "Esencial",
    "badgeType": "new",
    "price": 1899,
    "originalPrice": 2399,
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
    "badge": "Popular",
    "badgeType": "bestseller",
    "price": 899,
    "originalPrice": 1299,
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
    "badge": "Lujo Accesible",
    "badgeType": "new",
    "price": 1199,
    "originalPrice": 1599,
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
    "badge": "Protección UV400",
    "badgeType": "bestseller",
    "price": 699,
    "originalPrice": 999,
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
    "badge": "Básico",
    "badgeType": "new",
    "price": 399,
    "originalPrice": 549,
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
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 699,
    "originalPrice": 899,
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
    "badge": "Joya Retro",
    "badgeType": "bestseller",
    "price": 4999,
    "originalPrice": 5999,
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
    "badge": "Estimulación",
    "badgeType": "bestseller",
    "price": 899,
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
    ]
  },
  {
    "id": "toy-clm-21",
    "name": "Set LEGO City Persecución en Auto y Moto de Policía con Minifiguras",
    "slug": "lego-city-persecucion-policia-auto-moto",
    "category": "juguetes",
    "subcategory": "construccion",
    "brand": "LEGO",
    "department": "Juguetes · Construcción & LEGO City",
    "badge": "Nuevo",
    "badgeType": "new",
    "price": 599,
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
    ]
  },
  {
    "id": "tech-clm-8",
    "department": "Tecnología · Celulares & Smartphones",
    "name": "Smartphone Honor X6e 128GB Cámara Triple 50MP Pantalla 90Hz Batería 5200mAh",
    "slug": "honor-x6e-128gb-negro",
    "category": "electronica",
    "subcategory": "celulares",
    "brand": "Honor",
    "badge": "Popular",
    "badgeType": "bestseller",
    "price": 3299,
    "originalPrice": 3899,
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
    "badge": "2 en 1",
    "badgeType": "new",
    "price": 6499,
    "originalPrice": 7999,
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
    "badge": "Histórico",
    "badgeType": "bestseller",
    "price": 599,
    "originalPrice": 899,
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
    "badge": "Épico",
    "badgeType": "bestseller",
    "price": 499,
    "originalPrice": 799,
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
    "badge": "Popular",
    "badgeType": "new",
    "price": 549,
    "originalPrice": 849,
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
    "badge": "Top Ventas",
    "badgeType": "bestseller",
    "price": 1199,
    "originalPrice": 1599,
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
    "badge": "Terror & Acción",
    "badgeType": "bestseller",
    "price": 399,
    "originalPrice": 599,
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
    "badge": "Popular",
    "badgeType": "bestseller",
    "price": 1399,
    "originalPrice": 1699,
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
    "badge": "Aclamado",
    "badgeType": "bestseller",
    "price": 899,
    "originalPrice": 1299,
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
    "badge": "Clásico Histórico",
    "badgeType": "bestseller",
    "price": 599,
    "originalPrice": 899,
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
    "badge": "Próximo Lanzamiento",
    "badgeType": "new",
    "price": 1599,
    "originalPrice": 1799,
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
    "badge": "Obra Maestra",
    "badgeType": "bestseller",
    "price": 649,
    "originalPrice": 899,
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
    "badge": "Nueva Era",
    "badgeType": "new",
    "price": 1599,
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
    }
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
    "badge": "Clásico de Culto",
    "badgeType": "bestseller",
    "price": 599,
    "originalPrice": 849,
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
    "badge": "Más vendido",
    "badgeType": "bestseller",
    "price": 1399,
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
    }
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
    "badge": "Edición Especial",
    "badgeType": "new",
    "price": 1499,
    "originalPrice": 1799,
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
    "badge": "Popular",
    "badgeType": "bestseller",
    "price": 1499,
    "originalPrice": 1799,
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
    "badge": "Gamer Pro",
    "badgeType": "bestseller",
    "price": 1699,
    "originalPrice": 2099,
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
  }
];
