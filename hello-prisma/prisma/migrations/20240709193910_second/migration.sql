-- CreateTable
CREATE TABLE `TipoUsuario` (
    `idTipoUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoUsuario` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idTipoUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `idUsuario` INTEGER NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `clave` VARCHAR(500) NOT NULL,
    `tipoUsuario` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipo` (
    `idEquipo` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcionProblema` VARCHAR(191) NOT NULL,
    `propietario` INTEGER NOT NULL,

    PRIMARY KEY (`idEquipo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoServicio` (
    `idtipoServicio` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idtipoServicio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Servicio` (
    `idServicio` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,
    `equipoAreparar` INTEGER NOT NULL,
    `tipoServicio` INTEGER NOT NULL,
    `tecnicoEncargado` INTEGER NOT NULL,

    PRIMARY KEY (`idServicio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetalleFactura` (
    `idDetalleFactura` INTEGER NOT NULL AUTO_INCREMENT,
    `costo` DOUBLE NOT NULL,
    `servicio` INTEGER NOT NULL,

    PRIMARY KEY (`idDetalleFactura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Factura` (
    `idFactura` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL,
    `costo` DOUBLE NOT NULL,
    `cliente` INTEGER NOT NULL,
    `estado` ENUM('enProceso', 'Terminado') NOT NULL,
    `detalleFactura` INTEGER NOT NULL,

    PRIMARY KEY (`idFactura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Persona`(`idPersona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_tipoUsuario_fkey` FOREIGN KEY (`tipoUsuario`) REFERENCES `TipoUsuario`(`idTipoUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipo` ADD CONSTRAINT `Equipo_propietario_fkey` FOREIGN KEY (`propietario`) REFERENCES `Persona`(`idPersona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Servicio` ADD CONSTRAINT `Servicio_equipoAreparar_fkey` FOREIGN KEY (`equipoAreparar`) REFERENCES `Equipo`(`idEquipo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Servicio` ADD CONSTRAINT `Servicio_tipoServicio_fkey` FOREIGN KEY (`tipoServicio`) REFERENCES `TipoServicio`(`idtipoServicio`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Servicio` ADD CONSTRAINT `Servicio_tecnicoEncargado_fkey` FOREIGN KEY (`tecnicoEncargado`) REFERENCES `Persona`(`idPersona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetalleFactura` ADD CONSTRAINT `DetalleFactura_servicio_fkey` FOREIGN KEY (`servicio`) REFERENCES `Servicio`(`idServicio`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_cliente_fkey` FOREIGN KEY (`cliente`) REFERENCES `Persona`(`idPersona`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Factura` ADD CONSTRAINT `Factura_detalleFactura_fkey` FOREIGN KEY (`detalleFactura`) REFERENCES `DetalleFactura`(`idDetalleFactura`) ON DELETE RESTRICT ON UPDATE CASCADE;
