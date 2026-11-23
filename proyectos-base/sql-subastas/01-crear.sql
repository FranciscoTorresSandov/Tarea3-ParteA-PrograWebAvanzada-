-- SOFT-12 | Laboratorio de Subastas en SQL Server 2025 Express
-- IMPORTANTE: ESTE ARCHIVO ELIMINA y RECREA la base Subastas.
-- Ejecutar UNICAMENTE en un servidor de practica, tras respaldar lo necesario.
-- Fuente: Laboratorio_SQL_Server_Subastas.docx, pasos 4 a 7.

-- ── 0. Empezar de cero ──
-- Desde master: no se puede borrar la base en la que uno está.
USE master;
GO
 
IF DB_ID(N'Subastas') IS NOT NULL
BEGIN
    -- Cierra las conexiones abiertas a la base para poder borrarla
    ALTER DATABASE Subastas SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE Subastas;
END
GO
 
CREATE DATABASE Subastas;
GO
 
USE Subastas;
GO


-- ── 1. Tablas que no apuntan a ninguna otra ──
 
-- colección coleccionistas → tabla Coleccionistas
CREATE TABLE Coleccionistas (
    Id        INT IDENTITY(1,1) NOT NULL,   -- reemplaza al _id
    Nombre    NVARCHAR(80)  NOT NULL,
    Correo    NVARCHAR(120) NOT NULL,
    Provincia NVARCHAR(40)  NULL,           -- opcional
    Registro  DATE          NOT NULL
        CONSTRAINT DF_Coleccionistas_Registro
        DEFAULT CAST(GETDATE() AS DATE),
    CONSTRAINT PK_Coleccionistas PRIMARY KEY (Id),
    -- RN-1: el correo no se repite
    CONSTRAINT UQ_Coleccionistas_Correo UNIQUE (Correo)
);
 
-- colección categorias → tabla Categorias
CREATE TABLE Categorias (
    Id     INT IDENTITY(1,1) NOT NULL,
    Nombre NVARCHAR(50) NOT NULL,
    CONSTRAINT PK_Categorias PRIMARY KEY (Id),
    CONSTRAINT UQ_Categorias_Nombre UNIQUE (Nombre)
);


-- ── 2. Artículos y las dos tablas que salen de sus arreglos ──
 
-- colección articulos → tabla Articulos (sin los arreglos)
CREATE TABLE Articulos (
    Id           INT IDENTITY(1,1) NOT NULL,
    Titulo       NVARCHAR(120) NOT NULL,
    Descripcion  NVARCHAR(500) NULL,
    Anio         INT           NULL,
    Conservacion NVARCHAR(20)  NOT NULL,
    DuenoId      INT           NOT NULL,    -- era la referencia duenoId
    CONSTRAINT PK_Articulos PRIMARY KEY (Id),
    CONSTRAINT CK_Articulos_Anio CHECK (Anio BETWEEN 1500 AND 2100),
    -- RN-5: solo tres valores de conservación
    CONSTRAINT CK_Articulos_Conservacion
        CHECK (Conservacion IN (N'Excelente', N'Bueno', N'Regular')),
    -- No se puede borrar un dueño que tiene artículos
    CONSTRAINT FK_Articulos_Coleccionistas
        FOREIGN KEY (DuenoId) REFERENCES Coleccionistas(Id)
);
 
-- arreglo categoriaIds → tabla intermedia (muchos a muchos)
CREATE TABLE ArticuloCategorias (
    ArticuloId  INT NOT NULL,
    CategoriaId INT NOT NULL,
    -- Llave compuesta: la pareja artículo-categoría no se repite
    CONSTRAINT PK_ArticuloCategorias
        PRIMARY KEY (ArticuloId, CategoriaId),
    CONSTRAINT FK_ArticuloCategorias_Articulos
        FOREIGN KEY (ArticuloId) REFERENCES Articulos(Id),
    CONSTRAINT FK_ArticuloCategorias_Categorias
        FOREIGN KEY (CategoriaId) REFERENCES Categorias(Id)
);
 
-- arreglo embebido fotos → tabla hija ArticuloFotos
CREATE TABLE ArticuloFotos (
    Id         INT IDENTITY(1,1) NOT NULL,
    ArticuloId INT NOT NULL,
    Url        NVARCHAR(300) NOT NULL,
    CONSTRAINT PK_ArticuloFotos PRIMARY KEY (Id),
    CONSTRAINT FK_ArticuloFotos_Articulos
        FOREIGN KEY (ArticuloId) REFERENCES Articulos(Id)
);


-- ── 3. Subastas y pujas ──
 
-- colección subastas → tabla Subastas
CREATE TABLE Subastas (
    Id         INT IDENTITY(1,1) NOT NULL,
    ArticuloId INT           NOT NULL,      -- era articuloId
    PrecioBase DECIMAL(10,2) NOT NULL,
    Inicio     DATETIME2     NOT NULL,
    Fin        DATETIME2     NOT NULL,
    Estado     NVARCHAR(15)  NOT NULL
        CONSTRAINT DF_Subastas_Estado DEFAULT N'Programada',
    GanadorId  INT           NULL,          -- vacío si no hay ganador
    CONSTRAINT PK_Subastas PRIMARY KEY (Id),
    CONSTRAINT CK_Subastas_PrecioBase CHECK (PrecioBase > 0),
    CONSTRAINT CK_Subastas_Fechas CHECK (Fin > Inicio),
    CONSTRAINT CK_Subastas_Estado CHECK (Estado IN
        (N'Programada', N'Activa', N'Cerrada', N'Cancelada')),
    CONSTRAINT FK_Subastas_Articulos
        FOREIGN KEY (ArticuloId) REFERENCES Articulos(Id),
    -- Si se borra el ganador, la subasta queda sin ganador
    CONSTRAINT FK_Subastas_Ganador
        FOREIGN KEY (GanadorId) REFERENCES Coleccionistas(Id)
        ON DELETE SET NULL
);
 
-- colección pujas → tabla Pujas
CREATE TABLE Pujas (
    Id              INT IDENTITY(1,1) NOT NULL,
    SubastaId       INT           NOT NULL, -- era subastaId
    ColeccionistaId INT           NOT NULL, -- era coleccionistaId
    Monto           DECIMAL(10,2) NOT NULL,
    Fecha           DATETIME2     NOT NULL
        CONSTRAINT DF_Pujas_Fecha DEFAULT SYSDATETIME(),
    CONSTRAINT PK_Pujas PRIMARY KEY (Id),
    CONSTRAINT CK_Pujas_Monto CHECK (Monto > 0),
    CONSTRAINT FK_Pujas_Subastas
        FOREIGN KEY (SubastaId) REFERENCES Subastas(Id),
    CONSTRAINT FK_Pujas_Coleccionistas
        FOREIGN KEY (ColeccionistaId) REFERENCES Coleccionistas(Id)
);
GO
 
-- ── 4. Comprobación: deben aparecer las 7 tablas ──
SELECT name AS Tabla
FROM sys.tables
ORDER BY name;
