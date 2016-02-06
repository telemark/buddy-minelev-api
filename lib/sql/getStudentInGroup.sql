DECLARE @groupId varchar(60);
SET @groupId = '@id';
DECLARE @studId varchar(60);
SET @studId = '@studentId'';
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
  m.ID = @groupId
  AND
  m.AttributeName = 'Member'
  AND
  m.StringValue = @studId
