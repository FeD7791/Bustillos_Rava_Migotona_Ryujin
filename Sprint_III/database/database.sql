create table productos (
    id BIGINT,
    nombre VARCHAR(20),
    descripcion VARCHAR(50),
    precio DECIMAL(10,2)

)
INSERT INTO `database`.`productos`
(`id`,
`nombre`,
`descripcion`,
`precio`)
VALUES
(1,
'Colonos de Catan',
'Un excelente juego de mesa para jugar de a 4 jugadores',
10000.00);

INSERT INTO `database`.`productos`
(`id`,
`nombre`,
`descripcion`,
`precio`)
VALUES
(2,
'Seven Wonders',
'Un excelente juego de mesa para 7 jugadores',
20000.00);

INSERT INTO `database`.`productos`
(`id`,
`nombre`,
`descripcion`,
`precio`)
VALUES
(3,
'Relatos de Lovecraft',
'Un libro de Horror y misterio',
5000.00);

INSERT INTO `database`.`productos`
(`id`,
`nombre`,
`descripcion`,
`precio`)
VALUES
(3,
'Relatos de Lovecraft',
'Un libro de Horror y misterio',
5000.00);

INSERT INTO `database`.`productos`
(`id`,
`nombre`,
`descripcion`,
`precio`)
VALUES
(4,
'Mazo de magic',
'Un mazo de 60 cartas listas para jugar',
7000.00);

INSERT INTO `database`.`productos`
(`id`,
`nombre`,
`descripcion`,
`precio`)
VALUES
(5,
'Manga de Berserk',
'Manga de la popular serie Berserk tomo 10',
4000.00);

create table usuarios (
    id BIGINT,
    nombre VARCHAR(20),
    apellido VARCHAR(20),
    correo VARCHAR(20),
    fecha_de_nacimiento DATE,
    contrasenia VARCHAR(80)
)

INSERT INTO `administracion`.`usuarios`
(`id`,
`nombre`,
`apellido`,
`correo`,
`fecha_de_nacimiento`,
`contrasenia`)
VALUES
(1,
'Federico',
'Bustillos',
'fede@gmail.com',
'1991-09-11',
'federico123');