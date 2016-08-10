DECLARE @user varchar(60);
SET @user = '@username';
DECLARE @atGroup varchar(60);
SET @atGroup = '@atferdGroup';

SELECT
  LEFT(ID, CHARINDEX('/', ID) - 1)  as Id
FROM
  dbMetakatalog.dbo.tblMultiValue m
WHERE
  m.StringValue = @user
AND
  m.AttributeName = 'Owner'
AND
  m.ID LIKE '%' + @atGroup + '%';
