SELECT o.Firstname as firstName,
  o.Midlename as middleName,
  o.Lastname as lastName,
  o.DisplayName as fullName,
  o.Username as username,
  o.SSN as personalIdNumber,
  o.PrivateMobile as mobilePhone,
  o.Mail as mail,
  o.PrivateMail as privateMail,
  o.Department as department,
  Replace(m.OrganizationNumber, 'NO', '') as organizationNumber
  FROM dbMetakatalog.dbo.tblObjects o
  JOIN dbMetakatalog.dbo.tblObjects m ON m.ID = o.Department
  WHERE o.IsTeacher = 1
  AND o.Status = 'active'
  AND o.Description LIKE '%OU=TFK,DC=login,DC=top,DC=no%'
