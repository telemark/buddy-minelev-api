DECLARE @user varchar(60);
SET @user = '@username';
DECLARE @atGroup varchar(60);
SET @atGroup = '@atferdGroup';
DECLARE @orGroup varchar(60);
SET @orGroup = '@ordenGroup';

-- First
SELECT
  m.ID as groupId
FROM
  dbMetakatalog.dbo.tblMultiValue m
WHERE
  m.StringValue = @user
AND
  m.AttributeName = 'Owner'
AND
  m.ID LIKE '%' + @atGroup + '%';

-- Second
SELECT
  m.ID as groupId,
  o.Description as description,
  n.StringValue as unitId,
  s.DisplayName as unitName,
  s.OrganizationNumber as organizationNumber
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
  m.StringValue = @user
AND
  m.AttributeName = 'Owner'
AND
  o.GroupType in ('Faggruppe', 'Klassegruppe')
AND
  m.id NOT LIKE '%' + @atGroup + '%'
AND
  m.id NOT LIKE '%' + @orGroup + '%';

