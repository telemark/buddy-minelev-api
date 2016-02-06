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
  m.StringValue = @disName

