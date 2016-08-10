DECLARE @atGroup varchar(60);
SET @atGroup = '@atferdGroup';
DECLARE @user varchar(60);
SET @user = '@username';

SELECT
  StringValue as username,
  LEFT(ID, CHARINDEX('/', ID) - 1)  as groupId
FROM   dbMetakatalog.dbo.tblMultiValue
WHERE ID IN
      (SELECT TOP 1 ID
        FROM dbMetakatalog.dbo.tblMultiValue
        WHERE StringValue = @user AND ID LIKE '%' + @atGroup + '%')
AND AttributeName = 'Owner';
