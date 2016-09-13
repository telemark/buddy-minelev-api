SELECT o.Firstname as firstName,
  o.Midlename as middleName,
  o.Lastname as lastName,
  o.DisplayName as fullName,
  o.Username as username,
  o.SSN as personalIdNumber,
  o.PrivateMobile as mobilePhone,
  o.Mail as mail,
  o.PrivateMail as privateMail
  FROM dbMetakatalog.dbo.tblObjects o
  WHERE IsTeacher = 1
  AND Status = 'active'
  AND Description LIKE '%OU=TFK,DC=login,DC=top,DC=no%'
