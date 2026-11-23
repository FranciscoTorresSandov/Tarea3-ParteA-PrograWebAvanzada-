-- SOFT-12 | Subastas | datos de ejemplo del laboratorio
-- Ejecutar UNA SOLA VEZ DESPUES de 01-crear.sql, sobre la base recien creada.
-- Si ya hay datos, NO volver a ejecutar: hay correo unico y referencias por Id.
-- Fuente: Laboratorio_SQL_Server_Subastas.docx, paso 8.

USE Subastas;
GO
 
-- ── 1. Coleccionistas ──
--   Id 1 = Ana (col[0]) · Id 2 = Luis (col[1]) · Id 3 = Sofía (col[2])
INSERT INTO Coleccionistas (Nombre, Correo, Provincia, Registro) VALUES
    (N'Ana',   N'ana@club.com',   N'San José', '2026-08-01'),
    (N'Luis',  N'luis@club.com',  N'Heredia',  '2026-08-05'),
    (N'Sofía', N'sofia@club.com', N'Cartago',  '2026-09-12');
 
-- ── 2. Categorias ──
--   Id 1 = Monedas · 2 = Cómics · 3 = Juguetes · 4 = Vinilos
INSERT INTO Categorias (Nombre) VALUES
    (N'Monedas'), (N'Cómics'), (N'Juguetes'), (N'Vinilos');
 
-- ── 3. Articulos ──
--   Id 1 = Moneda · 2 = Spider-Man · 3 = Robot
--   duenoId col[0] → 1 (Ana) · col[1] → 2 (Luis)
INSERT INTO Articulos (Titulo, Anio, Conservacion, DuenoId) VALUES
    (N'Moneda de 1 colón 1937', 1937, N'Bueno',     1),
    (N'Spider-Man #1',          1990, N'Excelente', 2),
    (N'Robot de hojalata',      1965, N'Regular',   1);
 
-- ── 4. ArticuloCategorias ──
--   Una fila por cada elemento de categoriaIds
INSERT INTO ArticuloCategorias (ArticuloId, CategoriaId) VALUES
    (1, 1),   -- Moneda     → Monedas
    (2, 2),   -- Spider-Man → Cómics
    (3, 3),   -- Robot      → Juguetes
    (3, 4);   -- Robot      → Vinilos
 
-- ── 5. ArticuloFotos ──
--   Una fila por cada elemento de fotos. El Robot (fotos: []) no lleva.
INSERT INTO ArticuloFotos (ArticuloId, Url) VALUES
    (1, N'moneda-frente.jpg'),
    (1, N'moneda-reverso.jpg'),
    (2, N'spiderman.jpg');
 
-- ── 6. Subastas ──
--   Id 1 = la moneda, activa, sin ganador (sub[0])
--   Id 2 = el cómic, cerrada, ganó Sofía (sub[1])
INSERT INTO Subastas
    (ArticuloId, PrecioBase, Inicio, Fin, Estado, GanadorId) VALUES
    (1, 15000, '2026-11-10', '2026-11-20', N'Activa',  NULL),
    (2, 40000, '2026-11-01', '2026-11-08', N'Cerrada', 3);
 
-- ── 7. Pujas ──
--   RN-3: Ana (1) es dueña de la moneda; no puja en la subasta 1
INSERT INTO Pujas (SubastaId, ColeccionistaId, Monto, Fecha) VALUES
    (1, 2, 16000, '2026-11-11'),
    (1, 3, 18500, '2026-11-12'),
    (2, 1, 42000, '2026-11-03'),
    (2, 3, 45000, '2026-11-05');
GO
 
-- ── 8. Comprobación ──
--   Esperado: 3 · 4 · 3 · 4 · 3 · 2 · 4
SELECT N'Coleccionistas' AS Tabla, COUNT(*) AS Filas
FROM Coleccionistas
UNION ALL SELECT N'Categorias',         COUNT(*) FROM Categorias
UNION ALL SELECT N'Articulos',          COUNT(*) FROM Articulos
UNION ALL SELECT N'ArticuloCategorias', COUNT(*) FROM ArticuloCategorias
UNION ALL SELECT N'ArticuloFotos',      COUNT(*) FROM ArticuloFotos
UNION ALL SELECT N'Subastas',           COUNT(*) FROM Subastas
UNION ALL SELECT N'Pujas',              COUNT(*) FROM Pujas;
