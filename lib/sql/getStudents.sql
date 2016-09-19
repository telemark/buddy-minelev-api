SELECT
  ID as username,
  SSN as personalIdNumber,
  Firstname as firstName,
  Midlename as middleName,
  Lastname as lastName,
  DisplayName as fullName,
  Street as street,
  PostalCode as postalCode,
  City as city,
  Department as department,
  Mail as mail,
  PrivatePhone as privatePhone,
  PrivateMobile as privateMobile,
  PrivateMail as privateMail
  FROM
    dbMetakatalog.dbo.tblObjects
  WHERE
    IsPupil = 1 AND
	UserType = 'Elev' AND
	ObjectType = 'Person' AND
	Status = 'active' AND
	BfkPrintID is NULL
