DECLARE @studentId varchar(60);
SET @studentId = '@id';
DECLARE @disName varchar(60);
SET @disName = '@search';
SELECT
  o.Firstname as firstName,
  o.Midlename as middleName,
  o.Lastname as lastName,
  o.DisplayName as fullName,
  o.SSN as personalIdNumber,
  o.PrivateMobile as mobilePhone,
  o.PrivateMail as mail,
  m.StringValue as userName
FROM
  dbMetakatalog.dbo.tblMultiValue m,
  dbMetakatalog.dbo.tblObjects o
WHERE
  m.StringValue = o.ID
  AND
  m.ID = @studentId
  AND
  m.AttributeName = 'Member'
  AND
  o.DisplayName LIKE '%' + @disName + '%'
