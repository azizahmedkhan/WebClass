CREATE TABLE `webclass`.`Users` (`UserId` VARCHAR(300) NOT NULL , `Name` VARCHAR(300) NOT NULL , `Email` VARCHAR(300) NOT NULL , `Password` VARCHAR(40) NOT NULL , `Phone Number` INT(20) NOT NULL , `Role` VARCHAR(100) NOT NULL ) ENGINE = InnoDB;

ALTER TABLE `webclass`.`Users` ADD UNIQUE `UserId` (`UserId`);
ALTER TABLE `Users` CHANGE `UserId` `UserId` INT NOT NULL;