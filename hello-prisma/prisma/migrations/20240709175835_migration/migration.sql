-- CreateTable
CREATE TABLE `TipoDocumento` (
    `idTipoDocumento` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoDoc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idTipoDocumento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Persona` (
    `idPersona` INTEGER NOT NULL AUTO_INCREMENT,
    `pNombre` VARCHAR(191) NOT NULL,
    `sNombre` VARCHAR(191) NULL,
    `pApellid` VARCHAR(191) NOT NULL,
    `sApellido` VARCHAR(191) NULL,
    `documento` VARCHAR(191) NOT NULL,
    `tipoDocumento` INTEGER NOT NULL,

    PRIMARY KEY (`idPersona`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Persona` ADD CONSTRAINT `Persona_tipoDocumento_fkey` FOREIGN KEY (`tipoDocumento`) REFERENCES `TipoDocumento`(`idTipoDocumento`) ON DELETE RESTRICT ON UPDATE CASCADE;
