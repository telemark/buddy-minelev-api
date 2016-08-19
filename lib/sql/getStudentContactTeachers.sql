DECLARE @atGroup varchar(60);
SET @atGroup = '@atferdGroup';
DECLARE @user varchar(60);
SET @user = '@username';

SELECT 
  m.StringValue as username,
  LEFT(m.ID, CHARINDEX('/', m.ID) - 1)  as groupId,
  o.PrivateMail as mail
FROM dbMetakatalog.dbo.tblMultiValue m
  INNER JOIN dbMetakatalog.dbo.tblObjects o ON m.StringValue = o.ID
WHERE m.ID IN
      (SELECT TOP 1 ID
  FROM dbMetakatalog.dbo.tblMultiValue
  WHERE StringValue = @user AND ID LIKE '%' + @atGroup + '%')
  AND m.AttributeName = 'Owner';
