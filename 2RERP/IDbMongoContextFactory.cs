using System;

public interface IDbMongoContextFactory
{
    MongoDbContext Get();
}
