-- SOFT-12 | Subastas | consultas y pruebas del laboratorio
-- Requisito: ejecutar antes 01-crear.sql y 02-datos.sql.
-- Las pruebas 3 a 6 ESTAN DISEÑADAS PARA FALLAR: ejecutar UNA POR UNA
-- (seleccionar sentencia individual en VS Code con SQL Server mssql).
-- El experimento final demuestra una regla de negocio que la base NO valida.
-- Fuente: Laboratorio_SQL_Server_Subastas.docx, pasos 9 y 10.

USE Subastas;
GO
 
-- ── 1. Uno a muchos: cada artículo con el nombre de su dueño ──
SELECT a.Titulo, c.Nombre AS Dueno
FROM Articulos a
JOIN Coleccionistas c ON c.Id = a.DuenoId
ORDER BY a.Id;
 
-- ── 2. Muchos a muchos: las categorías de cada artículo ──
SELECT a.Titulo, cat.Nombre AS Categoria
FROM Articulos a
JOIN ArticuloCategorias ac ON ac.ArticuloId = a.Id
JOIN Categorias cat        ON cat.Id = ac.CategoriaId
ORDER BY a.Id, cat.Nombre;

-- AVISO: pruebas negativas a ejecutar individualmente.
-- ── 3. Llave foránea: la subasta 99 no existe (Msg 547) ──
INSERT INTO Pujas (SubastaId, ColeccionistaId, Monto)
VALUES (99, 2, 20000);
 
-- ── 4. UNIQUE (RN-1): el correo ya existe (Msg 2627) ──
INSERT INTO Coleccionistas (Nombre, Correo)
VALUES (N'Otra Ana', N'ana@club.com');
 
-- ── 5. CHECK (RN-5): 'Malo' no es válido (Msg 547) ──
INSERT INTO Articulos (Titulo, Conservacion, DuenoId)
VALUES (N'Llavero', N'Malo', 2);
 
-- ── 6. Borrar un dueño que tiene artículos (Msg 547) ──
DELETE FROM Coleccionistas WHERE Id = 1;

-- ── 7. Lo que la base NO valida: RN-2 (la puja debe superar) ──
--   La base acepta esta puja de 100 aunque la más alta es 18 500.
--   Esa regla compara con otras filas: la validará el API.
INSERT INTO Pujas (SubastaId, ColeccionistaId, Monto)
VALUES (1, 2, 100);
 
--   Deshacer la prueba
DELETE FROM Pujas WHERE Monto = 100;
