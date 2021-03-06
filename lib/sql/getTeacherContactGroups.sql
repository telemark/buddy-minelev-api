-- Henter fag/klasser lærer har tilgang til
DECLARE @groupId varchar(60);
SET @groupId = '@contactGroups';
DECLARE @atGroup varchar(60);
SET @atGroup = '@atferdGroup';
DECLARE @orGroup varchar(60);
SET @orGroup = '@ordenGroup';
DECLARE @prGroup varchar(60);
SET @prGroup = '@proveGroup';

SELECT
  DISTINCT m.ID as id,
  o.Description as description,
  'true' as contactTeacher,
  n.StringValue as unitId,
  s.DisplayName as unitName,
  s.OrganizationNumber as organizationNumber,
  o.GroupType as groupType
FROM
  dbMetakatalog.dbo.tblMultiValue m,
  dbMetakatalog.dbo.tblObjects o
  INNER JOIN
    dbMetakatalog.dbo.tblMultiValue n ON n.ID = o.ID
  INNER JOIN
    dbMetakatalog.dbo.tblObjects s ON s.id = n.StringValue
WHERE
  n.AttributeName = 'Enhet'
  AND
  o.ID = m.ID
  AND
  o.GroupType in ('Faggruppe', 'Klassegruppe')
  AND
  m.ID NOT LIKE '%' + @atGroup + '%'
  AND
  m.ID NOT LIKE '%' + @orGroup + '%'
  AND
  m.ID NOT LIKE '%' + @prGroup + '%'
  AND
  m.ID LIKE @groupId + '%'
